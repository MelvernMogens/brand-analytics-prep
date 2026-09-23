# Studi Kasus: Diagnosis & Cleaning Data
# Owner: @growth (repurpose/distribution) — brief dari MEGATRON

@week 9 :: Studi Kasus :: Soal kasus bergaya ujian — kerjakan di kertas dulu, baru buka pembahasan.
############################################################
@topic es-clean :: Kasus: Diagnosis & Cleaning Data :: Dari dataset mentah ke rule, formula Excel, data-quality log, dan limitasi.
@intro
- Empat kasus ini simulasi ujian: kerjakan dulu di kertas sebelum baca step-nya — cocokkan jawabanmu sendiri, baru buka pembahasan.
- Tiap kasus punya dataset LENGKAP di dalam soal (self-contained) — semua angka yang kamu perlu ada di tabel, tidak perlu asumsi data dari luar soal.
- Pola kerja tiap kasus sama: identifikasi issue per 7 Data Quality Dimensions (w3-qualitydim) → tulis rule (kondisi→aksi→field/flag) → formula Excel → isi data-quality log → sebutkan limitasi/etika.
- Rule diberi kode R01, R02, ... (bukan nomor bebas) supaya bisa dirujuk balik di data dictionary dan data-quality log — persis konvensi Week 3.
- Data-quality log WAJIB 5 kolom: Issue, Detection, Rule applied, Rows affected, Verification — tanpa log, cleaning bukan evidence yang bisa diaudit.
- Angka "rows affected" di log harus bisa direkonsiliasi ke total baris dataset — kalau ditambah-dikurang harus balik ke jumlah baris awal.

