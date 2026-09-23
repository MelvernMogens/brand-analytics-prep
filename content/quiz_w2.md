# Quiz Week 2 — Data Acquisition & Documentation
# Owner: @content

@q 2 :: w2-source :: w2-decisionfirst
Menurut prinsip Provost & Fawcett yang dipakai kelas, langkah PERTAMA sebelum memilih sumber data brand adalah:
- Cek API mana yang paling gampang di-scrape
+ Tentukan decision question — keputusan apa yang harus didukung evidence ini
- Hitung berapa banyak data yang tersedia di tiap platform
- Pilih platform yang paling populer di kalangan target market
@why
Prinsip inti decision-first: JANGAN mulai dari "data apa yang bisa saya scrape", mulai dari "keputusan apa yang harus didukung evidence ini".
Kemudahan scraping, volume data, dan popularitas platform semuanya pengecoh klasik — sumber yang baik itu fit terhadap decision question, bukan sekadar besar/populer/mudah diambil.
@end

@q 2 :: w2-source :: w2-ownership
Kanvas Denim bekerja sama dengan sebuah mal untuk menjual produknya di gerai fisik. Mal tersebut membagikan laporan ringkasan penjualan bulanan lewat perjanjian kerja sama — bukan akses langsung ke sistem kasir mereka. Data ini termasuk kelas kepemilikan apa?
- First-party, karena datanya soal penjualan produk Kanvas Denim sendiri
- Public/open, karena laporan itu dibagikan secara resmi
+ Second-party, karena data first-party organisasi lain dibagikan lewat perjanjian kerja sama
- First-party, karena mal adalah mitra resmi Kanvas Denim
@why
Data ini pertama kali dikumpulkan mal (bukan Kanvas Denim), lalu dibagikan lewat perjanjian — persis definisi second-party: first-party data organisasi LAIN yang dibagikan lewat kerja sama.
First-party salah karena Kanvas Denim tidak mengumpulkan data itu sendiri; public/open salah karena akses dibatasi perjanjian, bukan terbuka untuk publik; status "mitra resmi" tidak mengubah kelas kepemilikan datanya.
@end

@q 2 :: w2-listening :: w2-monlisten
Apa perbedaan kunci antara Social Monitoring dan Social Listening?
- Monitoring dipakai khusus untuk data internal, Listening untuk data eksternal brand
+ Monitoring jawab apa yang dikatakan sekarang, Listening jawab kenapa dan apa artinya
- Monitoring hanya berlaku untuk platform Instagram, Listening untuk semua platform lain
- Keduanya sebenarnya identik, hanya istilah berbeda untuk konsep yang sama persis
@why
Slide eksplisit: "Listening = a research process. Monitoring = a tracking activity" — Monitoring soal tracking mentions saat ini, Listening soal memahami makna, tema, dan driver di baliknya.
Pembedaan berdasarkan sumber data internal/eksternal atau platform tertentu tidak sesuai definisi kelas; keduanya jelas beda kedalaman analisis, bukan istilah yang sama.
@end

@q 2 :: w2-listening :: w2-pipeline
Kolom komentar Instagram Kanvas Denim tidak punya rating bintang, hanya teks bebas. Pendekatan coding sentiment mana yang TIDAK BISA langsung dipakai di sini?
- Manual coding
- Lexicon/keyword rule
+ Rating rule
- ML/AI classifier
@why
Rating rule (4-5 positif, 3 netral, 1-2 negatif) hanya berlaku pada sumber yang PUNYA kolom rating numerik. Instagram tanpa rating tidak bisa memakainya sama sekali.
Manual coding, lexicon/keyword rule, dan ML/AI classifier semuanya bisa bekerja langsung dari teks tanpa butuh rating numerik.
@end

@q 2 :: w2-listening :: w2-pipeline
Review Kanvas Denim di X berbunyi: "Keren banget ya, nunggu paket 3 minggu buat kaos doang." Kasus sulit sentiment apa yang paling tepat menggambarkan ini?
- Mixed sentiment (dua topik berbeda polaritas)
- Negasi (kata "tidak" membalik makna)
+ Sarkasme (kata positif literal menyiratkan pengalaman negatif)
- Topic dependence (kata sama beda makna tiap atribut)
@why
"Keren banget" dipakai secara sarkastis untuk menyindir waktu tunggu 3 minggu — kata positif literal menyiratkan keluhan, persis definisi kasus sulit Sarkasme.
Mixed butuh dua topik dengan polaritas beda yang memang masing-masing valid (bukan sindiran); tidak ada kata negasi eksplisit; topic dependence soal kata yang beda makna per atribut, bukan sindiran nada.
@end

