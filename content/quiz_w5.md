# Quiz Week 5 — RFM (16 soal PG). Owner: @analyst. Parser membaca otomatis.

@q 5 :: w5-concept :: w5-rfm
Mengenai arah skor pada RFM analysis, pernyataan mana yang BENAR?
+ Recency dihitung dalam hari sejak pembelian terakhir; makin kecil angkanya, makin tinggi skornya
- Recency makin besar makin bagus, karena angka besar berarti pelanggan sudah lama menjadi customer brand
- Frequency dihitung dari total unit barang, jadi sekali borong 10 bungkus kopi tercatat F = 10
- Monetary sebaiknya memakai GrossSales agar terlihat nilai transaksi penuh sebelum diskon
@why
Benar: Recency = jarak hari dari tanggal referensi ke belanja terakhir; yang baru beli (angka kecil) paling mungkin beli lagi, jadi dapat skor tertinggi. Di NusaBean, CUST001 beli tepat di tanggal referensi (R = 0 hari) dan dapat skor R = 5.
Pengecoh kedua membalik arah recency — lama tidak beli justru sinyal risiko churn.
Pengecoh ketiga keliru karena F menghitung invoice/purchase occasion, bukan unit.
Pengecoh keempat keliru karena Monetary = NetSales, uang yang benar-benar dibayar setelah diskon.
@check NB['C']['CUST001']['R'] == 0
@check NB['C']['CUST001']['r'] == 5
@end

@q 5 :: w5-calc :: w5-recency
SkinLab (brand skincare) menganalisis data transaksi sampai 30-Jun-2026 (tanggal transaksi terakhir di dataset). Customer Sinta terakhir beli 12-May-2026. Berapa RecencyDays Sinta?
- 12 hari
+ 49 hari
- 18 hari
- 50 hari
@why
Mei punya 31 hari: sisa Mei setelah tanggal 12 = 31 - 12 = 19 hari, lalu ditambah 30 hari penuh Juni → 19 + 30 = 49 hari.
12 hari = sekadar membaca angka tanggal; 18 = 30 - 12 (mengira Sinta beli di bulan yang sama, lupa beda bulan); 50 = menghitung seolah Juni 31 hari.
@check 31-12+30 == 49
@end

@q 5 :: w5-calc :: w5-recency
Seorang analis menghitung RFM dari data transaksi Jan-Aug 2026 yang diunduh bulan September. Tanggal referensi yang benar menurut aturan workshop — dan alasannya?
- TODAY() saat file dibuka, karena Recency memang berarti "hari sejak sekarang"
- Tanggal pertama periode analisis (1-Jan), supaya semua customer diukur dari titik nol yang sama
+ Tanggal transaksi TERAKHIR di dataset (MAX), supaya hasil bisa direproduksi siapa pun, kapan pun
- Rata-rata tanggal transaksi, supaya tidak bias oleh customer yang sangat aktif
@why
Benar: reference date = MAX(TransactionDate) di dataset. Dengan begitu siapa pun yang menghitung, kapan pun, dapat Recency yang sama.
TODAY() (kesalahan yang muncul di kunci fasilitator NusaBean) membuat Recency berubah setiap hari dan skor tidak bisa direproduksi.
Tanggal pertama periode membuat semua recency membengkak; rata-rata tanggal bukan konvensi RFM.
Di NusaBean: reference date = 2026-08-19.
@check NB['ref'] == '2026-08-19'
@end

@q 5 :: w5-concept :: w5-fm
Parfum "Aroma Nusantara" membandingkan dua pelanggan 3 bulan terakhir: Dewi 3 invoice dengan total 12 botol; Rani 8 invoice, masing-masing 1 botol. Frequency (F) keduanya menurut definisi yang benar?
- Dewi 12, Rani 8, karena total unit lebih menunjukkan keseriusan belanja
- Dewi 4, Rani 3, dihitung dari rata-rata botol per bulan
- Dewi 12, Rani 1, karena borong sekali dihitung satu kesempatan besar
+ Dewi 3, Rani 8, karena F menghitung kesempatan belanja (invoice), bukan jumlah barang
@why
Benar: F = jumlah invoice/purchase occasion dalam periode — yang diukur adalah kebiasaan DATANG KEMBALI, jadi sekali borong 12 botol tetap satu kesempatan belanja.
Kasus nyata di NusaBean: CUST009 mencatat 7 invoice padahal totalnya hanya 8 unit — kalau dihitung per unit ia justru terlihat jarang belanja, padahal rajin.
Pengecoh lain memakai total unit atau rata-rata bulanan, bukan invoice.
@check NB['C']['CUST009']['F'] == 7
@end

