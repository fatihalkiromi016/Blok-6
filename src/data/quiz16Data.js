export const ALL_QUESTIONS = [
  // ── 1. DEFINISI OPERASIONAL & KONSEP "TIME IS BRAIN" (t1 vs t2) (6 Soal) ────
  {
    id: 1, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Berdasarkan rekonseptualisasi ILAE, definisi batas waktu t1 (operational time = 5 menit) pada Status Epileptikus Konvulsivus adalah...",
    options: [
      "Batas waktu di mana kejang konvulsif secara statistik tidak akan berhenti sendiri secara spontan, sehingga intervensi darurat lini pertama harus segera dimulai",
      "Batas waktu terjadinya kematian sel saraf secara irreversibel",
      "Waktu di mana pasien dipastikan sudah mengalami kematian otak",
      "Durasi pemberian obat anestesi inhalasi kontinu di ICU"
    ],
    answer: 0,
    explanation: "t1 (5 menit) adalah batas waktu operasional di mana kejang kemungkinan besar tidak akan berhenti spontan dan intervensi farmakologi lini 1 harus dimulai[cite: 2]."
  },
  {
    id: 2, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Sebaliknya, batas waktu t2 (neuronal damage time = 30 menit) menandakan...",
    options: [
      "Batas waktu di mana aktivitas kejang yang berlanjut mulai memicu kerusakan sel saraf permanen (nekrosis neuronal) dan kecacatan irreversibel",
      "Waktu terbaik untuk memberikan dosis pertama Diazepam rektal",
      "Durasi kejang hilang tanpa bekas setelah pemberian minum air putih",
      "Batas waktu dimulainya kejang fokal tanpa gangguan kesadaran"
    ],
    answer: 0,
    explanation: "t2 (30 menit) adalah titik kritis onset kerusakan sel saraf permanen akibat eksitotoksisitas dan cedera neuron berlanjut[cite: 2]."
  },
  {
    id: 3, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Slogan klinis 'Time is Brain' pada penanganan Status Epileptikus menekankan bahwa...",
    options: [
      "Semakin lama kejang berlangsung, semakin sulit kejang dihentikan akibat perubahan molekuler reseptor dan semakin tinggi risiko kerusakan otak permanen",
      "Pengobatan kejang dapat ditunda hingga 24 jam pertama tanpa risiko",
      "Kerusakan otak hanya terjadi jika kejang berlangsung lebih dari 3 hari",
      "Otak tidak membutuhkan pasokan oksigen selama aktivitas kejang berlangsung"
    ],
    answer: 0,
    explanation: "Konsep 'Time is Brain' menegaskan bahwa keterlambatan terapi menyebabkan pembentukan resistensi obat dan kerusakan struktural otak yang irreversible[cite: 2, 4]."
  },
  {
    id: 4, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Definisi umum dari Status Epileptikus (SE) sebagai kegawatdaruratan neurologis adalah...",
    options: [
      "Kondisi di mana kejang berlangsung secara terus-menerus tanpa pemulihan kesadaran penuh di antara episode bangkitan",
      "Kejang singkat yang berlangsung selama 10 detik lalu pasien sadar dan tertawa",
      "Perasaan pusing yang muncul setelah mengonsumsi makanan pedas",
      "Penurunan tekanan darah mendadak saat berdiri dari posisi duduk"
    ],
    answer: 0,
    explanation: "Status Epileptikus ditandai oleh kejang persisten berulang tanpa jeda pemulihan kesadaran yang adekuat[cite: 2]."
  },
  {
    id: 5, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Mengapa pemberian terapi agresif harus dimulai tepat pada t1 (5 menit) dan tidak menunggu hingga kejang berlangsung 30 menit?",
    options: [
      "Untuk mencegah transisi kejang menjadi fase refrakter yang disertai timbulnya resistensi obat Benzodiazepin",
      "Karena obat lini pertama tidak bekerja di bawah durasi 5 menit",
      "Guna menghindari pemeriksaan laboratorium darah rutin",
      "Agar pasien tidak perlu diberikan akses jalur intravena"
    ],
    answer: 0,
    explanation: "Intervensi dini pada t1 mencegah fenomena internalisasi reseptor GABA-A yang memicu timbulnya kejang refrakter[cite: 2, 4]."
  },
  {
    id: 6, category: "Definisi Operasional & Konsep \"Time is Brain\"",
    question: "Pada penanganan medis darurat, apa tindakan awal pada 'Fase Stabilisasi' (0-5 menit pertama)?",
    options: [
      "Evaluasi ABCD (Airway, Breathing, Circulation), catat durasi kejang, cek GDS, pasang jalur IV, dan monitor tanda vital/EKG",
      "Langsung memberikan induksi Thiopental bolus dosis tinggi tanpa oksigenasi",
      "Melakukan pemeriksaan MRI kepala CITO sebelum memasang jalur IV",
      "Pemberian anestesi inhalasi Isoflurane via ventilator ICU"
    ],
    answer: 0,
    explanation: "Fase stabilisasi (0-5 mnt) berfokus pada ABCD, penghentian kejang hipoglikemia (cek GDS), oksigenasi, dan akses IV[cite: 14]."
  },

  // ── 2. TAHAPAN KLINIS STATUS EPILEPTIKUS (EARLY KE SRSE) (6 Soal) ──────────
  {
    id: 7, category: "Tahapan Klinis Status Epileptikus",
    question: "Fase 'Established Status Epilepticus' (5-20/30 menit) ditandai oleh...",
    options: [
      "Kejang yang gagal dihentikan oleh Benzodiazepin adekuat, sehingga memerlukan intervensi lini kedua dengan Anti-Epilepsi IV non-sedatif (seperti Levetiracetam, Valproat, atau Fosphenytoin)",
      "Kejang yang baru berlangsung 10 detik dan membaik dengan tepukan bahu",
      "Kejang yang berlangsung >24 jam meskipun sudah diberi 3 obat anestesi di ICU",
      "Kejang yang muncul akibat efek samping obat cacing"
    ],
    answer: 0,
    explanation: "Established SE ditandai oleh kegagalan lini 1 (Benzodiazepin) dan membutuhkan OAE lini 2 IV non-sedatif[cite: 3]."
  },
  {
    id: 8, category: "Tahapan Klinis Status Epileptikus",
    question: "Diagnosis 'Refractory Status Epilepticus' (RSE) ditegakkan apabila...",
    options: [
      "Kejang tetap persisten meskipun telah diberikan terapi lini pertama (Benzodiazepin) dan lini kedua (OAE IV) dengan dosis adekuat (durasi >20-30 menit)",
      "Kejang berhenti sempurna dalam 2 menit setelah Diazepam IV",
      "Pasien mengalami kejang demam sederhana pada usia 1 tahun",
      "Gula darah pasien turun hingga 40 mg/dL"
    ],
    answer: 0,
    explanation: "RSE terjadi saat terapi lini 1 dan lini 2 gagal menghentikan kejang, memerlukan keterlibatan tim Anestesi untuk koma terapeutik di ICU[cite: 3]."
  },
  {
    id: 9, category: "Tahapan Klinis Status Epileptikus",
    question: "Kriteria diagnosis 'Super-Refractory Status Epilepticus' (SRSE) adalah...",
    options: [
      "Kejang yang tetap berlangsung atau kambuh kembali 24 jam atau lebih setelah dimulainya pemberian agen anestesi kontinu, termasuk kejang saat dosis anestesi diturunkan (weaning)",
      "Kejang yang berhenti total 5 menit setelah suntikan Lorazepam IV",
      "Kejang yang terjadi hanya saat pasien tidur malam hari",
      "Kejang yang berhasil diatasi dengan Levetiracetam oral dosis tunggal"
    ],
    answer: 0,
    explanation: "SRSE adalah kondisi ekstrem di mana kejang menetap/relaps $\ge 24$ jam setelah infus agen anestesi terapeutik dimulai[cite: 3]."
  },
  {
    id: 10, category: "Tahapan Klinis Status Epileptikus",
    question: "Peran utama Dokter Spesialis Anestesiologi (Sp.An) mulai sangat krusial dimasukkan pada tahapan klinis...",
    options: [
      "Refractory Status Epilepticus (RSE), untuk proteksi jalan napas (intubasi), pemantauan hemodinamik, dan pengawasan agen anestesi IV di ICU",
      "Fase Early SE 1 menit pertama di puskesmas",
      "Kejang demam kompleks yang sudah sadar penuh",
      "Pemeriksaan EEG rawat jalan rutin"
    ],
    answer: 0,
    explanation: "Pada RSE, penggunaan anestetik IV dosis tinggi menekan napas dan hemodinamik, sehingga proteksi airway dan manajemen ICU oleh Sp.An mutlak diperlukan[cite: 3]."
  },
  {
    id: 11, category: "Tahapan Klinis Status Epileptikus",
    question: "Definisi 'Early Status Epilepticus' (0-5 menit) dalam perjalanan klinis adalah...",
    options: [
      "Fase awal di mana kejang baru berlangsung dan respon terhadap agonis GABA-A lini pertama (Diazepam/Lorazepam/Midazolam) masih sangat sensitif",
      "Kondisi kejang yang sudah berlangsung 5 hari berturut-turut",
      "Kejang yang disertai penurunan fungsi ginjal kronis tahap akhir",
      "Kejang yang tidak memerlukan terapi obat sama sekali"
    ],
    answer: 0,
    explanation: "Early SE adalah fase emas di mana sensitivitas reseptor GABA-A permukaan sel masih tinggi terhadap Benzodiazepin[cite: 3, 4]."
  },
  {
    id: 12, category: "Tahapan Klinis Status Epileptikus",
    question: "Fenomena kejang yang kembali muncul saat dokter mencoba menurunkan (tapering/weaning) dosis infus obat anestesi di ICU merupakan tanda dari...",
    options: [
      "Super-Refractory Status Epilepticus (SRSE)",
      "Sembuh sempurna tanpa penyulit",
      "Kejang psikogenik non-epileptik (PNES)",
      "Efek samping intoksikasi asam valproat"
    ],
    answer: 0,
    explanation: "Kejang yang timbul kembali saat proses weaning obat anestesi dikategorikan ke dalam spektrum SRSE[cite: 3]."
  },

  // ── 3. PATOFISIOLOGI & MEKANISME RESISTENSI BENZODIAZEPIN (7 Soal) ─────────
  {
    id: 13, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Penyebab utama timbulnya resistensi total terhadap Benzodiazepin pada kejang refrakter (>20-30 menit) adalah fenomena molekuler berupa...",
    options: [
      "Internalisasi (endositosis) Reseptor GABA-A dari membran pascasinaps ke dalam sel, sehingga Benzodiazepin kehilangan target kerjanya",
      "Peningkatan jumlah reseptor GABA-A di permukaan sel hingga 1000 kali lipat",
      "Penurunan kadar glutamat di celah sinaps secara drastis",
      "Penutupan total kanal ion kalsium dan natrium"
    ],
    answer: 0,
    explanation: "Aktivitas kejang berlanjut memicu internalisasi reseptor GABA-A ke dalam intraseluler, membuat Benzodiazepin tidak lagi memiliki tempat ikatan[cite: 4, 5]."
  },
  {
    id: 14, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Bersamaan dengan hilangnya reseptor GABA-A dari permukaan sel pada kejang refrakter, terjadi fenomena kompensasi buruk berupa...",
    options: [
      "Upregulasi (peningkatan jumlah) reseptor eksitatori NMDA/AMPA Glutamat di membran pascasinaps",
      "Penurunan sensitivitas sel terhadap ion kalsium",
      "Pengecilan ukuran celah sinaptik hingga hilang",
      "Inaktivasi total seluruh saluran ion eksitasi"
    ],
    answer: 0,
    explanation: "Saat reseptor GABA-A tenggelam, terjadi upregulasi reseptor NMDA/AMPA eksitatori, memicu badai listrik yang makin tak terkendali[cite: 4, 5]."
  },
  {
    id: 15, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Dalam analogi 'Pemadam Kebakaran & Pipa Gas', reseptor GABA-A diibaratkan sebagai...",
    options: [
      "Sprinkler Air (yang dapat meleleh/tenggelam saat api kejang terlalu lama membara)",
      "Pipa gas yang menambah pasokan bahan bakar api",
      "Pemantik api pengapian utama",
      "Sirine tanda bahaya di luar gedung"
    ],
    answer: 0,
    explanation: "Reseptor GABA-A dianalogikan sebagai sprinkler air; jika kejang berlangsung lama (20-30 mnt), sprinkler meleleh/internalisasi sehingga air (Benzodiazepin) tidak bisa keluar[cite: 5]."
  },
  {
    id: 16, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Dampak buruk dari aliran masuk Kalsium ($Ca^{2+}$) berlebih secara masif ke dalam sel saraf akibat akumulasi glutamat adalah...",
    options: [
      "Kerusakan mitokondria, eksitotoksisitas, dan kematian sel saraf (nekrosis neuronal)",
      "Peningkatan pembentukan ATP dan perbaikan membran sel saraf",
      "Penghentian kejang secara alami tanpa obat",
      "Pencegahan timbulnya edema otak"
    ],
    answer: 0,
    explanation: "Influks $Ca^{2+}$ berlebih mengaktifkan enzim kaskade lisis dan merusak mitokondria, memicu nekrosis seluler (eksitotoksisitas)[cite: 4]."
  },
  {
    id: 17, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Mekanisme penghentian kejang yang normal oleh Benzodiazepin pada 5 menit pertama adalah...",
    options: [
      "Memperkuat ikatan GABA pada reseptor GABA-A, memicu aliran masuk ion Klorida ($Cl^-$) secara masif sehingga terjadi hiperpolarisasi sel",
      "Memblokir aliran ion klorida agar sel mengalami depolarisasi kuat",
      "Menghambat pelepasan dopamin di substansia nigra",
      "Meningkatkan ekskresi natrium lewat ginjal"
    ],
    answer: 0,
    explanation: "Benzodiazepine meningkatkan frekuensi pembukaan kanal $Cl^-$, memicu penuangan ion negatif yang hiperpolarisasi dan menekan pacu kejang[cite: 4, 8]."
  },
  {
    id: 18, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Mengapa obat anti-epilepsi non-GABAergik (seperti Antagonis NMDA Ketamine) menjadi sangat logis diberikan pada RSE/SRSE?",
    options: [
      "Karena target GABA-A sudah berkurang akibat internalisasi, sementara reseptor NMDA mengalami upregulasi masif sehingga harus diblokir",
      "Karena Ketamine dapat menaikkan fungsi reseptor GABA-A yang hilang",
      "Karena Ketamine tidak dimetabolisme di dalam tubuh",
      "Karena Ketamine merupakan obat lini pertama pada 1 menit pertama"
    ],
    answer: 0,
    explanation: "Ketamine menyasar reseptor NMDA yang sedang mengalami upregulasi, mengatasi celah resistensi obat GABAergik pada RSE[cite: 10, 12]."
  },
  {
    id: 19, category: "Patofisiologi & Mekanisme Resistensi Benzodiazepin",
    question: "Dinamika perubahan sirkuit sinaptik dari Early SE ke Refractory SE dicirikan oleh pergeseran keseimbangan neurotransmiter yaitu...",
    options: [
      "Penurunan inhibisi GABAergik disertai badai transmisi eksitatori Glutamatergik masif",
      "Peningkatan pesat inhibisi GABAergik dan hilangnya glutamat",
      "Hilangnya fungsi seluruh neurotransmiter otonom",
      "Peningkatan asetilkolin tanpa perubahan GABA"
    ],
    answer: 0,
    explanation: "Status Epileptikus refrakter ditandai hilangnya rem GABAergik dan berkuasanya akselerasi Glutamatergik[cite: 4, 12]."
  },

  // ── 4. ANESTETIK INTRAVENA GABA-ERGIK (PROPOFOL, MIDAZOLAM, BARBITURAT) (7 Soal)
  {
    id: 20, category: "Anestetik Intravena GABA-ergik",
    question: "Tujuan utama beralih ke agen anestesi terapeutik via infus kontinu pada RSE/SRSE adalah untuk...",
    options: [
      "Menginduksi koma terapeutik (medically induced coma) guna menekan total aktivitas listrik abnormal di otak (burst suppression)",
      "Membuat pasien terbangun dan dapat berjalan seketika",
      "Menghindari penggunaan monitor EKG dan tekanan darah",
      "Menggantikan fungsi transfusi darah"
    ],
    answer: 0,
    explanation: "Agen anestesi IV diberikan titrasi hingga mencapai pola burst-suppression pada EEG (koma terapeutik) untuk menghentikan bangkitan[cite: 6, 7]."
  },
  {
    id: 21, category: "Anestetik Intravena GABA-ergik",
    question: "Keunggulan utama Propofol (2,6-diisopropylphenol) sebagai agen anestesi pada terapi RSE adalah...",
    options: [
      "Onset aksi sangat cepat (<30 detik) karena kelarutan lipid tinggi, waktu paruh pendek untuk evaluasi neurologis cepat, serta mampu menurunkan TIK dan CMRO2",
      "Tidak pernah menyebabkan hipotensi atau bradikardia",
      "Waktu paruh eliminasi sangat panjang hingga 50 jam",
      "Dapat diberikan secara oral tanpa infus"
    ],
    answer: 0,
    explanation: "Propofol berefek cepat, dapat dihentikan dengan pemulihan cepat untuk periksa kesadaran, serta menurunkan TIK dan metabolik otak[cite: 7, 9]."
  },
  {
    id: 22, category: "Anestetik Intravena GABA-ergik",
    question: "Obat anestesi IV golongan Barbiturat yang menjadi 'Gold Standard' untuk induksi koma terapeutik dan penekanan pola EEG adalah...",
    options: [
      "Thiopental Sodium",
      "Ketamine",
      "Isoflurane",
      "Diazepam rektal"
    ],
    answer: 0,
    explanation: "Thiopental Sodium adalah barbiturat kerja sangat singkat yang menjadi standar emas induksi koma dan supresi elektroensefalografi[cite: 7, 9]."
  },
  {
    id: 23, category: "Anestetik Intravena GABA-ergik",
    question: "Ciri khas farmakokinetik Midazolam infus kontinu dosis tinggi pada lini ketiga RSE adalah...",
    options: [
      "Memiliki onset cepat (~5 menit), namun dapat berisiko akumulasi metabolit dan takifilaksis (toleransi) pada penggunaan jangka panjang",
      "Waktu paruh hingga 100 jam tanpa risiko hipotensi",
      "Bekerja memblokir reseptor NMDA secara kompetitif murni",
      "Merupakan sediaan gas volatil yang dihirup lewat paru"
    ],
    answer: 0,
    explanation: "Midazolam infus larut air, berefek cepat, namun infus berlanjut berisiko takifilaksis dan akumulasi metabolit (terutama pada disfungsi organ)[cite: 7, 8]."
  },
  {
    id: 24, category: "Anestetik Intravena GABA-ergik",
    question: "Mekanisme kerja Thiopental dalam menghentikan kejang pada tingkat seluler adalah...",
    options: [
      "Berikatan pada kompleks reseptor GABA-A, memperpanjang durasi pembukaan kanal Cl-, serta memperkuat neurotransmisi inhibitorik dan supresi kortikal",
      "Menghambat reuptake serotonin di celah sinaps",
      "Memblokir reseptor histamin H1 di hipotalamus",
      "Meningkatkan pelepasan kalsium dari retikulum sarkoplasma"
    ],
    answer: 0,
    explanation: "Barbiturat (Thiopental) memperpanjang durasi pembukaan kanal $Cl^-$, memberikan efek inhibisi yang sangat kuat di otak[cite: 8, 9]."
  },
  {
    id: 25, category: "Anestetik Intravena GABA-ergik",
    question: "Kelemahan farmakokinetik Thiopental yang perlu diwaspadai saat pemulihan (weaning) di ICU adalah...",
    options: [
      "Sangat lipofilik dan memiliki waktu paruh eliminasi sangat panjang (hingga 50 jam), sehingga pasien sangat lambat bangun pasca-infus dihentikan",
      "Onset kerja yang sangat lambat yaitu 5 jam setelah suntikan",
      "Metabolisme 100% terjadi di dalam paru-paru",
      "Tidak dapat menembus sawar darah otak"
    ],
    answer: 0,
    explanation: "Thiopental terakumulasi di jaringan lemak; waktu paruhnya hingga 50 jam memicu efek pasca-anestesi/bangun yang sangat lambat[cite: 8, 9]."
  },
  {
    id: 26, category: "Anestetik Intravena GABA-ergik",
    question: "Manakah obat anestesi IV GABAergik yang diformulasikan dalam emulsi lipid sehingga membutuhkan perhatian ekstra pada kadar trigliserida serum pasien?",
    options: [
      "Propofol",
      "Thiopental",
      "Midazolam",
      "Ketamine"
    ],
    answer: 0,
    explanation: "Propofol dilarutkan dalam emulsi lipid (minyak kedelai/lesitin telur), sehingga pemberian dosis tinggi dapat meningkatkan pasokan kalori lipid dan trigliserida[cite: 7, 9]."
  },

  // ── 5. ANESTETIK NON-GABAERGIK (KETAMINE) & VOLATIL (ISOFLURANE) (6 Soal) ───
  {
    id: 27, category: "Anestetik Non-GABAergik & Volatil",
    question: "Ketamine diklasifikasikan sebagai agen anestesi IV non-GABAergik yang bekerja spesifik sebagai...",
    options: [
      "Antagonis non-kompetitif reseptor N-methyl-D-aspartate (NMDA)",
      "Agonis murni reseptor GABA-A subunit gamma",
      "Inhibitor enzim acetylcholinesterase",
      "Blokir reseptor alfa-1 adrenergik perifer"
    ],
    answer: 0,
    explanation: "Ketamine bekerja memblokir reseptor NMDA (antagonis non-kompetitif), menghentikan efek eksitotoksik glutamat[cite: 8, 10]."
  },
  {
    id: 28, category: "Anestetik Non-GABAergik & Volatil",
    question: "Keuntungan hemodinamik unik penggunaan Ketamine dibanding Propofol atau Thiopental pada pasien RSE yang mengalami syok adalah...",
    options: [
      "Mampu mempertahankan atau meningkatkan stabilitas hemodinamik (tekanan darah) via stimulasi simpatis, saat agen GABAergik memicu hipotensi",
      "Menurunkan tekanan darah hingga nol secara konsisten",
      "Membuat jantung berhenti berdenyut sementara",
      "Menyebabkan efek vasodilatasi perifer masif"
    ],
    answer: 0,
    explanation: "Ketamine merangsang pelepasan katekolamin sistemik, sehingga relatif aman/menstabilkan tekanan darah pada pasien yang hipotensi[cite: 8, 10]."
  },
  {
    id: 29, category: "Anestetik Non-GABAergik & Volatil",
    question: "Agen anestesi inhalasi/volatil yang sering digunakan sebagai terapi eskalasi lanjutan pada Super-Refractory Status Epilepticus (SRSE) di ICU adalah...",
    options: [
      "Isoflurane",
      "Ketamine",
      "Nitrous Oxide ($N_2O$)",
      "Metoksifluran"
    ],
    answer: 0,
    explanation: "Isoflurane memberikan efek antikonvulsan luas via peningkatan inhibisi GABA serta penekanan glutamat pada kasus SRSE[cite: 11]."
  },
  {
    id: 30, category: "Anestetik Non-GABAergik & Volatil",
    question: "Mengapa agen anestesi volatil Sevofluran dan Enfluran cenderung DIHINDARI pada kasus Status Epileptikus?",
    options: [
      "Karena memiliki sifat pro-konvulsan (dapat memicu aktivitas bangkitan atau epileptiform pada EEG)",
      "Karena harganya terlalu murah",
      "Karena tidak bisa masuk ke dalam paru-paru",
      "Karena menyebabkan pewarnaan kulit menjadi hijau"
    ],
    answer: 0,
    explanation: "Sevofluran (dosis tertentu) dan Enfluran dikenal dapat memicu bangkitan epileptiform (pro-konvulsan) sehingga dihindari pada SE[cite: 11]."
  },
  {
    id: 31, category: "Anestetik Non-GABAergik & Volatil",
    question: "Fungsi dari perangkat AnaConDa (Anesthetic Conserving Device) di ruang ICU adalah...",
    options: [
      "Memungkinkan pemberian agen anestesi inhalasi (seperti Isoflurane) secara terkontrol pada pasien dengan ventilator ICU standar di luar kamar operasi",
      "Memantau kadar gula darah secara kontinu lewat kulit",
      "Menyedot lendir saluran napas otomatis",
      "Menginjeksikan suntikan Diazepam tanpa jarum"
    ],
    answer: 0,
    explanation: "AnaConDa adalah alat penghemat/penyalur gas anestesi volatil yang terintegrasi pada sirkuit ventilator ICU[cite: 11]."
  },
  {
    id: 32, category: "Anestetik Non-GABAergik & Volatil",
    question: "Dosis anestesi disosiatif Ketamine pada terapi RSE/SRSE mencakup pemberian loading dosis dan maintenance yaitu...",
    options: [
      "Loading: 1.5 - 2 mg/kgBB IV, dilanjutkan Maintenance: 1 - 10 mg/kgBB/jam",
      "Loading: 100 mg/kgBB IV bolus cepat",
      "Maintenance: 0.01 mcg/kgBB/jam",
      "Loading: 50 gram via pipa NGT"
    ],
    answer: 0,
    explanation: "Dosis standar Ketamine RSE: loading 1.5-2 mg/kgBB dilanjutkan titrasi infus 1-10 mg/kgBB/jam[cite: 8]."
  },

  // ── 6. EFEK SAMPING & KOMPLIKASI TERAPI ANESTESI (PRIS, HIPOTENSI) (6 Soal) ─
  {
    id: 33, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Propofol Related Infusion Syndrome (PRIS) adalah komplikasi fatal yang ditandai oleh...",
    options: [
      "Asidosis metabolik, rabdomiolisis, hiperkalemia, gagal ginjal, aritmia jantung, dan syok kardiogenik refrakter",
      "Hiperglikemia ringan tanpa keluhan",
      "Peningkatan nafsu makan dan hipertensi krisis",
      "Ruam gatal di lipatan siku"
    ],
    answer: 0,
    explanation: "PRIS adalah sindrom mematikan akibat kegagalan rantai respirasi mitokondria pada terapi Propofol dosis tinggi/lama[cite: 8, 9]."
  },
  {
    id: 34, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Faktor risiko utama yang memicu terjadinya Propofol Related Infusion Syndrome (PRIS) di ICU adalah...",
    options: [
      "Pemberian infus Propofol kontinu dosis > 5 mg/kgBB/jam selama lebih dari 48 jam",
      "Pemberian suntikan tunggal Propofol 1 mg/kgBB saat induksi",
      "Penggunaan obat anestesi bersama dengan Parasetamol",
      "Pemberian cairan Infus NaCl 0.9% 500 ml"
    ],
    answer: 0,
    explanation: "Dosis Propofol $> 5\text{ mg/kgBB/jam}$ yang berlangsung melebihi 48 jam merupakan faktor risiko utama PRIS[cite: 8, 9]."
  },
  {
    id: 35, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Efek samping hemodinamik paling sering dari penggunaan infus kontinu Thiopental, Pentobarbital, atau Propofol dosis tinggi di ICU adalah...",
    options: [
      "Hipotensi berat (sehingga sering membutuhkan dukungan vasopressor seperti Norepinefrin)",
      "Hipertensi maligna dengan perdarahan hidung",
      "Peningkatan denyut nadi tanpa perubahan tekanan darah",
      "Penyempitan pembuluh darah ginjal spontan"
    ],
    answer: 0,
    explanation: "Anestetik IV (Propofol & Barbiturat) menekan vasomotor dan inotropik jantung, memicu hipotensi yang sering memerlukan vasopressor[cite: 8, 9, 11]."
  },
  {
    id: 36, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Komplikasi sekunder pada sistem organ lain akibat penggunaan koma anestesi dan ventilasi mekanis jangka panjang pada RSE mencakup...",
    options: [
      "Pneumonia terkait ventilator (VAP), trombosis vena dalam (DVT), ileus paralitik, leukopenia, dan infeksi sistemik/sepsis",
      "Peningkatan kepadatan tulang femur",
      "Pertumbuhan jaringan otak baru secara cepat",
      "Penurunan risiko infeksi nosokomial"
    ],
    answer: 0,
    explanation: "Koma anestesi berkepanjangan meningkatkan imobilitas dan risiko komplikasi nosokomial (VAP, sepsis, DVT, ileus)[cite: 8, 9]."
  },
  {
    id: 37, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Pemeriksaan laboratorium berkala yang WAJIB dipantau untuk mendeteksi dini tanda awal PRIS pada pasien yang mendapat infus Propofol adalah...",
    options: [
      "Analisis Gas Darah (menilai asidosis metabolik), kadar Kalsium/Kalium, Creatine Kinase (CK), dan fungsi ginjal",
      "Pemeriksaan usap mukosa pipi",
      "Kadar vitamin B12 dan asam folat",
      "Pemeriksaan LED dan hitung jenis parasit"
    ],
    answer: 0,
    explanation: "Deteksi PRIS membutuhkan pemantauan ketat terhadap AGD (asidosis), CK (rabdomiolisis), kalium (hiperkalemia), dan fungsi organ[cite: 8, 9]."
  },
  {
    id: 38, category: "Efek Samping & Komplikasi Terapi Anestesi",
    question: "Efek samping psikatomimetik atau persepsi yang khas muncul pasca-pemberian Ketamine saat pasien mulai sadar adalah...",
    options: [
      "Hallusinasi, mimpi buruk (emergence reactions), dan peningkatan tekanan darah/Laju Jantung",
      "Sedasi berat tanpa respon selama 3 minggu",
      "Rasa manis di mulut dan hipoglikemia",
      "Kerusakan pendengaran permanen"
    ],
    answer: 0,
    explanation: "Ketamine dapat memicu fenomena agitasi/halusinasi saat pemulihan (emergence delirium) serta efek simpatomimetik[cite: 8]."
  },

  // ── 7. ALGORITMA PNPK KEMENKES 2026: SE KONVULSIVUS (6 Soal) ───────────────
  {
    id: 39, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Berdasarkan PNPK Kemenkes RI 2026, lini pertama (5-20 menit) untuk penghentian Status Epileptikus Konvulsivus adalah...",
    options: [
      "Diazepam IV (0.15-0.2 mg/kgBB, maks 10 mg/dosis) ATAU Lorazepam IV (0.1 mg/kgBB) ATAU Midazolam IM (10 mg untuk >40kg)",
      "Infus kontinyu Propofol 10 mg/kgBB/jam tanpa bolus",
      "Ketamine IV bolus 10 mg/kgBB",
      "Phenobarbital oral dosis tunggal 5 mg"
    ],
    answer: 0,
    explanation: "Sesuai PNPK Kemenkes 2026, lini 1 (Level A) mencakup Diazepam IV, Lorazepam IV, atau Midazolam IM[cite: 14]."
  },
  {
    id: 40, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Jika akses intravena belum terpasang pada menit awal kejang di luar fasilitas kesehatan, pilihan lini pertama alternatif non-IV adalah...",
    options: [
      "Midazolam IM (10 mg jika BB >40kg) ATAU Diazepam Rektal (0.2-0.5 mg/kgBB, maks 20 mg)",
      "Injeksi Thiopental intramuskular",
      "Inhalasi Isoflurane via masker sederhana",
      "Pemberian sirup asam valproat per oral"
    ],
    answer: 0,
    explanation: "Midazolam IM dan Diazepam rektal merupakan pilihan non-IV cepat lini pertama saat akses IV belum tersedia[cite: 14]."
  },
  {
    id: 41, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Pilihan terapi Lini Kedua (20-40 menit) pada SE Menetap sesuai PNPK Kemenkes 2026 adalah OAE IV dosis tunggal berupa...",
    options: [
      "Fenitoin IV (15-18 mg/kgBB) ATAU Asam Valproat IV (40 mg/kgBB) ATAU Levetiracetam IV (60 mg/kgBB)",
      "Diazepam IV diulang setiap 1 menit sebanyak 20 kali",
      "Induksi koma dengan Isoflurane 2 MAC",
      "Pemberian Parasetamol IV 1000 mg"
    ],
    answer: 0,
    explanation: "Lini kedua (20-40 mnt) menggunakan OAE IV non-sedatif: Fenitoin, Asam Valproat, atau Levetiracetam IV[cite: 14]."
  },
  {
    id: 42, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Berapa kecepatan pemberian maksimal suntikan Fenitoin IV untuk mencegah komplikasi aritmia jantung dan hipotensi berat?",
    options: [
      "Maksimal 50 mg/menit",
      "Maksimal 500 mg/menit",
      "Boleh disuntikkan bolus cepat dalam 2 detik",
      "Maksimal 1 mg/jam"
    ],
    answer: 0,
    explanation: "Fenitoin IV harus diberikan lambat (maks $50\text{ mg/menit}$) untuk menghindari risiko kolaps kardiovaskular dan aritmia[cite: 14]."
  },
  {
    id: 43, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Jika kejang tetap berlanjut pada menit ke 40-60 (SE Refrakter), langkah PNPK Kemenkes 2026 mensyaratkan...",
    options: [
      "Pengulangan terapi lini kedua ATAU pemberian obat anestesi (Thiopental, Midazolam, Pentobarbital, atau Propofol) dengan perawatan ketat di ICU",
      "Pasien diperbolehkan pulang rawat jalan",
      "Pemberian kompres air dingin di kepala tanpa obat",
      "Penghentian seluruh akses oksigenasi"
    ],
    answer: 0,
    explanation: "Menit 40-60 (SE Refrakter) mengharuskan perawatan ICU dan eskalasi ke obat anestesi IV[cite: 14]."
  },
  {
    id: 44, category: "Algoritma PNPK Kemenkes 2026: SE Konvulsivus",
    question: "Tata laksana krisis jika ditemukan pemeriksaan GDS (Gula Darah Sewaktu) < 60 mg/dL pada awal fase stabilisasi adalah...",
    options: [
      "Pemberian Dextrose 40% IV segera",
      "Pemberian Insulin IV 10 Unit",
      "Suntikan Furosemid IV 40 mg",
      "Pemasangan pipa ventilator tanpa dextrose"
    ],
    answer: 0,
    explanation: "Kejang akibat hipoglikemia ($<60\text{ mg/dL}$) diatasi langsung dengan koreksi Dextrose 40% IV[cite: 14]."
  },

  // ── 8. SE NON-KONVULSIVUS, NORSE & TERAPI ESKALASI REFRAKTER (6 Soal) ───────
  {
    id: 45, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Definisi New-Onset Refractory Status Epilepticus (NORSE) adalah...",
    options: [
      "Kondisi klinis di mana RSE muncul mendadak pada pasien TANPA riwayat epilepsi atau kelainan neurologis aktif sebelumnya, tanpa etiologi struktural/metabolik akut yang jelas",
      "Kejang yang sudah dialami pasien sejak lahir setiap hari",
      "Kejang akibat komplikasi langsung trauma kepala terbuka",
      "Status epileptikus yang membaik hanya dengan minum teh hangat"
    ],
    answer: 0,
    explanation: "NORSE adalah RSE onset baru pada individu tanpa riwayat epilepsi sebelumnya, sering dipicu proses neuroinflamasi[cite: 16]."
  },
  {
    id: 46, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Apabila kecurigaan etiologi NORSE mengarah pada proses Autoimun atau Paraneoplastik, terapi spesifik lini atas yang dipertimbangkan adalah...",
    options: [
      "Terapi Imunomodulator (seperti Steroid dosis tinggi, IVIG, atau Plasma Exchange/Plasmapheresis)",
      "Pemberian antibiotik amoxisilin oral",
      "Operasi katarak mata CITO",
      "Pemberian suplemen kalsium dosis tinggi murni"
    ],
    answer: 0,
    explanation: "NORSE beretiologi autoimun/paraneoplastik merespon terapi imunomodulasi (IVIG, Steroid, Plasmapheresis)[cite: 16]."
  },
  {
    id: 47, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Perbedaan klinis utama antara Status Epileptikus Konvulsivus dan Non-Konvulsivus (NCSE) terletak pada...",
    options: [
      "NCSE ditandai perubahan status mental/kesadaran menetap atau penurunan kognitif tanpa adanya gerakan kejang kram otot motorik yang jelas (diagnosis dikonfirmasi via EEG)",
      "NCSE selalu disertai kejang kelojotan seluruh tubuh yang sangat heboh",
      "NCSE tidak membutuhkan terapi medis apapun",
      "NCSE hanya terjadi pada anak usia di bawah 1 bulan"
    ],
    answer: 0,
    explanation: "NCSE ditandai penurunan kesadaran/stupor tanpa aktivitas motorik heboh, sehingga butuh pemantauan EEG kontinu[cite: 15]."
  },
  {
    id: 48, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Terapi alternatif non-farmakologis yang dapat dipertimbangkan pada kasus Super-Refractory SE (SRSE) yang tidak respon obat anestesi adalah...",
    options: [
      "Diet Ketogenik, Terapi Elektrokonvulsif (ECT), Stimulasi Nervus Vagus (VNS), dan Hipotermia Terapeutik",
      "Pemberian minum jus buah pekat",
      "Pijat refleksi telapak kaki murni",
      "Akupunktur jari tangan tanpa obat"
    ],
    answer: 0,
    explanation: "Kasus SRSE dapat mempertimbangkan Diet Ketogenik, ECT, VNS, Hipotermia Terapeutik, atau bedah reseksi[cite: 16]."
  },
  {
    id: 49, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Peran pemantauan cEEG (Continuous Electroencephalography) di ruang ICU pada pasien RSE/SRSE yang dikoma-kan adalah...",
    options: [
      "Memastikan tercapainya target 'Burst Suppression' atau penekanan total elektrografik kejang yang tak terlihat secara fisik (electrographic seizure)",
      "Mengukur kadar gula darah secara kontinu",
      "Menilai ketebalan tulang tengkorak",
      "Menggantikan fungsi kerja ventilator mekanis"
    ],
    answer: 0,
    explanation: "cEEG wajib dipasang di ICU untuk mendeteksi kejang elektrografik tersembunyi dan mentitrasi dosis obat anestesi hingga burst-suppression[cite: 7, 16]."
  },
  {
    id: 50, category: "SE Non-Konvulsivus, NORSE & Terapi Eskalasi",
    question: "Jawaban tebak-tebakan selingan di akhir slide kuliah: 'Ada rumah 1 lantai semuanya berwarna kuning (tembok, jendela, toilet kuning). Warna apakah tangga rumah tersebut?'",
    options: [
      "Tidak ada tangganya (karena rumah 1 lantai!)",
      "Warna kuning juga",
      "Warna putih transparan",
      "Warna cokelat kayu"
    ],
    answer: 0,
    explanation: "Rumah 1 lantai secara logis tidak memiliki tangga! (Pertanyaan humor selingan slide 17)[cite: 17]."
  }
];
