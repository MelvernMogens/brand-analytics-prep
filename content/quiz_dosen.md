# Quiz Dosen — 49 soal PG latihan (bocoran UTS Brand Analytics). Owner: MEGATRON/@growth. 5 opsi per soal (parser menerima 5 opsi untuk file quiz_dosen*.md).

@q 1 :: w1-bigdata
Big Data dalam brand analytics terutama dimanfaatkan untuk….
- menyimpan arsip transaksi pelanggan tanpa proses analisis lanjut
+ memprediksi perilaku konsumen berbasis pola interaksi digital yang kompleks
- mempercepat distribusi fisik produk melalui otomasi logistic
- menstandarkan harga produk di seluruh cabang berdasarkan intuisi manajer
- mengukur efektivitas iklan televisi secara longitudinal
@why
Benar: definisi Big Data (Marr, 2015, W1) eksplisit dua bagian — volume/variety data DAN kemampuan menganalisisnya untuk insight strategis; contoh intinya prediksi perilaku konsumen dari pola interaksi digital yang kompleks (riwayat menonton, klik, sensor, dst).
Pengecoh "menyimpan arsip tanpa analisis lanjut" persis kesalahan umum yang disebut materi: kumpulan data raksasa tanpa ability to analyze bukan Big Data yang bernilai, cuma gudang data.
Pengecoh logistik dan penentuan harga dari intuisi manajer bertentangan langsung dengan value-driven mindset (mengubah data jadi keputusan berbasis data, bukan intuisi); mengukur iklan TV secara longitudinal bukan aplikasi utama yang dibahas materi W1.
@end

@q 1 :: w1-bigdata
Dalam pengembangan brand imagery, peranan data mining dapat dijelaskan sebagai
- prosedur manual untuk mengevaluasi desain kemasan produk
+ proses ekstraksi pola tersembunyi untuk mengidentifikasi determinan citra merek berbasis data konsumen
- teknik reduksi variabel untuk meminimalkan biaya promosi
- mekanisme penentuan harga produk menggunakan pendekatan heuristik
- metode pengumpulan data demografis tanpa memerhatikan interaksi digital
@why
Benar: sejalan dengan prinsip Big Data (Marr) di W1 — ability to analyze dipakai untuk menemukan pola tersembunyi dari data perilaku/persepsi konsumen yang lalu menjelaskan APA yang membentuk citra merek, bukan proses manual.
Pengecoh "prosedur manual mengevaluasi kemasan" salah karena data mining justru soal kemampuan analisis otomatis/algoritmik, bukan evaluasi manual satu per satu.
Pengecoh "reduksi variabel untuk biaya promosi" dan "heuristik harga" mencampur konsep lain (bukan tujuan data mining di materi); "pengumpulan demografis tanpa interaksi digital" bertentangan dengan variety data yang jadi ciri Big Data.
@end

@q 5 :: w5-concept
Sebuah perusahaan ingin mengklasifikasikan pelanggan berdasarkan recency, frequency, dan monetary value untuk menentukan strategi loyalitas. Metode yang paling sesuai adalah
- regresi logistik untuk memprediksi kecenderungan pembelian ulang secara bine
- chi-square test untuk menguji asosiasi antara variabel demografis dan perilaku belanja
- principal component analysis untuk mereduksi jumlah indikator transaksi
- K-Means clustering untuk mengidentifikasi hubungan kausal antarvariabel finansial
+ RFM analysis yang menghasilkan segmentasi perilaku pembelian
@why
Benar: pertanyaan eksplisit menyebut recency, frequency, monetary value — itu persis tiga dimensi RFM (W5) yang dirancang khusus untuk segmentasi perilaku pembelian demi strategi loyalitas (Hughes, 2005).
Regresi logistik dan chi-square adalah alat statistik lain yang tidak dibahas sebagai metode segmentasi RFM di materi — soal tidak minta prediksi biner atau uji asosiasi demografis.
PCA mereduksi variabel (bukan mengelompokkan pelanggan); K-Means memang metode clustering (W6) tapi tujuannya mendeteksi kelompok tersembunyi lewat similarity, bukan "hubungan kausal antarvariabel finansial" — klaim kausal itu sendiri salah konsep.
@end

@q 5 :: w5-concept
Prinsip dasar dimensi Recency dalam RFM menyatakan bahwa
- jumlah transaksi menentukan skor recency
+ semakin baru interaksi, semakin tinggi probabilitas keterlibatan berikutnya
- semakin lama sejak pembelian terakhir, semakin besar kemungkinan pembelian ulang
- recency tidak berpengaruh pada perilaku pembelian
- nilai transaksi menentukan skor recency
@why
Benar: materi W5 eksplisit "Recency (R): seberapa BARU pelanggan terakhir beli/berinteraksi. Makin baru → makin mungkin beli lagi" — arah skornya konsisten dengan @trap "Recency itu kebalik": angka hari kecil (baru) = skor tinggi.
Pengecoh "jumlah transaksi menentukan skor recency" menyamakan Recency dengan Frequency — padahal Recency murni soal jarak hari, bukan jumlah transaksi.
Pengecoh "semakin lama sejak pembelian terakhir, semakin besar kemungkinan pembelian ulang" membalik arah logika RFM persis seperti kesalahan umum yang di-flag @trap; "recency tidak berpengaruh" dan "nilai transaksi menentukan recency" jelas bertentangan dengan definisi dasarnya.
@end

@q 1 :: w1-equity
Menurut kerangka Brand Equity Aaker (1991), dimensi yang paling berhubungan langsung dengan customer retention adalah
+ brand loyalty yang mencerminkan komitmen pembelian berulang
- brand associations yang menstimulasi citra dan nilai simbolik
- brand leadership yang menempatkan merek sebagai market leader
- perceived quality yang berfokus pada evaluasi kinerja produk
- name awareness yang menekankan pengenalan identitas visual merek
@why
Benar: @vars w1-aaker mendefinisikan Brand Loyalty sebagai "kecenderungan membeli ulang atau merekomendasikan brand" dengan sinyal digital repeat purchase rate — inilah dimensi yang secara definisi paling langsung berkaitan dengan retention.
Brand Association berkaitan dengan citra/gaya hidup (bukan retensi langsung); Perceived Quality mengukur persepsi kualitas, bukan perilaku beli ulang — dua-duanya berkontribusi ke loyalty tapi bukan definisi retention itu sendiri.
"Brand leadership" dan "name awareness" bukan bagian dari 5 dimensi Aaker yang diajarkan materi (Awareness, Association, Perceived Quality, Loyalty, Other Proprietary Assets) — istilah ini pengecoh di luar kerangka yang dipakai kelas.
@end

@q 5 :: w5-concept
Dalam praktiknya, banyak analis hanya menggunakan RF segmentation tanpa Monetary karena
- Frequency sudah mencakup nilai recency secara implisit
- data Monetary tidak dapat diperoleh dari transaksi daring
- Monetary hanya relevan untuk industri keuangan
- Monetary lebih sulit diukur daripada Frequency
+ Monetary cenderung berkorelasi kuat dengan Frequency sehingga informasi yang diberikan bersifat redundan
@why
Benar: materi W5 eksplisit "Monetary biasanya berkorelasi tinggi dengan Frequency, makanya banyak praktisi cukup pakai RF saja" — alasan praktis ini sama persis dengan pilihan yang benar.
"Frequency mencakup recency secara implisit" salah — Recency dan Frequency dua dimensi independen yang diukur terpisah dalam RFM.
"Monetary tidak bisa diperoleh dari transaksi daring" dan "hanya relevan untuk keuangan" tidak sesuai materi (M dihitung langsung dari NetSales transaksi apa pun, termasuk kopi/skincare di contoh kelas); "lebih sulit diukur" tidak disebut sebagai alasan di materi — alasan sebenarnya adalah redundansi statistik, bukan kesulitan pengukuran.
@end

@q 5 :: w5-segment
Pelanggan dengan R=5, F=5, M=5 kemungkinan besar termasuk segmen
- Price Sensitive
+ Champions
- At Risk
- Potential Loyalists
- Hibernating
@why
Benar: grid segmen RFM workshop (@concept w5-grid) menyatakan R=5 dengan FM ≥ 4 (di sini FM = 5) → Champions — persis contoh Step 6 slide: kode 555/554/545 = "sangat baru, sering, belanja besar".
Price Sensitive muncul di R tinggi tapi FM RENDAH (<2.5) — kebalikan dari skor 5,5,5 di soal ini.
At Risk dan Hibernating justru posisinya di R rendah (≤2) — bertentangan dengan R=5 pada soal; Potential Loyalists ada di R=4 dengan FM sedang (2.5–<4), bukan R=5 dengan FM maksimal.
@end