@q 5 :: w5-calc :: w5-fm
Monetary (M) dihitung dari SEMUA invoice CUST004 NusaBean berikut:
| Invoice | Net | Gross |
| INV10019 | 129.51 | 152.37 |
| INV10020 | 13.47 | 13.47 |
| INV10021 | 27.38 | 32.21 |
| INV10022 | 27.58 | 30.65 |
| INV10023 | 9.71 | 10.78 |
| INV10024 | 17.09 | 17.99 |
| INV10025 | 56.45 | 56.45 |
| INV10026 | 32.35 | 34.05 |
| INV10027 | 20.57 | 20.57 |
Berapa Monetary CUST004?
+ $334.11 (jumlah kolom Net)
- $368.54 (jumlah kolom Gross)
- $37.12 (rata-rata Net per invoice)
- $34.43 (selisih Gross − Net)
@why
Benar: Monetary = SUM(NetSales) = 129.51 + 13.47 + ... + 20.57 = 334.11 — uang yang benar-benar dibayar setelah diskon.
Gross (368.54) melebih-lebihkan nilai customer yang sering dapat diskon; selisihnya $34.43 itu bukan Monetary, melainkan ukuran besarnya diskon yang dinikmati.
Rata-rata per invoice menjawab pertanyaan lain (nilai belanja rata-rata), bukan total belanja.
@check 129.51+13.47+27.38+27.58+9.71+17.09+56.45+32.35+20.57 ~ 334.11
@check NB['C']['CUST004']['M'] ~ 334.11
@check NB['C']['CUST004']['G'] - NB['C']['CUST004']['M'] ~ 34.43
@end

@q 5 :: w5-calc :: w5-score
Laundry "Wangi Gramedia" punya 10 pelanggan dan memakai rumus skor workshop S = 6 − ROUNDUP(rank/n × 5). Seorang pelanggan mendapat rank 7 untuk Frequency. Berapa skornya?
- 3 — karena 3.5 dibulatkan ke bawah dulu, baru 6 − 3 = 3
- 2.5 — karena 6 − 3.5 = 2.5, skor quintile boleh desimal
- 4 — karena 7/10 × 5 ≈ 4, skor tinggal membulatkan hasil bagi itu
+ 2 — karena ROUNDUP(7/10 × 5) = ROUNDUP(3.5) = 4, lalu 6 − 4 = 2
@why
Benar: rank/n×5 = 7/10×5 = 3.5, ROUNDUP ke atas = 4, lalu 6 − 4 = 2. Dengan n = 10, pola skornya 5,5,4,4,3,3,2,2,1,1 — rank 7 jatuh di kelompok 2.
Membulatkan 3.5 ke bawah/terdekat itu salah — rumus workshop memakai ROUNDUP sebelum dikurangkan.
Skor quintile selalu bilangan bulat 1–5, jadi 2.5 tidak mungkin; dan 4 adalah nilai ROUNDUP-nya, bukan skornya.
@check 7/10*5 ~ 3.5
@check 6 - math.ceil(7/10*5) == 2
@check [6-math.ceil(r*5/10) for r in [1,2,3,4,5,6,7,8,9,10]] == [5,5,4,4,3,3,2,2,1,1]
@end

