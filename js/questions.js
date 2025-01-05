// Pertanyaan untuk setiap tokoh
const questionsNapoleon = [
  {
      numb: 1,
      question: "Kapan Napoleon Bonaparte lahir?",
      answer: "15 Agustus 1769",
      options: ["5 Mei 1821", "15 Agustus 1769", "18 Juni 1815", "20 Oktober 1793"]
  },
  {
      numb: 2,
      question: "Apa nama lengkap Napoleon Bonaparte saat lahir?",
      answer: "Napoleone di Buonaparte",
      options: ["Napoleone di Buonaparte", "Napoleon I", "Napoleone di Korsika", "Napoléon Bonaparte"]
  },
  {
    numb: 3,
    question: "Di mana Napoleon Bonaparte lahir?",
    answer: "Ajaccio, Korsika",
    options: ["Paris", "Genova", "Ajaccio, Korsika", "Roma"]
   },
 {
    numb: 4,
    question: "Apa nama kitab undang-undang yang merupakan prestasi hukum terbesar Napoleon?",
    answer: "Kitab Undang-undang Napoleon",
    options: ["Konkordat", "Kitab Undang-undang Napoleon", "École Militaire", "Banque de France"]
   },
 {
    numb: 5,
    question: "Reformasi apa yang dilakukan Napoleon untuk mendamaikan Gereja Katolik dengan rakyat Prancis?",
    answer: "Konkordat tahun 1801",
    options: ["Konkordat tahun 1801", "Artikel Organik", "Sistem jalan", "Legiun Kehormatan"]
   },
 {
    numb: 6,
    question: "Siapa yang menguji Napoleon saat ia bersekolah di École Militaire?",
    answer: "Pierre-Simon de Laplace",
    options: ["Joseph Napoleon", "Jenderal Bernadotte", "Louis XVI", "Pierre-Simon de Laplace"]
   },
   {
    numb: 7,
    question: "Negara mana yang paling banyak memberikan perlawanan terhadap ekspansi Napoleon?",
    answer: "Inggris",
    options: ["Rusia", "Inggris", "Prussia", "Austria"]
   },
   {
    numb: 8,
    question: "Napoleon mendirikan bank sentral pertama dalam sejarah Prancis. Apa nama bank tersebut?",
    answer: "Banque de France",
    options: ["Banque de Paris", "Bank Nasional Prancis", "Banque de France", "Napoleon Central Bank"]
   },
   {
    numb: 9,
    question: "Apa yang menyebabkan Napoleon sering dicemooh oleh teman-temannya saat sekolah?",
    answer: " Logat Korsika yang kental",
    options: [" Logat Korsika yang kental", "Keluarga bangsawannya", "Perawakan pendeknya", "Tidak mahir matematika"]
   },
   {
    numb: 10,
    question: "Apa yang terjadi pada Napoleon saat masa kejayaannya?",
    answer: "Menguasai hampir seluruh dataran Eropa",
    options: ["Mengakhiri Revolusi Amerika", "Mengangkat adiknya sebagai Kaisar Prancis", "Membubarkan Kekaisaran Inggris", "Menguasai hampir seluruh dataran Eropa"]
   }
];

const questionsNikola = [
  {
      numb: 1,
      question: "Apa penemuan terbesar Nikola Tesla?",
      answer: "Arus Bolak-Balik (AC)",
      options: ["Radio", "Mesin Uap", "Arus Bolak-Balik (AC)", "Lampu"]
  },
  {
      numb: 2,
      question: "Kapan Nikola Tesla lahir?",
      answer: "10 Juli 1856",
      options: ["10 Juli 1856", "5 Mei 1821", "12 Januari 1890", "15 Agustus 1769"]
  },
  {
    numb: 3,
    question: "Apa nama proyek besar Tesla yang gagal diselesaikan karena kekurangan dana?",
    answer: "Wardenclyffe Tower",
    options: ["Wardenclyffe Tower", "Motor Induksi Tesla", "Proyek Budapest Telephone Exchange", "Proyek Perang Arus"]
  },
  {
    numb: 4,
    question: "Siapakah yang memberikan Tesla bantuan keuangan untuk memulai laboratoriumnya di New York?",
    answer: "Investor rekanan Tesla",
    options: ["George Westinghouse", "Thomas A. Edison", "Ferenc Puskas", "Investor rekanan Tesla"]
  },
  {
    numb: 5,
    question: "Tesla pernah melakukan eksperimen dengan",
    answer: "Listrik tegangan tinggi",
    options: ["Sinar-X", "Radiasi nuklir", "Listrik tegangan tinggi", "Semua jawaban benar"]
  },
  {
    numb: 6,
    question: "Tesla menyelesaikan pendidikannya dalam bidang teknik dan fisika di:",
    answer: "Universitas Teknologi Graz",
    options: ["Universitas Colorado Springs", "Universitas Smiljan", "Universitas Teknologi Graz", " Universitas Harvard"]
  },
  {
    numb: 7,
    question: " Pada tahun 1893, Tesla mengemukakan bahwa memungkinkan untuk",
    answer: "Membuat komunikasi nirkabel",
    options: ["Menemukan energi nuklir", "Membuat komunikasi nirkabel", "Menemukan arus searah lebih efisien", "Menciptakan pembangkit listrik tenaga angin"]
  },
  {
    numb: 8,
    question: "Perang arus (War of Currents) melibatkan Tesla dan",
    answer: "Thomas Edison",
    options: ["Thomas Edison", " J.P. Morgan", "Alexander Graham Bell", "George Westinghouse"]
  },
  {
    numb: 9,
    question: "Tesla pernah bekerja di perusahaan telegraf pada awal kariernya di",
    answer: "Budapest Telephone Exchange",
    options: ["Edison Machine Works", "Continental Edison", "Western Union", "Budapest Telephone Exchange"]
  },
  {
    numb: 10,
    question: "Tesla menghabiskan sebagian besar masa pensiunnya di hotel New York. Apa alasan utama kenapa karyanya terlupakan setelah kematiannya?",
    answer: "Karyanya tidak memperoleh dukungan finansial yang cukup",
    options: ["Tidak ada penerus yang meneruskan eksperimennya", "Karyanya tidak memperoleh dukungan finansial yang cukup", "Ide-idenya tidak relevan dengan zaman itu", " Karyanya terlalu mahal untuk diterapkan"]
  }
];

