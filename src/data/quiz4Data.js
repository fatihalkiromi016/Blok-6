export const ALL_QUESTIONS = [
  // ── 1. KONSEP ANATOMI (7 Soal) ────────────────────────────────────────────
  {
    id: 1, category: "Konsep Anatomi",
    question: "Definisi kesadaran adalah keadaan sadar terhadap diri sendiri dan lingkungan, yang terdiri dari dua aspek utama yaitu...",
    options: [
      "Bangun (awake) dan tanggap (aware)",
      "Tidur (sleep) dan bergerak (motoric)",
      "Kognisi (cognition) dan memori (memory)",
      "Arousal dan reflek otonom"
    ],
    answer: 0,
    explanation: "Kesadaran (consciousness) didefinisikan sebagai keadaan sadar terhadap diri sendiri dan lingkungan, yang mencakup dua komponen esensial: bangun (awake/arousal) dan tanggap (aware/content)[cite: 5]."
  },
  {
    id: 2, category: "Konsep Anatomi",
    question: "Secara anatomi, struktur yang menentukan tingkat bangun (level of arousal/wakefulness) adalah...",
    options: [
      "Hemisfer serebri bilateral",
      "Ascending Reticular Activating System (ARAS) di batang otak atas dan diensefalon",
      "Medula spinalis servikalis",
      "Serebelum (otak kecil)"
    ],
    answer: 1,
    explanation: "Ascending Reticular Activating System (ARAS) yang membentang di batang otak bagian atas (upper brainstem) dan diensefalon adalah struktur yang menentukan level of arousal (bangun)[cite: 5]."
  },
  {
    id: 3, category: "Konsep Anatomi",
    question: "Dalam analogi lampu untuk kesadaran, jika pasien mengalami penurunan kesadaran akibat disfungsi ARAS, hal ini diibaratkan seperti...",
    options: [
      "Bohlam lampu pecah",
      "Kabel listrik putus",
      "Tombol lampu rusak (tidak menyala)",
      "Listrik padam dari pusat"
    ],
    answer: 2,
    explanation: "Dalam analogi lampu, hemisfer cerebri diibaratkan sebagai bohlam (content), sedangkan ARAS diibaratkan sebagai tombol penyala lampu (level of consciousness). Disfungsi ARAS berarti defek pada tombol lampu[cite: 5]."
  },
  {
    id: 4, category: "Konsep Anatomi",
    question: "Untuk dapat menyebabkan kondisi koma, sebuah lesi di batang otak harus...",
    options: [
      "Melibatkan medula oblongata secara unilateral",
      "Terletak di pons bagian bawah tanpa mengenai retikulum",
      "Melibatkan nervus kranialis secara difus",
      "Melibatkan upper pons dan mesensefalon, serta merusak kedua sisi retikulum paramedian"
    ],
    answer: 3,
    explanation: "Agar koma dapat terjadi akibat lesi batang otak, lesi tersebut harus mengenai upper pons dan mesencephalon, serta menghancurkan kedua sisi dari paramedian reticulum (ascending arousal system bilaterally)[cite: 5]."
  },
  {
    id: 5, category: "Konsep Anatomi",
    question: "\"Content of consciousness\" atau isi kesadaran (fungsi kognitif dan afektif) sangat bergantung pada aktivitas...",
    options: [
      "Korteks serebri, thalamus, dan interaksinya",
      "Medula oblongata dan formasio retikularis",
      "Nervus kranialis III, IV, dan VI",
      "Sistem saraf otonom di hipotalamus"
    ],
    answer: 0,
    explanation: "Content of consciousness bergantung pada aktivitas korteks serebri, thalamus, dan interaksi yang berkelanjutan di antara keduanya[cite: 5]."
  },
  {
    id: 6, category: "Konsep Anatomi",
    question: "Sindrom di mana pasien mengalami quadriplegia dan anarthria, namun kesadaran (awake & aware) tetap utuh serta komunikasi hanya bisa melalui gerakan mata vertikal disebut...",
    options: [
      "Persistent Vegetative State (PVS)",
      "Locked-In Syndrome",
      "Minimally Conscious State",
      "Akinetic mutism"
    ],
    answer: 1,
    explanation: "Locked-In Syndrome ditandai dengan quadriplegia dan anarthria sementara pasien sadar penuh (fully conscious, awake & aware). Komunikasi biasanya masih utuh melalui gerakan mata vertikal atau kedipan[cite: 5]."
  },
  {
    id: 7, category: "Konsep Anatomi",
    question: "Perbedaan utama antara Coma dan Persistent Vegetative State (PVS) adalah...",
    options: [
      "Pasien koma bisa merespons perintah, PVS tidak bisa",
      "Pasien PVS mengalami mati batang otak, koma tidak",
      "Pasien koma tidak memiliki siklus tidur-bangun (mata tertutup), sedangkan PVS matanya bisa terbuka spontan (arousal ada) tanpa ada awareness",
      "Pasien koma memiliki refleks menelan, PVS kehilangan semua refleks"
    ],
    answer: 2,
    explanation: "Pada Koma, siklus tidur-bangun hilang (mata selalu tertutup / tidak awake dan tidak aware). Pada Vegetative State, pasien memasuki fase 'awake' (mata bisa terbuka spontan) namun tetap 'not aware' (tidak mengenali lingkungan)[cite: 5]."
  },

  // ── 2. DERAJAT KESADARAN (7 Soal) ─────────────────────────────────────────
  {
    id: 8, category: "Derajat Kesadaran",
    question: "Kondisi gangguan kesadaran berupa penurunan awareness disertai disorientasi, defisit memori, dan cenderung berfluktuasi dalam waktu singkat (jam-hari) disebut...",
    options: [
      "Stupor",
      "Koma",
      "Lethargy",
      "Delirium"
    ],
    answer: 3,
    explanation: "Berdasarkan definisi DSM, delirium adalah gangguan kesadaran, perubahan kognisi, yang terjadi dalam jangka waktu singkat (jam-hari) dan gejalanya cenderung berfluktuasi[cite: 5]."
  },
  {
    id: 9, category: "Derajat Kesadaran",
    question: "Menurut Plum dan Posner, respons terbaik dari pasien Stupor ketika diberikan rangsang nyeri dalam (deep pain) adalah...",
    options: [
      "Berusaha menepis tangan pemeriksa (localizing response)",
      "Langsung terbangun dan berbicara normal",
      "Hanya mengerang tanpa ada gerakan tubuh",
      "Membuka mata secara spontan tanpa stimulus"
    ],
    answer: 0,
    explanation: "Pada pasien stuporous (stupor), respons terbaik terhadap nyeri dalam (deep pain) adalah berusaha menepis tangan pemeriksa (localizing responses)[cite: 5]."
  },
  {
    id: 10, category: "Derajat Kesadaran",
    question: "Pasien dengan tingkat kesadaran Somnolence (Obtundation) memiliki karakteristik klinis...",
    options: [
      "Respons verbal normal namun agresif",
      "Penurunan minat terhadap lingkungan dan sering tidur, tetapi masih memiliki reaksi menghindar terhadap stimulus nyeri",
      "Sama sekali tidak bereaksi terhadap nyeri eksterm",
      "Bangun penuh tapi tidak mengenali keluarga"
    ],
    answer: 1,
    explanation: "Somnolence (Obtundation) ditandai dengan penurunan alertness ringan-sedang dan minat terhadap lingkungan, di mana pasien sering tertidur tetapi masih bereaksi menghindar (withdrawal) terhadap nyeri[cite: 5]."
  },
  {
    id: 11, category: "Derajat Kesadaran",
    question: "Pada pemeriksaan Glasgow Coma Scale (GCS), mata yang baru terbuka saat pasien dipanggil/diberikan rangsang suara diberi skor...",
    options: [
      "1",
      "2",
      "3",
      "4"
    ],
    answer: 2,
    explanation: "Dalam parameter Eye (GCS), 'Eye opening to speech' (membuka mata dengan rangsang suara) diberi skor 3[cite: 5]."
  },
  {
    id: 12, category: "Derajat Kesadaran",
    question: "Pasien dapat mengeluarkan kata-kata yang tidak membentuk kalimat (inappropriate words) atau tidak nyambung dengan pertanyaan. Skor GCS Verbal pasien tersebut adalah...",
    options: [
      "5",
      "4",
      "2",
      "3"
    ],
    answer: 3,
    explanation: "Untuk parameter Verbal (GCS), skor 3 diberikan jika pasien hanya mengucapkan kata-kata yang tidak berkaitan (inappropriate words) atau tidak membentuk kalimat yang utuh[cite: 5]."
  },
  {
    id: 13, category: "Derajat Kesadaran",
    question: "Pada pemeriksaan respons motorik (GCS), jika pasien menunjukkan postur ekstensi abnormal (decerebrate) saat diberi rangsang nyeri, skor motoriknya adalah...",
    options: [
      "2",
      "3",
      "4",
      "5"
    ],
    answer: 0,
    explanation: "Respons motorik berupa 'Extension to pain (decerebrate)' pada GCS bernilai 2[cite: 5]."
  },
  {
    id: 14, category: "Derajat Kesadaran",
    question: "Tanda klinis postur Decorticate (M=3 pada GCS) adalah...",
    options: [
      "Tangan lurus kaku sejajar dengan tubuh dan jari-jari fleksi",
      "Lengan fleksi (menekuk) ke arah dada, pergelangan melingkar, dan tungkai ekstensi kaku",
      "Lengan dan tungkai tidak menunjukkan tonus sama sekali (flaksid)",
      "Pasien melokalisir sumber nyeri di dada"
    ],
    answer: 1,
    explanation: "Decorticate posturing (fleksi abnormal) memiliki ciri khas di mana lengan menekuk (fleksi) mengarah ke dada (center of body) dengan tungkai lurus kaku[cite: 5]."
  },

  // ── 3. GLASGOW COMA SCALE & FOUR SCORE (6 Soal) ─────────────────────────
  {
    id: 15, category: "Refleks & FOUR",
    question: "Keunggulan Full Outline of Unresponsiveness (FOUR) Score dibandingkan GCS adalah kemampuannya dalam menilai...",
    options: [
      "Respons verbal dan orientasi ruang",
      "Kemampuan memori jangka pendek",
      "Refleks batang otak dan pola pernapasan, serta dapat menilai pasien terintubasi",
      "Kekuatan otot ekstremitas secara detail (skala 0-5)"
    ],
    answer: 2,
    explanation: "FOUR Score mengungguli GCS karena memasukkan evaluasi brainstem reflexes (refleks batang otak), pola pernapasan, serta kemampuannya menilai pasien yang sedang terintubasi tanpa batasan komponen verbal[cite: 5]."
  },
  {
    id: 16, category: "Refleks & FOUR",
    question: "Dalam penilaian FOUR Score untuk komponen Eye Response (E), skor maksimal 4 diberikan jika kelopak mata terbuka, serta mampu...",
    options: [
      "Tetap tertutup saat diberi rangsang nyeri",
      "Terbuka hanya saat diteriaki (loud voice)",
      "Terbuka tapi tidak bisa melacak arah (not tracking)",
      "Melacak arah (tracking) atau berkedip sesuai perintah (blinking to command)"
    ],
    answer: 3,
    explanation: "Pada FOUR Score, skor mata E=4 diberikan bila kelopak mata terbuka, serta pasien mampu melacak arah (tracking) atau berkedip ketika diperintah (blinking to command)[cite: 5]."
  },
  {
    id: 17, category: "Pola Pernapasan",
    question: "Pola pernapasan yang ditandai dengan periode hiperpnea (crescendo-decrescendo) yang diselingi dengan periode apnea selama 10-20 detik disebut...",
    options: [
      "Cheyne-Stokes",
      "Apneustic",
      "Cluster",
      "Ataxic"
    ],
    answer: 0,
    explanation: "Pernapasan Cheyne-Stokes adalah pola di mana hiperpnea progresif (crescendo-decrescendo) bergantian secara berkala dengan jeda apnea (10-20 detik)[cite: 5]."
  },
  {
    id: 18, category: "Pola Pernapasan",
    question: "Pernapasan Cheyne-Stokes umumnya mengindikasikan adanya disfungsi pada area...",
    options: [
      "Medula oblongata",
      "Bihemisferik (kedua hemisfer) atau diensefalon",
      "Pons bagian bawah",
      "Korda spinalis servikal"
    ],
    answer: 1,
    explanation: "Cheyne-Stokes merupakan manifestasi dari disfungsi hemisfer otak secara bilateral (Bihemispheric) atau kerusakan pada area diensefalon[cite: 5]."
  },
  {
    id: 19, category: "Pola Pernapasan",
    question: "Karakteristik pernapasan Central Neurogenic Hyperventilation adalah...",
    options: [
      "Napas dangkal dan ireguler",
      "Inspirasi memanjang dengan jeda di akhir inspirasi",
      "Pernapasan cepat, dalam, teratur (40-50x/menit) menyebabkan alkalosis respiratorik",
      "Sama sekali henti napas (apnea persisten)"
    ],
    answer: 2,
    explanation: "Central Neurogenic Hyperventilation (CNH) memiliki pola pernapasan cepat (40-50x/menit), dalam, dan teratur yang menginduksi respiratory alkalosis sekunder[cite: 5]."
  },
  {
    id: 20, category: "Pola Pernapasan",
    question: "Central Neurogenic Hyperventilation (CNH) umumnya menandakan lesi pada level...",
    options: [
      "Korteks serebri",
      "Thalamus",
      "Medula bagian distal",
      "Batang otak (midbrain dan pons)"
    ],
    answer: 3,
    explanation: "Pola CNH secara struktural mengarah pada lokasi lesi di batang otak, terutama meliputi area midbrain (mesensefalon) dan pons[cite: 5]."
  },

  // ── 4. POLA PERNAPASAN & REFLEKS BATANG OTAK (7 Soal) ───────────────────
  {
    id: 21, category: "Pola Pernapasan",
    question: "Pola pernapasan di mana terdapat fase inspirasi yang memanjang, berhenti pada inspirasi maksimal (pause), lalu ekspirasi, disebut pernapasan...",
    options: [
      "Apneustik",
      "Klaster (Cluster)",
      "Kussmaul",
      "Ataxic"
    ],
    answer: 0,
    explanation: "Pernapasan apneustik (Apneustic breathing) ditandai dengan fase inspirasi yang memanjang (cramping) dan berhenti pada saat inspirasi maksimal sebelum menghembuskan napas[cite: 5]."
  },
  {
    id: 22, category: "Pola Pernapasan",
    question: "Pola pernapasan ataksik (Ataxic breathing) sangat tidak teratur dan bisa mengarah pada henti napas. Lokasi lesinya berada di...",
    options: [
      "Diensefalon",
      "Medula oblongata",
      "Serebelum bagian atas",
      "Lobus frontal"
    ],
    answer: 1,
    explanation: "Ataxic breathing adalah pernapasan tidak teratur yang sering berujung pada henti napas (apnea); ini mengindikasikan kerusakan pada pusat pernapasan di medula (medulla oblongata)[cite: 5]."
  },
  {
    id: 23, category: "Pola Pernapasan",
    question: "Pernapasan yang sangat dalam dengan frekuensi normal atau lambat, biasanya ditemukan pada pasien dengan ketoasidosis diabetikum (DKA), disebut pernapasan...",
    options: [
      "Apneustik",
      "Biot",
      "Kussmaul",
      "Cheyne-Stokes"
    ],
    answer: 2,
    explanation: "Kussmaul Respirations memiliki amplitudo tarikan napas yang sangat tinggi (dalam). Pola ini sering dijumpai sebagai kompensasi asidosis metabolik pada penderita Ketoasidosis Diabetikum[cite: 5]."
  },
  {
    id: 24, category: "Pupil & Kranialis",
    question: "Refleks kornea menilai kelengkapan lengkung refleks batang otak yang diinervasi oleh Nervus Kranialis...",
    options: [
      "N. I dan N. II",
      "N. II dan N. III",
      "N. IX dan N. X",
      "N. V (Trigeminal) dan N. VII (Facial)"
    ],
    answer: 3,
    explanation: "Refleks kornea diperantarai oleh jaras saraf afferen dari N. V (Trigeminal) untuk sensoris usapan kornea, dan efferen dari N. VII (Facial) untuk pergerakan menutup kelopak mata (blink)[cite: 5]."
  },
  {
    id: 25, category: "Pupil & Kranialis",
    question: "Pada pemeriksaan Oculocephalic Reflex (Doll's Eye Phenomenon), respons yang NORMAL (refleks batang otak intak) adalah...",
    options: [
      "Mata bergerak berlawanan arah dengan gerakan putaran kepala",
      "Mata bergerak searah dengan putaran kepala",
      "Satu mata melirik, satu mata diam",
      "Mata bergetar (nistagmus) hebat secara vertikal"
    ],
    answer: 0,
    explanation: "Respons Oculocephalic (Doll's Eye) dikatakan positif/normal jika mata berputar secara konjugat ke arah yang berlawanan dengan arah putaran kepala pasien, mempertahankan fokus fiksasi visual[cite: 5]."
  },
  {
    id: 26, category: "Pupil & Kranialis",
    question: "Uji Oculovestibular dilakukan dengan memasukkan air dingin (Cold caloric) ke dalam telinga pasien koma. Respons normal pada batang otak yang intak adalah...",
    options: [
      "Mata menjauhi telinga yang dirangsang dengan cepat",
      "Mata bergerak (deviasi) secara perlahan ke arah telinga yang diberi air es",
      "Pasien terbangun dan muntah",
      "Tidak ada pergerakan bola mata sama sekali"
    ],
    answer: 1,
    explanation: "Uji kalori dingin (cold caloric / oculovestibular) pada subjek dengan batang otak utuh akan memicu deviasi mata lambat yang bergerak secara konjugat ke arah telinga yang diberi air (Cold H2O)[cite: 5]."
  },
  {
    id: 27, category: "Pupil & Kranialis",
    question: "Doll's eye phenomenon yang NEGATIF (mata ikut bergerak searah dengan putaran kepala) menandakan...",
    options: [
      "Fungsi batang otak masih normal sempurna",
      "Pasien hanya pura-pura koma (malingering)",
      "Adanya lesi pada batang otak (midbrain/pons) atau kemungkinan mati batang otak",
      "Pasien menderita meningitis ringan"
    ],
    answer: 2,
    explanation: "Doll's Eye refleks yang negatif (abnormal), di mana mata pasif mengikuti arah perputaran kepala seolah-olah dipaku, menandakan kerusakan parah (lesi) pada jaras midbrain, pons, atau kondisi mati batang otak[cite: 5]."
  },

  // ── 5. PUPIL & SARAF KRANIAL (4 Soal) ─────────────────────────────────────
  {
    id: 28, category: "Pupil & Kranialis",
    question: "Pasien mengalami herniasi uncal (uncal herniation). Tanda pupil yang paling khas ditemukan pada sisi ipsilateral (sisi yang sama) dengan lesi adalah...",
    options: [
      "Pupil pinpoint dan reaktif",
      "Kedua pupil mengecil simetris",
      "Pupil mid-posisi (3 mm) tak reaktif",
      "Pupil unilateral dilatasi (melebar) dan refleks cahaya negatif (fixed)"
    ],
    answer: 3,
    explanation: "Kompresi N. III okulomotorik akibat Uncal Herniation memicu tanda khas berupa dilatasi pupil unilateral (ipsilateral) yang melebar dan terfiksasi/tidak reaktif terhadap cahaya (fixed)[cite: 5]."
  },
  {
    id: 29, category: "Pupil & Kranialis",
    question: "Pupil pinpoint (sangat kecil) pada penderita koma paling sering mengindikasikan adanya lesi di...",
    options: [
      "Pons (atau intoksikasi opiat/pilokarpin)",
      "Medula oblongata",
      "Lobus oksipitalis",
      "Nervus optikus"
    ],
    answer: 0,
    explanation: "Pupil berukuran sangat kecil (pinpoint) secara klasik menunjukkan adanya kerusakan (lesi) di area pons, atau dapat pula dipicu oleh intoksikasi opioid/opiat[cite: 5]."
  },
  {
    id: 30, category: "Pupil & Kranialis",
    question: "Pupil yang ukurannya mid-posisi (2-5 mm) dan terfiksasi (tidak reaktif terhadap cahaya) menandakan adanya kerusakan fokal di level...",
    options: [
      "Medula spinalis",
      "Midbrain (Mesensefalon)",
      "Diensefalon",
      "Korteks serebri difus"
    ],
    answer: 1,
    explanation: "Pupil terfiksasi (fixed) dalam ukuran mid-posisi menunjukkan gangguan yang merusak jaras saraf parasimpatis maupun simpatis akibat lesi struktural di tingkat midbrain (mesensefalon)[cite: 5]."
  },
  {
    id: 31, category: "Etiologi & Klinis",
    question: "Pada pemeriksaan tanda rangsang meningeal, Kernig Sign dinyatakan positif apabila...",
    options: [
      "Terdapat tahanan di leher saat difleksikan",
      "Fleksi leher memicu fleksi lutut secara otomatis",
      "Timbul rasa nyeri atau tahanan sehingga lutut tidak dapat diekstensikan saat sendi panggul difleksi >135°",
      "Dagu tidak dapat menyentuh dada"
    ],
    answer: 2,
    explanation: "Kernig Sign dinyatakan positif jika saat sendi panggul difleksikan lalu lutut diekstensikan (diluruskan), penderita menahan atau mengeluh nyeri sebelum sudut melampaui 135 derajat[cite: 5]."
  },

  // ── 6. ETIOLOGI, KLINIS & PELACAKAN (9 Soal) ──────────────────────────────
  {
    id: 32, category: "Etiologi & Klinis",
    question: "Saat pemeriksa menekan simfisis pubis pasien dan hal itu memicu fleksi pada kedua tungkai pasien, tanda ini disebut...",
    options: [
      "Kaku Kuduk",
      "Kernig Sign",
      "Brudzinski I",
      "Brudzinski II"
    ],
    answer: 3,
    explanation: "Manuver menekan area simfisis pubis yang direspons dengan reaksi involunter berupa fleksi kedua tungkai pasien merupakan deskripsi klinis dari Brudzinski II[cite: 5]."
  },
  {
    id: 33, category: "Etiologi & Klinis",
    question: "Langkah pertama dalam manajemen darurat pasien dengan penurunan kesadaran (koma) adalah...",
    options: [
      "Resusitasi menggunakan prinsip ABC (Airway, Breathing, Circulation) Neurologi",
      "Langsung melakukan pungsi lumbal di IGD",
      "Memberikan suntikan adrenalin dosis tinggi",
      "Melakukan operasi kraniotomi dekompresi"
    ],
    answer: 0,
    explanation: "Manajemen kedaruratan koma selalu diawali dengan stabilisasi dasar, yaitu resusitasi menggunakan pedoman ABC (Airway, Breathing, Circulation) modifikasi Neurologi[cite: 5]."
  },
  {
    id: 34, category: "Etiologi & Klinis",
    question: "Jika pada pemeriksaan ditemukan fungsi batang otak masih intak, TIDAK ADA tanda lateralisasi, dan TIDAK ADA tanda meningeal, kemungkinan etiologi koma adalah...",
    options: [
      "Tumor fokal di serebelum",
      "Ensefalopati difus, metabolik, atau intoksikasi toksik",
      "Abses otak fokal",
      "Perdarahan subarakhnoid (SAH)"
    ],
    answer: 1,
    explanation: "Pasien koma tanpa defisit fokal (lateralisasi negatif), tanda meningeal negatif, dengan refleks batang otak intak, secara umum mengarah kepada gangguan difus berupa ensefalopati metabolik atau intoksikasi (toksik)[cite: 5]."
  },
  {
    id: 35, category: "Etiologi & Klinis",
    question: "Jika pada pasien koma ditemukan refleks batang otak masih baik, namun ADA tanda lateralisasi (misal hemiparesis, asimetri wajah) tanpa tanda meningeal, etiologinya paling mungkin adalah...",
    options: [
      "Koma diabetikum",
      "Keracunan obat penenang",
      "Lesi struktural supratentorial (misal infark serebri luas atau perdarahan intraserebral)",
      "Meningitis bakterialis"
    ],
    answer: 2,
    explanation: "Hadirnya defisit/tanda lateralisasi fokal (hemiparesis, dll) tanpa iritasi meningeal strongly mengindikasikan adanya lesi struktural anatomis, seperti tumor, infark otak, atau lesi desak ruang supratentorial[cite: 5]."
  },
  {
    id: 36, category: "Etiologi & Klinis",
    question: "Kehadiran tanda meningeal positif (kaku kuduk/Kernig) pada pasien koma, dengan atau tanpa tanda lateralisasi, sangat mengarahkan kecurigaan pada kondisi...",
    options: [
      "Kegagalan fungsi hati (Hepatik ensefalopati)",
      "Tumor pada kelenjar pituitari",
      "Overdosis alkohol dan opiat",
      "Infeksi (Meningitis/Ensefalitis) atau Perdarahan Subarakhnoid (SAH)"
    ],
    answer: 3,
    explanation: "Tanda iritasi selaput otak (Meningeal signs positif) dalam keadaan koma adalah indikator primer dari peradangan/infeksi meningen (Meningitis, ensefalitis) atau kebocoran darah di ruang subarakhnoid (SAH)[cite: 5]."
  },
  {
    id: 37, category: "Etiologi & Klinis",
    question: "Pada Ensefalopati Uremik (akibat gagal ginjal), koma dipicu oleh penumpukan endogen toksin berupa...",
    options: [
      "Dialyzable small molecular toxins (seperti phenolic derivatives)",
      "Penumpukan asam laktat secara eksklusif",
      "Penurunan kadar gula darah ke otak",
      "Karbon monoksida dalam sirkulasi"
    ],
    answer: 0,
    explanation: "Uremia menginduksi ensefalopati dan koma akibat kegagalan ginjal membersihkan molekul toksin endogen berukuran kecil, khususnya derivat fenolik (dialyzable small molecular toxins)[cite: 5]."
  },
  {
    id: 38, category: "Etiologi & Klinis",
    question: "Koma hepatikum (akibat kegagalan liver) terjadi akibat kegagalan eliminasi dan penumpukan substansi toksik utama yaitu...",
    options: [
      "Bilirubin indirek di cairan sendi",
      "Ammonia (NH3)",
      "Beta-hydroxybutyric acid",
      "Kalsium serum yang terlalu tinggi (hiperkalsemia)"
    ],
    answer: 1,
    explanation: "Kegagalan hepar untuk mendetoksifikasi sirkulasi porta menyebabkan eskalasi toksin amonia (NH3) di darah, yang kemudian menembus sawar darah-otak dan memicu koma hepatikum (hepatic coma)[cite: 5]."
  },
  {
    id: 39, category: "Etiologi & Klinis",
    question: "Kondisi hiponatremia akut berat (Na <120 mEq/L) dapat memicu koma melalui mekanisme patologis berupa...",
    options: [
      "Pengkerutan sel neuron karena dehidrasi hipertonik",
      "Pendarahan mikro di kapiler otak",
      "Perpindahan air ke dalam sel (intracellular movement of water) yang menyebabkan pembengkakan neuron (neuronal swelling)",
      "Penurunan laju jantung dan syok kardiogenik"
    ],
    answer: 2,
    explanation: "Hiponatremia akut (Natrium <120 mEq/L) menciptakan kondisi cairan ekstraseluler hipotonik murni, mendesak masuknya cairan (intracellular movement of water) yang membengkakkan jaringan neuron secara masif (neuronal swelling)[cite: 5]."
  },

  // ── 7. HERNIASI OTAK & KASUS KLINIS (11 Soal) ───────────────────────────
  {
    id: 40, category: "Herniasi & Kasus",
    question: "Fenomena patologis di mana uncus dari lobus temporal terdesak bergeser ke bawah melintasi apertura tentorium dan menekan batang otak disebut...",
    options: [
      "Transcalvarial herniation",
      "Tonsillar (foraminal) herniation",
      "Subfalcine herniation",
      "Uncal herniation (Transtentorial)"
    ],
    answer: 3,
    explanation: "Pergeseran struktur uncus otak turun merangsek melewati lekukan tentorium cerebelli dan mendesak batang otak di bawahnya secara anatomis disebut Uncal Herniation (Transtentorial downward herniation)[cite: 5]."
  },
  {
    id: 41, category: "Herniasi & Kasus",
    question: "Gejala awal yang menandakan terjadinya Uncal Herniation sebelum pasien jatuh dalam koma dalam meliputi...",
    options: [
      "Nyeri kepala, mual muntah, perubahan status mental, dan kompresi nervus III (okulomotor)",
      "Demam mendadak, menggigil, dan kejang absens",
      "Kelemahan simetris pada kedua tungkai bawah tanpa pusing",
      "Batuk persisten dan sesak napas tipe Kussmaul"
    ],
    answer: 0,
    explanation: "Sindrom herniasi uncal bermula dari fase peningkatan tekanan rongga intrakranial (sakit kepala, mual, muntah) dan pergeseran mental status, berlanjut pada penekanan ipsilateral saraf okulomotor (N. III) yang berakibat pada dilatasi pupil fiks[cite: 5]."
  },
  {
    id: 42, category: "Herniasi & Kasus",
    question: "Locked-in Syndrome sering kali disalahartikan sebagai koma. Padahal pada Locked-in Syndrome, pasien masih mempertahankan fungsi...",
    options: [
      "Berbicara lancar (anarthria negatif) dan kekuatan tangan normal",
      "Kesadaran penuh (awake & aware), fungsi auditori, visual, dan memori tetap terjaga",
      "Berjalan mondar-mandir tanpa bisa mengingat siapa dirinya",
      "Gerakan kepala ke kanan dan ke kiri secara aktif"
    ],
    answer: 1,
    explanation: "Meskipun tubuh pasien lumpuh secara total tanpa daya verbal, penderita sindrom Locked-in sadar secara penuh (fully conscious) dengan kapasitas emosi, persepsi auditori, memori, dan visual yang awet[cite: 5]."
  },
  {
    id: 43, category: "Herniasi & Kasus",
    question: "Berdasarkan tabel perbedaan gangguan kesadaran, fitur 'Eye Opening' (membuka mata) pada pasien Koma dan Vegetative State memiliki perbedaan spesifik, yaitu...",
    options: [
      "Pasien koma membuka mata saat dipanggil; Vegetative state tidak pernah membuka mata",
      "Pasien koma membuka mata spontan; Vegetative state hanya saat diberi nyeri",
      "Pasien koma tidak membuka mata (None); Vegetative state dapat membuka mata spontan (Spontaneous)",
      "Keduanya sama-sama membuka mata secara spontan"
    ],
    answer: 2,
    explanation: "Dalam pedoman fitur behavioral kesadaran, pasien koma ditandai dengan gagalnya membuka mata pada segala rangsang (None). Namun pada Vegetative state, siklus tidur-bangun sudah memampukan pasien membuka mata secara spontan (Spontaneous) tanpa diiringi oleh kesadaran[cite: 5]."
  },
  {
    id: 44, category: "Derajat Kesadaran",
    question: "Apa yang membedakan tahap 'Lethargy' dengan 'Stupor' dalam gradasi klinis penurunan kesadaran?",
    options: [
      "Lethargy tidak bisa dibangunkan sama sekali; Stupor bisa diajak berdiskusi",
      "Lethargy adalah koma ringan; Stupor adalah koma dalam tanpa refleks",
      "Pada Lethargy pasien marah saat dibangunkan; pada Stupor pasien berhalusinasi",
      "Pada Lethargy penurunan kesadaran masih ringan-sedang; pada Stupor pasien sulit dibangunkan dan butuh stimulus nyeri dalam (deep pain) yang kuat"
    ],
    answer: 3,
    explanation: "Lethargy/obtundation merupakan kemunduran alertness moderat, sedangkan Stupor merupakan tingkatan penurunan kesadaran yang teramat dalam yang mewajibkan pemberian stimulus noksius kuat (deep pain) untuk merangsang pasien agar bangun sesaat[cite: 5]."
  },
  {
    id: 45, category: "Herniasi & Kasus",
    question: "Seorang pasien dilarikan ke IGD dengan keluhan penurunan kesadaran mendadak setelah sebelumnya mengeluh sakit kepala yang sangat hebat ('thunderclap headache'). Pada pemeriksaan, didapatkan refleks cahaya normal, hemiparesis (-), namun terdapat Kaku Kuduk (+). Diagnosis yang paling memungkinkan adalah...",
    options: [
      "Subarachnoid Hemorrhage (SAH)",
      "Hipoglikemia berat",
      "Tumor medula spinalis",
      "Intoksikasi obat sedatif"
    ],
    answer: 0,
    explanation: "Onset koma yang dicetuskan oleh sakit kepala teramat parah sekonyong-konyong (sudden), disusul oleh tanda meningeal kaku kuduk positif mutlak tanpa paralisis sisi (lateralisasi negatif), menuntut diagnosis banding perdarahan subarakhnoid (SAH) spontan[cite: 5]."
  },
  {
    id: 46, category: "Etiologi & Klinis",
    question: "Pada pasien yang jatuh koma murni karena intoksikasi alkohol atau overdosis obat sedatif (tanpa trauma kepala), hasil CT Scan otak biasanya akan menunjukkan gambaran...",
    options: [
      "Perdarahan epidural (EDH) masif",
      "Normal (tidak ada lesi struktural atau massa)",
      "Infark luas di hemisfer kiri",
      "Tumor fossa posterior"
    ],
    answer: 1,
    explanation: "Koma eksogen-metabolik primer tanpa kelainan batang otak semisal keracunan sedatif atau alkohol tidak memicu kerusakan massa anatomi, oleh karena itu imejing CT Scan lazim memperlihatkan morfologi otak yang normal[cite: 5]."
  },
  {
    id: 47, category: "Etiologi & Klinis",
    question: "Berdasarkan rincian anatomi koma, lesi infratentorial (fossa posterior) yang paling dominan menyebabkan koma adalah...",
    options: [
      "Hipofisis apopleksi",
      "Epidural hematoma akibat fraktur temporal",
      "Infark batang otak (brainstem infarct) atau perdarahan pontine",
      "Abses otak di lobus frontal"
    ],
    answer: 2,
    explanation: "Struktur kausal koma infratentorial (subtentorial) disumbang sebagian besarnya oleh komplikasi vaskular di batang otak itu sendiri; mayoritas yaitu stroke iskemik batang otak (brainstem infarct) dan perdarahan pontin (pontine hemorrhage)[cite: 5]."
  },
  {
    id: 48, category: "Pupil & Kranialis",
    question: "Pada evaluasi neurologis pupil, pasien dengan koma akibat lesi di level Diencephalon secara khas akan memiliki ukuran pupil...",
    options: [
      "Pinpoint (1 mm)",
      "Dilatasi unilateral (satu sisi melebar)",
      "Sangat lebar bilateral dan tidak bereaksi (fixed dilated)",
      "Kecil namun masih bereaksi terhadap cahaya (small, reactive)"
    ],
    answer: 3,
    explanation: "Jaras simpatis parsial yang terinterupsi di tahapan atas pada cedera koma akibat area diensefalon menghambat kerja dilator pupil, berujung pada pupil yang konstriksi kecil secara anatomis namun masih mempertahankan daya reaktif refleks (small, reactive)[cite: 5]."
  },
  {
    id: 49, category: "Derajat Kesadaran",
    question: "Lesi struktural yang berada di atas red nucleus (diencephalon) akan menghasilkan postur refleks motorik berupa...",
    options: [
      "Decorticate posturing (Fleksi)",
      "Decerebrate posturing (Ekstensi)",
      "Flaccid paralysis (Lumpuh layuh total)",
      "Kejang tonik-klonik umum"
    ],
    answer: 0,
    explanation: "Cedera kranio-kaudal yang belum turun melewati nucleus ruber (batas red nucleus), atau setara area diensefalon, menyebabkan pasien merespons provokasi nyeri menggunakan postur meringkuk dekortikasi (Decorticate posturing)[cite: 5]."
  },
  {
    id: 50, category: "Herniasi & Kasus",
    question: "Manajemen medis untuk menurunkan Tekanan Intrakranial (TIK) secara akut pada kasus ancaman herniasi meliputi tindakan...",
    options: [
      "Menidurkan pasien terlentang datar (0 derajat), memberikan cairan hipotonik",
      "Elevasi kepala 30 derajat, hiperventilasi, dan terapi hiperosmolar",
      "Melakukan Lumbal Pungsi segera untuk mengeluarkan cairan otak",
      "Memasang intubasi dengan target PCO2 tinggi (hipoventilasi)"
    ],
    answer: 1,
    explanation: "Tindakan gawat-darurat penanggulangan ancaman peningkatan TIK serta mitigasi herniasi akut mencakup upaya menaikkan letak posisi kepala hingga sudut 30 derajat (elevasi), induksi oksigenasi hiperventilasi, serta pemakaian terapi diuretik hiperosmolar (misal: mannitol)[cite: 5]."
  }
];
