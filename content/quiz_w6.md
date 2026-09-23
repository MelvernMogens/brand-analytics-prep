# Quiz Week 6 — Interpreting Brand Segmentation into Personas
# Owner: @research

@q 6 :: w6-cluster :: w6-kmeans
Tim brand "Kopi Senja" butuh 3 segmen loyalitas dari skor RFM 200 pelanggan (numerik 1–5), dijalankan ulang tiap bulan. Kapan K-Means lebih tepat dipilih dibanding hierarchical clustering?
- K-Means tidak butuh menentukan jumlah cluster di muka — dendrogramnya menunjukkan pengelompokan alami
- K-Means paling pas untuk data teks kategorikal seperti tema keluhan
- Hierarchical selalu lebih akurat, jadi K-Means hanya untuk data kecil
+ Jumlah cluster (k) sudah ditentukan kebutuhan bisnis dan dataset besar — K-Means cepat untuk data numerik
@why
K-Means = partition-based, cepat untuk dataset besar, works best data numerik/kontinu (skor RFM), tapi k harus dipilih SEBELUM jalan — di soal ini k=3 sudah jelas dari kebutuhan bisnis.
Pernyataan "tidak butuh k di muka" adalah sifat HIERARCHICAL, bukan K-Means (justru sering tertukar di ujian); K-Means untuk numerik, bukan teks kategorikal; "hierarchical selalu lebih akurat" tidak ada di materi — hierarchical justru berat di data besar.
@end

@q 6 :: w6-cluster :: w6-hierarchical
Analis mau melihat pengelompokan alami tema keluhan pelanggan TANPA menentukan jumlah cluster terlebih dahulu, divisualisasikan sebagai pohon. Metode yang tepat dan alasannya?
- K-Means dengan k ditentukan setelah hasil keluar — hasilnya membentuk pohon cluster alami
+ Hierarchical clustering — dendrogram menunjukkan natural groupings, k diputuskan saat memotongnya
- Divisive clustering — paling umum dipakai karena kompleksitasnya rendah
- K-Means dengan k=1 lalu diperbesar bertahap sampai pola terlihat jelas
@why
Hierarchical tidak butuh pre-defined k: dendrogram menunjukkan bagaimana cluster terbentuk dan bergabung, analyst memotong di ketinggian tertentu UNTUK memilih jumlah cluster — keputusan di akhir, bukan di awal.
Divisive jarang dipakai justru karena computational complexity tinggi (yang paling umum agglomerative); dua opsi K-Means salah metode — K-Means selalu butuh k di muka.
@end

@q 6 :: w6-cluster :: w6-hierarchical
Dalam hierarchical clustering, apa beda agglomerative dan divisive, dan mana yang paling umum dipakai?
- Agglomerative top-down (semua data satu cluster lalu dipecah); divisive bottom-up (tiap titik cluster sendiri lalu merger) — divisive paling umum
+ Agglomerative bottom-up (tiap titik cluster sendiri lalu merger); divisive top-down (semua data satu cluster lalu dipecah) — agglomerative paling umum
- Keduanya bottom-up, bedanya cuma kecepatan — divisive lebih cepat
- Keduanya top-down, bedanya cuma visualisasi — agglomerative pakai scatter, divisive pakai dendrogram
@why
Slide: agglomerative = bottom-up, mulai tiap titik jadi cluster sendiri lalu merger (contoh: tiap review → tema "service issues", "price complaints", "positive experiences") — PALING UMUM dipakai. Divisive = top-down (semua customer → "satisfied" vs "unsatisfied" → sub-jenis), jarang karena complexity tinggi.
Dua opsi lain membalik atau menyamakan arah pembentukan cluster — pola klasik tertukar di ujian.
@end

@q 6 :: w6-persona :: w6-seg-persona-strategy
Apa beda mendasar Segmentation, Persona, dan Strategic Response dalam tiga lapisan materi W6?
- Ketiganya istilah sama untuk pengelompokan pelanggan berdasarkan data RFM
- Segmentation = rencana aksi; Persona = data mentah; Strategic Response = pengelompokan pelanggan
+ Segmentation = pola di data; Persona = siapa customernya; Strategic Response = aksi brand
- Persona adalah versi kecil dari segmentation — bedanya hanya jumlah cluster yang lebih sedikit
@why
Tiga lapisan slide: Segmentation menjawab "what the data shows", Persona menjawab "who the customer is" (humanized profile), Strategic Response menjawab "how the brand should act" — alur data → manusia → aksi.
Menyamakan ketiganya menghapus inti terjemahannya; opsi 3 membalik urutan; persona bukan "cluster lebih sedikit" melainkan profil 5 elemen lengkap, bukan angka.
@end