const questionsEinstein = [
  {
      numb: 1,
      question: "Apa nama rumus terkenal yang ditemukan oleh Albert Einstein yang menghubungkan massa dan energi?",
      answer: "E = mc²",
      options: [" F = G(m₁m₂/r²)", "P = mv", " F = ma", "E = mc²"]
  },
  {
      numb: 2,
      question: "Pada tahun berapa Albert Einstein menerbitkan teori relativitas umum?",
      answer: "1916",
      options: ["1916", "1905", "1921", "1911"]
  },
  {
    numb: 3,
    question: "Albert Einstein dianugerahi Nobel Fisika pada tahun berapa?",
    answer: "1921",
    options: ["1933", "1910", "1921", "1905"]
  },
  {
    numb: 4,
    question: "Di mana Einstein menghabiskan sebagian besar waktunya setelah melarikan diri dari Jerman pada tahun 1933?",
    answer: "Amerika Serikat",
    options: [" Swiss", "Amerika Serikat", "Prancis", "Inggris"]
  },
  {
    numb: 5,
    question: "Apa teori yang dikembangkan Einstein untuk menjelaskan gerakan partikel-partikel kecil dalam fluida?",
    answer: "Teori gerak Brown",
    options: ["Teori gerak Brown", "Teori kuantum", "Teori relativitas khusus", "Teori gravitasi universal"]
  },
  {
    numb: 6,
    question: "Einstein mengembangkan teori relativitas khusus ketika bekerja di",
    answer: "Kantor Paten Swiss di Bern",
    options: [" Akademi Sains Prusia", "Universitas Berlin", "Kantor Paten Swiss di Bern", "Universitas Zürich"]
  },
  {
    numb: 7,
    question: "Teori relativitas umum yang dikembangkan oleh Einstein menjelaskan tentang...",
    answer: "Gravitasi dan struktur alam semesta",
    options: ["Hukum gerak Newton", "Gravitasi dan struktur alam semesta", "Efek fotolistrik", "Mekanika kuantum"]
  },
  {
    numb: 8,
    question: "Einstein mendalami masalah gravitasi dan mekanika kontinum ketika bekerja dengan matematikawan Marcel Grossmann di",
    answer: "ETH Zürich",
    options: ["Universitas Praha", "ETH Zürich", " Universitas Zurich", "Akademi Sains Prusia"]
  },
  {
    numb: 9,
    question: "Einstein mengirim surat kepada Presiden Franklin D. Roosevelt untuk memperingatkan tentang potensi pengembangan apa?",
    answer: "Senjata nuklir",
    options: [" Program antariksa", "Teknologi komunikasi nirkabel", "Mesin waktu", "Senjata nuklir"]
  },
  {
    numb: 10,
    question: "Pada tahun berapa Einstein berhasil mengonfirmasi teori relativitas umum melalui pengamatan gerhana matahari?",
    answer: "1919",
    options: ["1919", "1905", "1921", "1911"]
  }
];

