const fs=require('fs');const app=fs.readFileSync('build/_app.js','utf8');const html=fs.readFileSync('out/index.html','utf8');
const dm=html.match(/window\.__DATA__=(.*?);<\/script>/s)[1];
global.window={__DATA__:JSON.parse(dm.replace(/<\\\//g,'</')),matchMedia:()=>({matches:false})};global.matchMedia=()=>({matches:false});
global.document={querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){},getElementById:()=>null,body:{classList:{toggle(){},remove(){}}}};
global.localStorage={getItem:()=>null,setItem(){}};global.katex={renderToString:s=>s};global.location={hash:'#/'};global.history={replaceState(){}};
eval(app.slice(0,app.indexOf('/* ================= BOOT'))+';globalThis.G={genRange,newSim};');
const out=[];for(let i=0;i<300;i++)out.push(G.genRange());fs.writeFileSync('/tmp/rg.json',JSON.stringify(out));console.log('ok',out[0].answer.slice(0,200));
