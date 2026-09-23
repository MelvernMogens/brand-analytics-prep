# Studi Kasus: Persona, Theme-Sentiment & Strategi
# Owner: @growth (repurpose/distribution) — brief dari MEGATRON

@week 9 :: Studi Kasus :: Soal kasus bergaya ujian — kerjakan di kertas dulu, baru buka pembahasan.
############################################################
@topic es-persona :: Kasus: Persona, Theme-Sentiment & Strategi :: Dari segmen dan teks konsumen ke persona, prioritas isu, dan respon brand.
@intro
- Empat kasus ini simulasi ujian: kerjakan dulu di kertas sebelum baca step-nya — cocokkan jawabanmu sendiri, baru buka pembahasan.
- Tiap kasus punya dataset LENGKAP di dalam soal (self-contable) — semua angka yang kamu perlu untuk menjawab sudah ada di tabel.
- Alur umum kasus RFM→persona: skor R/F/M → RFM_Score (SUM) → segmen pakai aturan skor → ringkasan per segmen → persona 5 elemen → strategy table (w6-strategy-table).
- Persona BUKAN sekadar segmen berganti nama — segmen itu angka, persona itu profil manusia lengkap (demografi, perilaku, motivasi, pain point, channel), dengan asumsi yang dilabeli jelas.
- Theme-sentiment: tema di-coding dulu (5 tema W7), baru sentiment dibaca PER TEMA — bukan satu skor total yang menyembunyikan konflik antar aspek.
- Prioritas isu pakai Severity × Urgency (w6-severity-urgency) atau High-freq/Low-freq × severity (w7-listening-matrix) — bukan cuma dari mana yang paling ramai dibicarakan.
- Setiap klaim dari data harus berhenti di Description atau Association hati-hati (w4-ladder) — jangan lompat ke Causality tanpa desain bukti kuat.

