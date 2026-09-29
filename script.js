/* 
    ANDROID DEVELOPER CHALLENGE - SCRIPT (VERSI HOTS & STUDI KASUS)
    Catatan untuk Guru: 
    - Soal telah diubah menjadi berbasis studi kasus (HOTS).
    - Siswa dituntut untuk menganalisis skenario, bukan sekadar menghafal.
    - Untuk mengubah soal, edit array `rawQuestions` di bawah.
*/

const EXAM_DURATION_MINUTES = 45;
const TOTAL_QUESTIONS = 25;

// ==========================================
// DATA SOAL HOTS & STUDI KASUS (25 Soal)
// ==========================================
const rawQuestions = [
    // ==========================================
    // LEVEL 1 — KOTLIN ROOKIE (Analisis Dasar & Logika)
    // ==========================================
    {
        level: 1, 
        question: "STUDI KASUS: Seorang developer membuat aplikasi kalkulator diskon. Ia ingin menyimpan nilai 'PAJAK' sebesar 11% yang nilainya absolut dan tidak boleh berubah selama aplikasi berjalan. Jika ia tidak sengaja menulis kode `PAJAK = 12`, compiler akan memberikan error.\n\nAnalisis: Kata kunci apa yang paling tepat digunakan untuk mendeklarasikan variabel tersebut agar sesuai dengan kebutuhan, dan mengapa?",
        options: [
            { text: "A. var, karena nilainya bisa diubah nanti jika aturan pajak berubah.", correct: false },
            { text: "B. val, karena menjamin immutability (nilai tidak dapat di-reassign) setelah inisialisasi.", correct: true },
            { text: "C. const val, karena hanya ini yang bisa menyimpan angka desimal di Kotlin.", correct: false },
            { text: "D. String, karena pajak sebaiknya disimpan sebagai teks agar aman.", correct: false },
            { text: "E. Dynamic, agar tipe data disesuaikan otomatis saat runtime.", correct: false }
        ], 
        xp: 100
    },
    {
        level: 1, 
        question: "STUDI KASUS: Perhatikan potongan kode berikut yang bertujuan memeriksa kelulusan siswa:\n\nval nilai = edtNilai.text.toString()\nif (nilai >= 75) {\n    txtStatus.text = \"Lulus\"\n} else {\n    txtStatus.text = \"Tidak Lulus\"\n}\n\nAnalisis: Kode di atas akan menghasilkan error kompilasi. Apa akar penyebab masalahnya dan bagaimana solusi yang paling tepat?",
        options: [
            { text: "A. Variabel 'nilai' bertipe String, sehingga tidak bisa dibandingkan langsung dengan Integer. Solusi: gunakan nilai.toIntOrNull() ?: 0", correct: true },
            { text: "B. Fungsi toString() tidak valid di Kotlin. Solusi: hapus toString()", correct: false },
            { text: "C. Operator >= tidak didukung untuk teks. Solusi: gunakan nilai.equals(75)", correct: false },
            { text: "D. EditText tidak bisa diambil nilainya. Solusi: gunakan edtNilai.getValue()", correct: false },
            { text: "E. Kurung kurawal pada if-else salah. Solusi: hapus kurung kurawal", correct: false }
        ], 
        xp: 100
    },
    {
        level: 1, 
        question: "STUDI KASUS: Sebuah fungsi menerima data nama pengguna dari database yang mungkin saja kosong (null). Developer menulis kode:\n\nfun sapaUser(nama: String?) {\n    println(\"Halo, \" + nama.length)\n}\n\nAnalisis: Mengapa kode ini berpotensi menyebabkan aplikasi crash (NullPointerException), dan bagaimana cara memperbaikinya dengan cara paling idiomatik di Kotlin?",
        options: [
            { text: "A. Karena nama bisa null. Perbaikan: gunakan nama!!.length agar dipaksa menjadi non-null.", correct: false },
            { text: "B. Karena nama bisa null. Perbaikan: gunakan Safe Call Operator nama?.length ?: 0", correct: true },
            { text: "C. Karena fungsi println tidak mendukung String. Perbaikan: gunakan print()", correct: false },
            { text: "D. Karena parameter tidak boleh memiliki tanda tanya. Perbaikan: hapus tanda ?", correct: false },
            { text: "E. Karena length bukan fungsi di Kotlin. Perbaikan: gunakan nama.size", correct: false }
        ], 
        xp: 150
    },
    {
        level: 1, 
        question: "STUDI KASUS: Developer ingin membuat perulangan untuk menampilkan 50 daftar nama siswa dari sebuah List ke dalam Logcat. Ia menulis kode:\n\nfor (i in 1..50) {\n    println(listSiswa[i])\n}\n\nAnalisis: Apa potensi bahaya (bug) dari kode di atas jika jumlah elemen di `listSiswa` ternyata hanya 40?",
        options: [
            { text: "A. Tidak ada bahaya, Kotlin akan otomatis menghentikan perulangan.", correct: false },
            { text: "B. Akan terjadi IndexOutOfBoundsException karena mencoba mengakses indeks di luar ukuran list.", correct: true },
            { text: "C. Aplikasi akan menjadi lambat karena perulangan for tidak efisien di Kotlin.", correct: false },
            { text: "D. Variabel 'i' akan menjadi null dan menyebabkan crash.", correct: false },
            { text: "E. List akan otomatis bertambah ukurannya menjadi 50 dengan nilai null.", correct: false }
        ], 
        xp: 100
    },
    {
        level: 1, 
        question: "STUDI KASUS: Perhatikan logika validasi login berikut:\n\nval user = \"admin\"\nval pass = \"123\"\n\nif (user == \"admin\" || pass == \"12345\") {\n    // Buka Aplikasi\n}\n\nAnalisis: Dari sisi keamanan, apa kelemahan fatal dari logika di atas dan bagaimana seharusnya diperbaiki?",
        options: [
            { text: "A. Kelemahan: Menggunakan operator OR (||), sehingga password salah pun tetap bisa masuk jika user benar. Perbaikan: gunakan AND (&&).", correct: true },
            { text: "B. Kelemahan: Variabel tidak menggunakan val. Perbaikan: ganti menjadi var.", correct: false },
            { text: "C. Kelemahan: String dibandingkan dengan ==. Perbaikan: gunakan .equals() saja.", correct: false },
            { text: "D. Kelemahan: Tidak ada else. Perbaikan: tambahkan else { println(\"Gagal\") }", correct: false },
            { text: "E. Kelemahan: Password terlalu pendek. Perbaikan: ganti \"123\" menjadi \"12345678\"", correct: false }
        ], 
        xp: 150
    },

    // ==========================================
    // LEVEL 2 — UI DESIGNER (Analisis UX & Komponen)
    // ==========================================
    {
        level: 2, 
        question: "STUDI KASUS: Sebuah aplikasi formulir pendaftaran memiliki 10 kolom input. Saat pengguna menekan tombol 'Daftar' sementara ada kolom yang kosong, aplikasi hanya menampilkan Toast \"Ada data kosong\" tanpa menunjuk kolom mana yang salah.\n\nAnalisis: Dari prinsip User Experience (UX), mengapa pendekatan ini kurang baik dan apa solusi komponen Android yang lebih tepat?",
        options: [
            { text: "A. Toast terlalu cepat hilang. Solusi: ganti dengan Dialog Fragment.", correct: false },
            { text: "B. Pengguna bingung kolom mana yang salah. Solusi: gunakan setError() pada EditText yang spesifik kosong.", correct: true },
            { text: "C. Toast tidak bisa digunakan di Form. Solusi: gunakan Snackbar.", correct: false },
            { text: "D. Tombol 'Daftar' harus dinonaktifkan selamanya jika ada satu kolom kosong.", correct: false },
            { text: "E. Sebaiknya aplikasi langsung crash agar developer tahu ada yang salah.", correct: false }
        ], 
        xp: 100
    },
    {
        level: 2, 
        question: "STUDI KASUS: Seorang siswa membuat aplikasi chat. Untuk menampilkan 1.000 pesan chat, ia menggunakan LinearLayout vertikal dan menambahkan 1.000 TextView secara manual di dalam loop. Saat diuji di HP, aplikasi menjadi sangat lambat dan sering keluar sendiri (Force Close).\n\nAnalisis: Apa penyebab masalah performa ini dan komponen apa yang seharusnya digunakan?",
        options: [
            { text: "A. LinearLayout tidak mendukung TextView. Solusi: gunakan RelativeLayout.", correct: false },
            { text: "B. Loop for tidak didukung di Kotlin. Solusi: gunakan while.", correct: false },
            { text: "C. Memory overload karena merender 1.000 View sekaligus. Solusi: gunakan RecyclerView dengan pola ViewHolder.", correct: true },
            { text: "D. HP siswa rusak. Solusi: uji di emulator yang lebih kuat.", correct: false },
            { text: "E. TextView tidak efisien. Solusi: ganti semua menjadi Button.", correct: false }
        ], 
        xp: 150
    },
    {
        level: 2, 
        question: "STUDI KASUS: Dalam sebuah ConstraintLayout, sebuah Button (btnSubmit) berada di bawah EditText (edtNama). Namun, di layar HP yang kecil, btnSubmit menutupi/tumpang tindih dengan edtNama.\n\nAnalisis: Atribut ConstraintLayout apa yang lupa ditetapkan atau salah ditetapkan sehingga menyebabkan tumpang tindih tersebut?",
        options: [
            { text: "A. app:layout_constraintWidth_default=\"spread\"", correct: false },
            { text: "B. app:layout_constraintTop_toBottomOf=\"@id/edtNama\" pada btnSubmit", correct: true },
            { text: "C. android:layout_margin=\"0dp\" pada kedua komponen", correct: false },
            { text: "D. app:layout_constraintCircleRadius pada btnSubmit", correct: false },
            { text: "E. android:gravity=\"center\" pada ConstraintLayout", correct: false }
        ], 
        xp: 100
    },
    {
        level: 2, 
        question: "STUDI KASUS: Aplikasi membutuhkan input nomor telepon. Developer menggunakan EditText biasa. Saat diuji, keyboard yang muncul adalah keyboard huruf (QWERTY), sehingga pengguna kesulitan mengetik angka dan simbol '+' atau '*'.\n\nAnalisis: Bagaimana cara paling efisien memperbaiki masalah ini tanpa membuat custom keyboard sendiri?",
        options: [
            { text: "A. Menambahkan android:inputType=\"phone\" pada XML EditText.", correct: true },
            { text: "B. Mengganti EditText menjadi TextView agar tidak bisa diedit.", correct: false },
            { text: "C. Menambahkan android:hint=\"Masukkan Angka\" saja sudah cukup.", correct: false },
            { text: "D. Menggunakan setOnClickListener untuk memunculkan kalkulator.", correct: false },
            { text: "E. Mengubah tipe data variabel di Kotlin menjadi Int.", correct: false }
        ], 
        xp: 100
    },
    {
        level: 2, 
        question: "STUDI KASUS: Sebuah aplikasi menampilkan data yang sedang dimuat dari internet dengan ProgressBar (loading spinner). Namun, setelah data selesai dimuat, ProgressBar tersebut tidak hilang dan menutupi data.\n\nAnalisis: Kesalahan logika apa yang kemungkinan besar terjadi pada kode developer tersebut?",
        options: [
            { text: "A. Developer lupa mengatur visibility ProgressBar menjadi GONE atau INVISIBLE setelah data selesai dimuat.", correct: true },
            { text: "B. Developer salah menggunakan ImageView, bukan ProgressBar.", correct: false },
            { text: "C. Internet di HP sedang lambat, sehingga ProgressBar harus tetap ada.", correct: false },
            { text: "D. ProgressBar hanya bisa digunakan di Activity, bukan di Fragment.", correct: false },
            { text: "E. Developer harus menghapus ProgressBar dari XML dan membuatnya secara manual di Kotlin.", correct: false }
        ], 
        xp: 150
    },

    // ==========================================
    // LEVEL 3 — ACTIVITY MASTER (Navigasi & Lifecycle)
    // ==========================================
    {
        level: 3, 
        question: "STUDI KASUS: Aplikasi memiliki MainActivity dan DetailActivity. Di MainActivity, pengguna mengklik item, lalu aplikasi harus membuka DetailActivity sambil membawa data objek 'Produk' (yang berisi id, nama, harga, dan deskripsi).\n\nAnalisis: Mengapa kita tidak bisa sembarangan menggunakan `intent.putExtra(\"produk\", objekProduk)` begitu saja, dan apa syarat agar objek tersebut bisa dikirim?",
        options: [
            { text: "A. Intent hanya menerima tipe data primitif/String. Objek harus mengimplementasikan interface Parcelable atau Serializable.", correct: true },
            { text: "B. Intent tidak bisa digunakan antar Activity. Harus menggunakan Database.", correct: false },
            { text: "C. Objek 'Produk' harus diubah menjadi file XML terlebih dahulu.", correct: false },
            { text: "D. Kotlin tidak mendukung pengiriman data antar Activity.", correct: false },
            { text: "E. Kita harus memecah objek menjadi 4 intent terpisah.", correct: false }
        ], 
        xp: 200
    },
    {
        level: 3, 
        question: "STUDI KASUS: Pengguna sedang mengisi formulir panjang di Activity A. Tiba-tiba ada telepon masuk, sehingga Activity A masuk ke state `onStop`. Setelah telepon selesai, pengguna kembali ke aplikasi, tetapi semua data yang sudah diketik hilang.\n\nAnalisis: Metode lifecycle apa yang seharusnya dimanfaatkan developer untuk menyimpan state sementara agar data tidak hilang saat konfigurasi berubah atau Activity dihentikan sistem?",
        options: [
            { text: "A. onCreate()", correct: false },
            { text: "B. onSaveInstanceState()", correct: true },
            { text: "C. onDestroy()", correct: false },
            { text: "D. onStart()", correct: false },
            { text: "E. onRestart()", correct: false }
        ], 
        xp: 200
    },
    {
        level: 3, 
        question: "STUDI KASUS: Pengguna berhasil login di LoginActivity dan diarahkan ke MainActivity. Namun, saat pengguna menekan tombol 'Back' (kembali) di MainActivity, aplikasi malah kembali ke LoginActivity (yang seharusnya sudah ditutup).\n\nAnalisis: Flag Intent apa yang harus ditambahkan saat memanggil startActivity agar LoginActivity dihapus dari back stack?",
        options: [
            { text: "A. Intent.FLAG_ACTIVITY_SINGLE_TOP", correct: false },
            { text: "B. Intent.FLAG_ACTIVITY_CLEAR_TOP atau FLAG_ACTIVITY_NEW_TASK", correct: true },
            { text: "C. Intent.FLAG_GRANT_READ_URI_PERMISSION", correct: false },
            { text: "D. Intent.ACTION_VIEW", correct: false },
            { text: "E. Intent.FLAG_DEBUG_LOG_RESOLUTION", correct: false }
        ], 
        xp: 200
    },
    {
        level: 3, 
        question: "STUDI KASUS: Aplikasi ingin membuka halaman website profil sekolah di browser default HP (Chrome/Firefox) ketika tombol 'Kunjungi Web' ditekan.\n\nAnalisis: Jenis Intent apa yang paling tepat digunakan untuk kasus ini, dan bagaimana konstruksinya?",
        options: [
            { text: "A. Explicit Intent, karena kita tahu persis nama package browser pengguna.", correct: false },
            { text: "B. Implicit Intent dengan action ACTION_VIEW dan data Uri.parse(\"https://...\").", correct: true },
            { text: "C. Implicit Intent dengan action ACTION_SEND untuk membagikan link.", correct: false },
            { text: "D. Menggunakan WebView di dalam Activity yang sama, bukan Intent.", correct: false },
            { text: "E. Explicit Intent dengan memanggil class BrowserActivity bawaan Android.", correct: false }
        ], 
        xp: 150
    },
    {
        level: 3, 
        question: "STUDI KASUS: Activity A membuka Activity B untuk memilih foto dari galeri. Setelah pengguna memilih foto, Activity B ditutup, dan Activity A harus menerima hasil (URI foto) tersebut untuk ditampilkan.\n\nAnalisis: Mekanisme modern apa di Android yang direkomendasikan untuk menangani skenario 'meminta hasil dari Activity lain' ini?",
        options: [
            { text: "A. Menggunakan global variable di object companion.", correct: false },
            { text: "B. Menggunakan registerForActivityResult dengan ActivityResultContracts.", correct: true },
            { text: "C. Menyimpan URI ke SharedPreferences lalu membacanya di Activity A.", correct: false },
            { text: "D. Menggunakan Intent.FLAG_ACTIVITY_FORWARD_RESULT saja.", correct: false },
            { text: "E. Memanggil fungsi public di Activity A langsung dari Activity B.", correct: false }
        ], 
        xp: 150
    },

    // ==========================================
    // LEVEL 4 — CODE DETECTIVE (Debugging & Analisis Error)
    // ==========================================
    {
        level: 4, 
        question: "STUDI KASUS: Seorang developer menulis kode untuk mengambil data dari internet (network request) yang memakan waktu 5 detik. Ia menaruh kode tersebut langsung di dalam `btnDownload.setOnClickListener` di Main Thread.\n\nAnalisis: Apa yang akan terjadi pada aplikasi saat tombol ditekan, dan apa nama fenomena error ini?",
        options: [
            { text: "A. Aplikasi akan berjalan normal, hanya saja sedikit lambat.", correct: false },
            { text: "B. Aplikasi akan membeku (freeze) dan memicu ANR (Application Not Responding) karena Main Thread terblokir.", correct: true },
            { text: "C. Kotlin akan otomatis memindahkan kode ke background thread.", correct: false },
            { text: "D. Akan muncul error Compilation Error sebelum aplikasi dijalankan.", correct: false },
            { text: "E. Data akan ter-download dua kali lipat sebagai mekanisme keamanan.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 4, 
        question: "STUDI KASUS: Perhatikan kode berikut:\n\nval textView = findViewById(R.id.txt_judul) as Button\ntextView.text = \"Hello\"\n\nAnalisis: Jika di XML, `txt_judul` sebenarnya adalah sebuah `<TextView>`, apa yang akan terjadi saat baris pertama kode tersebut dieksekusi, dan bagaimana cara mencegahnya?",
        options: [
            { text: "A. Berjalan normal, karena TextView dan Button adalah sama.", correct: false },
            { text: "B. ClassCastException. Pencegahan: gunakan View Binding atau hapus cast 'as Button' yang tidak sesuai.", correct: true },
            { text: "C. NullPointerException. Pencegahan: gunakan tanda tanya (?)", correct: false },
            { text: "D. Error di XML, bukan di Kotlin.", correct: false },
            { text: "E. Aplikasi akan otomatis mengkonversi TextView menjadi Button.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 4, 
        question: "STUDI KASUS: Sebuah aplikasi sering mengalami OutOfMemoryError setelah pengguna memutar-mutar layar (rotate screen) beberapa kali. Developer menyadari bahwa ia membuat anonymous inner class atau Coroutine yang memegang referensi ke `this` (Activity Context) dalam waktu lama.\n\nAnalisis: Apa istilah masalah ini dan bagaimana solusi arsitektural yang baik?",
        options: [
            { text: "A. Memory Leak. Solusi: gunakan ViewModel atau WeakReference, dan hindari memegang Context lebih lama dari lifecycle Activity.", correct: true },
            { text: "B. Stack Overflow. Solusi: tambahkan RAM pada emulator.", correct: false },
            { text: "C. Data Race. Solusi: gunakan kata kunci synchronized.", correct: false },
            { text: "D. Null Pointer. Solusi: inisialisasi variabel di onCreate.", correct: false },
            { text: "E. Ini adalah perilaku normal Android, tidak perlu diperbaiki.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 4, 
        question: "STUDI KASUS: Developer ingin menampilkan daftar nama dari `List<String>`. Ia menulis:\n\nfor (i in 0..listNama.size) {\n    println(listNama[i])\n}\n\nAnalisis: Mengapa kode ini akan selalu menghasilkan `IndexOutOfBoundsException` pada iterasi terakhir, dan bagaimana perbaikan rentang (range) yang benar?",
        options: [
            { text: "A. Karena size menghitung dari 1, sedangkan indeks dari 0. Perbaikan: gunakan `0 until listNama.size` atau `listNama.indices`.", correct: true },
            { text: "B. Karena for loop tidak didukung untuk List. Perbaikan: gunakan while.", correct: false },
            { text: "C. Karena variabel 'i' harus bertipe Double.", correct: false },
            { text: "D. Karena listNama belum diinisialisasi. Perbaikan: beri nilai null.", correct: false },
            { text: "E. Karena println tidak bisa membaca String dari List.", correct: false }
        ], 
        xp: 250
    },
    {
        level: 4, 
        question: "STUDI KASUS: Perhatikan kode validasi password berikut:\n\nfun cekPassword(pass: String): Boolean {\n    if (pass.length > 8) return true\n    return false\n}\n\nAnalisis: Jika pengguna memasukkan password \"12345678\" (tepat 8 karakter), fungsi akan mengembalikan false. Bagaimana cara memperbaiki logika ini agar sesuai dengan aturan \"minimal 8 karakter\"?",
        options: [
            { text: "A. Mengubah > menjadi >= (pass.length >= 8)", correct: true },
            { text: "B. Mengubah 8 menjadi 7", correct: false },
            { text: "C. Menambahkan pass.trim() sebelum pengecekan", correct: false },
            { text: "D. Mengganti return false menjadi return true", correct: false },
            { text: "E. Mengubah tipe data parameter menjadi Int", correct: false }
        ], 
        xp: 250
    },

    // ==========================================
    // LEVEL 5 — FINAL BOSS (Arsitektur & Pemecahan Masalah Kompleks)
    // ==========================================
    {
        level: 5, 
        question: "STUDI KASUS: Sebuah file `MainActivity.kt` memiliki panjang 800 baris. Di dalamnya terdapat kode untuk inisialisasi UI, panggilan API ke server, query database SQLite, dan logika bisnis perhitungan. Aplikasi menjadi sulit di-maintain dan di-test.\n\nAnalisis: Prinsip desain apa yang dilanggar, dan pola arsitektur apa yang paling tepat diterapkan untuk memisahkan tanggung jawab (Separation of Concerns)?",
        options: [
            { text: "A. Prinsip DRY. Solusi: gunakan Copy-Paste agar kode lebih cepat.", correct: false },
            { text: "B. Single Responsibility Principle. Solusi: terapkan arsitektur MVVM (Model-View-ViewModel).", correct: true },
            { text: "C. Prinsip Keindahan Kode. Solusi: ganti semua nama variabel menjadi satu huruf.", correct: false },
            { text: "D. Prinsip Kecepatan. Solusi: pindahkan semua kode ke dalam satu fungsi besar.", correct: false },
            { text: "E. Tidak ada yang salah, 800 baris adalah batas normal di Android.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 5, 
        question: "STUDI KASUS: Dalam arsitektur MVVM, ViewModel perlu memberi tahu Activity bahwa data sudah berhasil diambil dari database agar UI bisa diperbarui. Namun, Activity bisa saja sudah hancur (destroyed) saat data datang.\n\nAnalisis: Komponen Kotlin modern apa yang paling aman digunakan untuk menangani aliran data (data stream) ini agar UI hanya update saat Activity aktif, dan otomatis berhenti saat Activity hancur (mencegah memory leak)?",
        options: [
            { text: "A. Global Variable di Companion Object.", correct: false },
            { text: "B. StateFlow atau LiveData yang di-observe dengan lifecycleScope/viewLifecycleOwner.", correct: true },
            { text: "C. Handler dan Looper manual.", correct: false },
            { text: "D. Menyimpan data ke file TXT lalu dibaca Activity.", correct: false },
            { text: "E. Menggunakan Intent untuk mengirim data dari ViewModel ke Activity.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 5, 
        question: "STUDI KASUS: Aplikasi 'Catatan Offline' harus bekerja tanpa internet. Saat pengguna menekan 'Simpan', data harus masuk ke database lokal (Room), dan UI daftar catatan harus otomatis terupdate tanpa perlu me-refresh halaman secara manual.\n\nAnalisis: Urutan alur (flow) data manakah yang paling tepat dan resilien (tahan banting) untuk skenario ini?",
        options: [
            { text: "A. UI update manual -> Insert ke Database -> Tampilkan Toast.", correct: false },
            { text: "B. Insert ke Database -> UI mengamati (observe) perubahan Database -> UI update otomatis.", correct: true },
            { text: "C. Kirim data ke Server -> Tunggu respon -> Simpan ke Database -> Update UI.", correct: false },
            { text: "D. Hapus semua data di Database -> Insert data baru -> Restart Activity.", correct: false },
            { text: "E. Simpan di SharedPreferences -> Baca di onCreate -> Tampilkan.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 5, 
        question: "STUDI KASUS: Perhatikan kode penanganan error berikut:\n\ntry {\n    val hasil = 10 / 0\n} catch (e: Exception) {\n    txtHasil.text = \"Terjadi kesalahan\"\n}\n\nAnalisis: Meskipun kode ini tidak crash, mengapa menangkap `Exception` secara umum (broad catch) dianggap sebagai praktik yang buruk (bad practice) dalam pengembangan profesional?",
        options: [
            { text: "A. Karena membuat aplikasi menjadi lebih lambat.", correct: false },
            { text: "B. Karena bisa menyembunyikan bug lain yang tidak terduga (misal: NullPointerException) dan menyulitkan proses debugging.", correct: true },
            { text: "C. Karena Kotlin tidak mendukung blok try-catch.", correct: false },
            { text: "D. Karena variabel 'e' tidak digunakan, sehingga boros memori.", correct: false },
            { text: "E. Karena seharusnya menggunakan if-else, bukan try-catch.", correct: false }
        ], 
        xp: 300
    },
    {
        level: 5, 
        question: "STUDI KASUS FINAL: Anda diminta mereview kode teman yang berisi validasi formulir registrasi:\n\nfun validasi(nama: String?, email: String?, pass: String?): String? {\n    if (nama == \"\") return \"Nama kosong\"\n    if (!email.contains(\"@\")) return \"Email tidak valid\"\n    if (pass.length < 6) return \"Password terlalu pendek\"\n    return null // Null artinya sukses\n}\n\nAnalisis: Temukan potensi bug fatal (crash) pada kode di atas jika fungsi dipanggil dengan `validasi(null, \"test@test.com\", \"123456\")`, dan bagaimana memperbaikinya?",
        options: [
            { text: "A. Tidak ada bug, kode sudah sempurna.", correct: false },
            { text: "B. Crash pada `nama == \"\"` karena nama bisa null. Perbaikan: gunakan `nama.isNullOrEmpty()`.", correct: true },
            { text: "C. Crash pada `email.contains` karena email bisa null. Perbaikan: hapus parameter email.", correct: false },
            { text: "D. Crash pada `pass.length` karena pass bisa null. Perbaikan: ganti < menjadi >.", correct: false },
            { text: "E. Fungsi tidak boleh mengembalikan String?, harus Boolean.", correct: false }
        ], 
        xp: 300
    }
];

// ==========================================
// STATE MANAGEMENT
// ==========================================
let state = {
    userName: '',
    userClass: '',
    userCode: '',
    questions: [],
    currentQIndex: 0,
    correctCount: 0,
    xp: 0,
    lives: 3,
    timeLeft: EXAM_DURATION_MINUTES * 60,
    timerInterval: null,
    selectedOptionIndex: null,
    startTime: null
};

// ==========================================
// UTILITY FUNCTIONS
// ==========================================
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function formatTime(seconds) {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
}

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
    document.getElementById(viewId).classList.remove('hidden');
}

// ==========================================
// INITIALIZATION
// ==========================================
window.onload = () => {
    if (localStorage.getItem('adc_exam_completed') === 'true') {
        showView('locked-view');
        return;
    }
    showView('landing-view');
};

// ==========================================
// EVENT LISTENERS
// ==========================================
document.getElementById('start-form').addEventListener('submit', (e) => {
    e.preventDefault();
    state.userName = document.getElementById('input-nama').value.trim();
    state.userClass = document.getElementById('input-kelas').value.trim();
    state.userCode = document.getElementById('input-kode').value.trim();

    if (!state.userName || !state.userClass || !state.userCode) {
        alert("Harap isi semua data!");
        return;
    }

    startExam();
});

document.getElementById('btn-next').addEventListener('click', handleNextQuestion);
document.getElementById('btn-continue-level').addEventListener('click', () => {
    document.getElementById('levelup-modal').classList.add('hidden');
});

// ==========================================
// EXAM LOGIC
// ==========================================
function startExam() {
    state.questions = shuffleArray([...rawQuestions]);
    state.questions.forEach(q => {
        q.options = shuffleArray([...q.options]);
    });

    state.startTime = new Date();
    showView('exam-view');
    startTimer();
    renderQuestion();
}

function startTimer() {
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
        state.timeLeft--;
        updateTimerDisplay();

        if (state.timeLeft <= 0) {
            clearInterval(state.timerInterval);
            finishExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer-display');
    timerEl.textContent = `⏱️ ${formatTime(state.timeLeft)}`;
    
    timerEl.classList.remove('timer-warning-10', 'timer-warning-5', 'timer-warning-1');

    if (state.timeLeft <= 60) {
        timerEl.classList.add('timer-warning-1');
    } else if (state.timeLeft <= 300) {
        timerEl.classList.add('timer-warning-5');
    } else if (state.timeLeft <= 600) {
        timerEl.classList.add('timer-warning-10');
    }
}

function renderQuestion() {
    const q = state.questions[state.currentQIndex];
    state.selectedOptionIndex = null;
    
    document.getElementById('current-q-num').textContent = state.currentQIndex + 1;
    document.getElementById('level-badge').textContent = `LEVEL ${q.level} / 5`;
    document.getElementById('progress-bar').style.width = `${((state.currentQIndex) / TOTAL_QUESTIONS) * 100}%`;
    
    // Menggunakan innerText agar format \n (baris baru) pada studi kasus terbaca dengan baik
    document.getElementById('question-text').innerText = q.question; 
    
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('warning-msg').classList.add('hidden');
}

function selectOption(index, btnElement) {
    state.selectedOptionIndex = index;
    document.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
    btnElement.classList.add('selected');
    
    document.getElementById('btn-next').classList.remove('hidden');
    document.getElementById('warning-msg').classList.add('hidden');
}

function handleNextQuestion() {
    if (state.selectedOptionIndex === null) {
        document.getElementById('warning-msg').classList.remove('hidden');
        return;
    }

    const q = state.questions[state.currentQIndex];
    const isCorrect = q.options[state.selectedOptionIndex].correct;

    if (isCorrect) {
        state.correctCount++;
        state.xp += q.xp;
        animateXP();
    } else {
        state.lives = Math.max(0, state.lives - 1);
    }
    
    updateStatsDisplay();

    const isLevelEnd = (state.currentQIndex === 4 || state.currentQIndex === 9 || state.currentQIndex === 14 || state.currentQIndex === 19);
    state.currentQIndex++;

    if (isLevelEnd && state.currentQIndex < TOTAL_QUESTIONS) {
        document.getElementById('levelup-modal').classList.remove('hidden');
    } else if (state.currentQIndex >= TOTAL_QUESTIONS) {
        finishExam();
    } else {
        renderQuestion();
    }
}

function updateStatsDisplay() {
    document.getElementById('xp-display').textContent = `⭐ XP: ${state.xp}`;
    let hearts = '';
    for (let i = 0; i < state.lives; i++) hearts += '❤️ ';
    for (let i = state.lives; i < 3; i++) hearts += '🖤 ';
    document.getElementById('lives-display').textContent = hearts.trim();
}

function animateXP() {
    const xpEl = document.getElementById('xp-display');
    xpEl.classList.add('xp-animate');
    setTimeout(() => xpEl.classList.remove('xp-animate'), 400);
}

function finishExam() {
    clearInterval(state.timerInterval);
    localStorage.setItem('adc_exam_completed', 'true');

    const finalScore = Math.round((state.correctCount / TOTAL_QUESTIONS) * 100);
    const endTime = new Date();
    const timeSpentSeconds = Math.floor((endTime - state.startTime) / 1000);
    const timeSpentStr = formatTime(timeSpentSeconds);

    let badge = { icon: '🚀', text: 'KEEP CODING' };
    if (finalScore >= 90) badge = { icon: '🏆', text: 'ANDROID MASTER' };
    else if (finalScore >= 80) badge = { icon: '💎', text: 'SENIOR DEVELOPER' };
    else if (finalScore >= 70) badge = { icon: '🔥', text: 'JUNIOR DEVELOPER' };
    else if (finalScore >= 60) badge = { icon: '🛠️', text: 'ANDROID APPRENTICE' };

    document.getElementById('res-nama').textContent = state.userName;
    document.getElementById('res-kelas').textContent = state.userClass;
    document.getElementById('res-kode').textContent = state.userCode;
    document.getElementById('res-tanggal').textContent = new Date().toLocaleDateString('id-ID', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('res-score').textContent = finalScore;
    document.getElementById('res-correct').textContent = state.correctCount;
    document.getElementById('res-wrong').textContent = TOTAL_QUESTIONS - state.correctCount;
    document.getElementById('res-xp').textContent = state.xp;
    document.getElementById('res-time').textContent = timeSpentStr;
    document.getElementById('res-badge-icon').textContent = badge.icon;
    document.getElementById('res-badge-text').textContent = badge.text;

    showView('result-view');
}
