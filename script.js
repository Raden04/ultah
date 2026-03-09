// --- Fungsi Utama untuk Memulai Surprise ---
function mulaiSurprise() {
    const namaInput = document.getElementById('inputNama').value;
    const displayNama = document.getElementById('displayNama');
    
    if (namaInput.trim() !== "") {
        // 1. Set Nama di Halaman Utama
        displayNama.innerText = namaInput;
        
        // 2. Pindah Halaman (Sembunyikan Step 1, Munculkan Step 2)
        document.getElementById('step1').classList.add('hidden');
        document.getElementById('step2').classList.remove('hidden');
        
        // 3. Putar Musik Backsound
        const musik = document.getElementById('musikBkg');
        musik.play().catch(error => {
            // Browser mungkin memblokir autoplay, ini antisipasi agar tidak error
            console.log("Autoplay diblokir browser. Musik akan jalan setelah klik tombol lain.");
        });

        // 4. MULAI HUJAN HATI ❤️
        // Membuat hati baru setiap 300ms (0.3 detik)
        setInterval(buatHati, 300);

    } else {
        // Kalau nama kosong
        alert("Isi namanya dulu dong sayang.. Masa tamu tak diundang? 😂");
    }
}

// --- Fungsi Membuat Elemen Hati (Logika Hujan Hati) ---
function buatHati() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    // Variasi emoji hati agar tidak bosan
    const tipeHati = ['❤️', '💖', '💗', '💕', '💘'];
    heart.innerHTML = tipeHati[Math.floor(Math.random() * tipeHati.length)];
    
    // Mengatur posisi horizontal acak (0 sampai 100% lebar layar)
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Mengatur durasi jatuh acak (antara 2 sampai 5 detik) agar alami
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    
    // Mengatur ukuran acak
    heart.style.fontSize = Math.random() * 10 + 15 + 'px';

    // Masukkan ke dalam body
    document.body.appendChild(heart);
    
    // Hapus elemen hati setelah 5 detik agar tidak memberatkan browser
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

// --- Fungsi Fitur Lainnya ---
function putarVN() {
    const vn = document.getElementById('vnAyang');
    const bkg = document.getElementById('musikBkg');
    
    // Kecilkan volume musik agar VN terdengar jelas
    bkg.volume = 0.1; 
    vn.play();
    
    // Saat VN selesai, besarkan kembali volume musik
    vn.onended = function() {
        bkg.volume = 1.0;
    };
}

function tampilPopup() {
    document.getElementById('popup').classList.remove('hidden');
}

function tutupPopup() {
    document.getElementById('popup').classList.add('hidden');
}

function kirimWA() {
    const pesan = document.getElementById('pesanBalik').value;
    // !!! GANTI DENGAN NOMOR WHATSAPP-MU (AWALI DENGAN 62) !!!
    const nomorWA = "6285716511296"; 
    
    if (pesan.trim() !== "") {
        const textToSpaces = pesan.replace(/ /g, "%20"); // Mengubah spasi jadi format link
        const linkWA = `https://wa.me/${nomorWA}?text=Hai!%20Ini%20balasan%20dari%20websitemu:%20${textToSpaces}`;
        window.open(linkWA, '_blank');
    } else {
        alert("Tulis pesannya dulu yaa..");
    }
}