@q 2 :: w2-audit :: w2-weighted
Formula weighted score audit sumber data adalah WS = Σ(skor × bobot). Apa syarat WAJIB untuk bobot semua kriteria dalam satu audit?
- Bobot harus sama besar untuk semua kriteria (equal weight)
+ Total seluruh bobot harus berjumlah 1 (100%)
- Bobot harus selalu sama antara satu decision question dengan decision question lain
- Bobot ditentukan otomatis oleh platform, bukan analis
@why
Formula weighted score eksplisit menyatakan bobot dalam desimal, dan total seluruh bobot harus = 1 (100%) — ini syarat matematis wajib supaya WS tetap dalam skala 1-5.
Bobot tidak harus sama besar (justru disesuaikan pentingnya kriteria); bobot BERUBAH kalau decision question berubah (bukan tetap); bobot ditentukan analis berdasarkan konteks, bukan otomatis oleh platform.
@end

@q 2 :: w2-audit :: w2-weighted
Sebuah sumber data diaudit dengan 3 kriteria: Relevance (skor 5, bobot 50%), Quality (skor 3, bobot 30%), Bias (skor 4, bobot 20%). Berapa weighted score-nya?
- 4,00
- 3,80
+ 4,20
- 12,00
@why
WS = 5(0.50) + 3(0.30) + 4(0.20) = 2.50 + 0.90 + 0.80 = 4.20.
4,00 dan 3,80 adalah hasil salah kali/jumlah (mis. pakai bobot tertukar); 12,00 adalah kesalahan khas menjumlah skor mentah (5+3+4) tanpa mengalikan bobot sama sekali.
@check 5*0.50+3*0.30+4*0.20 ~ 4.20
@end

@q 2 :: w2-audit :: w2-weighted
Slide W2 mencantumkan weighted score Instagram = 3,75 untuk decision question soal review produk (bobot Relevance 25%, Access 15%, Coverage 15%, Quality 15%, Context 10%, Bias 10%, Privacy 10%; skor Instagram 4,4,4,3,5,3,3). Ketika decision question berganti jadi soal topik campaign, bobot Relevance naik jadi 35% dan Context naik jadi 20% (Coverage turun 10%, Quality turun 5%, Access 15%, Bias 5%, Privacy 10%), skor Instagram tetap sama. WS baru menjadi?
- 3,75 (tetap sama karena skornya tidak berubah)
- 3,50
+ 4,00
- 4,25
@why
WS baru = 4(0.35)+4(0.15)+4(0.10)+3(0.05)+5(0.20)+3(0.05)+3(0.10) = 1.40+0.60+0.40+0.15+1.00+0.15+0.30 = 4.00. Naik dari 3.75 karena bobot yang naik (Relevance, Context) justru kriteria dengan skor tertinggi Instagram.
WS TIDAK tetap sama meski skor tidak berubah — bobot berbeda mengubah hasil weighted sum, itu justru poin utama konsep ini; 3,50 dan 4,25 adalah hasil salah kali bobot per kriteria.
@check 4*0.35+4*0.15+4*0.10+3*0.05+5*0.20+3*0.05+3*0.10 ~ 4.00
@end

@q 2 :: w2-audit :: w2-weighted
Slide W2 mencetak weighted score Tokopedia = 4,20 untuk skor (4,4,4,5,4,4,4) dengan bobot (Relevance 25%, Access 15%, Coverage 15%, Quality 15%, Context 10%, Bias 10%, Privacy 10%). Setelah dihitung ulang manual, berapa WS Tokopedia yang benar, dan apakah slide-nya tepat?
+ 4,15 — slide SALAH, selisih 0,05
- 4,20 — slide sudah benar
- 4,00 — slide SALAH, selisih 0,20
- 4,30 — slide SALAH tapi angkanya lebih tinggi dari yang tertulis
@why
WS = 4(0.25)+4(0.15)+4(0.15)+5(0.15)+4(0.10)+4(0.10)+4(0.10) = 1.00+0.60+0.60+0.75+0.40+0.40+0.40 = 4.15. Slide menulis 4.20 — salah, selisih 0.05 dari hasil hitung manual yang benar.
"Slide sudah benar" salah karena slide memang salah hitung untuk Tokopedia (hanya Instagram yang cocok slide); 4,00 salah hitung; 4,30 keliru — itu angka WS Google Reviews, bukan Tokopedia.
@check 4*0.25+4*0.15+4*0.15+5*0.15+4*0.10+4*0.10+4*0.10 ~ 4.15
@end

@q 2 :: w2-sample :: w2-sampling
Kanvas Denim mengumpulkan 200 review dari Google Reviews, Instagram, dan Tokopedia selama Januari-Maret 2026. "200 review yang benar-benar dianalisis, setelah lolos inclusion rule" — ini adalah definisi komponen sampling yang mana?
- Population
- Sampling frame
+ Sample
- Inclusion rule
@why
Sample adalah record yang BENAR-BENAR dianalisis, sesudah menerapkan inclusion rule — sesuai definisi tepat di soal.
Population adalah himpunan luas yang ingin dipelajari (semua review, termasuk yang tidak terambil); Sampling frame adalah yang benar-benar terjangkau dari sumber terpilih; Inclusion rule adalah ATURAN penyaringannya, bukan hasil recordnya.
@end

