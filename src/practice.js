/* ================= BANK RUMUS ================= */
function Rumus() {
  mount(`<div class="page">
    <header class="phead"><div class="kicker">Bank konsep & rumus</div><h1>Semua konsep, framework & rumus</h1><p class="lead">${Object.keys(F).length} kartu W1–W7, lengkap dengan arti tiap bagian. Tiap kartu ada link ke contoh kasus yang memakainya.</p>
      <div class="row mt"><div class="search">${icon('eye')}<input id="rq" type="search" placeholder="Cari… (mis. recency, audit, sentiment, persona)" autocomplete="off"></div><a class="btn" href="#/hafalan">${icon('cards')} Mode hafalan</a></div>
      <div class="jump" id="rwk">${WEEKS.map(w => `<button class="chip" data-w="${w.n}">W${w.n}</button>`).join('')}</div>
    </header>
    <div id="rlist">${WEEKS.map(w => `<section class="sec" data-wk="${w.n}" id="rw-${w.n}"><div class="sec-h"><h2><span class="wb lg">W${w.n}</span> ${esc(w.title)}</h2></div>${w.topics.filter(t => t.formulas.length).map(t => `<div class="rtopic" data-tp><h3><a href="#/t/${t.id}">${esc(t.title)}</a></h3><div class="fgrid">${t.formulas.map(f => `<div data-f="${esc((f.title + ' ' + (f.def || '') + ' ' + f.vars.map(v => v.sym + ' ' + v.meaning).join(' ') + ' ' + t.title).toLowerCase())}">${formulaCard(f, false)}</div>`).join('')}</div></div>`).join('')}</section>`).join('')}</div>
    <p class="muted center" id="rnone" hidden>Tidak ada yang cocok.</p>
  </div>`);
  $$('#rwk .chip').forEach(b => { b.onclick = () => $('#rw-' + b.dataset.w).scrollIntoView({ behavior: smooth(), block: 'start' }); });
  $('#rq').addEventListener('input', ev => {
    const q = ev.target.value.trim().toLowerCase();
    let any = false;
    $$('[data-f]').forEach(d => { const ok = !q || d.dataset.f.indexOf(q) >= 0; d.hidden = !ok; any = any || ok; });
    $$('[data-tp]').forEach(d => { d.hidden = !$$('[data-f]', d).some(x => !x.hidden); });
    $$('[data-wk]').forEach(d => { d.hidden = !$$('[data-f]', d).some(x => !x.hidden); });
    $('#rnone').hidden = any;
  });
}

/* ================= HAFALAN (flashcards) ================= */
function Hafalan() {
  const all = TOPICS.flatMap(t => t.formulas);
  let wk = 0, deck = [], i = 0, flip = false;
  const known = () => Store.get('known', {});
  function build() { deck = shuffle(all.filter(f => !wk || f.topic.wk.n === wk)); i = 0; flip = false; }
  mount(`<div class="page narrow">
    <nav class="crumb"><a href="#/rumus">Bank konsep</a>${icon('chev')}<span>Hafalan</span></nav>
    <header class="phead"><div class="kicker">Kartu hafalan</div><h1>Konsep & rumus</h1><p class="lead">Lihat nama konsep → jelaskan dulu di kepala (definisi + bagian-bagiannya) → balik kartu.</p>
      <div class="seg" id="hwk"><button data-w="0" class="on">Semua</button>${WEEKS.map(w => `<button data-w="${w.n}">W${w.n}</button>`).join('')}</div></header>
    <div id="fc"></div>
  </div>`);
  function paint() {
    const f = deck[i], k = known();
    const nk = deck.filter(x => k[x.key]).length;
    $('#fc').innerHTML = `<div class="fc-meta"><span>Kartu ${i + 1} / ${deck.length}</span><span>${nk} sudah hafal</span></div>
      <div class="bar"><i style="width:${(i + 1) / deck.length * 100}%"></i></div>
      <button class="flash ${flip ? 'flipped' : ''}" id="flash" aria-label="Balik kartu">
        <div class="face front"><span class="tag blue">W${f.topic.wk.n} · ${esc(f.topic.title)}</span><div class="ft">${esc(f.title)}</div><small>${icon('refresh')} Ketuk untuk lihat jawabannya</small></div>
        <div class="face back"><div class="ft sm">${esc(f.title)}</div>${fBody(f)}</div>
      </button>
      <div class="row between mt"><button class="btn ghost" id="fprev">${icon('chevl')} Sebelumnya</button>
      <div class="row"><button class="btn" id="fno">${icon('x')} Belum hafal</button><button class="btn primary" id="fyes">${icon('check')} Sudah hafal</button></div></div>
      <div class="row center mt"><button class="btn ghost sm" id="fsh">${icon('shuffle')} Acak ulang</button>${k[f.key] ? '<span class="tag green">✓ ditandai hafal</span>' : ''}</div>`;
    $('#flash').onclick = () => { flip = !flip; $('#flash').classList.toggle('flipped', flip); };
    const go = d => { i = (i + d + deck.length) % deck.length; flip = false; paint(); };
    $('#fprev').onclick = () => go(-1);
    $('#fyes').onclick = () => { const k2 = known(); k2[f.key] = 1; Store.set('known', k2); go(1); };
    $('#fno').onclick = () => { const k2 = known(); delete k2[f.key]; Store.set('known', k2); go(1); };
    $('#fsh').onclick = () => { build(); paint(); };
  }
  $$('#hwk button').forEach(b => { b.onclick = () => { $$('#hwk button').forEach(x => x.classList.toggle('on', x === b)); wk = +b.dataset.w; build(); paint(); }; });
  build(); paint();
}

