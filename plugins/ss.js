
/**
██╗░░██╗░█████╗░███╗░░██╗░██████╗░█████╗░███╗░░░███╗░█████╗░██╗░░░░░░░░░░░███╗░░░███╗██████╗░
██║░░██║██╔══██╗████╗░██║██╔════╝██╔══██╗████╗░████║██╔══██╗██║░░░░░░░░░░░████╗░████║██╔══██╗
███████║███████║██╔██╗██║╚█████╗░███████║██╔████╔██║███████║██║░░░░░█████╗██╔████╔██║██║░░██║
██╔══██║██╔══██║██║╚████║░╚═══██╗██╔══██║██║╚██╔╝██║██╔══██║██║░░░░░╚════╝██║╚██╔╝██║██║░░██║
██║░░██║██║░░██║██║░╚███║██████╔╝██║░░██║██║░╚═╝░██║██║░░██║███████╗░░░░░░██║░╚═╝░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░
🇲​​​​​🇦​​​​​🇩​​​​​🇪​​​​​ 🇧​​​​​🇾​​​​​ 🇮​​​​​🇲​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇦​​​​​ 🇭​​​​​🇦​​​​​🇳​​​​​🇸​​​​​🇦​​​​​🇲​​​​​🇦​​​​​🇱​​​​​*/