@q 2 :: w2-sample :: w2-uoa
Kanvas Denim mengklaim "150 review menunjukkan pelanggan kami sangat puas" lalu tim marketing menyimpulkan "berarti 150 pelanggan kami puas". Kesalahan apa yang terjadi?
- Tidak ada kesalahan, review dan pelanggan bisa dianggap sama
+ Keliru menyamakan jumlah review dengan jumlah pelanggan unik
- Kesalahan ada di jumlahnya, seharusnya lebih dari 150
- Kesalahan ada di kata puas, seharusnya diganti loyal
@why
Unit of analysis di sini adalah Review, bukan Customer — tidak ada jaminan tiap review berasal dari pelanggan berbeda, satu pelanggan bisa menulis lebih dari satu review (mis. update/review berulang). Klaim yang benar: "150 review menyatakan X", bukan "150 pelanggan menyatakan X".
Ini memang kesalahan nyata (bukan "tidak ada kesalahan"); soal bukan di jumlah atau pilihan kata "puas" vs "loyal" — intinya salah unit analisis (review vs customer).
@end

@q 2 :: w2-sample :: w2-uoa
Kanvas Denim ingin tahu "siapa 20% pelanggan paling bernilai untuk program loyalty baru". Unit of analysis mana yang paling FIT untuk pertanyaan ini?
- Review/comment
+ Customer
- Post/campaign item
- Time period
@why
Pertanyaan soal pelanggan paling bernilai butuh data recency/frequency/monetary PER PELANGGAN — unit of analysis yang cocok adalah Customer (satu baris = satu pelanggan teridentifikasi).
Review/comment tidak menjamin identitas pelanggan stabil; Post/campaign item mengukur performa konten, bukan nilai pelanggan; Time period mengagregasi per periode waktu, kehilangan info level-individu yang dibutuhkan.
@end

@q 2 :: w2-doc :: w2-dictionary
Sebuah data dictionary menulis field "rating" dengan definisi "skor produk", tipe "number". Apa yang PALING ambigu dari definisi ini?
+ Tidak jelas skala rating, sumber platform, dan asal nilainya
- Tipe datanya salah, seharusnya text bukan number untuk field ini
- Nama fieldnya terlalu pendek, harus diganti jadi product_rating_score
- Tidak ada masalah, definisi skor produk sudah cukup jelas untuk field ini
@why
Persis pola masalah "engagement score" di slide: tipe data numerik TERLIHAT jelas tapi tidak menjawab skala (1-5? 1-10?), sumber platform, atau apakah nilai bawaan platform vs hasil kalkulasi sendiri — definisi bisnis harus eksplisit terpisah dari tipe data.
Tipe "number" untuk rating sudah tepat (bukan masalahnya); panjang nama field bukan sumber ambiguitas utama; "tidak ada masalah" salah — inilah contoh definisi ambigu yang harus diperbaiki.
@end

@q 2 :: w2-doc :: w2-provenance
Seorang intern menulis catatan provenance dataset hanya: "Data dari Instagram, diambil minggu lalu." Kenapa "minggu lalu" tidak cukup sebagai collection date?
- Karena Instagram tidak boleh dijadikan sumber data provenance sama sekali
+ Karena minggu lalu relatif terhadap kapan catatan ditulis, jadi ambigu
- Karena collection date harus format jam menit detik, bukan tanggal saja
- Karena provenance tidak butuh tanggal sama sekali, cukup nama platform
@why
Collection date wajib tanggal absolut (mis. 2026-08-15) — "minggu lalu" bersifat relatif terhadap waktu penulisan, jadi ambigu dan tidak bisa direkonstruksi jadi tanggal pasti ketika dibaca ulang di lain waktu.
Instagram tetap sumber sah untuk provenance; format jam:menit:detik tidak wajib (tanggal absolut sudah cukup); provenance justru WAJIB mencantumkan collection date sebagai salah satu dari 9 elemen minimum.
@end

@q 2 :: w2-listening :: w2-pipeline
Dataset Kopi Nusa berisi 120 review: 68 positif, 22 netral, 30 negatif. Berapa persen review yang negatif?
- 30%
- 18,3%
+ 25,0%
- 56,7%
@why
30/120 × 100% = 25,0%. Ini review NEGATIF, bukan jumlah mentahnya (30, yang dikira persen langsung) — 30% keliru menganggap angka mentah sebagai persentase tanpa dibagi total.
18,3% adalah persentase NETRAL (22/120), bukan negatif; 56,7% adalah persentase POSITIF (68/120) — tertukar kategori sentiment.
@check 30/120*100 ~ 25.0
@end

@q 2 :: w2-listening :: w2-pipeline
Dataset review Kanvas Denim 250 baris: 140 positif, 45 netral, sisanya negatif. Berapa persen review negatif?
- 18%
- 56%
+ 26%
- 44%
@why
Negatif = 250 − 140 − 45 = 65. 65/250 × 100% = 26%.
18% dan 56% adalah salah hitung pembagi/pembilang yang keliru; 44% keliru menghitung persentase gabungan netral+negatif (65+45=110... bukan pola ini juga) — intinya lupa mengurangi dulu untuk cari jumlah negatif sebelum dibagi total.
@check (250-140-45)/250*100 ~ 26.0
@end
