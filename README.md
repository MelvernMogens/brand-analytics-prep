# Brand Analytics — Belajar dari Kasus

Study app interaktif untuk mata kuliah **Brand Analytics** (Week 1–7): contoh kasus yang dibedah langkah demi langkah, bank konsep, latihan PG, studi kasus bergaya ujian, lab RFM dengan data workshop NusaBean, dan simulasi ujian ber-timer.

**Live:** https://melvernmogens.github.io/brand-analytics-prep/

## Kenapa
Slide kuliah isinya framework + tabel; yang bikin paham adalah melihat framework itu *dipakai* pada kasus. Tiap contoh di app ini mengikuti urutan **soal → pengerjaan (dengan alasan tiap langkah) → jawaban → konsep yang dipakai**, dan tidak ada angka yang muncul tanpa asal-usul.

## Cara kerja
```
content/*.md  (DSL: @topic @concept @example @step @check …)
      │
      ▼
build/parse.py ── jalankan semua @check (Python) ── gagal kalau 1 angka salah
build/texcheck.js ─ render semua LaTeX (KaTeX) ─── gagal kalau 1 rumus rusak
      │
      ▼
build/build.py ── inline JS/CSS/KaTeX/font ──► out/index.html (1 file, offline)
```
RFM NusaBean dihitung ulang dari 108 invoice mentah (`build/rfm.py`) dan dicocokkan ke kunci fasilitator — 2 baris kunci ternyata tidak konsisten dengan rumus worksheet-nya sendiri (lihat halaman Beranda → koreksi).

## Batasan jujur
- Format simulasi ujian (25 PG + 2 kasus, 100 menit) adalah tebakan wajar, bukan bocoran.
- Batas numerik grid segmen RFM = konvensi workshop (slide tidak memberi angka batas).
- Materi slide milik dosen/Prasetiya Mulya; ini ringkasan belajar pribadi.

## Build lokal
```bash
uv run python build/build.py && node --check build/_app.js
cd out && python3 -m http.server 8795   # buka http://127.0.0.1:8795/
```

## Deploy (GitHub Pages)
```bash
bash build/deploy.sh      # build + push out/ ke branch gh-pages
```

## Stack
Vanilla JS SPA (hash router, localStorage `brandan.v1`), KaTeX, Inter + JetBrains Mono di-embed. Tanpa bundler — satu file HTML jalan offline.
