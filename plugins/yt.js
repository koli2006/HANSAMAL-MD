
/**
██╗░░██╗░█████╗░███╗░░██╗░██████╗░█████╗░███╗░░░███╗░█████╗░██╗░░░░░░░░░░░███╗░░░███╗██████╗░
██║░░██║██╔══██╗████╗░██║██╔════╝██╔══██╗████╗░████║██╔══██╗██║░░░░░░░░░░░████╗░████║██╔══██╗
███████║███████║██╔██╗██║╚█████╗░███████║██╔████╔██║███████║██║░░░░░█████╗██╔████╔██║██║░░██║
██╔══██║██╔══██║██║╚████║░╚═══██╗██╔══██║██║╚██╔╝██║██╔══██║██║░░░░░╚════╝██║╚██╔╝██║██║░░██║
██║░░██║██║░░██║██║░╚███║██████╔╝██║░░██║██║░╚═╝░██║██║░░██║███████╗░░░░░░██║░╚═╝░██║██████╔╝
╚═╝░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═════╝░╚═╝░░╚═╝╚═╝░░░░░╚═╝╚═╝░░╚═╝╚══════╝░░░░░░╚═╝░░░░░╚═╝╚═════╝░
🇲​​​​​🇦​​​​​🇩​​​​​🇪​​​​​ 🇧​​​​​🇾​​​​​ 🇮​​​​​🇲​​​​​🇦​​​​​🇱​​​​​🇰​​​​​🇦​​​​​ 🇭​​​​​🇦​​​​​🇳​​​​​🇸​​​​​🇦​​​​​🇲​​​​​🇦​​​​​🇱​​​​​*/


