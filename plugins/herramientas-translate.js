const _0x517770=_0xfd63;(function(_0x11ed42,_0x1a12ee){const _0x5f170f=_0xfd63,_0x578a49=_0x11ed42();while(!![]){try{const _0x2684ba=-parseInt(_0x5f170f(0x0))/0x1+parseInt(_0x5f170f(0x1))/0x2+-parseInt(_0x5f170f(0x2))/0x3+-parseInt(_0x5f170f(0x3))/0x4+-parseInt(_0x5f170f(0x4))/0x5*(-parseInt(_0x5f170f(0x5))/0x6)+-parseInt(_0x5f170f(0x6))/0x7*(parseInt(_0x5f170f(0x7))/0x8)+parseInt(_0x5f170f(0x8))/0x9;if(_0x2684ba===_0x1a12ee)break;else _0x578a49['push'](_0x578a49['shift']());}catch(_0x275e0a){_0x578a49['push'](_0x578a49['shift']());}}}(_0x2006,0x201b6));import _0x327100 from'@vitalets/google-translate-api';import _0x1c019b from'node-fetch';function _0xfd63(_0x310c1d,_0x200697){const _0x105bbe=_0x2006();return _0xfd63=function(_0x540153,_0x223b1f){_0x540153=_0x540153-0x0;let _0x19d767=_0x105bbe[_0x540153];return _0x19d767;},_0xfd63(_0x310c1d,_0x200697);}let handler=async(_0x5174df,{args:_0x25e16e,usedPrefix:_0x391b0a,command:_0x274d6d})=>{const _0x1be2e6=_0xfd63;let _0x5f23e5=_0x1be2e6(0x9)+(_0x391b0a+_0x274d6d)+_0x1be2e6(0xa)+(_0x391b0a+_0x274d6d)+_0x1be2e6(0xb);if(!_0x25e16e||!_0x25e16e[0x0])return _0x5174df[_0x1be2e6(0xc)](_0x5f23e5);let _0x252913=_0x25e16e[0x0],_0x5360be=_0x25e16e['slice'](0x1)[_0x1be2e6(0xd)]('\x20');const _0x3534dc='es';(_0x25e16e[0x0]||'')[_0x1be2e6(0xe)]!==0x2&&(_0x252913=_0x3534dc,_0x5360be=_0x25e16e['join']('\x20'));if(!_0x5360be&&_0x5174df[_0x1be2e6(0xf)]&&_0x5174df['quoted'][_0x1be2e6(0x10)])_0x5360be=_0x5174df['quoted'][_0x1be2e6(0x10)];try{let _0x58afe1=await _0x327100(''+_0x5360be,{'to':_0x252913,'autoCorrect':!![]});await _0x5174df[_0x1be2e6(0xc)](_0x1be2e6(0x11)+_0x58afe1[_0x1be2e6(0x10)]);}catch{try{let _0x4c4c9a=await _0x1c019b(_0x1be2e6(0x12)+_0x252913+'?apikey='+lolkeysapi+'&text='+_0x5360be),_0x3b87ec=await _0x4c4c9a[_0x1be2e6(0x13)](),_0x429b15=_0x3b87ec[_0x1be2e6(0x14)][_0x1be2e6(0x15)];await _0x5174df[_0x1be2e6(0xc)](_0x1be2e6(0x11)+_0x429b15);}catch{await _0x5174df[_0x1be2e6(0xc)]('*[❗𝐈𝐍𝐅𝐎❗]\x20ERROR,\x20VUELVA\x20A\x20INTENTARLO*');}}};handler[_0x517770(0x16)]=/^(translate|traducir|trad)$/i,handler[_0x517770(0x17)]=!![];function _0x2006(){const _0x41b187=['register','225015dJrbKk','462382ekcOHO','472986AmbmYA','381036qLvcpB','412310KOdihI','18emMrLc','7phaGWk','220712dSkJPy','1426122XMNPLk','*[❗𝐈𝐍𝐅𝐎❗]\x20𝚄𝚂𝙾\x20𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾\x20𝙳𝙴𝙻\x20𝙲𝙾𝙼𝙰𝙽𝙳𝙾\x20','\x20(idioma)\x20(texto)*\x0a*𝙴𝙹𝙴𝙼𝙿𝙻𝙾:*\x0a*','\x20es\x20Hello*\x0a\x0a*𝙲𝙾𝙽𝙾𝙲𝙴\x20𝙻𝙾𝚂\x20𝙸𝙳𝙸𝙾𝙼𝙰𝚂\x20𝙰𝙳𝙼𝙸𝚃𝙸𝙳𝙾𝚂\x20𝙴𝙽:*\x0a*-\x20https://cloud.google.com/translate/docs/languages*','reply','join','length','quoted','text','*Traducción:*\x20','https://api.lolhuman.xyz/api/translate/auto/','json','result','translated','command'];_0x2006=function(){return _0x41b187;};return _0x2006();}export default handler;