@example Kopi Runcing: RFM_Score 10 customer → segmen → 2 persona → strategy table :: Kasus latihan
@soal
Kopi Runcing (brand kopi kekinian fiktif) mengumpulkan data 10 pelanggan (skor R, F, M skala 1-5 per pelanggan, sudah dihitung tim data). RFM_Score = SUM(R,F,M). Aturan segmen: RFM_Score ≥12 Champion, 9-11 Loyal, 6-8 At Risk, ≤5 Lost.
| # | Gender | R | F | M | Channel | Keluhan |
| 1 | Perempuan | 5 | 5 | 4 | Instagram | N |
| 2 | Laki-laki | 2 | 2 | 1 | Website | Y |
| 3 | Perempuan | 4 | 4 | 4 | Mobile App | N |
| 4 | Laki-laki | 5 | 4 | 5 | Instagram | N |
| 5 | Perempuan | 1 | 1 | 1 | Website | Y |
| 6 | Laki-laki | 3 | 3 | 3 | Toko Offline | N |
| 7 | Perempuan | 2 | 1 | 2 | Website | Y |
| 8 | Laki-laki | 5 | 5 | 5 | Mobile App | N |
| 9 | Perempuan | 1 | 2 | 1 | Website | Y |
| 10 | Laki-laki | 4 | 4 | 3 | Instagram | N |
(a) Hitung RFM_Score tiap pelanggan dan tentukan segmennya.
(b) Ringkas tiap segmen: jumlah orang, rata-rata skor (RFM_Score), channel dominan, % keluhan.
(c) Bangun 2 persona lengkap (5 elemen) untuk segmen Champion dan segmen Lost.
(d) Isi strategy table (Key Message, Channel, Offer/Value, Goal) untuk kedua persona.
@step Hitung RFM_Score & segmen :: SUM R+F+M per baris, lalu terapkan aturan skor.
| # | R | F | M | RFM_Score | Segmen |
| 1 | 5 | 5 | 4 | 14 | Champion |
| 2 | 2 | 2 | 1 | 5 | Lost |
| 3 | 4 | 4 | 4 | 12 | Champion |
| 4 | 5 | 4 | 5 | 14 | Champion |
| 5 | 1 | 1 | 1 | 3 | Lost |
| 6 | 3 | 3 | 3 | 9 | Loyal |
| 7 | 2 | 1 | 2 | 5 | Lost |
| 8 | 5 | 5 | 5 | 15 | Champion |
| 9 | 1 | 2 | 1 | 4 | Lost |
| 10 | 4 | 4 | 3 | 11 | Loyal |
@step Ringkas per segmen :: Champion = #1,3,4,8 (4 orang); Loyal = #6,10 (2 orang); Lost = #2,5,7,9 (4 orang); At Risk = tidak ada (0 orang).
| Segmen | Jumlah | Rata-rata RFM_Score | Channel dominan | % keluhan |
| Champion | 4 | (14+12+14+15)/4 = 13.75 | Instagram 2, Mobile App 2 → digital intim | 0/4 = 0% |
| Loyal | 2 | (9+11)/2 = 10.0 | Toko Offline 1, Instagram 1 → campuran | 0/2 = 0% |
| Lost | 4 | (5+3+5+4)/4 = 4.25 | Website 4/4 → semua Website | 4/4 = 100% |
@step Bangun persona Champion "Wulan" :: Demographics: perempuan/laki-laki campur, diasumsikan 22-32 tahun (asumsi dari channel Instagram+App — dilabeli). Behavioral: RFM_Score rata-rata 13.75, transaksi rutin, tanpa keluhan sama sekali. Motivations: eksklusivitas & pengakuan (recency & frequency tinggi = engaged emosional). Pain points: nyaris tidak ada — 0% keluhan, kebutuhannya recognition bukan perbaikan. Channels: Instagram + Mobile App.
@step Bangun persona Lost "Doni" :: Demographics: campuran gender, diasumsikan 25-40 tahun (asumsi dari channel Website — dilabeli). Behavioral: RFM_Score rata-rata 4.25 (terendah), recency lama, frekuensi & spend rendah, 100% pernah komplain. Motivations: awalnya coba-coba/harga, sekarang tidak ada alasan kuat untuk kembali. Pain points: SEMUA sudah komplain (100%) — kemungkinan pengalaman buruk di Website belum tertangani. Channels: Website + Email (satu-satunya jejak digital yang tercatat).
@step Isi strategy table untuk kedua persona :: Ikuti pola w6-strategy-table: Champion pakai baris "reward loyalty", Lost pakai baris "effort minimal" tapi tetap diagnosis dulu karena 100% keluhan adalah sinyal serius.
| Persona | Key Message | Channel | Offer/Value | Goal |
| Wulan (Champion) | "Kamu pelanggan paling berharga kami" | Instagram, in-app alerts, VIP events | exclusive rewards, early access | retain & strengthen loyalty |
| Doni (Lost) | "Kami ingin dengar apa yang salah" | Email, survey singkat (bukan blast promo) | permintaan maaf + insentif kecil bersyarat feedback | diagnosis akar masalah Website + reactivation test murah |
@answer (a) RFM_Score: #1=14, #2=5, #3=12, #4=14, #5=3, #6=9, #7=5, #8=15, #9=4, #10=11. Segmen: Champion #1,3,4,8 (4); Loyal #6,10 (2); Lost #2,5,7,9 (4); At Risk 0. (b) Champion: 4 orang, rata-rata 13.75, Instagram+App, 0% keluhan. Loyal: 2 orang, rata-rata 10.0, campuran, 0% keluhan. Lost: 4 orang, rata-rata 4.25, Website 100%, keluhan 100%. (c) Wulan (Champion): digital-intim, tanpa pain point, motivasi eksklusivitas. Doni (Lost): Website, 100% pernah komplain, motivasi awal harga/coba-coba, butuh diagnosis. (d) Wulan → VIP/exclusive rewards, goal retain loyalty. Doni → survey + permintaan maaf + insentif kecil, goal diagnosis akar masalah Website & reactivation murah.
@uses w6-seg-persona-strategy, w6-persona-5, w6-strategy-table
@check 5+5+4 == 14
@check 2+2+1 == 5
@check 4+4+4 == 12
@check 5+4+5 == 14
@check 1+1+1 == 3
@check 3+3+3 == 9
@check 2+1+2 == 5
@check 5+5+5 == 15
@check 1+2+1 == 4
@check 4+4+3 == 11
@check (14+12+14+15)/4 ~ 13.75
@check (9+11)/2 ~ 10.0
@check (5+3+5+4)/4 ~ 4.25
@check 4/4*100 ~ 100.0
@end