@q 5 :: w5-segment
Jika seorang pelanggan memiliki skor R=1, F=5, M=4, interpretasi yang paling tepat adalah
- pelanggan baru pertama kali membeli tetapi mengeluarkan dana besar
- pelanggan memiliki keterlibatan yang meningkat dalam 30 hari terakhir
- pelanggan selalu membeli tepat setelah promosi
- pelanggan jarang membeli dan tidak pernah melakukan pembelian besar
+ pelanggan sering membeli dengan nilai tinggi, tetapi sudah lama tidak bertransaksi
@why
Benar: R=1 berarti skor recency TERENDAH (sudah lama sejak beli terakhir, lihat @trap "Recency itu kebalik"), sementara F=5 dan M=4 berarti historis sering membeli dengan nilai besar — persis pola "Can't Lose Them" di grid w5-grid (R≤2, FM≥4): dulu besar, sekarang mulai hilang.
"Pelanggan baru pertama kali membeli" salah karena F=5 menunjukkan frekuensi TINGGI (bukan pembeli baru); "keterlibatan meningkat 30 hari terakhir" bertentangan langsung dengan R=1 yang berarti sudah lama tidak beli.
"Selalu membeli tepat setelah promosi" tidak bisa disimpulkan dari data RFM saja (materi w5-case menegaskan RFM tidak menjelaskan ALASAN perilaku); "jarang membeli dan tidak pernah besar" bertentangan dengan F=5 dan M=4 yang justru tinggi.
@end