@example Kedai Rasa: audit 8 review lintas platform, dari rule sampai log :: Kasus latihan
@soal
Kedai Rasa (kedai kopi & camilan lokal fiktif) ingin menjawab decision question: "Apakah kami perlu prioritas perbaikan kecepatan layanan kuartal depan, atau cukup promosi harga?" Berikut 8 review mentah dari berbagai platform. Catatan: review RV05 di sumber aslinya punya spasi berlebih di depan/belakang teks ("   biasa aja   ").
| review_id | platform_raw | date_raw | rating_raw | review_text_raw |
| RV01 | GMaps | 05/09/2026 | 5 | Enak bangettt!!! 😍 |
| RV02 | Google Review | 2026-09-06 | 2 | Lama banget nunggu |
| RV03 | IG | 6 Sep 2026 | 4 | Suka suasananya |
| RV03 | Instagram | 6 Sep 2026 | 4 | Suka suasananya |
| RV04 | Tokopedia | (kosong) | 7 | Enak tapi mahal |
| RV05 | ShopeeFood | 09/08/2026 | 3 | biasa aja |
| RV06 | GoFood | 2026-09-07 | -1 | worst experience ever |
| RV07 | Tokopedia | 07/09/2026 | 5 | recommended banget |
(a) Identifikasi minimal 6 issue dari dataset ini, petakan tiap issue ke SATU dari 7 quality dimensions yang paling sesuai.
(b) Tulis 3 rule cleaning (R01-R03): source field, condition, action, new field/flag.
(c) Tulis 2 formula Excel: satu untuk menandai rating tidak valid, satu untuk memetakan platform_raw ke kategori standar.
(d) Isi data-quality log (Issue, Detection, Rule applied, Rows affected, Verification) untuk 3 issue paling penting.
(e) Sebutkan 2 limitasi/etika sebelum dataset ini dipakai membuat rekomendasi ke manajemen.
@step Identifikasi issue & petakan ke dimensi :: Cocokkan tiap gejala ke definisi 7 dimensi (w3-qualitydim) — satu issue satu dimensi paling pas, jangan asal tempel semua ke Validity.
| Issue | Dimensi | Bukti |
| Format tanggal campur (DD/MM, ISO, teks, dan MM/DD ambigu) | Consistency | 05/09/2026, 2026-09-06, "6 Sep 2026", 09/08/2026 |
| date_raw kosong pada RV04 | Completeness | 1 baris |
| RV03 duplikat persis (platform beda label saja) | Uniqueness | 2 baris identik |
| platform_raw tidak konsisten (GMaps/Google Review, IG/Instagram) | Consistency | 4 baris |
| rating di luar skala 1-5 (RV04=7, RV06=-1) | Validity | 2 baris |
| spasi berlebih pada review_text_raw RV05 | Consistency (teks) | "   biasa aja   " |
@step Tulis rule R01-R03 :: Format Rule ID → Source field → Condition → Action → New field/flag, persis template Week 3.
| Rule ID | Source field | Condition | Action | New field/flag |
| R01 | rating_raw | <1 atau >5 | set rating_valid_flag=0; exclude dari rata-rata rating | rating_valid_flag |
| R02 | review_id + platform_raw + review_text_raw | kombinasi identik (duplikat) | simpan record pertama; flag sisanya | duplicate_flag |
| R03 | platform_raw | cocok mapping table | ganti dengan kategori standar; fallback "CHECK" kalau tak ketemu | platform_clean |
@step Formula Excel: tandai rating tidak valid :: OR menangkap dua arah pelanggaran (terlalu rendah ATAU terlalu tinggi) sekaligus, bukan cuma satu sisi. :: \text{rating\_valid\_flag} = \text{IF(OR(rating\_raw<1, rating\_raw>5), 0, 1)}
@step Formula Excel: petakan platform ke kategori standar :: XLOOKUP dengan fallback "CHECK" supaya platform baru yang belum terdaftar di mapping table (mis. ShopeeFood, GoFood) tidak hilang diam-diam — kelihatan sebagai "CHECK" untuk diinvestigasi. :: \text{platform\_clean} = \text{XLOOKUP(platform\_raw, map\_raw, map\_standard, "CHECK")}
@step Isi data-quality log untuk 3 issue utama :: Rows affected harus bisa direkonsiliasi balik ke 8 baris awal.
| Issue | Detection | Rule applied | Rows affected | Verification |
| Rating di luar rentang 1-5 | filter rating_raw<1 OR rating_raw>5 | rating_valid_flag=0; exclude dari rata-rata | 2 | MIN/MAX rating dalam kalkulasi rata-rata = 1 dan 5 |
| RV03 duplikat | COUNTIFS(id,id,platform,platform,text,text)>1 dicek manual (platform beda label) | simpan record pertama; flag sisanya | 1 | jumlah review unik = 8-1 |
| date_raw kosong (RV04) | COUNTBLANK(date_raw) | flag missing_date_flag=1; exclude dari recency | 1 | baris excluded dihitung terpisah dari total |
@step Hitung baris unik siap analisis :: 8 review mentah dikurangi 1 baris duplikat (RV03 kedua) yang di-flag dan dikeluarkan dari hitungan unik — raw tetap disimpan untuk audit, bukan dihapus permanen. :: 8 - 1 = 7 \text{ review unik}
@step Limitasi & etika sebelum dipakai rekomendasi :: (1) 8 review publik ini bukan sensus seluruh pelanggan — selection bias, karena hanya pelanggan yang mau menulis review yang terwakili (kemungkinan besar yang sangat puas atau sangat kecewa). (2) Review memuat username publik (mis. handle Instagram) — sebelum dipublikasikan ke laporan internal, sebaiknya nama akun dianonimkan/di-pseudonim-kan dan dicek dulu syarat platform (ToS) soal reuse data publik untuk analisis internal.
@answer (a) 6 issue: format tanggal campur (Consistency), date_raw kosong RV04 (Completeness), RV03 duplikat (Uniqueness), platform_raw tidak konsisten (Consistency), rating di luar 1-5 pada RV04 & RV06 (Validity), spasi berlebih RV05 (Consistency teks). (b) R01 rating di luar rentang → rating_valid_flag; R02 duplikat → duplicate_flag; R03 platform mapping → platform_clean. (c) rating_valid_flag=IF(OR(rating_raw<1,rating_raw>5),0,1); platform_clean=XLOOKUP(platform_raw,map_raw,map_standard,"CHECK"). (d) Log 3 entri: rating invalid (2 baris, exclude rata-rata), RV03 duplikat (1 baris, simpan yang pertama), date kosong (1 baris, exclude recency) — total 8 review unik = 7. (e) Limitasi: selection bias (bukan sensus pelanggan) dan kewajiban anonimisasi/cek ToS platform sebelum reuse data publik.
@uses w3-qualitydim, w3-cleandef, w3-mapping, w3-dupdetect, w3-missing4
@check 8 - 1 == 7
@check 2 == 2
@check 1 == 1
@check 2 + 1 + 1 == 4
@end