const config = require("../config");
const cheerio = require("cheerio");
const fetch = require('node-fetch');
const {
  getBuffer,
  getGroupAdmins,
  getRandom,
  getsize,
  h2k,
  isUrl,
  Json,
  runtime,
  sleep,
  fetchJson
} = require("../lib/functions");
const {
  cmd,
  commands
} = require("../command");
const yts = require("ytsearch-venom");
function ytreg(_0x1b505d) {
  const _0x5bbd42 = /(?:http(?:s|):\/\/|)(?:(?:www\.|)youtube(?:\-nocookie|)\.com\/(?:watch\?.*(?:|\&)v=|embed|shorts\/|v\/)|youtu\.be\/)([-_0-9A-Za-z]{11})/;
  return _0x5bbd42.test(_0x1b505d);
}
cmd({
  'pattern': "yts",
  'alias': ['ytsearch'],
  'use': ".yts lelena",
  'react': '🔎',
  'desc': "Search songs",
  'category': 'search',
  'filename': __filename
}, async (_0x558dd2, _0x59ace7, _0x4b3db6, {
  from: _0x48d1d6,
  l: _0xbef934,
  quoted: _0x542b19,
  body: _0x5c5e84,
  isCmd: _0x22219f,
  command: _0xd266e3,
  args: _0x1331b1,
  q: _0x14d53d,
  isGroup: _0x857b5e,
  sender: _0x343816,
  senderNumber: _0x12a7c9,
  botNumber2: _0x51a52f,
  botNumber: _0xab784a,
  pushname: _0x1b7589,
  isMe: _0x48d791,
  isOwner: _0x242873,
  groupMetadata: _0x485eb7,
  groupName: _0x12efe4,
  participants: _0x4a72ed,
  groupAdmins: _0x5edd02,
  isBotAdmins: _0x132964,
  isAdmins: _0x41a417,
  reply: _0x458ed2
}) => {
  try {
    if (!_0x14d53d) {
      return await _0x458ed2(imgmsg);
    }
    if (isUrl(_0x14d53d) && !ytreg(_0x14d53d)) {
      return await _0x458ed2(imgmsg);
    }
    try {
      let _0x5a0eeb = require('ytsearch-venom');
      var _0x13818e = await _0x5a0eeb(_0x14d53d);
    } catch (_0x3e8c42) {
      _0xbef934(_0x3e8c42);
      return await _0x558dd2.sendMessage(_0x48d1d6, {
        'text': "*Error !!*"
      }, {
        'quoted': _0x59ace7
      });
    }
    var _0xee9434 = '';
    _0x13818e.all.map(_0xea0434 => {
      _0xee9434 += " *🖲️" + _0xea0434.title + "*\n🔗 " + _0xea0434.url + "\n\n";
    });
    await _0x558dd2.sendMessage(_0x48d1d6, {
      'text': _0xee9434
    }, {
      'quoted': _0x59ace7
    });
  } catch (_0x2ee22d) {
    _0xbef934(_0x2ee22d);
    _0x458ed2("*Error !!*");
  }
});
cmd({
  'pattern': "song",
  'alias': ["ytsong"],
  'use': ".song yimmy",
  'react': '🎧',
  'desc': "Download songs",
  'category': "download",
  'filename': __filename
}, async (_0x12b81b, _0x42471c, _0x1af5c0, {
  from: _0x59325a,
  prefix: _0x27d861,
  l: _0x466e0d,
  quoted: _0x2c6793,
  body: _0x4c663f,
  isCmd: _0x200573,
  command: _0x185699,
  args: _0x42f0aa,
  q: _0x454dde,
  isGroup: _0x21ab37,
  sender: _0x26c59d,
  senderNumber: _0x3ded32,
  botNumber2: _0x48ca96,
  botNumber: _0x3e5979,
  pushname: _0x1bc282,
  isMe: _0x2af750,
  isOwner: _0x1ca13e,
  groupMetadata: _0x56ede4,
  groupName: _0x44cb68,
  participants: _0xc10542,
  groupAdmins: _0x58e03f,
  isBotAdmins: _0x4ec211,
  isAdmins: _0x484a4f,
  reply: _0x1eeaae
}) => {
  try {
    if (!_0x454dde) {
      return await _0x1eeaae("*Please enter a query or a url!*");
    }
    const _0x174dc0 = _0x454dde.replace(/\?si=[^&]*/, '');
    var _0x568fbc = await yts(_0x174dc0);
    let _0x228380 = config.FOOTER;
    var _0x521efa = _0x568fbc.videos[0x0];
    let _0x46439a = "*╭─「𝙷𝙰𝙽𝚂𝙰𝙼𝙰𝙻-𝙼𝙳」*\n*│╭───────────────╮*\n*│♘𝚂𝙾𝙽𝙶 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎵 ▎*\n*├────────────────╯*\n\n*│➢📃 Title:* " + _0x521efa.title + "\n\n*│➢💻 Views:* " + _0x521efa.views + "\n\n*│➢⏰ Duration:* " + _0x521efa.duration + "\n\n*│➢🔗 Url:* " + _0x521efa.url;
    const _0x1d3f69 = [{
      'buttonId': _0x27d861 + "ytaa " + _0x521efa.url,
      'buttonText': {
        'displayText': "AUDIO TYPE"
      },
      'type': 0x1
    }, {
      'buttonId': _0x27d861 + "ytad " + _0x521efa.url + '±' + _0x521efa.title,
      'buttonText': {
        'displayText': "DOCUMENT TYPE"
      },
      'type': 0x1
    }];
    const _0x3dc415 = {
      'image': {
        'url': _0x521efa.thumbnail
      },
      'caption': _0x46439a,
      'footer': _0x228380,
      'buttons': _0x1d3f69,
      'headerType': 0x4
    };
    await _0x12b81b.buttonMessage(_0x59325a, _0x3dc415, _0x42471c);
  } catch (_0x2a78c7) {
    _0x1eeaae(N_FOUND);
    console.log(_0x2a78c7);
  }
});
cmd({
  'pattern': 'ytaa',
  'react': '📥',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x428af4, _0x3b7a77, _0x3618b4, {
  from: _0x1eae0e,
  q: _0x56930e,
  reply: _0x3143f5
}) => {
  try {
    if (!_0x56930e) {
      return await _0x3143f5("*Please give me a youtube url!*");
    }
    const _0x2a07e7 = await fetchJson('https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x56930e);
    await _0x428af4.sendMessage(_0x1eae0e, {
      'audio': {
        'url': _0x2a07e7.result.dl_link
      },
      'mimetype': "audio/mpeg"
    }, {
      'quoted': _0x3b7a77
    });
    await _0x428af4.sendMessage(_0x1eae0e, {
      'react': {
        'text': '✔️',
        'key': _0x3b7a77.key
      }
    });
  } catch (_0x52c3d9) {
    console.log(_0x52c3d9);
  }
});
cmd({
  'pattern': "ytad",
  'react': '⏳',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x5972a5, _0x1993bb, _0x26068b, {
  from: _0x3e96df,
  q: _0x584be9,
  reply: _0x41705d
}) => {
  try {
    if (!_0x584be9) {
      return await _0x41705d("*Please give me a youtube url!*");
    }
    const _0x2aec0f = _0x584be9.split('±')[0x0];
    const _0x587ddb = _0x584be9.split('±')[0x1];
    const _0x15e8c4 = await fetchJson('https://www.dark-yasiya-api.site/download/ytmp3?url=' + _0x2aec0f);
    await _0x5972a5.sendMessage(_0x3e96df, {
      'document': {
        'url': _0x15e8c4.result.dl_link
      },
      'mimetype': 'audio/mpeg',
      'caption': config.FOOTER,
      'fileName': _0x587ddb + '.mp3'
    }, {
      'quoted': _0x1993bb
    });
    await _0x5972a5.sendMessage(_0x3e96df, {
      'react': {
        'text': '✔️',
        'key': _0x1993bb.key
      }
    });
  } catch (_0x1339dc) {
    console.log(_0x1339dc);
  }
});
cmd({
  'pattern': 'video',
  'alias': ["ytvideo"],
  'use': ".video yimmy",
  'react': "📽️",
  'desc': "Download videos",
  'category': "download",
  'filename': __filename
}, async (_0x415c8d, _0x4a66e9, _0x532d80, {
  from: _0x18b6fb,
  prefix: _0x4ebcc3,
  l: _0x8dc93b,
  quoted: _0x342fd2,
  body: _0x2bf7fd,
  isCmd: _0x29ca97,
  command: _0x19a83c,
  args: _0x51a9d2,
  q: _0xf4d938,
  isGroup: _0x1ffeb2,
  sender: _0x55d0ac,
  senderNumber: _0xabe6bf,
  botNumber2: _0x351db0,
  botNumber: _0x3d0910,
  pushname: _0x43f964,
  isMe: _0x375626,
  isOwner: _0x255d72,
  groupMetadata: _0x3031bf,
  groupName: _0x5015a5,
  participants: _0x1b31a1,
  groupAdmins: _0x139851,
  isBotAdmins: _0x3320cf,
  isAdmins: _0x17f4bb,
  reply: _0x3e3380
}) => {
  try {
    if (!_0xf4d938) {
      return await _0x3e3380("*Please enter a query or a url!*");
    }
    const _0x15b8b5 = _0xf4d938.replace(/\?si=[^&]*/, '');
    var _0x1b4a72 = await yts(_0x15b8b5);
    let _0x5f2db3 = config.FOOTER;
    var _0x2cb746 = _0x1b4a72.videos[0x0];
    let _0x123691 = "*╭─「𝙷𝙰𝙽𝚂𝙰𝙼𝙰𝙻-𝙼𝙳」*\n*│╭───────────────╮*\n*│ 𝚅𝙸𝙳𝙴𝙾 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳𝙴𝚁🎥 ▎*\n*├────────────────╯*\n\n*│➢📃 Title:* " + _0x2cb746.title + "\n\n*│➢💻 Views:* " + _0x2cb746.views + "\n\n*│➢⏰ Duration:* " + _0x2cb746.duration + "\n\n*│➢🔗 Url:* " + _0x2cb746.url;
    const _0x51a6f9 = [{
      'buttonId': _0x4ebcc3 + "360pv " + _0x2cb746.url,
      'buttonText': {
        'displayText': "360P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4ebcc3 + "480pv " + _0x2cb746.url,
      'buttonText': {
        'displayText': "480P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4ebcc3 + "720pv " + _0x2cb746.url,
      'buttonText': {
        'displayText': "720P VIDEO"
      },
      'type': 0x1
    }, {
      'buttonId': _0x4ebcc3 + "1080pv " + _0x2cb746.url,
      'buttonText': {
        'displayText': "1080P VIDEO"
      },
      'type': 0x1
    }];
    const _0x429270 = {
      'image': {
        'url': _0x2cb746.thumbnail
      },
      'caption': _0x123691,
      'footer': _0x5f2db3,
      'buttons': _0x51a6f9,
      'headerType': 0x4
    };
    await _0x415c8d.buttonMessage(_0x18b6fb, _0x429270, _0x4a66e9);
  } catch (_0x5ca45e) {
    _0x3e3380(N_FOUND);
    console.log(_0x5ca45e);
  }
});
cmd({
  'pattern': "360pv",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x4bf53e, _0x2c5236, _0x373a30, {
  from: _0x37979e,
  q: _0x180256,
  reply: _0x858f36
}) => {
  try {
    if (!_0x180256) {
      return await _0x858f36("*Please give me a youtube url!*");
    }
    const _0x59d3b9 = await fetchJson('https://api.fgmods.xyz/api/downloader/ytv?url=' + _0x180256 + '&quality=360p&apikey=9b2EtoA5');
    await _0x4bf53e.sendMessage(_0x37979e, {
      'video': {
        'url': _0x59d3b9.result.dl_url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x2c5236
    });
    await _0x4bf53e.sendMessage(_0x37979e, {
      'react': {
        'text': '✔️',
        'key': _0x2c5236.key
      }
    });
  } catch (_0x88e107) {
    console.log(_0x88e107);
  }
});
cmd({
  'pattern': "480pv",
  'react': '⬇️',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x3e6386, _0x998d12, _0x586777, {
  from: _0x47c5bc,
  q: _0x2d4348,
  reply: _0x27d269
}) => {
  try {
    if (!_0x2d4348) {
      return await _0x27d269("*Please give me a youtube url!*");
    }
    const _0xdf5dda = await fetchJson("https://api.fgmods.xyz/api/downloader/ytv?url=" + _0x2d4348 + "&quality=480p&apikey=9b2EtoA5");
    await _0x3e6386.sendMessage(_0x47c5bc, {
      'video': {
        'url': _0xdf5dda.result.dl_url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x998d12
    });
    await _0x3e6386.sendMessage(_0x47c5bc, {
      'react': {
        'text': '✔️',
        'key': _0x998d12.key
      }
    });
  } catch (_0x17b010) {
    console.log(_0x17b010);
  }
});
cmd({
  'pattern': '720pv',
  'react': '📱',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x320b16, _0x214ae7, _0x5d0409, {
  from: _0xb9907e,
  q: _0x2681fd,
  reply: _0x1fb52c
}) => {
  try {
    if (!_0x2681fd) {
      return await _0x1fb52c("*Please give me a youtube url!*");
    }
    const _0x2c7b19 = await fetchJson("https://api.fgmods.xyz/api/downloader/ytv?url=" + _0x2681fd + "&quality=720p&apikey=9b2EtoA5");
    await _0x320b16.sendMessage(_0xb9907e, {
      'video': {
        'url': _0x2c7b19.result.dl_url
      },
      'mimetype': "video/mp4"
    }, {
      'quoted': _0x214ae7
    });
    await _0x320b16.sendMessage(_0xb9907e, {
      'react': {
        'text': '✔️',
        'key': _0x214ae7.key
      }
    });
  } catch (_0x5d9a57) {
    console.log(_0x5d9a57);
  }
});
cmd({
  'pattern': "1080pv",
  'react': '📱',
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x8b78f4, _0x4a1567, _0x4980aa, {
  from: _0x518e30,
  q: _0x1cf84e,
  reply: _0x5adb99
}) => {
  try {
    if (!_0x1cf84e) {
      return await _0x5adb99("*Need a youtube url!*");
    }
    const _0xbd013e = await fetchJson("https://api.fgmods.xyz/api/downloader/ytv?url=" + _0x1cf84e + "&quality=1080p&apikey=9b2EtoA5");
    await _0x8b78f4.sendMessage(_0x518e30, {
      'video': {
        'url': _0xbd013e.result.dl_url
      },
      'mimetype': 'video/mp4'
    }, {
      'quoted': _0x4a1567
    });
    await _0x8b78f4.sendMessage(_0x518e30, {
      'react': {
        'text': '✔️',
        'key': _0x4a1567.key
      }
    });
  } catch (_0x36547a) {
    console.log(_0x36547a);
  }
});
async function xnxxs(_0x45bd7c) {
  return new Promise((_0x5bc997, _0x3fd0e1) => {
    fetch("https://www.xnxx.com/search/" + _0x45bd7c + '/' + (Math.floor(Math.random() * 0x3) + 0x1), {
      'method': "get"
    }).then(_0x152c0c => _0x152c0c.text()).then(_0x4b57e5 => {
      const _0x2a4f44 = cheerio.load(_0x4b57e5, {
        'xmlMode': false
      });
      const _0x36c159 = [];
      const _0x61fcb = [];
      const _0x5784d6 = [];
      const _0x310a58 = [];
      _0x2a4f44("div.mozaique").each(function (_0x559fd2, _0x4c0e31) {
        _0x2a4f44(_0x4c0e31).find("div.thumb").each(function (_0x512ad0, _0xa1265f) {
          _0x61fcb.push("https://www.xnxx.com" + _0x2a4f44(_0xa1265f).find('a').attr("href").replace("/THUMBNUM/", '/'));
        });
      });
      _0x2a4f44("div.mozaique").each(function (_0x2392ae, _0x145698) {
        _0x2a4f44(_0x145698).find("div.thumb-under").each(function (_0x1c0c3d, _0x150272) {
          _0x5784d6.push(_0x2a4f44(_0x150272).find("p.metadata").text());
          _0x2a4f44(_0x150272).find('a').each(function (_0x223314, _0xd0c31) {
            _0x36c159.push(_0x2a4f44(_0xd0c31).attr('title'));
          });
        });
      });
      for (let _0x3e2fe1 = 0x0; _0x3e2fe1 < _0x36c159.length; _0x3e2fe1++) {
        _0x310a58.push({
          'title': _0x36c159[_0x3e2fe1],
          'info': _0x5784d6[_0x3e2fe1],
          'link': _0x61fcb[_0x3e2fe1]
        });
      }
      _0x5bc997({
        'status': true,
        'result': _0x310a58
      });
    })["catch"](_0x505322 => _0x3fd0e1({
      'status': false,
      'result': _0x505322
    }));
  });
}
cmd({
  'pattern': "xnxx",
  'alias': ['xnxxs'],
  'react': '🤫',
  'use': ".xnxx <query>",
  'desc': "Search and DOWNLOAD VIDEOS from xnxx.",
  'category': "download",
  'filename': __filename
}, async (_0x40a651, _0x2dfbf6, _0x45afc5, {
  from: _0x4ea918,
  prefix: _0x3c1072,
  l: _0x2acde9,
  quoted: _0x5a8fd9,
  body: _0x17d6d6,
  isCmd: _0x5e4492,
  command: _0x28e8e1,
  args: _0x4713e1,
  q: _0xfad87,
  isGroup: _0x134c54,
  sender: _0x4cbbfe,
  senderNumber: _0x5adf2b,
  botNumber2: _0x2d07a2,
  botNumber: _0x3a17d3,
  pushname: _0x94980a,
  isMe: _0x198109,
  isOwner: _0x4d8f91,
  isPreUser: _0x4f7a0b,
  groupMetadata: _0x208a21,
  groupName: _0x268350,
  participants: _0x29d1b5,
  groupAdmins: _0x9d478a,
  isBotAdmins: _0x4cf88c,
  isAdmins: _0x17df92,
  reply: _0x40c8dd
}) => {
  try {
    if (!_0xfad87) {
      return _0x40c8dd("🚩 *Please give me words to search*");
    }
    let _0x33d670 = await xnxxs(_0xfad87);
    let _0x4bb96a = _0x33d670.result;
    if (_0x4bb96a.length < 0x1) {
      return await _0x40a651.sendMessage(_0x4ea918, {
        'text': N_FOUND
      }, {
        'quoted': _0x2dfbf6
      });
    }
    var _0xd3e285 = [];
    _0x33d670.result.map(_0x4c0362 => {
      _0xd3e285.push({
        'buttonId': _0x3c1072 + ("xnxxdl " + _0x4c0362.link),
        'buttonText': {
          'displayText': '' + _0x4c0362.title
        },
        'type': 0x1
      });
    });
    const _0x65be9 = {
      'image': {
        'url': "https://1000logos.net/wp-content/uploads/2021/04/XNXX-logo.png"
      },
      'caption': "⬇️ *X N X X - S E A R C H*",
      'footer': config.FOOTER,
      'buttons': _0xd3e285,
      'headerType': 0x4
    };
    return await _0x40a651.buttonMessage(_0x4ea918, _0x65be9, _0x2dfbf6);
  } catch (_0x394790) {
    _0x40c8dd("*Error !!*");
    console.log(_0x394790);
  }
});
async function xdl(_0x1ee168) {
  return new Promise((_0x5e2d2f, _0x1cf3da) => {
    fetch('' + _0x1ee168, {
      'method': "get"
    }).then(_0x151d5c => _0x151d5c.text()).then(_0x267116 => {
      const _0x4d89cd = cheerio.load(_0x267116, {
        'xmlMode': false
      });
      const _0x23b2aa = _0x4d89cd("meta[property=\"og:title\"]").attr("content");
      const _0x1847a6 = _0x4d89cd("meta[property=\"og:duration\"]").attr("content");
      const _0x302a54 = _0x4d89cd("meta[property=\"og:image\"]").attr('content');
      const _0xe40f02 = _0x4d89cd("meta[property=\"og:video:type\"]").attr('content');
      const _0x21d85d = _0x4d89cd("meta[property=\"og:video:width\"]").attr("content");
      const _0x4ea257 = _0x4d89cd("meta[property=\"og:video:height\"]").attr('content');
      const _0x26a43f = _0x4d89cd("span.metadata").text();
      const _0x3dad59 = _0x4d89cd("#video-player-bg > script:nth-child(6)").html();
      const _0x5a2eca = {
        'low': (_0x3dad59.match("html5player.setVideoUrlLow\\('(.*?)'\\);") || [])[0x1],
        'high': _0x3dad59.match("html5player.setVideoUrlHigh\\('(.*?)'\\);" || [])[0x1],
        'HLS': _0x3dad59.match("html5player.setVideoHLS\\('(.*?)'\\);" || [])[0x1],
        'thumb': _0x3dad59.match("html5player.setThumbUrl\\('(.*?)'\\);" || [])[0x1],
        'thumb69': _0x3dad59.match("html5player.setThumbUrl169\\('(.*?)'\\);" || [])[0x1],
        'thumbSlide': _0x3dad59.match("html5player.setThumbSlide\\('(.*?)'\\);" || [])[0x1],
        'thumbSlideBig': _0x3dad59.match("html5player.setThumbSlideBig\\('(.*?)'\\);" || [])[0x1]
      };
      _0x5e2d2f({
        'status': true,
        'result': {
          'title': _0x23b2aa,
          'URL': _0x1ee168,
          'duration': _0x1847a6,
          'image': _0x302a54,
          'videoType': _0xe40f02,
          'videoWidth': _0x21d85d,
          'videoHeight': _0x4ea257,
          'info': _0x26a43f,
          'files': _0x5a2eca
        }
      });
    })['catch'](_0x1027d1 => _0x1cf3da({
      'status': false,
      'result': _0x1027d1
    }));
  });
}
cmd({
  'pattern': "xnxxdown",
  'react': '⬇️',
  'alias': ["dlxnxx", "xnxxdl"],
  'dontAddCommandList': true,
  'filename': __filename
}, async (_0x1c533c, _0x281d17, _0x5611d7, {
  from: _0x391d8f,
  l: _0x272566,
  quoted: _0xb14f2d,
  body: _0x2efdc4,
  isCmd: _0x56825f,
  command: _0x466e5e,
  args: _0x17be77,
  q: _0x4c1bca,
  isGroup: _0x5acf07,
  sender: _0x5502,
  senderNumber: _0x50b6f2,
  botNumber2: _0x1c9264,
  botNumber: _0x2d248e,
  pushname: _0x12bc07,
  isMe: _0x1eb0ae,
  isOwner: _0x1ede9a,
  isPreUser: _0x448885,
  groupMetadata: _0x199bc8,
  groupName: _0x5479b1,
  participants: _0x4f2b4d,
  groupAdmins: _0x56d8ea,
  isBotAdmins: _0xcda82c,
  isAdmins: _0x3d6084,
  reply: _0x309b48
}) => {
  try {
    if (!_0x4c1bca) {
      return _0x309b48("*Please give me xnxx url !!*");
    }
    let _0x3cb29f = await xdl(_0x4c1bca);
    let _0x5589c6 = "𝚇𝙽𝚇𝚇 𝙳𝙻\n";
    _0x5589c6 += "\t◦  *𝚃𝙸𝚃𝙻𝙴* : " + _0x3cb29f.result.title + "\n";
    _0x5589c6 += "\t◦  *𝙸𝙽𝙵𝙾* : " + _0x3cb29f.result.info + "\n";
    _0x5589c6 += "\t◦  *𝙳𝚄𝚁𝙰𝚃𝙸𝙾𝙽* : " + _0x3cb29f.result.duration + "\n";
    _0x5589c6 += '' + config.FOOTER;
    let _0x42820e = _0x3cb29f.result.title;
    await _0x1c533c.sendMessage(_0x391d8f, {
      'document': {
        'url': _0x3cb29f.result.files.high
      },
      'mimetype': "video/mp4",
      'fileName': _0x42820e + ".mp4",
      'caption': _0x5589c6
    }, {
      'quoted': _0x281d17
    });
  } catch (_0x18603d) {
    _0x309b48("*Error !!*");
    console.log(_0x18603d);
  }
});