@q 6 :: w6-persona :: w6-persona-5
Manakah yang BUKAN salah satu dari 5 elemen persona framework (Demographics, Behavioral Traits, Motivations, Pain Points, Preferred Channels)?
- Demographics — usia, profesi, income, lokasi
- Motivations — apa yang mendorong loyalty atau churn
+ RFM_Score — jumlah R + F + M tiap pelanggan
- Preferred Channels — social media, apps, offline
@why
Lima elemen persona slide: Demographics, Behavioral Traits, Motivations, Pain Points, Preferred Channels. RFM_Score adalah angka segmentasi (what the data shows) — cluster belum persona; kalau gak ada demografi/motivasi/pain points, itu masih segmen.
Opsi lain adalah elemen sah framework — justru RFM_Score yang menandai pelaku soal belum paham batas segmen vs persona.
@end

@q 6 :: w6-persona :: w6-manual-auto
Menurut Salminen et al. 2020, perbandingan manual vs automatic persona yang benar:
- Manual: big data, cepat (hari), murah; automatic: small data, lambat (bulan), mahal
- Manual dan automatic sama-sama kuantitatif — bedanya hanya ukuran sampel data
- Automatic persona lebih kaya nuansa karena diproses mesin, manual lebih dangkal
+ Manual: small data, kualitatif, lambat, mahal, nuanced; automatic: big data, cepat, terjangkau
@why
Tabel Salminen: manual = small data, qualitative, slow (months), expensive, nuanced; automatic = big data, quantitative, fast (days), affordable, explicit behaviors — dua-duanya sama-sama "a face to data".
Opsi 1 membalik seluruh tabel; "sama-sama kuantitatif" salah (manual kualitatif); nuance justru kekuatan manual yang hilang di automatic — bukan sebaliknya.
@end

@q 6 :: w6-persona :: w6-seg-persona-strategy
Empat pelanggan brand fiktif "Seblak Sultan" dengan skor R, F, M (masing-masing 1–5). RFM_Score = SUM (R+F+M); aturan segmen: ≥12 Champion, 9 Loyal Customer, 6 At Risk, ≤4 Lost/Need Attention.
| Pelanggan | R | F | M | RFM_Score |
| Ucok | 5 | 5 | 5 | ? |
| Dedi | 3 | 3 | 3 | ? |
| Sari | 2 | 2 | 2 | ? |
| Rina | 4 | 4 | 4 | ? |
RFM_Score Ucok dan segmennya adalah:
+ 15 — Champion
- 555 — Champion (kode digabung, bukan dijumlah)
- 15 — At Risk (skor tinggi = berisiko)
- 5 — Loyal Customer (5+5+5 lalu dibagi 3 dimensi)
@why
Konvensi W6 (slide p.25): RFM_Score = SUM R+F+M, rentang 3–15. Ucok: 5+5+5 = 15 ≥ 12 → Champion. Bukan kode "555" — itu konvensi berbeda (concatenation di W5); makanya wajib cek konvensi skor yang dipakai.
"Skor tinggi = berisiko" membalik arah baca (skor tinggi justru pelanggan terbaik — recency pendek/frekuensi tinggi/monetary besar); 5 adalah rata-rata, bukan SUM.
@check 5+5+5 == 15
@end

@q 6 :: w6-persona :: w6-seg-persona-strategy
Data pelanggan brand fiktif "Bakso Berlian" (RFM_Score = R+F+M, aturan segmen: ≥12 Champion, 9 Loyal, 6 At Risk, ≤4 Lost):
| Nama | R | F | M | RFM_Score | Segmen |
| A | 3 | 3 | 3 | ? | ? |
| B | 2 | 1 | 1 | ? | ? |
| C | 4 | 4 | 4 | ? | ? |
RFM_Score A, B, C dan segmennya (berurutan A, B, C):
- 9 Lost · 4 At Risk · 12 Champion
- 333, 211, 444 (digabung jadi kode) · semuanya Loyal
+ 9 Loyal Customer · 4 Lost/Need Attention · 12 Champion
- 9 Loyal Customer · 2 At Risk · 12 Champion
@why
A: 3+3+3 = 9 → Loyal Customer. B: 2+1+1 = 4 → ≤4 Lost/Need Attention. C: 4+4+4 = 12 → ≥12 Champion.
Opsi 1 menukar aturan segmen B (4 = Lost, bukan At Risk yang berarti skor 6); menggabung jadi kode "333" salah konvensi (W6 pakai SUM); skor B adalah 4, bukan 2.
@check 3+3+3 == 9
@check 2+1+1 == 4
@check 4+4+4 == 12
@end