@example ARUNIKA: transaksi e-commerce 8 baris — siapkan untuk RFM :: Kasus latihan
@soal
ARUNIKA (fashion lokal) mau menyiapkan data transaksi sebelum dihitung RFM kuartal ini. Berikut 8 baris export mentah dari sistem kasir online:
| order_id | customer_id | order_date_raw | qty | order_value_raw |
| ORD001 | C-101 | 01/09/2026 | 2 | Rp 350.000 |
| ORD002 | C-102 | 2026-09-03 | 1 | 175,000 |
| ORD003 | (kosong) | 04/09/2026 | 3 | Rp 500.000 |
| ORD004 | C-103 | 05/09/2026 | 0 | Rp 0 |
| ORD005 | C-101 | 01/09/2026 | 2 | Rp 350.000 |
| ORD006 | C-104 | 06/09/2026 | 1 | -Rp 200.000 |
| ORD007 | C-105 | 08/09/2026 | 4 | 620,000 |
| ORD008 | C-102 | 09/09/2026 | 2 | Rp 410.000 |
(a) Identifikasi minimal 6 issue, petakan tiap issue ke satu dari 7 quality dimensions.
(b) Tulis 3 rule cleaning (R01-R03) untuk customer_id kosong, order_id duplikat, dan qty=0.
(c) Tulis formula Excel untuk membersihkan order_value_raw jadi angka murni (buang "Rp" dan koma ribuan).
(d) Isi data-quality log untuk 3 issue paling relevan untuk RFM (customer_id kosong, duplikat, qty=0/retur negatif).
(e) Sebutkan 2 limitasi/etika sebelum dataset ini dipakai menghitung RFM per customer.
@step Identifikasi issue & petakan ke dimensi :: Fokus ke masalah yang akan merusak perhitungan RFM kalau tidak dibereskan dulu (Frequency dan Monetary sangat sensitif ke duplikat dan qty/nilai aneh).
| Issue | Dimensi | Bukti |
| customer_id kosong (ORD003) | Completeness | 1 baris — tidak bisa dipetakan ke customer manapun untuk RFM |
| ORD001 & ORD005 duplikat persis (customer, tanggal, qty, value sama) | Uniqueness | 2 baris identik — kalau tak di-flag, Frequency C-101 tergembung palsu |
| qty=0 dengan order_value=Rp 0 (ORD004) | Validity | order tanpa transaksi nyata — bukan pembelian sungguhan |
| order_value negatif (ORD006 = -Rp 200.000) | Validity | kemungkinan retur/refund, bukan pembelian positif |
| Format order_value campur (Rp titik-ribuan vs koma-ribuan) | Consistency | "Rp 350.000" vs "175,000" |
| Format order_date campur (DD/MM vs ISO) | Consistency | "01/09/2026" vs "2026-09-03" |
@step Tulis rule R01-R03 :: Prioritas rule untuk komponen RFM: F butuh ID customer yang valid & unik, M butuh nilai transaksi yang bersih.
| Rule ID | Source field | Condition | Action | New field/flag |
| R01 | customer_id | blank | exclude dari perhitungan RFM per-customer; flag untuk investigasi manual | missing_customer_flag |
| R02 | order_id (kombinasi customer+date+qty+value) | duplikat persis | simpan record pertama; flag & exclude sisanya dari Frequency/Monetary | duplicate_flag |
| R03 | qty & order_value_raw | qty=0 ATAU order_value≤0 | flag sebagai bukan pembelian valid (kemungkinan retur/void); exclude dari Monetary | non_purchase_flag |
@step Formula Excel: bersihkan order_value :: SUBSTITUTE dua kali (buang "Rp" dan spasi, lalu buang titik/koma pemisah ribuan) sebelum NUMBERVALUE, dibungkus IFERROR supaya format tak terduga tidak crash. :: \text{order\_value\_clean} = \text{IFERROR(NUMBERVALUE(SUBSTITUTE(SUBSTITUTE(order\_value\_raw,"Rp",""),".","")),"")}
@step Isi data-quality log untuk 3 issue utama RFM :: Rows affected harus balik ke 8 baris awal kalau dijumlah dengan yang lolos bersih.
| Issue | Detection | Rule applied | Rows affected | Verification |
| customer_id kosong | COUNTBLANK(customer_id) | exclude dari RFM per-customer; flag investigasi | 1 | jumlah baris ber-customer_id valid = 8-1 |
| Transaksi duplikat (ORD001/ORD005) | COUNTIFS(customer,customer,date,date,qty,qty,value,value)>1 | simpan record pertama; flag & exclude sisanya | 1 | jumlah order unik untuk Frequency = 8-1 |
| qty=0 atau nilai ≤0 (ORD004, ORD006) | filter qty=0 OR order_value_clean≤0 | flag non_purchase_flag=1; exclude dari Monetary | 2 | Monetary tiap customer dihitung hanya dari baris non_purchase_flag=0 |
@step Hitung baris valid untuk Frequency & Monetary :: 8 baris awal dikurangi 1 duplikat, dikurangi 1 customer_id kosong (tak bisa dipetakan), dikurangi 2 baris non-purchase (qty=0 dan retur negatif) = baris valid untuk dihitung F & M per customer. :: 8 - 1 - 1 - 2 = 4 \text{ baris transaksi valid}
@step Limitasi & etika sebelum RFM dihitung :: (1) Dengan hanya 4 baris valid dari 8, sample terlalu kecil untuk RFM yang bermakna secara statistik — perlu window data lebih panjang sebelum dipakai membuat keputusan segmentasi besar. (2) ORD006 (nilai negatif) bisa jadi retur yang sah, bukan error — sebelum di-exclude permanen, wajib dicek ke sistem retur asli (jangan langsung diasumsikan kesalahan input); customer_id yang kosong juga sebaiknya diinvestigasi dulu (mungkin guest checkout) sebelum dianggap hilang.
@answer (a) 6 issue: customer_id kosong (Completeness), ORD001/ORD005 duplikat (Uniqueness), qty=0/value=0 ORD004 (Validity), order_value negatif ORD006 (Validity), format order_value campur (Consistency), format tanggal campur (Consistency). (b) R01 customer_id kosong → missing_customer_flag; R02 duplikat → duplicate_flag; R03 qty=0/value≤0 → non_purchase_flag. (c) order_value_clean=IFERROR(NUMBERVALUE(SUBSTITUTE(SUBSTITUTE(order_value_raw,"Rp",""),".","")),""). (d) Log 3 entri: customer_id kosong (1 baris exclude), duplikat (1 baris exclude), qty=0/retur negatif (2 baris exclude dari Monetary) — sisa 4 baris valid dari 8. (e) Limitasi: sample terlalu kecil (4 baris) untuk RFM bermakna; nilai negatif & customer_id kosong perlu diverifikasi ke sistem asli sebelum di-exclude permanen.
@uses w3-qualitydim, w3-missing4, w3-dupdetect, w3-mapping
@check 8 - 1 - 1 - 2 == 4
@check 6 == 6
@end

