export const ALL_QUESTIONS = [
  // ── 1. DEFINISI & KRITERIA ILAE (6 Soal) ──────────────────────────────────
  {
    id: 1, category: "Definisi & Kriteria ILAE",
    question: "Berdasarkan kriteria praktis ILAE / Perdossi, diagnosis Epilepsi dapat ditegakkan jika memenuhi salah satu kondisi berikut, KECUALI...",
    options: [
      "Minimal 2 bangkitan tanpa provokasi (unprovoked) dengan jarak antar bangkitan > 24 jam",
      "1 bangkitan tanpa provokasi dengan kemungkinan berulang minimal 60% dalam 10 tahun ke depan",
      "Sudah ditegakkan diagnosis sindrom epilepsi spesifik",
      "Satu kali kejang demam sederhana pada balita yang langsung sembuh"
    ],
    answer: 3,
    explanation: "Epilepsi didefinisikan sebagai: (1) Min. 2 bangkitan unprovoked >24 jam, (2) 1 bangkitan unprovoked dengan risiko rekurensi >=60% dalam 10 tahun, atau (3) Terdiagnosis sindrom epilepsi. Kejang demam sederhana tergolong provoked seizure[span_9](start_span)[span_9](end_span)."
  },
  {
    id: 2, category: "Definisi & Kriteria ILAE",
    question: "Definisi dari Bangkitan Epilepsi (Epileptic Seizure) adalah...",
    options: [
      "Manifestasi klinis akibat hiperaktivitas listrik sekelompok sel saraf otak yang bersifat berlebihan, abnormal, mendadak, dan sementara",
      "Penurunan aliran darah otak global akibat hipotensi ortostatis mendadak",
      "Gangguan gerak involunter akibat kerusakan ganglia basalis kronis",
      "Kedutan otot akibat kelelahan fisik tanpa keterlibatan aktivitas listrik otak"
    ],
    answer: 0,
    explanation: "Bangkitan epilepsi adalah manifestasi klinis dari cetusan listrik berlebihan, abnormal, mendadak, dan sementara dari sekelompok neuron otak (unprovoked)[span_10](start_span)[span_10](end_span)."
  },
  {
    id: 3, category: "Definisi & Kriteria ILAE",
    question: "Etiologi epilepsi yang dianggap simptomatik namun lesi struktural penyebab utamanya belum diketahui secara pasti (seperti pada Sindrom West atau Sindrom Lennox-Gastaut) diklasifikasikan sebagai...",
    options: [
      "Idiopatik",
      "Kriptogenik",
      "Simptomatik murni",
      "Provoked seizure"
    ],
    answer: 1,
    explanation: "Kriptogenik adalah kondisi yang diduga simptomatik (terdapat kelainan dasar), namun penyebab pastinya belum diketahui/ditemukan pada pencitraan[span_11](start_span)[span_11](end_span)."
  },
  {
    id: 4, category: "Definisi & Kriteria ILAE",
    question: "Manakah contoh penyebab bangkitan terprovokasi (provoked seizure) yang BUKAN merupakan epilepsi murni?",
    options: [
      "Sklerosis hipokampus kronis",
      "Gangguan elektrolit akut (hiponatremia), hipoglikemia, atau infeksi CNS akut",
      "Malformasi kortikal kongenital",
      "Tumor otak meningioma yang tumbuh lambat"
    ],
    answer: 1,
    explanation: "Provoked seizures dipicu oleh kondisi sistemik/metabolik akut (hipoglikemia, gangguan elektrolit, intoksikasi, demam) dan bukan merupakan penyakit epilepsi kronis[span_12](start_span)[span_12](end_span)."
  },
  {
    id: 5, category: "Definisi & Kriteria ILAE",
    question: "Epilepsi idiopatik umumnya memiliki karakteristik berupa...",
    options: [
      "Terdapat lesi struktural nyata pada Head CT-Scan/MRI",
      "Sangat berhubungan dengan faktor genGenetik, berkaitan dengan usia, dan tidak ditemukan lesi struktural di otak",
      "Pasti disertai dengan retardasi mental berat",
      "Resisten terhadap seluruh jenis Obat Anti Epilepsi (OAE)"
    ],
    answer: 1,
    explanation: "Epilepsi idiopatik ditandai oleh tidak ditemukannya lesi struktural di otak, predisposisi genetik yang kuat, serta sering berkaitan dengan kelompok usia tertentu[span_13](start_span)[span_13](end_span)."
  },
  {
    id: 6, category: "Definisi & Kriteria ILAE",
    question: "Penyebab bangkitan kejang yang paling mendominasi pada kelompok usia lanjut (> 60 tahun) adalah...",
    options: [
      "Penyakit Cerebrovascular (Stroke/Degenerasi Vaskular) dan Tumor Otak",
      "Kejang demam (Febrile seizure)",
      "Kelainan penyimpanan metabolik kongenital",
      "Trauma lahir (Birth trauma)"
    ],
    answer: 0,
    explanation: "Pada usia lansia (>60 tahun), penyebab utama timbulnya bangkitan kejang baru adalah penyakit serebrovaskular (stroke) dan lesi struktural/tumor[span_14](start_span)[span_14](end_span)."
  },

  // ── 2. PATOFISIOLOGI & AMBANG BANGKITAN (7 Soal) ──────────────────────────
  {
    id: 7, category: "Patofisiologi & Ambang Bangkitan",
    question: "Patofisiologi utama terjadinya kejang pada tingkat seluler di otak adalah ketidakseimbangan antara pengaruh eksitasi dan inhibisi, yaitu...",
    options: [
      "Aktivitas Inhibisi (GABA) > Aktivitas Eksitasi (Glutamat)",
      "Aktivitas Eksitasi (Glutamat/Aspartat) > Aktivitas Inhibisi (GABA)",
      "Penurunan berlebihan neurotransmiter Asetilkolin murni",
      "Peningkatan hormon Dopamin di ruang ekstraseluler"
    ],
    answer: 1,
    explanation: "Kejang terjadi akibat ketidakseimbangan transmisi sinaps di mana eksitasi (Glutamat/Aspartat) melebihi inhibisi (GABA)[span_15](start_span)[span_15](end_span)."
  },
  {
    id: 8, category: "Patofisiologi & Ambang Bangkitan",
    question: "Neurotransmiter utama yang berfungsi sebagai INHIBITOR utama di sistem saraf pusat untuk mencegah letupan listrik berlebih adalah...",
    options: [
      "Glutamat",
      "Aspartat",
      "GABA (Gamma-Aminobutyric Acid)",
      "Asetilkolin"
    ],
    answer: 2,
    explanation: "GABA merupakan neurotransmiter inhibitorik utama yang membuka saluran klorida (Cl-) dan hiperpolarisasi sel untuk menekan cetusan listrik[span_16](start_span)[span_16](end_span)."
  },
  {
    id: 9, category: "Patofisiologi & Ambang Bangkitan",
    question: "Pernyataan yang BENAR mengenai 'Ambang Bangkitan' (Seizure Threshold) pada penderita epilepsi adalah...",
    options: [
      "Penderita epilepsi memiliki ambang bangkitan yang lebih TINGGI daripada orang normal",
      "Penderita epilepsi memiliki ambang bangkitan yang lebih RENDAH, sehingga rangsangan kecil saja dapat memicu bangkitan",
      "Ambang bangkitan tidak dipengaruhi oleh faktor genetik maupun usia",
      "Anak usia < 5 tahun memiliki ambang bangkitan paling tinggi"
    ],
    answer: 1,
    explanation: "Penderita epilepsi memiliki ambang bangkitan yang lebih rendah; sedikit pencetus saja sudah cukup untuk memicu cetusan kejang[span_17](start_span)[span_17](end_span)."
  },
  {
    id: 10, category: "Patofisiologi & Ambang Bangkitan",
    question: "Manakah di bawah ini yang BUKAN merupakan faktor pencetus (trigger factors) bangkitan kejang yang umum pada pasien epilepsi?",
    options: [
      "Kurang tidur dan kelelahan fisik",
      "Stres emosional dan demam/infeksi",
      "Konsumsi alkohol atau stimulasi cahaya kelap-kelip (photic stimulation)",
      "Tidur nyenyak teratur 8 jam sehari"
    ],
    answer: 3,
    explanation: "Faktor pencetus bangkitan meliputi kurang tidur, stres, kelelahan, demam, alkohol, stimulasi cahaya, dan perubahan hormonal[span_18](start_span)[span_18](end_span)."
  },
  {
    id: 11, category: "Patofisiologi & Ambang Bangkitan",
    question: "Pada depolarisasi abnormal neuron berulang (paroxysmal depolarizing shift), ion ekstraseluler yang masuk membanjiri sel ke dalam neuron (inward current) adalah...",
    options: [
      "Ion K+ dan Cl-",
      "Ion Na+ dan Ca2+",
      "Ion Mg2+ murni",
      "Ion HCO3-"
    ],
    answer: 1,
    explanation: "Cetusan eksitasi berlebih ditandai oleh influks arus ion Na+ dan Ca2+ ke dalam sel neuron, memicu potensial aksi cepat dan berulang[span_19](start_span)[span_19](end_span)."
  },
  {
    id: 12, category: "Patofisiologi & Ambang Bangkitan",
    question: "Penghentian pemberian agonis GABA secara mendadak (misal: penarikan konsumsi alkohol atau benzodiazepin) dapat memicu kejang karena...",
    options: [
      "Hilangnya secara mendadak transmisi inhibitori di otak",
      "Peningkatan masif pembentukan mielin baru",
      "Penurunan kadar gula darah intraseluler murni",
      "Sumbatan mekanik pada pembuluh darah serebral"
    ],
    answer: 0,
    explanation: "Penghentian zat agonis GABA memicu hilangnya kontrol inhibisi sinaps secara mendadak sehingga aktivitas eksitatorik otak menjadi dominan[span_20](start_span)[span_20](end_span)."
  },
  {
    id: 13, category: "Patofisiologi & Ambang Bangkitan",
    question: "Berapakah persentase risiko keturunan mengalami epilepsi jika salah satu orang tua menderita epilepsi (dibandingkan insidensi populasi normal 1-2%)?",
    options: [
      "Sekitar 6%",
      "Sekitar 50%",
      "Sekitar 80%",
      "0% (tidak diwariskan)"
    ],
    answer: 0,
    explanation: "Pada populasi umum insidensi epilepsi adalah 1-2%, sedangkan jika orang tua menderita epilepsi, risiko keturunannya meningkat menjadi sekitar 6%[span_21](start_span)[span_21](end_span)."
  },

  // ── 3. KLASIFIKASI BANGKITAN (FOKAL VS UMUM) (7 Soal) ────────────────────
  {
    id: 14, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Perbedaan utama antara Bangkitan Fokal (Parsial) dan Bangkitan Umum (Generalized) berdasarkan keterlibatan hemisfer otak adalah...",
    options: [
      "Fokal melibatkan kedua hemisfer sejak awal, sedangkan Umum hanya 1 hemisfer",
      "Fokal terbatas pada sekelompok neuron di 1 hemisfer otak, sedangkan Umum melibatkan kedua hemisfer otak sejak awal",
      "Fokal selalu menyebabkan koma total, sedangkan Umum selalu sadar",
      "Tidak ada perbedaan secara neuroanatomi"
    ],
    answer: 1,
    explanation: "Bangkitan fokal bermula dari satu area di satu hemisfer otak, sedangkan bangkitan umum melibatkan kedua hemisfer sejak awal cetusan[span_22](start_span)[span_22](end_span)."
  },
  {
    id: 15, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Bangkitan Fokal Sederhana (Simple Partial Seizure) dibedakan dari Bangkitan Fokal Kompleks (Complex Partial Seizure) berdasarkan...",
    options: [
      "Kesadaran: Parsial Sederhana kesadaran TIDAK terganggu (aware), sedangkan Parsial Kompleks disertai gangguan kesadaran (impaired awareness)",
      "Durasi: Sederhana berlangsung > 30 menit, Kompleks < 10 detik",
      "Umur penderita: Sederhana hanya pada anak, Kompleks pada lansia",
      "Hasil EEG: Sederhana selalu normal, Kompleks selalu abnormal"
    ],
    answer: 0,
    explanation: "Fokal sederhana tidak disertai gangguan kesadaran (pasien tetap ingat dan sadar), sedangkan fokal kompleks mengalami penurunan/gangguan kesadaran[span_23](start_span)[span_23](end_span)."
  },
  {
    id: 16, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Bangkitan Umum tipe Absence (Lena / Petit Mal) memiliki ciri khas klinis berupa...",
    options: [
      "Kejang kaku seluruh tubuh disertai mulut berbusa selama 5 menit",
      "Gangguan kesadaran mendadak singkat (beberapa detik), menghentikan aktivitas, tatapan kosong ke depan, mata berkedip/fluttering, lalu pulih tanpa bingung",
      "Drop attack jatuh tiba-tiba akibat otot lemas",
      "Sentakan otot tunggal di malam hari"
    ],
    answer: 1,
    explanation: "Absence (lena) ditandai oleh tatapan kosong mendadak singkat (detik), pandangan terhenti, kedipan mata (3 cycle/sec), dan langsung pulih tanpa kebingungan pasca kejang[span_24](start_span)[span_24](end_span)."
  },
  {
    id: 17, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Gambaran EEG yang sangat khas pada Bangkitan Absence (Lena) adalah...",
    options: [
      "Gelombang lambat difus 1 Hz",
      "Kompleks gelombang paku-ombak (3 spike-and-wave cycles per second)",
      "Polyspikes menetap di regio occipital",
      "Isoelektrik (datar)"
    ],
    answer: 1,
    explanation: "EEG pada bangkitan absence menunjukkan pola khas 3 spike-wave discharge (3 siklus per detik) yang tersinkronisasi[span_25](start_span)[span_25](end_span)."
  },
  {
    id: 18, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Urutan fase yang BENAR pada Bangkitan Umum Tonik-Klonik (Grand Mal) adalah...",
    options: [
      "Fase Klonik (sentakan) -> Fase Tonik (kaku) -> Fase Penyembuhan",
      "Fase Jeritan/Tonik (kaku otot 10-30 dtk) -> Fase Klonik (kelojotan sentakan berulang 30-60 dtk) -> Fase Post-Ictal (lemas, bingung, tidur)",
      "Fase Automatisme -> Fase Drop attack -> Fase Jeritan",
      "Fase Absence -> Fase Mioklonik -> Fase Tonik"
    ],
    answer: 1,
    explanation: "Bangkitan Tonik-Klonik diawali fase tonik (kekakuan otot 10-30 dtk, sianosis), diikuti fase klonik (sentakan berulang 30-60 dtk, mulut berbusa), dan diakhiri fase post-ictal (bingung, lemas, tidur)[span_26](start_span)[span_26](end_span)."
  },
  {
    id: 19, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Gejala 'Automatisme' yang sering menyertai Bangkitan Fokal Kompleks meliputi perilaku involuntar stereotipik seperti...",
    options: [
      "Gerakan mengunyah, mengecapkan bibir, menelan, atau memegang-megang pakaian tanpa sadar",
      "Lari maraton sejauh 5 km tanpa henti",
      "Bicara bahasa asing secara fasih",
      "Kehilangan pendengaran permanen"
    ],
    answer: 0,
    explanation: "Automatisme adalah gerakan repetitif involuntar tak tersadar selama/setelah kejang, seperti gerakan mengunyah, menelan, mengecap bibir, atau mengancingkan baju[span_27](start_span)[span_27](end_span)."
  },
  {
    id: 20, category: "Klasifikasi Bangkitan (Fokal vs Umum)",
    question: "Bangkitan kejang tipe Atonik ('Drop Attack') ditandai oleh...",
    options: [
      "Pengerasan otot secara umum berlangsung < 60 detik",
      "Hilangnya tonus/kekuatan otot secara tiba-tiba yang menyebabkan penderita jatuh ke lantai dengan risiko cedera kepala",
      "Sentakan singkat seperti kejutan listrik pada lengan",
      "Kelemahan separuh badan menetap 24 jam"
    ],
    answer: 1,
    explanation: "Kejang atonik ditandai hilangnya tonus postural otot secara mendadak sehingga pasien langsung jatuh pingsan/terjerembap (drop attack)[span_28](start_span)[span_28](end_span)."
  },

  // ── 4. DIAGNOSIS & DIAGNOSIS BANDING (6 Soal) ─────────────────────────────
  {
    id: 21, category: "Diagnosis & Diagnosis Banding",
    question: "Manakah perbedaan khas antara Sinkop (Pingsan vaskular) dan Kejang (Seizure) pada evaluasi klinis?",
    options: [
      "Sinkop sering diawali rasa melayang/pucat, durasi sentakan < 15 detik, dan pemulihan cepat; sedangkan Kejang timbul abrupt, sianosis, gerakan klonik 30-60 detik, dan disertai post-ictal confusion",
      "Sinkop selalu disertai gigitan lidah dan inkontinensia urin masif",
      "Kejang selalu pulih spontan dalam 2 detik tanpa kebingungan",
      "Sinkop hanya terjadi saat tidur malam hari"
    ],
    answer: 0,
    explanation: "Sinkop diawali premonisi (nausea, pucat, melayang), sentakan singkat (<15 dtk), dan pemulihan cepat. Kejang berlangsung lebih lama (30-60 dtk), sianosis, dan sering disertai post-ictal confusion[span_29](start_span)[span_29](end_span)."
  },
  {
    id: 22, category: "Diagnosis & Diagnosis Banding",
    question: "Pemeriksaan penunjang utama yang paling penting untuk mengonfirmasi gambaran gelombang epileptiform serta membantu menentukan jenis bangkitan adalah...",
    options: [
      "Electroencephalography (EEG)",
      "Elektrokardiografi (EKG)",
      "Foto polos tengkorak AP/Lateral",
      "Lumbal pungsi rutin"
    ],
    answer: 0,
    explanation: "EEG adalah pemeriksaan penunjang utama untuk mendeteksi aktivitas epileptiform (spike/wave), menentukan jenis bangkitan, dan prognosis[span_30](start_span)[span_30](end_span)."
  },
  {
    id: 23, category: "Diagnosis & Diagnosis Banding",
    question: "Indikasi dilakukannya neuroimaging (Brain MRI / Head CT-Scan) pada pasien kejang meliputi kondisi berikut, KECUALI...",
    options: [
      "Semua bangkitan pertama yang diduga akibat kelainan struktural",
      "Ditemukan defisit neurologis fokal pada pemeriksaan fisik",
      "Bangkitan onset parsial/fokal atau onset usia > 25 tahun",
      "Kejang demam sederhana pertama kali pada anak usia 2 tahun yang pemeriksaan neurologisnya normal"
    ],
    answer: 3,
    explanation: "Neuroimaging diindikasikan pada kejang fokal, defisit neurologis fokal, onset >25 tahun, atau duga lesi struktural. Kejang demam sederhana tidak rutin membutuhkan neuroimaging[span_31](start_span)[span_31](end_span)."
  },
  {
    id: 24, category: "Diagnosis & Diagnosis Banding",
    question: "Modalitas pencitraan otak yang paling sensitif dan spesifik untuk mendeteksi Sklerosis Hipokampus, disgenesis kortikal, atau hemangioma kavernosa adalah...",
    options: [
      "Head CT-scan tanpa kontras",
      "Magnetic Resonance Imaging (MRI) otak",
      "USG Doppler Transkranial",
      "Foto Rontgen Servikal"
    ],
    answer: 1,
    explanation: "Brain MRI jauh lebih sensitif dan spesifik dibandingkan CT scan untuk mengidentifikasi lesi epileptogenik halus seperti sklerosis hipokampus dan malformasi kortikal[span_32](start_span)[span_32](end_span)."
  },
  {
    id: 25, category: "Diagnosis & Diagnosis Banding",
    question: "Tujuan pemeriksaan laboratorium darah rutin (seperti GDS, elektrolit, fungsi ginjal/hepar) pada awal evaluasi pasien kejang adalah...",
    options: [
      "Menyingkirkan diagnosis banding akibat gangguan metabolik/elektrolit dan sebagai baseline sebelum pemberian OAE",
      "Menentukan lokasi pasti fokus kejang di lobus temporal",
      "Menggantikan fungsi pemeriksaan EEG",
      "Memastikan apakah pasien membutuhkan tindakan pembedahan cito"
    ],
    answer: 0,
    explanation: "Pemeriksaan lab dilakukan untuk mengeliminasi kejang terprovokasi (hipoglikemia, hiponatremia, uremia) dan sebagai baseline keamanan organ sebelum memulai OAE[span_33](start_span)[span_33](end_span)."
  },
  {
    id: 26, category: "Diagnosis & Diagnosis Banding",
    question: "Kondisi kejang tiruan yang tidak didasari oleh aktivitas listrik abnormal di otak melainkan oleh faktor psikis dinamakan...",
    options: [
      "Psychogenic Non-Epileptic Seizures (PNES) / Non-epileptic seizure",
      "Absence seizure atypical",
      "Status epileptikus refrakter",
      "Myoclonic epilepsy"
    ],
    answer: 0,
    explanation: "PNES (Psychogenic Non-Epileptic Seizures) atau kejang non-epileptik adalah episode yang menyerupai kejang namun tidak disebabkan oleh luapan listrik abnormal otak[span_34](start_span)[span_34](end_span)."
  },

  // ── 5. TATA LAKSANA STATUS EPILEPTIKUS (7 Soal) ────────────────────────────
  {
    id: 27, category: "Tata Laksana Status Epileptikus",
    question: "Status Epileptikus didefinisikan secara klinis sebagai...",
    options: [
      "Kejang yang berlangsung terus-menerus selama 30 menit atau lebih, atau adanya 2 bangkitan/lebih di mana di antaranya tidak terdapat pemulihan kesadaran penuh",
      "Kejang singkat berlangsung 5 detik lalu sadar",
      "Kelemahan otot pasca kejang selama 10 menit",
      "Sensasi aura visual tanpa gerakan motorik"
    ],
    answer: 0,
    explanation: "Status Epileptikus adalah kejang kontinu >= 30 menit, atau kejang berulang tanpa pemulihan kesadaran di antara bangkitan (t1 resusitasi diawali sejak menit ke-5)[span_35](start_span)[span_35](end_span)."
  },
  {
    id: 28, category: "Tata Laksana Status Epileptikus",
    question: "Obat lini pertama (First-line) paling tepat untuk menghentikan kejang aktif pada Status Epileptikus (0-5/10 menit pertama) jika akses IV TERPASANG adalah...",
    options: [
      "IV Diazepam (0.2 mg/kgBB max 20 mg) atau IV Lorazepam (0.1 mg/kgBB)",
      "IV Fenobarbital bolus cepat",
      "Oral Karbamazepin via NGT",
      "IV Propofol infus kontinu"
    ],
    answer: 0,
    explanation: "Lini pertama status epileptikus dengan akses IV adalah golongan Benzodiazepin IV (IV Lorazepam atau IV Diazepam 0.2 mg/kgBB max 20 mg)[span_36](start_span)[span_36](end_span)."
  }
];
