export const ALL_QUESTIONS = [
  // ── 1. KONSEP DASAR & DEFINISI (7 Soal) ─────────────────────────────────
  {
    id: 1, category: "Konsep Dasar",
    question: "Berdasarkan pemaparan materi, definisi 'Sex' atau jenis kelamin merujuk pada...",
    options: [
      "Biologi, kromosom, hormon, dan organ reproduksi",
      "Peran sosial yang dikonstruksikan oleh budaya masyarakat",
      "Ketertarikan emosional terhadap gender yang sama",
      "Identitas personal yang dipilih seseorang sejak lahir"
    ],
    answer: 0,
    explanation: "Sex (jenis kelamin) merujuk pada aspek biologis seseorang yang meliputi kromosom, hormon, dan organ reproduksi. Berbeda dengan gender yang merupakan konstruksi sosial."
  },
  {
    id: 2, category: "Konsep Dasar",
    question: "Faktor utama yang dapat mempengaruhi pembentukan dan ekspresi 'Gender' seseorang adalah...",
    options: [
      "Struktur kromosom XY atau XX semata",
      "Budaya, peran, ekspresi, dan konstruksi sosial masyarakat",
      "Kondisi cuaca dan geografis tempat tinggal",
      "Tingkat ekonomi dan pendapatan keluarga"
    ],
    answer: 1,
    explanation: "Gender mencakup peran, ekspresi, dan konstruksi sosial mengenai laki-laki dan perempuan, yang sangat dapat dipengaruhi oleh budaya masyarakat setempat."
  },
  {
    id: 3, category: "Konsep Dasar",
    question: "Orientasi seksual diartikan sebagai...",
    options: [
      "Perubahan fisik organ reproduksi seiring usia",
      "Kecenderungan seseorang memilih peran sosial tertentu",
      "Ketertarikan secara seksual atau romantis pada gender tertentu",
      "Identitas yang berlawanan dengan jenis kelamin saat lahir"
    ],
    answer: 2,
    explanation: "Orientasi seksual adalah ketertarikan secara seksual atau romantis kepada gender tertentu, seperti homoseksual atau heteroseksual."
  },
  {
    id: 4, category: "Konsep Dasar",
    question: "Huruf 'T' dalam singkatan LGBT merujuk pada Transgender, yang didefinisikan sebagai...",
    options: [
      "Seseorang yang memiliki ketertarikan pada lebih dari satu gender",
      "Perempuan yang memiliki ketertarikan pada sesama perempuan",
      "Laki-laki yang memiliki ketertarikan pada sesama laki-laki",
      "Seseorang yang identitas gendernya berbeda dengan jenis kelamin yang ditetapkan saat lahir"
    ],
    answer: 3,
    explanation: "Transgender berarti identitas gender seseorang berbeda dengan jenis kelamin (sex) yang ditetapkan untuknya pada saat ia dilahirkan."
  },
  {
    id: 5, category: "Konsep Dasar",
    question: "Definisi Lesbian (Huruf 'L' dalam LGBT) yang tepat menurut panduan adalah...",
    options: [
      "Perempuan yang memiliki ketertarikan romantis/seksual terhadap perempuan",
      "Perempuan yang mengubah identitas fisiknya menjadi laki-laki",
      "Seseorang yang tertarik pada pria maupun wanita",
      "Laki-laki yang menunjukkan peran dan ekspresi menyerupai perempuan"
    ],
    answer: 0,
    explanation: "Lesbian adalah perempuan yang memiliki ketertarikan romantis atau seksual terhadap sesama perempuan."
  },
  {
    id: 6, category: "Konsep Dasar",
    question: "Seorang individu memiliki ketertarikan romantis terhadap lebih dari satu gender. Istilah yang tepat adalah...",
    options: [
      "Transgender",
      "Bisexual",
      "Gay",
      "Aseksual"
    ],
    answer: 1,
    explanation: "Bisexual merujuk pada individu yang memiliki ketertarikan romantis atau seksual terhadap lebih dari satu gender."
  },
  {
    id: 7, category: "Konsep Dasar",
    question: "Penggunaan istilah yang memisahkan antara sex, gender, dan orientasi seksual bertujuan agar dokter mampu...",
    options: [
      "Mengabaikan masalah medis pasien",
      "Membuat label hukum bagi pasien",
      "Memahami terminologi secara ilmiah dalam menangani pasien",
      "Mengubah identitas pasien saat konsultasi"
    ],
    answer: 2,
    explanation: "Dokter (khususnya dokter muslim) harus mampu memahami terminologi secara ilmiah agar bisa menangani masalah kesehatan dengan tepat tanpa kehilangan objektivitas."
  },

  // ── 2. PANDANGAN MEDIS MODERN (8 Soal) ──────────────────────────────────
  {
    id: 8, category: "Pandangan Medis",
    question: "Bagaimana status homoseksualitas dalam klasifikasi gangguan mental modern (seperti DSM-5 atau ICD-11)?",
    options: [
      "Diklasifikasikan sebagai gangguan kepribadian",
      "Dianggap sebagai gangguan psikosis akut",
      "Masuk dalam kategori penyimpangan impuls",
      "Telah dihapus dari klasifikasi gangguan mental"
    ],
    answer: 3,
    explanation: "Dalam perspektif kedokteran modern, homoseksualitas telah dihapus dari klasifikasi gangguan mental dan tidak lagi dianggap sebagai diagnosis psikiatrik secara mandiri."
  },
  {
    id: 9, category: "Pandangan Medis",
    question: "Istilah diagnostik dalam ICD-11 yang berkaitan dengan ketidaksesuaian gender adalah...",
    options: [
      "Gender incongruence",
      "Homosexuality disorder",
      "Transgender syndrome",
      "Sexual orientation illness"
    ],
    answer: 0,
    explanation: "ICD-11 melakukan perubahan penting terkait gender, salah satunya menggunakan terminologi 'Gender incongruence' untuk merujuk pada ketidaksesuaian identitas gender."
  },
  {
    id: 10, category: "Pandangan Medis",
    question: "Diagnosis psikiatrik modern harus ditegakkan berdasarkan hal-hal berikut, KECUALI...",
    options: [
      "Gejala yang muncul",
      "Opini pribadi dokter terhadap pasien",
      "Adanya distress klinis",
      "Adanya gangguan fungsi"
    ],
    answer: 1,
    explanation: "Diagnosis psikiatrik diberikan berdasarkan gejala, gangguan fungsi, distress klinis, dan kriteria diagnostik yang berlaku, bukan opini atau keyakinan pribadi dokter."
  },
  {
    id: 11, category: "Pandangan Medis",
    question: "Tekanan kronis akibat stigma, penolakan, diskriminasi, atau kekerasan yang berkontribusi pada masalah kesehatan minoritas disebut...",
    options: [
      "Major depressive stress",
      "Post-traumatic stress disorder",
      "Minority stress",
      "Stigma syndrome"
    ],
    answer: 2,
    explanation: "Minority stress adalah tekanan kronis yang dialami kelompok minoritas akibat stigma, penolakan, atau kekerasan, yang dapat memicu masalah kesehatan mental atau fisik."
  },
  {
    id: 12, category: "Pandangan Medis",
    question: "Prinsip penting bagi dokter saat memeriksa pasien dengan orientasi seksual minoritas adalah...",
    options: [
      "Fokus mencari cara mengubah identitas pasien",
      "Menjadikan orientasi seksual sebagai satu-satunya diagnosis",
      "Langsung merujuk pasien ke tokoh agama tanpa pemeriksaan",
      "Jangan mengubah identitas/orientasi menjadi diagnosis, cari masalah kesehatannya"
    ],
    answer: 3,
    explanation: "Dokter tidak boleh mengubah identitas atau orientasi seksual menjadi diagnosis. Tugas dokter adalah mencari dan menangani masalah kesehatan (medis/psikologis) yang sebenarnya dialami pasien."
  },
  {
    id: 13, category: "Pandangan Medis",
    question: "Penilaian risiko kesehatan pada pasien LGBT harus bersifat...",
    options: [
      "Individual sesuai dengan risiko masing-masing",
      "Dipukul rata untuk semua pasien dalam komunitas",
      "Fokus pada kesehatan fisik saja",
      "Hanya menilai risiko HIV/AIDS"
    ],
    answer: 0,
    explanation: "Risiko kesehatan harus dinilai berdasarkan individu, mencakup kesehatan mental, IMS/HIV, kekerasan, penggunaan zat, hingga penyakit kronis sesuai faktor risikonya masing-masing."
  },
  {
    id: 14, category: "Pandangan Medis",
    question: "Hambatan utama yang sering dialami kelompok LGBT dalam mencari pertolongan medis adalah...",
    options: [
      "Tingginya biaya rumah sakit",
      "Stigma dan diskriminasi di layanan kesehatan",
      "Tidak adanya dokter spesialis penyakit dalam",
      "Kurangnya informasi tentang lokasi fasilitas kesehatan"
    ],
    answer: 1,
    explanation: "Stigma dan diskriminasi menjadi hambatan utama bagi pasien untuk mencari pertolongan, yang seringkali meningkatkan risiko keterlambatan pelayanan klinis."
  },
  {
    id: 15, category: "Pandangan Medis",
    question: "Isu kesehatan spesifik yang perlu disaring dokter (skrining) pada populasi rentan akibat minority stress meliputi, KECUALI...",
    options: [
      "Penggunaan zat (substance abuse)",
      "Risiko kesehatan reproduksi dan kekerasan",
      "Kelainan genetik turunan sejak lahir",
      "Kesehatan mental seperti depresi"
    ],
    answer: 2,
    explanation: "Kelainan genetik turunan tidak secara spesifik berkaitan dengan risiko minority stress. minority stress lebih memicu masalah mental, risiko IMS, kekerasan, dan penggunaan zat."
  },

  // ── 3. ASPEK SOSIAL & IPTEK (7 Soal) ────────────────────────────────────
  {
    id: 16, category: "Aspek Sosial & IPTEK",
    question: "Fenomena LGBT di masyarakat tidak berdiri sendiri, melainkan dipengaruhi oleh berbagai faktor, KECUALI...",
    options: [
      "Keluarga dan komunitas",
      "Media dan teknologi komunikasi",
      "Pendidikan dan lingkungan sosial budaya",
      "Golongan darah individu"
    ],
    answer: 3,
    explanation: "Faktor yang mempengaruhi fenomena LGBT meliputi keluarga, lingkungan sosial budaya, pendidikan, media, komunitas, pengalaman hidup, dan perkembangan teknologi komunikasi."
  },
  {
    id: 17, category: "Aspek Sosial & IPTEK",
    question: "Salah satu dampak sosial negatif yang dialami akibat fenomena ini dalam bermasyarakat adalah...",
    options: [
      "Isolasi sosial dan bullying",
      "Meningkatnya status ekonomi kelompok",
      "Penurunan angka perceraian",
      "Peningkatan akses fasilitas VIP"
    ],
    answer: 0,
    explanation: "Dampak sosial yang sering muncul meliputi penolakan, diskriminasi, stigma, konflik keluarga, isolasi sosial, dan bullying."
  },
  {
    id: 18, category: "Aspek Sosial & IPTEK",
    question: "Dampak positif perkembangan IPTEK bagi pasien terkait isu gender dan seksualitas adalah...",
    options: [
      "Memudahkan normalisasi ekstrem",
      "Akses informasi kesehatan dan edukasi menjadi lebih mudah",
      "Mudahnya melakukan cyberbullying tanpa ketahuan",
      "Mendapatkan konten yang tidak tervalidasi"
    ],
    answer: 1,
    explanation: "Dampak positif IPTEK termasuk akses informasi kesehatan, edukasi, komunikasi dengan nakes, dukungan sosial, dan akses layanan kesehatan mental."
  },
  {
    id: 19, category: "Aspek Sosial & IPTEK",
    question: "Sebaliknya, dampak negatif dari IPTEK dan media sosial terkait isu ini adalah...",
    options: [
      "Kemudahan berkonsultasi dengan dokter",
      "Mudahnya mendapat dukungan emosional",
      "Informasi tidak valid dan cyberbullying",
      "Munculnya literasi kesehatan yang baik"
    ],
    answer: 2,
    explanation: "Potensi dampak negatif IPTEK meliputi informasi tidak valid, normalisasi/demonisasi ekstrem, cyberbullying, tekanan sosial, dan konten seksual."
  },
  {
    id: 20, category: "Aspek Sosial & IPTEK",
    question: "Dalam menghadapi membanjirnya informasi kesehatan di internet, peran dokter yang tepat adalah...",
    options: [
      "Melarang pasien menggunakan internet sama sekali",
      "Membiarkan pasien membuat diagnosis sendiri",
      "Menyalahkan pasien karena membaca dari media sosial",
      "Membantu pasien memilah informasi berdasarkan evidence-based medicine"
    ],
    answer: 3,
    explanation: "Peran utama dokter adalah membantu pasien memilah informasi yang mereka dapatkan di internet berdasarkan prinsip kedokteran berbasis bukti (evidence-based medicine)."
  },
  {
    id: 21, category: "Aspek Sosial & IPTEK",
    question: "Dampak langsung dari 'Stigma' yang dilekatkan pada pasien kelompok minoritas adalah...",
    options: [
      "Munculnya hambatan mencari layanan kesehatan medis",
      "Membuat pasien menjadi lebih religius secara otomatis",
      "Meningkatkan imunitas fisik pasien",
      "Mempermudah dokter menegakkan diagnosis"
    ],
    answer: 0,
    explanation: "Stigma merupakan dampak sosial yang menghambat pasien dalam mencari pertolongan, memicu penolakan, diskriminasi, hingga memperburuk derajat kesehatan."
  },
  {
    id: 22, category: "Aspek Sosial & IPTEK",
    question: "Konteks sosial-budaya di Indonesia mengharuskan seorang dokter mampu...",
    options: [
      "Mengganti standar medis internasional sepenuhnya dengan hukum adat",
      "Mengintegrasikan keilmuan dengan pemahaman sosbud dan nilai masyarakat",
      "Menolak pasien yang tidak sejalan dengan budaya lokal",
      "Hanya memakai pedoman budaya lokal tanpa rujukan ilmiah"
    ],
    answer: 1,
    explanation: "Dokter dituntut memahami terminologi ilmiah, menghormati martabat, namun juga sangat perlu memahami konteks sosial-budaya Indonesia serta nilai-nilai Islam."
  },

  // ── 4. NILAI & PANDANGAN ISLAM (8 Soal) ─────────────────────────────────
  {
    id: 23, category: "Nilai Islam",
    question: "Dalam pandangan Islam, prinsip dasar pertama saat berhadapan dengan setiap manusia tanpa memandang latar belakangnya adalah...",
    options: [
      "Mencari aib masa lalunya terlebih dahulu",
      "Menghukum sebelum memberikan nasihat",
      "Setiap manusia memiliki martabat yang harus dihormati",
      "Mengutamakan perbedaan kasta sosial"
    ],
    answer: 2,
    explanation: "Prinsip dasar dalam Islam: Setiap manusia memiliki martabat, harus diperlakukan adil, tidak boleh ada penghinaan atau kekerasan, dan larangan membuka aib."
  },
  {
    id: 24, category: "Nilai Islam",
    question: "Saat memberikan layanan, penting bagi dokter Muslim untuk membedakan antara...",
    options: [
      "Harga obat murah dan harga obat mahal",
      "Suku bangsa dan kewarganegaraan pasien",
      "Hukum positif pidana dan hukum perdata",
      "Penilaian hukum atas suatu perbuatan dan martabat/pelayanan terhadap manusia"
    ],
    answer: 3,
    explanation: "Penting untuk membedakan antara penilaian terhadap suatu perbuatan/perilaku (bisa jadi berdosa menurut agama) dengan martabat manusia (hak mendapat perlakuan baik dan layanan medis yang layak)."
  },
  {
    id: 25, category: "Nilai Islam",
    question: "Ayat Al-Qur'an (QS Al-A'raf 7:80-81) yang membahas mengenai larangan perilaku homoseksual merujuk pada kisah...",
    options: [
      "Kaum Nabi Luth",
      "Kaum Nabi Nuh",
      "Kaum 'Aad",
      "Kaum Tsamud"
    ],
    answer: 0,
    explanation: "QS Al-A'raf 7:80-81 membahas mengenai perilaku kaum Nabi Luth yang mendatangi sesama jenis untuk melepaskan nafsu."
  },
  {
    id: 26, category: "Nilai Islam",
    question: "Catatan penting dalam pendidikan kedokteran mengenai dalil-dalil Al-Qur'an terkait seksualitas adalah...",
    options: [
      "Ayat tersebut adalah pengganti buku pedoman obat",
      "Ayat Al-Qur'an merupakan sumber nilai dan norma, bukan buku diagnosis medis",
      "Dalil tersebut hanya berlaku untuk psikiater",
      "Ayat tersebut melarang dokter merawat pasien LGBT"
    ],
    answer: 1,
    explanation: "Catatan penting: Ayat Al-Qur'an merupakan sumber nilai dan norma agama yang menjadi panduan moral, namun tidak difungsikan sebagai buku diagnosis medis atau klasifikasi penyakit (seperti ICD/DSM)."
  },
  {
    id: 27, category: "Nilai Islam",
    question: "Berdasarkan prinsip Islam, bagaimana seharusnya sikap dokter terhadap pasien yang memiliki perilaku yang dianggap melanggar norma agama?",
    options: [
      "Mempermalukan pasien agar segera sadar",
      "Melakukan kekerasan verbal sebagai bentuk dakwah",
      "Tetap memberikan pelayanan medis yang diperlukan dan menjaga kerahasiaan",
      "Mengumumkan perilaku pasien ke publik"
    ],
    answer: 2,
    explanation: "Dalam pelayanan, dokter tidak bertugas menghakimi, tidak mempermalukan, dilarang memakai kekerasan, harus menjaga kerahasiaan, dan wajib memberi layanan medis."
  },
  {
    id: 28, category: "Nilai Islam",
    question: "Fatwa MUI yang membahas pandangan keagamaan mengenai lesbian, gay, sodomi, dan pencabulan tertuang dalam...",
    options: [
      "Fatwa MUI No. 1 Tahun 2000",
      "Fatwa MUI No. 23 Tahun 2010",
      "Fatwa MUI No. 10 Tahun 2020",
      "Fatwa MUI No. 57 Tahun 2014"
    ],
    answer: 3,
    explanation: "Majelis Ulama Indonesia mengeluarkan Fatwa No. 57 Tahun 2014 yang menyatakan bahwa aktivitas homoseksual tersebut diharamkan dalam perspektif agama."
  },
  {
    id: 29, category: "Nilai Islam",
    question: "Kedudukan fatwa keagamaan dalam praktik kedokteran harus dipahami sebagai...",
    options: [
      "Panduan nilai keagamaan yang berbeda ruang lingkup dengan diagnosis medis murni",
      "Buku pedoman resep obat generik",
      "Undang-undang pidana kesehatan negara",
      "Pengganti sumpah dokter"
    ],
    answer: 0,
    explanation: "Hukum agama ≠ diagnosis medis ≠ hukum positif ≠ kewajiban etik. Keempatnya berinteraksi tetapi memiliki ruang lingkup berbeda. Fatwa adalah panduan agama, bukan pedoman klinis/diagnosis."
  },
  {
    id: 30, category: "Nilai Islam",
    question: "Menurut Hadits riwayat Ahmad, terdapat larangan tegas (laknat) terhadap...",
    options: [
      "Orang yang berobat ke dokter bedah",
      "Laki-laki yang menyerupai wanita dan wanita yang menyerupai laki-laki",
      "Orang yang mempelajari ilmu kedokteran asing",
      "Laki-laki yang memakai baju berwarna hijau"
    ],
    answer: 1,
    explanation: "Dalam HR. Ahmad disebutkan larangan tegas: 'Allah melaknat laki-laki yang menyerupai wanita, begitu pula wanita yang menyerupai laki-laki.'"
  },

  // ── 5. ETIKA KEDOKTERAN (7 Soal) ────────────────────────────────────────
  {
    id: 31, category: "Etika Kedokteran",
    question: "Prinsip etik kedokteran yang menekankan pada upaya 'memberikan terapi yang bermanfaat dan mengutamakan kebaikan pasien' adalah...",
    options: [
      "Confidentiality",
      "Justice",
      "Beneficence",
      "Respect for autonomy"
    ],
    answer: 2,
    explanation: "Beneficence adalah prinsip mengutamakan kebaikan pasien dan berbuat baik dengan memberikan terapi yang paling bermanfaat."
  },
  {
    id: 32, category: "Etika Kedokteran",
    question: "Tidak melakukan tindakan yang membahayakan, mempermalukan, atau mengancam pasien merupakan aplikasi dari prinsip...",
    options: [
      "Autonomy",
      "Justice",
      "Beneficence",
      "Non-maleficence"
    ],
    answer: 3,
    explanation: "Non-maleficence berarti 'do no harm' atau tidak melakukan tindakan yang memperburuk kondisi, membahayakan fisik/mental, atau mempermalukan pasien."
  },
  {
    id: 33, category: "Etika Kedokteran",
    question: "Dokter memberikan pelayanan secara adil tanpa diskriminasi kepada setiap pasien, sesuai dengan prinsip...",
    options: [
      "Justice",
      "Non-maleficence",
      "Confidentiality",
      "Beneficence"
    ],
    answer: 0,
    explanation: "Justice (Keadilan) mengharuskan dokter memberikan pelayanan medis secara adil tanpa mendiskriminasi latar belakang sosial, gender, atau orientasi pasien."
  },
  {
    id: 34, category: "Etika Kedokteran",
    question: "Menghargai keputusan medis yang diambil oleh pasien yang dipastikan kompeten secara mental adalah bentuk prinsip...",
    options: [
      "Justice",
      "Respect for autonomy",
      "Confidentiality",
      "Non-maleficence"
    ],
    answer: 1,
    explanation: "Respect for autonomy berarti menghargai hak pasien yang kompeten dalam menentukan nasibnya sendiri terkait perawatan medis yang akan diterimanya."
  },
  {
    id: 35, category: "Etika Kedokteran",
    question: "Prinsip etik yang sejalan dengan tuntunan Islam untuk tidak membuka aib seseorang tanpa alasan yang dibenarkan adalah...",
    options: [
      "Justice",
      "Autonomy",
      "Confidentiality (Kerahasiaan)",
      "Beneficence"
    ],
    answer: 2,
    explanation: "Confidentiality mewajibkan dokter menjaga kerahasiaan rekam medis dan informasi pribadi pasien, yang sangat sejalan dengan perintah agama untuk menjaga aib sesama."
  },
  {
    id: 36, category: "Etika Kedokteran",
    question: "Bagaimana hubungan antara kewajiban etika profesi kedokteran dan hukum agama?",
    options: [
      "Hukum agama secara otomatis membatalkan etika profesi",
      "Dokter dibolehkan melanggar KODEKI jika berlindung di balik dalil",
      "Etika dokter dan hukum agama bertentangan secara absolut",
      "Memiliki ruang lingkup berbeda, namun dokter muslim mengintegrasikan keduanya tanpa melanggar sumpah dokter"
    ],
    answer: 3,
    explanation: "Hukum agama dan etika dokter adalah entitas berbeda namun saling berinteraksi. Dokter muslim memegang teguh nilai agama sembari tetap mematuhi prinsip etik profesi (tidak mendiskriminasi, menjaga rahasia)."
  },
  {
    id: 37, category: "Etika Kedokteran",
    question: "Tindakan membocorkan orientasi seksual pasien ke media sosial tanpa izin melanggar pilar etik...",
    options: [
      "Confidentiality",
      "Justice",
      "Veracity",
      "Beneficence"
    ],
    answer: 0,
    explanation: "Membuka identitas atau kondisi medis/pribadi pasien tanpa alasan hukum/medis yang sah merupakan pelanggaran keras terhadap asas kerahasiaan (Confidentiality)."
  },

  // ── 6. PENDEKATAN KLINIS (8 Soal) ───────────────────────────────────────
  {
    id: 38, category: "Pendekatan Klinis",
    question: "Langkah pertama yang paling esensial saat dokter menghadapi pasien dengan latar belakang minoritas seksual adalah...",
    options: [
      "Melakukan pemeriksaan penunjang lab segera",
      "Membina rapport (hubungan saling percaya)",
      "Menggali aib keluarga pasien",
      "Meminta pasien menandatangani surat tobat"
    ],
    answer: 1,
    explanation: "Langkah awal selalu Bina Rapport untuk menciptakan rasa aman, mengurangi stigma, dan memastikan pasien jujur menyampaikan keluhannya."
  },
  {
    id: 39, category: "Pendekatan Klinis",
    question: "Dalam tahapan klinis, setelah mengidentifikasi masalah dan melakukan asesmen risiko, dokter perlu...",
    options: [
      "Melakukan operasi bedah sesegera mungkin",
      "Menyalahkan gaya hidup pasien",
      "Melakukan evaluasi psikososial dan mengintegrasikan nilai keyakinan pasien",
      "Merujuk pasien ke kantor polisi"
    ],
    answer: 2,
    explanation: "Pendekatan holistik mencakup evaluasi psikososial, serta mengintegrasikan nilai pasien dan keyakinan pasien dalam rencana penatalaksanaan."
  },
  {
    id: 40, category: "Pendekatan Klinis",
    question: "Berikut ini adalah larangan (DO NOT) bagi dokter saat menghadapi pasien LGBT, KECUALI...",
    options: [
      "Menganggap LGBT sebagai diagnosis medis otomatis",
      "Mempermalukan atau menghina pasien",
      "Menolak memberikan pelayanan medis yang diperlukan",
      "Melakukan pemeriksaan penunjang sesuai indikasi klinis"
    ],
    answer: 3,
    explanation: "Melakukan pemeriksaan sesuai indikasi adalah tindakan benar. Larangan meliputi: menjadikan orientasi sebagai diagnosis otomatis, menghina, menolak melayani, atau memaksa."
  },
  {
    id: 41, category: "Pendekatan Klinis",
    question: "Mengapa dokter TIDAK BOLEH menjanjikan bahwa orientasi seksual pasti dapat disembuhkan?",
    options: [
      "Karena menjanjikan hasil pasti tanpa evidence-based yang kuat melanggar etika dan berpotensi membohongi pasien",
      "Karena pengobatan tersebut sangat mahal",
      "Karena hanya psikiater senior yang boleh menjanjikan hal tersebut",
      "Karena pasien tidak akan mau membayar bila tidak sembuh"
    ],
    answer: 0,
    explanation: "Dokter tidak boleh memberi terapi tanpa dasar ilmiah atau memberi harapan palsu bahwa orientasi pasti bisa diubah/disembuhkan, karena hal ini tidak didukung EBM medis modern."
  },
  {
    id: 42, category: "Pendekatan Klinis",
    question: "Seorang tenaga medis memberikan terapi konversi berisiko tinggi tanpa dasar jurnal ilmiah (evidence-based medicine). Tindakan ini...",
    options: [
      "Sangat dianjurkan asal niatnya baik",
      "Dilarang keras karena memberikan terapi tanpa dasar ilmiah (melanggar non-maleficence)",
      "Boleh dilakukan asal keluarga setuju",
      "Diwajibkan oleh protokol puskesmas"
    ],
    answer: 1,
    explanation: "Memberikan terapi tanpa dasar ilmiah adalah salah satu tindakan yang dilarang karena bertentangan dengan prinsip keselamatan pasien."
  },
  {
    id: 43, category: "Pendekatan Klinis",
    question: "Jika pasien datang dengan keluhan medis darurat, namun ia diketahui aktif di komunitas gay, sikap dokter...",
    options: [
      "Mendahulukan pasien heteroseksual meskipun tidak gawat",
      "Menyarankan pindah ke dokter lain yang satu komunitas",
      "Tetap menerima dan memberikan pertolongan medis tanpa membedakan status sosial/personalnya",
      "Menahan pengobatan sampai pasien berjanji berubah"
    ],
    answer: 2,
    explanation: "Dokter tidak boleh menolak pelayanan medis yang diperlukan. Hal ini wajib sesuai sumpah dokter (prinsip keadilan/justice)."
  },
  {
    id: 44, category: "Pendekatan Klinis",
    question: "Membuka identitas gender asli seorang pasien transgender di ruang tunggu yang ramai merupakan tindakan...",
    options: [
      "Yang diperlukan untuk kelengkapan administrasi",
      "Bentuk edukasi sosial kepada masyarakat",
      "Diperbolehkan agar perawat tidak bingung",
      "Pelanggaran privasi dan dapat mempermalukan pasien"
    ],
    answer: 3,
    explanation: "Dokter dilarang membuka identitas pasien tanpa alasan hukum/medis yang sah dan sangat dilarang mempermalukan pasien di depan umum."
  },
  {
    id: 45, category: "Pendekatan Klinis",
    question: "Asesmen risiko dalam pemeriksaan klinis kelompok minoritas sebaiknya mencakup deteksi dini terhadap...",
    options: [
      "Kecenderungan melukai diri sendiri (self-harm), depresi, dan risiko IMS",
      "Faktor genetik yang mempengaruhi warna rambut",
      "Risiko hipertensi primer idiopatik saja",
      "Riwayat penyakit alergi cuaca"
    ],
    answer: 0,
    explanation: "Risiko spesifik akibat minority stress sering bermanifestasi pada masalah kesehatan mental (depresi, bunuh diri, kecemasan), penggunaan zat, dan IMS."
  },

  // ── 7. APLIKASI KASUS (5 Soal) ──────────────────────────────────────────
  {
    id: 46, category: "Aplikasi Kasus",
    question: "Kasus: Pasien laki-laki homoseksual datang ke IGD dengan infeksi berat. Dokter jaga menolak memeriksa dan merujuk paksa tanpa indikasi ke RS lain. Prinsip etika apa yang dilanggar?",
    options: [
      "Confidentiality & Autonomy",
      "Justice (Keadilan) & Non-Maleficence",
      "Beneficence & Veracity",
      "Solidaritas & Kehormatan Profesi"
    ],
    answer: 1,
    explanation: "Menolak memberikan layanan kegawatdaruratan diskriminatif melanggar keadilan (Justice) dan dapat membahayakan nyawa pasien (Non-maleficence)."
  },
  {
    id: 47, category: "Aplikasi Kasus",
    question: "Kasus: Pasien transgender menceritakan masa lalunya untuk keperluan diagnosis medis, namun memohon agar rahasianya dijaga dari tetangganya. Tindakan dokter...",
    options: [
      "Melaporkan ke ketua RT setempat karena dianggap penting",
      "Merekam diam-diam untuk studi kasus",
      "Menjamin kerahasiaan pasien sesuai prinsip Confidentiality dan ajaran menutup aib",
      "Menyebarkannya agar menjadi pelajaran masyarakat"
    ],
    answer: 2,
    explanation: "Tanggung jawab profesional dokter mewajibkan terjaganya rahasia pasien, yang juga selaras dengan prinsip Islam untuk tidak membuka aib tanpa alasan syar'i/hukum."
  },
  {
    id: 48, category: "Aplikasi Kasus",
    question: "Kasus: Dokter memaksakan terapi fisik ekstrem tanpa rujukan keilmuan psikiatri (non-EBM) untuk mengubah orientasi pasien LGBT. Hal ini dinilai sebagai...",
    options: [
      "Keberhasilan inovasi medis lokal",
      "Tindakan prevensi primer",
      "Bentuk kasih sayang (Beneficence) murni",
      "Pelanggaran karena memberikan terapi tanpa dasar keilmuan ilmiah yang berpotensi mencederai pasien"
    ],
    answer: 3,
    explanation: "Memberikan terapi tanpa landasan EBM dan memaksakan keyakinan pribadi yang membahayakan pasien adalah pelanggaran etik yang tegas."
  },
  {
    id: 49, category: "Aplikasi Kasus",
    question: "Kasus: Seorang psikiater Muslim mengobati pasien depresi yang juga lesbian. Fokus pengobatan si psikiater adalah menangani depresinya akibat tekanan sosial, bukan fokus mengobati 'lesbian'-nya. Pendekatan ini...",
    options: [
      "Sudah tepat, karena berfokus pada masalah medis (distress) tanpa mengubah orientasi menjadi diagnosis primer",
      "Salah besar, harusnya fokus merubah orientasinya dulu",
      "Salah, karena melanggar Fatwa MUI",
      "Tidak tepat, harus rujuk ke dokter bedah"
    ],
    answer: 0,
    explanation: "Ini adalah aplikasi yang tepat dari kaidah medis modern: Jangan mengubah orientasi menjadi diagnosis; carilah masalah kesehatan/distress (depresi akibat minority stress) untuk diobati."
  },
  {
    id: 50, category: "Aplikasi Kasus",
    question: "Kasus: Seorang pasien bertanya secara daring mengenai informasi kesehatan reproduksinya yang ia dapat dari forum LGBT internet yang ekstrem. Respons terbaik dokter adalah...",
    options: [
      "Langsung memblokir kontak pasien",
      "Membantu memilah dan memvalidasi informasi berdasarkan standar kedokteran berbasis bukti (EBM)",
      "Membenarkan semua artikel di forum tersebut asal pasien tenang",
      "Mengejek tingkat literasi pasien"
    ],
    answer: 1,
    explanation: "Dampak IPTEK memerlukan dokter untuk hadir sebagai fasilitator yang mengedukasi dan memilah informasi pasien bersandar pada Evidence-Based Medicine (EBM)."
  }
];
