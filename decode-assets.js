const fs=require('fs');const path=require('path');
for (const f of fs.readdirSync('assets')) {
  if(!f.endsWith('.b64')) continue;
  const target=path.join('assets', f.slice(0,-4));
  fs.writeFileSync(target, Buffer.from(fs.readFileSync(path.join('assets',f),'utf8'),'base64'));
  console.log('decoded', target);
}
