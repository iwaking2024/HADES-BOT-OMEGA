const _0x3580e1=_0x3fea;(function(_0x3d1c09,_0x463815){const _0x34b329=_0x3fea,_0xaa42c4=_0x3d1c09();while(!![]){try{const _0x6284ae=parseInt(_0x34b329(0x68))/0x1*(-parseInt(_0x34b329(0x69))/0x2)+-parseInt(_0x34b329(0x6a))/0x3+parseInt(_0x34b329(0x6b))/0x4*(parseInt(_0x34b329(0x6c))/0x5)+parseInt(_0x34b329(0x6d))/0x6*(-parseInt(_0x34b329(0x6e))/0x7)+parseInt(_0x34b329(0x6f))/0x8*(parseInt(_0x34b329(0x70))/0x9)+-parseInt(_0x34b329(0x71))/0xa+parseInt(_0x34b329(0x72))/0xb*(parseInt(_0x34b329(0x73))/0xc);if(_0x6284ae===_0x463815)break;else _0xaa42c4['push'](_0xaa42c4['shift']());}catch(_0xdd6586){_0xaa42c4['push'](_0xaa42c4['shift']());}}}(_0x5d22,0x87c94));function _0x3fea(_0x398d63,_0x2414ff){const _0x5d2284=_0x5d22();return _0x3fea=function(_0x3fea0e,_0x36e133){_0x3fea0e=_0x3fea0e-0x68;let _0x29d963=_0x5d2284[_0x3fea0e];return _0x29d963;},_0x3fea(_0x398d63,_0x2414ff);}import{canLevelUp,xpRange}from'../lib/levelling.js';function _0x5d22(){const _0x52cd3c=['help','tags','command','lvl','323905ANiFKJ','4pXoITe','950754NbuIQs','126536qCWvHH','110xjtjgw','2586738EkMJZS','7QjVFxt','192myOufK','176139AbJrwj','10952920CoZENT','11QdkRrb','22580052JvuAbE','data','users','sender','exp','level','multiplier','╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\x0a│➯─⊷\x20*LEVEL\x0a│➯Nombre\x20:\x20*','*\x0a│➯Nivel\x20:\x20*','*\x0a│➯XP\x20:\x20*','*\x0a╰───────────────╯\x0aYou\x20need\x20*','*\x20of\x20*XP*\x20to\x20level\x20up','trim','🎊\x20Bien\x20hecho\x20','getName','╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」\x0a│➯─⊷\x20*LEVEL\x20UP*\x0a│➯Nivel\x20anterior\x20:\x20*','*\x0a│➯Nivel\x20actual\x20:\x20*','*\x0a╰───────────────╯\x0aThe\x20more\x20you\x20interact\x20with\x20the\x20bots,\x20the\x20higher\x20your\x20level\x20will\x20be_*','sendFile','chat','reply'];_0x5d22=function(){return _0x52cd3c;};return _0x5d22();}import{levelup}from'../lib/canvas.js';let handler=async(_0x169aa1,{conn:_0x547d09})=>{const _0x25a98f=_0x3fea;let _0x10883a=_0x547d09['getName'](_0x169aa1['sender']),_0x4fa443=global['db'][_0x25a98f(0x74)][_0x25a98f(0x75)][_0x169aa1[_0x25a98f(0x76)]];if(!canLevelUp(_0x4fa443['level'],_0x4fa443[_0x25a98f(0x77)],global['multiplier'])){let {min:_0xc6e169,xp:_0x896495,max:_0x2ad0b9}=xpRange(_0x4fa443[_0x25a98f(0x78)],global[_0x25a98f(0x79)]);throw(_0x25a98f(0x7a)+_0x10883a+_0x25a98f(0x7b)+_0x4fa443[_0x25a98f(0x78)]+_0x25a98f(0x7c)+(_0x4fa443[_0x25a98f(0x77)]-_0xc6e169)+'/'+_0x896495+_0x25a98f(0x7d)+(_0x2ad0b9-_0x4fa443[_0x25a98f(0x77)])+_0x25a98f(0x7e))[_0x25a98f(0x7f)]();}let _0x4413d1=_0x4fa443['level']*0x1;while(canLevelUp(_0x4fa443['level'],_0x4fa443[_0x25a98f(0x77)],global[_0x25a98f(0x79)]))_0x4fa443[_0x25a98f(0x78)]++;if(_0x4413d1!==_0x4fa443[_0x25a98f(0x78)]){let _0x1a087f=_0x25a98f(0x80)+_0x547d09[_0x25a98f(0x81)](_0x169aa1['sender'])+'\x20\x20\x20\x20Nivel:',_0x31af53=(_0x25a98f(0x82)+_0x4413d1+_0x25a98f(0x83)+_0x4fa443[_0x25a98f(0x78)]+_0x25a98f(0x84))[_0x25a98f(0x7f)]();try{const _0x3ce9a1=await levelup(_0x1a087f,_0x4fa443[_0x25a98f(0x78)]);_0x547d09[_0x25a98f(0x85)](_0x169aa1[_0x25a98f(0x86)],_0x3ce9a1,'levelup.jpg',_0x31af53,_0x169aa1);}catch(_0x220f27){_0x169aa1[_0x25a98f(0x87)](_0x31af53);}}};handler[_0x3580e1(0x88)]=['levelup'],handler[_0x3580e1(0x89)]=['xp'],handler[_0x3580e1(0x8a)]=['nivel',_0x3580e1(0x8b),'levelup',_0x3580e1(0x78)],handler['register']=!![];export default handler;