const questionsIsaac = [
  {
      numb: 1,
      question: "Karya Isaac Newton yang paling berpengaruh dalam sejarah sains adalah",
      answer: "Philosophiæ Naturalis Principia Mathematica",
      options: ["Principia Mathematica", "Opticks", "The Mathematical Principles of Natural Philosophy", "Philosophiæ Naturalis Principia Mathematica"]
  },
  {
      numb: 2,
      question: "Teori gravitasi Newton menunjukkan bahwa gerak benda di Bumi dan benda langit lainnya diatur oleh.",
      answer: "Sekumpulan hukum alam yang sama",
      options: ["Sekumpulan hukum alam yang sama", "Gaya elektromagnetik", "Hukum kekekalan energi", "Hukum termodinamika"]
  },
  {
    numb: 3,
    question: "Newton berhasil membuktikan bahwa teori heliosentris dikonfirmasi oleh",
    answer: "Teori gerakan planet Kepler",
    options: ["Pengukuran jarak antar planet", "Teori gerakan planet Kepler", "Pengamatan teleskop oleh Galileo", "Gaya tarik gravitasi"]
  },
  {
    numb: 4,
    question: "Newton mengembangkan teori gravitasi dan tiga hukum gerak yang menjadi dasar dari",
    answer: "Mekanika klasik",
    options: ["Teori relativitas", "Astronomi modern", "Mekanika klasik", "Fisika modern"]
  },
  {
    numb: 5,
    question: "Isaac Newton lahir pada tanggal",
    answer: "4 Januari 1643",
    options: ["4 Januari 1643", "25 Desember 1642", "1 Januari 1643", "12 Maret 1643"]
  },
  {
    numb: 6,
    question: "Isaac Newton dilahirkan di",
    answer: "Woolsthorpe-by-Colsterworth",
    options: ["Oxford", "Cambridge", "Woolsthorpe-by-Colsterworth", "London"]
  },
  {
    numb: 7,
    question: "Pada usia berapa Newton diterima di Universitas Cambridge?",
    answer: "19 tahun",
    options: ["20 tahun", "19 tahun", "17 tahun", "18 tahun"]
  },
  {
    numb: 8,
    question: "Newton mendefinisikan hukum gravitasi sebagai",
    answer: "Gaya tarik yang berbanding terbalik dengan kuadrat jarak",
    options: ["Gaya yang disebabkan oleh massa benda", "Gaya tarik antar benda yang sebanding dengan kuadrat jaraknya", " Tarikan yang terjadi hanya antara benda besar", "Gaya tarik yang berbanding terbalik dengan kuadrat jarak"]
  },
  {
    numb: 9,
    question: "Newton dikenal sebagai bapak ilmu fisika klasik karena kontribusinya dalam",
    answer: "Mekanika dan gravitasi",
    options: ["Mekanika dan gravitasi", "Teori relativitas", "Astronomi teleskopik", "Matematika murni"]
  },
  {
    numb: 10,
    question: "Apa yang ditulis Newton dalam General Scholium pada edisi kedua Principia (1713)",
    answer: "Fenomena tidak perlu dijelaskan dengan hipotesis",
    options: ["Pengetahuan tentang gravitasi harus disebarluaskan", "Teori gerak harus direvisi", "Fenomena tidak perlu dijelaskan dengan hipotesis", "Semua teori fisika harus dibuktikan dengan eksperimen"]
  } 
];

const questionsAdolf = [
  {
      numb: 1,
      question: "Siapa yang menjabat sebagai Kanselir Jerman dari 1933 hingga 1945?",
      answer: "Adolf Hitler",
      options: ["Hermann Göring", "Heinrich Brüning", "Joseph Goebbels", "Adolf Hitler"]
  },
  {
      numb: 2,
      question: "Di negara mana Adolf Hitler dilahirkan?",
      answer: "Austria",
      options: ["Italia", " Polandia", "Jerman", "Austria"]
  },
  {
    numb: 3,
    question: "Pada tahun berapa Hitler melancarkan Beer Hall Putsch?",
    answer: "1923",
    options: ["1923", "1914", "1918", "1930"]
  },
  {
    numb: 4,
    question: "Apa judul buku yang ditulis oleh Hitler saat dipenjara?",
    answer: "Mein Kampf",
    options: ["Mein Kampf", "Mein Freiheit", "The Art of War", "Das Kapital"]
  },
  {
    numb: 5,
    question: "Apa tujuan utama Hitler dengan kebijakan Lebensraum?",
    answer: "Menyediakan ruang hidup untuk bangsa Jerman",
    options: ["Mengambil wilayah baru di Asia", "Menyediakan ruang hidup untuk bangsa Jerman", "Menghancurkan bangsa Slavia", "Membebaskan Eropa dari komunisme"]
  },
  {
    numb: 6,
    question: "Apa nama dari pasukan militer Jerman yang menginvasi Polandia pada 1939?",
    answer: "Wehrmacht",
    options: ["Luftwaffe", "SS", "Wehrmacht", "Gestapo"]
  },
  {
    numb: 7,
    question: "Pada tahun berapa Perang Dunia II di Eropa dimulai?",
    answer: "1939",
    options: ["1939", "1938", "1936", "1937"]
  },
  {
    numb: 8,
    question: "Apa nama pertempuran yang menyebabkan Hitler terluka pada 1916?",
    answer: "Pertempuran Somme",
    options: ["Pertempuran Arras", "Pertempuran Ypres", "Pertempuran Passchendaele", "Pertempuran Somme"]
  },
  {
    numb: 9,
    question: "Partai politik mana yang mendukung Hitler untuk menjadi Kanselir pada 1933?",
    answer: " NSDAP",
    options: [" NSDAP", "Partai Demokrat Sosial", "Partai Rakyat Nasional Jerman", "Partai Komunis"]
  },
  {
    numb: 10,
    question: "Di mana Hitler bunuh diri pada akhir Perang Dunia II?",
    answer: "Berlin",
    options: ["Roma", "Munich", "Berlin", "Paris"]
  }
];

