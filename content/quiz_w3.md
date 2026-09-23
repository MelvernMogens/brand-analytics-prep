# Quiz Week 3 — Data Cleaning, Transformation, and Quality
# Owner: @content

@q 3 :: w3-clean :: w3-cleandef
Menurut prinsip cleaning kelas, apa yang TIDAK boleh dilakukan cleaning yang baik?
- Menstandarkan kategori yang tidak konsisten
+ Menghapus record yang terlihat mengganggu tanpa investigasi
- Menandai (flag) nilai yang mencurigakan untuk diinvestigasi
- Mendokumentasikan aturan dan alasan tiap transformasi
@why
Slide eksplisit: "Good cleaning does not erase inconvenient records." Cleaning yang benar membedakan error, outlier valid, dan keterbatasan data — bukan main hapus.
Standarisasi kategori, flag nilai mencurigakan, dan dokumentasi aturan semuanya bagian SAH dari siklus Detect→Decide→Transform→Validate→Document.
@end

@q 3 :: w3-clean :: w3-cleandef
Urutan 4 langkah inti data cleaning (siklus per masalah, sebelum Document) menurut materi kelas adalah:
- Transform → Detect → Decide → Validate
+ Detect → Decide → Transform → Validate
- Decide → Detect → Validate → Transform
- Validate → Detect → Decide → Transform
@why
Urutan yang benar: Detect (temukan masalah) → Decide (pilih aturan berdasarkan tujuan) → Transform (buat variabel konsisten) → Validate (cek sebelum-sesudah) — semuanya lalu di-Document.
Urutan lain membalik logika sebab-akibat: tidak mungkin Transform sebelum tahu masalahnya (Detect), atau Decide sebelum Detect, atau Validate di awal sebelum ada perubahan untuk divalidasi.
@end

@q 3 :: w3-clean :: w3-qualitydim
Dataset review Kanvas Denim punya 45 baris dengan review_id yang sama muncul dua kali dengan teks identik persis. Dimensi kualitas data mana yang paling tepat menggambarkan masalah ini?
- Completeness
+ Uniqueness
- Timeliness
- Consistency
@why
Uniqueness menjawab pertanyaan "apakah satu observasi nyata dihitung satu kali?" — record duplikat identik persis adalah pelanggaran langsung dimensi ini.
Completeness soal field kosong (bukan duplikasi); Timeliness soal apakah data sesuai periode analisis; Consistency soal format/kategori terstandardisasi (bukan soal record ganda).
@end

@q 3 :: w3-clean :: w3-qualitydim
Field order_value pada dataset transaksi Kanvas Denim tercatat -150.000 pada satu baris (nilai negatif untuk pembelian). Dimensi kualitas data mana yang paling relevan?
- Relevance
- Uniqueness
+ Accuracy
- Consistency
@why
Accuracy menjawab "apakah nilai mencerminkan realita?" — order_value negatif untuk transaksi pembelian adalah nilai yang tidak masuk akal secara bisnis dan harus ditandai.
Relevance soal apakah field mendukung decision question (order_value tetap relevan untuk RFM, ini bukan masalahnya); Uniqueness soal duplikasi; Consistency soal format/kategori seragam, bukan nilai yang mustahil secara logika bisnis.
@end

@q 3 :: w3-struct :: w3-fieldtype
Kolom "review_text_raw" pada dataset Kanvas Denim berisi teks asli apa adanya dari sumber, belum diproses sama sekali. Ini termasuk jenis field apa?
+ Raw
- Cleaned
- Derived
- Flag
@why
Raw field menyimpan bukti asli apa adanya dan tidak boleh ditimpa — persis definisi "review_text_raw" di soal.
Cleaned adalah hasil standardisasi (mis. review_text_clean); Derived adalah sinyal analitis baru hasil hitungan (mis. days_since_review); Flag adalah penanda isu/keputusan cleaning (mis. is_duplicate) — bukan teks asli.
@end

@q 3 :: w3-struct :: w3-fieldtype
Kolom "days_since_review" dihitung dari selisih collection_date dan review_date_clean. Ini termasuk jenis field apa, dan apa yang WAJIB dicatat di data dictionary supaya bisa direproduksi?
- Flag, wajib dicatat missing_rule saja sebagai penanda isu
+ Derived, wajib dicatat source_field dan formula/cleaning_rule
- Raw, wajib dicatat bahwa field ini tidak boleh diubah sama sekali
- Version, wajib dicatat nomor versi dataset yang dipakai
@why
days_since_review adalah hasil hitung dari field lain, jadi Derived — data dictionary wajib mencantumkan source_field (review_date_clean, collection_date) dan formula/cleaning_rule eksplisit supaya analis lain bisa menghitung ulang angka yang sama persis.
Flag menandai isu/keputusan (bukan hasil hitung numerik seperti ini); Raw salah karena field ini turunan, bukan bukti asli; Version melacak status dataset, bukan formula perhitungan satu kolom.
@end