@q 5 :: w5-segment
Strategi pemasaran yang paling sesuai untuk segmen At Risk adalah
- mengabaikan pelanggan karena kontribusinya rendah
- menurunkan frekuensi komunikasi untuk menekan biaya
- meningkatkan harga untuk memaksimalkan profit jangka pendek
- memberikan program VIP eksklusif
+ kampanye win-back atau penawaran reaktivasi yang dipersonalisasi
@why
Benar: @vars w5-strategy eksplisit "At Risk / Can't Lose Them :: win-back campaign, reminder khusus — hati-hati, nilai historis besar" — segmen ini dulu bernilai tinggi (FM tinggi) tapi mulai pasif, jadi butuh reaktivasi personal, bukan diabaikan.
"Mengabaikan karena kontribusi rendah" salah karena At Risk justru sering punya nilai historis BESAR (bukan rendah) — mengabaikan mereka berarti kehilangan revenue signifikan (lihat kasus NusaBean Can't Lose Them 19.7% sales).
"Menurunkan komunikasi" dan "menaikkan harga" bertentangan dengan tujuan win-back (justru butuh sentuhan personal, bukan dikurangi); "program VIP eksklusif" adalah strategi untuk segmen Champions, bukan At Risk.
@end

@q 6 :: w6-cluster
Perbedaan utama antara segmentasi RFM dan K-Means clustering adalah
+ RFM menggunakan skor statis berbasis cut-off, sedangkan K-Means melakukan segmentasi adaptif berdasarkan pola data multidimensi
- RFM menghitung jarak Euclidean antar pelanggan, sedangkan K-Means menilai skor perilaku
- K-Means memerlukan data demografis, sedangkan RFM tidak
- K-Means hanya dapat digunakan untuk data transaksi, sedangkan RFM dapat mengolah data sosial
- RFM mampu mendeteksi segmen tersembunyi tanpa parameter jumlah kluster
@why
Benar: RFM memakai aturan cut-off/grid tetap (skor 1–5 lalu dipetakan ke segmen via tabel w5-grid) yang statis, sedangkan K-Means (W6) adalah algoritma partition-based yang mengelompokkan berdasarkan kemiripan pola multidimensi data secara adaptif — materi W6 menyebut clustering "go beyond RFM" karena bisa memakai variabel apa pun dan menemukan hidden segments.
Pengecoh "RFM menghitung jarak Euclidean" membalik fakta — justru K-Means yang berbasis jarak/similarity ke centroid, bukan RFM.
"K-Means memerlukan data demografis" tidak benar — K-Means bekerja pada data numerik apa pun (mis. skor RFM), bukan wajib demografis; "K-Means hanya untuk data transaksi" salah karena materi menyebut aplikasi K-Means juga untuk pola sentiment review; "RFM mendeteksi segmen tersembunyi tanpa parameter k" justru ciri Hierarchical clustering, bukan RFM.
@end

@q 6 :: w6-cluster
Seorang analis menjalankan K-Means dengan k=3 pada data RFM. Jika WCSS menurun tajam dari k=2 ke k=3, lalu melandai pada k=4, interpretasi yang tepat adalah
- WCSS tidak relevan dalam pemilihan kluster
- k=4 harus dipilih untuk memperoleh hasil paling detail
- k=2 lebih baik karena menghasilkan penurunan terbesar
- jumlah kluster tidak memengaruhi kualitas segmentasi
+ k=3 merupakan pilihan kluster yang paling masuk akal untuk segmentasi
@why
Benar: pola "penurunan tajam lalu melandai" adalah logika elbow method — titik di mana penurunan WCSS mulai melandai (di sini persis setelah k=3, sebelum k=4) adalah "elbow"-nya, sehingga k=3 adalah pilihan yang paling masuk akal (marginal improvement sesudahnya kecil).
"WCSS tidak relevan" salah total — WCSS adalah metrik inti elbow method untuk memilih k; "jumlah kluster tidak memengaruhi kualitas" bertentangan dengan seluruh logika clustering di materi.
"k=4 untuk hasil paling detail" mengabaikan bahwa penurunan WCSS SUDAH melandai di k=4 (tambahan cluster tidak memberi perbaikan berarti); "k=2 lebih baik karena penurunan terbesar" salah membaca elbow — penurunan besar dari k=2→k=3 justru menunjukkan k=2 BELUM cukup, bukan k=2 sudah optimal.
@end

@q 6 :: w6-strategy
Hasil K-Means menunjukkan Cluster 1 dengan recency rendah, frequency tinggi, dan monetary tinggi. Strategi yang paling tepat adalah
- mengurangi komunikasi agar pelanggan tidak terganggu
- menunda promosi karena pelanggan sudah loyal
+ memberikan program VIP dan penawaran eksklusif
- menurunkan harga untuk meningkatkan jumlah transaksi
- memfokuskan kampanye pada akuisisi pelanggan baru
@why
Benar: recency RENDAH (baru saja beli), frequency & monetary TINGGI = profil Champions/Loyal Customers (w5-grid, w6-persona-types "The Champion: loyal, high-value") — respons yang sesuai adalah VIP programs & exclusive offers, persis @vars w5-strategy dan w6-strategy-table untuk Champion.
"Mengurangi komunikasi" dan "menunda promosi" salah karena pelanggan bernilai tinggi seperti ini justru layak diinvestasikan lebih (retain & strengthen loyalty), bukan dibiarkan.
"Menurunkan harga untuk menambah transaksi" salah karena pelanggan ini sudah aktif membeli tanpa perlu insentif harga — diskon massal ke Loyal Customers hanya menggerus margin (lihat kasus NusaBean); "fokus akuisisi pelanggan baru" salah sasaran karena soal ini spesifik tentang cluster pelanggan existing yang bernilai tinggi.
@end

@q 6 :: w6-cluster
Salah satu keunggulan hierarchical clustering dibanding K-Means dalam pembentukan persona adalah
- mampu menilai loyalitas pelanggan hanya dengan variabel Monetary
- tidak memerlukan proses pembersihan data
- secara otomatis menggabungkan variabel demografis dan psikografis
+ tidak memerlukan jumlah kluster yang telah ditentukan sebelumnya
- menghasilkan centroid yang stabil tanpa iterasi
@why
Benar: @vars w6-hierarchical "No pre-defined k :: kebalikan K-Means: jumlah cluster gak harus ditentukan di muka" — inilah keunggulan utama hierarchical yang eksplisit dikontraskan dengan K-Means di @trap "K-Means vs Hierarchical dibalik".
"Menilai loyalitas hanya dengan Monetary" bukan klaim materi — baik K-Means maupun hierarchical bisa pakai variabel apa pun, bukan dibatasi satu variabel.
"Tidak perlu pembersihan data" dan "otomatis menggabungkan variabel demografis/psikografis" tidak pernah disebut materi — clustering tetap butuh data bersih dan variabel dipilih analis, bukan otomatis; "centroid stabil tanpa iterasi" justru ciri (dan potensi masalah) K-Means yang pakai centroid — hierarchical bahkan tidak memakai konsep centroid sama sekali (memakai dendrogram/merger jarak).
@end

@q 1 :: w1-equity
Sebuah merek memiliki rating rata-rata 4,7/5 di e-commerce tetapi hanya 20% konsumen yang dapat menyebutkan merek tersebut secara unaided recall. Fokus strategis yang paling tepat adalah
+ meningkatkan aktivitas promosi untuk memperkuat brand awareness
- menurunkan harga untuk meningkatkan loyalitas pelanggan
- mempertahankan kualitas produk sambil mengurangi biaya promosi
- meningkatkan frekuensi pembelian melalui program diskon
- memprioritaskan analisis churn untuk mengetahui penyebab ketidakpuasan
@why
Benar: rating tinggi (4,7/5) menunjukkan Perceived Quality sudah kuat, tapi unaided recall rendah (20%) adalah sinyal Brand Awareness lemah (indikator resmi awareness di w1-aaker adalah unaided/aided recall dan share of search) — gap ini menuntut fokus memperkuat awareness lewat promosi, bukan dimensi lain yang sudah kuat.
"Menurunkan harga untuk loyalitas" dan "program diskon menaikkan frekuensi" salah sasaran — masalah di soal bukan loyalitas/frekuensi beli, tapi awareness/pengenalan merek.
"Mempertahankan kualitas sambil kurangi promosi" salah arah karena promosi justru yang perlu DITAMBAH untuk mengejar awareness rendah; "analisis churn" tidak relevan karena soal tidak menyebut data kehilangan pelanggan, hanya rating dan recall.
@end

@q 1 :: w1-equity
Indikator yang tepat untuk mengukur brand awareness adalah
+ unaided recall, aided recall, dan share of search
- customer lifetime value dan churn rate
- click-through rate dan conversion cost
- Net Promoter Score (NPS) dan retention rate
- co-occurrence network dan word cloud
@why
Benar: @vars w1-aaker mendefinisikan sinyal digital Brand Awareness sebagai "volume pencarian brand, jumlah review, mention count" — dalam kerangka pengukuran umum brand awareness ini persis unaided recall, aided recall, dan share of search, indikator pengenalan merek yang tidak dipicu (atau dipicu) dan volume pencarian brand.
"Customer lifetime value dan churn rate" mengukur Loyalty/retention, bukan awareness; "NPS dan retention rate" juga indikator loyalitas/advokasi, bukan pengenalan merek.
"Click-through rate dan conversion cost" adalah metrik performa iklan digital (bukan bagian dari 5 dimensi Aaker yang diajarkan); "co-occurrence network dan word cloud" adalah alat W7 untuk brand associations (struktur makna), bukan pengukuran awareness.
@end

@q 7 :: w7-assoc
Data word cloud menunjukkan kata "inovasi" dan "kinerja" sering muncul bersama dalam percakapan tentang merek. Temuan ini terutama mendukung dimensi
- Perceived Quality karena mengindikasikan keunggulan teknis
- Brand Loyalty karena asosiasi menghasilkan pembelian berulang
- Customer Lifetime Value karena berkaitan dengan profitabilitas
- Brand Awareness karena frekuensi penyebutan kata
+ Brand Associations tentang atribut dan manfaat yang dihubungkan dengan merek
@why
Benar: kata "inovasi" dan "kinerja" yang sering co-occur adalah persis logika Brand-Association Network (W7): nodes = kata/tema, edges = co-occurrence yang sering, membentuk cluster makna seperti "Innovation" dan "Performance" di Brand Association Map slide — ini definisi Brand Association, atribut/manfaat yang dihubungkan konsumen dengan merek.
Perceived Quality memang berkaitan dengan kualitas, tapi soal ini spesifik tentang KATA-KATA yang muncul BERSAMA (co-occurrence), yang secara definisi materi adalah cara mengukur Brand Association, bukan Perceived Quality langsung.
Brand Loyalty butuh bukti perilaku beli ulang (bukan sekadar co-occurrence kata); Customer Lifetime Value adalah metrik finansial, tidak terukur dari word cloud; Brand Awareness diukur dari volume/frekuensi mention brand itu sendiri, bukan dari pasangan kata yang muncul bersama.
@end

@q 1 :: w1-equity
Seorang pelanggan berkata, "Saya merasa bangga dan modern menggunakan merek ini." Pernyataan ini terutama menunjukkan
- Brand Recall
+ Brand Association
- Brand Loyalty
- Perceived Quality
- Brand Awareness
@why
Benar: "bangga dan modern" adalah asosiasi mental/simbolik yang melekat pada merek (gaya hidup, momen) — persis @vars w1-aaker "Brand Association :: asosiasi mental yang melekat pada brand (atribut, gaya hidup, momen)".
Brand Recall dan Brand Awareness soal pengenalan/ingatan nama merek, bukan perasaan simbolik yang dirasakan saat memakainya.
Brand Loyalty butuh bukti perilaku beli ulang/rekomendasi (bukan sekadar perasaan bangga); Perceived Quality soal evaluasi KINERJA produk (bagus/awet), sedangkan pernyataan ini soal identitas/gaya hidup, bukan kinerja produk.
@end

@q 1 :: w1-equity
Perusahaan membandingkan ulasan positif vs negatif untuk mengukur kepuasan pelanggan. Analisis ini termasuk
- Brand Loyalty
- Brand Equity Valuation
+ Perceived Quality
- Brand Associations
- Brand Awareness
@why
Benar: @vars w1-aaker "Perceived Quality :: PERSEPSI kualitas produk/servis di mata pelanggan. Sinyal digital: rata-rata rating bintang, kata 'bagus/awet/original' di teks review" — membandingkan ulasan positif vs negatif untuk mengukur kepuasan persis mengukur persepsi kualitas ini.
Brand Loyalty butuh data perilaku beli ulang (bukan sekadar rasio ulasan positif/negatif); Brand Equity Valuation adalah penilaian nilai finansial merek secara keseluruhan, bukan analisis ulasan satu dimensi.
Brand Associations soal tema/hashtag yang menyertai merek (bukan polaritas ulasan); Brand Awareness soal seberapa dikenal merek, bukan soal puas-tidaknya isi ulasan.
@end

@q 7 :: w7-assoc
Salah satu cara efektif mengukur brand associations adalah
- melakukan uji t untuk membandingkan rata-rata rating antarplatform
+ analisis hashtag, word cloud, dan co-occurrence
- mengukur click-through rate pada iklan digital
- menggunakan rasio harga terhadap kualitas produk
- menghitung churn rate berdasarkan periode transaksi
@why
Benar: @vars w1-aaker menyebut sinyal digital Brand Association sebagai "tema/hashtag yang sering muncul bersama nama brand" dan W7 menegaskan alat konkretnya: word cloud, hashtag, dan co-occurrence network (nodes/edges/clusters) — ini persis definisi & metode brand-association mapping di materi.
Uji t rating antarplatform mengukur Perceived Quality secara statistik, bukan struktur asosiasi makna; click-through rate mengukur performa iklan, bukan asosiasi merek.
Rasio harga-kualitas terkait Value perception (Price/Value theme W7), bukan alat pengukuran association secara umum; churn rate adalah metrik retensi/loyalty, bukan metode mengukur asosiasi.
@end

@q 1 :: w1-equity
Jika analisis sentimen ulasan menunjukkan skor rata-rata positif tetapi churn rate tetap tinggi, kemungkinan penjelasan yang paling logis adalah
- top-of-mind awareness rendah meski churn rate tinggi
- data rating tidak relevan untuk pengukuran brand equity
+ persepsi kualitas baik namun loyalitas belum terbentuk secara konsisten
- brand associations negatif mendominasi percakapan digital
- kualitas objektif lebih tinggi dari perceived quality
@why
Benar: sentimen positif = sinyal Perceived Quality baik, tapi churn tinggi = sinyal Brand Loyalty lemah — @intro w1-equity menegaskan "Dimensi bisa naik di satu sisi dan lemah di sisi lain pada brand yang sama, makanya harus dipetakan satu-satu, bukan dirata-rata jadi satu skor"; contoh kelas Brand X (awareness tinggi, loyalty 8%) memakai logika identik.
"Top-of-mind awareness rendah" tidak relevan — soal tidak menyinggung data awareness/recall sama sekali, hanya sentimen dan churn.
"Data rating tidak relevan untuk brand equity" salah total (rating justru sinyal utama Perceived Quality); "brand associations negatif mendominasi" bertentangan dengan premis soal yang justru bilang sentimen RATA-RATA POSITIF; "kualitas objektif lebih tinggi dari perceived quality" salah konsep — Perceived Quality secara definisi ADALAH persepsi, bukan dibandingkan dengan "kualitas objektif" yang tidak diukur di soal ini.
@end

@q 6 :: w6-cluster
Dalam penerapan hierarchical clustering untuk persona, proses agglomerative berarti
+ memulai dari setiap data sebagai kluster tunggal dan menggabungkannya
- menghapus data dengan outlier ekstrem sebelum analisis
- memulai dari seluruh data sebagai satu kluster dan memecahnya menjadi sub-kluster
- menetapkan jumlah kluster berdasarkan elbow method
- memilih centroid awal berdasarkan nilai Monetary tertinggi
@why
Benar: @vars w6-hierarchical "Agglomerative (bottom-up) :: mulai dari tiap titik jadi cluster sendiri → merger ke grup → grup lebih besar" — persis contoh slide "Start with each customer review as an individual cluster" lalu digabung bertahap.
"Menghapus outlier ekstrem sebelum analisis" tidak disebut sebagai definisi agglomerative — ini pencampuran dengan konsep cleaning W3 yang tidak relevan di sini.
"Memulai dari seluruh data sebagai satu kluster lalu memecah" justru definisi Divisive (top-down), kebalikan agglomerative — persis @trap yang memperingatkan keduanya sering tertukar; "elbow method" adalah alat pemilihan k untuk K-Means, bukan cara kerja agglomerative; hierarchical bahkan tidak memakai konsep "centroid" sama sekali — itu istilah K-Means.
@end

@q 6 :: w6-strategy
Strategi pemasaran yang efektif untuk Cluster 3 – At Risk / Hibernating adalah
- pemberian akses produk eksklusif tanpa promosi
- peningkatan harga untuk mengoptimalkan profit per transaksi
+ kampanye reaktivasi personal seperti email reminder dan diskon khusus
- pengurangan komunikasi untuk menekan biaya
- fokus hanya pada akuisisi pelanggan baru
@why
Benar: @vars w5-strategy "At Risk / Can't Lose Them :: win-back campaign, reminder khusus" dan "Hibernating :: win-back dengan biaya terkontrol" — kampanye reaktivasi personal (email reminder + diskon khusus) persis strategi yang direkomendasikan materi untuk segmen ini.
"Akses produk eksklusif tanpa promosi" adalah strategi Champions (VIP treatment), bukan At Risk/Hibernating yang justru butuh insentif konkret untuk kembali aktif.
"Meningkatkan harga" bertentangan langsung dengan tujuan win-back (menarik pelanggan kembali, bukan mempersulit); "mengurangi komunikasi" bertentangan dengan tujuan reaktivasi yang justru butuh sentuhan lebih; "fokus hanya akuisisi baru" mengabaikan nilai historis segmen ini yang sering masih besar (lihat kasus NusaBean Can't Lose Them 19.7% sales).
@end

@q 2 :: w2-listening
Manakah dari berikut ini yang bukan termasuk jenis consumer insight yang dapat diperoleh dari media sosial?
- Customer journey online
- Word-of-mouth digital
- Pain points & kebutuhan konsumen
- Aspirasi & preferensi konsumen
+ Analisis laporan keuangan internal brand
@why
Benar: Social Listening (W2) fokus pada percakapan PUBLIK konsumen — tema, sentiment, driver, isu yang muncul dari data eksternal; laporan keuangan internal brand adalah data first-party operasional perusahaan, sama sekali bukan sinyal consumer insight dari media sosial.
Customer journey online, word-of-mouth digital, pain points, dan aspirasi/preferensi konsumen semuanya persis jenis insight yang disebut materi bisa diperoleh dari social listening (percakapan, ulasan, komentar publik).
Laporan keuangan bahkan bukan Source Brand Analytics (w1-badef): Source-nya social media/e-commerce/review platform, bukan data akuntansi internal — kesalahan kategorinya sama seperti @trap survei HR karyawan yang bukan Brand Analytics karena mengukur hal lain.
@end

@q 2 :: w2-listening
Tahap Analyze dalam Analytical Framework berfokus pada
- Memberikan rekomendasi strategi pemasaran
+ Mengidentifikasi pola dan sentimen dari data percakapan
- Menghubungkan temuan dengan perilaku konsumen
- Menyusun laporan keuangan brand
- Memantau percakapan konsumen secara real-time
@why
Benar: dalam Social Listening Workflow 7 langkah (w2-listening) urutannya Objective → Scope → Collect → Prepare → Analyze → Interpret → Report — tahap Analyze secara definisi adalah mengidentifikasi pola dan sentimen dari data yang sudah dikumpulkan/disiapkan, sebelum masuk ke Interpret (kenapa) dan Report (aksi).
"Memberikan rekomendasi strategi" adalah bagian tahap Report/Interpret, bukan Analyze; "menghubungkan temuan dengan perilaku konsumen" lebih dekat ke tahap Interpret ("KENAPA dikatakan dan apa artinya"), datang SETELAH Analyze.
"Menyusun laporan keuangan brand" tidak relevan dengan workflow social listening sama sekali; "memantau percakapan secara real-time" adalah ciri Monitoring (bukan Listening) — @vars w2-monlisten eksplisit membedakan monitoring ("apa yang dikatakan sekarang") dari listening/analyze ("kenapa dan apa artinya").
@end

@q 2 :: w2-listening
Metode yang paling tepat untuk mengetahui tingkat interaksi audiens terhadap konten media sosial adalah
- Audience Segmentation
- Keyword & Hashtag Tracking
- Influencer Mapping
+ Engagement Metrics
- Sentiment Analysis
@why
Benar: "tingkat interaksi audiens" secara harfiah adalah Engagement — like, comment, share, klik, play — yaitu Engagement Metrics; materi menyebut engagement sebagai bagian dari rantai dampak brand (Awareness→Association→Relevance→Engagement→Loyalty) yang diukur lewat klik/play/durasi/interaksi.
Audience Segmentation mengelompokkan audiens (bukan mengukur interaksi mereka); Keyword & Hashtag Tracking melacak TOPIK yang dibicarakan, bukan seberapa besar interaksi terhadap konten.
Influencer Mapping memetakan siapa yang berpengaruh (bukan mengukur interaksi konten); Sentiment Analysis mengukur POLARITAS opini (positif/negatif), bukan volume/tingkat interaksi — dua metrik yang berbeda tujuan meski sering dipakai bersama.
@end

@q 1 :: w1-bigdata
Dalam kasus Amazon Prime Video, penggunaan thumbnail yang berbeda untuk judul yang sama terutama menunjukkan bahwa Big Data dapat digunakan untuk
- mengganti brand association berdasarkan karakteristik demografis pengguna
+ mempersonalisasi komunikasi konten berdasarkan pola perilaku pengguna
- mengubah positioning konten berdasarkan rating yang diberikan pengguna
- menyesuaikan identitas inti merek berdasarkan karakteristik setiap pengguna
- mengoptimalkan kualitas intrinsik konten berdasarkan engagement pengguna
@why
Catatan: materi kelas (slide W1, @example "Netflix: dari data perilaku ke thumbnail personal") membahas kasus ini dengan nama brand Netflix, bukan Amazon Prime Video — dosen mengganti nama brand di soal ini, tapi logikanya sama persis: data perilaku (riwayat menonton, klik, interaksi) dipakai untuk memprediksi daya tarik tiap versi artwork lalu menampilkan thumbnail personal ke tiap pengguna.
Benar: sesuai alur 4 langkah materi (kumpulkan data perilaku → model prediksi daya tarik artwork → tampilkan thumbnail personal → respons pengguna jadi data baru), thumbnail berbeda adalah personalisasi KOMUNIKASI konten berdasarkan pola perilaku — bukan mengubah konten itu sendiri.
"Mengganti brand association berdasarkan demografis" salah karena data yang dipakai adalah PERILAKU (riwayat tonton, klik), bukan demografis; "mengubah positioning berdasarkan rating" tidak sesuai — materi tidak menyebut rating pengguna sebagai input thumbnail.
"Menyesuaikan identitas inti merek" berlebihan — identitas merek tetap sama, yang dipersonalisasi hanya komunikasi visualnya (Association: "Netflix diasosiasikan dengan pengalaman personal", bukan diubah identitasnya); "mengoptimalkan kualitas intrinsik konten" salah karena konten (film/serial)-nya sendiri tidak berubah, hanya thumbnail/cara menampilkannya.
@end

@q 1 :: w1-bigdata
HBO Max menemukan bahwa pengguna sering melihat artwork sebelum membaca informasi lain. Implikasi branding yang paling langsung dari temuan tersebut adalah
- artwork meningkatkan brand loyalty selama pengguna melakukan pembelian berulang
- artwork menggantikan kebutuhan akan algoritma rekomendasi konten
+ artwork dapat memengaruhi perhatian awal dan keputusan klik sebelum evaluasi konten lebih lanjut
- artwork menjadi indikator utama perceived quality dari seluruh konten Netflix
- artwork merupakan ukuran langsung brand awareness di tingkat korporat
@why
Catatan: kasus asli di slide W1 memakai nama Netflix (bukan HBO Max) untuk temuan "artwork dilihat duluan sebelum info lain" — dosen mengganti nama brand di soal ini, tapi logikanya sama: rantai dampak Awareness→Association→Relevance→Engagement dimulai dari artwork yang menarik perhatian LEBIH DULU sebelum pengguna mengevaluasi info lain.
Benar: karena artwork dilihat SEBELUM informasi lain, implikasi paling langsung adalah artwork memengaruhi perhatian awal dan keputusan klik (engagement) sebelum evaluasi konten lebih lanjut — persis urutan rantai brand di materi (Awareness → Relevance → Engagement).
"Meningkatkan brand loyalty selama pembelian berulang" melompat terlalu jauh — soal hanya tentang urutan PERHATIAN (dilihat duluan), bukan tentang retensi/loyalty jangka panjang; "menggantikan kebutuhan algoritma rekomendasi" tidak didukung materi — artwork dan algoritma rekomendasi bekerja BERSAMA dalam closed-loop, bukan saling menggantikan.
"Artwork jadi indikator utama perceived quality dari seluruh konten Netflix" berlebihan dan salah — soal spesifik tentang HBO Max (bukan menyebut "seluruh konten Netflix"), dan artwork mengukur daya tarik visual, bukan kualitas konten; "ukuran langsung brand awareness di tingkat korporat" salah skala — temuan ini soal perilaku level-konten/pengguna individual, bukan metrik awareness korporat.
@end

@q 2 :: w2-source
Sebuah brand ingin mengetahui siapa pelanggan dengan nilai ekonomi tertinggi. Sumber data awal yang paling tepat adalah
+ transaction atau CRM data karena memiliki customer-level behavior dan monetary value
- komentar Instagram karena mencerminkan engagement pelanggan
- Google Reviews karena mencerminkan pengalaman pelanggan
- e-commerce reviews karena menggabungkan rating dan product information
- social-listening data karena dapat menangkap customer sentiment
@why
Benar: @table Platform Fit w2-source eksplisit "Siapa pelanggan paling bernilai? → Transaksi/CRM first-party → perilaku level-customer + nilai moneter" — pertanyaan "nilai ekonomi tertinggi" butuh data recency/frequency/monetary per customer yang hanya tersedia di data transaksi/CRM.
Komentar Instagram mencerminkan engagement/asosiasi, tapi TIDAK BISA membuktikan nilai moneter per pelanggan (lihat @table "tidak bisa dibuktikan sendirian" — persepsi pasar luas, bukan nilai ekonomi individual).
Google Reviews dan e-commerce reviews cocok untuk atribut produk/kepuasan (bukan nilai ekonomi customer level); social-listening menangkap sentiment publik, bukan data transaksi individual yang dibutuhkan untuk menghitung nilai ekonomi pelanggan.
@end

@q 2 :: w2-sample
Brand mengambil 4.800 Google Reviews untuk mengestimasi tingkat kepuasan seluruh konsumennya. Risiko metodologis yang paling penting adalah
- temporal bias, karena Google Reviews tidak dapat dianalisis secara longitudinal
+ selection bias, karena pemberi review belum tentu mewakili seluruh pelanggan
- incompleteness, karena sebagian review mungkin tidak memiliki rating
- measurement error, karena rating selalu berbeda dengan sentiment
- duplication bias, karena konsumen selalu memberikan review lebih dari satu kali
@why
Benar: @vars w2-ownership menyebut keterbatasan khas sumber public/open adalah "selection bias" — orang yang menulis review adalah subset self-selected (biasanya yang sangat puas atau sangat kecewa), bukan sampel acak seluruh pelanggan; klaim "mengestimasi seluruh konsumen" dari review saja melanggar batas representativeness ini.
"Temporal bias karena tidak bisa dianalisis longitudinal" salah — Google Reviews justru punya timestamp dan BISA dianalisis tren waktu; ini bukan risiko utama di skenario ini.
"Incompleteness karena sebagian review tanpa rating" bukan isu utama untuk Google Reviews (yang umumnya selalu disertai rating bintang); "measurement error karena rating berbeda sentiment" dan "duplication bias karena konsumen selalu review lebih dari sekali" adalah klaim generalisasi berlebihan yang tidak didukung materi — tidak ada dasar bahwa SEMUA konsumen mengulang review.
@end

@q 2 :: w2-doc
Sebuah dataset memiliki kolom sentiment_score yang dihasilkan oleh model AI. Dalam data dictionary, informasi yang paling penting untuk memastikan provenance variabel tersebut adalah
- nama analis, tanggal presentasi, dan tujuan penelitian
- ukuran dataset, jumlah missing value, dan platform sumber
- nama kolom, jumlah kategori, dan rata-rata skor
+ definisi sentiment, model atau coding rule yang digunakan, dan sumber field asal
- nilai minimum, maksimum, dan standar deviasi sentiment
@why
Benar: @vars w2-dictionary untuk field DERIVED (seperti sentiment_score dari model AI) menuntut kolom Transformation — "formula, rule coding, atau versi model yang dipakai" — plus Source/provenance field asal; ini persis definisi sentiment + model/coding rule + sumber field yang dijawab benar di sini, sesuai @trap "menganggap tipe numerik sudah cukup jelas" yang menegaskan definisi bisnis harus eksplisit terpisah dari tipe data.
"Nama analis, tanggal presentasi, tujuan penelitian" tidak termasuk 7 field wajib data dictionary (field name, definition, type, allowed values, source, transformation, limitation).
"Ukuran dataset, missing value, platform sumber" adalah metadata dataset secara umum, bukan provenance SATU FIELD turunan; "nama kolom, jumlah kategori, rata-rata skor" dan "nilai min/max/std" adalah statistik deskriptif, bukan penjelasan CARA field itu DIHASILKAN — persis kesalahan "engagement score" tipe number yang ambigu di @trap w2-doc.
@end

@q 3 :: w3-clean
Tujuan utama data cleaning dalam Brand Analytics adalah
- mengubah seluruh variabel ke dalam bentuk numerik
+ menghasilkan data analysis-ready melalui aturan yang transparan dan terdokumentasi
- membuat dataset terlihat lebih rapi sebelum visualisasi
- mengurangi jumlah observasi agar proses analisis lebih cepat
- menghapus seluruh data yang tidak sesuai pola mayoritas
@why
Benar: @concept w3-cleandef "Data Cleaning :: Proses sistematis mendeteksi, mengoreksi, menstandarkan, menandai, atau mendokumentasikan masalah data supaya analisis tetap mencerminkan unit, periode, dan konstruk yang dimaksud" — tujuannya analysis-ready DAN auditable (Document sebagai langkah wajib), bukan sekadar kosmetik.
"Mengubah semua variabel jadi numerik" bukan tujuan cleaning — banyak field tetap teks/kategori (mis. review_text_clean); "membuat dataset terlihat rapi sebelum visualisasi" persis kesalahan yang di-flag @trap "Cleaning disamakan dengan menghapus data aneh" — cleaning bukan kosmetik.
"Mengurangi jumlah observasi agar lebih cepat" bertentangan dengan prinsip "Good cleaning does not erase inconvenient records"; "menghapus semua data yang tidak sesuai pola mayoritas" salah total — outlier valid (mis. corporate buyer 40x rata-rata) harus di-FLAG dan diinvestigasi, bukan otomatis dihapus karena beda dari mayoritas.
@end

@q 3 :: w3-detect
Rating 8 ditemukan pada dataset dengan skala rating resmi 1-5. Sumber asli tidak dapat diverifikasi. Tindakan paling defensible adalah
- mengubah 8 menjadi 5 karena kemungkinan kesalahan entry
- mengubah 8 menjadi 4,5 karena kemungkinan skala awal 1-10
- membiarkan 8 karena perubahan akan mengurangi authenticity data
+ menetapkannya sebagai missing atau invalid dan memberikan flag serta dokumentasi
- menghapus seluruh record karena rating tidak valid
@why
Benar: dimensi Validity (w3-qualitydim) menyebut rating harus dalam rentang 1-5; ketika nilai di luar rentang dan sumbernya TIDAK BISA diverifikasi, tindakan paling defensible adalah menandai sebagai invalid/missing + flag + dokumentasi — sejalan dengan prinsip "flag dan investigasi, jangan tebak-tebak koreksi" (persis siklus Detect→Decide→Transform→Validate→Document di kasus outlier CUST-88).
"Mengubah jadi 5" dan "mengubah jadi 4,5 (asumsi skala 1-10)" sama-sama MENEBAK nilai asli tanpa bukti — ini pelanggaran audit logic karena transformasi harus bisa dilacak ke rule yang jelas, bukan tebakan analis.
"Membiarkan 8 apa adanya" salah karena tetap melanggar Validity dan akan membiaskan rata-rata rating (persis risiko "rating=6" di kasus Kopi Nusa: "rata-rata rating jadi bias kalau tidak difilter/flag"); "menghapus seluruh record" berlebihan — prinsip cleaning class TIDAK menghapus record yang mengganggu, cukup flag bagian yang bermasalah.
@end

@q 3 :: w3-clean
Manakah urutan data-cleaning workflow yang paling tepat?
- Preserve raw - Transform - Profile - Define rules - Document - Validate
+ Preserve raw - Profile - Define rules - Transform - Validate - Log decisions
- Profile - Define rules - Transform - Preserve raw - Validate - Document
- Profile - Transform - Preserve raw - Validate - Define rules - Document
- Preserve raw - Define rules - Validate - Profile - Transform – Document
@why
Benar: @intro w3-clean eksplisit "Data-Cleaning Workflow lengkap versi kelas (6 langkah): Preserve raw file → Profile data → Define rules → Apply transformations → Validate output → Log decisions" — urutan ini logis: simpan bukti asli dulu, baru profiling untuk tahu masalahnya, baru tentukan aturan, baru transformasi diterapkan, baru divalidasi, baru dicatat.
Opsi lain yang menaruh "Transform" sebelum "Profile"/"Define rules" salah urutan — tidak masuk akal mentransformasi data sebelum tahu masalahnya atau aturan penanganannya sudah ditentukan.
Opsi yang menaruh "Preserve raw" di TENGAH (setelah Profile/Transform) juga salah — raw file harus diamankan PALING AWAL sebelum proses apa pun menyentuh data, supaya bukti asli tidak pernah berisiko tertimpa.
@end

@q 4 :: w4-viz
Untuk membandingkan jumlah review pada empat kategori keluhan, visualisasi awal yang paling tepat adalah
- scatter plot
- box plot
- histogram
- line chart
+ ranked bar chart
@why
Benar: @table Choosing the Right Chart "Compare categories :: Bar chart, ranked bar, Pareto" — membandingkan JUMLAH review pada beberapa KATEGORI (4 kategori keluhan) adalah tugas "compare categories" klasik, dan ranked bar adalah pilihan terbaik karena bisa langsung diurutkan dari terbesar ke terkecil (persis contoh Delivery delay 42, Staff attitude 31, dst).
Histogram dan box plot dipakai untuk "show distribution" dari variabel NUMERIK kontinu (mis. rating, order value), bukan untuk membandingkan hitungan antar KATEGORI diskrit.
Line chart dipakai untuk "show change over time" (tren), sementara di soal ini tidak ada dimensi waktu; scatter plot dipakai untuk menunjukkan hubungan/relationship antar dua variabel numerik, bukan membandingkan jumlah pada kategori — bahkan berisiko dibaca sebagai klaim kausal (@trap "Scatter = sebab-akibat").
@end

@q 4 :: w4-metrics
Sebuah crosstab menunjukkan 67% review negatif berasal dari Instagram. Sebelum menyatakan bahwa Instagram adalah platform dengan tingkat ketidakpuasan tertinggi, analis terutama perlu memeriksa
+ denominator yang digunakan dalam perhitungan persentase
- jumlah kata rata-rata setiap review
- platform
- jumlah follower Instagram
- jumlah kategori sentiment
@why
Benar: @concept w4-denominator "Dalam cross-tab, persentase dihitung PER BARIS (dibagi total channel itu sendiri), bukan terhadap seluruh data — salah denominator = salah baca". "67% review negatif dari Instagram" adalah pooled % (dibagi total SEMUA review negatif lintas platform), bukan row % (dibagi total review Instagram sendiri) — kalau Instagram punya volume review jauh lebih besar dari platform lain, 67% ini bisa cuma efek ukuran, bukan tingkat ketidakpuasan yang lebih tinggi.
"Jumlah kata rata-rata setiap review" dan "jumlah kategori sentiment" tidak relevan untuk memvalidasi klaim persentase platform mana yang paling tidak puas.
"Platform" itu sendiri sudah diketahui dari soal (Instagram) — bukan hal yang perlu "diperiksa lagi"; "jumlah follower Instagram" tidak berkaitan dengan perhitungan persentase review negatif — follower dan reviewer adalah populasi yang berbeda.
@end

@q 4 :: w4-sentiment
Word cloud menunjukkan kata "mahal" sebagai kata terbesar. Interpretasi yang paling tepat adalah
+ kata "mahal" sering muncul dan perlu diperiksa konteks serta tema sebelum disimpulkan
- mayoritas konsumen pasti memiliki persepsi negatif terhadap harga
- perusahaan perlu segera menurunkan harga karena price sentiment dominan
- brand memiliki positioning premium yang tidak diterima konsumen
- harga merupakan penyebab utama rendahnya loyalitas pelanggan
@why
Benar: @step "Fungsi word cloud" materi menegaskan word cloud adalah exploration device yang HARUS dipasangkan dengan frequency table dan sample text inspection — ukuran kata besar bukan insight final; contoh kelas kata "promo" besar tetap perlu divalidasi via sample review, theme cross-check, dan source comparison sebelum disimpulkan apa pun.
"Mayoritas konsumen pasti negatif terhadap harga" melompat ke kesimpulan tanpa validasi — kata besar di word cloud cuma menunjukkan FREKUENSI kemunculan, bukan otomatis polaritas sentiment (kata "mahal" bisa muncul dalam konteks "mahal tapi worth it" yang justru positif, persis pola W4/W7).
"Perlu segera menurunkan harga" dan "brand punya positioning premium yang tidak diterima" adalah lompatan ke Causality/keputusan strategis tanpa melalui interpretation ladder (Description → Association → Causality); "harga penyebab utama rendahnya loyalitas" adalah klaim kausal yang jelas melanggar aturan W4 "output harus berhenti di Description dan Association hati-hati".
@end

@q 4 :: w4-sentiment
Model sentiment menghasilkan 86% positive reviews. Dari pengecekan manual ditemukan bahwa banyak kalimat seperti "bagus banget, baru dua hari sudah rusak" diklasifikasikan positif. Tindakan terbaik adalah
- menerima hasil model karena sample manual terlalu kecil
- mengganti seluruh sentiment menggunakan rating bintang
- menghapus review yang mengandung mixed sentiment
+ melakukan manual validation dan memperbaiki coding atau context rule sebelum interpretasi
- menggunakan nilai rata-rata sentiment agar error individual tidak berpengaruh

@why
Benar: @vars w4-validation-steps menegaskan validasi 6 langkah (sample review, edge cases, rating cross-check, theme cross-check, source comparison, documentation) wajib dilakukan SEBELUM interpretasi — kalimat "bagus banget, baru dua hari sudah rusak" adalah kasus mixed/sarcasm-adjacent (pujian di depan, keluhan produk cepat rusak di belakang) yang butuh coding rule diperbaiki, persis pola "Great, another app crash" di tabel Why Sentiment Needs Human Checking.
"Menerima hasil model karena sample kecil" bertentangan dengan prinsip "sentiment adalah derived variable yang harus divalidasi, bukan kebenaran mutlak" (@trap "Naik tangga tanpa bukti" & "Mengira positive sudah final tanpa validasi").
"Mengganti seluruh sentiment pakai rating bintang" hanya berlaku pada platform yang PUNYA rating numerik (@trap "Rating rule dianggap cukup untuk semua platform") dan tidak menyelesaikan masalah coding teks; "menghapus review mixed" salah karena review mixed tetap mengandung evidence penting (split by aspect, bukan dibuang); "pakai rata-rata sentiment agar error individual tak berpengaruh" salah karena agregasi tidak memperbaiki KESALAHAN LABEL yang sistematis (kalimat sejenis akan terus salah dilabel, bukan sekadar noise acak yang hilang saat dirata-rata).
@end

@q 5 :: w5-calc
Dalam pemberian skor RFM 1-5, pelanggan yang melakukan pembelian paling baru seharusnya cenderung memperoleh
+ skor Recency lebih tinggi karena aktivitasnya lebih recent
- skor Recency yang sama karena scoring hanya berdasarkan frequency
- skor Frequency lebih tinggi karena aktivitasnya lebih recent
- skor Monetary lebih tinggi karena probabilitas repeat lebih besar
- skor Recency lebih rendah karena jumlah hari lebih kecil
@why
Benar: @formula w5-score "Recency: urut NAIK (hari terkecil = rank 1)" lalu S = 6 − ROUNDUP(rank/n×5) — hari PALING SEDIKIT (pembelian paling baru) mendapat rank 1 → skor TERTINGGI (5), persis contoh slide C1 (15 hari lalu) → R score 5.
"Skor Recency sama karena scoring berdasarkan frequency" salah total — Recency dan Frequency dua dimensi independen dengan rumus skor masing-masing, tidak saling menentukan.
"Skor Frequency lebih tinggi karena lebih recent" mencampur dua dimensi berbeda — recency (kapan) tidak menentukan frequency (berapa sering); "skor Monetary lebih tinggi karena probabilitas repeat" juga mencampur dimensi — Monetary dihitung dari total belanja, bukan dari kebaruan transaksi; "skor Recency lebih rendah karena jumlah hari lebih kecil" justru membalik arah rumus — hari kecil = skor TINGGI (bukan rendah), persis @trap "Recency itu kebalik".
@end

@q 5 :: w5-segment
Customer A memiliki R=5, F=2, M=2, sementara Customer B memiliki R=2, F=5, M=4. Interpretasi paling tepat adalah
- A dan B memiliki loyalitas yang sama karena total skor keduanya sama
- A merupakan At Risk sedangkan B Potential Loyalist
- A memiliki monetary value lebih tinggi karena recency-nya lebih tinggi
- A lebih loyal, sedangkan B merupakan pelanggan baru bernilai tinggi
+ A baru berinteraksi tetapi belum sering atau tinggi nilainya; B historisnya bernilai tinggi tetapi sudah lama tidak aktif
@why
Benar: A (R=5, FM rendah) persis pola Price Sensitive/Recent Users di w5-grid — baru beli tapi belum terbukti sering/besar; B (R=2, FM tinggi) persis pola Can't Lose Them — historis F&M besar tapi R rendah (sudah lama tidak aktif), sama seperti kasus CUST016 NusaBean (Monetary tertinggi tapi R=2, masuk Can't Lose Them, bukan Champions).
"A dan B loyalitas sama karena total skor sama" salah — @trap w5-segment "Jangan segmentasi dari total skor saja" eksplisit memperingatkan ini: total 9 sama-sama, tapi cerita perilakunya sangat berbeda (satu baru, satu historis besar tapi menghilang).
"A = At Risk, B = Potential Loyalist" membalik logika grid (At Risk justru R rendah seperti B, bukan A yang R=5); "A monetary lebih tinggi karena recency lebih tinggi" salah — recency dan monetary dua dimensi berbeda, tidak saling menyebabkan; "A lebih loyal, B pelanggan baru" membalik fakta — B punya F&M historis besar (bukan pelanggan baru), A yang justru baru (R tinggi, FM rendah).
@end

@q 6 :: w6-cluster
Perbedaan penting K-Means dan hierarchical clustering adalah
- hierarchical membutuhkan jumlah cluster di awal, sedangkan K-Means tidak
- K-Means menggunakan data kategorikal, sedangkan hierarchical hanya numerik
- hierarchical hanya dapat digunakan untuk RFM, sedangkan K-Means untuk sentiment
- K-Means menghasilkan persona sedangkan hierarchical hanya menghasilkan segmentasi
+ K-Means memerlukan penentuan jumlah cluster, sedangkan hierarchical dapat mengeksplorasi struktur kelompok melalui dendrogram
@why
Benar: @vars w6-kmeans "Requires k :: jumlah cluster harus dipilih SEBELUM jalan" vs @vars w6-hierarchical "No pre-defined k... dendrogram nunjukin natural groupings step by step" — inilah perbedaan penting yang eksplisit dikontraskan di @trap "K-Means vs Hierarchical dibalik".
"Hierarchical membutuhkan jumlah cluster di awal, K-Means tidak" membalik fakta persis seperti kesalahan yang di-flag @trap — urutannya terbalik dari yang benar.
"K-Means kategorikal, hierarchical numerik" salah — K-Means justru works best dengan data NUMERIK; "hierarchical hanya untuk RFM, K-Means untuk sentiment" tidak sesuai materi — keduanya bisa dipakai untuk variabel apa pun (RFM, sentiment, dll), tidak dibatasi begitu; "K-Means hasilkan persona, hierarchical hanya segmentasi" salah — baik K-Means maupun hierarchical sama-sama hanya menghasilkan SEGMENTASI (starting point), persona adalah langkah TERPISAH sesudahnya (w6-seg-persona-strategy: Segmentation → Persona → Strategic Response) yang berlaku untuk metode manapun.
@end

@q 6 :: w6-cluster
Pada elbow method, WCSS turun tajam dari k=2 ke k=4 dan setelah k=4 penurunannya menjadi relatif kecil. Nilai k yang paling reasonable adalah
+ k=4 karena menjadi titik sebelum marginal improvement melandai
- k=3 karena berada di tengah penurunan WCSS
- k=2 karena model paling sederhana
- k=5 karena memiliki WCSS lebih kecil dibanding k=4
- k terbesar karena semakin kecil WCSS selalu semakin baik
@why
Benar: logika elbow method — titik "siku" (elbow) adalah tempat penurunan WCSS BERHENTI tajam dan mulai melandai; di soal ini penurunan tajam berlangsung sampai k=4, lalu melandai SETELAH k=4, jadi k=4 adalah elbow-nya (titik optimal sebelum marginal improvement mengecil).
"k=3 karena di tengah penurunan" tidak berdasar — k=3 masih di ZONA PENURUNAN TAJAM (belum melandai), bukan titik elbow; memilih titik tengah tanpa alasan bukan logika elbow method yang benar.
"k=2 karena paling sederhana" mengabaikan bahwa WCSS masih turun TAJAM dari k=2 ke k=4 — berarti k=2 BELUM cukup memisahkan cluster; "k=5 karena WCSS lebih kecil" dan "k terbesar karena WCSS selalu makin kecil" salah paham prinsip elbow — WCSS SELALU menurun seiring k bertambah (sampai k=n WCSS=0), itu bukan alasan memilih k besar; yang dicari adalah titik DIMINISHING RETURNS, bukan WCSS absolut terkecil.
@end

@q 6 :: w6-persona
Hasil clustering menghasilkan kelompok dengan recent purchase, high frequency, high spending, dan positive advocacy. Persona yang paling tepat adalah
- Silent Loyalist - loyal tetapi tidak menunjukkan engagement
+ High-Value Advocate - aktif, bernilai tinggi, dan berpotensi memperkuat advocacy
- Potential Explorer - baru mengenal merek dan masih membandingkan alternatif
- Price-Driven Switcher - sering berpindah merek berdasarkan harga
- Dormant Deal Seeker - jarang membeli tetapi sensitif promosi

@why
Benar: recent purchase (R tinggi) + high frequency + high spending + positive advocacy persis profil Champions/The Champion di materi (w6-persona-types: "loyal, high-value, brand advocate") — kombinasi keempat sinyal ini paling cocok dengan persona yang aktif, bernilai tinggi, DAN mendukung dari sisi advocacy (word-of-mouth positif), sehingga "High-Value Advocate" adalah label paling tepat yang mencerminkan semua elemen soal termasuk advocacy yang tidak disebut di opsi Champion generik lainnya.
"Silent Loyalist — loyal tapi tidak menunjukkan engagement" bertentangan langsung dengan premis soal "positive advocacy" (advocacy = bentuk engagement aktif, bukan diam).
"Potential Explorer" cocok untuk pelanggan yang MASIH membandingkan (curious, price-sensitive comparison shopping — w6-persona-types The Explorer), bukan yang sudah frequent/high spending; "Price-Driven Switcher" dan "Dormant Deal Seeker" mencerminkan perilaku sensitif harga/jarang beli — bertentangan langsung dengan "high frequency, high spending, recent purchase" di soal.
@end

@q 6 :: w6-strategy
Cluster A memiliki rata-rata Frequency dan Monetary tertinggi, tetapi Recency mulai menurun dibanding periode sebelumnya. Respons strategis yang paling tepat adalah
- memberikan acquisition discount karena pelanggan harus dianggap sebagai new customer
- meningkatkan harga untuk memaksimalkan remaining customer value
+ memprioritaskan retention atau reactivation sebelum pelanggan bernilai tinggi bergeser menjadi At Risk
- mengurangi komunikasi karena pelanggan sudah menunjukkan loyalitas
- memperlakukan cluster sebagai Champion tanpa intervensi karena historical value tinggi
@why
Benar: F&M tertinggi tapi Recency MULAI MENURUN adalah sinyal peringatan dini — pelanggan bernilai tinggi mulai bergeser dari Champions/Loyal menuju Can't Lose Them/At Risk (persis pola CUST016 NusaBean: Monetary tertinggi tapi R turun ke Can't Lose Them); materi w6-severity-urgency menegaskan segmen bernilai tinggi yang mulai pasif harus diintervensi SEGERA sebelum jendela aksi menutup (urgency tinggi).
"Acquisition discount karena dianggap new customer" salah kategori — pelanggan ini punya HISTORI F&M tinggi, bukan pelanggan baru; menyamakan dengan new customer mengabaikan nilai historisnya.
"Meningkatkan harga untuk maksimalkan remaining value" berisiko mempercepat churn justru saat retensi paling dibutuhkan; "mengurangi komunikasi karena sudah loyal" dan "perlakukan sebagai Champion tanpa intervensi" mengabaikan SINYAL PERINGATAN (recency menurun) — persis @trap w6-severity-urgency bahwa dampak tinggi + time-sensitivity tinggi butuh fokus SEGERA, bukan dibiarkan.
@end

