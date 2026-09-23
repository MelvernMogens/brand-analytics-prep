# Quiz Week 4 — Data Exploration, Visualisation & Preliminary Sentiment
# Owner: @research

@q 4 :: w4-metrics :: w4-denominator, w4-metric-fit
Brand sepatu fiktif "LariLaju" menganalisis 200 review dan menemukan 125 coded mentions keluhan:
| Tema | Count |
| Pengiriman lambat | 35 |
| Salah ukuran | 25 |
| Kualitas menurun | 20 |
| Harga mahal | 10 |
Empat tema di atas total 90 mentions, sisanya masuk "other". Berapa share tema "Pengiriman lambat" yang benar?
- 38,9% — 35 dibagi 90 (total empat tema saja)
+ 28,0% — 35 dibagi 125 (total coded mentions)
- 17,5% — 35 dibagi 200 (total review)
- 35,0% — count dibaca langsung sebagai persen
@why
Denominator yang benar untuk share tema adalah TOTAL coded mentions (N = 125), bukan total review (review bisa menyebut lebih dari satu tema, review ≠ mention) dan bukan total empat tema yang tampil (other ikut denominator).
35/125 = 28,0%. Angka 38,9% (35/90) membuat share tema terbesar terlihat lebih besar dari kenyataan; 17,5% salah unit (review vs mention); count bukan persen.
@check 35/125*100 ~ 28.0
@check 35+25+20+10 == 90
@end

@q 4 :: w4-metrics :: w4-denominator
Cross-tab sentiment review brand fiktif "Batik Rasa":
| Platform | Positif | Netral | Negatif | Total |
| Google | 33 | 12 | 15 | 60 |
| Instagram | 72 | 18 | 10 | 100 |
Berapa persentase negatif Google yang benar (row %)?
+ 25,0% — 15 dibagi 60 (total review Google)
- 9,4% — 15 dibagi 160 (seluruh dataset)
- 60,0% — 15 dibagi 25 (total seluruh review negatif)
- 15,0% — 15 dibagi 100 (total Instagram)
@why
Aturan cross-tab kelas: pakai ROW percentage — tiap baris dibagi total channel itu sendiri (60 untuk Google), sehingga tiap baris berjumlah 100%. 15/60 = 25,0%.
9,4% memakai pooled denominator (salah — menyamarkan perbedaan antar channel); 60,0% menghitung share dari seluruh review negatif (bukan share negatif DI Google); 15,0% meminjam total platform lain (tidak bermakna).
@check 15/60*100 ~ 25.0
@check 33+12+15 == 60
@end

@q 4 :: w4-metrics :: w4-denominator
Brand fiktif "Kopi Kita": Tokopedia punya 80 review dengan 20 negatif; Shopee punya 40 review dengan 16 negatif. Manajer ingin satu angka: persentase negatif gabungan (pooled) seluruh platform. Berapa yang benar?
- 32,5% — rata-rata dari 25% dan 40%
- 36,0% — jumlah count negatif (20+16) dibaca langsung sebagai persen
- 20,0% — hanya count Tokopedia dibagi seluruh review
+ 30,0% — (20+16) dibagi (80+40)
@why
Pooled % = total negatif dibagi total review: (20+16)/(80+40) = 36/120 = 30,0%.
Rata-rata dua persentase (32,5%) salah karena kedua platform punya jumlah review berbeda — Tokopedia harus berbobot lebih; 36,0% mencampur count dengan persen; 20,0% mengabaikan data Shopee. Catatan penting: pooled menyembunyikan bahwa Shopee (40% negatif) jauh lebih bermasalah — selalu lapor per channel juga.
@check (20+16)/(80+40)*100 ~ 30.0
@check 20/80*100 ~ 25.0
@check 16/40*100 ~ 40.0
@end

