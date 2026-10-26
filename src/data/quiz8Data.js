export const ALL_QUESTIONS = [
  // ── 1. BIOMEKANIKA & PATOFISIOLOGI (7 Soal) ──────────────────────────────
  {
    id: 1, category: "Biomekanika & Patofisiologi",
    question: "Definisi dari Trauma Kapitis (Traumatic Brain Injury) menurut Konsensus Neurotrauma adalah...",
    options: [
      "Trauma mekanik terhadap kepala baik langsung maupun tidak langsung yang menyebabkan gangguan fungsi fisik, kognitif, dan psikososial",
      "Gangguan sirkulasi pembuluh darah otak akibat sumbatan trombus murni tanpa benturan",
      "Kelainan degeneratif saraf tepi yang memicu kelemahan otot secara lambat",
      "Peradangan infeksius pada selubung otak akibat infeksi bakteri"
    ],
    answer: 0,
    explanation: "Trauma kapitis adalah trauma mekanik terhadap kepala baik langsung atau tidak langsung yang menyebabkan gangguan fungsi fisik, kognitif, dan psikososial baik temporer maupun permanen[cite: 8]."
  },
  {
    id: 2, category: "Biomekanika & Patofisiologi",
    question: "Mekanisme cedera di mana kerusakan jaringan otak terjadi pada sisi yang berlawanan dari titik benturan utama akibat pantulan otak di dalam tengkorak disebut...",
    options: [
      "Coup injury",
      "Contrecoup injury",
      "Penetrating injury",
      "Crushing injury"
    ],
    answer: 1,
    explanation: "Contrecoup injury terjadi pada sisi yang berlawanan dengan dampak benturan primer (coup) akibat akselerasi/deselerasi dan pantulan otak di dalam tengkorak[cite: 8]."
  },
  {
    id: 3, category: "Biomekanika & Patofisiologi",
    question: "Manakah pernyataan yang BENAR mengenai perbedaan Cedera Primer (Primary Brain Injury) dan Cedera Sekunder (Secondary Brain Injury)?",
    options: [
      "Cedera primer terjadi berjam-jam setelah trauma, sedangkan cedera sekunder terjadi tepat saat benturan",
      "Cedera primer terjadi seketika saat benturan akibat kekuatan mekanik, sedangkan cedera sekunder berkembang beberapa jam/hari setelahnya akibat kaskade metabolik, edema, dan iskemia",
      "Cedera primer selalu bersifat reversible, sedangkan cedera sekunder tidak dapat dicegah",
      "Cedera primer hanya terjadi pada anak-anak, sedangkan cedera sekunder hanya pada lansia"
    ],
    answer: 1,
    explanation: "Primary injury terjadi langsung saat trauma (kontusio, laserasi, DAI), sedangkan secondary injury menyusul dalam hitungan jam/hari akibat hematoma, edema, hipotensi, hipoksia, dan PTIK[cite: 8]."
  },
  {
    id: 4, category: "Biomekanika & Patofisiologi",
    question: "Edema serebri yang disebabkan oleh kegagalan pompa Na+/K+ ATPase akibat iskemia/anoksia sehingga ion Na+ dan air masuk membanjiri sel (intraseluler) dengan keutuhan BBB yang masih terjaga adalah...",
    options: [
      "Vasogenic Edema",
      "Cytotoxic Edema",
      "Interstitial Edema",
      "Osmotic Edema"
    ],
    answer: 1,
    explanation: "Cytotoxic edema terjadi akibat kegagalan Na+/K+ ATPase pump (metabolic failure), air masuk ke dalam sel (ICF expansion), dan Blood-Brain Barrier (BBB) masih utuh[cite: 8]."
  },
  {
    id: 5, category: "Biomekanika & Patofisiologi",
    question: "Vasogenic Edema pada TBI terjadi akibat mekanisme utama berupa...",
    options: [
      "Peningkatan permeabilitas/kerusakan Blood-Brain Barrier (BBB) sehingga protein plasma dan cairan menumpuk di ruang ekstraseluler (ISF)",
      "Penumpukan cairan serebrospinal periventrikel akibat hidrosefalus",
      "Penurunan osmolaritas plasma relatif terhadap jaringan otak",
      "Kegagalan pompa kalsium murni pada sel endotel"
    ],
    answer: 0,
    explanation: "Vasogenic edema ditandai dengan kerusakan/breakdown integritas BBB yang meningkatkan permeabilitas kapiler sehingga cairan kaya protein menumpuk di interstitial fluid (ISF)[cite: 8]."
  },
  {
    id: 6, category: "Biomekanika & Patofisiologi",
    question: "Penurunan tekanan darah sistemik (Hipotensi dengan SBP < 90 mmHg) sangat berbahaya pada TBI berat karena...",
    options: [
      "Dapat memicu perdarahan epidural spontan",
      "Mekanisme autoregulasi otak terganggu sehingga perfusi serebral menjadi sangat tergantung pada tekanan darah sistemik, yang memicu iskemia berat",
      "Menyebabkan penurunan kadar gula darah secara mendadak",
      "Menghambat penyerapan cairan serebrospinal di granulasio arachnoid"
    ],
    answer: 1,
    explanation: "Trauma otak merusak autoregulasi serebral, sehingga aliran darah/perfusi otak sepenuhnya tergantung pada tekanan darah sistemik; hipotensi akan langsung memicu iskemia otak berat[cite: 8]."
  },
  {
    id: 7, category: "Biomekanika & Patofisiologi",
    question: "Trias Cushing (Cushing's triad) yang merupakan tanda klinis bahaya dari Peningkatan Tekanan Intrakranial (PTIK) berat terdiri dari...",
    options: [
      "Takikardia, hipotensi, dan takipnea",
      "Bradikardia, hipertensi (sistolik meningkat/tekanan nadi melebar), dan depresi pernapasan (respirasi ireguler)",
      "Demam tinggi, kaku kuduk, dan kejang umum",
      "Miosis pupil bilateral, hipotermi, dan bradypnea"
    ],
    answer: 1,
    explanation: "Cushing triad sebagai tanda PTIK berat mencakup bradikardia, depresi pernapasan (respiratory depression), dan hipertensi[cite: 8]."
  },

  // ── 2. EDH & SDH (7 Soal) ────────────────────────────────────────────────
  {
    id: 8, category: "EDH & SDH",
    question: "Epidural Hematoma (EDH) adalah perdarahan yang terletak di antara...",
    options: [
      "Duramater dan Arakhnoid",
      "Tabula interna tulang tengkorak dan Duramater",
      "Arakhnoid dan Piamater",
      "Parenkim otak frontal dan temporal"
    ],
    answer: 1,
    explanation: "Epidural hematoma terjadi di ruang potensial antara tabula interna tulang tengkorak dan duramater[cite: 8]."
  },
  {
    id: 9, category: "EDH & SDH",
    question: "Sumber perdarahan pembuluh darah terbesar (85% kasus) pada Epidural Hematoma adalah robekan dari...",
    options: [
      "Bridging veins (vena jembatan)",
      "Arteri meningea media",
      "Arteri cerebri anterior",
      "Sinus sagittalis superior"
    ],
    answer: 1,
    explanation: "85% kasus EDH disebabkan oleh cedera/robekan arterial, terutamanya Arteri Meningea Media di daerah temporal[cite: 8]."
  },
  {
    id: 10, category: "EDH & SDH",
    question: "Fenomena klinis khas EDH di mana pasien sempat sadar dan alert sejenak setelah trauma, sebelum akhirnya mengalami penurunan kesadaran secara cepat dinamakan...",
    options: [
      "Battle's sign",
      "Lucid interval",
      "Post-traumatic amnesia",
      "Doll's eye phenomenon"
    ],
    answer: 1,
    explanation: "Lucid interval adalah periode singkat pasien sadar/alert setelah cedera awal, yang kemudian diikuti penurunan kesadaran cepat akibat ekspansi hematom[cite: 8]."
  },
  {
    id: 11, category: "EDH & SDH",
    question: "Gambaran khas Epidural Hematoma pada pemeriksaan Head CT-Scan tanpa kontras adalah...",
    options: [
      "Lesi ekstra-aksial berbentuk bulan sabit (crescent-shaped)",
      "Lesi hiperdens berbentuk bikonveks / cembung ganda (lens-shaped/lentiform)",
      "Bercak perdarahan petekie difus di corpus callosum",
      "Gambaran stellata di fosa posterior"
    ],
    answer: 1,
    explanation: "EDH memberikan gambaran hiperdens khas berbentuk bikonveks atau cembung ganda (lens-shaped/lentiform)[cite: 8]."
  },
  {
    id: 12, category: "EDH & SDH",
    question: "Subdural Hematoma (SDH) terjadi di antara duramater dan arakhnoid yang paling sering disebabkan oleh robekan...",
    options: [
      "Arteri meningea media",
      "Bridging veins (vena jembatan) yang berjalan ke sinus dural",
      "Arteri basilaris",
      "Arteri karotis interna"
    ],
    answer: 1,
    explanation: "Subdural Hematoma umumnya disebabkan oleh terancit/robeknya bridging veins (vena jembatan) yang melintasi ruang subdural[cite: 8]."
  },
  {
    id: 13, category: "EDH & SDH",
    question: "Gambaran patognomonik Subdural Hematoma (SDH) Akut pada CT-Scan kepala adalah...",
    options: [
      "Perdarahan hiperdens berbentuk cembung bikonveks",
      "Koleksi hiperdens berbentuk bulan sabit (crescent-shaped) menyusuri konveksitas hemisfer",
      "Perdarahan fokal berbentuk cincin di korteks",
      "Pengumpulan udara di ventrikel lateral (pneumosefalus)"
    ],
    answer: 1,
    explanation: "Acute SDH tampak sebagai koleksi hiperdens berbentuk bulan sabit (crescent-shaped) yang melintasi batas sutura menyusuri konveksitas hemisfer[cite: 8]."
  },
  {
    id: 14, category: "EDH & SDH",
    question: "Berdasarkan durasi onset klinisnya, Subdural Hematoma dikategorikan sebagai SDH Kronis (Chronic SDH) apabila gejala muncul dalam rentang...",
    options: [
      "0 - 3 hari post trauma",
      "3 - 14 hari post trauma",
      "15 hari atau lebih (>2 minggu) post trauma",
      "Hanya dalam 2 jam pertama"
    ],
    answer: 2,
    explanation: "Pembagian onset SDH: Akut (1-2/0-5 hari), Subakut (3-14/5 hari-beberapa minggu), dan Kronis (15 hari atau lebih / >3 bulan)[cite: 8]."
  },

  // ── 3. SAH & DAI (6 Soal) ────────────────────────────────────────────────
  {
    id: 15, category: "SAH & DAI",
    question: "Gejala klinis utama yang paling sering dikeluhkan pada kasus Perdarahan Subarakhnoid (SAH) adalah...",
    options: [
      "Nyeri kepala hebat mendadak yang dideskripsikan sebagai 'sakit kepala terburuk seumur hidup' disertai kaku kuduk",
      "Kelemahan anggota gerak tipe flaksid tanpa nyeri kepala",
      "Hilangnya pendengaran unilateral secara permanen",
      "Kehilangan memori jangka panjang tanpa kebingungan"
    ],
    answer: 0,
    explanation: "Gejala utama SAH adalah nyeri kepala hebat mendadak ('worst headache of my life') yang dapat disertai kaku kuduk (meningismus) dan kaku leher[cite: 8]."
  },
  {
    id: 16, category: "SAH & DAI",
    question: "Pada pemeriksaan Lumbar Puncture (LP) pasien SAH yang pemeriksaan CT-Scan awalnya meragukan, temuan khas berupa cairan LCS berwarna kekuningan akibat pemecahan hemoglobin disebut...",
    options: [
      "Pleositosis",
      "Xantokromia (xanthochromia)",
      "Pneumosefalus",
      "Halo sign positif"
    ],
    answer: 1,
    explanation: "Xanthochromia (warna LCS merah muda atau kuning) menunjukkan produk degradasi hemoglobin, mengindikasikan adanya darah di LCS setidaknya selama 2 jam[cite: 8]."
  },
  {
    id: 17, category: "SAH & DAI",
    question: "Komplikasi delayed cerebral ischemia (DCI) yang sering memicu morbiditas berat 4-14 hari pasca SAH disebabkan oleh...",
    options: [
      "Vasospasme pembuluh darah otak akibat zat spasmogenik hasil lisis darah subarakhnoid",
      "Infeksi bakteri sekunder pada parenkim otak",
      "Kebocoran berulang pembuluh darah kapiler kulit kepala",
      "Penurunan kadar eritrosit secara ekstrem"
    ],
    answer: 0,
    explanation: "DCI dan vasospasme disebabkan oleh zat spasmogenik dari lisis darah subarakhnoid yang memicu kontraksi otot polos dan kerusakan endotel pembuluh darah[cite: 8]."
  },
  {
    id: 18, category: "SAH & DAI",
    question: "Diffuse Axonal Injury (DAI) ditandai oleh kerusakan akson yang disebabkan oleh gaya akselerasi-deselerasi dan rotasi. Gejala klinis yang sangat khas pada DAI adalah...",
    options: [
      "Koma lama pasca trauma (prolonged coma) disertai disfungsi otonom dan demam tinggi",
      "Lucid interval yang jelas selama 24 jam",
      "Lumpuh layuh keempat ekstremitas tanpa penurunan kesadaran",
      "Kehilangan penglihatan bilateral mendadak"
    ],
    answer: 0,
    explanation: "Ciri klinis DAI adalah koma lama (prolonged coma) pasca trauma kapitis dan disfungsi saraf otonom (serta demam tinggi)[cite: 8]."
  },
  {
    id: 19, category: "SAH & DAI",
    question: "Temuan CT-Scan kepala pada fase awal (segera setelah cedera) pada penderita Diffuse Axonal Injury (DAI) sering kali memberikan gambaran...",
    options: [
      "Hematoma besar dengan midline shift > 10 mm",
      "Normal atau tidak menunjukkan tanda perdarahan masif/edema luas (mungkin hanya punctate hemorrhage kecil di corpus callosum)",
      "Bikonveks hiperdens luas di fosa anterior",
      "Fraktur impresi multiple"
    ],
    answer: 1,
    explanation: "Pada awal TBI, CT-Scan pasien DAI sering kali normal atau hanya menunjukkan mikro-perdarahan punctate; edema otak luas baru terlihat jelas pada CT ulangan setelah 24 jam[cite: 8]."
  },
  {
    id: 20, category: "SAH & DAI",
    question: "Lokasi anatomis yang paling sering mengalami lesi mikro pada Diffuse Axonal Injury (DAI) dan dapat dievaluasi dengan baik melalui MRI FLAIR/DWI adalah...",
    options: [
      "Corpus callosum (genu/splenium) dan batang otak",
      "Tulang sphenoid dan petrosus",
      "Spina servikalis C1-C2",
      "Pelvis dan asetabulum"
    ],
    answer: 0,
    explanation: "DAI paling sering melibatkan corpus callosum (genu dan splenium), periventrikular white matter, serta rostral brainstem[cite: 8]."
  },

  // ── 4. FRAKTUR BASIS CRANII (6 Soal) ─────────────────────────────────────
  {
    id: 21, category: "Fraktur Basis Cranii",
    question: "Tanda klinis khas dari Fraktur Basis Cranii Fosa Anterior adalah...",
    options: [
      "Battle's sign dan otorrhea",
      "Raccoon eyes (periorbital ecchymosis bilateral), rhinorrhea, dan anosmia",
      "Kelumpuhan N. VII dan N. VIII",
      "Tinnitus dan vertigo berat"
    ],
    answer: 1,
    explanation: "Fraktur basis cranii fosa anterior ditandai oleh Raccoon eyes (ekimosis periorbital bilateral), keluarnya cairan CSF dari hidung (rhinorrhea), dan gangguan N. I (anosmia)[cite: 8]."
  },
  {
    id: 22, category: "Fraktur Basis Cranii",
    question: "Keluarnya cairan jernih dari telinga (otorrhea) serta gangguan pada N. VII (fasialis) dan N. VIII (vestibulokoklearis) mengindikasikan fraktur basis cranii pada fosa...",
    options: [
      "Fosa Anterior",
      "Fosa Media",
      "Fosa Posterior",
      "Foramen Magnum"
    ],
    answer: 1,
    explanation: "Fraktur fosa media melibatkan tulang temporal/telinga tengah, menyebabkan otorrhea serta gangguan N. VII dan N. VIII[cite: 8]."
  },
  {
    id: 23, category: "Fraktur Basis Cranii",
    question: "Bilateral mastoid ecchymosis yang dikenal sebagai Battle's sign merupakan indikator klinis adanya fraktur basis cranii fosa...",
    options: [
      "Anterior",
      "Media",
      "Posterior",
      "Orbita"
    ],
    answer: 2,
    explanation: "Battle's sign (ekimosis mastoid/postaurikular) adalah tanda khas fraktur basis cranii fosa posterior[cite: 8]."
  },
  {
    id: 24, category: "Fraktur Basis Cranii",
    question: "Pemeriksaan sederhana di tepi tempat tidur (clinical bedside test) untuk membedakan cairan CSF yang bercampur darah dari hidung/telinga dinamakan tes...",
    options: [
      "Tinel test",
      "Halo sign test (cincin kuning mengelilingi bercak darah pada kasa absorban)",
      "Phalen test",
      "Doll's eye test"
    ],
    answer: 1,
    explanation: "Halo sign test dilakukan dengan meneteskan cairan berdarah ke kertas absorban; darah akan mengumpul di tengah membentuk lingkaran merah yang dikelilingi cincin kekuningan CSF[cite: 8]."
  },
  {
    id: 25, category: "Fraktur Basis Cranii",
    question: "Manifestasi klinis akibat keterlibatan Nervus Olfaktorius (N. I) pada fraktur fosa anterior adalah...",
    options: [
      "Anosmia (hilangnya kemampuan membau)",
      "Ptosis kelopak mata",
      "Disphagia",
      "Diplopia"
    ],
    answer: 0,
    explanation: "Fraktur fosa anterior yang melewati cribriform plate dapat merusak serabut Nervus Olfaktorius (N. I) sehingga memicu anosmia[cite: 8]."
  },
  {
    id: 26, category: "Fraktur Basis Cranii",
    question: "Komplikasi infeksi paling berbahaya yang dapat timbul akibat kebocoran CSF persisten (rhinorrhea/otorrhea) pada fraktur basis cranii adalah...",
    options: [
      "Meningitis / Pneumosefalus infektif",
      "Osteomeilitis femur",
      "Otitis eksterna ringan",
      "Abses retrofaring"
    ],
    answer: 0,
    explanation: "Robeknya duramater pada fraktur basis cranii menciptakan komunikasi langsung antara dunia luar/sinus dengan ruang subaraknoid yang berisiko tinggi memicu meningitis[cite: 8]."
  },

  // ── 5. KLASIFIKASI & GCS (6 Soal) ─────────────────────────────────────────
  {
    id: 27, category: "Klasifikasi & GCS",
    question: "Berdasarkan skor Glasgow Coma Scale (GCS), Traumatic Brain Injury diklasifikasikan menjadi Cedera Kepala Ringan (CKR), Sedang (CKS), dan Berat (CKB) berturut-turut adalah...",
    options: [
      "CKR: 13-15, CKS: 9-12, CKB: 3-8",
      "CKR: 14-15, CKS: 10-13, CKB: 3-9",
      "CKR: 12-15, CKS: 8-11, CKB: 3-7",
      "CKR: 15, CKS: 11-14, CKB: 3-10"
    ],
    answer: 0,
    explanation: "Klasifikasi derajat keparahan TBI berdasarkan GCS: Mild (CKR) = 13-15, Moderate (CKS) = 9-12, Severe (CKB) = 3-8[cite: 8]."
  },
  {
    id: 28, category: "Klasifikasi & GCS",
    question: "Seorang pasien korban kecelakaan membuka mata saat dipanggil nama dengan suara keras (E=3), merintih mengeluarkan suara tidak jelas / incomprehensible sounds (V=2), dan menarik anggota gerak saat dirangsang nyeri / withdraws (M=4). Berapakah total skor GCS dan kategori TBI pasien?",
    options: [
      "GCS 9, CKS (Cedera Kepala Sedang)",
      "GCS 8, CKB (Cedera Kepala Berat)",
      "GCS 10, CKS (Cedera Kepala Sedang)",
      "GCS 7, CKB (Cedera Kepala Berat)"
    ],
    answer: 0,
    explanation: "E=3, V=2, M=4 -> Total GCS = 9. Kategori GCS 9-12 adalah Moderate TBI (Cedera Kepala Sedang)[cite: 8]."
  },
  {
    id: 29, category: "Klasifikasi & GCS",
    question: "Respon motorik terbaik (M) pada penilaian GCS di mana pasien melakukan fleksi abnormal (decorticate posture) diberi skor...",
    options: [
      "M = 4",
      "M = 3",
      "M = 2",
      "M = 1"
    ],
    answer: 1,
    explanation: "Skor motorik GCS: 6=Obeys, 5=Localizes, 4=Withdraws, 3=Abnormal flexion (decorticate), 2=Extensor response (decerebrate), 1=Nil[cite: 8]."
  },
  {
    id: 30, category: "Klasifikasi & GCS",
    question: "Respon motorik terbaik (M) pada penilaian GCS di mana pasien melakukan ekstensi abnormal (decerebrate posture) diberi skor...",
    options: [
      "M = 4",
      "M = 3",
      "M = 2",
      "M = 1"
    ],
    answer: 2,
    explanation: "Respon ekstensi abnormal (decerebrate) mendapatkan skor M=2[cite: 8]."
  },
  {
    id: 31, category: "Klasifikasi & GCS",
    question: "Durasi Post-Traumatic Amnesia (PTA) pada kategori Mild TBI (CKR) adalah...",
    options: [
      "0 - 1 hari",
      "> 1 hari hingga < 7 hari",
      "> 7 hari",
      "> 1 bulan"
    ],
    answer: 0,
    explanation: "Kriteria klinis PTA: Mild TBI = 0-1 hari, Moderate TBI = >1 hingga <7 hari, Severe TBI = >7 hari[cite: 8]."
  },
  {
    id: 32, category: "Klasifikasi & GCS",
    question: "Pemeriksaan pupil pada penderita TBI dengan herniasi unkus (Uncal Herniation) akibat tekanan efek desak ruang N. III (Oculomotorius) menunjukkan...",
    options: [
      "Pupil pinpoint dan reaktif terhadap cahaya",
      "Large pupil / anisokor dilatasi maksimal dan tidak reaktif terhadap cahaya di sisi lesi",
      "Pupil midsize tidak reaktif bilateral",
      "Pupil isokor kecil reaktif"
    ],
    answer: 1,
    explanation: "Kompresi N. III pada herniasi unkus menghasilkan pupil dilated/large, anisokor, dan fixed (tidak reaktif terhadap cahaya) di sisi ipsilateral[cite: 8]."
  },

  // ── 6. PEMERIKSAAN & INDIKASI CT-SCAN (6 Soal) ────────────────────────────
  {
    id: 33, category: "Pemeriksaan & Indikasi CT",
    question: "Berdasarkan kriteria NICE (2014), indikasi untuk melakukan CT-Scan kepala dalam waktu 1 jam pada orang dewasa pasca TBI meliputi faktor risiko di bawah ini, KECUALI...",
    options: [
      "GCS kurang dari 13 pada penilaian awal di IGD",
      "Adanya kejang pasca trauma atau defisit neurologis fokal",
      "Lebih dari 1 episode muntah atau adanya tanda fraktur basis cranii",
      "Nyeri kepala ringan yang membaik dengan parasetamol tanpa riwayat pingsan"
    ],
    answer: 3,
    explanation: "Indikasi CT scan 1 jam NICE: GCS <13 awal, GCS <15 pada 2 jam, kejang post-trauma, defisit fokal, >1x muntah, tanda fraktur tengkorak/basis cranii[cite: 8]."
  },
  {
    id: 34, category: "Pemeriksaan & Indikasi CT",
    question: "Langkah pertama yang WAJIB dilakukan dalam Primary Survey pengelolaan trauma kepala gawat darurat adalah...",
    options: [
      "Langsung melakukan foto Head CT-Scan tanpa kontras",
      "Airway maintenance dengan kontrol Cervical Spine (proteksi leher)",
      "Pemberian injeksi manitol intravena",
      "Anamnesis keluarga pasien secara terperinci"
    ],
    answer: 1,
    explanation: "Primary survey TBI selalu dimulai dari A = Airway with Cervical Spine control[cite: 8]."
  },
  {
    id: 35, category: "Pemeriksaan & Indikasi CT",
    question: "Indikasi tindakan intubasi endotrakeal segera pada pasien Traumatic Brain Injury meliputi...",
    options: [
      "GCS <= 8 atau hilangnya refleks laring protektif",
      "GCS 14 dengan lecet di dahi",
      "Pasien sadar penuh yang mengeluh mual",
      "Fraktur kosta tunggal tanpa gangguan napas"
    ],
    answer: 0,
    explanation: "Indikasi intubasi TBI: GCS <= 8, penurunan kesadaran signifikan (skor M turun >2 poin), hilangnya refleks laring, hipoksemia, hiperkarbia, atau perdarahan masif di mulut[cite: 8]."
  },
  {
    id: 36, category: "Pemeriksaan & Indikasi CT",
    question: "Kriteria rawat inap rumah sakit pada pasien cedera kepala mencakup kondisi berikut...",
    options: [
      "Adanya kelainan baru pada CT-Scan atau GCS belum kembali ke 15",
      "Nyeri kepala menetap, muntah berulang, atau kebingungan",
      "Tidak ada penanggung jawab untuk observasi di rumah atau pasien usia > 50 tahun",
      "Semua jawaban di atas benar"
    ],
    answer: 3,
    explanation: "Kriteria rawat inap: CT scan abnormal, GCS <15, muntah/nyeri kepala menetap, usia >50 tahun, lansia/anak, tidak ada penanggung jawab di rumah, dan penyakit penyerta[cite: 8]."
  },
  {
    id: 37, category: "Pemeriksaan & Indikasi CT",
    question: "Metode non-invasif untuk memantau peningkatan tekanan intrakranial (PTIK) di tepi tempat tidur yang cepat dan tidak menyakitkan dengan mengukur diameter selubung saraf mata adalah...",
    options: [
      "Optic Nerve Sheath Diameter (ONSD) ultrasonography",
      "Transcranial Doppler murni",
      "Tympanic membrane displacement",
      "X-ray servikal AP/Lateral"
    ],
    answer: 0,
    explanation: "Optic nerve sheath diameter (ONSD) ultrasonografi adalah metode pemantauan TIK non-invasif yang murah, efisien, dan cepat[cite: 8]."
  },
  {
    id: 38, category: "Pemeriksaan & Indikasi CT",
    question: "Salah satu kriteria pasien cedera kepala yang DIPERBOLEHKAN PULANG (KRS) dari IGD adalah...",
    options: [
      "Sadar dan orientasi baik, tidak pernah pingsan, keluhan hilang, CT-Scan normal, dan ada keluarga yang mengawasi di rumah",
      "GCS 13 dengan muntah menyemprot berulang",
      "Adanya kebocoran cairan rhinorrhea ringan dari hidung",
      "Pasien tinggal sendiri tanpa pengawas di rumah"
    ],
    answer: 0,
    explanation: "Kriteria pulang: Sadar penuh, orientasi baik, tidak ada gejala neurologis, nyeri/muntah hilang, tidak ada fraktur/kebocoran CSF, dan ada yang mengawasi di rumah[cite: 8]."
  },

  // ── 7. TATA LAKSANA MEDIS & OSMOTERAPI (6 Soal) ───────────────────────────
  {
    id: 39, category: "Tata Laksana & Osmoterapi",
    question: "Target posisi tempat tidur (head position) yang direkomendasikan untuk membantu menurunkan tekanan intrakranial melalui optimalisasi venous return serebral adalah...",
    options: [
      "Posisi datar/supine 0 derajat",
      "Tirah baring dengan elevasi kepala 30 derajat",
      "Posisi Trendelenburg (kepala lebih rendah)",
      "Posisi miring kanan 90 derajat"
    ],
    answer: 1,
    explanation: "Tirah baring dengan elevasi kepala 30 derajat memperlancar drainase vena serebral sehingga membantu menurunkan TIK[cite: 8]."
  },
  {
    id: 40, category: "Tata Laksana & Osmoterapi",
    question: "Dosis efektif pemberian cairan osmoterapi Manitol 20% intravena untuk menurunkan peningkatan TIK adalah...",
    options: [
      "0.25 - 1 gram/kgBB diberikan IV dalam 15-20 menit",
      "10 gram/kgBB IV bolus cepat",
      "0.01 mg/kgBB IM",
      "5 gram total per 24 jam"
    ],
    answer: 0,
    explanation: "Dosis efektif Manitol 20% adalah 0.25 - 1 g/kgBB diberikan IV selama 15-20 menit[cite: 8]."
  },
  {
    id: 41, category: "Tata Laksana & Osmoterapi",
    question: "Syarat utama osmolalitas serum yang aman dan kontraindikasi batas pemberian Manitol adalah...",
    options: [
      "Osmolalitas serum tidak boleh melebihi 320 mOsm/kg (atau >310 mOsm/kg) dan dikontraindikasikan pada gagal ginjal",
      "Osmolalitas serum harus di atas 400 mOsm/kg",
      "Kontraindikasi penuh pada penderita diabetes",
      "Diberikan tanpa perlu pemantauan elektrolit"
    ],
    answer: 0,
    explanation: "Manitol dikontraindikasikan pada gagal ginjal (risiko edema paru) dan osmolalitas serum dijaga <320 mOsm/l (atau <310 mOsm/kg)[cite: 8]."
  },
  {
    id: 42, category: "Tata Laksana & Osmoterapi",
    question: "Obat profilaksis anti-kejang yang direkomendasikan pada pasien TBI selama 7 hari pertama pasca trauma adalah...",
    options: [
      "Fenitoin (Phenytoin) 3 x 100 mg",
      "Diazepam oral kontinu",
      "Parasetamol 3 x 500 mg",
      "Haloperidol 1 x 10 mg"
    ],
    answer: 0,
    explanation: "Profilaksis kejang pasca TBI diberikan Fenitoin 3x100 mg selama 7 hari[cite: 8]."
  },
  {
    id: 43, category: "Tata Laksana & Osmoterapi",
    question: "Pada kasus Perdarahan Subarakhnoid Traumatik (SAH), obat Calcium Channel Blocker yang secara spesifik diberikan untuk mencegah vasospasme serebral adalah...",
    options: [
      "Amlodipine 1 x 10 mg",
      "Nimodipine oral 4 x 60 mg/hari selama 14 hari",
      "Cinnarizine 3 x 25 mg",
      "Verapamil IV"
    ],
    answer: 1,
    explanation: "Pada SAH, Nimodipine oral diberikan dengan dosis 4 x 60 mg/hari selama 14 hari untuk mencegah vasospasme[cite: 8]."
  },
  {
    id: 44, category: "Tata Laksana & Osmoterapi",
    question: "Indikasi mutlak untuk dilakukan evakuasi bedah operatif (kraniotomi) pada kasus Epidural Hematoma (EDH) menurut panduan neurotrauma adalah...",
    options: [
      "Volume EDH > 30 cc (atau > 30 mL) tanpa mempertimbangkan skor GCS",
      "Volume EDH < 5 cc pada pasien sadar penuh",
      "EDH tipis < 2 mm tanpa midline shift",
      "Hanya jika pasien berusia di bawah 10 tahun"
    ],
    answer: 0,
    explanation: "Panduan merekomendasikan evakuasi bedah untuk semua pasien EDH akut dengan volume hematom >30 cc tanpa memandang skor GCS[cite: 8]."
  },

  // ── 8. KOMPLIKASI & SINDROM KHUSUS (6 Soal) ──────────────────────────────
  {
    id: 45, category: "Komplikasi & Sindrom Khusus",
    question: "Kriteria diagnosis ICD-10 untuk Post-Concussion Syndrome (PCS) mensyaratkan timbulnya minimal 3 dari 8 gejala pasca trauma kapitis, yang meliputi...",
    options: [
      "Nyeri kepala, pusing (dizziness), kelelahan, iritabilitas, sulit konsentrasi, gangguan memori, insomnia, dan intoleransi stres/alkohol",
      "Kejang umum berulang dan kelumpuhan separuh badan",
      "Kebutaan total dan tuli perseptif",
      "Demam tinggi dan kaku kuduk berat"
    ],
    answer: 0,
    explanation: "Kriteria PCS ICD-10: minimal 3 gejala dari sakit kepala, pusing, lelah, iritabel, sulit konsentrasi, gangguan memori, insomnia, dan intoleransi stres/emosi/alkohol[cite: 8]."
  },
  {
    id: 46, category: "Komplikasi & Sindrom Khusus",
    question: "Amnesia pasca trauma di mana pasien mengalami kehilangan kemampuan untuk mengingat peristiwa yang terjadi SEBELUM cedera otak disebut...",
    options: [
      "Anterograde amnesia",
      "Retrograde amnesia",
      "Global transient amnesia",
      "Psychogenic amnesia"
    ],
    answer: 1,
    explanation: "Retrograde amnesia adalah kehilangan memori terhadap peristiwa sesaat sebelum terjadinya cedera otak[cite: 8]."
  },
  {
    id: 47, category: "Komplikasi & Sindrom Khusus",
    question: "Amnesia pasca trauma di mana pasien mengalami defisit dalam membentuk memori baru SETELAH kecelakaan disebut...",
    options: [
      "Anterograde amnesia",
      "Retrograde amnesia",
      "Lacunar amnesia",
      "Dissociative amnesia"
    ],
    answer: 0,
    explanation: "Anterograde amnesia adalah defisit dalam membentuk memori/ingatan baru setelah kecelakaan[cite: 8]."
  },
  {
    id: 48, category: "Komplikasi & Sindrom Khusus",
    question: "Penyebab utama timbulnya Rebound Headache (Post Traumatic Headache) pada pasien pasca TBI adalah...",
    options: [
      "Penggunaan obat analgetik anti-nyeri (seperti acetaminophen, NSAID) secara berlebihan/terus-menerus lebih dari 2 minggu",
      "Pemberian cairan salin hipertonik",
      "Elevasi kepala 30 derajat di tempat tidur",
      "Kurang minum air putih saat rawat jalan"
    ],
    answer: 0,
    explanation: "Pemberian obat nyeri >2 minggu dapat memicu rebound headache, terutama pada penggunaan acetaminophen, NSAID, kafein, dan nikotin[cite: 8]."
  },
  {
    id: 49, category: "Komplikasi & Sindrom Khusus",
    question: "Terapi abortif lini pertama untuk mengatasi episode akut migrain pada Post Traumatic Headache adalah...",
    options: [
      "Sumatriptan dan Zolmitriptan",
      "Metoprolol dan Topiramat",
      "Haloperidol injeksi",
      "Ketorolac IV terus-menerus selama 1 bulan"
    ],
    answer: 0,
    explanation: "Terapi abortif migrain pada PTH meliputi triptan (sumatriptan dan zolmitriptan), sedangkan metoprolol dan topiramat digunakan untuk profilaksis[cite: 8]."
  },
  {
    id: 50, category: "Komplikasi & Sindrom Khusus",
    question: "Manakah pasangan etiologi dan gambaran CT-Scan khas yang BENAR untuk perdarahan intrakranial traumatik?",
    options: [
      "EDH = Arteri Meningea Media (Bikonveks); SDH = Bridging Veins (Bulan Sabit)",
      "EDH = Bridging Veins (Bulan Sabit); SDH = Arteri Meningea Media (Bikonveks)",
      "SAH = Arteri Cerebri Anterior (Bikonveks); EDH = Bridging Veins (Stellata)",
      "ICH = Arteri Meningea Media (Bulan Sabit); SDH = Vena Cava (Bikonveks)"
    ],
    answer: 0,
    explanation: "EDH berasal dari A. meningea media (gambaran bikonveks), sedangkan SDH berasal dari bridging veins (gambaran bulan sabit/crescent)[cite: 8]."
  }
];