@q 6 :: w6-cluster
K-Means menghasilkan empat cluster yang secara statistik berbeda, tetapi setelah profiling ternyata Cluster 2 dan 3 membutuhkan tindakan pemasaran yang hampir identik. Implikasi manajerial paling tepat adalah
- kedua cluster harus otomatis digabung tanpa memeriksa variabel pembentuknya
- clustering pasti salah karena setiap cluster harus memiliki strategi yang berbeda
- K-Means sebaiknya diganti dengan RFM karena RFM selalu menghasilkan actionable segment
- jumlah cluster harus ditambah agar perbedaan perilaku semakin jelas
+ interpretasi segmentasi perlu mempertimbangkan managerial usefulness, bukan hanya statistical separation
@why
Benar: materi w6-seg-persona-strategy menegaskan Segmentation (data) → Persona (manusia) → Strategic Response (aksi) adalah tiga lapisan terpisah — cluster yang secara statistik berbeda tidak otomatis butuh strategi berbeda; keputusan akhir harus mempertimbangkan KEGUNAAN MANAJERIAL (apakah strategi aksinya berbeda), bukan cuma pemisahan statistik semata.
"Kedua cluster harus otomatis digabung tanpa memeriksa variabel" terlalu terburu-buru — perlu tetap memeriksa dulu APA yang membuat mereka statistik berbeda sebelum memutuskan, bukan otomatis.
"Clustering pasti salah karena tiap cluster harus beda strategi" adalah asumsi keliru — clustering valid secara statistik tidak menjamin implikasi bisnisnya harus selalu berbeda; "ganti dengan RFM karena selalu actionable" tidak didukung materi (RFM juga bisa menghasilkan segmen yang perlu digabung logikanya, lihat @trap "jangan segmentasi dari total skor saja"); "tambah jumlah cluster" berisiko over-segmentasi tanpa menyelesaikan masalah — lebih banyak cluster tidak otomatis lebih actionable, malah bisa makin sulit dikelola manajerial.
@end

