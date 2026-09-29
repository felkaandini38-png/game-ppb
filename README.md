# ANDROID DEVELOPER CHALLENGE

Website ujian online berbentuk game untuk siswa SMK jurusan Rekayasa Perangkat Lunak (RPL). Dibangun menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa framework berat atau backend.

## 🚀 Cara Menjalankan Website
1. Download atau clone repository ini.
2. Buka file `index.html` langsung di browser (Chrome, Firefox, Edge, atau browser HP).
3. Atau gunakan ekstensi "Live Server" di VS Code untuk pengalaman development yang lebih baik.

## ⚙️ Cara Mengganti Konten (Untuk Guru)
Semua pengaturan mudah ditemukan di dalam file `script.js`:

1. **Mengganti Nama Sekolah/Judul**: Edit bagian `<h1>` dan `<p class="subtitle">` di `index.html`.
2. **Mengganti Soal**: Cari variabel `const rawQuestions = [...]` di `script.js`. Anda bisa mengubah teks `question`, pilihan `options`, dan nilai `xp`. Pastikan hanya satu `correct: true` per soal.
3. **Mengubah Durasi Ujian**: Ubah nilai `const EXAM_DURATION_MINUTES = 45;` di baris paling atas `script.js`.
4. **Mengubah Logo/Icon**: Ganti emoji di bagian `.header-decoration` di `index.html` atau tambahkan tag `<img>` jika memiliki file logo.

## 🌐 Cara Upload ke GitHub & Mengaktifkan GitHub Pages
1. Buat repository baru di GitHub (misal: `ujian-android-rpl`).
2. Upload 4 file (`index.html`, `style.css`, `script.js`, `README.md`) ke repository tersebut.
3. Buka **Settings** > **Pages** (di sidebar kiri).
4. Pada bagian **Branch**, pilih `main` (atau `master`) dan folder `/ (root)`, lalu klik **Save**.
5. Tunggu 1-2 menit. GitHub akan memberikan link (misal: `https://username.github.io/ujian-android-rpl/`). Bagikan link ini ke siswa.

## ⚠️ Penjelasan Pembatasan LocalStorage
Sistem ini menggunakan `localStorage` browser untuk menandai bahwa perangkat telah menyelesaikan ujian (`adc_exam_completed = true`). 
- **Kelebihan**: Mudah, tidak butuh server, mencegah siswa iseng mengulang di HP yang sama.
- **Kekurangan**: Siswa yang paham teknis bisa menghapus data browser (Clear Cache/History) untuk mengulang. 
- **Solusi Jangka Panjang**: Ini adalah versi *frontend-only*. Untuk keamanan tingkat tinggi (anti-cheat penuh), sistem perlu dikembangkan menggunakan backend (Node.js/PHP) dan database (MySQL/Firebase) untuk memvalidasi identitas dan menyimpan status pengerjaan di server.

## 🛠️ Cara Mengembangkan ke Backend/Database (Tahap Lanjut)
Jika ingin mengembangkan sistem ini agar lebih aman:
1. Ganti form pendaftaran di `index.html` untuk mengirim data ke API backend.
2. Pindahkan array `rawQuestions` ke database agar tidak bisa dilihat melalui "Inspect Element" di browser.
3. Gunakan token sesi (JWT) untuk memastikan hanya siswa terdaftar yang bisa mengakses.
4. Simpan jawaban dan nilai akhir ke database saat tombol "SELESAI" ditekan, bukan di `localStorage`.

---
*Dibuat untuk keperluan edukasi SMK RPL. Selamat menguji kompetensi!*