@q 3 :: w3-struct :: w3-uoadataset
Dataset survey kepuasan Kanvas Denim (500 respons) punya kolom respondent_id, item_skala, demografi. Apa unit of analysis dataset ini?
- Satu baris = satu produk yang dinilai
+ Satu baris = satu respons responden
- Satu baris = satu pertanyaan dalam kuesioner
- Satu baris = satu hari periode survei berjalan
@why
Dataset dengan respondent_id dan item skala per baris adalah Survey data — unit of analysis-nya satu baris = satu respons dari satu responden.
Satu baris = satu produk itu pola Product/SKU data (beda jenis dataset); satu baris = satu pertanyaan atau satu hari periode survei tidak sesuai struktur kolom respondent_id yang diberikan di soal.
@end

@q 3 :: w3-detect :: w3-missing4
Kolom "order_value" pada dataset review publik Kanvas Denim selalu kosong karena platform review publik memang tidak pernah mencatat nilai transaksi. Tipe missing data apa ini?
- Missing Completely at Random
+ Missing by Design
- Missing due to Process Error
- Meaningful Absence
@why
Kosong karena field itu memang tidak dikumpulkan untuk sumber ini (review publik memang tidak punya data transaksi) — persis definisi Missing by Design. Aksinya: dokumentasikan keterbatasan, jangan dipaksa imputasi.
Missing Completely at Random tidak punya penjelasan sistematis jelas (ini justru PUNYA penjelasan jelas: keterbatasan platform); Process Error soal kegagalan teknis pengumpulan; Meaningful Absence soal kosong yang bermakna analitis (mis. brand tidak disebut), beda kasus.
@end

@q 3 :: w3-detect :: w3-missing4
Dalam analisis share-of-voice, dari 100 post yang membahas "fashion lokal Jakarta" secara umum, Kanvas Denim TIDAK disebut sama sekali di 35 post. Bagaimana seharusnya 35 kekosongan ini ditangani?
- Diimputasi dengan rata-rata jumlah mention brand lain yang ada
+ Dikode sebagai brand_mentioned = 0, karena kosongnya bermakna analitis
- Dihapus dari dataset karena dianggap tidak relevan untuk analisis
- Dibiarkan blank tanpa flag karena bukan data brand Kanvas Denim
@why
"Kanvas Denim tidak disebut" dalam pencarian topik umum ITU SENDIRI adalah temuan (brand tidak top-of-mind di topik itu) — kosong yang bermakna analitis, persis Meaningful Absence. Aksinya: kode sebagai absent (0), bukan blank.
Imputasi rata-rata brand lain merusak makna (bukan brand tidak disebut = rata-rata brand lain); menghapus menghilangkan sinyal share-of-voice yang justru penting; membiarkan blank tanpa flag membuat analisis share-of-voice tidak akurat.
@end

@q 3 :: w3-detect :: w3-dupdetect
Dua baris review Kanvas Denim: user "rani_k", tanggal 2026-06-01, teks "bahannya adem banget" — muncul PERSIS dua kali dengan seluruh field identik. Ini termasuk jenis duplikat apa?
+ Exact duplicate — ID/baris identik penuh, sering dari import berulang
- Near duplicate — butuh aturan pencocokan khusus
- Bukan duplikat, karena user yang sama boleh menulis dua kali
- Missing due to Process Error
@why
Baris identik penuh (user, tanggal, teks semuanya sama persis) adalah Exact duplicate, biasanya berasal dari import/copy-paste berulang — bisa dihapus setelah raw copy disimpan.
Near duplicate butuh VARIASI kecil (mis. beda spasi/typo) untuk didefinisikan sebagai near, bukan identik penuh; "boleh menulis dua kali" tidak relevan kalau seluruh field identik persis (justru itu tanda entry ganda, bukan dua submission asli); ini bukan masalah missing data.
@end

@q 3 :: w3-detect :: w3-dupdetect
Review A: user "budi_s", tanggal 2026-05-10, teks "ukurannya pas banget". Review B: user "budi_s", tanggal 2026-05-10, teks "ukuran nya pas banget" (beda spasi). Ini termasuk jenis duplikat apa, dan apa yang dibutuhkan untuk mendeteksinya?
- Exact duplicate, bisa langsung dihapus tanpa aturan tambahan apapun
+ Near duplicate, butuh aturan pencocokan eksplisit yang terdokumentasi
- Bukan duplikat sama sekali karena teksnya secara teknis berbeda
- Missing Completely at Random karena tidak ada pola jelas di sini
@why
User dan tanggal sama, tapi teks berbeda tipis (beda spasi) — ini Near duplicate, yang butuh aturan pencocokan eksplisit terdokumentasi (mis. normalisasi spasi sebelum dibandingkan), bukan tebakan visual.
Exact duplicate butuh identik PENUH tanpa variasi; "bukan duplikat karena teks berbeda" mengabaikan bahwa variasi ini adalah near-duplicate yang tetap perlu ditangani; ini bukan soal missing data sama sekali.
@end

