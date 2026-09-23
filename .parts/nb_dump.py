import json
nb = json.load(open('content/data/nusabean.json'))
print('ref', nb['ref'], 'n', nb['n'], 'ntx', nb['ntx'], 'total', nb['total'], 'gross', nb['gross_total'])
print('top4', nb['top4'], nb['top4sum'], nb['top4pct'])
print(f"{'cust':9} {'last':11} {'R':>4} {'F':>3} {'M':>8} {'r':>2} {'f':>2} {'m':>2} {'fm':>5} {'code':>5} {'tot':>4}  seg")
for k, v in nb['C'].items():
    print(f"{k:9} {v['last']:11} {v['R']:>4} {v['F']:>3} {v['M']:>8.2f} {v['r']:>2} {v['f']:>2} {v['m']:>2} {v['fm']:>5} {v['code']:>5} {v['tot']:>4}  {v['seg']}")
# segmen aggregates
agg = {}
for k, v in nb['C'].items():
    s = agg.setdefault(v['seg'], [0, 0.0])
    s[0] += 1
    s[1] += v['M']
print()
for s, (c, m) in sorted(agg.items(), key=lambda x: -x[1][1]):
    print(f'{s:20} {c:>2} cust  {m:>8.2f}')
