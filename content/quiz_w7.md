# Quiz Week 7 — Text, Theme, Sentiment & Brand-Association Analysis
# Owner: @research

@q 7 :: w7-prep :: w7-preprocessing
Ulasan mentah "Packagingnya bagusss 😍" dipreprocess menjadi "packaging bagus positive-emoji". Keputusan preprocessing yang TERSIRAT di sini dan alasannya:
+ Emoji diubah jadi fitur "positive-emoji" — emosi adalah sinyal analitis yang dipertahankan
- Emoji dibuang karena bukan kata baku — supaya teks bersih dan mudah dihitung frekuensinya
- Kata "bagusss" dibuang karena slang tidak baku dan merusak perhitungan tema
- Kata "Packagingnya" dihapus karena mengandung nama brand yang harus disaring
@why
Persis contoh slide: "Packagingnya bagusss 😍" → "packaging bagus positive-emoji" — emoji 😍 adalah penanda emosi yang DIPERTAHANKAN sebagai fitur; preprocessing terlalu agresif (buang semua emoji) bisa menghapus sinyal.
"bagusss" justru dirasionalkan jadi "bagus" (bukan dibuang — intensitasnya bermakna); "Packagingnya" di-normalize (lowercase, tokenisasi), bukan dihapus; tidak ada brand name di situ.
@end

@q 7 :: w7-prep :: w7-preprocessing
Dari 20 ulasan Batik Rasa: 3 duplikat persis, 2 spam/kosong, 1 promosi jasa follower (irrelevant). Berapa ulasan yang masuk analisis, dan kenapa duplikat wajib dibuang?
- 20 — duplikat tetap dihitung karena itu suara konsumen nyata yang valid
+ 14 — duplikat membiaskan frekuensi: satu opini bisa kelihatan seperti banyak orang
- 15 — hanya spam dan irrelevant yang boleh dibuang, duplikat harus dipertahankan
- 14 — duplikat dibuang karena isinya pasti spam promosi dari akun bot
@why
20 - 3 - 2 - 1 = 14. Slide: duplicate review → removed, prevents bias — satu opini terhitung dua kali menggelembungkan frequency analysis dan co-occurrence.
Duplikat bukan "suara banyak orang" (persis teks yang sama = satu opini tercatat ganda); alasan buang duplikat adalah bias frekuensi, bukan asumsi spam — angka 15 salah hitung, 20 salah total.
@check 20-3-2-1 == 14
@end

@q 7 :: w7-prep :: w7-workflow
Urutan workflow analisis teks W7 yang benar (6 tahap):
- Collect → Analyze Sentiment → Code Themes → Prepare → Map Associations → Decide
- Prepare → Collect → Code Themes → Map Associations → Analyze Sentiment → Decide
+ Collect → Prepare → Code Themes → Analyze Sentiment → Map Associations → Decide
- Collect → Prepare → Analyze Sentiment → Code Themes → Map Associations → Decide
@why
Alur slide: 1. Collect (kumpulkan reviews/comments) → 2. Prepare (clean, normalize, tokenize, document) → 3. Code Themes (kelompokkan ke makna) → 4. Analyze Sentiment (per tema!) → 5. Map Associations (jaringan makna) → 6. Decide (fix/communicate/reinforce/reposition).
Sentiment sebelum tema salah urutan — sentiment harus dibaca PER TEMA; Prepare sebelum Collect mustahil (belum ada datanya).
@end

@q 7 :: w7-prep :: w7-theme-coding
Ulasan "worth it banget sih, mahal tapi worth it" paling tepat di-code ke tema apa, dengan sentimen apa?
- Problem/Risk — negative, karena ulasan mengandung kata "mahal" di dalamnya
- Price/Value — negative, satu kata "mahal" sudah cukup menentukan sentimennya
+ Price/Value — positive, vonis akhir "worth it" menang atas kata harga negatif
- Identity/Lifestyle — positive, karena mengandung pujian dari pelanggan setia
@why
Indikator tema Price/Value: worth it, expensive, promo, value for money. Pola "expensive but worth it" (W4/W7): kata harga negatif tapi keputusan akhir positif — vonis akhir lebih menentukan daripada satu kata negatif.
Problem/Risk butuh indikator broken/fake/unsafe/misleading (tidak ada); "mahal menentukan sentimen" adalah kesalahan kata-vs-keputusan klasik; tidak ada sinyal identitas/keanggotaan di ulasan ini.
@end