@q 7 :: w7-prep
Dalam theme coding, kata seperti durable, effective, texture, taste, dan feature paling dekat dengan theme
- Price atau Value
+ Product Quality
- Service Experience
- Problem atau Risk
- Identity atau Lifestyle
@why
Benar: @table Theme Coding (Slide W7) eksplisit "Product Quality | Example Indicators: durable, effective, texture, taste, feature | Brand Meaning: Perceived quality" — kelima kata di soal ini adalah verbatim contoh indikator Product Quality dari materi.
Price/Value indikatornya beda: worth it, expensive, promo, value for money — tidak ada satu pun kata soal yang cocok ke sana; Service Experience indikatornya delivery, response, complaint handling — juga tidak cocok.
Problem/Risk indikatornya broken, fake, unsafe, misleading (soal ini justru kata POSITIF seperti durable/effective, bukan indikasi risiko); Identity/Lifestyle indikatornya aesthetic, confident, local pride, community — beda kategori sama sekali dari kata-kata teknis produk di soal.
@end

@q 7 :: w7-assoc
Dalam brand-association network, jika node brand X, premium, quality, dan durable sering terhubung, temuan tersebut paling tepat diinterpretasikan sebagai
- seluruh konsumen memandang brand sebagai premium dan durable
- konsumen memiliki loyalitas tinggi terhadap brand X
+ konsep-konsep tersebut sering muncul bersama dalam struktur makna yang terkait dengan brand
- brand memiliki awareness lebih tinggi daripada pesaing
- perceived quality menyebabkan konsumen menganggap brand premium
@why
Benar: @vars w7-network "Edges :: frequent co-occurrence — garis penghubung yang menandakan dua makna sering muncul bersama" dan "Clusters :: meaning structures" — node yang sering terhubung berarti konsep-konsep itu SERING MUNCUL BERSAMA dalam struktur makna terkait brand, bukan klaim kuantitatif absolut atau sebab-akibat.
"Seluruh konsumen memandang brand premium dan durable" melebih-lebihkan — co-occurrence dalam data teks TIDAK sama dengan klaim universal "seluruh konsumen"; data hanya menunjukkan pola dalam teks yang dianalisis, bukan sensus seluruh populasi.
"Loyalitas tinggi" dan "awareness lebih tinggi dari pesaing" adalah dimensi Aaker LAIN (Loyalty, Awareness) yang butuh bukti perilaku beli ulang/data pembanding kompetitor — tidak bisa disimpulkan dari co-occurrence kata semata; "perceived quality menyebabkan brand premium" adalah klaim KAUSAL yang dilarang @trap "Co-occurrence bukan hubungan sebab" — edge network cuma menunjukkan asosiasi bersama, bukan mekanisme sebab-akibat.
@end