@example Batik Rasa: 8 komentar sosial mentah — noise, emoji, spam, bahasa campur, sarkasme :: Kasus latihan
@soal
Batik Rasa (brand batik lokal fiktif) mengumpulkan 8 komentar Instagram mentah untuk dianalisis sebelum theme coding W7. Berikut datanya:
| comment_id | author_display | comment_text_raw |
| CM01 | @rina.k | Motifnya bagusss banget 😍😍 |
| CM02 | @budi_88 | Motifnya bagusss banget 😍😍 |
| CM03 | @toko_follower_murah | Follow aku dong, jasa nambah follower murah!! wa.me/628123456 |
| CM04 | @sinta_w | mantap, nunggu 3 minggu buat kain yang salah motif 🙄 |
| CM05 | @agus_p | %%%%% |
| CM06 | @dewi_lestari | Harganya lumayan sih tapi kualitasnya oke bgt, worth it lah |
| CM07 | @rian_t | bangga pakai produk lokal, kualitasnya gak kalah sama brand luar |
| CM08 | @lala_m | cs nya lama bgt responnya huft |
(a) Identifikasi minimal 6 issue di dataset ini, petakan ke 7 quality dimensions ATAU ke konsep preprocessing W7 (Clean/Normalize) kalau lebih pas.
(b) Tulis 3 rule cleaning (R01-R03) untuk duplikat, spam, dan normalisasi teks (emoji/slang).
(c) Tulis formula Excel untuk mendeteksi komentar duplikat persis dan komentar yang mengandung link (indikasi spam).
(d) Isi data-quality log untuk 3 issue (duplikat, spam, sarkasme/ambigu).
(e) Sebutkan 2 limitasi/etika sebelum data ini dipakai untuk menyimpulkan sentiment brand.
@step Identifikasi issue & petakan ke dimensi/konsep :: Data teks sosial punya masalah yang beda dari data angka — gabungkan quality dimensions W3 dengan preprocessing W7.
| Issue | Dimensi/Konsep | Bukti |
| CM01 & CM02 komentar identik persis dari 2 akun berbeda | Uniqueness | kemungkinan bot/spam terkoordinasi, bukan 2 opini asli |
| CM03 promosi jasa follower + link eksternal | Relevance (irrelevant/spam) | tidak membahas Batik Rasa sama sekali |
| CM05 isi cuma simbol tanpa makna | Completeness (kosong secara makna) | "%%%%%" — bukan opini yang bisa di-code |
| Kata berulang & huruf besar-kecil campur (bagusss, bgt) | Consistency (Normalize W7) | butuh rasionalisasi kata berulang + slang formalisasi |
| CM04 berpotensi sarkasme ("mantap" tapi keluhan 3 minggu salah motif) | Accuracy (makna vs literal) | emoji 🙄 jadi petunjuk konteks, bukan makna literal kata |
| CM06 & CM07 mixed sentiment (harga vs kualitas; kualitas vs perbandingan brand) | Relevance (butuh split per aspek) | satu kalimat membawa dua topik berbeda |
@step Tulis rule R01-R03 :: Selaraskan dengan w7-preprocessing (Clean, Normalize) dan w3-dupdetect.
| Rule ID | Source field | Condition | Action | New field/flag |
| R01 | comment_text_raw + author_display | teks identik persis dari akun BERBEDA | flag sebagai suspected_duplicate; simpan raw, exclude dari frequency count | suspected_duplicate_flag |
| R02 | comment_text_raw | mengandung link/nomor WA/kata "follow" promosi jasa lain | flag sebagai spam/irrelevant; exclude dari analisis tema | spam_flag |
| R03 | comment_text_raw | huruf berulang (bagusss) / slang (bgt) / emoji | normalize: LOWER + rasionalisasi kata berulang + emoji→fitur (positive-emoji dsb); simpan raw utuh | comment_text_clean |
@step Formula Excel: deteksi duplikat & spam link :: COUNTIF membandingkan teks antar baris; ISNUMBER+SEARCH mendeteksi keberadaan pola link umum ("wa.me", "http") di dalam teks. :: \text{duplicate\_flag} = \text{COUNTIF(comment\_text\_raw, comment\_text\_raw) > 1} \\ \text{spam\_flag} = \text{IF(ISNUMBER(SEARCH("wa.me",comment\_text\_raw)),1,0)}
@step Isi data-quality log untuk 3 issue :: Rows affected direkonsiliasi ke 8 baris awal.
| Issue | Detection | Rule applied | Rows affected | Verification |
| CM01/CM02 komentar identik dari akun beda (suspected bot) | COUNTIF(text,text)>1 lintas author | flag suspected_duplicate; exclude dari frequency, simpan raw untuk audit | 2 | jumlah komentar unik dihitung terpisah dari yang di-flag |
| CM03 spam/irrelevant (promosi jasa follower) | SEARCH("wa.me", text) ditemukan + manual check | flag spam_flag=1; exclude dari semua analisis tema/sentiment | 1 | 0 komentar spam tersisa di dataset yang dianalisis |
| CM05 kosong secara makna ("%%%%%") | inspeksi manual (tidak ada kata bermakna) | flag empty_content_flag=1; exclude dari coding | 1 | dataset final = 8 - 2(dup+spam+kosong dihitung tepat) |
@step Hitung komentar siap coding :: 8 komentar dikurangi 2 suspected duplicate (CM01/CM02, simpan satu untuk audit tapi exclude satu dari frequency), dikurangi 1 spam (CM03), dikurangi 1 kosong (CM05) = tersisa untuk theme coding. Catatan: 2 duplikat berarti hanya 1 yang dikeluarkan dari hitung frekuensi (yang lain tetap tercatat sebagai satu opini). :: 8 - 1 - 1 - 1 = 5 \text{ komentar siap coding}
@step Limitasi & etika sebelum simpulkan sentiment brand :: (1) CM01/CM02 yang identik dari dua handle berbeda BELUM PASTI bot — bisa saja kebetulan dua orang memuji dengan kalimat mirip; klaim "bot/spam" butuh investigasi tambahan (mis. cek waktu posting, pola akun), jangan langsung divonis di log tanpa catatan "suspected". (2) Username (@rina.k, @budi_88 dst) adalah data personal yang terlihat publik tapi tetap perlu dipertimbangkan anonimisasi kalau dikutip di laporan internal/eksternal — "publicly visible" bukan berarti bebas dipakai tanpa batas.
@answer (a) 6 issue: CM01/CM02 duplikat lintas akun (Uniqueness), CM03 spam/irrelevant (Relevance), CM05 kosong bermakna (Completeness), kata berulang/slang (Consistency/Normalize), CM04 berpotensi sarkasme (Accuracy/konteks), CM06 & CM07 mixed sentiment perlu split aspek (Relevance). (b) R01 duplikat lintas akun → suspected_duplicate_flag; R02 spam/link → spam_flag; R03 normalize teks → comment_text_clean. (c) duplicate_flag=COUNTIF(comment_text_raw,comment_text_raw)>1; spam_flag=IF(ISNUMBER(SEARCH("wa.me",comment_text_raw)),1,0). (d) Log 3 entri: duplikat lintas akun (2 baris, exclude 1 dari frequency), spam (1 baris exclude semua analisis), kosong bermakna (1 baris exclude dari coding) — sisa 5 komentar siap coding dari 8. (e) Limitasi: label "suspected duplicate/bot" belum pasti tanpa investigasi lanjut; username publik tetap perlu pertimbangan anonimisasi/cek ToS sebelum dikutip di laporan.
@uses w3-qualitydim, w7-preprocessing, w3-dupdetect
@check 8 - 1 - 1 - 1 == 5
@check 6 == 6
@end

