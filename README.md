# Brand Analytics — Belajar dari Kasus

[![ci](https://github.com/MelvernMogens/brand-analytics-prep/actions/workflows/ci.yml/badge.svg)](https://github.com/MelvernMogens/brand-analytics-prep/actions/workflows/ci.yml)

**Study app interaktif untuk mata kuliah Brand Analytics (Prasetiya Mulya), Week 1–7.** Isinya kasus yang dibedah langkah demi langkah, lab RFM, latihan PG, essay dan simulasi ujian ber-timer.

**Live:** https://melvernmogens.github.io/brand-analytics-prep/

Slide kuliah isinya framework dan tabel, padahal yang bikin paham adalah melihat framework itu *dipakai* pada kasus. Karena itu tiap contoh di sini mengikuti urutan **soal → pengerjaan (dengan alasan tiap langkah) → jawaban → konsep yang dipakai**, dan tidak ada angka yang muncul tanpa asal-usul.

## Cakupan

| Week | Topik |
|---|---|
| W1 | Understanding Brand Equity and Big Data in Branding Strategy |
| W2 | Data Acquisition & Documentation |
| W3 | Data Cleaning, Transformation, and Quality |
| W4 | Data Exploration, Visualisation & Preliminary Sentiment |
| W5 | RFM Analysis |
| W6 | Interpreting Brand Segmentation into Personas |
| W7 | Text, Theme, Sentiment & Brand-Association Analysis |
| + | Studi kasus bergaya ujian dan latihan dosen |

Totalnya ada 31 topik, 95 contoh kasus step-reveal, 59 kartu rumus/konsep, 149 soal PG (100 PG per week + 49 PG 5-opsi dari latihan dosen) dan 247 `@check` angka yang diverifikasi saat build.

## Fitur

- **Materi**: contoh kasus step-reveal per topik, plus bank rumus & hafalan.
- **Lab RFM**: kalkulator skor quintile, grid segmen R × FM, dan **Lab NusaBean** yang menghitung RFM dari 108 invoice asli data workshop.
- **Latihan PG** per week dengan pembahasan. Distraktornya diseimbangkan supaya jawaban benar tidak ketebak dari panjang opsinya.
- **Essay**: essay teori dan essay hitung ala latihan dosen (kedai kopi: sentiment & negative ratio; Chitosi: RFM kuintil tanpa kalkulator, ada generator soal acaknya).
- **Simulasi ujian**: 30 PG + 3 essay, 120 menit. Submit otomatis saat waktu habis, dan progres tetap tersimpan kalau halaman ditutup.
- **Koreksi kunci**: RFM NusaBean dihitung ulang (`build/rfm.py`) lalu dicocokkan ke kunci fasilitator. Ternyata 2 baris kunci tidak konsisten dengan rumus worksheet-nya sendiri, dan detailnya bisa dilihat di Beranda → koreksi.
- Progres belajar tersimpan di `localStorage` (`brandan.v1`). App ini berupa satu file HTML yang jalan offline.

## Cara kerja build

```
content/*.md  (DSL: @week @topic @concept @example @step @check …)
      │
      ▼
build/parse.py ── jalankan semua @check (Python) ── gagal kalau 1 angka salah
build/texcheck.js ─ render semua LaTeX (KaTeX) ─── gagal kalau 1 rumus rusak
build/jscheck.js ── RFM versi JS harus sama dengan versi Python
      │
      ▼
build/build.py ── inline JS/CSS/KaTeX/font ──► out/index.html (1 file, offline)
```

Format DSL dijelaskan lengkap di [`docs/CONTENT-SPEC.md`](docs/CONTENT-SPEC.md). CI menjalankan build dan syntax check di setiap push.

## Build lokal

Butuh [uv](https://docs.astral.sh/uv/) (Python) dan Node. Tidak pakai bundler maupun dependency npm.

```bash
uv run python build/build.py && node --check build/_app.js
cd out && python3 -m http.server 8795   # buka http://localhost:8795/
```

## Deploy (GitHub Pages)

```bash
bash build/deploy.sh      # build + push out/ ke branch gh-pages
```

## Struktur

```
content/      w1–w7.md, quiz_w*.md, quiz_dosen.md, kasus_*.md, data/ (NusaBean, sentences)
src/          engine SPA: core.js (router/store), learn.js, practice.js, widgets.js (lab), style.css
build/        parse.py, build.py, rfm.py, texcheck.js, jscheck.js, rangecheck.js, deploy.sh
assets/       KaTeX + font (di-embed sebagai data-URI)
```

## Batasan jujur

- Format simulasi ujian adalah tebakan wajar berdasarkan form latihan dosen, bukan format resmi.
- Batas numerik grid segmen RFM mengikuti konvensi workshop, karena slide tidak memberi angka batasnya.
- Materi slide milik dosen/Prasetiya Mulya. Ini ringkasan belajar pribadi, dan merek di contoh kasus buatan sendiri (fiktif).

Engine-nya juga dipakai ulang oleh [relmat-prep](https://github.com/MelvernMogens/relmat-prep).

---

Dibuat oleh [Melvern Mogens](https://github.com/MelvernMogens).
