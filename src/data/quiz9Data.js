export const ALL_QUESTIONS = [
  // ── 1. ANATOMI, FISIOLOGI & ALARM TUBUH (6 Soal) ──────────────────────────
  {
    id: 1, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Manakah pernyataan yang BENAR mengenai perbedaan antara cemas normal (adaptif) dan gangguan cemas (patologis)?",
    options: [
      "Cemas normal merupakan sinyal peringatan bahaya yang membantu fokus, bersiap, dan mereda setelah ancaman selesai; sedangkan gangguan cemas tidak seimbang dengan stimulus, menetap, dan mengganggu fungsi",
      "Cemas normal terjadi tanpa ada stimulus nyata, sedangkan gangguan cemas selalu memiliki stimulus berbahaya",
      "Cemas normal berlangsung bertahun-tahun tanpa mereda",
      "Gangguan cemas tidak pernah menimbulkan gejala somatik/fisik"
    ],
    answer: 0,
    explanation: "Cemas normal bersifat adaptif untuk menyiapkan respons terhadap bahaya dan mereda saat ancaman hilang[cite: 11]. Gangguan cemas muncul berlebihan, tidak proporsional, menetap, dan mengganggu fungsi harian[cite: 11]."
  },
  {
    id: 2, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Struktur otak yang berfungsi sebagai pusat deteksi ancaman cepat dan mengaktifkan respons alarm tubuh pada sirkuit takut adalah...",
    options: [
      "Amigdala",
      "Korteks Prefrontal",
      "Hippocampus",
      "Serebelum"
    ],
    answer: 0,
    explanation: "Amigdala merupakan struktur kunci deteksi ancaman cepat yang mengaktifkan sistem simpatis dan HPA axis[cite: 11]. Korteks prefrontal berfungsi dalam regulasi top-down[cite: 11]."
  },
  {
    id: 3, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Aktivasi sistem saraf simpatis saat respons cemas memicu gejala otonom seperti...",
    options: [
      "Palpitasi (dada berdebar), napas cepat/sesak, tremor, dan peningkatan kewaspadaan",
      "Penurunan denyut jantung dan penyempitan pupil mendadak",
      "Peningkatan nafsu makan dan kejang tonik-klonik universal",
      "Hipotermia berat dan penurunan tekanan darah sistolik"
    ],
    answer: 0,
    explanation: "Aktivasi simpatis memicu hiperaktivitas otonom berupa peningkatan denyut jantung (palpitasi), napas cepat, keringat dingin, tremor, dan ketegangan otot[cite: 11]."
  },
  {
    id: 4, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Peran Hipokampus (Hippocampus) dalam sirkuit neurobiologi cemas adalah...",
    options: [
      "Memberikan konteks memori terhadap ancaman dan memperkuat kewaspadaan",
      "Menghasilkan hormon insulin secara langsung",
      "Mengontrol gerakan involunter ekstremitas bawah",
      "Memblokir pelepasan kortisol dari kelenjar adrenal"
    ],
    answer: 0,
    explanation: "Hippocampus berperan dalam mengolah memori kontekstual ancaman yang dapat memperkuat kewaspadaan (hipervigilansi) saat terpapar stimulus serupa[cite: 11]."
  },
  {
    id: 5, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Sumbu neuroendokrin yang teraktivasi saat stres dan cemas berlanjut hingga melepaskan hormon kortisol adalah...",
    options: [
      "HPA Axis (Hypothalamic-Pituitary-Adrenal Axis)",
      "Sumbu Renin-Angiotensin-Aldosteron",
      "Sumbu Hipotalamus-Pituitari-Tiroid",
      "Jaras Nigrostriatal"
    ],
    answer: 0,
    explanation: "Aktivasi sirkuit cemas memicu HPA axis melalui pelepasan CRH -> ACTH -> Kortisol dari korteks adrenal[cite: 11]."
  },
  {
    id: 6, category: "Anatomi, Fisiologi & Alarm Tubuh",
    question: "Mengapa perilaku menghindar (avoidance behavior) justru memperkuat rasa cemas dalam jangka panjang?",
    options: [
      "Karena menghindar memberikan rasa lega sesaat, sehingga mencegah otak belajar bahwa situasi tersebut sebenarnya aman",
      "Karena menghindar meningkatkan kadar hormon tiroid secara mendadak",
      "Karena menghindar merusak struktur anatomi korteks prefrontal secara permanen",
      "Karena menghindar secara langsung memicu konversi menjadi psikosis"
    ],
    answer: 0,
    explanation: "Menghindar memberi rasa lega jangka pendek (negative reinforcement), tetapi mencegah proses habituasi dan memperkuat keyakinan bahwa situasi tersebut berbahaya[cite: 11]."
  },

  // ── 2. ETIOLOGI BIOPSIKOSOSIAL & BIOKIMIA (6 Soal) ───────────────────────
  {
    id: 7, category: "Etiologi Biopsikososial & Biokimia",
    question: "Ketidakseimbangan neurotransmiter utama yang sering ditemukan pada patofisiologi gangguan cemas meliputi...",
    options: [
      "Disregulasi/penurunan fungsi GABA dan serotonin, serta peningkatan aktivitas noradrenalin",
      "Peningkatan masif GABA dan penurunan total dopamin",
      "Penurunan asetilkolin murni tanpa keterlibatan serotonin",
      "Kelebihan hormon melatonin pada siang hari"
    ],
    answer: 0,
    explanation: "Disregulasi biokimia cemas melibatkan penurunan inhibisi GABA dan Serotonin, serta hiperaktivitas Noradrenalin[cite: 11]."
  },
  {
    id: 8, category: "Etiologi Biopsikososial & Biokimia",
    question: "Konsep 'Catastrophic Misinterpretation' pada gangguan cemas mengacu pada...",
    options: [
      "Kecenderungan menafsirkan sensasi tubuh yang normal/ringan (seperti dada berdebar) sebagai tanda bahaya fatal (seperti serangan jantung)",
      "Ketidakmampuan mengingat nama sendiri saat cemas",
      "Keyakinan bahwa orang lain dapat membaca pikiran pasien",
      "Halusinasi auditorik yang menyuruh pasien berlari"
    ],
    answer: 0,
    explanation: "Catastrophic misinterpretation adalah bias kognitif di mana sensasi somatik benigna ditafsirkan sebagai ancaman bencana/kematian[cite: 11]."
  },
  {
    id: 9, category: "Etiologi Biopsikososial & Biokimia",
    question: "Faktor risiko psikologis yang ditandai oleh ketidakmampuan menoleransi ketidakpastian masa depan disebut...",
    options: [
      "Intoleransi Ketidakpastian (Intolerance of Uncertainty)",
      "Agorafobia sekunder",
      "Amnesia disosiatif",
      "Neurastenia tipe 2"
    ],
    answer: 0,
    explanation: "Intoleransi ketidakpastian merupakan faktor kerentanan kognitif utama pada kecemasan, khususnya pada Gangguan Anxietas Menyeluruh (GAD)[cite: 11]."
  },
  {
    id: 10, category: "Etiologi Biopsikososial & Biokimia",
    question: "Dalam sudut pandang holistik Biopsikososial-Spiritual, pilar spiritual yang ikut memodulasi respons cemas mencakup...",
    options: [
      "Makna hidup, ikhtiar, tawakkal, dan dukungan religiusitas",
      "Penggunaan obat-obatan herbal tanpa dosis",
      "Isolasi diri dari kegiatan ibadah",
      "Penyangkalan terhadap kondisi sakit"
    ],
    answer: 0,
    explanation: "Dimensi spiritual memberikan kerangka makna, ikhtiar, tawakkal, dan harapan yang memperkuat daya tahan koping psikologis[cite: 11]."
  },
  {
    id: 11, category: "Etiologi Biopsikososial & Biokimia",
    question: "Manakah yang merupakan kelompok gejala 'Ketegangan Motorik' pada sindrom cemas?",
    options: [
      "Nyeri kepala tegang, pegal otot, tegang leher, dan gelisah/tidak bisa tenang",
      "Sianosis dan kelumpuhan flaksid bilateral",
      "Diare berdarah dan muntah profus",
      "Halusinasi visual dan delusi persekutorik"
    ],
    answer: 0,
    explanation: "Ketegangan motorik bermanifestasi sebagai gelisah, tegang otot, pegal-pegal, nyeri kepala tegang (tension headache), dan kaku[cite: 11]."
  },
  {
    id: 12, category: "Etiologi Biopsikososial & Biokimia",
    question: "Mengapa gangguan tidur (insomnia) pada pasien cemas dapat memperkuat siklus kecemasan?",
    options: [
      "Karena kurang tidur menurunkan fungsi regulasi top-down korteks prefrontal dan meningkatkan reaktivitas amigdala",
      "Karena kurang tidur menghentikan sintesis eritrosit",
      "Karena insomnia memicu atrofi otak instan dalam 24 jam",
      "Karena tidur hanya dibutuhkan saat usia anak-anak"
    ],
    answer: 0,
    explanation: "Gangguan tidur memperlemah kontrol regulasi prefrontal terhadap amigdala, sehingga ambang kecemasan semakin menurun[cite: 11]."
  },

  // ── 3. KLASIFIKASI & PETA DIAGNOSIS (F40-F48) (6 Soal) ────────────────────
  {
    id: 13, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Dalam PPDGJ-III / ICD-10, kelompok diagnosis F40-F48 dikelompokkan dalam kategori besar...",
    options: [
      "Gangguan Neurotik, Gangguan Somatoform, dan Gangguan yang Berkaitan dengan Stres",
      "Gangguan Psikotik Skizofrenik",
      "Gangguan Suasana Perasaan (Mood/Afektif) Murni",
      "Gangguan Perkembangan Neurodevelopmental"
    ],
    answer: 0,
    explanation: "Blok F40-F48 dalam ICD-10/PPDGJ-III mencakup Gangguan Neurotik, Stres, dan Somatoform[cite: 11]."
  },
  {
    id: 14, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Manakah pasangan kode ICD-10/PPDGJ-III yang BENAR di bawah ini?",
    options: [
      "F40.0 Agorafobia, F41.0 Gangguan Panik, F41.1 Gangguan Anxietas Menyeluruh (GAD)",
      "F40.0 Skizofrenia, F41.0 Depresi Berat, F41.1 OCD",
      "F40.0 PTSD, F41.0 Bipolar, F41.1 Autisme",
      "F40.0 Anoreksia, F41.0 Demensia, F41.1 Insomnia"
    ],
    answer: 0,
    explanation: "F40.0 adalah Agorafobia, F41.0 adalah Gangguan Panik, dan F41.1 adalah Gangguan Anxietas Menyeluruh (GAD)[cite: 11]."
  },
  {
    id: 15, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Perbedaan klasifikasi PPDGJ-III/ICD-10 dengan sistem modern (DSM-5-TR / ICD-11) terkait OCD dan PTSD adalah...",
    options: [
      "Pada DSM-5/ICD-11, OCD dan PTSD telah dipisahkan menjadi bab tersendiri di luar bab Anxiety Disorders, sedangkan dalam PPDGJ-III/ICD-10 masih menyatu dalam F40-F48",
      "Dalam PPDGJ-III OCD dimasukkan ke dalam gangguan kepribadian",
      "Dalam ICD-11 PTSD ditiadakan total",
      "Tidak ada perbedaan sama sekali"
    ],
    answer: 0,
    explanation: "Klasifikasi modern (DSM-5/ICD-11) memisahkan OCD dan Traumatic/Stressor-related disorders dari Anxiety Disorders, meski PPDGJ-III masih berada dalam F40-F48[cite: 11]."
  },
  {
    id: 16, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Diagnosis F41.2 dalam PPDGJ-III diberikan pada kondisi...",
    options: [
      "Gangguan Campuran Anxietas dan Depresif (gejala cemas dan depresi ada bersamaan, tanpa ada yang dominan penuh memenuhi kriteria spesifik)",
      "Gangguan Panik tanpa Agorafobia",
      "Fobia Spesifik Jarum Suntik",
      "PTSD Kronis"
    ],
    answer: 0,
    explanation: "F41.2 (Gangguan Campuran Anxietas dan Depresif) digunakan bila ada gejala cemas dan depresi namun tidak ada yang memenuhi kriteria diagnosis penuh episode tunggal[cite: 11]."
  },
  {
    id: 17, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Kategori F45 dalam PPDGJ-III mencakup kelompok gangguan...",
    options: [
      "Gangguan Somatoform (keluhan fisik berulang menetap terkait distress psikologis)",
      "Gangguan Disosiatif/Konversi",
      "Fobia Sosial",
      "Gangguan Makan"
    ],
    answer: 0,
    explanation: "Kode F45 digunakan untuk Gangguan Somatoform di mana fokus utama pasien adalah keluhan fisik menetap[cite: 11]."
  },
  {
    id: 18, category: "Klasifikasi & Peta Diagnosis (F40-F48)",
    question: "Langkah penting dalam penegakan diagnosis gangguan cemas sebelum memutuskan terapi adalah...",
    options: [
      "Eksklusi penyebab kondisi medis umum, penggunaan zat/obat, depresi, bipolar, psikotik, dan evaluasi risiko bunuh diri",
      "Langsung memberikan suntikan obat penenang tanpa wawancara",
      "Meminta pasien melakukan latihan lari maraton",
      "Menyarankan pasien mengabaikan seluruh gejala"
    ],
    answer: 0,
    explanation: "Eksklusi medis/zat, evaluasi komorbiditas psikiatri, dan skrining risiko bunuh diri merupakan langkah diagnostik wajib[cite: 11]."
  },

  // ── 4. GANGGUAN FOBIA (AGORAFOBIA, SOSIAL, SPESIFIK) (6 Soal) ─────────────
  {
    id: 19, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Seorang perempuan 38 tahun menghindari pasar ramai, bus umum, antrean, dan bepergian sendiri karena takut sulit keluar atau tidak mendapat pertolongan jika mendadak panik. Diagnosis paling tepat adalah...",
    options: [
      "Agorafobia (F40.0)",
      "Fobia Spesifik",
      "Gangguan Anxietas Menyeluruh",
      "Fobia Sosial"
    ],
    answer: 0,
    explanation: "Agorafobia ditandai oleh ketakutan dan penghindaran terhadap tempat/situasi ramai atau bepergian sendiri karena takut sulit keluar/mendapat pertolongan[cite: 11]."
  },
  {
    id: 20, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Seorang mahasiswa 21 tahun selalu menghindari presentasi di depan kelas karena sangat takut wajahnya memerah, suaranya gemetar, dan dinilai bodoh/dievaluasi negatif oleh teman-temannya. Diagnosis paling sesuai adalah...",
    options: [
      "Fobia Sosial / Social Anxiety Disorder (F40.1)",
      "Agorafobia",
      "Gangguan Panik",
      "Gangguan Penyesuaian"
    ],
    answer: 0,
    explanation: "Fobia Sosial ditandai ketakutan mencolok terhadap situasi sosial atau performa karena takut evaluasi negatif atau dipermalukan[cite: 11]."
  },
  {
    id: 21, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Seorang perempuan 25 tahun sangat takut saat harus menjalani pemeriksaan darah. Saat melihat jarum suntik ia menjadi pucat, berdebar, dan pingsan. Kondisi ini merupakan ciri khas...",
    options: [
      "Fobia Spesifik tipe darah-injeksi-luka (Blood-Injection-Injury)",
      "Fobia Sosial",
      "Agorafobia berat",
      "Gangguan Somatisasi"
    ],
    answer: 0,
    explanation: "Fobia Spesifik tipe darah-injeksi-luka khas ditandai oleh ketakutan berlebih pada jarum/darah yang sering disertai respons vasovagal (pingsan)[cite: 11]."
  },
  {
    id: 22, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Terapi utama pilihan non-farmakologis untuk Fobia Spesifik adalah...",
    options: [
      "Exposure Therapy / Desensitisasi Bertahap",
      "Pemberian Benzodiazepin dosis tinggi seumur hidup",
      "Terapi Kejang Listrik (ECT)",
      "Isolasi di kamar gelap"
    ],
    answer: 0,
    explanation: "Terapi eksposur (desensitisasi sistematis/bertahap) merupakan tata laksana utama (first-line) untuk Fobia Spesifik; obat tidak rutin diperlukan[cite: 11]."
  },
  {
    id: 23, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Obat golongan Beta-blocker (seperti Propranolol) dapat bermanfaat pada Fobia Sosial khusus untuk...",
    options: [
      "Mengurangi gejala otonom/performa (seperti tremor dan palpitasi) sebelum tampil di publik (performance anxiety)",
      "Penyembuhan total gangguan cemas dalam 1 hari",
      "Menggantikan fungsi psikoterapi CBT secara permanen",
      "Menghilangkan memori trauma masa kecil"
    ],
    answer: 0,
    explanation: "Propranolol berguna menurunkan respons otonom perifer (tremor, palpitasi) pada kecemasan performa situasional[cite: 11]."
  },
  {
    id: 24, category: "Gangguan Fobia (Agorafobia, Sosial, Spesifik)",
    question: "Pasien Agorafobia berat sering kali berakhir dengan kondisi 'housebound', yang berarti...",
    options: [
      "Tidak berani keluar dari rumah sama sekali karena ketakutan yang luar biasa",
      "Suka berpindah-pindah rumah setiap minggu",
      "Mengalami kelumpuhan kedua lengan",
      "Hanya bisa tidur saat siang hari"
    ],
    answer: 0,
    explanation: "Agorafobia yang parah dapat menyebabkan pasien terisolasi total di dalam rumah (housebound) karena tidak berani menghadapi lingkungan luar[cite: 11]."
  },

  // ── 5. GAD & GANGGUAN PANIK (7 Soal) ──────────────────────────────────────
  {
    id: 25, category: "GAD & Gangguan Panik",
    question: "Ciri khas utama dari Gangguan Anxietas Menyeluruh (GAD / F41.1) adalah...",
    options: [
      "Kekhawatiran berlebihan yang meluas pada berbagai aspek kehidupan, kronis (berlangsung berbulan-bulan), sulit dikendalikan, disertai ketegangan motorik dan otonom",
      "Serangan panik mendadak yang memuncak dalam 1 menit lalu hilang total",
      "Ketakutan hanya pada objek kucing dan anjing",
      "Keinginan mencuci tangan berulang-ulang"
    ],
    answer: 0,
    explanation: "GAD ditandai kekhawatiran meluas (free-floating anxiety) pada banyak hal kehidupan, kronis, sulit dikontrol, dan disertai gejala fisik/motorik[cite: 11]."
  },
  {
    id: 26, category: "GAD & Gangguan Panik",
    question: "Seorang perempuan 32 tahun merasa cemas hampir setiap hari selama 7 bulan mengenai pekerjaan, kesehatan orang tua, dan biaya sekolah. Ia tegang, sulit tidur, cepat lelah, dan sulit konsentrasi. Diagnosisnya adalah...",
    options: [
      "Gangguan Anxietas Menyeluruh (GAD)",
      "Gangguan Panik",
      "Reaksi Stres Akut",
      "Fobia Spesifik"
    ],
    answer: 0,
    explanation: "Kriteria cemas meluas kronis (>6 bulan) pada banyak aspek disertai tegang otot dan gangguan tidur sesuai dengan GAD[cite: 11]."
  },
  {
    id: 27, category: "GAD & Gangguan Panik",
    question: "Karakteristik utama dari Serangan Panik (Panic Attack) pada Gangguan Panik (F41.0) adalah...",
    options: [
      "Onset tiba-tiba, rasa takut/ketidaknyamanan intens yang memuncak cepat dalam beberapa menit, disertai gejala fisik kuat (palpitasi, sesak, takut mati/gila)",
      "Rasa sedih perlahan selama 6 bulan",
      "Kehilangan ingatan tentang identitas diri",
      "Kelelahan fisik setelah berolahraga"
    ],
    answer: 0,
    explanation: "Serangan panik timbul mendadak, intensitas puncak cepat (biasanya <=10 menit), disertai gejala somatik hebat dan ketakutan kehilangan kontrol/mati[cite: 11]."
  },
  {
    id: 28, category: "GAD & Gangguan Panik",
    question: "Kekhawatiran antisipatorik (anticipatory anxiety) pada Gangguan Panik mengacu pada...",
    options: [
      "Ketakutan dan kecemasan terus-menerus akan timbulnya serangan panik susulan di masa depan",
      "Ketakutan melihat makanan pedas",
      "Keinginan untuk selalu tidur siang",
      "Keyakinan bahwa pasien memiliki kekuatan super"
    ],
    answer: 0,
    explanation: "Pasca serangan panik, pasien sering mengalami kecemasan antisipatorik, yaitu rasa takut menetap akan munculnya serangan berikutnya[cite: 11]."
  },
  {
    id: 29, category: "GAD & Gangguan Panik",
    question: "Tindakan pertama yang tepat saat pasien mengalami serangan panik akut di hadapan dokter adalah...",
    options: [
      "Tetap tenang, minta pasien fokus pada napas lambat/teratur, grounding, dan jelaskan bahwa puncak serangan singkat serta tidak berbahaya",
      "Menyiram air es ke muka pasien",
      "Memberikan suntikan anestesi total",
      "Menyuruh pasien berlari kencang"
    ],
    answer: 0,
    explanation: "Tatalaksana serangan akut berfokus pada penenangan, kontrol napas lambat (mencegah hiperventilasi), grounding, dan reasuransi[cite: 11]."
  },
  {
    id: 30, category: "GAD & Gangguan Panik",
    question: "Teknik CBT 'Interoceptive Exposure' pada Gangguan Panik dilakukan dengan cara...",
    options: [
      "Membantu pasien secara sengaja merasakan sensasi tubuh ringan (seperti pusing/napas cepat) dalam kondisi aman agar tidak lagi menafsirkannya secara katastrofik",
      "Memaksa pasien mengurung diri di ruang gelap",
      "Menghipnosis pasien agar lupa pada jantungnya",
      "Memberikan obat pencahar"
    ],
    answer: 0,
    explanation: "Interoceptive exposure melatih pasien menghadapi sensasi somatik internal agar tidak memicu respon panik dan catastrophic misinterpretation[cite: 11]."
  },
  {
    id: 31, category: "GAD & Gangguan Panik",
    question: "Seorang laki-laki 28 tahun berulang kali dibawa ke IGD karena dadanya mendadak berdebar, sesak, dan takut mati. Pemeriksaan EKG dan troponin normal. Diagnosis paling tepat adalah...",
    options: [
      "Gangguan Panik (F41.0)",
      "Infark Miokard Akut",
      "Fobia Sosial",
      "Somatisasi"
    ],
    answer: 0,
    explanation: "Gejala ke IGD berulang dengan rasa takut mati dan hasil EKG/medis normal merupakan pola klasik Gangguan Panik[cite: 11]."
  },

  // ── 6. OCD & REAKSI STRES (PTSD & AKUT) (6 Soal) ──────────────────────────
  {
    id: 32, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Komponen Inti dari Gangguan Obsesif-Kompulsif (F42) terdiri dari...",
    options: [
      "Obsesi (pikiran/dorongan intrusif berulang yang menimbulkan cemas) dan Kompulsi (perilaku/ritual berulang untuk menurunkan cemas)",
      "Halusinasi dan Delusi",
      "Amnesia dan Fugue",
      "Manik dan Depresi"
    ],
    answer: 0,
    explanation: "OCD ditandai oleh Obsesi (pikiran intrusif yang memicu cemas) dan Kompulsi (perilaku ritualistis untuk meredakan cemas tersebut)[cite: 11]."
  },
  {
    id: 33, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Seorang mahasiswa FK berkali-kali mencuci tangan hingga lecet karena merasa terkontaminasi. Ia tahu perilakunya berlebihan tetapi cemas hebat jika tidak mencucinya. Hal ini menggambarkan...",
    options: [
      "Gangguan Obsesif-Kompulsif (F42)",
      "Gangguan Disosiatif",
      "Fobia Spesifik",
      "Skizofrenia Simpel"
    ],
    answer: 0,
    explanation: "Perilaku cuci tangan berulang akibat ide kontaminasi yang disadari ego-distonik/berlebihan merupakan contoh klasik OCD[cite: 11]."
  },
  {
    id: 34, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Perbedaan utama antara Reaksi Stres Akut (F43.0) dan PTSD (F43.1) berdasarkan aspek waktu onset adalah...",
    options: [
      "Reaksi Stres Akut muncul segera setelah trauma berat dan membaik dalam jam-hari; sedangkan PTSD onsetnya menetap atau terhambat dan berlangsung jangka panjang",
      "Reaksi Stres Akut terjadi setelah 10 tahun trauma",
      "PTSD hanya terjadi pada anak balita",
      "Tidak ada perbedaan durasi"
    ],
    answer: 0,
    explanation: "Reaksi stres akut terjadi segera pasca trauma dan bersifat sementara (jam-hari)[cite: 11]. PTSD berlangsung menetap (>1 bulan) dengan trias gejala khas[cite: 11]."
  },
  {
    id: 35, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Triad gejala utama pada Gangguan Stres Pasca Trauma (PTSD) meliputi...",
    options: [
      "Intrusi (flashback/mimpi buruk), Penghindaran (avoidance stimulus trauma), dan Hiperarousal (kewaspadaan meningkat/mudah terkejut)",
      "Somatisasi, Amnesia, dan Fugue",
      "Depresi, Manik, dan Halusinasi",
      "Waham, Wandering, dan Stupor"
    ],
    answer: 0,
    explanation: "PTSD ditandai oleh re-experiencing/intrusi, penghindaran stimulus terkait trauma, dan kondisi hiperarousal/kewaspadaan berlebih[cite: 11]."
  },
  {
    id: 36, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Seorang mahasiswa baru mengalami cemas dan sedih setelah kesulitan beradaptasi dengan sistem perkuliahan. Gejalanya mengganggu fungsi tetapi tidak memenuhi kriteria trauma berat. Diagnosisnya adalah...",
    options: [
      "Gangguan Penyesuaian (F43.2)",
      "PTSD",
      "Reaksi Stres Akut",
      "Gangguan Disosiatif"
    ],
    answer: 0,
    explanation: "Gangguan penyesuaian timbul akibat stresor kehidupan bermakna dengan respons maladaptif yang tidak memenuhi kriteria gangguan spesifik lain[cite: 11]."
  },
  {
    id: 37, category: "OCD & Reaksi Stres (PTSD & Akut)",
    question: "Seorang korban kecelakaan berat yang selamat tampak bingung, gemetar, menangis, dan berdebar beberapa jam setelah kejadian. Kondisi ini sesuai dengan...",
    options: [
      "Reaksi Stres Akut (F43.0)",
      "Gangguan Somatisasi",
      "Fobia Sosial",
      "Gagal Ginjal Akut"
    ],
    answer: 0,
    explanation: "Gejala akut yang muncul segera setelah paparan trauma psikososial/fisik yang sangat berat diklasifikasikan sebagai Reaksi Stres Akut[cite: 11]."
  },

  // ── 7. GANGGUAN DISOSIATIF & SOMATOFORM (6 Soal) ──────────────────────────
  {
    id: 38, category: "Gangguan Disosiatif & Somatoform",
    question: "Ciri utama dari Gangguan Disosiatif / Konversi (F44) adalah...",
    options: [
      "Hilangnya integrasi fungsi psikologis/neurologis (ingatan, kesadaran, gerakan) tanpa penjelasan organik/medis yang memadai, sering dipicu stresor",
      "Perilaku mencuci tangan berulang",
      "Ketakutan akan ketinggian",
      "Nyeri dada akibat penyumbatan koroner"
    ],
    answer: 0,
    explanation: "Gangguan disosiatif/konversi ditandai oleh hilangnya kendali neurologis/kesadaran tanpa dasar kelainan organik dan tidak dibuat-buat[cite: 11]."
  },
  {
    id: 39, category: "Gangguan Disosiatif & Somatoform",
    question: "Setelah konflik keluarga yang sangat berat, seorang pasien tiba-tiba tidak dapat menggerakkan kedua kakinya. Pemeriksaan neurologis tidak menemukan kelainan. Diagnosis paling sesuai adalah...",
    options: [
      "Gangguan Disosiatif / Konversi Motorik (F44.4)",
      "Malingering",
      "Gangguan Panik",
      "Stroke Iskemik"
    ],
    answer: 0,
    explanation: "Gejala neurologis fokal (kelumpuhan) yang muncul pasca stresor psikologis tanpa dasar organik memadai sesuai kriteria Gangguan Disosiatif/Konversi[cite: 11]."
  },
  {
    id: 40, category: "Gangguan Disosiatif & Somatoform",
    question: "Fenomena 'Fugue Disosiatif' (F44.1) ditandai oleh...",
    options: [
      "Amnesia disosiatif yang disertai dengan perjalanan fisik meninggalkan rumah atau tempat kerja",
      "Kelumpuhan pada keempat anggota gerak",
      "Ketakutan berada di tempat umum",
      "Nyeri perut kanan bawah mendadak"
    ],
    answer: 0,
    explanation: "Fugue disosiatif menggabungkan amnesia mengenai identitas/masa lalu dengan perjalanan fisik tak terencana[cite: 11]."
  },
  {
    id: 41, category: "Gangguan Disosiatif & Somatoform",
    question: "Inti klinis dari Gangguan Somatoform (F45) adalah...",
    options: [
      "Pasien datang dengan keluhan fisik berulang/menetap serta meminta pemeriksaan medis berulang, meskipun hasil pemeriksaan tidak mendukung adanya penyakit berat",
      "Pasien dengan sengaja memalsukan gejala untuk klaim asuransi",
      "Pasien kehilangan memori tentang masa kecilnya",
      "Pasien mengalami kejang epilepsi murni"
    ],
    answer: 0,
    explanation: "Gangguan somatoform berfokus pada keluhan fisik menetap dan kekhawatiran kesehatan yang memicu pencarian medis berulang[cite: 11]."
  },
  {
    id: 42, category: "Gangguan Disosiatif & Somatoform",
    question: "Preokupasi kuat dan ketakutan menetap bahwa dirinya menderita penyakit fisik yang serius/mematikan (seperti kanker) meskipun hasil laboratorium normal dikategorikan sebagai...",
    options: [
      "Gangguan Hipokondrik (F45.2)",
      "Gangguan Somatisasi",
      "Agorafobia",
      "Neurastenia"
    ],
    answer: 0,
    explanation: "Gangguan Hipokondrik ditandai oleh preokupasi dan ketakutan menderita penyakit serius berdasarkan interpretasi salah atas gejala tubuh[cite: 11]."
  },
  {
    id: 43, category: "Gangguan Disosiatif & Somatoform",
    question: "Gangguan Neurotik Neurastenia (F48.0) memiliki keluhan utama berupa...",
    options: [
      "Keluhan mudah lelah mental/fisik, rasa tidak mampu menyelesaikan aktivitas, disertai pusing dan tegang otot",
      "Halusinasi melihat bayangan hitam",
      "Serangan panik di malam hari",
      "Nyeri dada kiri menjalar ke lengan"
    ],
    answer: 0,
    explanation: "Neurastenia ditandai oleh perasaan lelah dan lemas mental/fisik yang menetap setelah usaha ringan[cite: 11]."
  },

  // ── 8. DIAGNOSIS BANDING & TATALAKSANA INTEGRATIF (7 Soal) ────────────────
  {
    id: 44, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Kondisi medis umum yang WAJIB disingkirkan karena sering menampilkan gejala cemas, palpitasi, dan gelisah adalah...",
    options: [
      "Hipertiroidisme, aritmia jantung, hipoglikemia, dan asma",
      "Osteoartritis lutut ringan",
      "Katarak senilis",
      "Akne vulgaris"
    ],
    answer: 0,
    explanation: "Kondisi fisik seperti hipertiroid, gangguan irama jantung, hipoglikemia, dan asma dapat meniru gejala cemas secara tepat[cite: 11]."
  },
  {
    id: 45, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Golongan obat farmakoterapi lini pertama (first-line) untuk penanganan jangka panjang Gangguan Anxietas Menyeluruh dan Gangguan Panik adalah...",
    options: [
      "SSRI (Selective Serotonin Reuptake Inhibitors) atau SNRI",
      "Benzodiazepin dosis tinggi seumur hidup",
      "Antipsikotik tipikal injeksi",
      "Aspirin dosis rendah"
    ],
    answer: 0,
    explanation: "SSRI/SNRI merupakan obat pilihan utama jangka panjang karena efikasi yang baik dan tidak menimbulkan ketergantungan[cite: 11]."
  },
  {
    id: 46, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Aturan penggunaan Benzodiazepin pada gangguan cemas menurut panduan klinis adalah...",
    options: [
      "Hanya digunakan jangka pendek (2-4 minggu) bila sangat diperlukan pada fase akut, serta hindari penggunaan jangka panjang untuk cegah toleransi/ketergantungan",
      "Diberikan sebagai monoterapi seumur hidup",
      "Boleh dihentikan mendadak dari dosis tinggi tanpa tapering",
      "Merupakan obat lini pertama untuk anak usia < 5 tahun"
    ],
    answer: 0,
    explanation: "Benzodiazepin hanya boleh digunakan jangka pendek karena risiko toleransi, adiksi, dan gejala putus obat[cite: 11]."
  },
  {
    id: 47, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Prinsip pengobatan antidepresan SSRI pada pasien cemas adalah 'Start Low, Go Slow', yang bermakna...",
    options: [
      "Memulai dari dosis rendah (setengah dosis depresi) dan menaikkan dosis secara bertahap untuk mencegah eksaserbasi cemas di awal terapi",
      "Memulai dosis maksimal pada hari pertama",
      "Menghentikan obat jika dalam 2 hari belum sembuh",
      "Memberikan obat setiap 2 minggu sekali"
    ],
    answer: 0,
    explanation: "Awal terapi SSRI dapat memicu nervous/ansietas sementara, sehingga dosis dimulai dari yang paling rendah dan dititrasi perlahan[cite: 11]."
  },
  {
    id: 48, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Kalimat psikoedukasi yang BENAR dan empatik untuk disampaikan kepada pasien gangguan cemas adalah...",
    options: [
      "'Cemas adalah alarm tubuh. Pada gangguan cemas, alarmnya terlalu sensitif. Gejala fisiknya nyata, tetapi tidak selalu berarti ada penyakit organ yang berbahaya.'",
      "'Gejala Anda ini hanya pura-pura dan mengada-ada saja.'",
      "'Penyakit Anda tidak bisa disembuhkan sama sekali.'",
      "'Anda harus mengurung diri agar cemasnya hilang.'"
    ],
    answer: 0,
    explanation: "Psikoedukasi memvalidasi sensasi somatik pasien sekaligus memberikan metafora alarm yang tepat tanpa menghakimi[cite: 11]."
  },
  {
    id: 49, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Komponen non-farmakologis kunci dalam manajemen jangka panjang gangguan cemas mencakup...",
    options: [
      "Psikoedukasi, CBT (Cognitive Behavioral Therapy), relaksasi/latihan napas, sleep hygiene, serta dukungan keluarga dan spiritual",
      "Menghindari seluruh interaksi sosial secara permanen",
      "Meminum kopi hitam pekat 5 cangkir sehari",
      "Melakukan aktivitas ekstrem tanpa persiapan"
    ],
    answer: 0,
    explanation: "Kombinasi CBT, relaksasi, higiene tidur, psikoedukasi, dan dukungan sosial/spiritual adalah fondasi non-farmako cemas[cite: 11]."
  },
  {
    id: 50, category: "Diagnosis Banding & Tatalaksana Integratif",
    question: "Berapa lama waktu yang umumnya dibutuhkan oleh obat golongan SSRI untuk mencapai efek klinis optimal pada gangguan cemas?",
    options: [
      "Beberapa minggu (sekitar 2 hingga 6 minggu)",
      "10 menit setelah pil ditelan",
      "6 bulan tanpa perubahan",
      "Langsung terasa dalam 2 detik"
    ],
    answer: 0,
    explanation: "SSRI membutuhkan waktu adaptasi reseptor sehingga respons terapi klinis baru terlihat optimal setelah 2-6 minggu[cite: 11]."
  }
];