const questionsCleo = [
  {
      numb: 1,
      question: "Kleopatra VII adalah penguasa terakhir dari wangsa Ptolemaios di Mesir. Apa yang terjadi setelah pemerintahannya?",
      answer: "Mesir menjadi provinsi Kekaisaran Romawi",
      options: ["Mesir menjadi kerajaan yang merdeka", "Mesir menjadi provinsi Kekaisaran Romawi", "Mesir dikuasai oleh Yunani", "Mesir ditaklukkan oleh Aleksander Agung"]
  },
  {
      numb: 2,
      question: "Siapakah pendiri wangsa Ptolemaios yang merupakan ayah dari Kleopatra?",
      answer: "Ptolemaios I Soter",
      options: ["Ptolemaios XII", "Yulius Kaisar", "Ptolemaios XIII", "Ptolemaios I Soter"]
  },
  {
    numb: 3,
    question: "Apa bahasa yang digunakan oleh Kleopatra sebagai bahasa ibunya?",
    answer: "Bahasa Yunani Koine",
    options: ["Bahasa Yunani Koine", "Bahasa Latin", "Bahasa Aram", "Bahasa Mesir"]
  },
  {
    numb: 4,
    question: "Pada tahun berapa Kleopatra bersama ayahnya, Ptolemaios XII, hidup dalam pembuangan di Roma?",
    answer: "58 SM",
    options: ["51 SM", "58 SM", "47 SM", "55 SM"]
  },
  {
    numb: 5,
    question: "Siapa yang menggulingkan Ptolemaios XII dari takhta Mesir?",
    answer: "Berenike IV",
    options: ["Yulius Kaisar", "Arsinoe IV", "Ptolemaios XIII", "Berenike IV"]
  },
  {
    numb: 6,
    question: "Setelah Ptolemaios XII meninggal pada tahun 51 SM, siapa yang menjadi penguasa bersama dengan Kleopatra?",
    answer: "Ptolemaios XIII",
    options: ["Berenike IV", "Kaisarion", "Ptolemaios XIII", "Ptolemaios XIV"]
  },
  {
    numb: 7,
    question: "Apa yang dilakukan Kleopatra setelah Yulius Kaisar dibunuh pada tahun 44 SM?",
    answer: "Membunuh Ptolemaios XIV",
    options: ["Membunuh Ptolemaios XIV", "Membunuh Kaisarion", "Menyerahkan kekuasaan kepada adiknya", "Menghubungi Oktavianus untuk berdamai"]
  },
  {
    numb: 8,
    question: "Pada tahun berapa Oktavianus, Markus Antonius, dan Markus Emilius Lepidus membentuk persekutuan triwira yang kedua?",
    answer: "43 SM",
    options: ["41 SM", "43 SM", "44 SM", "42 SM"]
  },
  {
    numb: 9,
    question: "Apa tujuan utama Kleopatra dalam bertemu dengan Markus Antonius?",
    answer: "Untuk membahas pertukaran wilayah kekuasaan",
    options: ["Untuk mencari bantuan militer", "Untuk meminta perlindungan dari Romawi", "Untuk menjalin hubungan pribadi", "Untuk membahas pertukaran wilayah kekuasaan"]
  },
  {
    numb: 10,
    question: "Di mana patung dada Kleopatra saat ini disimpan?",
    answer: "Museum Kerajaan Ontario",
    options: ["Museum Alexandria", "Museum Mesir", "Museum Kerajaan Ontario", "Museum Vatican"]
  }
];


