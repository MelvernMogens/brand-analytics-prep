const fs=require('fs');
const html=fs.readFileSync('out/index.html','utf8');
const app=fs.readFileSync('build/_app.js','utf8');
const dm=html.match(/window\.__DATA__=(.*?);<\/script>/s)[1];
global.window={__DATA__:JSON.parse(dm.replace(/<\\\//g,'</')),matchMedia:()=>({matches:false})};
global.document={querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},getElementById:()=>null,body:{classList:{toggle(){},remove(){}}}};
global.matchMedia=()=>({matches:false});global.localStorage={getItem:()=>null,setItem(){}};global.katex={renderToString:s=>s};global.location={hash:'#/'};global.history={replaceState(){}};
const code=app.slice(0,app.indexOf('/* ================= BOOT'))+`
;globalThis.__t={nbCompute,genRFM,rfmCompute,qScore,rankEq};`;
eval(code);
const {nbCompute,genRFM,qScore}=globalThis.__t;
const nb=JSON.parse(fs.readFileSync('content/data/nusabean.json'));
const r=nbCompute({}).rows; let bad=0;
r.forEach(x=>{const k=nb.C[x.id]; if(x.R!==k.R||x.F!==k.F||Math.abs(x.M-k.M)>1e-6||x.code!==k.code||x.seg!==k.seg){bad++;console.log('MISMATCH',x,k.code,k.seg)}});
console.log('NB JS vs Python mismatches:',bad,'of',r.length);
const g=nbCompute({gross:true}).rows.filter((x,i)=>x.m!==r[i].m).map(x=>x.id); console.log('gross changes m:',g);
const u=nbCompute({units:true}).rows.filter((x,i)=>x.seg!==r[i].seg).map(x=>x.id+':'+x.seg); console.log('units seg changes:',u);
const t=nbCompute({today:true}).rows.filter((x,i)=>x.seg!==r[i].seg).length; console.log('today seg changes:',t);
// dump 300 random RFM gens for python cross-check
const out=[];for(let i=0;i<300;i++){const e=genRFM();out.push(e)}
fs.writeFileSync(require('os').tmpdir()+'/gens.json',JSON.stringify(out));console.log('gen ok',out[0].title,out[0].answer.slice(0,160));
