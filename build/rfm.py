#!/usr/bin/env python3
"""Recompute NusaBean RFM from raw transactions (replicating the Excel formulas) and
verify against the facilitator key. Writes build/rfm.json used by @check expressions."""
import json, math, pathlib, datetime as dt
ROOT = pathlib.Path(__file__).resolve().parent.parent
src = json.loads((ROOT / 'content' / 'data' / 'nusabean_src.json').read_text())
raw = src['raw']  # inv, cust, date, cat, qty, unit, disc, gross, net
key = {k[0]: k for k in src['key']}
ref = max(dt.date.fromisoformat(r[2]) for r in raw)
custs = sorted({r[1] for r in raw})
C = {}
for c in custs:
    rows = [r for r in raw if r[1] == c]
    last = max(dt.date.fromisoformat(r[2]) for r in rows)
    C[c] = dict(last=str(last), R=(ref - last).days, F=len(rows), M=round(sum(r[8] for r in rows), 2),
                G=round(sum(r[7] for r in rows), 2), inv=[(r[0], r[2], r[8]) for r in sorted(rows, key=lambda r: r[2])])
n = len(custs)
def rank(vals, v, asc):  # RANK.EQ
    return 1 + sum(1 for x in vals if (x < v if asc else x > v))
Rs = [C[c]['R'] for c in custs]; Fs = [C[c]['F'] for c in custs]; Ms = [C[c]['M'] for c in custs]
for c in custs:
    d = C[c]
    d['r'] = 6 - math.ceil(round(rank(Rs, d['R'], True) / n * 5, 9))
    d['f'] = 6 - math.ceil(round(rank(Fs, d['F'], False) / n * 5, 9))
    d['m'] = 6 - math.ceil(round(rank(Ms, d['M'], False) / n * 5, 9))
    d['fm'] = (d['f'] + d['m']) / 2
    d['code'] = f"{d['r']}{d['f']}{d['m']}"
    d['tot'] = d['r'] + d['f'] + d['m']
    r, fm = d['r'], d['fm']
    band = 'H' if fm >= 4 else 'M' if fm >= 2.5 else 'L'
    if r == 5: seg = {'H': 'Champions', 'M': 'Recent Users', 'L': 'Price Sensitive'}[band]
    elif r == 4: seg = {'H': 'Loyal Customers', 'M': 'Potential Loyalist', 'L': 'Promising'}[band]
    elif r == 3: seg = {'H': 'Loyal Customers', 'M': 'Needs Attention', 'L': 'About To Sleep'}[band]
    else: seg = {'H': "Can't Lose Them", 'M': 'Hibernating', 'L': 'Lost'}[band]
    d['seg'] = seg
bad = []
for c in custs:
    k = key[c]; d = C[c]
    exp = (k[1], k[2], round(k[3], 2), k[4], k[5], k[6], k[7], str(k[8]), k[9])
    got = (d['R'], d['F'], d['M'], d['r'], d['f'], d['m'], d['fm'], d['code'], d['seg'])
    if exp != got: bad.append((c, exp, got))
total = round(sum(Ms), 2)
top4 = sorted(custs, key=lambda c: -C[c]['M'])[:4]
top4s = round(sum(C[c]['M'] for c in top4), 2)
seg = {}
for c in custs:
    s = seg.setdefault(C[c]['seg'], dict(n=0, M=0, ids=[]))
    s['n'] += 1; s['M'] = round(s['M'] + C[c]['M'], 2); s['ids'].append(c)
out = dict(ref=str(ref), n=n, ntx=len(raw), total=total, top4=top4, top4sum=top4s, top4pct=round(top4s / total * 100, 2),
           gross_total=round(sum(r[7] for r in raw), 2), C=C, SEG=seg)
(ROOT / 'content' / 'data' / 'nusabean.json').write_text(json.dumps(out, indent=1))
print('ref', ref, 'customers', n, 'tx', len(raw), 'total net', total, 'gross', out['gross_total'])
print('mismatch vs facilitator key:', bad or 'NONE')
print('top4', top4, top4s, out['top4pct'], '%')
for s, v in sorted(seg.items(), key=lambda x: -x[1]['M']): print(f"  {s:20s} n={v['n']} M={v['M']:.2f} {v['M']/total*100:.1f}% {v['ids']}")
for c in custs: d = C[c]; print(c, d['last'], d['R'], d['F'], d['M'], d['G'], d['code'], d['fm'], d['seg'])