const questionsJulius = [
  {
      numb: 1,
      question: "Apa yang menjadi peran penting Julius Caesar dalam sejarah Romawi?",
      answer: "Memulai Kekaisaran Romawi",
      options: ["Menjadi penguasa Mesir", "Memulai Kekaisaran Romawi", "Mengubah Romawi menjadi republik", "Memperluas wilayah Galia"]
  },
  {
      numb: 2,
      question: "Julius Caesar berasal dari keluarga bangsawan yang bernama?",
      answer: "Gens Iulia",
      options: ["Gens Iulia", "Gens Pompeia", "Gens Claudia", " Gens Fabius"]
  },
  {
    numb: 3,
    question: "Pada tahun berapa Julius Caesar diangkat menjadi gubernur Provinsi Galia?",
    answer: "58 SM",
    options: ["44 SM", "58 SM", "65 SM", "49 SM"]
  },
  {
    numb: 4,
    question: "Perang apa yang dikenal sebagai kampanye militer terkenal Julius Caesar di Galia?",
    answer: "Perang Galia",
    options: ["Perang Britania", "Perang Saudara Romawi", "Perang Galia", "Perang Dunia Romawi"]
  },
  {
    numb: 5,
    question: "Kaisar Caesar mengalahkan siapa dalam Pertempuran Farsalos?",
    answer: "Pompey",
    options: [" Vercingetorix", " Mark Antony", "Gaius Cassius", "Pompey"]
  },
  {
    numb: 6,
    question: "Julius Caesar memperkenalkan kalender baru yang dikenal sebagai?",
    answer: "Kalender Julian",
    options: ["Kalender Julian", "Kalender Romawi", "Kalender Ptolemeus", "Kalender Gregorian"]
  },
  {
    numb: 7,
    question: "Kapan Caesar dibunuh oleh para senator Romawi?",
    answer: "15 Maret 44 SM",
    options: ["10 Maret 44 SM", "15 Maret 44 SM", "30 Maret 44 SM", "1 Januari 44 SM"]
  },
  {
    numb: 8,
    question: "Siapakah yang memimpin pembunuhan Julius Caesar?",
    answer: "Marcus Junius Brutus",
    options: ["Gaius Cassius Longinus", "Marcus Junius Brutus", "Mark Antony", "Octavianus"]
  },
  {
    numb: 9,
    question: "Pada tahun berapa Julius Caesar mengadakan konferensi Lucca untuk memperbaharui Triumvirat Pertama?",
    answer: "56 SM",
    options: ["52 SM", "50 SM", "53 SM", "56 SM"]
  },
  {
    numb: 10,
    question: "Apa yang membuat pembunuhan Julius Caesar menjadi tidak efektif dalam memulihkan Republik Romawi?",
    answer: "Kekalahan para senator dalam perang saudara",
    options: ["Para senator yang gagal menyatukan kekuatan", "Octavianus menjadi penguasa", "Kekalahan para senator dalam perang saudara", "Mark Antony yang tetap berkuasa"]
  }
];

const questionsKhalid = [
  {
      numb: 1,
      question: "Siapakah Khalid bin Walid?",
      answer: "Seorang jenderal Muslim terkenal",
      options: ["Seorang ulama terkenal", "Seorang raja Arab", "Seorang pemimpin suku Quraisy", "Seorang jenderal Muslim terkenal"]
  },
  {
      numb: 2,
      question: "Khalid bin Walid mendapat julukan Saifullah, yang berarti",
      answer: "Pedang Allah",
      options: ["Pahlawan Arab", "Pedang Allah", "Pedang Terkenal", "Pemimpin yang Bijak"]
  },
  {
    numb: 3,
    question: "Khalid bin Walid terlibat dalam penaklukan wilayah",
    answer: "Suriah",
    options: ["Yaman", "Mesir", "Suriah", "Persia"]
   },
   {
    numb: 4,
    question: "Khalid bin Walid menjadi komandan dalam penaklukan kota",
    answer: "Damaskus",
    options: ["Makkah", "Damaskus", "Kairo", "Maddinah"]
  },
  {
    numb: 5,
    question: "Khalid bin Walid dipecat oleh khalifah Umar bin Khattab dari jabatannya sebagai komandan pada tahun",
    answer: "638 M",
    options: ["638 M", "642 M", "634 M", "636 M"]
  },
  {
    numb: 6,
    question: "Khalid bin Walid memainkan peran penting dalam pertempuran",
    answer: "Yarmuk",
    options: ["Uhud", "Badar", "Khaibar", "Yarmuk"]
  },
  {
    numb: 7,
    question: "Khalid bin Walid memimpin pasukan Muslim dalam penaklukan Suriah pada masa khalifah",
    answer: "Umar bin Khattab",
    options: ["Utsman bin Affan", "Umar bin Khattab", "Ali bin Abi Talib", "Abu Bakar"]
  },
  {
    numb: 8,
    question: "Pada pertempuran Mu'tah, Khalid bin Walid mengambil alih komando setelah kematian komandan Muslim, dan berhasil",
    answer: "Menarik mundur pasukan Muslim dengan aman",
    options: ["Menghancurkan pasukan Quraisy", "Menyerang pasukan Persia", "Mengalahkan Bizantium", "Menarik mundur pasukan Muslim dengan aman"]
  },
  {
    numb: 9,
    question: "Khalid bin Walid berperan besar dalam menundukkan suku-suku yang memberontak di Arabia pada masa",
    answer: "Perang Riddah",
    options: ["Perang Badar", "Perang Uhud", "Perang Riddah", "Perang Hunain"]
  },
  {
    numb: 10,
    question: "Khalid bin Walid wafat pada tahun",
    answer: "642 M",
    options: ["642 M", "650 M", "635 M", "644 M"]
  }
  
];

