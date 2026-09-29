/* 
    ANDROID DEVELOPER CHALLENGE - SCRIPT
    Catatan untuk Guru: 
    - Untuk mengubah soal, edit array `rawQuestions` di bawah.
    - Untuk mengubah durasi, ubah variabel `EXAM_DURATION_MINUTES`.
    - Sistem ini menggunakan localStorage untuk membatasi 1x pengerjaan per browser.
*/

const EXAM_DURATION_MINUTES = 45;
const TOTAL_QUESTIONS = 25;

// ==========================================
// DATA SOAL (25 Soal Sesuai Spesifikasi)
// ==========================================
const rawQuestions = [
    // LEVEL 1 — KOTLIN ROOKIE (Soal 1-5)
    {
        level: 1, question: "Seorang siswa membuat aplikasi Android menggunakan Android Studio. Ia ingin mengubah tampilan halaman utama aplikasi. File yang paling tepat untuk mengatur tampilan antarmuka jika menggunakan XML adalah...",
        options: [
            { text: "A. AndroidManifest.xml", correct: false },
            { text: "B. build.gradle.kts", correct: false },
            { text: "C. MainActivity.kt", correct: false },
            { text: "D. activity_main.xml", correct: true },
            { text: "E. settings.gradle.kts", correct: false }
        ], xp: 100
    },
    {
        level: 1, question: "Sebuah aplikasi memiliki LoginActivity dan MainActivity. Setelah login berhasil, pengguna ingin membuka MainActivity. Namun Android tidak dapat mengenali Activity tersebut. Salah satu hal yang perlu diperiksa adalah...",
        options: [
            { text: "A. Nama database", correct: false },
            { text: "B. AndroidManifest.xml", correct: true },
            { text: "C. File drawable", correct: false },
            { text: "D. File colors.xml", correct: false },
            { text: "E. File strings.xml", correct: false }
        ], xp: 100
    },
    {
        level: 1, question: "Perhatikan kode berikut:\n\nval nama = \"Andi\"\nnama = \"Budi\"\n\nKetika kode dijalankan terjadi error. Apa penyebabnya?",
        options: [
            { text: "A. String tidak dapat digunakan dalam Kotlin", correct: false },
            { text: "B. nama harus menggunakan tipe Integer", correct: false },
            { text: "C. Variabel val tidak dapat diubah nilainya setelah diberikan nilai", correct: true },
            { text: "D. Kotlin tidak mendukung perubahan data", correct: false },
            { text: "E. Nama variabel tidak boleh menggunakan nama", correct: false }
        ], xp: 150
    },
    {
        level: 1, question: "Perhatikan kode:\n\nval nilai = 78\nif (nilai >= 75) { println(\"Lulus\") } else { println(\"Tidak Lulus\") }\n\nOutput yang dihasilkan adalah...",
        options: [
            { text: "A. Error", correct: false },
            { text: "B. Tidak Lulus", correct: false },
            { text: "C. Lulus", correct: true },
            { text: "D. 78", correct: false },
            { text: "E. true", correct: false }
        ], xp: 100
    },
    {
        level: 1, question: "Perhatikan kode:\n\nval username = \"admin\"\nval password = \"12345\"\nif (username == \"admin\" && password == \"1234\") { println(\"Login berhasil\") } else { println(\"Login gagal\") }\n\nJika program dijalankan, hasilnya adalah...",
        options: [
            { text: "A. Login berhasil", correct: false },
            { text: "B. Login gagal", correct: true },
            { text: "C. Error karena menggunakan &&", correct: false },
            { text: "D. Error karena password berupa String", correct: false },
            { text: "E. Tidak menghasilkan output", correct: false }
        ], xp: 150
    },
    // LEVEL 2 — UI DESIGNER (Soal 6-10)
    {
        level: 2, question: "Sebuah aplikasi memiliki form input nama siswa. Komponen XML yang tepat untuk memungkinkan pengguna mengetik nama adalah...",
        options: [
            { text: "A. TextView", correct: false },
            { text: "B. ImageView", correct: false },
            { text: "C. EditText", correct: true },
            { text: "D. Button", correct: false },
            { text: "E. CheckBox", correct: false }
        ], xp: 100
    },
    {
        level: 2, question: "Programmer ingin menjalankan kode ketika tombol btnSimpan ditekan. Kode yang tepat adalah...",
        options: [
            { text: "A. btnSimpan.onClick()", correct: false },
            { text: "B. btnSimpan.setOnClickListener { // kode }", correct: true },
            { text: "C. btnSimpan.click { }", correct: false },
            { text: "D. Button.click(btnSimpan)", correct: false },
            { text: "E. btnSimpan.start()", correct: false }
        ], xp: 150
    },
    {
        level: 2, question: "Perhatikan kode:\n\nval nama = edtNama.text.toString()\n\nFungsi kode tersebut adalah...",
        options: [
            { text: "A. Menghapus isi EditText", correct: false },
            { text: "B. Mengubah TextView menjadi EditText", correct: false },
            { text: "C. Mengambil teks dari EditText dan mengubahnya menjadi String", correct: true },
            { text: "D. Menyimpan data ke database", correct: false },
            { text: "E. Mengubah String menjadi Integer", correct: false }
        ], xp: 100
    },
    {
        level: 2, question: "Sebuah aplikasi memiliki tombol Login. Programmer ingin menampilkan pesan ketika tombol tersebut ditekan. Komponen yang digunakan untuk melakukan aksi ketika tombol ditekan adalah...",
        options: [
            { text: "A. setText()", correct: false },
            { text: "B. setImageResource()", correct: false },
            { text: "C. setOnClickListener()", correct: true },
            { text: "D. getText()", correct: false },
            { text: "E. setColor()", correct: false }
        ], xp: 100
    },
    {
        level: 2, question: "Sebuah form memiliki: EditText nama, EditText kelas, Button Simpan. Programmer ingin memastikan pengguna tidak menyimpan data ketika nama masih kosong. Kode kondisi yang paling tepat adalah...",
        options: [
            { text: "A. if (nama == \"\") { // tampilkan pesan }", correct: true },
            { text: "B. if (nama != \"\") { // tampilkan pesan kosong }", correct: false },
            { text: "C. if (nama == null) { // semua data dihapus }", correct: false },
            { text: "D. if (nama.length > 100) { }", correct: false },
            { text: "E. if (nama == true) { }", correct: false }
        ], xp: 150
    },
    // LEVEL 3 — ACTIVITY MASTER (Soal 11-15)
    {
        level: 3, question: "Sebuah aplikasi memiliki LoginActivity dan MainActivity. Setelah login berhasil, pengguna harus diarahkan ke MainActivity. Kode yang tepat adalah...",
        options: [
            { text: "A. Intent(MainActivity)", correct: false },
            { text: "B. val intent = Intent(this, MainActivity::class.java)\nstartActivity(intent)", correct: true },
            { text: "C. MainActivity.open()", correct: false },
            { text: "D. Activity.start(MainActivity)", correct: false },
            { text: "E. openActivity(MainActivity)", correct: false }
        ], xp: 200
    },
    {
        level: 3, question: "Programmer ingin mengirim nama pengguna dari LoginActivity ke MainActivity. Kode yang tepat untuk memasukkan data ke Intent adalah...",
        options: [
            { text: "A. intent.putExtra(\"nama\", username)", correct: true },
            { text: "B. intent.send(\"nama\", username)", correct: false },
            { text: "C. intent.addData(username)", correct: false },
            { text: "D. intent.database(username)", correct: false },
            { text: "E. intent.input(username)", correct: false }
        ], xp: 200
    },
    {
        level: 3, question: "Jika Activity sebelumnya mengirim:\nintent.putExtra(\"nama\", \"Andi\")\nCara mengambil data tersebut adalah...",
        options: [
            { text: "A. intent.getData(\"nama\")", correct: false },
            { text: "B. intent.getExtra(\"nama\")", correct: false },
            { text: "C. intent.getStringExtra(\"nama\")", correct: true },
            { text: "D. intent.read(\"nama\")", correct: false },
            { text: "E. intent.receive(\"nama\")", correct: false }
        ], xp: 200
    },
    {
        level: 3, question: "Sebuah aplikasi memiliki tiga halaman: LoginActivity, MainActivity, DetailActivity. Pengguna berada di LoginActivity dan berhasil login. Urutan perpindahan yang benar jika pengguna ingin melihat detail data adalah...",
        options: [
            { text: "A. Login → Detail → Main", correct: false },
            { text: "B. Main → Login → Detail", correct: false },
            { text: "C. Login → Main → Detail", correct: true },
            { text: "D. Detail → Login → Main", correct: false },
            { text: "E. Login → Detail → Login", correct: false }
        ], xp: 150
    },
    {
        level: 3, question: "Perhatikan kode:\nval intent = Intent(this, MainActivity::class.java)\nApa fungsi kode tersebut?",
        options: [
            { text: "A. Membuat database", correct: false },
            { text: "B. Membuat objek Intent untuk menuju MainActivity", correct: true },
            { text: "C. Menghapus MainActivity", correct: false },
            { text: "D. Menutup aplikasi", correct: false },
            { text: "E. Mengubah layout", correct: false }
        ], xp: 150
    },
    // LEVEL 4 — CODE DETECTIVE (Soal 16-20)
    {
        level: 4, question: "Perhatikan kode:\nval nama = edtNama.text.toString()\nbtnSimpan.setOnClickListener { Toast.makeText(this, nama, Toast.LENGTH_SHORT).show() }\nPengguna mengetik nama setelah aplikasi dibuka, tetapi Toast tidak menampilkan nama terbaru. Apa penyebabnya?",
        options: [
            { text: "A. Toast tidak dapat menampilkan String", correct: false },
            { text: "B. Button rusak", correct: false },
            { text: "C. Nilai nama dibaca sebelum tombol ditekan", correct: true },
            { text: "D. Kotlin tidak mendukung String", correct: false },
            { text: "E. Android Studio rusak", correct: false }
        ], xp: 300
    },
    {
        level: 4, question: "Seorang siswa mendapatkan error: Unresolved reference: btnSimpan\nKode: btnSimpan.setOnClickListener { // kode }\nSetelah diperiksa, pada XML tombol memiliki ID: android:id=\"@+id/btnSave\"\nApa penyebabnya?",
        options: [
            { text: "A. Kotlin tidak mendukung Button", correct: false },
            { text: "B. Android Studio tidak mendukung XML", correct: false },
            { text: "C. ID pada Kotlin berbeda dengan ID pada XML", correct: true },
            { text: "D. Firebase belum terhubung", correct: false },
            { text: "E. Database rusak", correct: false }
        ], xp: 300
    },
    {
        level: 4, question: "Perhatikan kode:\nval umur = edtUmur.text.toString()\nif (umur > 17) { Toast.makeText(this, \"Dewasa\", Toast.LENGTH_SHORT).show() }\nKode tersebut menghasilkan error. Apa penyebabnya?",
        options: [
            { text: "A. EditText tidak bisa membaca angka", correct: false },
            { text: "B. umur masih bertipe String sehingga tidak dapat langsung dibandingkan dengan angka", correct: true },
            { text: "C. Toast tidak dapat digunakan", correct: false },
            { text: "D. if tidak dapat digunakan dalam Kotlin", correct: false },
            { text: "E. Android Studio tidak mendukung Integer", correct: false }
        ], xp: 300
    },
    {
        level: 4, question: "Sebuah Button sudah terlihat pada layar, tetapi ketika ditekan tidak terjadi apa-apa. Kode berikut belum dibuat: btnSimpan.setOnClickListener { // proses }. Apa kesimpulan paling tepat?",
        options: [
            { text: "A. Button harus diganti menjadi TextView", correct: false },
            { text: "B. Button belum diberikan event klik", correct: true },
            { text: "C. XML harus dihapus", correct: false },
            { text: "D. Activity harus diganti", correct: false },
            { text: "E. Kotlin tidak mendukung Button", correct: false }
        ], xp: 250
    },
    {
        level: 4, question: "Perhatikan kode:\nval username = edtUsername.text.toString()\nval password = edtPassword.text.toString()\nif (username == \"admin\" && password == \"12345\") { // Login berhasil } else { // Login gagal }\nJika username benar tetapi password salah, apa yang terjadi?",
        options: [
            { text: "A. Login berhasil", correct: false },
            { text: "B. Login gagal", correct: true },
            { text: "C. Program berhenti", correct: false },
            { text: "D. Username otomatis berubah", correct: false },
            { text: "E. Password otomatis diperbaiki", correct: false }
        ], xp: 250
    },
    // LEVEL 5 — FINAL BOSS (Soal 21-25)
    {
        level: 5, question: "Kamu membuat aplikasi login. Pengguna memasukkan username dan password, kemudian menekan tombol Login. Program harus memeriksa kedua data tersebut. Kondisi yang paling tepat adalah...",
        options: [
            { text: "A. if (username == \"admin\" || password == \"12345\")", correct: false },
            { text: "B. if (username = \"admin\" && password = \"12345\")", correct: false },
            { text: "C. if (username == \"admin\" && password == \"12345\")", correct: true },
            { text: "D. if (username != \"admin\" && password != \"12345\")", correct: false },
            { text: "E. if (username === \"admin\" && password === \"12345\")", correct: false }
        ], xp: 300
    },
    {
        level: 5, question: "Sebuah aplikasi memiliki LoginActivity dan MainActivity. Programmer sudah membuat: val intent = Intent(this, MainActivity::class.java). Tetapi ketika tombol Login ditekan, MainActivity tidak terbuka. Apa hal pertama yang perlu diperiksa pada kode setelah pembuatan Intent?",
        options: [
            { text: "A. Apakah startActivity(intent) dipanggil", correct: true },
            { text: "B. Apakah warna Button sudah benar", correct: false },
            { text: "C. Apakah TextView menggunakan warna hitam", correct: false },
            { text: "D. Apakah drawable tersedia", correct: false },
            { text: "E. Apakah ukuran font 16sp", correct: false }
        ], xp: 300
    },
    {
        level: 5, question: "Seorang siswa membuat form: Nama, Kelas, Jurusan. Tetapi aplikasi dapat menyimpan data walaupun semua EditText masih kosong. Solusi yang paling tepat adalah...",
        options: [
            { text: "A. Menghapus semua EditText", correct: false },
            { text: "B. Menambahkan validasi input sebelum proses penyimpanan", correct: true },
            { text: "C. Menghapus Button", correct: false },
            { text: "D. Menghapus Activity", correct: false },
            { text: "E. Mengganti Kotlin dengan Java", correct: false }
        ], xp: 300
    },
    {
        level: 5, question: "Perhatikan kode:\nval nama: String? = null\nprintln(nama.length)\nProgram menghasilkan error. Solusi yang paling aman untuk mengakses panjang String tersebut adalah...",
        options: [
            { text: "A. nama.length()", correct: false },
            { text: "B. nama?.length", correct: true },
            { text: "C. nama.length!", correct: false },
            { text: "D. String.length(nama)", correct: false },
            { text: "E. nama.getLength()", correct: false }
        ], xp: 300
    },
    {
        level: 5, question: "FINAL BOSS: Kamu diminta membuat aplikasi sederhana \"Data Siswa\". 1. Pengguna mengisi nama. 2. Pengguna menekan tombol Simpan. 3. Program harus mengambil input nama. 4. Program memeriksa apakah nama kosong. 5. Jika tidak kosong, tampilkan pesan \"Data berhasil disimpan\". 6. Jika kosong, tampilkan pesan \"Nama harus diisi\". Urutan logika yang paling tepat adalah...",
        options: [
            { text: "A. Tampilkan Toast → ambil input → periksa input", correct: false },
            { text: "B. Ambil input → periksa apakah kosong → tampilkan pesan sesuai kondisi", correct: true },
            { text: "C. Periksa input → hapus EditText → tampilkan Toast", correct: false },
            { text: "D. Buka Activity → hapus input → simpan data", correct: false },
            { text: "E. Tampilkan Toast → hapus input → ambil data", correct: false }
        ], xp: 300
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
    // Cek apakah sudah pernah mengerjakan (localStorage)
    // CATATAN KEAMANAN: Ini hanya pembatasan dasar di sisi klien (browser).
    // Siswa yang paham teknis bisa menghapus localStorage. 
    // Untuk keamanan penuh, diperlukan backend/database.
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
    resumeTimer();
});