/* ================= QUIZ (PG) ================= */
function qStats() { return Store.get('qs', {}); }
function quizTotals() { const s = qStats(); let n = 0, r = 0; Object.keys(s).forEach(k => { n += s[k].a; r += s[k].r; }); return { n, r }; }
function recordQ(q, ok) { const s = qStats(); const x = s[q.id] || { a: 0, r: 0 }; x.a++; if (ok) x.r++; x.last = ok ? 1 : 0; s[q.id] = x; Store.set('qs', s); }
function qText(q) { return soalHTML(q.q); }
function QuizHome(k, v) {
  if (k === 'd') return runQuiz(QZ.filter(q => q.src === 'dosen'), 'Latihan dosen (bocoran UTS)', '#/latihan');
  if (k === 't' && T[v]) return runQuiz(QZ.filter(q => q.topic === v), `Latihan: ${T[v].title}`, '#/t/' + v);
  if (k === 'w' && +v >= 1 && +v <= 7) return runQuiz(shuffle(QZ.filter(q => q.week === +v)), `Latihan PG Week ${v}`, '#/latihan');
  const s = qStats();
  const wrong = QZ.filter(q => s[q.id] && s[q.id].last === 0);
  const tt = quizTotals();
  mount(`<div class="page">
    <header class="phead"><div class="kicker">Latihan</div><h1>Latihan soal</h1><p class="lead">Pilihan ganda dengan pembahasan langsung, plus studi kasus bergaya ujian.</p></header>
    <div class="grid2">
      <button class="lcard" data-go="mix"><span class="lc-ic blue">${icon('shuffle')}</span><b>Campuran 10 soal</b><small>Acak dari semua week</small></button>
      ${QZ.some(q => q.src === 'dosen') ? `<a class="lcard hot" href="#/latihan?d=1"><span class="lc-ic red">${icon('flag')}</span><b>Latihan dosen (bocoran UTS)</b><small>${QZ.filter(q => q.src === 'dosen').length} soal PG asli dari form dosen · 5 opsi</small></a>` : ''}
      <button class="lcard" data-go="wrong" ${wrong.length ? '' : 'disabled'}><span class="lc-ic red">${icon('refresh')}</span><b>Ulangi yang salah</b><small>${wrong.length ? wrong.length + ' soal terakhir salah' : 'Belum ada soal salah'}</small></button>
    </div>
    <div class="sec-h mt-l"><h2>Per week</h2><span class="muted sm">${tt.n ? `akurasi total ${Math.round(tt.r / tt.n * 100)}% dari ${tt.n} jawaban` : ''}</span></div>
    <div class="qweeks">${WEEKS.map(w => { const qs = QZ.filter(q => q.week === w.n); const done = qs.filter(q => s[q.id]).length; const right = qs.filter(q => s[q.id] && s[q.id].last === 1).length; return `<a class="qw" href="#/latihan?w=${w.n}"><span class="wb lg">W${w.n}</span><span class="qw-b"><b>${esc(w.title)}</b><small>${qs.length} soal · ${done ? right + ' benar dari ' + done + ' dicoba' : 'belum dicoba'}</small><span class="bar"><i style="width:${qs.length ? right / qs.length * 100 : 0}%"></i></span></span>${icon('chev', 'go')}</a>`; }).join('')}</div>
    <div class="sec-h mt-l"><h2>Studi kasus</h2><a href="#/essay">Buka studi kasus ${icon('chev')}</a></div>
    <div class="grid3">${ES_KEYS.map((k2, i) => `<a class="lcard" href="#/essay/${k2}"><span class="lc-ic amber">${i + 1}</span><b>${esc(T[ES_TOPIC[k2]].title.replace('Kasus: ', ''))}</b><small>${esc(T[ES_TOPIC[k2]].sub.split('.')[0])}</small></a>`).join('')}</div>
  </div>`);
  $$('[data-go]').forEach(b => {
    b.onclick = () => {
      if (b.dataset.go === 'mix') runQuiz(shuffle(QZ).slice(0, 10), 'Campuran 10 soal', '#/latihan');
      else runQuiz(shuffle(wrong), 'Ulangi yang salah', '#/latihan');
    };
  });
}
function optsHTML(q, order, chosen, reveal) {
  return order.map((oi, j) => {
    let c = 'opt';
    if (reveal) { if (oi === q.ans) c += ' right'; else if (oi === chosen) c += ' wrong'; else c += ' dim'; }
    else if (oi === chosen) c += ' sel';
    return `<button class="${c}" data-oi="${oi}" ${reveal ? 'disabled' : ''}><span class="ol">${LETTERS[j]}</span><span class="ot">${esc(q.opts[oi])}</span>${reveal && oi === q.ans ? icon('check', 'oi') : ''}${reveal && oi === chosen && oi !== q.ans ? icon('x', 'oi') : ''}</button>`;
  }).join('');
}
function whyHTML(q) {
  return `<div class="why"><div class="label">${icon('bulb')} Pembahasan</div>${q.why.map(l => `<p>${esc(l)}</p>`).join('')}</div>${usesHTML(q.uses)}<a class="minilink" href="#/t/${q.topic}">${icon('book')} Pelajari topik: ${esc(T[q.topic].title)}</a>`;
}
function runQuiz(list, title, back) {
  if (!list.length) return;
  let i = 0; const res = [];
  const orders = list.map(q => shuffle(q.opts.map((_, i) => i)));
  mount(`<div class="page narrow quiz"><nav class="crumb"><a href="${back}">${icon('chevl')} Kembali</a></nav><div id="qz"></div></div>`);
  function paint() {
    const q = list[i];
    $('#qz').innerHTML = `<div class="qhead"><span class="kicker">${esc(title)}</span><span class="muted sm">Soal ${i + 1} / ${list.length}</span></div>
      <div class="bar"><i style="width:${i / list.length * 100}%"></i></div>
      <article class="card qcard"><div class="row"><span class="tag blue">W${q.week}</span><span class="tag">${esc(T[q.topic].title)}</span></div>
      <div class="qtext">${qText(q)}</div><div class="opts">${optsHTML(q, orders[i], null, false)}</div><div id="qfb"></div></article>`;
    $$('.opt', $('#qz')).forEach(b => {
      b.onclick = () => {
        const oi = +b.dataset.oi, ok = oi === q.ans;
        res[i] = { q, ok, oi };
        recordQ(q, ok);
        $('.opts', $('#qz')).innerHTML = optsHTML(q, orders[i], oi, true);
        $('#qfb').innerHTML = `<div class="verdict ${ok ? 'ok' : 'no'}">${icon(ok ? 'check' : 'x')} ${ok ? 'Benar!' : 'Belum tepat — jawaban benar: ' + LETTERS[orders[i].indexOf(q.ans)]}</div>${whyHTML(q)}
          <div class="row end mt"><button class="btn primary" id="qnext">${i + 1 < list.length ? 'Soal berikutnya ' + icon('chev') : 'Lihat hasil ' + icon('chev')}</button></div>`;
        if (!RM) $('#qfb').classList.add('new');
        $('#qnext').onclick = () => { i++; i < list.length ? paint() : done(); window.scrollTo({ top: 0, behavior: smooth() }); };
      };
    });
  }
  function done() {
    const r = res.filter(x => x && x.ok).length;
    const byT = {};
    res.forEach(x => { if (!x) return; const b = byT[x.q.topic] = byT[x.q.topic] || { n: 0, r: 0 }; b.n++; if (x.ok) b.r++; });
    const pct = Math.round(r / list.length * 100);
    $('#qz').innerHTML = `<article class="card result"><div class="kicker">${esc(title)}</div><div class="score ${pct >= 70 ? 'good' : pct >= 50 ? 'mid' : 'bad'}"><b>${r}</b><span>/ ${list.length}</span></div><p class="lead">${pct >= 80 ? 'Mantap, sudah siap.' : pct >= 60 ? 'Lumayan — ulangi topik yang merah.' : 'Pelajari lagi contoh soal di topik yang merah.'}</p>
      <div class="tbreak">${Object.keys(byT).map(tid => { const b = byT[tid]; return `<a href="#/t/${tid}" class="${b.r === b.n ? 'ok' : 'no'}"><span>${esc(T[tid].title)}</span><b>${b.r}/${b.n}</b></a>`; }).join('')}</div>
      <div class="row center mt"><a class="btn" href="${back}">Selesai</a><button class="btn primary" id="qagain">${icon('refresh')} Ulangi</button></div></article>
      <div class="sec-h mt-l"><h2>Review jawaban</h2></div>
      ${res.map((x, j) => `<details class="card rev"><summary><span class="${x.ok ? 'okc' : 'noc'}">${icon(x.ok ? 'check' : 'x')}</span><span>${j + 1}. ${esc(x.q.q[0]).slice(0, 110)}${x.q.q[0].length > 110 ? '…' : ''}</span></summary><div class="qtext">${qText(x.q)}</div><div class="opts">${optsHTML(x.q, orders[j], x.oi, true)}</div>${whyHTML(x.q)}</details>`).join('')}`;
    $('#qagain').onclick = () => runQuiz(shuffle(list), title, back);
    const onT = e => { if (e.target.closest('details.rev')) {} };
    void onT;
  }
  paint();
}