@q 5 :: w5-calc :: w5-score
Di data NusaBean (20 customer), Frequency terurut turun: 10, 9, 9, 8, 8, 7, 7, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1. CUST007 punya F = 8. Berapa F score CUST007 dengan RANK.EQ + rumus workshop?
- 4 — karena 8 adalah nilai terbesar ke-4, skornya ikut jadi 4 (kunci fasilitator menulis kode 345)
- 3 — nilai kembar berbagi rank rata-rata (4,5), dibulatkan turun jadi 3
+ 5 — RANK.EQ memberi rank 4 (ada 3 nilai di atasnya: 10, 9, 9), lalu 6 − ROUNDUP(4/20 × 5) = 6 − 1 = 5
- 2 — karena 8 hanya sedikit di atas median dari 20 nilai
@why
Benar: RANK.EQ memberi nilai kembar rank yang sama = 1 + jumlah nilai yang lebih besar = 1 + 3 = 4. Rumus: 6 − ceil(4/20×5) = 6 − 1 = 5, sehingga kode CUST007 = 355 (bukan 345 seperti tertulis di kunci fasilitator — kunci itu tidak konsisten dengan rumusnya sendiri).
"Nilai ke-4 → skor 4" lupa bahwa rank harus lewat rumus 6 − ROUNDUP, bukan dipakai langsung.
Rata-rata rank untuk kembar itu perilaku RANK.AVG, bukan RANK.EQ workshop.
@check 6 - math.ceil(4/20*5) == 5
@check NB['C']['CUST007']['code'] == '355'
@check NB['C']['CUST016']['code'] == '255'
@end

@q 5 :: w5-segment :: w5-grid, w5-code
Pakai grid workshop. Seorang pelanggan punya skor R = 4, F = 3, M = 4. Di segmen mana dia berada?
- Loyal Customers
- Promising
- Needs Attention
+ Potential Loyalist
@why
Benar: FM = (F + M)/2 = (3 + 4)/2 = 3.5 → band tengah (2.5 sampai di bawah 4). Baris R = 4 × band tengah = Potential Loyalist.
Loyal Customers butuh FM ≥ 4.0 di baris R = 4; Needs Attention ada di baris R = 3; Promising ada di R = 4 tapi FM < 2.5.
Persis profil CUST003 NusaBean (kode 434, FM 3.5) → segmen Potential Loyalist.
@check (3+4)/2 ~ 3.5
@check NB['C']['CUST003']['code'] == '434'
@check NB['C']['CUST003']['seg'] == 'Potential Loyalist'
@end

@q 5 :: w5-calc :: w5-code
Pelanggan dengan skor R = 3, F = 5, M = 4. Bagaimana cara menulis kode RFM-nya — dan berapa RFM_Total (SUM) yang dipakai worksheet?
- Kode "543" dan RFM_Total 12 — skor ditulis dari yang terbesar
- Kode "3.54" dan RFM_Total 3.54 — rata-rata ketiga skor
+ Kode "354" dan RFM_Total 12 — kode = tiga skor DITEMPEL, RFM_Total = 3 + 5 + 4 dijumlah
- Kode "354" dan RFM_Total 354 — ditempel atau dijumlah hasilnya sama saja
@why
Benar: kode RFM = R|F|M ditulis berurutan sebagai teks 3 digit: 354. RFM_Total untuk sorting adalah penjumlahan 3 + 5 + 4 = 12 (range 3–15, dipakai juga di tabel persona W6).
"543" mengurutkan skor dari besar — kode harus mengikuti urutan R, F, M, bukan diurutkan.
"3.54" menganggap kode bilangan desimal; 354 sebagai Total jelas salah — total maksimal hanya 15.
Persis CUST004 NusaBean: kode 354, tot 12.
@check NB['C']['CUST004']['code'] == '354'
@check NB['C']['CUST004']['tot'] == 12
@end

@q 5 :: w5-calc :: w5-score
Kopi Rasa punya 8 pelanggan member dengan jumlah invoice: 8, 6, 6, 3, 2, 1, 7, 5. Dua member punya 6 invoice (kembar). Dengan RANK.EQ dan rumus workshop (n = 8), berapa F score keduanya?
- 3 — karena nilai kembar harus turun satu level agar total skor adil
- 5 — nilai kembar memakai rank terbaik, yaitu 2
+ 4 — rank 3 (ada 8 dan 7 di atasnya), lalu 6 − ROUNDUP(3/8 × 5) = 6 − 2 = 4
- 4.5 — rata-rata rank 3 dan rank 4, baru dimasukkan ke rumus
@why
Benar: yang lebih besar dari 6 hanya 8 dan 7 → RANK.EQ = 3. Rumus: 3/8×5 = 1.875 → ROUNDUP 2 → 6 − 2 = 4. Keduanya dapat skor sama karena rank-nya sama.
Rank terbaik (2) hanya benar kalau ada SATU nilai di atas; ini ada dua.
Rata-rata rank adalah perilaku RANK.AVG, bukan RANK.EQ yang dipakai workshop; skor quintile selalu integer.
@check 6 - math.ceil(3/8*5) == 4
@check [6-math.ceil(r*5/8) for r in [1,2,3,4]] == [5,4,4,3]
@end