// ==========================================
// EXAM LOGIC
// ==========================================
function startExam() {
    // 1. Acak urutan soal
    state.questions = shuffleArray([...rawQuestions]);
    
    // 2. Acak urutan pilihan jawaban untuk setiap soal
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

function resumeTimer() {
    // Timer otomatis jalan karena interval tidak di-clear saat modal muncul,
    // tapi jika ingin pause, bisa clear interval dan start lagi di sini.
    // Untuk kesederhanaan dan anti-cheat, timer TIDAK di-pause saat level up.
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer-display');
    timerEl.textContent = `⏱️ ${formatTime(state.timeLeft)}`;
    
    // Hapus kelas warning sebelumnya
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
    
    // Update UI Info
    document.getElementById('current-q-num').textContent = state.currentQIndex + 1;
    document.getElementById('level-badge').textContent = `LEVEL ${q.level} / 5`;
    document.getElementById('progress-bar').style.width = `${((state.currentQIndex) / TOTAL_QUESTIONS) * 100}%`;
    document.getElementById('question-text').innerText = q.question; // innerText menjaga format \n
    
    // Render Options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = opt.text;
        btn.onclick = () => selectOption(index, btn);
        optionsContainer.appendChild(btn);
    });

    // Reset Next Button & Warning
    document.getElementById('btn-next').classList.add('hidden');
    document.getElementById('warning-msg').classList.add('hidden');
}

