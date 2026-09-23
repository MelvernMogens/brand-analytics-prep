@week 9 :: Studi Kasus :: Soal kasus bergaya ujian — kerjakan di kertas dulu, baru buka pembahasan.
############################################################
@topic es-dosen :: Latihan dosen (bocoran UTS) :: Soal essay hitung PERSIS dari form latihan dosen — kedai kopi (sentiment & negative ratio) dan Chitosi (RFM kuintil tanpa kalkulator).
@intro
- Dua soal ini diambil verbatim dari form "Preparation Exercise for Mid-Term Exam (Brand Analytics) — Essay". Pola UTS kemungkinan besar sama: dataset di gambar → hitung → klasifikasi → strategi.
- Kedai kopi: beri rating 1–5 per komentar → % negatif/netral/positif → klasifikasi ke ≥3 dimensi → negative ratio → 2 strategi untuk dimensi terburuk.
- Chitosi: Recency dari reference date → urutkan & bagi 5 kelompok sama banyak (KUINTIL) untuk R, F, M → tulis ranges tiap kelompok → skor 1–5 → kode RFM → segmen pakai kriteria dosen → 1 segmen prioritas + persona + 3 program.
- UTS tanpa kalkulator → pakai kuintil: cukup MENGURUTKAN dan memotong tiap n/5 orang (20 pelanggan = 4 orang per skor). Tidak ada pembagian desimal. Ranges = batas bawah–atas tiap kelompok hasil urutan.
- Recency tanpa kalkulator: (hari di bulan itu − tanggal) + sisa hari bulan-bulan setelahnya (tabel di langkah A). Persentase di soal kopi: tulis pecahan + perkiraan (8/15 ≈ 53%, 3/7 ≈ 43%).
- Kriteria segmen dosen tidak mencakup semua kombinasi skor. Customer yang tidak masuk kriteria mana pun: tulis "tidak masuk 5 kategori" + usulkan label (mis. Need Attention / New Customer) dengan alasan — itu poin plus, bukan kesalahan.
- Rating dari teks itu subjektif: yang dinilai adalah ATURAN yang konsisten dan ditulis (mis. 5 = semua positif kata kuat, 4 = positif tapi "cukup/masih", 3 = campuran/datar, 2 = negatif ringan, 1 = negatif kuat).
@formula dsn-nr :: Negative ratio per dimensi :: NR = \dfrac{\text{Negatif}}{\text{Positif} + \text{Negatif}} \times 100\%
@vars
NR :: porsi sebutan negatif di antara semua sebutan yang bernada (netral tidak dihitung). Makin tinggi → makin bermasalah
\text{Negatif} :: jumlah komentar yang menyebut dimensi itu secara negatif
\text{Positif} :: jumlah komentar yang menyebut dimensi itu secara positif
@formula dsn-quint :: Skor kuintil (urutkan, potong tiap n/5) :: \text{isi per skor} = \dfrac{n}{5} \qquad \text{posisi } 1..\tfrac{n}{5} \to 5,\;\; \tfrac{n}{5}{+}1..\tfrac{2n}{5} \to 4,\;\; \dots,\;\; \text{terakhir} \to 1
@vars
n :: jumlah pelanggan (Chitosi: 20 → 4 orang per skor; 15 → 3; 10 → 2)
\text{posisi} :: urutan setelah disortir dari TERBAIK: Recency hari paling sedikit dulu; Frequency & Monetary nilai terbesar dulu
\text{kembar} :: nilai sama di batas potongan → keduanya ikut kelompok yang lebih tinggi (rank sama, seperti RANK.EQ di workshop)
\text{ranges} :: batas bawah–atas nilai di tiap kelompok (ditulis setelah mengurutkan)
@formula dsn-pct :: Persentase sentimen :: \%\text{negatif} = \dfrac{\#\,\text{rating } 1\text{–}2}{n} \times 100\% \qquad \%\text{netral} = \dfrac{\#\,\text{rating } 3}{n} \qquad \%\text{positif} = \dfrac{\#\,\text{rating } 4\text{–}5}{n}
@vars
n :: jumlah komentar (kedai kopi: 15)
\text{rating } 1\text{–}2 :: negatif; rating 3 = netral; rating 4–5 = positif (rating rule W2)
@trap Negative ratio bukan % dari semua komentar :: Pembaginya hanya komentar yang MENYEBUT dimensi itu dengan nada positif/negatif (seperti soal PG no. 47: Service Speed 16/(9+16) = 64%). Membagi dengan 15 komentar akan membuat dimensi yang jarang disebut terlihat baik.
@trap Jangan lupa membalik Recency :: Recency: hari PALING SEDIKIT = skor 5. Frequency & Monetary: nilai PALING BESAR = skor 5. Salah arah satu variabel = semua kode & segmen ikut salah. Tulis juga metode (kuintil, 4 orang per skor, kembar ikut atas) di awal jawaban.
@trap Kriteria segmen dosen bisa tumpang tindih & bolong :: Cek berurutan: Champions → Loyal → Potential Loyalist → At Risk → Hibernating. C32 (343) gagal Champions (R = 3) tapi masuk Loyal. C26, C29, C39 tidak masuk satu pun — sebutkan & beri label tambahan.

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

@example Chitosi 2025: Recency → kuintil → kode RFM → segmen → persona (TANPA kalkulator) :: Latihan dosen · Essay UTS
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
@step A. Recency tanpa kalkulator: tabel "sisa hari setelah bulan itu" :: Hafalkan/tulis dulu tabel ini di kertas (cukup jumlahkan hari bulan-bulan setelahnya). Lalu R = (jumlah hari bulan itu − tanggal) + angka tabel. Contoh C21, 8 Nov: (30 − 8) + 31 = 22 + 31 = 53.
| Bulan | Jml hari | Sisa s.d. 31 Des |
| Jan | 31 | 334 |
| Feb | 28 | 306 |
| Mar | 31 | 275 |
| Apr | 30 | 245 |
| Mei | 31 | 214 |
| Jun | 30 | 184 |
| Jul | 31 | 153 |
| Agu | 31 | 122 |
| Sep | 30 | 92 |
| Okt | 31 | 61 |
| Nov | 30 | 31 |
| Des | 31 | 0 |
@step A. Recency tiap pelanggan :: Terapkan rumus di atas ke tiap baris — hanya pengurangan & penjumlahan kecil.
| Cust. | Terakhir | Hitungan | R |
| C21 | 08/11/2025 | (30 − 8) + 31 | 53 |
| C22 | 18/01/2025 | (31 − 18) + 334 | 347 |
| C23 | 27/10/2025 | (31 − 27) + 61 | 65 |
| C24 | 03/06/2025 | (30 − 3) + 184 | 211 |
| C25 | 14/11/2025 | (30 − 14) + 31 | 47 |
| C26 | 22/08/2025 | (31 − 22) + 122 | 131 |
| C27 | 06/12/2025 | (31 − 6) + 0 | 25 |
| C28 | 11/02/2025 | (28 − 11) + 306 | 323 |
| C29 | 19/09/2025 | (30 − 19) + 92 | 103 |
| C30 | 29/11/2025 | (30 − 29) + 31 | 32 |
| C31 | 16/05/2025 | (31 − 16) + 214 | 229 |
| C32 | 04/10/2025 | (31 − 4) + 61 | 88 |
| C33 | 23/07/2025 | (31 − 23) + 153 | 161 |
| C34 | 09/12/2025 | (31 − 9) + 0 | 22 |
| C35 | 17/03/2025 | (31 − 17) + 275 | 289 |
| C36 | 26/10/2025 | (31 − 26) + 61 | 66 |
| C37 | 02/01/2025 | (31 − 2) + 334 | 363 |
| C38 | 13/12/2025 | (31 − 13) + 0 | 18 |
| C39 | 30/09/2025 | (30 − 30) + 92 | 92 |
| C40 | 21/06/2025 | (30 − 21) + 184 | 193 |
@step A(a). Metode: kuintil (5 kelompok sama banyak) :: 20 pelanggan ÷ 5 kelompok = 4 orang per kelompok. Urutkan dari TERBAIK ke terburuk, lalu potong tiap 4 orang: 4 teratas = skor 5, berikutnya = 4, dst. Tidak ada pembagian desimal. Kalau ada nilai KEMBAR di batas potongan, keduanya ikut kelompok yang lebih tinggi (rank sama) — tulis aturan ini di jawaban. :: \text{isi per kelompok} = \tfrac{n}{5} = \tfrac{20}{5} = 4 \text{ orang}
@step A(a). Urutkan Recency (hari paling sedikit = terbaik) :: Tip: untuk mengurutkan cukup lihat TANGGAL — makin dekat ke 31 Des makin baik. Tiap kelompok 4 orang.
| No | Cust. | Hari | Skor |
| 1 | C38 | 18 | 5 |
| 2 | C34 | 22 | 5 |
| 3 | C27 | 25 | 5 |
| 4 | C30 | 32 | 5 |
| 5 | C25 | 47 | 4 |
| 6 | C21 | 53 | 4 |
| 7 | C23 | 65 | 4 |
| 8 | C36 | 66 | 4 |
| 9 | C32 | 88 | 3 |
| 10 | C39 | 92 | 3 |
| 11 | C29 | 103 | 3 |
| 12 | C26 | 131 | 3 |
| 13 | C33 | 161 | 2 |
| 14 | C40 | 193 | 2 |
| 15 | C24 | 211 | 2 |
| 16 | C31 | 229 | 2 |
| 17 | C35 | 289 | 1 |
| 18 | C28 | 323 | 1 |
| 19 | C22 | 347 | 1 |
| 20 | C37 | 363 | 1 |
@step A(a). Urutkan Frequency (paling sering = terbaik) :: Ada nilai kembar di batas: F = 9 (C27 & C37) di posisi 4–5 → keduanya skor 5, jadi skor 5 berisi 5 orang dan skor 1 tinggal 3 orang. Kembar F = 7, 5, 3 juga pas di batas → ikut kelompok atas.
| No | Cust. | Transaksi | Skor |
| 1 | C30 | 12 | 5 |
| 2 | C23 | 11 | 5 |
| 3 | C34 | 10 | 5 |
| 4 | C27 | 9 | 5 |
| 5 | C37 | 9 | 5 |
| 6 | C25 | 8 | 4 |
| 7 | C36 | 8 | 4 |
| 8 | C28 | 7 | 4 |
| 9 | C32 | 7 | 4 |
| 10 | C21 | 6 | 3 |
| 11 | C39 | 6 | 3 |
| 12 | C29 | 5 | 3 |
| 13 | C33 | 5 | 3 |
| 14 | C24 | 4 | 2 |
| 15 | C38 | 4 | 2 |
| 16 | C26 | 3 | 2 |
| 17 | C35 | 3 | 2 |
| 18 | C22 | 2 | 1 |
| 19 | C40 | 2 | 1 |
| 20 | C31 | 1 | 1 |
@step A(a). Urutkan Monetary (belanja terbesar = terbaik) :: Tidak ada nilai kembar, jadi tepat 4 orang per skor.
| No | Cust. | Belanja | Skor |
| 1 | C30 | 6,75 jt | 5 |
| 2 | C23 | 6,2 jt | 5 |
| 3 | C34 | 5,6 jt | 5 |
| 4 | C27 | 5,15 jt | 5 |
| 5 | C37 | 4,75 jt | 4 |
| 6 | C25 | 4,65 jt | 4 |
| 7 | C36 | 4,3 jt | 4 |
| 8 | C28 | 3,85 jt | 4 |
| 9 | C39 | 3,7 jt | 3 |
| 10 | C21 | 3,45 jt | 3 |
| 11 | C32 | 3,2 jt | 3 |
| 12 | C33 | 2,95 jt | 3 |
| 13 | C29 | 2,6 jt | 2 |
| 14 | C24 | 2,35 jt | 2 |
| 15 | C38 | 2,05 jt | 2 |
| 16 | C26 | 1,75 jt | 2 |
| 17 | C35 | 1,45 jt | 1 |
| 18 | C22 | 1,25 jt | 1 |
| 19 | C40 | 1,1 jt | 1 |
| 20 | C31 | 0,65 jt | 1 |
@step A(a). Tulis ranges hasil kuintil :: Soal minta "buatlah ranges" → tulis batas bawah–atas tiap kelompok dari hasil urutan tadi.
| Skor | Recency (hari) | Frequency (transaksi) | Monetary |
| 5 | 18–32 | 9–12 | 5,15 jt – 6,75 jt |
| 4 | 47–66 | 7–8 | 3,85 jt – 4,75 jt |
| 3 | 88–131 | 5–6 | 2,95 jt – 3,7 jt |
| 2 | 161–229 | 3–4 | 1,75 jt – 2,6 jt |
| 1 | 289–363 | 1–2 | 0,65 jt – 1,45 jt |
@step A(b)(c). Skor & kode RFM :: Ambil skor dari tiga tabel urutan, tempel R-F-M jadi kode 3 digit (bukan dijumlah).
| Customer | R hari | F | M | Skor R | Skor F | Skor M | Kode |
| C21 | 53 | 6 | 3,45 jt | 4 | 3 | 3 | 433 |
| C22 | 347 | 2 | 1,25 jt | 1 | 1 | 1 | 111 |
| C23 | 65 | 11 | 6,2 jt | 4 | 5 | 5 | 455 |
| C24 | 211 | 4 | 2,35 jt | 2 | 2 | 2 | 222 |
| C25 | 47 | 8 | 4,65 jt | 4 | 4 | 4 | 444 |
| C26 | 131 | 3 | 1,75 jt | 3 | 2 | 2 | 322 |
| C27 | 25 | 9 | 5,15 jt | 5 | 5 | 5 | 555 |
| C28 | 323 | 7 | 3,85 jt | 1 | 4 | 4 | 144 |
| C29 | 103 | 5 | 2,6 jt | 3 | 3 | 2 | 332 |
| C30 | 32 | 12 | 6,75 jt | 5 | 5 | 5 | 555 |
| C31 | 229 | 1 | 0,65 jt | 2 | 1 | 1 | 211 |
| C32 | 88 | 7 | 3,2 jt | 3 | 4 | 3 | 343 |
| C33 | 161 | 5 | 2,95 jt | 2 | 3 | 3 | 233 |
| C34 | 22 | 10 | 5,6 jt | 5 | 5 | 5 | 555 |
| C35 | 289 | 3 | 1,45 jt | 1 | 2 | 1 | 121 |
| C36 | 66 | 8 | 4,3 jt | 4 | 4 | 4 | 444 |
| C37 | 363 | 9 | 4,75 jt | 1 | 5 | 4 | 154 |
| C38 | 18 | 4 | 2,05 jt | 5 | 2 | 2 | 522 |
| C39 | 92 | 6 | 3,7 jt | 3 | 3 | 3 | 333 |
| C40 | 193 | 2 | 1,1 jt | 2 | 1 | 1 | 211 |
@step B. Segmentasi (cek berurutan) :: Uji Champions dulu, lalu Loyal, Potential Loyalist, At Risk, Hibernating. Total belanja cukup dijumlah dalam juta.
| Segmen | Customer | Jumlah | Total belanja |
| Champions | C23, C25, C27, C30, C34, C36 | 6 | 32,65 jt |
| Loyal Customers | C32 | 1 | 3,2 jt |
| Potential Loyalist | C21, C38 | 2 | 5,5 jt |
| At Risk | C28, C33, C37 | 3 | 11,55 jt |
| Hibernating | C22, C24, C31, C35, C40 | 5 | 6,8 jt |
| Tidak masuk kriteria | C26, C29, C39 | 3 | 8,05 jt |
@step B. Customer yang tidak masuk kriteria :: C26 (322), C29 (332), C39 (333) semuanya R = 3 dengan F < 4 — tidak ada kategori dosen untuk kombinasi ini → usulkan label "Need Attention" (masih lumayan baru, frekuensi & belanja sedang, perlu didorong sebelum turun). Menyebut ini eksplisit menunjukkan kamu membaca kriteria dengan teliti.
@step C. Pilih segmen prioritas :: At Risk (C28, C33, C37): total 11,55 jt dari 3 orang ≈ 3,85 jt per orang, frekuensi historis 5–9 kali, tapi sudah 161–363 hari tidak beli. Severity tinggi (nilai besar yang hilang) × urgency tinggi (makin lama makin sulit kembali) → prioritas utama (W6 severity-urgency). Champions penting tapi sedang sehat; alternatif yang bisa dibela: Need Attention (3 orang, R = 3) sebelum mereka jatuh ke At Risk. :: \tfrac{11{,}55 \text{ jt}}{3} \approx 3{,}85 \text{ jt per orang}
@step C. Customer persona — "Pak Rudi, pelanggan setia yang menghilang" :: Demografi (asumsi, diberi label): 30–40 tahun, pekerja kantoran, membeli untuk stok rumah/kantor. Perilaku: dulu 5–9 transaksi setahun, belanja ±3–5 jt, lalu berhenti berbulan-bulan (catatan: "riwayat transaksi cukup tinggi … tidak membeli lagi selama beberapa bulan"). Motivasi: kepraktisan & rasa yang sudah dikenal. Pain point: kemungkinan beralih ke kompetitor/varian lain, tidak ada alasan untuk kembali, tidak dihubungi. Channel: WhatsApp & email (data transaksi CRM).
@step C. Tiga program pemasaran spesifik :: 1) Win-back personal "Kangen Chitosi": pesan WhatsApp personal + voucher 20% berlaku 14 hari untuk produk yang dulu paling sering dibeli. 2) Survey singkat berhadiah (1 menit) untuk tahu kenapa berhenti → umpan balik ke produk/harga. 3) Bundling stok bulanan (subscription) dengan free ongkir agar pembelian kembali rutin; KPI: minimal 1 dari 3 pelanggan aktif lagi dalam 30 hari, lalu pantau perpindahan segmen bulanan.
@answer Metode kuintil: 20 pelanggan → 4 orang per skor, nilai kembar ikut kelompok atas. Bagian A: Recency (hari) C21 53, C22 347, C23 65, C24 211, C25 47, C26 131, C27 25, C28 323, C29 103, C30 32, C31 229, C32 88, C33 161, C34 22, C35 289, C36 66, C37 363, C38 18, C39 92, C40 193. Ranges R: 5 = 18–32, 4 = 47–66, 3 = 88–131, 2 = 161–229, 1 = 289–363 hari; F: 5 = 9–12, 4 = 7–8, 3 = 5–6, 2 = 3–4, 1 = 1–2; M: 5 = 5,15–6,75 jt, 4 = 3,85–4,75 jt, 3 = 2,95–3,7 jt, 2 = 1,75–2,6 jt, 1 = 0,65–1,45 jt. Kode: C21 433, C22 111, C23 455, C24 222, C25 444, C26 322, C27 555, C28 144, C29 332, C30 555, C31 211, C32 343, C33 233, C34 555, C35 121, C36 444, C37 154, C38 522, C39 333, C40 211. Bagian B: Champions C23, C25, C27, C30, C34, C36; Loyal Customers C32; Potential Loyalist C21, C38; At Risk C28, C33, C37; Hibernating C22, C24, C31, C35, C40; tidak masuk kriteria (usul Need Attention) C26, C29, C39. Bagian C: prioritas At Risk (±3,85 jt per orang, 161–363 hari tidak aktif) → persona "Pak Rudi" + program win-back personal, survey berhadiah, bundling langganan.
@uses dsn-quint, w5-recency, w5-code, w6-severity-urgency
@check sum(1 for r in LK['rows'] if ([31,28,31,30,31,30,31,31,30,31,30,31][int(r['last'][3:5])-1] - int(r['last'][:2]) + sum([31,28,31,30,31,30,31,31,30,31,30,31][int(r['last'][3:5]):])) != r['R']) == 0
@check [r['R'] for r in LK['rows']] == [53,347,65,211,47,131,25,323,103,32,229,88,161,22,289,66,363,18,92,193]
@check [r['code'] for r in LK['rows']] == ['433', '111', '455', '222', '444', '322', '555', '144', '332', '555', '211', '343', '233', '555', '121', '444', '154', '522', '333', '211']
@check sorted(LK['seg']['Champions']['ids']) == ['C23','C25','C27','C30','C34','C36']
@check sorted(LK['seg']['At Risk']['ids']) == ['C28','C33','C37']
@check sorted(LK['seg']['Tidak masuk kriteria']['ids']) == ['C26','C29','C39']
@check LK['seg']['At Risk']['M'] == 11550000
@check [len(LK['R']['groups'][str(s)]) for s in (5,4,3,2,1)] == [4,4,4,4,4]
@check [len(LK['F']['groups'][str(s)]) for s in (5,4,3,2,1)] == [5,4,4,4,3]
@end