@q 4 :: w4-viz :: w4-chart-choice
Manajer LariLaju bertanya: "Keluhan apa yang paling sering muncul? Urutkan dari terbesar." Ada 8 kategori keluhan. Chart terbaik menurut tabel chart choice?
- Pie chart 8 slice — proporsi tiap keluhan kelihatan utuh
- Line chart — kategori keluhan berurutan jadi cocok digaris
+ Ranked bar chart (atau Pareto) dengan N tertera
- Scatter plot antara tema keluhan dan jumlahnya
@why
Task-nya compare categories → bar chart, ranked bar, atau Pareto; ranking langsung kelihatan dari panjang bar.
Pie banyak slice masuk daftar "avoid" (susah dibandingkan secara visual); line chart untuk change over time, bukan kategori yang tidak berurutan waktu; scatter untuk relationship dua variabel numerik — tema keluhan bukan variabel numerik.
@end

@q 4 :: w4-viz :: w4-chart-choice
Pertanyaan manajemen: "Bagaimana volume review mingguan kami berkembang sejak kampanye #LariPagi 8 minggu lalu?" Chart yang paling tepat?
- Pie chart komposisi review per minggu
+ Line chart (time-series) volume review per minggu
- Boxplot sebaran review
- Stacked bar per kategori keluhan
@why
Task-nya show change over time → line chart / time-series bar; tren naik-turun mingguan langsung terbaca dari kemiringan garis.
Pie tidak menunjukkan urutan waktu; boxplot untuk distribution (bukan tren); stacked bar kategori menjawab "keluhan apa", bukan "kapan".
@end

@q 4 :: w4-viz :: w4-chart-choice, w4-metric-fit
Tim LariLaju hanya melaporkan "rata-rata rating 3.9 — sehat!" ke manajemen. Menurut materi visualisasi, apa yang salah dan chart apa yang seharusnya dipakai?
- Tidak ada yang salah — average adalah ringkasan terbaik untuk manajemen
+ Rata-rata bisa menyembunyikan polarisasi (bimodal) — pakai histogram/boxplot dan cek low-star share
- Chart yang tepat adalah line chart tren rata-rata bulanan
- Ganti dengan pie chart komposisi sentiment agar lebih menarik
@why
Slide: "Show distribution → histogram, boxplot; avoid when: only showing an average." Mean 3.9 bisa menghaluskan kenyataan bahwa 18% pelanggan kasih bintang rendah — distribusi sering lebih berguna daripada average.
Line chart rata-rata tetap menyembunyikan polarisasi (masalahnya angka tunggal, bukan waktunya); pie chart sentiment bahkan lebih buruk lagi.
@end

@q 4 :: w4-viz :: w4-chart-choice
Scatter plot LariLaju menunjukkan pelanggan yang sering membeli cenderung memberi rating lebih tinggi. Kesimpulan yang BOLEH ditulis di caption chart?
- "Frekuensi pembelian menyebabkan kepuasan pelanggan naik."
- "Meningkatkan frekuensi beli otomatis menaikkan rating brand."
+ "Frekuensi pembelian bervariasi bersama rating — asosiasi, bukan sebab-akibat."
- "Pelanggan yang jarang beli pasti akan memberi rating rendah."
@why
Tabel chart choice: scatter untuk relationship, tapi avoid "implying causality from correlation" — scatter hanya menunjukkan association (dua hal bergerak bersama).
Klaim "menyebabkan" / "otomatis menaikkan" adalah causality yang menuntut stronger design and evidence; "pasti" juga terlalu kuat untuk pola agregat. Ini sekaligus pelanggaran interpretation ladder (loncat ke tangga 3).
@end

@q 4 :: w4-viz :: w4-integrity
Chart yang dijual ke manajemen LariLaju ternyata: sumbu Y bar chart penghasilan diawali dari angka 3,40 juta bukan nol, tanpa keterangan — perubahan kecil terlihat dramatis. Item integrity checklist mana yang dilanggar?
- Question fit — chart menjawab pertanyaan yang berbeda
- Sample disclosure — jumlah sample tidak tertera
+ Scale honesty — axis/baseline tidak transparan
- Label clarity — unit dan kategori tidak terbaca
@why
Scale honesty bertanya: "Are axes, baselines, and ranges transparent?" — axis terpotong tanpa keterangan melebih-lebihkan perubahan visual, persis pelanggarannya.
Question fit soal chart menjawab pertanyaan lain; sample disclosure soal N dan sumber data; label clarity soal unit/kategori/periode terbaca — ketiganya tidak digambarkan di soal.
@end