@q 7 :: w7-sentiment :: w7-sentiment-def
Laporan model menyimpulkan: "Sentiment keseluruhan brand 60% positif — aman!" Mengapa pembacaan ini berbahaya menurut materi W7?
- Karena 60% masih di bawah standar industri 75% yang wajib dicapai
- Karena sentiment otomatis selalu salah dan sama sekali tidak boleh dipakai
+ Karena sentiment harus dibaca PER TEMA — skor total menyembunyikan konflik antar aspek
- Karena persentase harus dihitung dari jumlah mention, bukan jumlah review
@why
Slide: "Sentiment should be interpreted by theme, not only as one total score." Skor total 60% positif bisa menyembunyikan tema layanan yang 80% negatif — dan keputusan perbaikan dibuat per tema, bukan per angka rata-rata.
"Standar industri 75%" tidak ada di materi; sentiment otomatis berguna (triage, compare tone) asal divalidasi; opsi 4 soal unit hitung — bukan inti masalah klaim total.
@end

@q 7 :: w7-sentiment :: w7-validation-risks
Model melabel "Great, another app crash during checkout." sebagai POSITIVE. Risiko otomatisasi apa yang terjadi dan validation action yang tepat?
- Mixed sentiment in one review — split by theme/aspect
+ Sarcasm and irony — manual sample check dan coding notes
- Platform bias — triangulasi lintas sumber
- Language/slang/emojis — bangun local dictionary
@why
Sarkasme membalik makna tampak: kata "Great" positif di permukaan padahal kalimatnya kesal — persis contoh risiko "sarcasm and irony" dengan action "manual sample check dan coding notes" dari tabel slide.
Mixed sentiment butuh puji+keluhan dalam satu review (di sini komponennya satu: kesal); tidak ada isu platform atau slang lokal di kalimat itu.
@end

@q 7 :: w7-sentiment :: w7-validation-risks
Sentiment Google Reviews jauh lebih negatif daripada TikTok comments untuk brand yang sama. Risiko apa ini dan tindakan validasinya?
+ Platform bias — triangulate across reviews, social posts, surveys, dan competitor data
- Sarcasm and irony — lakukan manual sample check dengan coding notes
- Mixed sentiment — split by theme/aspect lalu hitung ulang per aspeknya
- Missing data — lakukan imputasi nilai netral untuk review tanpa label
@why
Tone tiap platform memang beda (W4: CS chat 45% negatif vs Instagram 13% — konteks platform membentuk tone; orang datang ke Google untuk komplain). Tindakan slide: triangulasi lintas reviews, social posts, surveys, dan competitor data — jangan bandingkan mentah antar platform tanpa konteks.
Sarkasme/mixed adalah masalah level kalimat, bukan level sumber; imputasi bukan bagian risiko otomatisasi sentiment.
@end

@q 7 :: w7-assoc :: w7-network
12 review brand fiktif "Kopi Amanah" menyebut pasangan kata (satu review = satu suara per pasangan):
• R1: original + cepat • R2: original + cepat • R3: original + cepat • R4: kemasan + pecah
• R5: kemasan + pecah • R6: kemasan + pecah • R7: promo + mahal • R8: promo + mahal
• R9: original + kemasan • R10: promo + mahal • R11: original + pecah • R12: promo + mahal
Edge (co-occurrence) paling TEBAL di jaringan adalah:
- original–cepat dengan bobot 3
- original–kemasan dengan bobot 1
- kemasan–pecah dengan bobot 3
+ promo–mahal dengan bobot 4
@why
Hitung per pasangan: promo+mahal muncul di R7, R8, R10, R12 = 4 review → edge tebal. original–cepat = 3 (R1–R3), kemasan–pecah = 3 (R4–R6), original–kemasan = 1 (R9), original–pecah = 1 (R11). Edge = frekuensi kemunculan BERSAMA dalam review.
Bobot edge adalah frekuensi co-occurrence — bukan ukuran pentingnya isu (isu pecah severity-nya bisa lebih tinggi walau edgenya lebih tipis).
@check 1+1+1+1 == 4
@check 3+3+1+1+4 == 12
@end