const questionsLeonardo = [
  {
      numb: 1,
      question: "Siapakah Leonardo da Vinci?",
      answer: "Seorang pelukis, pemahat, ilmuwan, dan penemu dari Italia",
      options: ["Seorang penguasa kota Florence", "Seorang penulis terkenal", "Seorang pelukis, pemahat, ilmuwan, dan penemu dari Italia", "Seorang raja dari Italia"]
  },
  {
      numb: 2,
      question: "Lukisan mana yang paling terkenal dari Leonardo da Vinci?",
      answer: "Mona Lisa",
      options: ["Mona Lisa", "The Last Supper", "The Baptism of Christ", "The Adoration of the Magi"]
  },
  {
    numb: 3,
    question: "Lukisan “Salvator Mundi” terjual dengan harga berapa dalam lelang pada tahun 2017?",
    answer: "US$450,3 juta",
    options: ["US$200 juta", "US$450,3 juta", "US$300 juta", "US$1 miliar"]
  },
  {
    numb: 4,
    question: "Apa sebutan yang diberikan untuk Leonardo da Vinci karena kecerdasannya yang luar biasa?",
    answer: "Renaissance Man",
    options: ["Maestro", "Renaissance Man", "The Father of Science", "Genius of the Century"]
  },
  {
    numb: 5,
    question: "Apa penemuan yang sering dianggap diciptakan oleh Leonardo da Vinci? ",
    answer: " Parasut",
    options: ["Telepon", " Parasut", "Mesin uap", "Televisi"]
  },
  {
    numb: 6,
    question: "Di kota mana Leonardo da Vinci menghabiskan sebagian besar waktunya antara 1482 hingga 1499?",
    answer: "Milan",
    options: ["Roma", "Florence", "Pisa", "Milan"]
  },
  {
    numb: 7,
    question: "Di mana lukisan “Mona Lisa” saat ini dipamerkan?",
    answer: "The Louvre, Paris",
    options: ["Museum Seni Modern, New York", "Museum Nasional, Roma", "The Louvre, Paris", "The Vatican Museum"]
  },
  {
    numb: 8,
    question: "Apa yang membuat Leonardo da Vinci dikenal di bidang seni?",
    answer: "Teknik melukis yang inovatif",
    options: ["Teknik melukis yang inovatif", "Gaya melukis yang gelap", "Penekanan pada pemodelan patung", "Karya seni yang banyak dibuat"]
  },
  {
    numb: 9,
    question: "Apakah karya pertama yang diketahui dibuat oleh Leonardo da Vinci? ",
    answer: "Gambar pemandangan lembah Arno",
    options: ["Mona Lisa", "The Adoration of the Magi", "Gambar pemandangan lembah Arno", "The Last Supper"]
  },
  {
    numb: 10,
    question: "Apa yang dianggap sebagai simbol dari karya-karya Leonardo da Vinci, seperti dalam lukisan Mona Lisa ? ",
    answer: "Misteri dan ekspresi manusia",
    options: ["Keindahan alam", "Perang dan kekuasaan", "Misteri dan ekspresi manusia", "Kehidupan sehari-hari"]
  },
];