@q 4 :: w4-sentiment :: w4-ladder
Setelah kampanye #LariPagi, review negatif LariLaju naik. Manajer menyimpulkan: "Kampanye menyebabkan review negatif naik — ganti agency!" Pernyataan manajer berada di anak tangga mana, dan apa yang salah?
- Description — benar, karena hanya melaporkan yang terlihat di data
- Association — benar, karena kampanye dan review negatif bergerak bersama
+ Causality — dan belum didukung bukti; data hanya mendukung association dengan penjelasan bersaing (ekspektasi naik ATAU service gap terekspos)
- Bukan tangga mana pun — itu opini manajerial, bukan klaim analitis
@why
"X menyebabkan Y" adalah tangga 3 (Causality) yang menuntut stronger design and evidence. Data spike hanya menunjukkan koresi waktu — association — dan slide W4 eksplisit memberi dua penjelasan bersaing: kampanye menaikkan ekspektasi ATAU mengekspos service gap yang sudah ada.
Klaim kausal dari spike visual persis pola "Naik tangga tanpa bukti"; dan klaim kausal adalah klaim analitis (jadi bukan "bukan tangga mana pun").
@end

@q 4 :: w4-sentiment :: w4-ladder
Manakah pernyataan yang berada di tingkat ASSOCIATION pada interpretation ladder?
- "Delivery delay adalah kategori isu yang paling sering muncul di dataset ini."
+ "Sentiment negatif lebih tinggi di review e-commerce dibanding komentar Instagram."
- "Kampanye #LariPagi menyebabkan sentiment negatif naik."
- "Rating rata-rata bulan ini 3,9 dengan median 4,0."
@why
Association = "what varies together?" — dua hal bervariasi bersama (platform ↔ sentiment) tanpa klaim sebab. Persis contoh slide.
Opsi 1 dan 4 hanya melaporkan apa yang ada di data (Description); opsi 3 mengklaim sebab-akibat (Causality) tanpa desain bukti.
@end

@q 4 :: w4-sentiment :: w4-ladder, w4-storytelling
Dalam visual storytelling, urutan komponen yang benar untuk membawakan chart adalah:
+ Question → Evidence → Interpretation → Caution → Next step
- Evidence → Question → Next step → Interpretation → Caution
- Question → Next step → Evidence → Interpretation → Caution
- Evidence → Interpretation → Question → Caution → Next step
@why
Slide: visual storytelling = lead with the question — buka dengan keputusan brand, tunjukkan pola data, interpretasi hati-hati, nyatakan apa yang belum bisa diklaim (caution), tutup dengan aksi analyst.
Versi lain membuka dengan data (bukan pertanyaan) atau meletakkan next step sebelum bukti — memutuskan sebelum menunjukkan alasannya.
@end

@q 4 :: w4-metrics :: w4-metric-fit
Distribusi rating 40 review brand fiktif "Sneakr":
| Bintang | Jumlah review |
| 1 | 4 |
| 2 | 2 |
| 3 | 6 |
| 4 | 8 |
| 5 | 20 |
Berapa low-star share (1–2 bintang) dan apa risiko bacanya?
- 6,0% — cukup 4 dibagi jumlah kategori bintang
- 70,0% — kelompok bintang 4–5 dibagi 40 (itu high-star share, bukan low-star)
- 10,0% — review 1 bintang saja dibagi 40
+ 15,0% — (4+2) dibagi 40; rata-rata yang "sehat" menyembunyikan kelompok kecewa ini
@why
Low-star share = review 1–2 bintang dibagi total review: (4+2)/40 = 15,0%. Slide W4: average yang terlihat sehat bisa hides low-rating pain points — makanya distribusi wajib dicek.
6,0% salah denominator (dibagi jumlah kategori); 70,0% adalah high-star share (28/40) — kelompok yang salah; 10,0% hanya menghitung bintang 1 dan melewatkan bintang 2.
@check (4+2)/40*100 ~ 15.0
@check (4+2+6+8+20) == 40
@check (8+20)/40*100 ~ 70.0
@end