@q 6 :: w6-strategy :: w6-severity-urgency, w6-strategy-table
Segmen Champion brand fiktif "Gorengan Gurih" beranggotakan 5 pelanggan: RFM_Score 14, 15, 12, 13, 11. Berapa rata-rata RFM_Score segmen ini — dan menghitungnya per segmen berguna untuk apa?
- 13,0 — rata-rata segmen berguna untuk menentukan jumlah cluster K-Means
+ 13,0 — ringkasan segmen jadi bahan profil persona dan strategy table
- 65,0 — total skor seluruh anggota segmen dibaca langsung sebagai rata-rata
- 12,5 — rata-rata semua pelanggan di dataset, bukan segmen Champion saja
@why
Rata-rata Champion = (14+15+12+13+11)/5 = 65/5 = 13,0. Ringkasan per segmen (jumlah orang, rata-rata skor/monetary, channel dominan, persen keluhan) adalah bahan Behavioral Traits untuk persona dan dasar mengisi strategy table.
65,0 adalah total (lupa membagi); 12,5 bukan angka dari segmen ini; menentukan k itu urusan clustering, bukan ringkasan segmen.
@check (14+15+12+13+11)/5 ~ 13.0
@check 14+15+12+13+11 == 65
@end

@q 6 :: w6-strategy :: w6-strategy-table
Baris At-Risk pada Strategic Response Design (Persona | Key Message | Channel | Offer/Value | Goal) yang benar menurut slide:
- "You are our most valued customer" | VIP events | exclusive rewards | retain & strengthen loyalty
- "Best value for your money" | price comparison sites | promotions | shift perception & build trust
- "Discover more with us" | social media, website, promotions | trial bundles, discounts, guides | upsell & convert curiosity
+ "We want you back" | personalized email, call center, SMS | re-engagement offers, surveys, support | re-engage & reduce churn
@why
Tabel slide: At-Risk = message "We want you back", channel personalized email/call center/SMS, offer re-engagement offers/surveys/support, goal re-engage & reduce churn.
Opsi 1 adalah baris Champion, opsi 2 baris Value Seeker, opsi 4 baris Explorer — pesan/offer yang dipertukarkan lintas persona adalah kesalahan khas: satu kampanye massal untuk semua persona menghapus inti strategic response design.
@end

@q 6 :: w6-strategy :: w6-severity-urgency
Menurut Severity × Urgency matrix, Value Seeker ditempatkan di low severity + medium urgency. Arti dan tindakan yang tepat:
- Low severity = tidak penting — abaikan segmen ini selamanya
+ Low severity + medium urgency = monitored & nurtured — dipantau dan dipelihara, bukan fokus segera
- Medium urgency = harus ditangani minggu ini dengan kampanye win-back
- Value Seeker harus diprioritaskan sebelum At-Risk karena jumlahnya biasanya lebih banyak
@why
Contoh slide: At-Risk = high+high (immediate focus); Value Seeker = low+medium (monitored & nurtured). "Not all personas need immediate action" — prioritas = dampak × jendela waktu, bukan ukuran segmen.
Mengabaikan selamanya salah (nurture tetap jalan); win-back adalah taktik At-Risk; jumlah orang tidak otomatis menaikkan prioritas — severity × urgency yang menentukan.
@end

@q 6 :: w6-strategy :: w6-equity-link
Persona "Value Seeker" (sering beli tapi spend rendah, sensitif promo) terkait dimensi brand equity mana menurut slide Linking Personas to Brand Equity?
- Brand Loyalty — karena frekuensi belinya tinggi
- Brand Awareness — karena baru mengenal brand
- Perceived Quality issues — karena kecewa pada kualitas
+ Brand Associations — asosiasi value dan price fairness
@why
Tabel slide: Champion → Brand Loyalty, Explorer → Brand Awareness, At-Risk → Perceived Quality issues, Value Seeker → Brand Associations (value, price fairness). Value Seeker nempel karena asosiasi value/harga fair — kalau asosiasinya cuma "murah", positioning bisa terkunci ke harga.
Frekuensi tinggi bukan otomatis loyalty (loyalty = aset Champion); Value Seeker bukan "baru kenal" (itu Explorer); kecewa kualitas adalah pola At-Risk.
@end

@q 6 :: w6-persona :: w6-persona-types, w6-seg-persona-strategy
Seorang analyst melapor: "Persona kami: laki-laki, 40 tahun, RFM_Score 4, recency 90 hari, frekuensi 2×, monetary Rp900.000." Mengapa ini BELUM layak disebut persona?
+ Belum ada Motivations, Pain Points, dan Preferred Channels — ini masih segmen
- Sudah layak — ada demografi dan data RFM lengkap untuk membangun persona
- Karena RFM_Score 4 terlalu rendah untuk dijadikan dasar sebuah persona
- Karena persona harus dibangun dari wawancara manual, bukan dari data RFM
@why
Persona = humanized profile 5 elemen (Demographics, Behavioral Traits, Motivations, Pain Points, Preferred Channels). Laporan itu baru punya demografi + angka perilaku (what the data shows) — masih segmen. Kalau gak ada motivasi/pain points, itu belum "who the customer is".
Skor rendah justru bisa jadi persona (mis. At-Risk "Andi"); persona otomatis dari data RFM sah menurut Salminen — bukan hanya wawancara.
@end