const questionsSudirman = [
  {
      numb: 1,
      question: "Siapakah Jenderal Soedirman?",
      answer: "Panglima Besar Tentara Nasional Indonesia pertama",
      options: ["Presiden pertama Indonesia", "Panglima Besar Tentara Nasional Indonesia pertama", "Pendiri Muhammadiyah", "Gubernur Jawa Tengah"]
  },
  {
      numb: 2,
      question: "Di mana Jenderal Soedirman lahir?",
      answer: "Purbalingga",
      options: ["Purbalingga", "Yogyakarta", "Magelang", "Cilacap"]
  },
  {
    numb: 3,
    question: "Apa jabatan Soedirman di organisasi Muhammadiyah pada tahun 1937?",
    answer: "Pemimpin Kelompok Pemuda Muhammadiyah",
    options: ["Komandan pasukan Muhammadiyah", "Pemimpin Kelompok Pemuda Muhammadiyah", "Ketua Cabang Muhammadiyah Cilacap", " Guru di sekolah Muhammadiyah"]
  },
  {
    numb: 4,
    question: "Apa alasan utama Soedirman dihormati oleh masyarakat?",
    answer: "Ketaatannya pada Islam",
    options: [" Kemampuannya dalam perang", "Kekayaannya", "Pendidikan yang tinggi", "Ketaatannya pada Islam"]
  },
  {
    numb: 5,
    question: "Apa nama perjanjian yang disusun bersama Soedirman namun gagal diterapkan?",
    answer: "Perjanjian Linggarjati",
    options: ["Perjanjian Roem-Royen", "Perjanjian Linggarjati", "Perjanjian Kalijati", "Perjanjian Renville"]
  },
  {
    numb: 6,
    question: "Di mana Soedirman memulai perlawanan gerilyanya pada tahun 1948?",
    answer: "Gunung Lawu",
    options: ["Gunung Lawu", "Cilacap", "Bogor", "Banyumas"]
  },
  {
    numb: 7,
    question: "Kapan Jepang menduduki Hindia Belanda?",
    answer: "1942",
    options: ["1945", "1940", "1942", "1941"]
  },
  {
    numb: 8,
    question: "Apa nama tentara yang dibentuk Jepang di mana Soedirman bergabung?",
    answer: "PETA",
    options: ["BKR", "TKR", "KNIL", "PETA"]
  },
  {
    numb: 9,
    question: "Apa tujuan Soedirman mendekati Soekarno pada awal Agustus 1949?",
    answer: "Memulai kembali perang gerilya",
    options: ["Menyerahkan komando militer", "Meminta izin pensiun", "Memulai kembali perang gerilya", "Meminta dukungan politik"]
  },
  {
    numb: 10,
    question: "Penyakit apa yang diderita Soedirman?",
    answer: "Tuberkulosis (TBC)",
    options: [" Tuberkulosis (TBC)", "Asma", "Kanker", "Malaria"]
  }
];

const questionsElizabeth = [
  {
      numb: 1,
      question: "Mengapa Elizabeth I disebut The Virgin Queen?",
      answer: "Ia tidak pernah menikah sepanjang hidupnya.",
      options: ["Ia tidak pernah menikah sepanjang hidupnya.", "Ia mendirikan Gereja Inggris.", "Ia dikenal dengan kesucian hidupnya.", "Ia menolak untuk dinobatkan sebagai ratu."]
  },
  {
      numb: 2,
      question: "Siapa ayah dan ibu Elizabeth I?",
      answer: "Henry VIII dan Anne Boleyn",
      options: ["Henry VII dan Catherine Howard", "Edward VI dan Jane Seymour", "Henry VIII dan Anne Boleyn", "Henry VIII dan Catherine dari Aragon"]
  },
  {
    numb: 3,
    question: "Apa agama yang didirikan kembali oleh Elizabeth I?",
    answer: "Protestan",
    options: ["Protestan", "Calvinis", "Katolik", "Ortodoks"]
  },
  {
    numb: 4,
    question: "Apa gelar yang diberikan kepada Elizabeth I dalam gereja yang didirikan kembali olehnya?",
    answer: "Gubernur Tertinggi",
    options: ["Kepala Gereja", "Kepala Gereja", "Gubernur Tertinggi", "Paus"]
  },
  {
    numb: 5,
    question: "Siapakah penasihat utama Elizabeth I?",
    answer: "William Cecil",
    options: ["Roger Ascham", "Thomas Cranmer", "William Cecil", "Robert Dudley"]
  },
  {
    numb: 6,
    question: "Apa semboyan Elizabeth I?",
    answer: "Video et taceo",
    options: ["Video et taceo", "Veni, Vidi, Vici", "Amor Vincit Omnia", "Semper Fidelis"]
  },
  {
    numb: 7,
    question: "Bagaimana Armada Spanyol kalah melawan Inggris pada tahun 1588?",
    answer: " Karena kekuatan pasukan Inggris",
    options: ["Karena badai besar", " Karena bantuan Perancis", "Karena koalisi dengan Belanda", " Karena kekuatan pasukan Inggris"]
  },
  {
    numb: 8,
    question: "Elizabeth I diakui mampu berbicara dalam beberapa bahasa. Apa saja bahasa tersebut?",
    answer: "Inggris, Latin, Prancis, Italia, dan Spanyol",
    options: ["Yunani, Inggris, Prancis, Jerman, dan Latin", "Latin, Inggris, Welsh, dan Jerman", "Prancis, Welsh, Yunani, Italia, dan Jerman", "Inggris, Latin, Prancis, Italia, dan Spanyol"]
  },
  {
    numb: 9,
    question: "Mengapa Elizabeth I dianggap sebagai anak yang tidak sah?",
    answer: "Karena ibunya dihukum mati dan pernikahan orang tuanya dibatalkan.",
    options: ["Karena ia lahir di luar nikah.", "Karena ibunya dihukum mati dan pernikahan orang tuanya dibatalkan.", "Karena ia tidak diakui oleh gereja Katolik.", "Karena ia tidak memiliki akta kelahiran."]
  },
  {
    numb: 10,
    question: "Apa penyebab kematian Elizabeth I?",
    answer: "Depresi dan penyakit yang tak diketahui",
    options: ["Depresi dan penyakit yang tak diketahui", "Kecelakaan", "Dibunuh oleh pesaing politiknya", "Dibunuh oleh pesaing politiknya"]
  }
];