function selectOption(index, btnElement) {
    state.selectedOptionIndex = index;
    
    // Visual feedback
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

    // Process Answer
    if (isCorrect) {
        state.correctCount++;
        state.xp += q.xp;
        animateXP();
    } else {
        state.lives = Math.max(0, state.lives - 1);
    }
    
    updateStatsDisplay();

    // Check Level Up (Setelah menjawab soal terakhir di level 1,2,3,4)
    // Level 1 ends at index 4 (soal 5), Level 2 at index 9 (soal 10), dst.
    const isLevelEnd = (state.currentQIndex === 4 || state.currentQIndex === 9 || state.currentQIndex === 14 || state.currentQIndex === 19);
    
    state.currentQIndex++;

    if (isLevelEnd && state.currentQIndex < TOTAL_QUESTIONS) {
        pauseAndShowLevelUp();
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

function pauseAndShowLevelUp() {
    // Opsional: Pause timer jika diinginkan, tapi untuk anti-cheat lebih baik timer terus berjalan.
    // Di sini kita tampilkan modal saja.
    document.getElementById('levelup-modal').classList.remove('hidden');
}

function finishExam() {
    clearInterval(state.timerInterval);
    
    // Kunci ujian di localStorage
    localStorage.setItem('adc_exam_completed', 'true');

    // Hitung Nilai
    const finalScore = Math.round((state.correctCount / TOTAL_QUESTIONS) * 100);
    
    // Hitung Waktu Pengerjaan
    const endTime = new Date();
    const timeSpentSeconds = Math.floor((endTime - state.startTime) / 1000);
    const timeSpentStr = formatTime(timeSpentSeconds);

    // Tentukan Badge
    let badge = { icon: '🚀', text: 'KEEP CODING' };
    if (finalScore >= 90) badge = { icon: '🏆', text: 'ANDROID MASTER' };
    else if (finalScore >= 80) badge = { icon: '💎', text: 'SENIOR DEVELOPER' };
    else if (finalScore >= 70) badge = { icon: '🔥', text: 'JUNIOR DEVELOPER' };
    else if (finalScore >= 60) badge = { icon: '🛠️', text: 'ANDROID APPRENTICE' };

    // Render Hasil
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