/* ================= KASUS: generator RFM acak ================= */
const rnd = (a, b) => a + Math.floor(Math.random() * (b - a + 1));
const pick = a => a[Math.floor(Math.random() * a.length)];
const BRANDS = [['Seduh', 'toko teh online'], ['Batik Rasa', 'brand batik modern'], ['SkinLab', 'brand skincare lokal'], ['Roti Pagi', 'bakery omnichannel'], ['Kopi Senja', 'kedai kopi'], ['Lari.id', 'toko perlengkapan lari'], ['Wangi', 'brand parfum lokal'], ['Tani Segar', 'e-grocery sayur']];
const MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
function dstr(d) { return `${String(d.getUTCDate()).padStart(2, '0')}-${MON[d.getUTCMonth()]}-${d.getUTCFullYear()}`; }
function rankEq(vals, v, asc) { return 1 + vals.filter(x => (asc ? x < v : x > v)).length; }
function qScore(rank, n) { return 6 - Math.ceil(Math.round(rank / n * 5 * 1e9) / 1e9); }
function gridSeg(r, fm) {
  const b = fm >= 4 ? 0 : fm >= 2.5 ? 1 : 2;
  if (r === 5) return ['Champions', 'Recent Users', 'Price Sensitive'][b];
  if (r === 4) return ['Loyal Customers', 'Potential Loyalist', 'Promising'][b];
  if (r === 3) return ['Loyal Customers', 'Needs Attention', 'About To Sleep'][b];
  return ["Can't Lose Them", 'Hibernating', 'Lost'][b];
}
const SEG_ACT = { 'Champions': 'VIP / loyalty eksklusif', 'Loyal Customers': 'retensi + cross-sell, referral', 'Potential Loyalist': 'naikkan frekuensi/nilai', 'Recent Users': 'nurture ke loyalitas', 'Promising': 'selective nurture', 'Needs Attention': 'diagnosa + nurture', 'About To Sleep': 're-engagement', "Can't Lose Them": 'win-back personal, hati-hati', 'Hibernating': 'win-back biaya terkontrol', 'Lost': 'reactivation test murah', 'Price Sensitive': 'penawaran value/harga tertarget' };
function rfmCompute(rows, n) {
  const Rs = rows.map(r => r.R), Fs = rows.map(r => r.F), Ms = rows.map(r => r.M);
  rows.forEach(r => {
    r.rkR = rankEq(Rs, r.R, true); r.rkF = rankEq(Fs, r.F, false); r.rkM = rankEq(Ms, r.M, false);
    r.r = qScore(r.rkR, n); r.f = qScore(r.rkF, n); r.m = qScore(r.rkM, n);
    r.fm = (r.f + r.m) / 2; r.code = '' + r.r + r.f + r.m; r.seg = gridSeg(r.r, r.fm);
  });
  return rows;
}
function genRFM() {
  const [brand, kind] = pick(BRANDS), n = 8;
  const ref = new Date(Date.UTC(2026, rnd(6, 10), rnd(20, 28)));
  const ids = Array.from({ length: n }, (_, i) => brand.replace(/[^A-Z]/g, '').slice(0, 2) + (i + 1));
  let rows;
  for (let tries = 0; tries < 50; tries++) {
    const Rd = shuffle([rnd(0, 3), rnd(4, 9), rnd(10, 18), rnd(19, 30), rnd(31, 45), rnd(46, 60), rnd(61, 80), rnd(81, 95)]);
    rows = ids.map((id, i) => { const F = rnd(1, 12); const avg = rnd(6, 30) * 10; return { id, R: Rd[i], F, M: F * avg + rnd(0, 9) * 10 }; });
    if (new Set(rows.map(r => r.M)).size === n) break;
  }
  rows.forEach(r => { const d = new Date(ref); d.setUTCDate(d.getUTCDate() - r.R); r.last = dstr(d); });
  rfmCompute(rows, n);
  const tot = rows.reduce((a, r) => a + r.M, 0);
  const bySeg = {}; rows.forEach(r => { (bySeg[r.seg] = bySeg[r.seg] || []).push(r); });
  const segs = Object.keys(bySeg).map(s => ({ s, n: bySeg[s].length, M: bySeg[s].reduce((a, r) => a + r.M, 0) })).sort((a, b) => b.M - a.M);
  const top = segs[0];
  const pctOf = x => fmt(x / tot * 100, 1) + '%';
  const scoreMap = Array.from({ length: n }, (_, i) => `${i + 1}\\to${qScore(i + 1, n)}`).join(',\\;');
  return {
    title: `RFM ${brand} — ${n} customer`, src: 'Soal acak · kasus RFM', uses: ['w5-recency', 'w5-fm', 'w5-score', 'w5-code', 'w5-grid', 'w5-strategy'].filter(k => F[k]),
    soal: [`${brand} (${kind}) punya ringkasan transaksi per customer. Tanggal referensi = transaksi terakhir di data = ${dstr(ref)}. Monetary sudah dalam Net Sales (Rp ribu).`,
      '| Customer | Last purchase | Invoice | Net spend |', ...rows.map(r => `| ${r.id} | ${r.last} | ${r.F} | ${fmtN(r.M)} |`), '',
      `Pakai skor workshop S = 6 − ROUNDUP(rank/n × 5) dengan n = ${n} (nilai kembar = rank sama), FM = rata-rata F dan M, lalu grid workshop.`,
      '(a) Hitung RecencyDays tiap customer.', '(b) Hitung skor R, F, M dan kode RFM.', '(c) Hitung FM dan tentukan segmen.', '(d) Segmen mana yang memegang NetSales terbesar dan apa aksinya?'],
    steps: [
      { title: '(a) Recency', why: `Tanggal referensi (${dstr(ref)}) dikurangi last purchase. Angka kecil = baru beli.`, tex: '', rows: [['Customer', 'Last purchase', 'RecencyDays'], ...rows.map(r => [r.id, r.last, String(r.R)])] },
      { title: '(b) Rank', why: 'Recency diurutkan NAIK (hari terkecil = rank 1). Invoice & spend diurutkan TURUN (terbesar = rank 1).', tex: '', rows: [['Customer', 'rank R', 'rank F', 'rank M'], ...rows.map(r => [r.id, r.rkR, r.rkF, r.rkM].map(String))] },
      { title: '(b) Rank → skor', why: `n = ${n}: hitung 6 − ROUNDUP(rank × 5/${n}) untuk tiap rank.`, tex: scoreMap },
      { title: '(b) Kode RFM', why: 'Tempel skor R, F, M (bukan dijumlah).', tex: '', rows: [['Customer', 'R', 'F', 'M', 'Kode'], ...rows.map(r => [r.id, r.r, r.f, r.m, r.code].map(String))] },
      { title: '(c) FM & segmen', why: 'FM = (F + M)/2. Baris grid dari R (5 / 4 / 3 / ≤2), kolom dari FM (≥4 / 2.5–<4 / <2.5).', tex: '', rows: [['Customer', 'R', 'FM', 'Segmen'], ...rows.map(r => [r.id, String(r.r), fmt(r.fm, 1), r.seg])] },
      { title: '(d) Ringkas per segmen', why: `Total NetSales = ${fmtN(tot)}. Jumlahkan spend per segmen (=SUMIF).`, tex: '', rows: [['Segmen', 'Customer', 'NetSales', '%'], ...segs.map(x => [x.s, String(x.n), fmtN(x.M), pctOf(x.M)])] },
      { title: '(d) Aksi', why: `Segmen terbesar: ${top.s} (${pctOf(top.M)}). Aksi disesuaikan dengan perilaku segmen, bukan diskon yang sama untuk semua.`, tex: '' }
    ],
    answer: `(a) R = ${rows.map(r => r.R).join(', ')} hari. (b) Kode: ${rows.map(r => r.id + ' ' + r.code).join(', ')}. (c) ${rows.map(r => r.id + ' ' + r.seg).join(', ')}. (d) ${top.s} memegang ${pctOf(top.M)} NetSales (${fmtN(top.M)} dari ${fmtN(tot)}) → ${SEG_ACT[top.s]}.`
  };
}