@example GlowNusa: 10 review skincare — theme coding, sentiment, severity × urgency :: Kasus latihan
@soal
GlowNusa (brand skincare lokal fiktif) mengumpulkan 10 review marketplace untuk dianalisis. Gunakan 5 tema W7 (Product Quality, Service Experience, Price/Value, Identity/Lifestyle, Problem/Risk).
| ID | Review (sudah bersih) |
| G01 | tekstur ringan, cepat meresap, cocok di kulit berminyak |
| G02 | pengiriman 2 minggu, parah banget lambatnya |
| G03 | harga lumayan mahal tapi worth it buat kualitasnya |
| G04 | kemasan bocor pas sampai, isi produk tumpah sebagian |
| G05 | bangga pakai skincare lokal, gak kalah sama brand luar |
| G06 | breakout parah setelah pakai 3 hari, kulit jadi merah-merah |
| G07 | CS responnya ramah dan cepat, komplain langsung ditangani |
| G08 | promo jarang banget, mahal kalau harga normal |
| G09 | testurnya lengket, gak secepat itu meresapnya |
| G10 | suka packaging-nya aesthetic, cocok buat konten |
(a) Coding tiap review ke satu dari 5 tema, tentukan sentiment (Positive/Negative/Mixed), sertakan evidence kata kunci.
(b) Tentukan brand association tiap tema yang muncul (pakai konsep W7 brand meaning per tema).
(c) Tempatkan 2 isu paling krusial (G04 kemasan bocor, G06 breakout) di severity × urgency, urutkan prioritas dari 4 isu utama (delivery lambat, kemasan bocor, breakout, harga).
(d) Tentukan strategi respons (fix/communicate/reinforce/reposition) untuk keempat isu itu.
@step Coding tema & sentiment tiap review :: Cocokkan kata kunci ke 5 tema slide W7 (w7-theme-coding); tandai mixed kalau ada 2 polaritas dalam satu review.
| ID | Tema | Sentiment | Evidence |
| G01 | Product Quality | Positive | "ringan", "cepat meresap" |
| G02 | Service Experience | Negative | "2 minggu", "parah lambat" |
| G03 | Price/Value | Positive | "mahal" tapi vonis akhir "worth it" |
| G04 | Problem/Risk | Negative | "bocor", "tumpah" — kerusakan fisik |
| G05 | Identity/Lifestyle | Positive | "bangga", "lokal" |
| G06 | Problem/Risk | Negative | "breakout", "kulit merah-merah" — safety concern |
| G07 | Service Experience | Positive | "ramah", "cepat", "langsung ditangani" |
| G08 | Price/Value | Negative | "promo jarang", "mahal" tanpa penyeimbang positif |
| G09 | Product Quality | Negative | "lengket", "gak secepat itu" |
| G10 | Identity/Lifestyle | Positive | "aesthetic", "konten" |
@step Brand association per tema :: Pakai brand meaning dari tabel Theme Coding W7: Product Quality → Perceived Quality; Service Experience → Trust and satisfaction; Price/Value → Value perception; Identity/Lifestyle → Brand association; Problem/Risk → Brand issue severity.
| Tema | Count | Sentiment campuran | Brand association |
| Product Quality | 2 (G01, G09) | 1 positif, 1 negatif | Perceived Quality — terbelah, butuh investigasi batch produk |
| Service Experience | 2 (G02, G07) | 1 negatif, 1 positif | Trust and satisfaction — CS kuat, pengiriman lemah |
| Price/Value | 2 (G03, G08) | 1 positif (worth it), 1 negatif (mahal tanpa promo) | Value perception — terbelah, tergantung ada promo/tidak |
| Identity/Lifestyle | 2 (G05, G10) | 2 positif | Brand association — aset kuat (local pride + aesthetic) |
| Problem/Risk | 2 (G04, G06) | 2 negatif | Brand issue severity — dua sinyal berbeda level bahaya |
@step Severity × urgency untuk 4 isu utama :: G06 breakout menyangkut KESEHATAN kulit (severity tertinggi meski hanya 1 laporan dalam sample); G04 kemasan bocor risiko kualitas fisik; G02 delivery lambat frekuensi bisa tinggi tapi bukan bahaya fisik; G08 harga/promo tension nilai, bukan krisis.
| Isu | Severity | Urgency | Kuadran |
| G06 breakout/reaksi kulit | Tinggi (safety concern, potensi risiko kesehatan & reputasi/legal) | Tinggi (tiap hari dibiarkan = risiko makin banyak orang kena) | High × High → management review + urgent fix |
| G04 kemasan bocor | Sedang-tinggi (quality risk, produk tumpah = kerugian nyata pelanggan) | Sedang (bisa terus terjadi tiap pengiriman kalau tak diperbaiki) | Tinggi × Sedang → urgent fix operasional (QC kemasan) |
| G02 delivery lambat | Sedang (Service Experience, mengganggu tapi tidak berbahaya) | Sedang (operasional, bisa membesar kalau dibiarkan) | Sedang × Sedang → fix operasional standar |
| G08 harga/promo | Rendah-sedang (Value perception, bukan ancaman langsung) | Rendah (siklus promo bisa dijadwalkan, tidak mendesak) | Rendah × Rendah-sedang → communicate/monitor |
@step Susun urutan prioritas & strategi respons :: Severity menang dari sekadar frekuensi (persis w7-listening-matrix: low frequency + severe → management review tetap didahulukan).
| Urutan | Isu | Strategi respons |
| 1 | G06 breakout/reaksi kulit | management review + FIX (investigasi formula/batch, transparansi ke pelanggan yang terdampak) |
| 2 | G04 kemasan bocor | FIX (redesign kemasan + QC ekspedisi) |
| 3 | G02 delivery lambat | FIX operasional (SLA pengiriman) + COMMUNICATE update status |
| 4 | G08 harga tanpa promo | COMMUNICATE value proposition; REINFORCE aset positif (Identity/Lifestyle G05, G10) sebagai penyeimbang narasi harga |
@answer (a) 10 review ter-coding: Product Quality (G01+, G09−), Service Experience (G02−, G07+), Price/Value (G03+, G08−), Identity/Lifestyle (G05+, G10+), Problem/Risk (G04−, G06−). (b) Association: Product Quality→Perceived Quality (terbelah); Service→Trust (terbelah); Price/Value→Value perception (terbelah); Identity→Brand association (kuat, aset); Problem/Risk→Issue severity (dua sinyal negatif). (c)(d) Urutan prioritas: 1) G06 breakout — High×High, management review+fix; 2) G04 kemasan bocor — fix operasional/QC; 3) G02 delivery lambat — fix+communicate; 4) G08 harga — communicate value + reinforce aset Identity/Lifestyle sebagai penyeimbang.
@uses w7-theme-coding, w7-sentiment-def, w6-severity-urgency, w7-listening-matrix
@check 2 == 2
@check 2+2+2+2+2 == 10
@end

