#!/usr/bin/env python3
"""Verified numbers for the lecturer's practice essays (Chitosi RFM + Kedai Kopi sentiment)."""
import json, math, datetime as dt, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent
CH = [("C21","08/11/2025",6,3450000),("C22","18/01/2025",2,1250000),("C23","27/10/2025",11,6200000),("C24","03/06/2025",4,2350000),
("C25","14/11/2025",8,4650000),("C26","22/08/2025",3,1750000),("C27","06/12/2025",9,5150000),("C28","11/02/2025",7,3850000),
("C29","19/09/2025",5,2600000),("C30","29/11/2025",12,6750000),("C31","16/05/2025",1,650000),("C32","04/10/2025",7,3200000),
("C33","23/07/2025",5,2950000),("C34","09/12/2025",10,5600000),("C35","17/03/2025",3,1450000),("C36","26/10/2025",8,4300000),
("C37","02/01/2025",9,4750000),("C38","13/12/2025",4,2050000),("C39","30/09/2025",6,3700000),("C40","21/06/2025",2,1100000)]
ref = dt.date(2025,12,31)
rows=[]
for cid,d,f,m in CH:
    dd,mm,yy = map(int,d.split('/'))
    rows.append(dict(id=cid,last=d,R=(ref-dt.date(yy,mm,dd)).days,F=f,M=m))
def ranges(vals):
    lo,hi=min(vals),max(vals); w=(hi-lo)/5
    return lo,hi,w,[(lo+i*w, lo+(i+1)*w) for i in range(5)]
def bin_idx(v,lo,w):  # 0..4, top edge inclusive in last bin
    return min(4,int((v-lo)//w)) if w else 0
out={'ref':str(ref)}
for k in 'RFM':
    lo,hi,w,rg=ranges([r[k] for r in rows]); out[k]=dict(min=lo,max=hi,width=w,ranges=rg)
for r in rows:
    iR=bin_idx(r['R'],out['R']['min'],out['R']['width']); r['r']=5-iR          # small days = 5
    r['f']=bin_idx(r['F'],out['F']['min'],out['F']['width'])+1
    r['m']=bin_idx(r['M'],out['M']['min'],out['M']['width'])+1
    r['code']=f"{r['r']}{r['f']}{r['m']}"
    R,F,M=r['r'],r['f'],r['m']
    if R>=4 and F>=4 and M>=4: s='Champions'
    elif F>=4 and M>=3 and R>=3: s='Loyal Customers'
    elif R>=4 and 2<=F<=3 and 2<=M<=3: s='Potential Loyalist'
    elif R<=2 and F>=3 and M>=3: s='At Risk'
    elif R<=2 and F<=2 and M<=2: s='Hibernating'
    else: s='Tidak masuk kriteria'
    r['seg']=s
out['rows']=rows
seg={}
for r in rows:
    x=seg.setdefault(r['seg'],dict(n=0,M=0,ids=[],F=0)); x['n']+=1; x['M']+=r['M']; x['F']+=r['F']; x['ids'].append(r['id'])
out['seg']=seg; out['totalM']=sum(r['M'] for r in rows)
# ---- Kedai kopi
K=[("RV-01",5,{"Produk":1,"Pelayanan":1}),("RV-02",3,{"Suasana":1,"Pelayanan":-1}),("RV-03",5,{"Pengiriman & Kemasan":1,"Produk":1}),
("RV-04",2,{"Pengiriman & Kemasan":-1}),("RV-05",4,{"Suasana":1,"Produk":1,"Pelayanan":1}),("RV-06",3,{"Pengiriman & Kemasan":1,"Produk":0}),
("RV-07",4,{"Pelayanan":1,"Harga":1}),("RV-08",1,{"Pengiriman & Kemasan":-1}),("RV-09",4,{"Pengiriman & Kemasan":1,"Produk":1}),
("RV-10",5,{"Produk":1,"Pelayanan":1}),("RV-11",2,{"Produk":-1,"Pelayanan":-1}),("RV-12",5,{"Pengiriman & Kemasan":1}),
("RV-13",3,{"Suasana":1,"Produk":0}),("RV-14",5,{"Pengiriman & Kemasan":1,"Produk":1}),("RV-15",2,{"Pelayanan":-1})]
n=len(K); pos=sum(1 for _,r,_ in K if r>=4); neu=sum(1 for _,r,_ in K if r==3); neg=sum(1 for _,r,_ in K if r<=2)
dims={}
for _,_,a in K:
    for d,v in a.items():
        x=dims.setdefault(d,dict(pos=0,neg=0,neu=0)); x['pos' if v>0 else 'neg' if v<0 else 'neu']+=1
for d,x in dims.items(): x['nr']=x['neg']/(x['pos']+x['neg']) if x['pos']+x['neg'] else 0
out['kopi']=dict(n=n,pos=pos,neu=neu,neg=neg,dims=dims,per=[(i,r,sum(1 for v in a.values() if v<0),sum(1 for v in a.values() if v!=0)) for i,r,a in K])
(ROOT/'content'/'data'/'leak.json').write_text(json.dumps(out,indent=1))
for k in 'RFM': print(k, {kk:out[k][kk] for kk in ('min','max','width')}, [(round(a,1),round(b,1)) for a,b in out[k]['ranges']])
for r in rows: print(r['id'],r['last'],r['R'],r['F'],r['M'],r['code'],r['seg'])
for s,x in seg.items(): print(s,x['n'],x['M'],x['ids'])
print('kopi',pos,neu,neg,[round(v*100/n,2) for v in (pos,neu,neg)])
for d,x in dims.items(): print(d,x,round(x['nr']*100,1))