/* ===== generator: RFM kuintil (gaya Chitosi, tanpa kalkulator) ===== */
const DOSEN_SEG = [['Champions', (r, f, m) => r >= 4 && f >= 4 && m >= 4], ['Loyal Customers', (r, f, m) => f >= 4 && m >= 3 && r >= 3], ['Potential Loyalist', (r, f, m) => r >= 4 && f >= 2 && f <= 3 && m >= 2 && m <= 3], ['At Risk', (r, f, m) => r <= 2 && f >= 3 && m >= 3], ['Hibernating', (r, f, m) => r <= 2 && f <= 2 && m <= 2]];
function dosenSeg(r, f, m) { const x = DOSEN_SEG.find(s => s[1](r, f, m)); return x ? x[0] : 'Tidak masuk kriteria'; }
function eqBin(v, lo, w) { return w ? Math.min(4, Math.floor((v - lo) / w + 1e-9)) : 0; }
function rpx(x) { return 'Rp' + Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
const MDAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const BLN = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Des'];
function jt(x) { return (Math.round(x / 10000) / 100).toString().replace('.', ',') + ' jt'; }
function genRange() {
  const [brand] = pick([['Chitosi'], ['Kriuk Nusa'], ['Snackie'], ['Keripik Mama'], ['Rasa Bumi']]);
  const n = pick([10, 15]), k = n / 5;
  const rows = Array.from({ length: n }, (_, i) => { const mo = rnd(1, 12), d = rnd(1, MDAYS[mo - 1]); const F = rnd(1, 12); return { id: 'C' + (41 + i), mo, d, F, M: (F * rnd(3, 6) + rnd(0, 4)) * 100000 }; });
  rows.forEach(r => { r.R = (MDAYS[r.mo - 1] - r.d) + MDAYS.slice(r.mo).reduce((a, b) => a + b, 0); r.last = `${String(r.d).padStart(2, '0')}/${String(r.mo).padStart(2, '0')}/2025`; });
  const RV = rows.map(r => r.R), FV = rows.map(r => r.F), MV = rows.map(r => r.M);
  rows.forEach(r => { r.r = qScore(rankEq(RV, r.R, true), n); r.f = qScore(rankEq(FV, r.F, false), n); r.m = qScore(rankEq(MV, r.M, false), n); r.code = '' + r.r + r.f + r.m; r.seg = dosenSeg(r.r, r.f, r.m); });
  const sortTbl = (key, sk, asc, fv) => [['No', 'Cust.', 'Nilai', 'Skor'], ...rows.slice().sort((a, b) => asc ? a[key] - b[key] : b[key] - a[key]).map((r, i) => [String(i + 1), r.id, fv(r[key]), String(r[sk])])];
  const rngOf = (key, sk, fv) => sc => { const g = rows.filter(r => r[sk] === sc).map(r => r[key]); return g.length ? `${fv(Math.min(...g))}–${fv(Math.max(...g))}` : '—'; };
  const rR = rngOf('R', 'r', String), rF = rngOf('F', 'f', String), rM = rngOf('M', 'm', jt);
  const ties = ['R', 'F', 'M'].filter(key => { const sk = key.toLowerCase(); return [5, 4, 3, 2, 1].some(sc => rows.filter(r => r[sk] === sc).length !== k); });
  const segs = {}; rows.forEach(r => { (segs[r.seg] = segs[r.seg] || []).push(r); });
  const S = str => str;
  return {
    title: `RFM kuintil ${brand} — ${n} pelanggan (tanpa kalkulator)`, src: 'Soal acak · gaya latihan dosen', uses: ['dsn-quint', 'w5-recency', 'w5-code'].filter(k => F[k]),
    soal: [`Data penjualan "${brand}" tahun 2025. Reference date = 31/12/2025. Kerjakan TANPA kalkulator.`, '| Customer | Pembelian terakhir | Jumlah transaksi | Total belanja |', ...rows.map(r => `| ${r.id} | ${r.last} | ${r.F} | ${rpx(r.M)} |`), '',
      '(a) Hitung Recency (hari) tiap pelanggan.', '(b) Buat ranges untuk R, F, M dengan kuintil (5 kelompok sama banyak) lalu beri skor 1–5 (5 = terbaik).', '(c) Bentuk kode RFM.', '(d) Kelompokkan: Champions (R≥4,F≥4,M≥4) · Loyal (F≥4,M≥3,R≥3) · Potential Loyalist (R≥4,F 2–3,M 2–3) · At Risk (R≤2,F≥3,M≥3) · Hibernating (R≤2,F≤2,M≤2).'],
    steps: [
      { title: '(a) Recency tanpa kalkulator', why: 'R = (hari di bulan itu − tanggal) + sisa hari bulan-bulan setelahnya. Sisa hari: Jan 334 · Feb 306 · Mar 275 · Apr 245 · Mei 214 · Jun 184 · Jul 153 · Agu 122 · Sep 92 · Okt 61 · Nov 31 · Des 0.', tex: '', rows: [['Cust.', 'Terakhir', 'Hitungan', 'R'], ...rows.map(r => [r.id, r.last, `(${MDAYS[r.mo - 1]} − ${r.d}) + ${MDAYS.slice(r.mo).reduce((a, b) => a + b, 0)}`, String(r.R)])] },
      { title: '(b) Metode kuintil', why: `${n} pelanggan ÷ 5 = ${k} orang per skor. Urutkan dari terbaik, potong tiap ${k} orang. Nilai kembar di batas potongan → ikut kelompok atas.${ties.length ? ' Di soal ini ada kembar di ' + ties.join(', ') + ', jadi ada kelompok yang isinya bukan ' + k + '.' : ''}`, tex: `\\text{isi per skor} = \\tfrac{${n}}{5} = ${k}` },
      { title: '(b) Urutkan Recency', why: 'Hari paling sedikit (tanggal paling dekat ke 31 Des) = skor 5.', tex: '', rows: sortTbl('R', 'r', true, String) },
      { title: '(b) Urutkan Frequency', why: 'Transaksi terbanyak = skor 5.', tex: '', rows: sortTbl('F', 'f', false, String) },
      { title: '(b) Urutkan Monetary', why: 'Belanja terbesar = skor 5. Bandingkan dalam juta.', tex: '', rows: sortTbl('M', 'm', false, jt) },
      { title: '(b) Ranges hasil kuintil', why: 'Batas bawah–atas nilai di tiap kelompok.', tex: '', rows: [['Skor', 'Recency (hari)', 'Frequency', 'Monetary'], ...[5, 4, 3, 2, 1].map(sc => [String(sc), rR(sc), rF(sc), rM(sc)])] },
      { title: '(c) Kode RFM', why: 'Tempel skor R-F-M (bukan dijumlah).', tex: '', rows: [['Customer', 'Skor R', 'Skor F', 'Skor M', 'Kode'], ...rows.map(r => [r.id, r.r, r.f, r.m, r.code].map(String))] },
      { title: '(d) Segmen', why: 'Uji berurutan Champions → Loyal → Potential Loyalist → At Risk → Hibernating. Yang tidak cocok satu pun: sebutkan & beri label usulan (mis. Need Attention).', tex: '', rows: [['Segmen', 'Customer', 'Total belanja'], ...Object.keys(segs).map(s => [s, segs[s].map(r => r.id).join(', '), jt(segs[s].reduce((a, r) => a + r.M, 0))])] }
    ],
    answer: `(a) Recency: ${rows.map(r => r.id + ' ' + r.R).join(', ')}. (b) Kuintil ${k} orang per skor (kembar ikut atas). (c) Kode: ${rows.map(r => r.id + ' ' + r.code).join(', ')}. (d) ${Object.keys(segs).map(s => s + ': ' + segs[s].map(r => r.id).join(', ')).join(' · ')}.`
  };
}
/* ===== generator: ulasan → rating → % → negative ratio (gaya kedai kopi) ===== */
const BIZ = { kopi: ['kedai kopi', ['Kopi Senja', 'Seduh Pagi', 'Kopi Runcing']], skincare: ['brand skincare lokal', ['GlowNusa', 'SkinLab', 'Wangi Kulit']], fashion: ['brand fashion lokal', ['ARUNIKA', 'Batik Rasa', 'Kain Kita']] };
function genSent() {
  const bizKeys = Object.keys(BIZ).filter(b => SENT.filter(x => x.b === b).length >= 10);
  if (!bizKeys.length) return genRange();
  const b = pick(bizKeys), [kind, names] = BIZ[b], name = pick(names);
  let rows;
  for (let t = 0; t < 40; t++) {
    rows = shuffle(SENT.filter(x => x.b === b)).slice(0, 10);
    const d = {}; rows.forEach(x => Object.keys(x.a).forEach(k => { const e = d[k] = d[k] || { p: 0, n: 0 }; if (x.a[k] > 0) e.p++; else if (x.a[k] < 0) e.n++; }));
    const nr = Object.keys(d).map(k => d[k].n / Math.max(1, d[k].p + d[k].n)).sort((a, b) => b - a);
    if (Object.keys(d).length >= 3 && nr[0] > 0 && nr[0] !== nr[1]) break;
  }
  const n = rows.length, pos = rows.filter(x => x.r >= 4).length, neu = rows.filter(x => x.r === 3).length, neg = rows.filter(x => x.r <= 2).length;
  const dims = {}; rows.forEach(x => Object.keys(x.a).forEach(k => { const e = dims[k] = dims[k] || { p: 0, n: 0, z: 0 }; if (x.a[k] > 0) e.p++; else if (x.a[k] < 0) e.n++; else e.z++; }));
  const dk = Object.keys(dims).sort((a, c) => dims[c].n / Math.max(1, dims[c].p + dims[c].n) - dims[a].n / Math.max(1, dims[a].p + dims[a].n));
  const nr = k => dims[k].n / Math.max(1, dims[k].p + dims[k].n) * 100;
  const top = dk[0];
  const sgn = v => v > 0 ? '+' : v < 0 ? '−' : '0';
  return {
    title: `${name}: ${n} ulasan → rating → negative ratio`, src: 'Soal acak · gaya latihan dosen', uses: ['dsn-pct', 'dsn-nr'].filter(k => F[k]),
    soal: [`Berikut ${n} ulasan publik untuk ${name} (${kind}).`, '| ID | Ulasan |', ...rows.map((x, i) => `| R${i + 1} | ${x.t} |`), '',
      '1. Beri rating 1–5 untuk setiap ulasan.', '2. Hitung persentase rating negatif (1–2), netral (3), positif (4–5).', '3. Klasifikasikan ulasan ke minimal 3 dimensi dan hitung negative ratio tiap dimensi.', '4. Rumuskan 2 strategi untuk dimensi dengan negative ratio tertinggi.'],
    steps: [
      { title: '(1) Rating tiap ulasan', why: 'Aturan: 5 semua positif kuat · 4 positif moderat · 3 campuran/datar · 2 negatif ringan · 1 negatif kuat. Rating kamu boleh beda ±1 asal aturannya konsisten & ditulis.', tex: '', rows: [['ID', 'Rating', 'Dimensi & nada'], ...rows.map((x, i) => ['R' + (i + 1), String(x.r), Object.keys(x.a).map(k => k + ' ' + sgn(x.a[k])).join(', ')])] },
      { title: '(2) Persentase', why: `n = ${n}.`, tex: `\\text{Positif} = \\tfrac{${pos}}{${n}} = ${fmt(pos / n * 100, 2)}\\% \\quad \\text{Netral} = \\tfrac{${neu}}{${n}} = ${fmt(neu / n * 100, 2)}\\% \\quad \\text{Negatif} = \\tfrac{${neg}}{${n}} = ${fmt(neg / n * 100, 2)}\\%` },
      { title: '(3) Negative ratio per dimensi', why: 'NR = Negatif / (Positif + Negatif); netral tidak masuk pembagi.', tex: '', rows: [['Dimensi', 'Positif', 'Negatif', 'Netral', 'NR'], ...dk.map(k => [k, String(dims[k].p), String(dims[k].n), String(dims[k].z), `${dims[k].n}/${dims[k].p + dims[k].n} = ${fmt(nr(k), 1)}%`])] },
      { title: '(4) Masalah utama', why: `Negative ratio tertinggi: ${top} (${fmt(nr(top), 1)}%). Baca ulang ulasan negatifnya untuk akar masalah (validasi manual, W7).`, tex: '' },
      { title: '(4) Dua strategi', why: `Strategi harus spesifik ke ${top}: (a) perbaikan operasional/produk yang langsung menyasar keluhan (target terukur), (b) service recovery + komunikasi (balas ulasan, kompensasi, informasikan perbaikan). KPI: negative ratio ${top} bulan berikutnya.`, tex: '' }
    ],
    answer: `(1) ${rows.map((x, i) => 'R' + (i + 1) + ' = ' + x.r).join(', ')}. (2) Positif ${pos}/${n} = ${fmt(pos / n * 100, 2)}%, netral ${neu}/${n} = ${fmt(neu / n * 100, 2)}%, negatif ${neg}/${n} = ${fmt(neg / n * 100, 2)}%. (3) ${dk.map(k => k + ' ' + fmt(nr(k), 1) + '%').join(', ')}. (4) Fokus ${top}: perbaikan langsung atas keluhan + service recovery, pantau NR bulanan.`
  };
}
const GEN = { rfm: genRFM, dosen: () => (Math.random() < 0.5 ? genRange() : genSent()) };
const PATTERN = {
  dosen: [['Sentimen', '\\text{aturan rating} \\to \\%\\text{neg/net/pos} \\to NR = \\tfrac{\\text{Neg}}{\\text{Pos}+\\text{Neg}} \\to \\text{2 strategi}'], ['RFM kuintil', 'R = (\\text{hari bulan} - \\text{tgl}) + \\text{sisa},\\; \\tfrac{n}{5} \\text{ orang per skor}'], ['Skor & kode', '\\text{R dibalik; kode} = R\\|F\\|M'], ['Segmen dosen', '\\text{Champions} \\to \\text{Loyal} \\to \\text{Pot. Loyalist} \\to \\text{At Risk} \\to \\text{Hibernating}'], ['Prioritas', '\\text{severity} \\times \\text{urgency} \\to \\text{persona} \\to 3\\text{ program}']],
  rfm: [['Tanggal referensi', '\\text{MAX(TransactionDate), bukan TODAY()}'], ['R, F, M mentah', 'R = \\text{ref} - \\text{last},\\; F = \\#\\text{invoice},\\; M = \\sum \\text{Net}'], ['Rank', '\\text{R naik; F, M turun; kembar = rank sama}'], ['Skor', 'S = 6 - \\lceil \\text{rank}/n \\times 5 \\rceil'], ['Kode & FM', '\\text{Kode} = R\\|F\\|M,\\; FM = (F+M)/2'], ['Segmen & aksi', '\\text{grid } R \\times FM \\to \\text{strategi}']],
  clean: [['Unit of analysis', '\\text{1 baris} = \\text{apa?}'], ['Profil & deteksi', '\\text{missing, duplikat, kategori, tanggal, angka, teks, outlier}'], ['Rule', '\\text{kondisi} \\to \\text{aksi} \\to \\text{field/flag baru}'], ['Excel', '\\text{TRIM, LOWER, XLOOKUP, COUNTIFS, NUMBERVALUE, IFERROR}'], ['DQ log', '\\text{issue, deteksi, rule, rows, verifikasi}'], ['Limitasi & etika', '\\text{raw tetap utuh, privasi, bias}']],
  persona: [['Data → segmen', '\\text{RFM / clustering / tema}'], ['Profil segmen', '\\text{jumlah, rata-rata, channel, keluhan}'], ['Persona', '\\text{demografi, perilaku, motivasi, pain point, channel}'], ['Prioritas', '\\text{severity} \\times \\text{urgency}'], ['Strategi', '\\text{key message, channel, offer, goal}']]
};
const ES_LABEL = { dosen: 'Latihan dosen (bocoran)', teori: 'Essay teori', rfm: 'RFM & rekomendasi', clean: 'Cleaning data', persona: 'Persona & theme-sentiment' };
function Essay(type, idx) {
  if (!T[ES_TOPIC[type]]) return ES_KEYS.length ? location.replace('#/essay/' + ES_KEYS[0]) : location.replace('#/latihan');
  const t = T[ES_TOPIC[type]];
  const gen = GEN[type];
  mount(`<div class="page">
    <nav class="crumb"><a href="#/latihan">Latihan</a>${icon('chev')}<span>Studi kasus</span></nav>
    <header class="phead"><div class="kicker">Studi kasus</div><h1>Latihan kasus</h1><p class="lead">Kerjakan di kertas dulu. Tiap langkah pembahasan = poin rubrik — tulis langkahnya, bukan cuma jawaban akhir.</p>
      <div class="seg big" id="estype">${ES_KEYS.map((k, i) => `<a href="#/essay/${k}" class="${k === type ? 'on' : ''}"><span class="num">${i + 1}</span>${ES_LABEL[k] || esc(T[ES_TOPIC[k]].title)}</a>`).join('')}</div>
    </header>
    ${PATTERN[type] ? `<section class="card pattern"><div class="label">${icon('list')} Pola jawaban — ${ES_LABEL[type]}</div><ol>${PATTERN[type].map(p => `<li><b>${p[0]}</b>${tex(p[1])}</li>`).join('')}</ol></section>` : ''}
    <section class="sec"><div class="sec-h"><h2>Kasus</h2>${gen ? `<button class="btn primary sm" id="esnew">${icon('shuffle')} Soal baru (acak)</button>` : ''}</div>
      <div class="extabs" id="estabs">${t.examples.map((e, j) => `<button class="extab" data-j="${j}"><span>${j + 1}</span><em>${esc(e.title)}</em></button>`).join('')}${gen ? `<button class="extab" data-j="r"><span>${icon('shuffle')}</span><em>Acak</em></button>` : ''}</div>
      <div id="esbox"></div></section>
  </div>`);
  const box = $('#esbox');
  const tabs = on => $$('#estabs .extab').forEach(b => b.classList.toggle('on', b.dataset.j === String(on)));
  const showPool = j => { tabs(j); renderExample(box, t.examples[j], { index: j, total: t.examples.length, onNext: (j + 1 < t.examples.length ? () => showPool(j + 1) : gen ? showRand : null) }); history.replaceState(null, '', `#/essay/${type}/${j}`); };
  const showRand = () => { tabs('r'); const g = gen(); renderExample(box, g, { onNext: showRand }); history.replaceState(null, '', `#/essay/${type}`); };
  $$('#estabs .extab').forEach(b => { b.onclick = () => (b.dataset.j === 'r' ? showRand() : showPool(+b.dataset.j)); });
  if (gen) $('#esnew').onclick = () => { showRand(); box.scrollIntoView({ behavior: smooth(), block: 'start' }); };
  showPool(idx != null && idx < t.examples.length ? idx : 0);
}

/* ================= SIMULASI UJIAN ================= */
const SIM_MIX = { 1: 3, 2: 4, 3: 4, 4: 4, 5: 5, 6: 5, 7: 5 };
const SIM_N = Object.values(SIM_MIX).reduce((a, b) => a + b, 0);
const SIM_PG_PTS = 2;
const SIM_ES = ['teori', 'teori', 'dosen'];
const SIM_ES_PTS = 40 / 3;
const SIM_MIN = 120;
function newSim() {
  const pg = [];
  const dq = QZ.filter(q => q.src === 'dosen');
  Object.keys(SIM_MIX).forEach(w => {
    const want = SIM_MIX[w], fromD = shuffle(dq.filter(q => q.week === +w)).slice(0, Math.ceil(want / 2));
    const rest = shuffle(QZ.filter(q => q.week === +w && q.src !== 'dosen')).slice(0, want - fromD.length);
    fromD.concat(rest).forEach(q => pg.push(q.id));
  });
  const essays = [];
  const teori = T['es-teori'] ? shuffle(T['es-teori'].examples).slice(0, 2) : [];
  teori.forEach(ex => essays.push({ type: 'teori', ex }));
  const g = GEN.dosen ? GEN.dosen() : genRFM();
  essays.push({ type: 'dosen', ex: g });
  if (essays.length < 3) essays.push({ type: 'rfm', ex: genRFM() });
  return { v: 2, pg: shuffle(pg), ord: pg.map(id => shuffle(QMAP[id].opts.map((_, i) => i))), esPts: SIM_ES_PTS, pgPts: SIM_PG_PTS, ans: {}, flag: {}, essays: essays.map(E => ({ type: E.type, ex: { title: E.ex.title, src: E.ex.src, soal: E.ex.soal, steps: E.ex.steps, answer: E.ex.answer, uses: E.ex.uses } })), start: Date.now(), dur: SIM_MIN * 60 * 1000, status: 'run', cur: 0, rub: {} };
}
function Sim() {
  let st = Store.get('sim');
  if (st && st.v !== 2) { Store.set('sim', null); st = null; }
  if (st && st.status === 'run') return simRun(st);
  if (st && st.status === 'grade') return simGrade(st);
  const hist = Store.get('simHist', []);
  const pgMax = SIM_N * SIM_PG_PTS;
  mount(`<div class="page narrow">
    <header class="phead"><div class="kicker">Simulasi ujian</div><h1>Latihan ujian ${SIM_MIN} menit</h1><p class="lead">${SIM_N} PG (${pgMax} poin) + 3 essay (40 poin): 2 essay teori + 1 essay hitung gaya latihan dosen. Essay dikerjakan di kertas, lalu nilai sendiri pakai rubrik langkah.</p></header>
    <section class="card"><div class="fmt-list plain">
      <div><span class="num">${SIM_N}</span><span><b>Pilihan ganda — ${SIM_PG_PTS} poin/soal</b><small>${Object.keys(SIM_MIX).map(w => 'W' + w + ' ×' + SIM_MIX[w]).join(' · ')} — acak dari bank ${QZ.length} soal</small></span></div>
      <div><span class="num">3</span><span><b>Essay — 40 poin</b><small>2 teori (dari essay dosen + prediksi) + 1 hitungan (RFM kuintil / negative ratio, angka acak, tanpa kalkulator)</small></span></div>
      <div><span class="num">${icon('timer')}</span><span><b>Timer ${SIM_MIN} menit</b><small>Otomatis submit saat waktu habis. Progress tersimpan kalau halaman ditutup.</small></span></div>
    </div><p class="note">${icon('bulb')}<span>Disusun dari latihan dosen: PG 5 opsi (setengahnya soal asli dosen) + essay teori & hitungan. Bobot poin tebakan wajar.</span></p>
    <div class="row center mt"><button class="btn primary lg" id="simgo">${icon('play')} Mulai simulasi</button></div></section>
    ${hist.length ? `<div class="sec-h mt-l"><h2>Riwayat</h2></div><div class="card hist">${hist.slice().reverse().map(h => `<div class="hrow"><span>${new Date(h.at).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' })}</span><span>PG ${h.pg}/${pgMax}</span><span>Essay ${fmt(h.es, 1)}/40</span><b>${fmt(h.total, 1)}</b></div>`).join('')}</div>` : ''}
  </div>`);
  $('#simgo').onclick = () => { const s = newSim(); Store.set('sim', s); simRun(s); };
}
function simSave(st) { Store.set('sim', st); }
function simRun(st) {
  const N = st.pg.length;
  mount(`<div class="page sim">
    <div class="simbar"><div class="timer" id="stimer">--:--</div><div class="sim-prog" id="sprog"></div><button class="btn primary sm" id="ssub">Kumpulkan</button></div>
    <div class="sim-grid"><div id="sq"></div><aside class="card snav"><div class="label">Navigasi soal</div><div class="sgrid" id="sgrid"></div><div class="legend"><span><i class="lg-a"></i>dijawab</span><span><i class="lg-f"></i>ditandai</span></div><button class="btn ghost sm full" id="sexit">Keluar & simpan</button></aside></div>
  </div>`);
  function answered() { return Object.keys(st.ans).length; }
  function grid() {
    $('#sgrid').innerHTML = st.pg.map((id, i) => `<button class="${i === st.cur ? 'on ' : ''}${st.ans[i] != null ? 'a ' : ''}${st.flag[i] ? 'f' : ''}" data-i="${i}">${i + 1}</button>`).join('') + st.essays.map((e, j) => `<button class="es ${N + j === st.cur ? 'on' : ''}" data-i="${N + j}">K${j + 1}</button>`).join('');
    $$('#sgrid button').forEach(b => { b.onclick = () => { st.cur = +b.dataset.i; simSave(st); q(); }; });
    $('#sprog').innerHTML = `<span>${answered()}/${N} PG dijawab</span><div class="bar"><i style="width:${answered() / N * 100}%"></i></div>`;
  }
  function q() {
    const i = st.cur;
    if (i < N) {
      const Q = QMAP[st.pg[i]], ord = st.ord[i];
      $('#sq').innerHTML = `<article class="card qcard"><div class="row between"><span class="kicker">Soal ${i + 1} dari ${N} · ${SIM_PG_PTS} poin</span><button class="btn ghost sm ${st.flag[i] ? 'flagged' : ''}" id="sflag">${icon('flag')} ${st.flag[i] ? 'Ditandai' : 'Tandai'}</button></div>
        <div class="qtext">${qText(Q)}</div><div class="opts">${ord.map((oi, j) => `<button class="opt ${st.ans[i] === oi ? 'sel' : ''}" data-oi="${oi}"><span class="ol">${LETTERS[j]}</span><span class="ot">${esc(Q.opts[oi])}</span></button>`).join('')}</div>
        <div class="row between mt"><button class="btn ghost" id="sprev" ${i === 0 ? 'disabled' : ''}>${icon('chevl')} Sebelumnya</button><button class="btn" id="snext">Berikutnya ${icon('chev')}</button></div></article>`;
      $$('.opt', $('#sq')).forEach(b => { b.onclick = () => { st.ans[i] = +b.dataset.oi; simSave(st); $$('.opt', $('#sq')).forEach(x => x.classList.toggle('sel', x === b)); grid(); }; });
      $('#sflag').onclick = () => { st.flag[i] = !st.flag[i]; simSave(st); q(); };
    } else {
      const j = i - N, E = st.essays[j];
      $('#sq').innerHTML = `<article class="card qcard"><div class="row between"><span class="kicker">Essay ${j + 1} · ${ES_LABEL[E.type] || ''} · ${fmt(SIM_ES_PTS, 1)} poin</span></div>
        <div class="soal">${soalHTML(E.ex.soal)}</div><p class="note">${icon('pen')}<span>Kerjakan di kertas dengan langkah lengkap. Pembahasan & rubrik muncul setelah kamu kumpulkan.</span></p>
        <div class="row between mt"><button class="btn ghost" id="sprev">${icon('chevl')} Sebelumnya</button><button class="btn" id="snext" ${j === st.essays.length - 1 ? 'disabled' : ''}>Berikutnya ${icon('chev')}</button></div></article>`;
    }
    const pv = $('#sprev'), nx = $('#snext');
    if (pv) pv.onclick = () => { st.cur = Math.max(0, st.cur - 1); simSave(st); q(); };
    if (nx) nx.onclick = () => { st.cur = Math.min(N + st.essays.length - 1, st.cur + 1); simSave(st); q(); };
    grid();
  }
  function tick() {
    const left = st.start + st.dur - Date.now();
    if (left <= 0) { clearInterval(tm); finish(); return; }
    const m = Math.floor(left / 60000), s = Math.floor(left % 60000 / 1000);
    const el = $('#stimer'); if (!el) return;
    el.textContent = `${m}:${String(s).padStart(2, '0')}`;
    el.classList.toggle('warn', left < 10 * 60000);
  }
  function finish() { st.status = 'grade'; st.end = Date.now(); simSave(st); simGrade(st); }
  const tm = setInterval(tick, 1000); onDispose(() => clearInterval(tm)); tick();
  $('#ssub').onclick = async () => {
    const un = N - answered();
    const ok = await modal(`<h3>Kumpulkan jawaban?</h3><p>${un ? `<b>${un} soal PG belum dijawab.</b> ` : ''}Setelah dikumpulkan, jawaban tidak bisa diubah.</p>`, [{ label: 'Batal', value: false }, { label: 'Kumpulkan', value: true, primary: true }]);
    if (ok) { clearInterval(tm); finish(); }
  };
  $('#sexit').onclick = () => { location.hash = '#/'; };
  q();
}
function simGrade(st) {
  const N = st.pg.length;
  let right = 0;
  st.pg.forEach((id, i) => { if (st.ans[i] === QMAP[id].ans) right++; });
  const PGP = st.pgPts || SIM_PG_PTS, ESP = st.esPts || SIM_ES_PTS;
  const pgScore = right * PGP;
  const esScore = () => st.essays.reduce((s, E, j) => { const r = st.rub[j] || {}; const c = Object.keys(r).filter(k => r[k]).length; return s + c / E.ex.steps.length * ESP; }, 0);
  const mins = Math.round(((st.end || Date.now()) - st.start) / 60000);
  mount(`<div class="page narrow">
    <header class="phead"><div class="kicker">Hasil simulasi ujian</div><h1>Nilai kamu</h1><p class="lead">Waktu pengerjaan ${mins} menit.</p></header>
    <section class="card result"><div class="sc-row"><div><small>PG</small><b>${pgScore}</b><span>/${N * PGP}</span></div><div><small>Essay</small><b id="ess">0</b><span>/${fmt(st.essays.length * ESP, 0)}</span></div><div class="tot"><small>Total</small><b id="tot">0</b><span>/100</span></div></div>
      <p class="muted center">PG dinilai otomatis (${right}/${N} benar). Nilai essay: centang langkah yang kamu tulis dengan benar di kertas.</p></section>
    <div class="sec-h mt-l"><h2>Studi kasus — nilai sendiri</h2></div>
    ${st.essays.map((E, j) => `<section class="card rubric" data-j="${j}"><div class="row between"><div class="label">Essay ${j + 1} · ${ES_LABEL[E.type] || ''}</div><span class="tag" id="rs${j}"></span></div><div class="soal sm">${soalHTML(E.ex.soal)}</div>
      <div class="rsteps">${E.ex.steps.map((s, k) => `<label class="rstep"><input type="checkbox" data-k="${k}" ${st.rub[j] && st.rub[j][k] ? 'checked' : ''}><span class="rb"><span class="step-t">${k + 1}. ${esc(s.title)}</span>${s.rows && s.rows.length ? tableHTML(s.rows, 'sm') : ''}${s.tex ? `<span class="step-math">${tex(s.tex, true)}</span>` : ''}</span></label>`).join('')}</div>${answerHTML(E.ex.answer)}</section>`).join('')}
    <div class="sec-h mt-l"><h2>Review PG</h2><span class="muted sm">${right} benar · ${N - right} salah/kosong</span></div>
    ${st.pg.map((id, i) => { const Q = QMAP[id], ok = st.ans[i] === Q.ans; return `<details class="card rev"><summary><span class="${ok ? 'okc' : 'noc'}">${icon(ok ? 'check' : 'x')}</span><span>${i + 1}. ${esc(Q.q[0]).slice(0, 110)}${Q.q[0].length > 110 ? '…' : ''}</span></summary><div class="qtext">${qText(Q)}</div><div class="opts">${optsHTML(Q, st.ord[i], st.ans[i] == null ? -1 : st.ans[i], true)}</div>${whyHTML(Q)}</details>`; }).join('')}
    <div class="row center mt-l"><button class="btn" id="sdone">Simpan nilai & selesai</button><button class="btn primary" id="snew">${icon('refresh')} Simulasi baru</button></div>
  </div>`);
  function upd() {
    st.essays.forEach((E, j) => { const r = st.rub[j] || {}; const c = Object.keys(r).filter(k => r[k]).length; $('#rs' + j).textContent = `${fmt(c / E.ex.steps.length * ESP, 1)} / ${fmt(ESP, 1)}`; });
    const es = esScore(); $('#ess').textContent = fmt(es, 1); $('#tot').textContent = fmt(pgScore + es, 1);
  }
  $$('.rubric').forEach(sec => { const j = +sec.dataset.j; $$('input', sec).forEach(cb => { cb.onchange = () => { st.rub[j] = st.rub[j] || {}; st.rub[j][cb.dataset.k] = cb.checked; simSave(st); upd(); }; }); });
  const save = () => { if (st.saved) return; const h = Store.get('simHist', []); h.push({ at: Date.now(), pg: pgScore, es: esScore(), total: pgScore + esScore() }); Store.set('simHist', h.slice(-20)); st.saved = true; };
  $('#sdone').onclick = () => { save(); Store.set('sim', null); location.hash = '#/uts'; };
  $('#snew').onclick = () => { save(); const s = newSim(); Store.set('sim', s); simRun(s); };
  upd();
}