@q 7 :: w7-sentiment
Hasil analisis sebuah brand: Service Speed (Positive 9, Negative 16); Product Quality (Positive 33, Negative 15); Packaging (31, Negative 9); Delivery (Positive 28, Negative 8); Price/Value (Positive 31, Negative 8). Berdasarkan Negative Ratio, area yang seharusnya menjadi prioritas pertama untuk improvement adalah
- Product Quality
+ Service Speed
- Packaging
- Delivery
- Price/Value
@why
Benar: Negative Ratio = Negative / (Positive + Negative) per tema — Service Speed = 16/(9+16) = 16/25 = 64%, jauh di atas Product Quality 15/(33+15) = 15/48 = 31,25%, Packaging 9/(31+9) = 9/40 = 22,5% (soal menulis "Packaging (31, Negative 9)" — 31 dibaca sebagai Positive, konsisten format tema lain), Delivery 8/36 = 22,22%, dan Price/Value 8/39 = 20,51%. Service Speed punya negative ratio TERTINGGI di antara kelima tema, sehingga jadi prioritas pertama perbaikan — sejalan dengan logika w7-listening-matrix "High frequency + negative → urgent fix" yang memprioritaskan berdasar proporsi negatif, bukan volume mentah.
Product Quality punya Negative COUNT tertinggi (15) tapi basisnya juga besar (48 total) sehingga rasio negatifnya (31,25%) jauh lebih rendah dari Service Speed — pengecoh ini menjebak siapa pun yang membaca angka Negative mentah tanpa membagi dengan totalnya (persis kesalahan denominator w4-denominator).
Packaging, Delivery, dan Price/Value semuanya punya negative ratio di kisaran 20–22,5%, jauh di bawah Service Speed (64%) — ketiganya sekilas punya angka Negative kecil (8-9) yang terlihat "aman", tapi rasio yang benar tetap harus dihitung per tema (Negative dibagi total tema itu sendiri), bukan dibandingkan sebagai angka mentah lintas tema.
@check 16/(9+16)*100 ~ 64.0
@check 15/(33+15)*100 ~ 31.25
@end