const config = require("../config");
const {
  cmd,
  commands
} = require("../command");
const {
  Download
} = require("nima-threads-dl-api");
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const axios = require("axios");
const {
  igstalker,
  tikstalk
} = require("../lib/stalker");
const fg = require("api-dylux");
const {
  mediafireDl
} = require('mfiredlcore-vihangayt');
const fs = require('fs');
async function sswebA(_0x507ce5 = '', _0x4b17f2 = false, _0x3be47b = "desktop") {
  _0x3be47b = _0x3be47b.toLowerCase();
  if (!["desktop", "tablet", "phone"].includes(_0x3be47b)) {
    _0x3be47b = "desktop";
  }
  let _0x2dcfc4 = new URLSearchParams();
  _0x2dcfc4.append("url", _0x507ce5);
  _0x2dcfc4.append("device", _0x3be47b);
  if (!!_0x4b17f2) {
    _0x2dcfc4.append('full', 'on');
  }
  _0x2dcfc4.append("cacheLimit", 0x0);
  let _0x3cc18a = await axios({
    'url': "https://www.screenshotmachine.com/capture.php",
    'method': "post",
    'data': _0x2dcfc4
  });
  let _0x199fa5 = _0x3cc18a.headers['set-cookie'];
  let _0x3ed0a7 = await axios({
    'url': "https://www.screenshotmachine.com/" + _0x3cc18a.data.link,
    'headers': {
      'cookie': _0x199fa5.join('')
    },
    'responseType': "arraybuffer"
  });
  return Buffer.from(_0x3ed0a7.data);
}
var imgmsg = '';
if (config.LANG === 'SI') {
  imgmsg = "*කරුණාකර මට url එකක් දෙන්න !*";
} else {
  imgmsg = "*Please give me a url !*";
}
var descg = '';
if (config.LANG === 'SI') {
  descg = "එය ලබා දී ඇති url හි desktop ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descg = "It gives desktop size screenshot of given url.";
}
var descp = '';
if (config.LANG === 'SI') {
  descp = "එය ලබා දී ඇති url හි දුරකථන ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  descp = "It gives phone size screenshot of given url.";
}
var desct = '';
if (config.LANG === 'SI') {
  desct = "එය ලබා දී ඇති url හි ටැබ්ලට් ප්‍රමාණයේ තිර රුවක් ලබා දෙයි.";
} else {
  desct = "It gives tablet size screenshot of given url.";
}
var cant = '';
if (config.LANG === 'SI') {
  cant = "*මට තිර රුවක් ලබා ගත නොහැක. පසුව නැවත උත්සාහ කරන්න.*";
} else {
  cant = "*I can't get a screenshot. Try again later.*";
}
cmd({
  'pattern': 'ss',
  'react': '📸',
  'alias': ["screenshot", "ssweb", "ssdesktop"],
  'desc': "descg",
  'category': "download",
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x1258ad, _0x33e552, _0x312726, {
  from: _0x317364,
  l: _0x5ffe3f,
  quoted: _0x1511d9,
  prefix: _0x52c6c6,
  body: _0x477d2f,
  isCmd: _0x46b000,
  command: _0x32f283,
  args: _0x135278,
  q: _0x4abe6e,
  isGroup: _0x156a4b,
  sender: _0xa75444,
  senderNumber: _0x5da57d,
  botNumber2: _0x2343e7,
  botNumber: _0x2cddc7,
  pushname: _0x522f61,
  isMe: _0x360fe6,
  isOwner: _0x43d0d8,
  groupMetadata: _0x563572,
  groupName: _0x396a1b,
  participants: _0x1c1a0d,
  groupAdmins: _0x7dbec1,
  isBotAdmins: _0x5ead99,
  isAdmins: _0x1d2467,
  reply: _0x1688b9
}) => {
  try {
    if (!_0x4abe6e) {
      return _0x1688b9(imgmsg);
    }
    let _0xddc03a = getRandom('');
    let _0x5a51ec = await sswebA(_0x4abe6e, true, "desktop");
    fs.writeFileSync(_0xddc03a + ".jpg", _0x5a51ec);
    const _0x5a6a0c = [{
      'buttonId': _0x52c6c6 + "ssd " + _0xddc03a + '.jpg',
      'buttonText': {
        'displayText': 'DOCUMENT'
      },
      'type': 0x1
    }, {
      'buttonId': _0x52c6c6 + "ssi " + _0xddc03a + '.jpg',
      'buttonText': {
        'displayText': 'IMAGE'
      },
      'type': 0x1
    }];
    const _0x25eb83 = {
      'caption': "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x5a6a0c,
      'headerType': 0x1
    };
    return await _0x1258ad.buttonMessage(_0x317364, _0x25eb83, _0x33e552);
  } catch (_0x2a847e) {
    _0x1688b9(cant);
    _0x5ffe3f(_0x2a847e);
  }
});
cmd({
  'pattern': 'ssphone',
  'react': '📸',
  'desc': "descp",
  'category': "download",
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x2396f1, _0x517d3d, _0x36d85a, {
  from: _0x389260,
  l: _0x33e28d,
  quoted: _0x12c7a2,
  prefix: _0x244b3b,
  body: _0x510c96,
  isCmd: _0x2ea4d3,
  command: _0x417685,
  args: _0x54c8af,
  q: _0xd447cd,
  isGroup: _0x42077f,
  sender: _0x10b120,
  senderNumber: _0x51a2be,
  botNumber2: _0x32a3cc,
  botNumber: _0x1690b5,
  pushname: _0x4be5a7,
  isMe: _0x469838,
  isOwner: _0x2b9530,
  groupMetadata: _0x57923c,
  groupName: _0x3dc350,
  participants: _0xcdb4a,
  groupAdmins: _0x393476,
  isBotAdmins: _0x133d90,
  isAdmins: _0x28380a,
  reply: _0x2809b2
}) => {
  try {
    if (!_0xd447cd) {
      return _0x2809b2(imgmsg);
    }
    let _0xedebf = getRandom('');
    let _0x23b749 = await sswebA(_0xd447cd, true, "phone");
    fs.writeFileSync(_0xedebf + ".jpg", _0x23b749);
    const _0x5d7dd4 = [{
      'buttonId': _0x244b3b + "ssd " + _0xedebf + '.jpg',
      'buttonText': {
        'displayText': "DOCUMENT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x244b3b + "ssi " + _0xedebf + '.jpg',
      'buttonText': {
        'displayText': "IMAGE"
      },
      'type': 0x1
    }];
    const _0xb89cc9 = {
      'caption': "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x5d7dd4,
      'headerType': 0x1
    };
    return await _0x2396f1.buttonMessage(_0x389260, _0xb89cc9, _0x517d3d);
  } catch (_0x5db337) {
    _0x2809b2(cant);
    _0x33e28d(_0x5db337);
  }
});
cmd({
  'pattern': "sstab",
  'react': '📸',
  'desc': "desct",
  'category': "download",
  'use': ".ss <url>",
  'filename': __filename
}, async (_0x58b5f0, _0x406fd4, _0x5cfc9a, {
  from: _0x3e4b37,
  l: _0x2d9a2c,
  quoted: _0x1314d1,
  prefix: _0x3d03d2,
  body: _0xa8f2e6,
  isCmd: _0x977d7c,
  command: _0x58c462,
  args: _0x1ff253,
  q: _0x1ded2d,
  isGroup: _0x46e646,
  sender: _0x2f0b84,
  senderNumber: _0x55a01f,
  botNumber2: _0xa7cb56,
  botNumber: _0x368bc3,
  pushname: _0x447c73,
  isMe: _0x28529c,
  isOwner: _0x1ae81f,
  groupMetadata: _0x402ef1,
  groupName: _0x2856b4,
  participants: _0x404d8a,
  groupAdmins: _0x2ebeb0,
  isBotAdmins: _0x43792e,
  isAdmins: _0x44dc70,
  reply: _0x33d853
}) => {
  try {
    if (!_0x1ded2d) {
      return _0x33d853(imgmsg);
    }
    let _0x489774 = getRandom('');
    let _0x46f19f = await sswebA(_0x1ded2d, true, 'tablet');
    fs.writeFileSync(_0x489774 + ".jpg", _0x46f19f);
    const _0x26d519 = [{
      'buttonId': _0x3d03d2 + "ssd " + _0x489774 + ".jpg",
      'buttonText': {
        'displayText': "DOCUMENT"
      },
      'type': 0x1
    }, {
      'buttonId': _0x3d03d2 + "ssi " + _0x489774 + ".jpg",
      'buttonText': {
        'displayText': "IMAGE"
      },
      'type': 0x1
    }];
    const _0x1dd657 = {
      'caption': "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n\n   *📸 SCREENSHOT GETTER*",
      'footer': config.FOOTER,
      'buttons': _0x26d519,
      'headerType': 0x1
    };
    return await _0x58b5f0.buttonMessage(_0x3e4b37, _0x1dd657, _0x406fd4);
  } catch (_0x54caa1) {
    _0x33d853(cant);
    _0x2d9a2c(_0x54caa1);
  }
});
cmd({
  'pattern': "ssi",
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x22858d, _0x490433, _0x21ed06, {
  from: _0x178143,
  l: _0x33e144,
  quoted: _0x385ecb,
  body: _0x390891,
  isCmd: _0x19018a,
  command: _0x5caa61,
  args: _0x1eb12c,
  q: _0x345d2f,
  isGroup: _0x283aef,
  sender: _0x2efc5d,
  senderNumber: _0x59d542,
  botNumber2: _0x1ee3fa,
  botNumber: _0x1cde73,
  pushname: _0x3e1cd2,
  isMe: _0x254178,
  isOwner: _0x1528aa,
  groupMetadata: _0x2cc30d,
  groupName: _0x5d831f,
  participants: _0x2cc391,
  groupAdmins: _0xc45844,
  isBotAdmins: _0x37f970,
  isAdmins: _0x4c21ed,
  reply: _0x4158be
}) => {
  try {
    await _0x22858d.sendMessage(_0x178143, {
      'react': {
        'text': '📥',
        'key': _0x490433.key
      }
    });
    await _0x22858d.sendMessage(_0x178143, {
      'image': fs.readFileSync(_0x345d2f),
      'caption': config.FOOTER
    }, {
      'quoted': _0x490433
    });
    await _0x22858d.sendMessage(_0x178143, {
      'react': {
        'text': '✔',
        'key': _0x490433.key
      }
    });
  } catch (_0x19a81d) {
    _0x4158be("*ERROR !!*");
    _0x33e144(_0x19a81d);
  }
});
cmd({
  'pattern': 'ssd',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4a5f2e, _0x24b1e9, _0x3f09e9, {
  from: _0x27ae2d,
  l: _0x5ebcb2,
  quoted: _0xb12885,
  body: _0x2f16f7,
  isCmd: _0x593aec,
  command: _0x3f91bf,
  args: _0x564e58,
  q: _0x9528d6,
  isGroup: _0x1b2af9,
  sender: _0x21ff13,
  senderNumber: _0x312dfc,
  botNumber2: _0x444e27,
  botNumber: _0x204c5a,
  pushname: _0x310518,
  isMe: _0xaa80e6,
  isOwner: _0x33cc22,
  groupMetadata: _0x52400b,
  groupName: _0x489452,
  participants: _0xe163bb,
  groupAdmins: _0x388841,
  isBotAdmins: _0x5261fe,
  isAdmins: _0x2fb761,
  reply: _0x4db68d
}) => {
  try {
    await _0x4a5f2e.sendMessage(_0x27ae2d, {
      'react': {
        'text': '📥',
        'key': _0x24b1e9.key
      }
    });
    await _0x4a5f2e.sendMessage(_0x27ae2d, {
      'document': fs.readFileSync(_0x9528d6),
      'mimetype': "image/jpeg",
      'fileName': "screenshot.jpg",
      'caption': config.FOOTER
    }, {
      'quoted': _0x24b1e9
    });
    await _0x4a5f2e.sendMessage(_0x27ae2d, {
      'react': {
        'text': '✔',
        'key': _0x24b1e9.key
      }
    });
  } catch (_0x3d62c6) {
    _0x4db68d("*ERROR !!*");
    _0x5ebcb2(_0x3d62c6);
  }
});
cmd({
  'pattern': 'mediafire',
  'alias': ["mfire"],
  'react': '📁',
  'desc': "Download mediafire files.",
  'category': "download",
  'use': ".mediafire <mediafire link>",
  'filename': __filename
}, async (_0x1a18d6, _0x2198b8, _0x2644dd, {
  from: _0xb58dac,
  l: _0x4e8170,
  quoted: _0x4af63c,
  body: _0xa52bc4,
  isCmd: _0x3b0d2a,
  command: _0x85eac0,
  args: _0x192bd8,
  q: _0x41f736,
  isGroup: _0x511597,
  sender: _0x4a90f1,
  senderNumber: _0x15dc50,
  botNumber2: _0x182993,
  botNumber: _0x571464,
  pushname: _0x1ea7bd,
  isMe: _0x2b4547,
  isOwner: _0x265a1f,
  groupMetadata: _0x49cab9,
  groupName: _0x51d7f2,
  participants: _0x128f99,
  groupAdmins: _0x21b2b0,
  isBotAdmins: _0x1c55e5,
  isAdmins: _0x321311,
  reply: _0x200aa7
}) => {
  try {
    if (!_0x41f736) {
      return await _0x200aa7("*Please give me google drive url*");
    }
    if (!_0x41f736.includes('mediafire.com')) {
      return await _0x200aa7("*Please give me google drive url*");
    }
    if (!_0x41f736.includes("/file")) {
      return await _0x200aa7("*Please give me google drive url*");
    }
    const _0x56bed9 = await mediafireDl(_0x41f736);
    if (_0x56bed9.size.includes('MB') && _0x56bed9.size.replace('MB', '') > config.MAX_SIZE) {
      return await _0x200aa7("*This file is too big !!*");
    }
    if (_0x56bed9.size.includes('GB')) {
      return await _0x200aa7("*This file is too big !!*");
    }
    const _0x465f01 = _0x1a18d6.sendMessage(_0xb58dac, {
      'document': {
        'url': _0x56bed9.link
      },
      'fileName': _0x56bed9.name,
      'mimetype': _0x56bed9.mime,
      'caption': "*🧸 Name* : " + _0x56bed9.name + "\n*📊 Size* : " + _0x56bed9.size + "\n*🕹️ Mime* : " + _0x56bed9.mime
    }, {
      'quoted': _0x2198b8
    });
    await _0x1a18d6.sendMessage(_0xb58dac, {
      'react': {
        'text': '📁',
        'key': _0x465f01.key
      }
    });
  } catch (_0x2c2358) {
    _0x200aa7("*Error !!*");
    _0x4e8170(_0x2c2358);
  }
});
cmd({
  'pattern': "gdrive",
  'alias': ["googledrive'"],
  'react': '📑',
  'desc': "Download googledrive files.",
  'category': "download",
  'use': ".gdrive <googledrive link>",
  'filename': __filename
}, async (_0x50f55d, _0x173fe4, _0x18bef9, {
  from: _0xfee587,
  l: _0x42056f,
  quoted: _0xadf43e,
  body: _0x3d26dd,
  isCmd: _0x5839a4,
  command: _0x55b1cd,
  args: _0x125067,
  q: _0x2d2c51,
  isGroup: _0x336b76,
  sender: _0x3e42a3,
  senderNumber: _0x1fb5e8,
  botNumber2: _0x143d53,
  botNumber: _0x337a5a,
  pushname: _0x38e876,
  isMe: _0x44b217,
  isOwner: _0x6e0402,
  groupMetadata: _0x22d1de,
  groupName: _0x131976,
  participants: _0x14d626,
  groupAdmins: _0x1d5c47,
  isBotAdmins: _0x2c7369,
  isAdmins: _0x5632e9,
  reply: _0x580c99
}) => {
  try {
    if (!_0x2d2c51) {
      return await _0x580c99("*Please give me googledrive url !!*");
    }
    let _0xf5b253 = await fg.GDriveDl(_0x2d2c51);
    _0x580c99("*📃 File name:*  " + _0xf5b253.fileName + "\n*💈 File Size:* " + _0xf5b253.fileSize + "\n*🕹️ File type:* " + _0xf5b253.mimetype);
    _0x50f55d.sendMessage(_0xfee587, {
      'document': {
        'url': _0xf5b253.downloadUrl
      },
      'fileName': _0xf5b253.fileName,
      'mimetype': _0xf5b253.mimetype
    }, {
      'quoted': _0x173fe4
    });
  } catch (_0x1c7ece) {
    _0x580c99("*Error !!*");
    _0x42056f(_0x1c7ece);
  }
});
cmd({
  'pattern': "stiktok",
  'alias': ["tiktokstalk", "stalktiktok", "tikstalk"],
  'react': '📱',
  'desc': "desct",
  'category': "search",
  'use': ".stiktok <tiktok username>",
  'filename': __filename
}, async (_0x1899a4, _0x4c65bc, _0x3b8a1f, {
  from: _0x36a4ea,
  l: _0x3d541a,
  quoted: _0x15ba2c,
  body: _0x32d21d,
  isCmd: _0x1b2eb2,
  command: _0x5232ac,
  args: _0x41044c,
  q: _0x36efe9,
  isGroup: _0x319202,
  sender: _0x8bfc1a,
  senderNumber: _0x87ce92,
  botNumber2: _0x2b7608,
  botNumber: _0x353da5,
  pushname: _0x34c9c5,
  isMe: _0x1f6ca5,
  isOwner: _0x5b49af,
  groupMetadata: _0x57ffde,
  groupName: _0x3c9385,
  participants: _0x388df1,
  groupAdmins: _0x27d802,
  isBotAdmins: _0x592583,
  isAdmins: _0x39a7ef,
  reply: _0x1b2577
}) => {
  try {
    if (!_0x36efe9) {
      return _0x1b2577(needus);
    }
    const _0x19a9c1 = await tikstalk(_0x41044c[0x0]);
    const _0x2342f0 = "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n\n    *TIKTOK STALKER*\n\n*🆔 Username:* " + _0x19a9c1.username + "\n\n*👤 Name:* " + _0x19a9c1.name + "\n\n*🐾 Bio:* " + _0x19a9c1.bio + "\n\n*🚶🏽 Following:* " + _0x19a9c1.following + "\n\n*👥 Followers:* " + _0x19a9c1.followers + "\n\n*💌 Likes:* " + _0x19a9c1.likes + "\n\n└───────────◉➣➣";
    await _0x1899a4.sendMessage(_0x36a4ea, {
      'image': {
        'url': _0x19a9c1.img
      },
      'caption': _0x2342f0
    }, {
      'quoted': _0x4c65bc
    });
  } catch (_0x1348a0) {
    _0x1b2577(cantf);
    _0x3d541a(_0x1348a0);
  }
});
cmd({
  'pattern': "igstalk",
  'alias': ["instastalk", "instagramstalk", "igstalker"],
  'react': '📷',
  'desc': "desct",
  'category': "search",
  'use': ".igstalk <instagram username>",
  'filename': __filename
}, async (_0x47e072, _0x5aff72, _0x481394, {
  from: _0x425cfb,
  l: _0x20fc1c,
  quoted: _0x2a522c,
  body: _0x125268,
  isCmd: _0x589bcb,
  command: _0x5dc2f2,
  args: _0x4cf125,
  q: _0x505660,
  isGroup: _0x4838d0,
  sender: _0x167939,
  senderNumber: _0x91375e,
  botNumber2: _0x2763e8,
  botNumber: _0x11c4bb,
  pushname: _0xfb3abe,
  isMe: _0x464cb1,
  isOwner: _0x12581e,
  groupMetadata: _0x24d240,
  groupName: _0x5d3541,
  participants: _0x130345,
  groupAdmins: _0x1e9f7d,
  isBotAdmins: _0x5c92e4,
  isAdmins: _0xbfc4f6,
  reply: _0x5257ff
}) => {
  try {
    if (!_0x505660) {
      return _0x5257ff(needus);
    }
    const _0xdcdb5 = await igstalker(_0x505660);
    const _0x31f39d = "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n\n    *IG STALKER*\n\n*🆔 Username:* " + _0xdcdb5.username + "\n\n*👤 Name:* " + _0xdcdb5.fullname + "\n\n*🐾 Bio:* " + _0xdcdb5.bio + "\n\n*🚶🏽 Following:* " + _0xdcdb5.following + "\n\n*👥 Followers:* " + _0xdcdb5.followers + "\n\n*📬 Post count:* " + _0xdcdb5.post + "\n\n└───────────◉➣➣";
    await _0x47e072.sendMessage(_0x425cfb, {
      'image': {
        'url': _0xdcdb5.profile
      },
      'caption': _0x31f39d
    }, {
      'quoted': _0x5aff72
    });
  } catch (_0x3b6ab7) {
    _0x5257ff(cantf);
    _0x20fc1c(_0x3b6ab7);
  }
});
cmd({
  'pattern': "threads",
  'alias': ["thread"],
  'react': '🧵',
  'desc': "Download threads videos/photos.",
  'category': "download",
  'use': ".threads <threads link>",
  'filename': __filename
}, async (_0x2926a9, _0x340032, _0x57ffaf, {
  from: _0x3f922e,
  l: _0x2bc60e,
  quoted: _0x5336b2,
  body: _0x1aba52,
  isCmd: _0xf1257b,
  command: _0x360dcc,
  args: _0x4cc360,
  q: _0x4d61ba,
  isGroup: _0x31585d,
  sender: _0x4e5d6e,
  senderNumber: _0x1c1f70,
  botNumber2: _0x4054c1,
  botNumber: _0x2bebca,
  pushname: _0x448d84,
  isMe: _0x3847f2,
  isOwner: _0x2d18b1,
  groupMetadata: _0x2ea492,
  groupName: _0x3420b1,
  participants: _0xcb678d,
  groupAdmins: _0x1bbf83,
  isBotAdmins: _0x25b5f0,
  isAdmins: _0x291108,
  reply: _0x4efc82
}) => {
  try {
    if (!_0x4d61ba) {
      return await _0x4efc82(needus);
    }
    let _0x4c7a07 = await Download(_0x4d61ba);
    for (let _0x4b40bc = 0x0; _0x4b40bc < _0x4c7a07.download.length; _0x4b40bc++) {
      if (_0x4c7a07.download[_0x4b40bc].type === "image") {
        await _0x2926a9.sendMessage(_0x3f922e, {
          'image': {
            'url': _0x4c7a07.download[_0x4b40bc].url
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x340032
        });
      } else {
        await _0x2926a9.sendMessage(_0x3f922e, {
          'video': {
            'url': _0x4c7a07.download[_0x4b40bc].url
          },
          'caption': config.FOOTER
        }, {
          'quoted': _0x340032
        });
      }
    }
  } catch (_0x22b127) {
    _0x4efc82(cantf);
    _0x2bc60e(_0x22b127);
  }
});
cmd({
  'pattern': 'fmmods',
  'alias': ['wamod', 'wamods', 'fmmod'],
  'react': '📲',
  'desc': "Download all fmmods.",
  'category': "download",
  'use': ".fmmods",
  'filename': __filename
}, async (_0x4e87fb, _0x36b30d, _0x40d95e, {
  from: _0x3151e9,
  l: _0x41cc7b,
  quoted: _0x16e425,
  prefix: _0x30f42c,
  body: _0x43bd6e,
  isCmd: _0xc908c2,
  command: _0x2b5d92,
  args: _0xa2daf4,
  q: _0x36feb1,
  isGroup: _0x1764e8,
  sender: _0x241715,
  senderNumber: _0x49fe29,
  botNumber2: _0x524761,
  botNumber: _0x3b7ac0,
  pushname: _0x43a90b,
  isMe: _0x23b81d,
  isOwner: _0x4d6236,
  groupMetadata: _0xbb33a2,
  groupName: _0x2f649e,
  participants: _0x5934ae,
  groupAdmins: _0x32b118,
  isBotAdmins: _0x1d7c10,
  isAdmins: _0x973c7b,
  reply: _0x354d7b
}) => {
  try {
    let _0x39a1ac = (await fetchJson("https://vihangayt.me/download/fmmods")).data;
    var _0xc4c952 = [{
      'buttonId': _0x30f42c + "dmod " + _0x39a1ac.com_whatsapp.link + '+' + _0x39a1ac.com_whatsapp.name,
      'buttonText': {
        'displayText': _0x39a1ac.com_whatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x30f42c + "dmod " + _0x39a1ac.com_fmwhatsapp.link + '+' + _0x39a1ac.com_fmwhatsapp.name,
      'buttonText': {
        'displayText': _0x39a1ac.com_fmwhatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x30f42c + "dmod " + _0x39a1ac.com_gbwhatsapp.link + '+' + _0x39a1ac.com_gbwhatsapp.name,
      'buttonText': {
        'displayText': _0x39a1ac.com_gbwhatsapp.name
      },
      'type': 0x1
    }, {
      'buttonId': _0x30f42c + "dmod " + _0x39a1ac.com_yowhatsapp.link + '+' + _0x39a1ac.com_yowhatsapp.name,
      'buttonText': {
        'displayText': _0x39a1ac.com_yowhatsapp.name
      },
      'type': 0x1
    }];
    const _0x3a3715 = {
      'caption': "┌───[ʜᴀɴꜱᴀᴍᴀʟ-ᴍᴅ]\n      \n*Foud Whatsapp Mod Downloader 📲*\n",
      'footer': config.FOOTER,
      'buttons': _0xc4c952,
      'headerType': 0x1
    };
    return await _0x4e87fb.buttonMessage(_0x3151e9, _0x3a3715, _0x36b30d);
  } catch (_0x520a12) {
    _0x354d7b("*Error !!*");
    _0x41cc7b(_0x520a12);
  }
});
cmd({
  'pattern': 'dmod',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x34adca, _0x4dbf21, _0x2f1385, {
  from: _0x170247,
  l: _0x3303c1,
  quoted: _0x4446b2,
  body: _0x2e1563,
  isCmd: _0x287643,
  command: _0x59d8fa,
  args: _0x3775ba,
  q: _0x184211,
  isGroup: _0x1e671c,
  sender: _0x327937,
  senderNumber: _0xf928f,
  botNumber2: _0xfaab23,
  botNumber: _0x39f2ce,
  pushname: _0x3d40b2,
  isMe: _0x5079e9,
  isOwner: _0x372b93,
  groupMetadata: _0x3e5033,
  groupName: _0x8a7e39,
  participants: _0x15cfdb,
  groupAdmins: _0x2a3da4,
  isBotAdmins: _0x1f5a3a,
  isAdmins: _0x40e6e3,
  reply: _0x301190
}) => {
  try {
    await _0x34adca.sendMessage(_0x170247, {
      'react': {
        'text': '📥',
        'key': _0x4dbf21.key
      }
    });
    let [_0x2278f8, _0x26b127] = _0x184211.split`+`;
    await _0x34adca.sendMessage(_0x170247, {
      'document': {
        'url': _0x2278f8
      },
      'fileName': _0x26b127 + ".apk",
      'mimetype': 'application/vnd.android.package-archive'
    }, {
      'quoted': _0x4dbf21
    });
    await _0x34adca.sendMessage(_0x170247, {
      'react': {
        'text': '✔',
        'key': _0x4dbf21.key
      }
    });
  } catch (_0x3b1ae4) {
    _0x301190("*ERROR !!*");
    _0x3303c1(_0x3b1ae4);
  }
});