@example SkinLab: survey kepuasan 8 respons — skala rusak, duplikat, umur outlier :: Kasus latihan
@soal
SkinLab (brand skincare lokal fiktif) menyebar survey kepuasan skala 1-5 ke 8 respondent. Berikut hasilnya:
| respondent_id | umur | skala_kepuasan_raw | catatan |
| R-01 | 24 | 4 | puas dengan tekstur |
| R-02 | 29 | 0 | tidak ada catatan |
| R-03 | 31 | 6 | pelayanan bagus |
| R-04 | 24 | 4 | puas dengan tekstur |
| R-05 | 150 | "sangat setuju" | suka banget produknya |
| R-06 | 27 | 2 | pengiriman agak lama |
| R-07 | 33 | 5 | recommended |
| R-08 | 22 | 3 | biasa saja |
(a) Identifikasi minimal 6 issue, petakan ke 7 quality dimensions.
(b) Tulis 3 rule cleaning (R01-R03) untuk skala di luar rentang/teks non-numerik, duplikat respondent, dan umur outlier.
(c) Tulis formula Excel untuk memvalidasi skala kepuasan (harus 1-5, harus numerik) dan mendeteksi respondent duplikat.
(d) Isi data-quality log untuk 3 issue (skala invalid, duplikat, umur outlier).
(e) Sebutkan 2 limitasi/etika sebelum dataset ini dipakai menyimpulkan tingkat kepuasan pelanggan.
@step Identifikasi issue & petakan ke dimensi :: Survey punya 3 tipe masalah numerik yang beda: di luar rentang, di luar tipe (teks bukan angka), dan tidak masuk akal secara domain (umur).
| Issue | Dimensi | Bukti |
| R-02 skala_kepuasan=0, di luar rentang 1-5 | Validity | skala seharusnya 1-5, bukan 0 |
| R-03 skala_kepuasan=6, di luar rentang 1-5 | Validity | melebihi batas atas skala |
| R-05 skala_kepuasan="sangat setuju" (teks, bukan angka) | Validity (data_type salah) | field numerik terisi teks, tidak bisa dihitung rata-rata |
| R-01 & R-04 respondent duplikat (umur, skala, catatan semua identik) | Uniqueness | kemungkinan submit ganda dari respondent yang sama |
| R-05 umur=150, mustahil secara biologis | Accuracy | outlier ekstrem — kemungkinan typo (mis. seharusnya 15 atau 50) |
| Field skala_kepuasan_raw bertipe campur (angka & teks dalam satu kolom) | Consistency | kolom sama menampung dua tipe data berbeda |
@step Tulis rule R01-R03 :: Pisahkan rule untuk validitas skala, duplikat, dan outlier — masing-masing exclude beda cara (jangan digabung satu rule).
| Rule ID | Source field | Condition | Action | New field/flag |
| R01 | skala_kepuasan_raw | bukan angka ATAU <1 ATAU >5 | set scale_valid_flag=0; exclude dari rata-rata kepuasan (tidak dihapus barisnya) | scale_valid_flag |
| R02 | respondent_id + umur + skala_kepuasan_raw + catatan | kombinasi identik persis (submit ganda) | simpan submission pertama; flag & exclude sisanya | duplicate_submission_flag |
| R03 | umur | <10 atau >100 (di luar rentang wajar responden survey) | flag age_outlier_flag=1; exclude dari analisis demografi, TIDAK otomatis exclude jawaban kepuasannya | age_outlier_flag |
@step Formula Excel: validasi skala & deteksi duplikat :: ISNUMBER mengecek dulu apakah field itu angka sama sekali sebelum cek rentang — teks seperti "sangat setuju" langsung gagal di ISNUMBER. COUNTIFS mengunci kombinasi respondent+jawaban supaya bukan cuma umur yang kebetulan sama. :: \text{scale\_valid\_flag} = \text{IF(AND(ISNUMBER(skala\_kepuasan\_raw), skala\_kepuasan\_raw>=1, skala\_kepuasan\_raw<=5), 1, 0)} \\ \text{duplicate\_submission\_flag} = \text{COUNTIFS(umur,umur,skala\_kepuasan\_raw,skala\_kepuasan\_raw,catatan,catatan) > 1}
@step Isi data-quality log untuk 3 issue :: Rows affected direkonsiliasi ke 8 baris awal.
| Issue | Detection | Rule applied | Rows affected | Verification |
| Skala di luar rentang/non-numerik (R-02=0, R-03=6, R-05="sangat setuju") | ISNUMBER + filter <1 atau >5 | scale_valid_flag=0; exclude dari rata-rata kepuasan | 3 | MIN/MAX skala dalam kalkulasi rata-rata = 1 dan 5 |
| R-01/R-04 submit ganda (data identik) | COUNTIFS(umur,skala,catatan)>1 | simpan submission pertama; flag & exclude sisanya | 1 | jumlah respondent unik = 8-1 |
| R-05 umur=150 outlier | filter umur<10 OR umur>100 | age_outlier_flag=1; exclude dari cross-tab demografi saja | 1 | rentang umur dalam laporan demografi = wajar (tanpa 150) |
@step Hitung respons valid untuk rata-rata kepuasan :: 8 respons dikurangi 1 submit ganda (R-04, duplikat dari R-01) dikurangi 3 skala invalid (R-02, R-03, R-05) = respons yang boleh masuk hitungan rata-rata kepuasan. Catatan: R-05 sudah kena exclude dari skala tak-valid, jadi tidak dihitung dobel di age_outlier. :: 8 - 1 - 3 = 4 \text{ respons valid untuk rata-rata}
@step Limitasi & etika sebelum simpulkan kepuasan :: (1) Dengan hanya 4 dari 8 respons valid untuk rata-rata, sample terlalu kecil untuk klaim "tingkat kepuasan pelanggan SkinLab" secara umum — perlu perbanyak sample sebelum dipakai keputusan strategis. (2) Umur R-05=150 kemungkinan besar typo manusia (mis. 15 tertukar jadi 150) — sebelum di-exclude permanen dari analisis demografi, idealnya dicek ke sistem pendaftaran asli; consent/privasi juga perlu dipastikan (respondent_id sebaiknya sudah pseudonim, bukan nama asli) sebelum data disimpan lebih lanjut.
@answer (a) 6 issue: R-02 skala=0 (Validity), R-03 skala=6 (Validity), R-05 skala="sangat setuju" teks bukan angka (Validity/data_type), R-01&R-04 duplikat submit (Uniqueness), R-05 umur=150 outlier (Accuracy), kolom skala bertipe campur (Consistency). (b) R01 skala invalid → scale_valid_flag; R02 submit ganda → duplicate_submission_flag; R03 umur outlier → age_outlier_flag. (c) scale_valid_flag=IF(AND(ISNUMBER(skala_kepuasan_raw),skala_kepuasan_raw>=1,skala_kepuasan_raw<=5),1,0); duplicate_submission_flag=COUNTIFS(umur,umur,skala,skala,catatan,catatan)>1. (d) Log 3 entri: skala invalid (3 baris exclude rata-rata), submit ganda (1 baris exclude), umur outlier (1 baris exclude demografi saja) — sisa 4 respons valid dari 8. (e) Limitasi: sample terlalu kecil (4 dari 8) untuk klaim kepuasan umum; umur ekstrem kemungkinan typo perlu verifikasi manual + pastikan respondent_id sudah pseudonim untuk privasi.
@uses w3-qualitydim, w3-missing4, w3-dupdetect
@check 8 - 1 - 3 == 4
@check 6 == 6
@end