@q 3 :: w3-struct
Mengapa raw data sebaiknya dipisahkan dan tetap dipertahankan ketika proses cleaning dilakukan?
- Agar jumlah variabel selalu bertambah
- Agar semua data dapat langsung dihapus setelah dianalisis
- Agar tidak perlu membuat dokumentasi cleaning
+ Agar proses cleaning dapat ditelusuri dan hasil transformasi dapat divalidasi kembali
- Agar ukuran file menjadi lebih besar
@why
Benar: @vars w3-fieldtype "Raw field :: menyimpan bukti asli apa adanya... Jangan pernah ditimpa" dan @trap "Field cleaned menimpa field raw langsung" menegaskan: kalau raw ditimpa, bukti asli hilang selamanya dan TIDAK BISA divalidasi ulang — mempertahankan raw adalah syarat audit logic (source field → rule applied → new field/flag → validation result) supaya cleaning bisa ditelusuri dan divalidasi kembali kapan saja.
"Agar jumlah variabel selalu bertambah" dan "agar ukuran file lebih besar" adalah efek samping tak sengaja, BUKAN alasan/tujuan mempertahankan raw — tujuannya auditability, bukan ukuran file.
"Agar semua data bisa langsung dihapus setelah dianalisis" bertentangan langsung dengan prinsip preserve raw (raw justru harus DIPERTAHANKAN, bukan dihapus); "agar tidak perlu dokumentasi" juga bertentangan — materi menegaskan "cleaned dataset tanpa log BUKAN evidence yang auditable", dokumentasi tetap wajib meski raw dipertahankan.
@end