const questionsAbraham = [
  {
      numb: 1,
      question: "Abraham Lincoln menjabat sebagai Presiden Amerika Serikat ke-16 pada tahun:",
      answer: "1861",
      options: ["1861", "1858", "1849", "1865"]
  },
  {
      numb: 2,
      question: "Perang Saudara Amerika berlangsung selama masa kepresidenan Lincoln untuk:",
      answer: "Mempertahankan persatuan negara",
      options: ["Menyebarkan agama", "Mempertahankan persatuan negara", "Memperluas wilayah AS", "Menghapus sistem monarki"]
  },
  {
    numb: 3,
    question: "Partai politik yang dipimpin oleh Lincoln adalah:",
    answer: "Republik",
    options: ["Konfederasi", "Demokrat", "Whig", "Republik"]
  },
  {
    numb: 4,
    question: "Lincoln mengeluarkan Proklamasi Emansipasi pada tahun:",
    answer: "1863",
    options: ["1861", "1864", "1863", "1862"]
  },
  {
    numb: 5,
    question: "Apa tujuan utama dari Proklamasi Emansipasi yang dikeluarkan Lincoln?",
    answer: "Membebaskan budak di negara bagian yang memberontak",
    options: ["Membebaskan budak di negara bagian yang memberontak", "Meningkatkan ekonomi Selatan", "Menghapus perbudakan secara keseluruhan", "Menghindari perang dengan Inggris"]
  },
  {
    numb: 6,
    question: "Lincoln menghadiri drama 'Our American Cousin' di Ford's Theatre pada tanggal:",
    answer: "14 April 1865",
    options: ["15 April 1865", "12 April 1865", "11 April 1865", "14 April 1865"]
  },
  {
    numb: 7,
    question: "Pidato Gettysburg yang terkenal disampaikan oleh Lincoln pada tahun:",
    answer: "1863",
    options: ["1865", "1863", " 1861", "1849"]
  },
  {
    numb: 8,
    question: "Apa peran utama Lincoln dalam Perang Saudara Amerika?",
    answer: "Mengatur blokade laut terhadap perdagangan Selatan",
    options: ["Menyerahkan wilayah Utara kepada Konfederasi", "Menghapus pajak federal", "Mendukung kebijakan Inggris", "Mengatur blokade laut terhadap perdagangan Selatan"]
  },
  {
    numb: 9,
    question: "Undang-Undang Kansas-Nebraska memicu Lincoln untuk:",
    answer: "Kembali ke dunia politik",
    options: [" Mendukung Perang Meksiko-Amerika", "Kembali ke dunia politik", "Menulis Resolusi Spot", "Meninggalkan karier politiknya"]
  },
  {
    numb: 10,
    question: "Lincoln meninggal pada tanggal:",
    answer: "15 April 1865",
    options: ["16 April 1865", "12 April 1865", "15 April 1865", "14 April 1865"]
  }  
];


// Ambil parameter 'tokoh' dari URL
const urlParams = new URLSearchParams(window.location.search);
const selectedTokoh = urlParams.get('tokoh');

// Tentukan pertanyaan berdasarkan tokoh
let questions = [];
if (selectedTokoh === 'napoleon') {
  questions = questionsNapoleon;
} else if (selectedTokoh === 'nikola') {
  questions = questionsNikola;
} else if (selectedTokoh === 'einstein') {
  questions = questionsEinstein;
} else if (selectedTokoh === 'isaac') {
  questions = questionsIsaac;
} else if (selectedTokoh === 'hitler') {
  questions = questionsAdolf;
} else if (selectedTokoh === 'cleopatra') {
  questions = questionsCleo;
} else if (selectedTokoh === 'julius') {
  questions = questionsJulius;
} else if (selectedTokoh === 'khalid') {
  questions = questionsKhalid;
} else if (selectedTokoh === 'leonardo') {
  questions = questionsLeonardo;
} else if (selectedTokoh === 'sudirman') {
  questions = questionsSudirman;
} else if (selectedTokoh === 'elizabeth') {
  questions = questionsElizabeth;
} else if (selectedTokoh === 'abraham') {
  questions = questionsAbraham;
} else {
  
}