@q 4 :: w4-eda :: w4-eda-readiness
Dataset review brand fiktif "Batik Rasa": 300 baris mentah, 8 duplikat dan 4 review kosong dibuang. sentiment_label ada tapi rumusnya tidak didokumentasikan, data dictionary belum diperbarui, log belum direkonsiliasi. Berapa baris siap analisis, dan bolehkah chart langsung dibuat?
- 288 baris — boleh, karena barisnya sudah bersih
- 296 baris — cukup buang duplikatnya saja
- 300 baris — data mentah memang boleh langsung dipakai untuk eksplorasi
+ 288 baris — belum boleh: dokumentasi derived fields, dictionary, dan log harus beres dulu supaya chart bisa ditelusuri
@why
300 - 8 - 4 = 288 baris. Tapi aturan slide: "No chart should leave the analyst's desk" tanpa jawaban jelas "cleaned field mana yang menghasilkan figure ini?" — sentiment_label tanpa rumus + dictionary belum update + log belum reconcile = 3 item readiness GAGAL.
Membuang review kosong saja tidak cukup (296 salah hitung); data mentah tanpa clean fields justru melanggar readiness; baris bersih bukan satu-satunya syarat — traceability juga.
@check 300-8-4 == 288
@end

@q 4 :: w4-eda :: w4-eda-loop
Urutan siklus EDA 4 langkah yang benar menurut materi:
+ Summarise → Visualise → Question → Validate
- Visualise → Summarise → Validate → Question
- Validate → Question → Summarise → Visualise
- Question → Validate → Summarise → Visualise
@why
Siklus slide: data diringkas dulu (angka sebelum feeling), divisualisasikan untuk mengekspos pola, pola yang muncul dipertanyakan (pola aneh = pertanyaan, bukan jawaban), lalu divalidasi sebelum dianggap kuat.
Mulai dari Visualise tanpa ringkasan = chart tanpa konteks N; Validate di awal tidak ada gunanya karena belum ada pola yang perlu diuji.
@end

@q 4 :: w4-sentiment :: w4-sentiment-limits
Word cloud review LariLaju menonjolkan kata "promo" (count paling kecil dari 4 kata besar). Tim sosmed menyimpulkan: "Kata promo membesar = kampanye diingat, tinggal tambah budget!" Apa pembacaan yang benar?
+ Word cloud adalah alat eksplorasi — "promo" bisa jadi campaign-specific noise; wajib cek konteks lewat sample review, theme cross-check, dan perbandingan platform sebelum menambah budget
- Tim sosmed benar — ukuran kata di word cloud adalah bukti efektivitas kampanye
- Kata "promo" harus dihapus dari dataset karena bukan kata brand
- Word cloud tidak berguna untuk analisis brand apa pun
@why
Slide W4: word/tag cloud itu exploration device — ukuran kata BUKAN insight final ("avoid when: treating word size as final insight"). Promo justru diberi catatan "may be campaign-specific noise": frekuensinya naik karena kampanye jalan, bukan bukti brand diingat positif.
Menghapus kata promo justru membuang sinyal; "tidak berguna apa pun" terlalu ekstrem — word cloud berguna untuk eksplorasi awal asal divalidasi.
@end

@q 4 :: w4-sentiment :: w4-validation-steps
Validasi manual sample 50 komentar LariLaju: 42 label model cocok dengan pembacaan manusia, 8 salah. Berapa validation rate-nya, dan bolehkah hasil sentiment langsung dipakai untuk rekomendasi brand?
- 84% — boleh langsung dipakai karena di atas 80%
- 16% — itu tingkat kesalahan yang masih wajar untuk model otomatis
- 8% — hanya menghitung komentar yang salah
+ 84% — belum: konflik harus dijelaskan dan aturan koreksi didokumentasikan dulu (conflicts need explanation, hasil harus auditable)
@why
Validation rate = 42/50 = 84%. Tapi slide: label yang bentrok dengan pembacaan manusia harus DIJELASKAN dan metode/sample size/correction rule didokumentasikan sebelum hasil dipakai — angka agreement saja belum cukup.
16% adalah error rate (bukan validation rate); 8% salah satuan; ambang "di atas 80% boleh rilis" tidak ada di materi — yang menentukan adalah proses koreksi + dokumentasi.
@check 42/50*100 ~ 84.0
@check 8/50*100 ~ 16.0
@end
