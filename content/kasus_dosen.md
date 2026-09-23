@week 9 :: Studi Kasus :: Soal kasus bergaya ujian — kerjakan di kertas dulu, baru buka pembahasan.
############################################################
@topic es-dosen :: Latihan dosen (bocoran UTS) :: Soal essay hitung PERSIS dari form latihan dosen — kedai kopi (sentiment & negative ratio) dan Chitosi (RFM dengan ranges).
@intro
- Dua soal ini diambil verbatim dari form "Preparation Exercise for Mid-Term Exam (Brand Analytics) — Essay". Pola UTS kemungkinan besar sama: dataset di gambar → hitung → klasifikasi → strategi.
- Kedai kopi: beri rating 1–5 per komentar → % negatif/netral/positif → klasifikasi ke ≥3 dimensi → negative ratio → 2 strategi untuk dimensi terburuk.
- Chitosi: Recency dari reference date → RANGES (interval sama lebar) untuk R, F, M → skor 1–5 → kode RFM → segmen pakai kriteria dosen → 1 segmen prioritas + persona + 3 program.
- Beda dengan workshop NusaBean: dosen minta "buatlah ranges" → pakai interval sama lebar (max − min)/5, BUKAN ranking quintile. Tulis range-nya eksplisit di jawaban.
- Kriteria segmen dosen tidak mencakup semua kombinasi skor. Customer yang tidak masuk kriteria mana pun: tulis "tidak masuk 5 kategori" + usulkan label (mis. Need Attention / New Customer) dengan alasan — itu poin plus, bukan kesalahan.
- Rating dari teks itu subjektif: yang dinilai adalah ATURAN yang konsisten dan ditulis (mis. 5 = semua positif kata kuat, 4 = positif tapi "cukup/masih", 3 = campuran/datar, 2 = negatif ringan, 1 = negatif kuat).
@formula dsn-nr :: Negative ratio per dimensi :: NR = \dfrac{\text{Negatif}}{\text{Positif} + \text{Negatif}} \times 100\%
@vars
NR :: porsi sebutan negatif di antara semua sebutan yang bernada (netral tidak dihitung). Makin tinggi → makin bermasalah
\text{Negatif} :: jumlah komentar yang menyebut dimensi itu secara negatif
\text{Positif} :: jumlah komentar yang menyebut dimensi itu secara positif
@formula dsn-range :: Ranges interval sama lebar :: w = \dfrac{\max - \min}{5} \qquad \text{kelas } i:\; [\min + (i-1)w,\; \min + i\,w)
@vars
w :: lebar tiap range (5 kelas untuk skor 1–5)
\max, \min :: nilai terbesar dan terkecil variabel itu di dataset
\text{Recency} :: kelas dengan HARI PALING SEDIKIT dapat skor 5 (dibalik)
\text{Frequency, Monetary} :: kelas dengan nilai PALING BESAR dapat skor 5
@formula dsn-pct :: Persentase sentimen :: \%\text{negatif} = \dfrac{\#\,\text{rating } 1\text{–}2}{n} \times 100\% \qquad \%\text{netral} = \dfrac{\#\,\text{rating } 3}{n} \qquad \%\text{positif} = \dfrac{\#\,\text{rating } 4\text{–}5}{n}
@vars
n :: jumlah komentar (kedai kopi: 15)
\text{rating } 1\text{–}2 :: negatif; rating 3 = netral; rating 4–5 = positif (rating rule W2)
@trap Negative ratio bukan % dari semua komentar :: Pembaginya hanya komentar yang MENYEBUT dimensi itu dengan nada positif/negatif (seperti soal PG no. 47: Service Speed 16/(9+16) = 64%). Membagi dengan 15 komentar akan membuat dimensi yang jarang disebut terlihat baik.
@trap Ranges ≠ quintile ranking :: Soal Chitosi bilang "buatlah ranges" → interval sama lebar dari min–max. Kalau pakai ranking (seperti workshop NusaBean) hasil skor bisa beda. Tulis metode yang dipakai secara eksplisit.
@trap Kriteria segmen dosen bisa tumpang tindih & bolong :: Cek berurutan: Champions → Loyal → Potential Loyalist → At Risk → Hibernating. C36 (5,4,3) gagal Champions (M=3) tapi masuk Loyal. C24, C26, C33, C40 tidak masuk satu pun — sebutkan & beri label tambahan.

@example Kedai kopi: 15 ulasan → rating → negative ratio → strategi :: Latihan dosen · Essay UTS
@soal
Perhatikan dataset ulasan kedai kopi berikut (unit of analysis: review/post, sumber publik):
| review_id | date | platform | review_text |
| RV-01 | 11/08/2026 | Google Reviews | Kopinya terasa fresh dan aromanya kuat. Baristanya juga ramah. |
| RV-02 | 18/06/2026 | Instagram | Tempatnya nyaman, tetapi waktu tunggunya agak lama saat ramai. |
| RV-03 | 26/07/2026 | Shopee | Pesanan sampai dengan aman. Rasa latte-nya lembut dan tidak terlalu manis. |
| RV-04 | 23/05/2026 | Google Reviews | Kurang sesuai ekspektasi, minuman sudah tidak terlalu hangat ketika diterima. |
| RV-05 | 02/08/2026 | Instagram | Suka dengan suasananya. Kopinya bold dan pelayanan cukup cepat. |
| RV-06 | 09/06/2026 | Tokopedia | Packaging lumayan aman, hanya saja rasanya menurut saya biasa saja. |
| RV-07 | 14/07/2026 | Google Reviews | Pelayanannya sigap dan pesanannya sesuai. Harga juga masih reasonable. |
| RV-08 | 17/05/2026 | X | Kecewa karena pesanan datang terlambat dan salah satu item tumpah. |
| RV-09 | 19/08/2026 | Shopee | Kopi dikemas dengan baik. Rasanya cukup balanced dan enak diminum dingin. |
| RV-10 | 29/06/2026 | Google Reviews | Salah satu coffee shop yang menurut saya konsisten. Pelayanannya juga menyenangkan. |
| RV-11 | 07/07/2026 | Instagram | Rasanya terlalu manis untuk selera saya dan respons admin cukup lambat. |
| RV-12 | 29/05/2026 | Tokopedia | Barang tiba lebih cepat dari perkiraan. Kondisi paket masih sangat baik. |
| RV-13 | 07/08/2026 | Google Reviews | Overall cukup nyaman. Menu cukup banyak, tetapi beberapa pilihan terasa standar. |
| RV-14 | 13/06/2026 | Shopee | Packing-nya detail dan botolnya aman. Kopinya punya aroma yang menarik. |
| RV-15 | 31/07/2026 | X | Pelayanan kurang terorganisir ketika sedang ramai. Saya harus menunggu cukup lama. |
1. Berikan rating untuk setiap komentar (skala 1 = paling buruk sampai 5 = paling baik).
2. Kalkulasikan persentase jumlah rating yang tergolong negatif, netral, serta positif.
3. Klasifikasikan komentar ke dalam minimal tiga dimensi berbeda, dan hitung negative ratio.
4. Rumuskan dua strategi untuk mengatasi masalah utama kedai kopi (dimensi dengan negative ratio tertinggi).
@step Tulis aturan rating dulu :: Rating dari teks itu interpretasi — tulis aturannya supaya konsisten dan bisa dinilai. :: 
| Rating | Aturan |
| 5 | semua aspek positif, kata kuat (fresh, lembut, konsisten, sangat baik) |
| 4 | positif tapi moderat ("cukup", "masih") |
| 3 | campuran positif + negatif, atau datar ("biasa saja", "standar") |
| 2 | negatif ringan ("kurang", "cukup lambat") |
| 1 | negatif kuat ("kecewa", terlambat + tumpah) |
@step (1) Rating tiap komentar :: Terapkan aturan ke tiap review; tulis kata kunci yang jadi alasan.
| review_id | Rating | Alasan |
| RV-01 | 5 | kata kuat: fresh, kuat, ramah |
| RV-02 | 3 | campuran: nyaman vs lama |
| RV-03 | 5 | semua positif |
| RV-04 | 2 | negatif ringan: kurang sesuai |
| RV-05 | 4 | positif tapi 'cukup' |
| RV-06 | 3 | datar: biasa saja |
| RV-07 | 4 | positif tapi 'masih' |
| RV-08 | 1 | negatif kuat: kecewa, tumpah |
| RV-09 | 4 | positif, 'cukup' |
| RV-10 | 5 | semua positif |
| RV-11 | 2 | dua keluhan |
| RV-12 | 5 | positif kuat |
| RV-13 | 3 | campuran/datar |
| RV-14 | 5 | semua positif |
| RV-15 | 2 | keluhan layanan |
@step (2) Hitung % sentimen :: Positif = rating 4–5, netral = 3, negatif = 1–2 (rating rule W2). :: \text{Positif} = \tfrac{8}{15} = 53.33\% \quad \text{Netral} = \tfrac{3}{15} = 20\% \quad \text{Negatif} = \tfrac{4}{15} = 26.67\%
Positif: RV-01, 03, 05, 07, 09, 10, 12, 14 (8). Netral: RV-02, 06, 13 (3). Negatif: RV-04, 08, 11, 15 (4).
@step (3a) Klasifikasi ke dimensi :: Satu komentar bisa menyebut lebih dari satu dimensi (aspect-based, W7). Tandai + / − / 0 tiap dimensi yang disebut.
| review_id | Dimensi & nada | Aspek negatif / bernada |
| RV-01 | Produk +, Pelayanan + | 0 / 2 |
| RV-02 | Suasana +, Pelayanan − | 1 / 2 |
| RV-03 | Pengiriman & Kemasan +, Produk + | 0 / 2 |
| RV-04 | Pengiriman & Kemasan − | 1 / 1 |
| RV-05 | Suasana +, Produk +, Pelayanan + | 0 / 3 |
| RV-06 | Pengiriman & Kemasan +, Produk 0 | 0 / 1 |
| RV-07 | Pelayanan +, Harga + | 0 / 2 |
| RV-08 | Pengiriman & Kemasan − | 1 / 1 |
| RV-09 | Pengiriman & Kemasan +, Produk + | 0 / 2 |
| RV-10 | Produk +, Pelayanan + | 0 / 2 |
| RV-11 | Produk −, Pelayanan − | 2 / 2 |
| RV-12 | Pengiriman & Kemasan + | 0 / 1 |
| RV-13 | Suasana +, Produk 0 | 0 / 1 |
| RV-14 | Pengiriman & Kemasan +, Produk + | 0 / 2 |
| RV-15 | Pelayanan − | 1 / 1 |
@step (3b) Negative ratio per dimensi :: NR = Negatif / (Positif + Negatif). Netral (0) tidak masuk pembagi.
| Dimensi | Positif | Negatif | Netral | Negative ratio |
| Pelayanan | 4 | 3 | 0 | 3/7 = 42.9% |
| Pengiriman & Kemasan | 5 | 2 | 0 | 2/7 = 28.6% |
| Produk | 6 | 1 | 2 | 1/7 = 14.3% |
| Suasana | 3 | 0 | 0 | 0/3 = 0.0% |
| Harga | 1 | 0 | 0 | 0/1 = 0.0% |
@step (3c) Tentukan masalah utama :: Negative ratio tertinggi = Pelayanan (42.9%): waktu tunggu saat ramai (RV-02, RV-15) dan respons admin lambat (RV-11). Kedua tertinggi Pengiriman & Kemasan (28.6%): terlambat, tumpah, tidak hangat. :: NR_{\text{Pelayanan}} = \tfrac{3}{3+4} = 42.9\% \;>\; NR_{\text{Pengiriman}} = \tfrac{2}{2+5} = 28.6\%
@step (4) Strategi 1 — kapasitas jam ramai :: Masalah muncul "saat ramai" → tambah barista/shift di jam puncak (lihat pola jam dari data transaksi), sistem antrean/pre-order via app atau QR, target waktu tunggu (mis. ≤ 10 menit) dan ukur tiap minggu.
@step (4) Strategi 2 — SLA respons admin & service recovery :: Tetapkan SLA balas chat (mis. ≤ 15 menit) dengan auto-reply + template FAQ, latih admin, dan beri voucher permintaan maaf untuk pelanggan yang komplain. Pantau negative ratio Pelayanan bulanan sebagai KPI (validasi manual sampel komentar baru, W7).
@answer (1) Rating: RV-01 5, RV-02 3, RV-03 5, RV-04 2, RV-05 4, RV-06 3, RV-07 4, RV-08 1, RV-09 4, RV-10 5, RV-11 2, RV-12 5, RV-13 3, RV-14 5, RV-15 2. (2) Positif 8/15 = 53.33%, netral 3/15 = 20%, negatif 4/15 = 26.67%. (3) Dimensi: Pelayanan (4+, 3−) NR 42.9%; Pengiriman & Kemasan (5+, 2−) NR 28.6%; Produk (6+, 1−, 2 netral) NR 14.3%; Suasana (3+) 0%; Harga (1+) 0%. (4) Masalah utama Pelayanan: strategi (a) tambah kapasitas & sistem antrean/pre-order di jam ramai dengan target waktu tunggu, (b) SLA respons admin + service recovery, dipantau lewat negative ratio bulanan. Catatan: rating hasil interpretasi — selama aturannya ditulis dan konsisten, jawaban sedikit berbeda tetap bisa diterima.
@uses dsn-pct, dsn-nr
@check LK['kopi']['pos'] == 8
@check LK['kopi']['neu'] == 3
@check LK['kopi']['neg'] == 4
@check 8/15*100 ~ 53.33
@check 4/15*100 ~ 26.67
@check LK['kopi']['dims']['Pelayanan']['nr']*100 ~ 42.9
@check LK['kopi']['dims']['Pengiriman & Kemasan']['nr']*100 ~ 28.6
@check LK['kopi']['dims']['Produk']['nr']*100 ~ 14.3
@check max(LK['kopi']['dims'], key=lambda d: LK['kopi']['dims'][d]['nr']) == 'Pelayanan'
@end

@example Chitosi 2025: Recency → ranges → kode RFM → segmen → persona :: Latihan dosen · Essay UTS
@soal
Data penjualan produk makanan ringan "Chitosi" tahun 2025:
| Customer | Pembelian terakhir | Jumlah transaksi | Total belanja |
| C21 | 08/11/2025 | 6 | Rp3.450.000 |
| C22 | 18/01/2025 | 2 | Rp1.250.000 |
| C23 | 27/10/2025 | 11 | Rp6.200.000 |
| C24 | 03/06/2025 | 4 | Rp2.350.000 |
| C25 | 14/11/2025 | 8 | Rp4.650.000 |
| C26 | 22/08/2025 | 3 | Rp1.750.000 |
| C27 | 06/12/2025 | 9 | Rp5.150.000 |
| C28 | 11/02/2025 | 7 | Rp3.850.000 |
| C29 | 19/09/2025 | 5 | Rp2.600.000 |
| C30 | 29/11/2025 | 12 | Rp6.750.000 |
| C31 | 16/05/2025 | 1 | Rp650.000 |
| C32 | 04/10/2025 | 7 | Rp3.200.000 |
| C33 | 23/07/2025 | 5 | Rp2.950.000 |
| C34 | 09/12/2025 | 10 | Rp5.600.000 |
| C35 | 17/03/2025 | 3 | Rp1.450.000 |
| C36 | 26/10/2025 | 8 | Rp4.300.000 |
| C37 | 02/01/2025 | 9 | Rp4.750.000 |
| C38 | 13/12/2025 | 4 | Rp2.050.000 |
| C39 | 30/09/2025 | 6 | Rp3.700.000 |
| C40 | 21/06/2025 | 2 | Rp1.100.000 |
(Kolom "Catatan Perilaku" di soal asli dipakai untuk persona — lihat langkah persona.)
Bagian A. Hitung Recency (hari) tiap pelanggan dengan reference date 31 Desember 2025. (a) Buat ranges untuk R, F, M. (b) Beri skor 1–5 (5 = terbaik: paling baru/sering/tinggi). (c) Bentuk kode RFM tiap pelanggan.
Bagian B. Kelompokkan pelanggan: Champions (R≥4, F≥4, M≥4) · Loyal Customers (F≥4, M≥3, R≥3) · Potential Loyalist (R≥4, F 2–3, M 2–3) · At Risk (R≤2, F≥3, M≥3) · Hibernating (R≤2, F≤2, M≤2).
Bagian C. Tentukan 1 segmen prioritas, buat customer persona-nya, dan rancang minimal 3 program pemasaran spesifik.
@step A. Recency (hari) :: R = 31/12/2025 − pembelian terakhir. Hitung sisa hari di bulan itu + hari bulan-bulan setelahnya. Contoh C21: 8 Nov → 30 − 8 = 22 hari sisa November + 31 Desember = 53.
| Customer | Terakhir | Recency |
| C21 | 08/11/2025 | 53 |
| C22 | 18/01/2025 | 347 |
| C23 | 27/10/2025 | 65 |
| C24 | 03/06/2025 | 211 |
| C25 | 14/11/2025 | 47 |
| C26 | 22/08/2025 | 131 |
| C27 | 06/12/2025 | 25 |
| C28 | 11/02/2025 | 323 |
| C29 | 19/09/2025 | 103 |
| C30 | 29/11/2025 | 32 |
| C31 | 16/05/2025 | 229 |
| C32 | 04/10/2025 | 88 |
| C33 | 23/07/2025 | 161 |
| C34 | 09/12/2025 | 22 |
| C35 | 17/03/2025 | 289 |
| C36 | 26/10/2025 | 66 |
| C37 | 02/01/2025 | 363 |
| C38 | 13/12/2025 | 18 |
| C39 | 30/09/2025 | 92 |
| C40 | 21/06/2025 | 193 |
@step A(a). Ranges (interval sama lebar) :: 5 kelas dengan lebar w = (max − min)/5. :: w_R = \tfrac{363 - 18}{5} = 69 \quad w_F = \tfrac{12 - 1}{5} = 2.2 \quad w_M = \tfrac{6.750.000 - 650.000}{5} = 1.220.000
| Skor | Recency (hari) | Frequency (transaksi) | Monetary (Rp) |
| 5 | 18–86 | 10–12 | Rp5.530.000–Rp6.750.000 |
| 4 | 87–155 | 8–9 | Rp4.310.000–Rp5.529.999 |
| 3 | 156–224 | 6–7 | Rp3.090.000–Rp4.309.999 |
| 2 | 225–293 | 4–5 | Rp1.870.000–Rp3.089.999 |
| 1 | 294–363 | 1–3 | Rp650.000–Rp1.869.999 |
@step A(b)(c). Skor & kode RFM :: Recency dibalik (hari sedikit = 5); F & M langsung (besar = 5). Kode = R, F, M ditempel.
| Customer | R hari | F | M | Skor R | Skor F | Skor M | Kode |
| C21 | 53 | 6 | Rp3.450.000 | 5 | 3 | 3 | 533 |
| C22 | 347 | 2 | Rp1.250.000 | 1 | 1 | 1 | 111 |
| C23 | 65 | 11 | Rp6.200.000 | 5 | 5 | 5 | 555 |
| C24 | 211 | 4 | Rp2.350.000 | 3 | 2 | 2 | 322 |
| C25 | 47 | 8 | Rp4.650.000 | 5 | 4 | 4 | 544 |
| C26 | 131 | 3 | Rp1.750.000 | 4 | 1 | 1 | 411 |
| C27 | 25 | 9 | Rp5.150.000 | 5 | 4 | 4 | 544 |
| C28 | 323 | 7 | Rp3.850.000 | 1 | 3 | 3 | 133 |
| C29 | 103 | 5 | Rp2.600.000 | 4 | 2 | 2 | 422 |
| C30 | 32 | 12 | Rp6.750.000 | 5 | 5 | 5 | 555 |
| C31 | 229 | 1 | Rp650.000 | 2 | 1 | 1 | 211 |
| C32 | 88 | 7 | Rp3.200.000 | 4 | 3 | 3 | 433 |
| C33 | 161 | 5 | Rp2.950.000 | 3 | 2 | 2 | 322 |
| C34 | 22 | 10 | Rp5.600.000 | 5 | 5 | 5 | 555 |
| C35 | 289 | 3 | Rp1.450.000 | 2 | 1 | 1 | 211 |
| C36 | 66 | 8 | Rp4.300.000 | 5 | 4 | 3 | 543 |
| C37 | 363 | 9 | Rp4.750.000 | 1 | 4 | 4 | 144 |
| C38 | 18 | 4 | Rp2.050.000 | 5 | 2 | 2 | 522 |
| C39 | 92 | 6 | Rp3.700.000 | 4 | 3 | 3 | 433 |
| C40 | 193 | 2 | Rp1.100.000 | 3 | 1 | 1 | 311 |
@step B. Segmentasi (cek berurutan) :: Uji Champions dulu, lalu Loyal, Potential Loyalist, At Risk, Hibernating. C36 (543) gagal Champions karena M = 3, masuk Loyal.
| Segmen | Customer | Jumlah | Total belanja | % belanja |
| Champions | C23, C25, C27, C30, C34 | 5 | Rp28.350.000 | 41.8% |
| Loyal Customers | C36 | 1 | Rp4.300.000 | 6.3% |
| Potential Loyalist | C21, C29, C32, C38, C39 | 5 | Rp15.000.000 | 22.1% |
| At Risk | C28, C37 | 2 | Rp8.600.000 | 12.7% |
| Hibernating | C22, C31, C35 | 3 | Rp3.350.000 | 4.9% |
| Tidak masuk kriteria | C24, C26, C33, C40 | 4 | Rp8.150.000 | 12.0% |
@step B. Customer yang tidak masuk kriteria :: C24 (322), C33 (322), C40 (311) punya R = 3 — tidak ada kategori dosen untuk R = 3 dengan F < 4 → usulkan "Need Attention". C26 (411) baru beli tapi F = 1 (bukan 2–3) → usulkan "New Customer / Promising". Menyebut ini eksplisit menunjukkan kamu membaca kriteria dengan teliti.
@step C. Pilih segmen prioritas :: At Risk (C28, C37): rata-rata belanja Rp4.300.000 per orang (jauh di atas rata-rata semua pelanggan Rp3.387.500) dan frekuensi historis 7–9 kali, tapi sudah 323 & 363 hari tidak beli. Severity tinggi (nilai besar yang hilang) × urgency tinggi (makin lama makin sulit kembali) → prioritas utama (W6 severity-urgency). Champions penting tapi sedang sehat; alternatif yang juga bisa dibela: Potential Loyalist (5 orang, 22.1% belanja) sebagai sumber pertumbuhan. :: \bar M_{\text{At Risk}} = \tfrac{8.600.000}{2} = 4.300.000 \qquad \bar M_{\text{semua}} = \tfrac{67.750.000}{20} = 3.387.500
@step C. Customer persona — "Pak Rudi, pelanggan setia yang menghilang" :: Demografi (asumsi, diberi label): 30–40 tahun, pekerja kantoran, membeli untuk stok rumah/kantor. Perilaku: dulu 7–9 transaksi setahun, belanja ±Rp4 juta, lalu berhenti hampir setahun (catatan: "riwayat transaksi cukup tinggi … tidak membeli lagi selama beberapa bulan"). Motivasi: kepraktisan & rasa yang sudah dikenal. Pain point: kemungkinan beralih ke kompetitor/varian lain, tidak ada alasan untuk kembali, tidak dihubungi. Channel: WhatsApp & email (data transaksi CRM).
@step C. Tiga program pemasaran spesifik :: 1) Win-back personal "Kangen Chitosi": pesan WhatsApp personal + voucher 20% berlaku 14 hari untuk produk yang dulu paling sering dibeli. 2) Survey singkat berhadiah (1 menit) untuk tahu kenapa berhenti → umpan balik ke produk/harga. 3) Bundling stok bulanan (subscription) dengan free ongkir agar pembelian kembali rutin; KPI: reaktivasi ≥ 1 dari 2 pelanggan dalam 30 hari, lalu pantau perpindahan segmen bulanan.
@answer Bagian A: Recency (hari) C21 53, C22 347, C23 65, C24 211, C25 47, C26 131, C27 25, C28 323, C29 103, C30 32, C31 229, C32 88, C33 161, C34 22, C35 289, C36 66, C37 363, C38 18, C39 92, C40 193. Ranges (lebar sama): R lebar 69 (18–86 = 5 … 294–363 = 1), F lebar 2.2 (10–12 = 5, 8–9 = 4, 6–7 = 3, 4–5 = 2, 1–3 = 1), M lebar Rp1.220.000 (≥ Rp5.530.000 = 5 … < Rp1.870.000 = 1). Kode: C21 533, C22 111, C23 555, C24 322, C25 544, C26 411, C27 544, C28 133, C29 422, C30 555, C31 211, C32 433, C33 322, C34 555, C35 211, C36 543, C37 144, C38 522, C39 433, C40 311. Bagian B: Champions C23, C25, C27, C30, C34 (41.8% belanja); Loyal C36; Potential Loyalist C21, C29, C32, C38, C39; At Risk C28, C37; Hibernating C22, C31, C35; tidak masuk kriteria C24, C33, C40 (usul Need Attention) dan C26 (usul New Customer). Bagian C: prioritas At Risk (rata-rata Rp4,3 juta/orang, 323–363 hari tidak aktif) → persona "Pak Rudi" + program win-back personal, survey berhadiah, bundling langganan.
@uses dsn-range, w5-recency, w5-code, w6-severity-urgency
@check LK['R']['width'] ~ 69.0
@check LK['F']['width'] ~ 2.2
@check LK['M']['width'] ~ 1220000
@check [r['R'] for r in LK['rows']] == [53,347,65,211,47,131,25,323,103,32,229,88,161,22,289,66,363,18,92,193]
@check [r['code'] for r in LK['rows']] == ['533','111','555','322','544','411','544','133','422','555','211','433','322','555','211','543','144','522','433','311']
@check sorted(LK['seg']['Champions']['ids']) == ['C23','C25','C27','C30','C34']
@check sorted(LK['seg']['At Risk']['ids']) == ['C28','C37']
@check LK['seg']['At Risk']['M']/2 ~ 4300000
@check LK['totalM']/20 ~ 3387500
@check LK['seg']['Champions']['M']/LK['totalM']*100 ~ 41.8
@check LK['seg']['Potential Loyalist']['M']/LK['totalM']*100 ~ 22.1
@end