@q 5 :: w5-segment :: w5-grid, w5-code
Menurut grid workshop, pelanggan dengan kode RFM 255 berada di segmen mana?
- Champions — total skor 12 termasuk tinggi
+ Can't Lose Them — R = 2 (lama tidak beli) tapi FM = 5 (dulu sering dan besar)
- Loyal Customers — F dan M sama-sama 5, artinya masih setia
- Hibernating — bukan pojok kanan atas grid, jadi pasti sedang tidur
@why
Benar: FM = (5+5)/2 = 5 → band atas (≥ 4), baris R ≤ 2 → Can't Lose Them: nilai historis besar tapi sudah lama tidak beli → prioritas win-back.
Champions butuh R = 5; mengklaim "total 12 = tinggi" justru kesalahan yang diperingatkan materi (CUST016 dan CUST004 sama-sama total 12 tapi strategisnya beda jauh).
Loyal Customers butuh R = 4 dengan FM ≥ 4; Hibernating adalah R ≤ 2 dengan FM 2.5–<4.
Ini persis CUST016 NusaBean: spender terbesar ($471.36) tapi 43 hari tidak beli.
@check NB['C']['CUST016']['code'] == '255'
@check NB['C']['CUST016']['seg'] == "Can't Lose Them"
@end

@q 5 :: w5-segment :: w5-strategy
Menurut tabel Step 6 di slide (contoh kode per segmen), kode 155 dan 245 termasuk segmen apa — dan aksi Step 7 yang cocok?
+ At Risk — win-back campaign dan reminder khusus untuk pelanggan yang kini pasif
- Champions — F dan M tinggi, tinggal kasih VIP treatment agar kembali
- Hibernating/Lost — sudah lewat masa emasnya, cukup outreach murah massal
- Potential Loyalists — masih baru, cukup nurture dengan kampanye personal
@why
Benar: tabel slide menempatkan 155/245 di At Risk — F&M tinggi tapi Recency buruk (1 dan 2), jadi aksinya win-back + special reminder; dulu sering beli, sekarang tidak aktif.
VIP treatment untuk Champions (555/554/545) akan membayar penuh pelanggan yang justru sedang menjauh.
Catatan: di grid workshop NusaBean, kode seperti ini (R ≤ 2, FM ≥ 4) jatuh ke Can't Lose Them — dua nama, logika sama: nilai historis besar + pasif = win-back hati-hati, bukan dibiarkan.
@check NB['C']['CUST019']['code'] == '155'
@check NB['C']['CUST019']['seg'] == "Can't Lose Them"
@end

@q 5 :: w5-calc :: w5-score, w5-code
Toko kue "Manis Nyonya" punya 5 pelanggan (skor pakai rumus workshop, n = 5; Recency urut naik, F & spend urut turun):
| Pelanggan | RecencyDays | Invoice | Spend (Rp ribu) |
| Bu A | 12 | 9 | 540 |
| Bu B | 40 | 6 | 380 |
| Bu C | 40 | 4 | 280 |
| Bu D | 61 | 2 | 150 |
| Bu E | 75 | 2 | 150 |
Berapa kode RFM Bu C?
+ 433
- 423
- 333
- 343
@why
Benar: Recency Bu C = 40, KEMBAR dengan Bu B → RANK.EQ keduanya rank 2 → R = 6 − ceil(2/5×5) = 4. Invoice 4: yang lebih besar hanya 9 dan 6 → rank 3 → F = 3. Spend 280: yang lebih besar 540 dan 380 → rank 3 → M = 3. Kode = 433 (FM = 3.0 → Potential Loyalist).
423 muncul kalau rank F kembar displit / dianggap kena dampak nilai kembar Bu D–Bu E — padahal di bawah 4 tidak ada yang memengaruhi rank 3.
333 berasal dari membalik arah ranking recency (40 hari dianggap buruk); 343 menukar posisi skor F dan M.
@check 6 - math.ceil(2/5*5) == 4
@check 6 - math.ceil(3/5*5) == 3
@check 6 - math.ceil(1/5*5) == 5
@end