@q 3 :: w3-detect :: w3-missing4
Dari 320 baris dataset review Kanvas Denim, ditemukan review_date kosong pada 48 baris akibat kegagalan proses scraping (file corrupt). Berapa persen baris yang terdampak, dan apa tipe missing-nya?
+ 15,0% — Missing due to Process Error
- 6,7% — Missing by Design
- 15,0% — Missing Completely at Random
- 85,0% — Missing due to Process Error
@why
48/320 × 100% = 15,0%. Penyebabnya jelas — kegagalan teknis scraping/file corrupt — persis Missing due to Process Error (bukan Missing by Design yang tidak ada penyebab teknis, dan bukan MCAR yang tanpa pola/penyebab jelas).
6,7% adalah hasil salah hitung pembagi (bukan 48/320); 85,0% adalah komplemennya (baris yang TIDAK kosong, tertukar arah); MCAR salah karena penyebabnya justru diketahui jelas (bukan tanpa pola).
@check 48/320*100 ~ 15.0
@end

@q 3 :: w3-transform :: w3-mapping
Field channel_raw Kanvas Denim berisi nilai "IG", "instagram.com", "Instagram Ads" yang semuanya harus dipetakan ke "Instagram" lewat mapping table. Formula Excel yang tepat, dan apa yang terjadi kalau raw value tidak ditemukan di mapping table?
+ =XLOOKUP(raw, map_raw, map_standard, "CHECK") — nilai tak-terpetakan menghasilkan "CHECK" sebagai sinyal investigasi
- =VLOOKUP(raw, map_raw, 1, FALSE) — nilai tak-terpetakan menghasilkan #N/A yang diabaikan otomatis
- =XLOOKUP(raw, map_raw, map_standard, 0) — nilai tak-terpetakan otomatis jadi 0 dan dianggap valid
- =IFERROR(XLOOKUP(raw, map_raw, map_standard), "") — nilai tak-terpetakan hilang jadi blank tanpa jejak
@why
XLOOKUP dengan fallback "CHECK" adalah pola wajib slide — nilai yang tidak ditemukan di mapping table akan tampil sebagai "CHECK", sinyal eksplisit untuk diinvestigasi dan ditambahkan ke mapping table.
Default 0 atau blank (via IFERROR kosong) justru berbahaya — nilai tak-terpetakan akan HILANG DIAM-DIAM alih-alih ketahuan (lihat @trap w3-transform); mengabaikan #N/A otomatis juga menyembunyikan masalah tanpa jejak audit.
@end

@q 3 :: w3-transform :: w3-mapping
order_value_raw Kanvas Denim tertulis "Rp250.000" (simbol mata uang + titik ribuan). Formula Excel paling tepat untuk mengubahnya jadi angka murni yang aman terhadap error format adalah:
- =NUMBERVALUE(SUBSTITUTE(order_value_raw,"Rp",""),",",".")
- =VALUE(SUBSTITUTE(TRIM(order_value_raw),"Rp ",""))
+ =IFERROR(NUMBERVALUE(SUBSTITUTE(order_value_raw,"Rp","")),"")
- =TRIM(CLEAN(SUBSTITUTE(order_value_raw,"Rp","")))
@why
Simbol "Rp" harus dibuang dulu pakai SUBSTITUTE sebelum NUMBERVALUE bisa parse angkanya, dan dibungkus IFERROR supaya tidak crash kalau ada format lain yang tak terduga — pola persis 9 fungsi Excel wajib kelas.
Variasi lain terlihat masuk akal tapi meleset: NUMBERVALUE dengan argumen separator eksplisit tidak dibutuhkan untuk kasus ini, VALUE tidak sekuat NUMBERVALUE untuk parsing simbol mata uang, dan TRIM+CLEAN saja tanpa NUMBERVALUE tidak mengonversi teks jadi angka.
@end

@q 3 :: w3-transform :: w3-mapping
Review Kanvas Denim punya review_date_raw = "10/09/2026" (asumsikan format DD/MM/YYYY) dan collection_date = "2026-10-05". Berapa days_since_review?
+ 25 hari
- 5 hari
- 26 hari
- 30 hari
@why
review_date_clean = 2026-09-10. Dari 10 September ke 5 Oktober: sisa September (30-10=20 hari) + 5 hari Oktober = 25 hari.
5 hari salah karena hanya menghitung selisih tanggal (10 vs 5) tanpa memperhitungkan pergantian bulan; 26 dan 30 adalah kesalahan off-by-one atau lupa mengurangi hari awal.
@check (30-10)+5 == 25
@end

@q 3 :: w3-transform :: w3-mapping
Dataset ARUNIKA (mirip pola Kanvas Denim) diaudit dan ditemukan: 22 baris review_date kosong, 14 pasang review duplikat, 31 baris channel_raw ejaan tidak baku. Berapa total baris yang perlu ditindaklanjuti (affected rows) di data-quality log untuk ketiga issue ini?
- 45 baris
+ 67 baris
- 53 baris
- 36 baris
@why
22 + 14 + 31 = 67 baris. Setiap issue dicatat sebagai entri terpisah di data-quality log dengan rows affected masing-masing, lalu dijumlahkan untuk gambaran total baris yang perlu tindak lanjut.
45 dan 53 adalah hasil salah jumlah (melewatkan salah satu angka); 36 keliru menjumlahkan hanya dua dari tiga issue.
@check 22+14+31 == 67
@end