@example Rasa Kopi: audit 3 sumber, bobot baru untuk pertanyaan loyalty :: Kasus latihan
@soal
Rasa Kopi (brand kopi kekinian fiktif) mau menjawab decision question baru: "Pelanggan mana yang paling loyal dan layak program membership?" Tim menetapkan bobot baru: Relevance 30%, Access 20%, Coverage 10%, Quality 20%, Context 5%, Bias 5%, Privacy 10% (total 100%). Skor mentah 3 sumber kandidat:
| Kriteria | Bobot | CRM Transaksi (1st-party) | Google Reviews | Instagram |
| Relevance | 30% | 5 | 3 | 2 |
| Access | 20% | 5 | 4 | 4 |
| Coverage | 10% | 3 | 4 | 5 |
| Quality | 20% | 5 | 3 | 3 |
| Context | 5% | 4 | 4 | 5 |
| Bias | 5% | 3 | 3 | 3 |
| Privacy | 10% | 3 | 4 | 4 |
(a) Hitung weighted score (WS) tiap sumber (formula w2-weighted).
(b) Sumber mana yang harus dipilih sebagai starting point utama? Kenapa?
(c) Sebutkan 3 limitasi memakai sumber terpilih itu sendirian.
@step Hitung WS CRM Transaksi :: Kalikan tiap skor dengan bobot desimalnya, jumlahkan semua. :: WS_{CRM} = 5(0.30)+5(0.20)+3(0.10)+5(0.20)+4(0.05)+3(0.05)+3(0.10)
$ = 1.50+1.00+0.30+1.00+0.20+0.15+0.30 = 4.45
@step Hitung WS Google Reviews :: Skor Google (3,4,4,3,4,3,4) × bobot yang sama.
$ WS_{Google} = 3(0.30)+4(0.20)+4(0.10)+3(0.20)+4(0.05)+3(0.05)+4(0.10) = 0.90+0.80+0.40+0.60+0.20+0.15+0.40 = 3.45
@step Hitung WS Instagram :: Skor Instagram (2,4,5,3,5,3,4) × bobot yang sama.
$ WS_{IG} = 2(0.30)+4(0.20)+5(0.10)+3(0.20)+5(0.05)+3(0.05)+4(0.10) = 0.60+0.80+0.50+0.60+0.25+0.15+0.40 = 3.30
@step Pilih sumber & jelaskan :: CRM Transaksi (WS 4.45) tertinggi — masuk akal karena pertanyaan soal LOYALITAS pelanggan (RFM/perilaku transaksi berulang) yang paling langsung terekam di data transaksi first-party sendiri, bukan di review publik yang tidak selalu terhubung ke identitas pelanggan stabil. Bobot Relevance (30%) yang tertinggi juga menguntungkan CRM karena skornya paling tinggi (5) di kriteria itu.
@step Sebutkan limitasi CRM sendirian :: (1) CRM tidak menangkap PERSEPSI pasar yang lebih luas — calon pelanggan yang belum pernah beli tidak terekam sama sekali. (2) CRM tidak menjelaskan KENAPA pelanggan loyal/tidak (butuh data teks/sentiment sebagai pelengkap, mis. review atau survey). (3) Kualitas CRM bergantung pada disiplin input data internal — field yang tidak lengkap/konsisten (mis. customer_id ganda) bisa membiaskan siapa yang terlihat "loyal".
@answer (a) WS CRM = 1.50+1.00+0.30+1.00+0.20+0.15+0.30 = 4.45. WS Google = 0.90+0.80+0.40+0.60+0.20+0.15+0.40 = 3.45. WS Instagram = 0.60+0.80+0.50+0.60+0.25+0.15+0.40 = 3.30. (b) CRM Transaksi dipilih — WS tertinggi (4.45) dan paling relevan untuk pertanyaan loyalitas (data perilaku pembelian nyata, first-party). (c) Limitasi: tidak menangkap persepsi pasar di luar pembeli tercatat; tidak menjelaskan alasan loyalitas (butuh data teks pelengkap); kualitasnya bergantung disiplin input data internal.
@uses w2-weighted, w2-ownership
@check 5*0.30+5*0.20+3*0.10+5*0.20+4*0.05+3*0.05+3*0.10 ~ 4.45
@check 3*0.30+4*0.20+4*0.10+3*0.20+4*0.05+3*0.05+4*0.10 ~ 3.45
@check 2*0.30+4*0.20+5*0.10+3*0.20+5*0.05+3*0.05+4*0.10 ~ 3.30
@check 30+20+10+20+5+5+10 == 100
@end