@q 5 :: w5-case :: w5-grid, w5-strategy
NusaBean Coffee Club: CUST016 adalah customer dengan Monetary TERTINGGI di seluruh dataset. Manajemen mengusulkan CUST016 diberi paket VIP sebagai "customer terbaik". Apa respons analisis yang benar?
- Setuju — Monetary tertinggi otomatis adalah customer terbaik, wajar dapat VIP
+ Tolak — 43 hari tidak beli (R = 2), kode 255 = Can't Lose Them: win-back personal
- Setuju — asalkan diskonnya di atas 50% supaya dia cepat kembali belanja
- Tolak — CUST016 sudah masuk segmen Lost, seluruh budget retensi dihentikan
@why
Benar: spend terbesar ≠ customer terbaik. CUST016 (kode 255, total spend $471.36) berada di kiri-atas grid — dulu besar sekarang hilang → risiko churn → win-back hati-hati, bukan reward biasa.
VIP reward menghabiskan margin untuk orang yang masalahnya bukan harga; ini beda kebutuhan dari Loyal Customers. Respons yang tepat: win-back personal (kontak langsung), bukan paket VIP massal.
Menyebutnya "Lost" juga salah — Lost itu FM < 2.5; CUST016 FM = 5.0, terlalu berharga untuk ditinggalkan.
@check NB['C']['CUST016']['M'] ~ 471.36
@check max(NB['C'][c]['M'] for c in NB['C']) ~ 471.36
@check NB['C']['CUST016']['seg'] == "Can't Lose Them"
@end

@q 5 :: w5-case :: w5-fm, w5-grid
Hasil analisis NusaBean (20 customer, total NetSales $4,517.63): Loyal Customers 4 orang = $1,419.33; Can't Lose Them 2 orang = $889.04; tidak ada Champions. Berapa % NetSales yang dikendalikan top 20% customer (4 customer Monetary terbesar)?
- 31.4%
- 80%
- 19.7%
+ 37.3%
@why
Benar: top 20% × 20 = 4 customer terbesar: CUST016 $471.36 + CUST010 $444.85 + CUST019 $417.68 + CUST007 $351.12 = $1,685.01 → 1,685.01 / 4,517.63 = 37.3%.
31.4% adalah share segmen Loyal Customers saja (4 orang yang berbeda); 19.7% share Can't Lose Them saja; 80% angka Pareto yang sering dihafal tetapi tidak terjadi di data ini.
@check 471.36+444.85+417.68+351.12 ~ 1685.01
@check NB['top4sum'] ~ 1685.01
@check NB['top4sum']/NB['total']*100 ~ 37.3
@end

@q 5 :: w5-case :: w5-strategy
Dengan budget retensi terbatas, NusaBean ingin memilih segmen untuk investasi retensi terbesar. Fakta: Loyal Customers = 4 orang, $1,419.33 (31.4% sales), semuanya masih aktif (R score 3–4), rata-rata $354.83/customer vs rata-rata dataset $225.88. Keputusan paling didukung data?
- Lost — 3 customer, $299.25, murah dipulihkan karena tinggal email blast massal
+ Loyal Customers — share 31.4% dan daya beli 57% di atas rata-rata, masih aktif → jaga dengan reward/referral, tanpa diskon besar
- Can't Lose Them — rata-rata per kepala tertinggi ($444.52), berikan diskon besar agar cepat kembali
- Semua segmen dibagi rata budgetnya agar adil
@why
Benar: Loyal Customers paling layak retensi: 31.4% sales dari 4 orang, rata-rata $354.83 ≈ 57% di atas rata-rata dataset, dan masih aktif → belanja mereka masih mengalir, cukup dijaga — diskon massal ke mereka hanya menggerus margin atas pembelian yang toh terjadi.
Can't Lose Them layak win-back TAPI dengan insentif terkontrol — bukan diskon besar untuk 2 orang yang masalahnya belum tentu harga.
Lost: $299.25 = 6.6% sales → effort minimal / reactivation test murah; membagi rata budget mengabaikan kontribusi tiap segmen.
@check 1419.33/4 ~ 354.83
@check 889.04/2 ~ 444.52
@check NB['SEG']['Loyal Customers']['M'] ~ 1419.33
@end