@q 7 :: w7-assoc :: w7-network
Dalam brand-association network, apa arti sebuah EDGE antara dua kata?
- Satu kata menyebabkan kata lainnya muncul — keduanya terkait hubungan sebab-akibat
+ Dua kata sering muncul BERSAMA dalam review — asosiasi yang terhubung di kepala konsumen
- Kedua kata punya jumlah kemunculan yang sama persis di seluruh dataset
- Kedua kata berasal dari platform yang sama dan periode waktu yang sama
@why
Slide: edges = frequent co-occurrence — menunjukkan seberapa sering dua makna muncul bersama. "Fake" dan "original" sering co-occur karena orang membahas keaslian — bukan karena saling menyebabkan.
Membaca edge sebagai sebab-akibat adalah pelanggaran @trap slide (co-occurrence bukan hubungan sebab); edge bukan soal jumlah kemunculan atau platform.
@end

@q 7 :: w7-assoc :: w7-listening-matrix
Social listening menemukan hanya 3 laporan "iritasi kulit" dari ribuan mention (frekuensi rendah) — tapi menyangkut keamanan produk. Menurut Social Listening Issue Matrix, aksi yang tepat?
- Abaikan — 3 dari ribuan berarti terlalu kecil untuk perlu ditindaklanjuti
- Urgent fix — semua keluhan negatif harus selalu diperbaiki secepat mungkin
- Amplify — isu yang mulai populer layak digencarkan ke publik yang lebih luas
+ Management review — low frequency + severe: sedikit tapi berbahaya (reputasi/legal)
@why
Matriks slide: low frequency + severe (safety concern) → management review. Frekuensi ≠ severity — isu safety jarang tetap butuh eskalasi manajemen (potensi recall, legal, reputasi).
"Urgent fix" untuk high frequency + negative (masalah luas dan aktif); mengabaikan karena jumlah kecil persis @trap "ukuran kata = kepentingan"; amplify untuk asosiasi positif.
@end

@q 7 :: w7-assoc :: w7-listening-matrix
45 komplain "kirim lambat" dalam seminggu, banyak komentar cinta "local brand I trust", dan 8 keluhan "mahal tanpa promo". Pasangan issue → action yang benar menurut matriks:
- Kirim lambat → management review; local trust → urgent fix; mahal → abaikan
+ Kirim lambat → urgent fix; local trust → amplify message; mahal → communicate value
- Semua yang negatif → urgent fix, semua yang positif → management review
- Kirim lambat → amplify; local trust → fix; mahal → reposition arsitektur harga
@why
Kirim lambat = high frequency + negative (many complaints) → urgent fix. "Local brand I trust" = positive association (love/trust/pride) → amplify message. "Mahal tanpa promo" = tension persepsi nilai → communicate value proposition (dengan opsi reposition arsitektur harga bila kronis).
Opsi lain menukar kotak matriks — amplifier untuk keluhan atau fix untuk pujian jelas membalik logika matriks.
@end

@q 7 :: w7-assoc :: w7-bam
Dalam Brand Association Map slide, kata-kata "honest, credible, safe, consistent" membentuk cluster:
- Innovation
- Performance
- Community
+ Trust
@why
BAM slide: Innovation (technology, creativity, modern, smart), Performance (quality, reliable, efficient, results), Trust (honest, credible, safe, consistent), Community (engagement, belonging, support, loyalty).
Honest/credible/safe/consistent persis daftar kata cluster Trust — hafal pasangan kata-cluster ini sering keluar.
@end

@q 7 :: w7-assoc :: w7-bam, w7-network
Cluster network "kemasan + pecah" (produk sering sampai rusak) paling tepat dibaca sebagai ancaman pada cluster BAM mana, dan responsnya?
- Ancaman Community — respond with reposition pesan komunitas lokal
- Bukan ancaman cluster mana pun — itu masalah logistik, bukan asosiasi brand
- Ancaman Innovation — respond with amplify inovasi kemasan terbarunya
+ Ancaman Performance & Trust — respond with fix (redesign kemasan + QC ekspedisi)
@why
Kemasan pecah menggagalkan asosiasi "reliable" (Performance) dan menggerus kepercayaan (Trust — quality risk). Respons: FIX — perbaikan fisik (redesign kemasan + QC) adalah urgent fix dari matriks, karena keunggulan produk jadi percuma kalau barang sampai rusak.
"Masalah logistik bukan asosiasi brand" salah — asosiasi terbentuk dari pengalaman nyata konsumen, dan "pecah" justru nempel di benak mereka; amplify untuk asosiasi positif, bukan masalah.
@end
