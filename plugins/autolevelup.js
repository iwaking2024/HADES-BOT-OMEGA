import{canLevelUp,xpRange}from'../lib/levelling.js';import{levelup}from'../lib/canvas.js';export function before(_0x1bfdbf,{conn:_0x4989c4}){let _0x18b554=global['db']['data']['users'][_0x1bfdbf['sender']];if(!_0x18b554['autolevelup'])return!0x0;let _0x5914fb={'key':{'participants':'0@s.whatsapp.net','remoteJid':'status@broadcast','fromMe':![],'id':'Halo'},'message':{'contactMessage':{'vcard':'BEGIN:VCARD\x0aVERSION:3.0\x0aN:Sy;Bot;;;\x0aFN:y\x0aitem1.TEL;waid='+_0x1bfdbf['sender']['split']('@')[0x0]+':'+_0x1bfdbf['sender']['split']('@')[0x0]+'\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD'}},'participant':'0@s.whatsapp.net'},_0x1fa9c0=_0x18b554['level']*0x1;while(canLevelUp(_0x18b554['level'],_0x18b554['exp'],global['multiplier']))_0x18b554['level']++;if(_0x1fa9c0!==_0x18b554['level']){let _0x549a7f='@'+_0x1bfdbf['sender']['split']('@s.whatsapp.net')[0x0];_0x1bfdbf['reply']((gt+'\x0a乂✰\x20*𝗛ᴏʟᴀ,➟'+_0x549a7f+'\x20\x0a乂✰\x20🥳\x20Felicidades\x20ha\x20subido\x20de\x20nivel\x0a乂✰\x20🔸Nivel\x20Anterior:\x20'+_0x1fa9c0+'\x20\x0a乂✰\x20\x20⬆️Nivel\x20Actual:\x20'+_0x18b554['level']+'\x20\x0a乂✰\x20\x20⚔️ʀᴀɴɢᴏ:\x20'+_0x18b554['role']+'\x0a乂✰\x20📊Poder:\x20'+_0x18b554['role2']+'\x20\x0a乂✰\x20📅𝐅𝐞𝐜𝐡𝐚:\x20'+new Date()['toLocaleString']('id-ID')+'\x20\x0a')['trim']());}}
