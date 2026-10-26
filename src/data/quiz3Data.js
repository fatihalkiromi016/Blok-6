export const ALL_QUESTIONS = [
  // ── 1. KONSEP DASAR AUTOIMUN (4 Soal) ────────────────────────────────────
  {
    id: 1, category: "Konsep Dasar Autoimun",
    question: "Apa definisi umum dari penyakit autoimun menurut materi pengantar?",
    options: [
      "Kondisi di mana sistem kekebalan tubuh secara keliru menyerang sel-sel sehat pada tubuh sendiri",
      "Kondisi melemahnya sel darah putih akibat infeksi virus kronis",
      "Peradangan sistemik yang murni disebabkan oleh bakteri eksogen",
      "Degenerasi jaringan saraf secara perlahan akibat faktor usia lanjut"
    ],
    answer: 0,
    explanation: "Penyakit autoimun terjadi ketika sistem imun (kekebalan tubuh) secara keliru menyerang jaringan sehat pada tubuh (immune system attacks your body, damaging health tissues)."
  },
  {
    id: 2, category: "Konsep Dasar Autoimun",
    question: "Berapa banyak jenis penyakit autoimun yang diketahui secara medis saat ini?",
    options: [
      "Hanya sekitar 10 jenis",
      "Lebih dari 100 jenis penyakit yang berbeda",
      "Tepat 3 jenis kelainan utama",
      "Sekitar 50 jenis kelainan genetik"
    ],
    answer: 1,
    explanation: "Diketahui terdapat lebih dari 100 jenis penyakit autoimun yang berbeda, yang dapat menyerang berbagai sistem tubuh seperti sendi, kulit, sistem pencernaan, hingga saraf."
  },
  {
    id: 3, category: "Konsep Dasar Autoimun",
    question: "Manakah kelainan di bawah ini yang merupakan penyakit autoimun dengan target utama sistem saraf tepi (peripheral nerve)?",
    options: [
      "Multiple Sclerosis (MS)",
      "Myasthenia Gravis (MG)",
      "Guillain-Barre Syndrome (GBS)",
      "Alopecia areata"
    ],
    answer: 2,
    explanation: "Guillain-Barre Syndrome (GBS) menyerang radiks dan saraf tepi (polineuropati dan poliradikulopati). MS menyerang saraf pusat (otak/medula spinalis), sedangkan MG menyerang taut saraf-otot (NMJ)."
  },
  {
    id: 4, category: "Konsep Dasar Autoimun",
    question: "Penyakit autoimun di mana target serangannya adalah sambungan neuromuskular (neuromuscular junction) disebut...",
    options: [
      "Lupus nephritis",
      "Psoriasis",
      "Celiac disease",
      "Myasthenia Gravis"
    ],
    answer: 3,
    explanation: "Myasthenia Gravis adalah kelainan autoimun yang menyerang reseptor di area taut saraf-otot (neuromuscular junction), menyebabkan kelemahan otot."
  },

  // ── 2. GBS: PATOFISIOLOGI & TIPE (8 Soal) ───────────────────────────────
  {
    id: 5, category: "GBS: Patofis & Tipe",
    question: "Mekanisme patofisiologi awal pada GBS yang dipicu oleh infeksi sering dijelaskan melalui fenomena...",
    options: [
      "Molecular mimicry (kemiripan struktur antigen asing dengan self-antigen)",
      "Defisiensi imun sekunder (HIV-induced)",
      "Reaksi hipersensitivitas tipe I (anafilaktik)",
      "Degenerasi amyloid bawaan"
    ],
    answer: 0,
    explanation: "Infeksi (seperti C. jejuni) memicu GBS melalui 'molecular mimicry', di mana struktur protein/LPS patogen menyerupai gangliosida pada selubung saraf tepi, sehingga antibodi ikut menyerang saraf sendiri."
  },
  {
    id: 6, category: "GBS: Patofis & Tipe",
    question: "Secara klinis, ciri khas presentasi kelemahan pada Guillain-Barre Syndrome adalah...",
    options: [
      "Paralisis spastik asimetris lengan",
      "Paralisis flasid yang asenderen (menjalar dari bawah ke atas) dan akut",
      "Kelemahan fluktuatif yang memberat di sore hari",
      "Kelumpuhan separuh badan mendadak"
    ],
    answer: 1,
    explanation: "GBS dikenal juga sebagai acute ascending paralysis, yaitu kelemahan otot flasid yang asenderen (mulai dari tungkai bawah menjalar ke atas) secara cepat dalam beberapa hari/minggu."
  },
  {
    id: 7, category: "GBS: Patofis & Tipe",
    question: "Berdasarkan epidemiologi GBS, pernyataan yang benar adalah...",
    options: [
      "Hanya menyerang anak-anak di bawah 10 tahun",
      "Lebih sering menyerang ras kaukasia dan wanita",
      "Lebih banyak pada laki-laki dan insidensinya naik 20% setiap peningkatan usia 10 tahun",
      "Risiko menurun pada populasi usia tua"
    ],
    answer: 2,
    explanation: "GBS menyerang semua kelompok usia, namun insidensi meningkat 20% setiap kelipatan usia 10 tahun, dan lebih sering terjadi pada laki-laki daripada perempuan (men > women)."
  },
  {
    id: 8, category: "GBS: Patofis & Tipe",
    question: "Patogen infeksi bakteri pendahulu (antecedent event) yang paling sering dilaporkan memicu GBS (26%) adalah...",
    options: [
      "Cytomegalovirus",
      "Epstein-Barr virus",
      "Mycoplasma pneumoniae",
      "Campylobacter jejuni"
    ],
    answer: 3,
    explanation: "Campylobacter jejuni merupakan agen infeksi gastrointestinal penyerta (antecedent) terbanyak (sekitar 26%) yang berkaitan dengan timbulnya GBS."
  },
  {
    id: 9, category: "GBS: Patofis & Tipe",
    question: "Fase pada perjalanan GBS di mana gejala menetap, tidak memburuk maupun membaik, disebut...",
    options: [
      "Plateau phase",
      "Progressive phase",
      "Recovery phase",
      "Latency phase"
    ],
    answer: 0,
    explanation: "Plateau phase adalah masa stabil (biasanya setelah fase nadir) di mana kondisi pasien tidak memburuk maupun membaik, berfokus pada terapi suportif hingga fase pemulihan dimulai."
  },
  {
    id: 10, category: "GBS: Patofis & Tipe",
    question: "Subtipe Guillain-Barre Syndrome yang paling umum dijumpai (sekitar 85-90% kasus) adalah...",
    options: [
      "Acute Motor Axonal Neuropathy (AMAN)",
      "Acute Inflammatory Demyelinating Polyneuropathy (AIDP)",
      "Acute Motor and Sensory Axonal Neuropathy (AMSAN)",
      "Miller-Fisher Syndrome"
    ],
    answer: 1,
    explanation: "AIDP adalah subtipe paling umum dari GBS (85-90% kasus) yang didasari demyelinisasi selubung mielin akibat infiltrasi makrofag & limfosit."
  },
  {
    id: 11, category: "GBS: Patofis & Tipe",
    question: "Subtipe GBS di mana kerusakan murni menyerang membran akson motorik tanpa tanda demyelinisasi disebut...",
    options: [
      "Miller-Fisher Syndrome",
      "AMSAN",
      "Acute Motor Axonal Neuropathy (AMAN)",
      "Pharyngeal-cervical brachial variant"
    ],
    answer: 2,
    explanation: "AMAN (Acute Motor Axonal Neuropathy) merupakan subtipe aksonal motorik murni, berkaitan erat dengan seropositif Campylobacter, dan elektrofisiologi saraf sensoriknya biasanya normal."
  },
  {
    id: 12, category: "GBS: Patofis & Tipe",
    question: "Karakteristik klinis klasik dari subtipe Miller-Fisher Syndrome (MFS) meliputi triad...",
    options: [
      "Paralisis tungkai, retensi urin, gangguan kognitif",
      "Gagal napas akut, ptosis fluktuatif, fasikulasi",
      "Kelemahan unilateral wajah, nyeri bola mata, skotoma",
      "Ataksia, oftalmoplegia, dan arefleksia"
    ],
    answer: 3,
    explanation: "Pasien Miller-Fisher Syndrome hadir dengan trias klasik: ataxia (gangguan koordinasi), oftalmoplegia (kelumpuhan otot mata), dan arefleksia (refleks tendon menurun/hilang)."
  },

  // ── 3. GBS: DIAGNOSIS & TATALAKSANA (8 Soal) ────────────────────────────
  {
    id: 13, category: "GBS: Diagnosis & Tata Laksana",
    question: "Pemeriksaan cairan serebrospinal (Lumbal Pungsi) pada GBS secara khas akan menunjukkan gambaran...",
    options: [
      "Disosiasi sitoalbumin",
      "Disosiasi albuminositologik dengan pleositosis PMN masif",
      "Peningkatan glukosa ekstrim dengan protein rendah",
      "Hitung sel limfosit tinggi (>500/mm3) tanpa protein"
    ],
    answer: 0,
    explanation: "Temuan khas GBS pada cairan serebrospinal adalah disosiasi sitoalbumin: yaitu kenaikan kadar protein tanpa disertai kenaikan jumlah leukosit (sel)."
  },
  {
    id: 14, category: "GBS: Diagnosis & Tata Laksana",
    question: "Alasan patofisiologis mengapa protein meningkat tajam pada ruang subarachnoid/LCS pasien GBS adalah karena...",
    options: [
      "Virus C. jejuni mensekresi protein eksotoksin",
      "Hiperemi dan dilatasi pembuluh darah akibat inflamasi menyebabkan transudasi protein serum ke LCS",
      "Makrofag memproduksi protein Bence-Jones",
      "Kerusakan otot membebaskan mioglobin ke cairan otak"
    ],
    answer: 1,
    explanation: "Reaksi inflamasi pada radiks saraf menyebabkan hiperemi, dilatasi, dan edema yang menimbulkan transudasi protein dari serum menyeberang masuk ke dalam ruang subarachnoid dan LCS."
  },
  {
    id: 15, category: "GBS: Diagnosis & Tata Laksana",
    question: "Menurut Kriteria Diagnosis Asbury, fitur klinis yang WAJIB ada untuk menegakkan diagnosis GBS meliputi...",
    options: [
      "Demam tinggi saat kelumpuhan dan gangguan sensorik berat",
      "Kelemahan menjalar dari kepala ke kaki (descending)",
      "Kelemahan progresif pada lengan/tungkai dan arefleksia (atau penurunan refleks tendon)",
      "Adanya ptosis mata yang bertambah buruk saat sore hari"
    ],
    answer: 2,
    explanation: "Features needed dalam Kriteria Asbury adalah: (1) Progressive weakness pada tungkai/lengan dan (2) Areflexia (atau decreased tendon reflexes) pada anggota gerak yang lemah."
  },
  {
    id: 16, category: "GBS: Diagnosis & Tata Laksana",
    question: "Temuan uji konduksi saraf (elektrofisiologi) yang mengonfirmasi adanya blok konduksi, penurunan KCV, dan temporal dispersion mendiagnosis subtipe...",
    options: [
      "AMAN (Acute Motor Axonal Neuropathy)",
      "AMSAN (Acute Motor Sensory Axonal Neuropathy)",
      "Clinically Isolated Syndrome (CIS)",
      "AIDP (Acute Inflammatory Demyelinating Polyneuropathy)"
    ],
    answer: 3,
    explanation: "Penurunan kecepatan hantar saraf (KCV), pemanjangan latensi distal, gelombang F memanjang, dispersi temporal, dan blok konduksi adalah ciri klinis kerusakan mielin (AIDP / demyelinating)."
  },
  {
    id: 17, category: "GBS: Diagnosis & Tata Laksana",
    question: "Opsi tatalaksana imunoterapi utama yang terbukti memodifikasi perjalanan penyakit GBS (mempercepat pemulihan) adalah...",
    options: [
      "Plasma exchange (plasmapheresis) dan Intravenous Immunoglobulin (IVIG)",
      "Antibiotik dosis tinggi jangka panjang",
      "Steroid oral dosis rumatan",
      "Inhibitor asetilkolinesterase"
    ],
    answer: 0,
    explanation: "Modalitas utama terapi pemodifikasi penyakit (disease modifying therapy) pada GBS adalah Plasma Exchange dan IVIG."
  },
  {
    id: 18, category: "MG: Mekanisme & Klinis",
    question: "Myasthenia Gravis didefinisikan secara klinis sebagai...",
    options: [
      "Penyakit degeneratif korda spinalis",
      "Penyakit autoimun dengan kelemahan fluktuatif pada otot ekstraokular, bulbar, dan proksimal",
      "Sindrom kelemahan otot asenderen akut disertai arefleksia",
      "Peradangan otot lokal akibat infeksi"
    ],
    answer: 1,
    explanation: "MG ditandai dengan kelemahan yang berfluktuasi (memburuk dengan aktivitas, membaik dengan istirahat) terutama menyerang otot mata (ekstraokular), menelan/bicara (bulbar), dan anggota gerak proksimal."
  },
  {
    id: 19, category: "MG: Mekanisme & Klinis",
    question: "Patofisiologi mendasar dari terjadinya kelemahan pada Myasthenia Gravis adalah...",
    options: [
      "Rusaknya mielin di korda spinalis cervical",
      "Defisit produksi asetilkolin dari vesikel presinaps",
      "Adanya antibodi yang memblokir, merusak, atau mengubah Reseptor Asetilkolin (AChR) di post-sinaps",
      "Spasme otot polos akibat hiperaktivitas kalsium"
    ],
    answer: 2,
    explanation: "Pada MG, antibodi autoimun mengikat reseptor asetilkolin (AChR) di post-sinaps, menghalangi ikatan asetilkolin dan menginisiasi degradasi reseptor (penurunan jumlah reseptor)."
  },
  {
    id: 20, category: "MG: Mekanisme & Klinis",
    question: "Faktor struktural yang menyebabkan Taut Saraf-Otot (NMJ) rentan terhadap serangan autoimun adalah...",
    options: [
      "Kandungan protein yang sangat tinggi",
      "Celah sinaps yang terlalu lebar",
      "Dilalui langsung oleh pembuluh arteri besar",
      "NMJ tidak memiliki blood-nerve barrier (sawar darah-saraf)"
    ],
    answer: 3,
    explanation: "NMJ rentan diserang oleh antibodi sirkulasi karena area taut saraf-otot tidak dilindungi oleh sawar darah-saraf (blood-nerve barrier)."
  },

  // ── 4. MG: TES & TATALAKSANA (7 Soal) ───────────────────────────────────
  {
    id: 21, category: "MG: Tes & Tatalaksana",
    question: "Apabila pasien dicurigai MG tetapi hasil antibodi AChR negatif (seronegatif MG), pemeriksaan antibodi lanjutan yang disarankan adalah...",
    options: [
      "Antibodi MuSK (muscle-specific kinase)",
      "Pita oligoklonal LCS",
      "Antibodi gangliosida GQ1b",
      "Anti-dsDNA"
    ],
    answer: 0,
    explanation: "Pasien generalized MG yang negatif AChR-Ab (seronegatif) seringkali memiliki antibodi terhadap MuSK (ditemukan pada 38-50% kasus seronegatif)."
  },
  {
    id: 22, category: "MG: Tes & Tatalaksana",
    question: "Manuver pemeriksaan fisik neurologi di mana kelopak mata melenting/menyentak ke atas secara berlebihan setelah pasien melihat ke bawah lalu lurus disebut...",
    options: [
      "Lhermitte's sign",
      "The Cogan Sign (Cogan's lid twitch)",
      "Wartenberg Test",
      "Hoffmann sign"
    ],
    answer: 1,
    explanation: "Cogan's lid twitch adalah tanda klinis ptosis MG di mana terjadi overshoot atau twitch singkat (sentakan kelopak ke atas) saat pasien kembali melihat lurus setelah melirik ke bawah."
  },
  {
    id: 23, category: "MG: Tes & Tatalaksana",
    question: "Dasar teori mengapa Ice Pack Test (kompres es) dapat memperbaiki ptosis pada pasien MG secara temporer adalah...",
    options: [
      "Es mematikan ujung saraf simpatis",
      "Pembuluh darah menyempit menahan aliran antibodi",
      "Pendinginan memperbaiki efisiensi transmisi neuromuskular (menghambat fungsi asetilkolinesterase lokal)",
      "Suhu dingin menstimulasi epinefrin otot"
    ],
    answer: 2,
    explanation: "Kompres dingin (es) menurunkan suhu jaringan lokal yang memperlambat aktivitas enzim Asetilkolinesterase, sehingga transmisi neuromuskular membaik dan ptosis terangkat sementera."
  },
  {
    id: 24, category: "MG: Tes & Tatalaksana",
    question: "Agen farmakologi yang digunakan dalam Tensilon Test karena onsetnya yang sangat cepat (30-45 detik) adalah...",
    options: [
      "Pyridostigmine",
      "Azathioprine",
      "Prednisone",
      "Edrophonium chloride"
    ],
    answer: 3,
    explanation: "Edrophonium (Tensilon) adalah inhibitor asetilkolinesterase yang bekerja sangat cepat dan berdurasi pendek, ideal digunakan sebagai alat tes konfirmasi MG."
  },
  {
    id: 25, category: "MG: Tes & Tatalaksana",
    question: "Temuan konfirmatif pada uji Repetitive Nerve Stimulation (RNS) untuk MG ditandai dengan adanya...",
    options: [
      "Decrement (penurunan potensial aksi) >10% antara stimulasi pertama dan kelima pada frekuensi lambat",
      "Peningkatan aksi potensial secara drastis setelah olahraga",
      "Kecapatan hantar saraf sangat melambat (KCV turun)",
      "Potensial fibrilasi spontan saat istirahat"
    ],
    answer: 0,
    explanation: "Diagnosis elektrofisiologi MG ditegakkan bila RNS frekuensi lambat (2-3 Hz) menunjukkan *decrement* (penurunan amplitudo CMAP) >10% antara potensial pertama dan kelima."
  },
  {
    id: 26, category: "MG: Tes & Tatalaksana",
    question: "Terapi simptomatik lini pertama untuk pasien MG yang bekerja dengan cara mencegah pemecahan asetilkolin adalah...",
    options: [
      "Intravenous immunoglobulin",
      "Pyridostigmine (Mestinon)",
      "Metilprednisolon intravena",
      "Interferon-beta"
    ],
    answer: 1,
    explanation: "Pyridostigmine (Mestinon) adalah inhibitor asetilkolinesterase yang digunakan sebagai pengobatan simptomatik utama per-oral untuk meningkatkan kekuatan otot."
  },
  {
    id: 27, category: "MG: Tes & Tatalaksana",
    question: "Mekanisme kerja Intravenous Immunoglobulin (IVIG) dalam meredakan kekambuhan akut MG dan GBS secara teori meliputi hal-hal berikut, KECUALI...",
    options: [
      "Mengencerkan autoantibodi abnormal dalam tubuh pasien",
      "Berikatan dengan autoantibodi patologis dan melumpuhkannya",
      "Meningkatkan regenerasi selubung mielin secara langsung oleh makrofag",
      "Menekan produksi imunoglobulin G (IgG) endogen host"
    ],
    answer: 2,
    explanation: "IVIG bekerja memodulasi sistem imun (mengencerkan antibodi, memblokir interaksi kompleks imun, menekan produksi IgG). Ia tidak secara langsung memperbaiki atau menumbuhkan myelin."
  },

  // ── 5. MS: PATOFISIOLOGI & GEJALA (6 Soal) ──────────────────────────────
  {
    id: 28, category: "MS: Patofis & Gejala",
    question: "Area anatomi manakah yang diserang secara patologis oleh Multiple Sclerosis?",
    options: [
      "Saraf tepi lengan dan tungkai",
      "Sinaps pada sambungan neuromuskular",
      "Kelenjar timus dan nodus limfa",
      "Sistem saraf pusat (otak, korda spinalis, saraf optik)"
    ],
    answer: 3,
    explanation: "Multiple Sclerosis menyerang sistem saraf pusat (CNS), menyebabkan hilangnya lapisan mielin pada saraf di otak, medula spinalis, dan nervus optikus."
  },
  {
    id: 29, category: "MS: Patofis & Gejala",
    question: "Berdasarkan materi epidemiologi, kelompok manakah yang paling berisiko terkena Multiple Sclerosis?",
    options: [
      "Pria usia lanjut (>60 tahun), di ekuator",
      "Anak-anak dan remaja prasekolah",
      "Individu ras Afrika di negara kepulauan tropis",
      "Wanita usia dewasa muda (20-50 tahun), terutama Kaukasia di daerah iklim sedang"
    ],
    answer: 3,
    explanation: "MS dominan mengenai wanita (rasio 3:1), onset paling sering pada mid-20's hingga early 30's, banyak dijumpai pada populasi kaukasia dan wilayah yang jauh dari khatulistiwa (kurang vitamin D)."
  },
  {
    id: 30, category: "MS: Patofis & Gejala",
    question: "Tanda neurologis sensorik berupa sensasi kejut listrik mendadak yang menjalar dari tulang belakang ke tungkai/lengan saat pasien menundukkan kepala (fleksi leher) disebut...",
    options: [
      "Lhermitte's Sign",
      "Tinel's Sign",
      "Brudzinski's Sign",
      "Kernig's Sign"
    ],
    answer: 0,
    explanation: "Lhermitte's sign adalah sensasi tersetrum akibat demyelinisasi saraf di korda spinalis servikal (cervical cord), yang terpicu saat pasien melakukan fleksi leher."
  },
  {
    id: 31, category: "MS: Patofis & Gejala",
    question: "Episode pertama presentasi klinis demyelinisasi akut (sebelum kriteria MS tegak sepenuhnya) secara medis disebut...",
    options: [
      "Acute motor axonal episode",
      "Clinically Isolated Syndrome (CIS)",
      "Primer inflamasi attack",
      "Fulminant MS episode"
    ],
    answer: 1,
    explanation: "Episode pertama dari manifestasi klinis yang sugestif ke arah penyakit demyelinasi (sebelum dipastikan DIT/DIS relaps lanjutan) disebut Clinically Isolated Syndrome (CIS)."
  },
  {
    id: 32, category: "MS: Patofis & Gejala",
    question: "Faktor lingkungan yang sering dikaitkan secara epidemiologis meningkatkan risiko berkembangnya MS adalah...",
    options: [
      "Sinar matahari berlebihan",
      "Infeksi kronis cacing perut",
      "Defisiensi Vitamin D, merokok, dan riwayat infeksi virus Epstein-Barr (EBV)",
      "Vaksinasi masa kecil"
    ],
    answer: 2,
    explanation: "Risiko MS (Environmental/Infectious risk) sangat berkaitan dengan letak geografis (jarak dari ekuator/kurang Vitamin D), paparan EBV, dan kebiasaan merokok."
  },
  {
    id: 33, category: "MS: Patofis & Gejala",
    question: "Gejala klinis CIS atau serangan MS awal yang paling umum melibatkan nervus kranialis adalah...",
    options: [
      "Telinga berdenging parah",
      "Kelemahan saraf fasialis bilateral",
      "Gangguan penciuman total (anosmia)",
      "Menurunnya tajam penglihatan pada satu mata disertai nyeri gerak bola mata (neuritis optik)"
    ],
    answer: 3,
    explanation: "Gejala umum yang merupakan debut MS (CIS) adalah Optic Neuritis, yang bermanifestasi berupa penurunan penglihatan unilateral dengan nyeri pergerakan mata."
  },

  // ── 6. MS: KRITERIA & KLASIFIKASI (6 Soal) ──────────────────────────────
  {
    id: 34, category: "MS: Kriteria & Klasifikasi",
    question: "Kriteria radiologis esensial dari Kriteria McDonald (2010) untuk mengonfirmasi diagnosis Multiple Sclerosis harus membuktikan adanya...",
    options: [
      "Dissemination in Space (DIS) dan Dissemination in Time (DIT)",
      "Pengecilan lobus frontal dan parietal secara merata",
      "Lesi spesifik hanya di ganglia basalis otak",
      "Hemoragi mikro di parenkim otak tanpa henti"
    ],
    answer: 0,
    explanation: "Kriteria McDonald mensyaratkan bukti DIS (lesi tersebar di minimal 2 area anatomi tipikal: periventrikuler, jukstakortikal, infratentorial, korda) dan DIT (lesi menyebar seiring waktu/ada relaps)."
  },
  {
    id: 35, category: "MS: Kriteria & Klasifikasi",
    question: "Subtipe MS yang mencakup sekitar 85% dari seluruh kasus, ditandai episode eksaserbasi (relaps) akut yang diikuti pemulihan penuh atau stabil, adalah...",
    options: [
      "Secondary Progressive (SPMS)",
      "Relapsing-Remitting (RRMS)",
      "Progressive-Relapsing (PRMS)",
      "Primary Progressive (PPMS)"
    ],
    answer: 1,
    explanation: "RRMS (Relapsing-Remitting MS) adalah subtipe terbanyak (85%). Pasien mengalami serangan inflamasi akut diselingi masa remisi atau stabil tanpa progresivitas perburukan di antara serangan."
  },
  {
    id: 36, category: "MS: Kriteria & Klasifikasi",
    question: "Manakah karakteristik dari Primary Progressive MS (PPMS)?",
    options: [
      "Perburukan mematikan dalam hitungan jam (fulminan)",
      "Disertai remisi total di antara serangan",
      "Kondisi perlahan memburuk secara kontinu sejak awal gejala tanpa adanya remisi atau episode relaps yang jelas",
      "Didahului oleh RRMS yang bertahan hingga 20 tahun"
    ],
    answer: 2,
    explanation: "PPMS (Primary Progressive MS) berkembang progresif sejak awitan gejala tanpa pernah mengalami relaps berulang atau remisi yang teridentifikasi tajam."
  },
  {
    id: 37, category: "MS: Kriteria & Klasifikasi",
    question: "Sekitar 75% pasien dengan riwayat awal RRMS, perlahan defisit neurologisnya mulai memburuk progresif meskipun tanpa relaps nyata. Fase subtipe ini dinamakan...",
    options: [
      "Malignant MS",
      "Clinically Isolated Syndrome",
      "Primary Progressive",
      "Secondary Progressive (SPMS)"
    ],
    answer: 3,
    explanation: "Secondary Progressive MS (SPMS) terjadi pada individu yang awalnya didiagnosis dengan RRMS, di mana gejala sisa mulai memberat secara gradual seiring berjalannya tahun (fase sekunder)."
  },
  {
    id: 38, category: "MS: Kriteria & Klasifikasi",
    question: "Area otak atau medulla spinalis yang termasuk kategori area 'tipikal MS' untuk menghitung DIS pada kriteria McDonald adalah...",
    options: [
      "Periventrikuler, jukstakortikal, infratentorial, dan korda spinalis",
      "Lobus oksipital superfisial dan epitel luar otak",
      "Taut neuromuscular lengan atas",
      "Selaput meninges"
    ],
    answer: 0,
    explanation: "Minimal 2 dari 4 area tipikal: periventrikular, jukstakortikal, infratentorial, dan medula spinalis (korda spinalis) harus memiliki lesi radiologis untuk memenuhi syarat DIS."
  },
  {
    id: 39, category: "MS: Kriteria & Klasifikasi",
    question: "Syarat utama mendefinisikan sebuah 'Eksaserbasi/Relaps' MS yang sah adalah...",
    options: [
      "Berlangsung kilat kurang dari 5 menit",
      "Gejala baru harus bertahan lebih dari 24 jam dan terpisah \ge 30 hari dari relaps sebelumnya",
      "Dibarengi demam dan leukositosis",
      "Terjadi perubahan genetik langsung dalam tubuh pasien"
    ],
    answer: 1,
    explanation: "Relaps (flare-up) harus bertahan lebih dari 24 jam dan terpisah jarak waktu >30 hari (satu bulan) dari episode perburukan sebelumnya."
  },

  // ── 7. TATALAKSANA KOMPREHENSIF (11 Soal, tersebar ke Cat 7 & 8) ────────
  {
    id: 40, category: "Tatalaksana Komprehensif",
    question: "Pilar utama pengobatan serangan akut (relapse) pada penderita MS untuk memadamkan inflamasi cepat adalah pemberian...",
    options: [
      "Antibiotik kombinasi makrolida",
      "Injeksi racun botulinum (Botox)",
      "Metilprednisolon (Solu-Medrol) atau Deksametason intravena dosis tinggi (3-5 hari)",
      "Operasi dekompresi tulang belakang"
    ],
    answer: 2,
    explanation: "Kortikosteroid dosis tinggi IV (seperti Solu-Medrol) diberikan selama 3-5 hari untuk menekan inflamasi segera dan menghentikan eksaserbasi lebih cepat."
  },
  {
    id: 41, category: "Tatalaksana Komprehensif",
    question: "Tujuan pengobatan jangka panjang DMT (Disease Modifying Therapies) seperti Interferon-beta pada MS adalah...",
    options: [
      "Hanya meredakan nyeri sementara",
      "Memulihkan mielin secara sempurna seperti sedia kala",
      "Menjamin pasien kebal selamanya dari infeksi virus primer",
      "Mengurangi frekuensi relaps, mengurangi keparahan, dan memperlambat progresivitas disabilitas"
    ],
    answer: 3,
    explanation: "DMT dirancang untuk memperlambat MS (slowing down MS): mencegah kekambuhan baru (relaps), menekan aktivitas lesi MRI, serta menunda progresivitas cacat."
  },
  {
    id: 42, category: "Tatalaksana Komprehensif",
    question: "Dua terapi utama yang dipakai jika steroid gagal atau pasien tidak dapat menolerir efek steroid pada eksaserbasi akut MS adalah...",
    options: [
      "ACTH gel (H.P. Acthar Gel) atau IVIG/Plasma exchange",
      "Pil KB dan suplemen besi",
      "Tensilon test berulang",
      "Isoniazid dosis tinggi"
    ],
    answer: 0,
    explanation: "Jika steroid kontraindikasi atau gagal, ACTH gel adalah alternatif hormon, begitu pula plasmapheresis atau IVIG sebagai langkah intervensi penyelamatan inflamasi eksaserbasi akut."
  },
  {
    id: 43, category: "Tatalaksana Komprehensif",
    question: "Pasien MS seringkali mengalami kekakuan ekstrem (spastisitas). Obat manakah yang diindikasikan untuk mengurangi gejala spastik (muscle spasms)?",
    options: [
      "Ritalin atau Provigil",
      "Lioresal (Baclofen), Zanaflex (Tizanidine), atau Dantrium",
      "Prozac atau Zoloft",
      "Detrol atau Ditropan"
    ],
    answer: 1,
    explanation: "Obat relaksan otot seperti Baclofen (Lioresal), Tizanidine, dan Diazepam diindikasikan langsung untuk meredakan spastisitas/kekakuan kaki pasien MS."
  },
  {
    id: 44, category: "Tatalaksana Komprehensif",
    question: "Bila pasien MS mengeluhkan fatigue (kelelahan berat), manajemen farmakologisnya meliputi pemberian...",
    options: [
      "Amantadine, Modafinil (Provigil), atau Ritalin",
      "Tolterodine",
      "Karbamazepin",
      "Tadalafil"
    ],
    answer: 0,
    explanation: "Fatigue kronis diobati menggunakan CNS stimulan ringan atau antiviral pengontrol letargi seperti Amantadine, Modafinil, atau methylphenidate (Ritalin)."
  },
  {
    id: 45, category: "Tatalaksana Komprehensif",
    question: "Berdasarkan bagan 'Take Home Messages', perbedaan esensial dari Guillain-Barre Syndrome (GBS) dan Myasthenia Gravis (MG) terletak pada...",
    options: [
      "GBS menyerang korda spinalis, sedangkan MG menyerang retina mata",
      "GBS memberikan gejala kelemahan spastik, sementara MG kelemahan saraf otonom",
      "GBS menyebabkan kelemahan asenderen menetap & arefleksia pasca infeksi, MG memberikan ptosis fluktuatif tanpa arefleksia murni akibat defek di NMJ",
      "GBS dapat sembuh total dengan kompres es, MG tidak"
    ],
    answer: 2,
    explanation: "Ringkasan membedakan jelas: GBS -> post infeksi, asimetris ascending, stocks/gloves, disosiasi sitoalbumin. MG -> NMJ, okular ptosis, fluktuatif, Tensilon & Ice pack test."
  },
  {
    id: 46, category: "Tatalaksana Komprehensif",
    question: "Tanda bahaya pada fase progresif GBS yang paling menuntut perawatan darurat ICU adalah...",
    options: [
      "Kerontokan rambut alis bilateral",
      "Kehilangan kemampuan sensoris perabaan (hipestesi) di kaki dan jari tangan",
      "Pandangan ganda ringan saat bangun tidur",
      "Kelemahan otot respirasi interkostal dan diafragma yang memicu henti napas"
    ],
    answer: 3,
    explanation: "Kelemahan ekstrem akibat GBS di fase progresif berisiko melumpuhkan otot pernapasan secara mendadak sehingga mutlak butuh bantuan ventilasi (ventilator) dan observasi ketat."
  },
  {
    id: 47, category: "Tatalaksana Komprehensif",
    question: "Kapan kelainan disosiasi sitoalbumin (LCS) pada GBS dipastikan paling spesifik/mudah terbaca secara biokimiawi?",
    options: [
      "Pada hari pertama gejala kelumpuhan muncul",
      "Setelah relaps kedua berjarak 30 hari",
      "Cairan LCS sering normal pada 48 jam awal, peningkatan protein lebih nyata dan diagnostik di akhir minggu pertama",
      "Hanya setelah pengobatan IVIG usai"
    ],
    answer: 2,
    explanation: "Peningkatan level protein seringkali belum tampak (normal) dalam 48 jam pertama paralisis, tetapi naik mencolok pada akhir minggu pertama penyakit (by the end of one week)."
  },
  {
    id: 48, category: "Tatalaksana Komprehensif",
    question: "Obat lini belakang MG, kelas 'immunosuppression' yang bertindak dengan cara mendepresi proliferasi imun kronik/jangka panjang di antaranya adalah...",
    options: [
      "Pyridostigmine & Neostigmine",
      "Imuran (Azathioprine), Cellcept (Mycophenolate Mofetil), dan Siklosporin",
      "Ampyra & Colace",
      "Flomax & Hytrin"
    ],
    answer: 1,
    explanation: "Untuk imunosupresi kronis, MG diterapi secara 'long term fix' menggunakan obat Imuran, Cellcept, Cyclosporine, atau kortikosteroid oral."
  },
  {
    id: 49, category: "Tatalaksana Komprehensif",
    question: "Komplikasi buang air kecil tak terkendali (Bladder Dysfunction) pada MS ditangani menggunakan lini farmasi antispasmodik saluran kemih, yaitu...",
    options: [
      "Miralax dan Dulcolax",
      "Ditropan (Oxybutynin) atau Detrol (Tolterodine)",
      "Tegretol dan Neurontin",
      "Atarax"
    ],
    answer: 1,
    explanation: "Disfungsi kandung kemih seperti overactive bladder diobati menggunakan obat antikolinergik penahan kandung kemih (Ditropan, Detrol, Vesicare, Enablex)."
  },
  {
    id: 50, category: "Tatalaksana Komprehensif",
    question: "Peran uji Wartenberg Test yang positif pada penderita Myasthenia Gravis bermakna...",
    options: [
      "Refleks fisiologis lutut melemah/hilang sempurna",
      "Kaku persendian kaku leher saat menengok",
      "Timbulnya ptosis bola mata setelah pasien diinstruksikan menatap fokus (sustained upward gaze) terus-menerus",
      "Rasa kebas merambat di area dada"
    ],
    answer: 2,
    explanation: "Wartenberg Test memprovokasi kelelahan otot mata: ptosis makin nampak turun/memburuk (fatigability) saat pasien diminta mempertahankan lirikan menatap ke atas beberapa detik."
  }
];