@example Teh Rimba: EDA sentiment × platform, row %, chart choice, interpretation ladder :: Kasus latihan
@soal
Teh Rimba (brand minuman teh lokal fiktif) mengumpulkan hasil coding sentiment dari 3 platform. Tabel count (bukan persen):
| Platform | Positive | Neutral | Negative | Total |
| Google Reviews | 65 | 20 | 35 | 120 |
| Instagram | 108 | 24 | 18 | 150 |
| TikTok Comments | 40 | 15 | 25 | 80 |
(a) Hitung row % (Pos/Neu/Neg) tiap platform — pastikan tiap baris berjumlah 100%.
(b) Pilih chart yang tepat untuk membandingkan komposisi sentiment antar platform ini, dan chart apa yang HARUS dihindari.
(c) Tulis interpretasi level Description dan satu level Association (bukan Causality) dari pola row %.
(d) Tulis 1 caution statement dan 1 next step (pakai format 5 komponen w4-storytelling).
@step Hitung row % Google Reviews :: Tiap count dibagi total platform ITU SENDIRI (120), bukan total gabungan 3 platform. :: 65/120=54.2\% \quad 20/120=16.7\% \quad 35/120=29.2\%
@step Hitung row % Instagram :: Dibagi 150. :: 108/150=72.0\% \quad 24/150=16.0\% \quad 18/150=12.0\%
@step Hitung row % TikTok Comments :: Dibagi 80. :: 40/80=50.0\% \quad 15/80=18.75\% \quad 25/80=31.25\%
@step Susun tabel row % lengkap :: Cek tiap baris = 100% (dengan pembulatan).
| Platform | Positive | Neutral | Negative | N |
| Google Reviews | 54.2% | 16.7% | 29.2% | 120 |
| Instagram | 72.0% | 16.0% | 12.0% | 150 |
| TikTok Comments | 50.0% | 18.75% | 31.25% | 80 |
@step Pilih chart & hindari apa :: Task analitisnya "who/where" (perbandingan kategori platform × sentiment) → chart terbaik: 100% stacked bar per platform (row %), persis w4-chart-choice untuk part-to-whole/komposisi. HINDARI: pie chart terpisah per platform (susah dibandingkan sisi-sisi) dan JANGAN pakai count mentah (120 vs 150 vs 80 beda jauh, platform dengan N terbesar otomatis kelihatan "paling banyak positif" padahal itu cuma soal jumlah sample).
@step Interpretasi Description & Association :: Description hanya melaporkan apa yang terlihat; Association bilang dua hal bervariasi bersama, TANPA klaim sebab-akibat.
| Level | Pernyataan |
| Description | Instagram punya share sentiment positif tertinggi (72.0%), TikTok Comments punya share negatif tertinggi (31.25%). |
| Association | Sentiment negatif cenderung lebih tinggi di platform yang sifatnya lebih terbuka untuk komplain publik cepat (Google Reviews 29.2%, TikTok 31.25%) dibanding platform yang lebih banyak dipakai untuk apresiasi visual (Instagram 12.0%) — pola ini bervariasi bersama jenis platform, belum tentu sebab-akibat dari kualitas produk yang berbeda.
@step Caution & next step :: Ikuti pola 5 komponen w4-storytelling: Question → Evidence → Interpretation → Caution → Next step.
| Komponen | Isi |
| Question | Platform mana yang butuh perhatian respons/service recovery duluan? |
| Evidence | TikTok Comments punya share negatif tertinggi (31.25% dari 80), diikuti Google Reviews (29.2% dari 120). |
| Interpretation | Pelanggan mungkin lebih vokal mengeluh di TikTok/Google Reviews dibanding Instagram — bisa jadi karena karakter platform, bukan berarti produk lebih buruk di sana. |
| Caution | Ini belum membuktikan TikTok/Google Reviews adalah sumber masalah PRODUK — bisa juga karena demografi/platform bias (siapa yang menulis di platform mana) atau memang lebih banyak menyoal servis. Butuh sample teks langsung untuk konfirmasi. |
| Next step | Baca sample review negatif TikTok & Google Reviews secara manual (theme coding), cek apakah isunya sama (mis. Product Quality vs Service) sebelum menetapkan prioritas perbaikan. |
@answer (a) Row %: Google 54.2/16.7/29.2 (N=120), Instagram 72.0/16.0/12.0 (N=150), TikTok 50.0/18.75/31.25 (N=80) — tiap baris = 100%. (b) 100% stacked bar per platform (row %); hindari pie terpisah dan count mentah (N beda jauh antar platform). (c) Description: Instagram positif tertinggi (72%), TikTok negatif tertinggi (31.25%). Association: sentiment negatif cenderung lebih tinggi di platform yang lebih terbuka untuk komplain cepat (Google, TikTok) dibanding platform visual (Instagram) — bervariasi bersama, bukan sebab-akibat. (d) Question: platform mana butuh respons duluan? Evidence: TikTok 31.25% negatif tertinggi. Interpretation: pelanggan lebih vokal mengeluh di sana. Caution: belum membuktikan produk lebih buruk — bisa platform bias. Next step: baca sample review negatif secara manual sebelum menetapkan prioritas.
@uses w4-denominator, w4-chart-choice, w4-ladder, w4-storytelling
@check 65/120*100 ~ 54.2
@check 20/120*100 ~ 16.7
@check 35/120*100 ~ 29.2
@check 108/150*100 ~ 72.0
@check 24/150*100 ~ 16.0
@check 18/150*100 ~ 12.0
@check 40/80*100 ~ 50.0
@check 15/80*100 ~ 18.75
@check 25/80*100 ~ 31.25
@check 120+150+80 == 350
@end