@q 6 :: w6-persona
Hasil clustering menunjukkan kelompok pelanggan yang sering membandingkan harga, sensitif terhadap diskon, sering mencari alternatif produk, dan tertarik untuk mencoba produk baru. Persona yang paling sesuai adalah
- The Hibernating Customer
- The Champion
+ The Explorer
- The Loyal Advocate
- The At-Risk Customer
@why
Benar: @vars w6-persona-types "The Explorer :: curious, price-sensitive, frequent comparison shopping. Response slide: trial bundles, educational content, discounts" — persis kombinasi ciri di soal: membandingkan harga, sensitif diskon, mencari alternatif, tertarik mencoba produk baru (curious/trial-seeking).
"The Hibernating Customer" dan "The At-Risk Customer" mencerminkan pelanggan yang PASIF/menjauh (recency memburuk, jarang beli) — bukan yang aktif membandingkan dan mencoba hal baru seperti di soal.
"The Champion" adalah pelanggan loyal bernilai tinggi tanpa perlu insentif harga (bertentangan dengan "sensitif diskon" di soal); "The Loyal Advocate" mencerminkan pelanggan yang sudah berkomitmen dan mempromosikan brand — bertentangan dengan perilaku "sering mencari alternatif produk" yang justru ciri belum loyal/masih menjajaki.
@end



