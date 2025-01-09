window.detectLog = null;
const _wormup = {
  'BETAisSkinCustom'(_0x3c5be2) {
    var _0x41fa08 = /[a-zA-Z]/;
    return typeof _0x3c5be2 === "string" && _0x41fa08.test(_0x3c5be2);
  },
  'testSkinCustom': function (_0x3e08ab) {
    return _wormup.BETAisSkinCustom(_0x3e08ab) ? 0x22 || 0x21 : _0x3e08ab;
  },
  'testSkinMod': function (_0x3b9c72) {
    return _0x3b9c72 >= 0x18f && _0x3b9c72 < 0x3e7;
  },
  'testWear': function (_0x134a91) {
    return _0x134a91 >= 0x18f && _0x134a91 < 0x3e7;
  },
  'isNumberValid': function (_0x1bbe57) {
    return _0x1bbe57 !== '' && _0x1bbe57 !== null && _0x1bbe57 !== undefined && !isNaN(_0x1bbe57);
  },
  'validInput': function (_0x36d911) {
    if (!(_0x36d911 >= 0x18f && _0x36d911 < 0x3e7) && !_wormup.BETAisSkinCustom(_0x36d911)) {
      return _0x36d911;
    }
    try {
      let _0x1825ae = $("#inputReplaceSkin").val();
      return encodeURI(_0x1825ae !== '' && _0x1825ae !== null && _0x1825ae !== undefined && !isNaN(_0x1825ae) ? _0x1825ae : 0x23);
    } catch (_0x40b061) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};
var inputReplaceSkin = localStorage.getItem("inputReplaceSkin");
var hoisinhnhanh;
var PilotoAutomatico = null;
var isPlaying = false;
var pwrups = {};
window.keyMove = 0x51;
var theoEvents = {
  'eventoPrincipal': null,
  'joystick': {
    'positionMode': 'L',
    'checked': true,
    'size': 0x5a,
    'mode': "dynamic",
    'position': {
      'left': "110px",
      'bottom': "110px"
    },
    'color': "#FF3B3B",
    'pxy': 0x6e
  }
};
var theoKzObjects = {
  'FB_UserID': '',
  'smoothCamera': 0.5,
  'eat_animation': 0.0025,
  'flag': "https://i.imgur.com/EkbSd65.png",
  'PortionSize': localStorage.PotenciadorSize || 0x2,
  'PortionAura': localStorage.PotenciadorAura || 1.2,
  'PortionTransparent': 0.8,
  'FoodTransparent': 0.3,
  'ModeStremer': false,
  'ModeStremerbatop': false,
  'ModeStremeremoj': false,
  'ModeStremerheadshot': false,
  'ModeStremersaveheadshot': false,
  'arrow': false,
  'KeyCodeRespawn': localStorage.KeyRespawn || 0x52,
  'KeyCodeAutoMov': localStorage.KeyAutoMov || window.keyMove,
  'AbilityZ': false,
  'FoodShadow': localStorage.ComidaShadow || 0x2,
  'FoodSize': localStorage.ComidaSize || 0x2,
  'headshot': 0x0,
  'visibleSkin': [],
  'pL': [],
  'gamePad': theoEvents.joystick,
  'mobile': false,
  'loading': false,
  'kill': 0x0,
  'totalKills': 0x0,
  'totalHeadshots': 0x0,
  'adblock': false,
  'CLIENTE_ADMIN': 0x1,
  'CLIENTE_ACTIVO': 0x3,
  'CLIENTE_INACTIVO': 0x4
};
saveGameLocal = localStorage.getItem("SaveGameXT");
if (saveGameLocal && saveGameLocal !== "null") {
  let t = JSON.parse(saveGameLocal);
  for (let e in t) {
    theoKzObjects[e] = t[e];
  }
}
theoKzObjects.loading = true;
const PhoneChecked = function () {
  let _0x1eb200 = false;
  theoKzObjects.mobile = false;
  const _0x4d66bd = navigator.userAgent || navigator.vendor || window.opera;
  const _0x1469b3 = ['android', 'bb', "meego", "avantgo", 'bada', "blackberry", 'blazer', "compal", "elaine", "fennec", 'hiptop', 'iemobile', "iphone", 'ipod', "iris", "kindle", "lge", "maemo", "midp", "mmp", "mobile", "firefox", "netfront", "opera", 'palm', "phone", "plucker", 'pocket', "psp", 'symbian', "treo", "vodafone", "wap", "windows ce", 'xda', "ipad", "playbook", "silk"];
  if (_0x1469b3.some(_0x4399e0 => _0x4d66bd.toLowerCase().includes(_0x4399e0))) {
    theoKzObjects.mobile = true;
    _0x1eb200 = true;
  }
  return _0x1eb200;
};
const RechekingPhone = function () {
  let _0x486b45 = false;
  var _0x5d3bdd = navigator.userAgent || navigator.vendor || window.opera;
  const _0x2cb8a2 = ["android", 'bb', "meego", "avantgo", "bada", 'blackberry', "blazer", "compal", 'elaine', "fennec", "hiptop", "iemobile", "iphone", "ipod", "iris", "kindle", 'lge', 'maemo', 'midp', 'mmp', "mobile", "firefox", "netfront", "opera", "palm", "phone", "plucker", "pocket", "psp", "symbian", "treo", "vodafone", "wap", "windows ce", "xda", "ipad", "playbook", "silk"];
  _0x486b45 = _0x2cb8a2.some(_0x8f26ba => _0x5d3bdd.toLowerCase().includes(_0x8f26ba));
  return _0x486b45;
};
const loadJoy = function (_0x3c2cc6) {
  let _0x4df1c5;
  try {
    console.log(_0x3c2cc6);
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (_0x3c2cc6 || theoKzObjects.gamePad.checked)) {
      _0x4df1c5 = nipplejs.create(theoKzObjects.gamePad);
      _0x4df1c5.on("move", function (_0x546722, _0x23fd78) {
        null.sk = _0x23fd78.angle.radian <= Math.PI ? -0x1 * _0x23fd78.angle.radian : Math.PI - (_0x23fd78.angle.radian - Math.PI);
        console.log(_0x23fd78);
      });
    }
    return _0x4df1c5;
  } catch (_0x3de758) {
    console.log(_0x3de758);
  }
};
if (typeof PIXI === "undefined") {
  var script = document.createElement("script");
  script.src = "https://pixijs.download/release/pixi.js";
  script.type = 'text/javascript';
  script.onload = function () {
    initializeGame();
  };
  document.head.appendChild(script);
} else {
  initializeGame();
}
function initializeGame() {
  let _0x455690 = new PIXI.Application();
  document.body.appendChild(_0x455690.view);
  let _0x8d0e94 = new PIXI.Graphics();
  _0x8d0e94.beginFill(0xff0000);
  _0x8d0e94.drawCircle(0x190, 0x12c, 0x32);
  _0x8d0e94.endFill();
  _0x455690.stage.addChild(_0x8d0e94);
}
let clientes = {
  'clientesVencidos': [],
  'clientesActivos': []
};
let servers = {
  'Api_listServer': []
};
async function loadUsers() {
  await fetch("https://wormateup.live/up/api/users.php").then(_0x1acaf1 => _0x1acaf1.json()).then(_0x5cf014 => {
    if (_0x5cf014.success) {
      let _0x2fb61f = _0x5cf014.Users;
      const _0x39841e = new Date();
      _0x39841e.setHours(0x0, 0x0, 0x0, 0x0);
      clientes.clientesActivos = _0x2fb61f.filter(_0x1f28c0 => {
        if (_0x1f28c0.cliente_DateExpired) {
          const _0x188dc4 = new Date(_0x1f28c0.cliente_DateExpired);
          return _0x188dc4 >= _0x39841e;
        }
        return true;
      });
    } else {
      clientes = {
        'clientesVencidos': [],
        'clientesActivos': []
      };
      alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø¹Ù…Ù„Ø§Ø¡");
    }
  })["catch"](_0x3cec70 => {
    console.error("Error loading users:", _0x3cec70);
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø§Ø«Ù†Ø§Ø¡ Ø§Ù„ØªØ­Ù…ÙŠÙ„ ÙŠØ±Ø¬ÙŠ ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙØ­Ø© F5.");
  });
}
async function fetchServersWithRetry(_0x30ea00, _0x2da977 = 0x3, _0x283f2d = 0x7d0) {
  for (let _0x567a3a = 0x1; _0x567a3a <= _0x2da977; _0x567a3a++) {
    try {
      const _0x35cdcb = await fetch(_0x30ea00);
      if (!_0x35cdcb.ok) {
        throw new Error("HTTP error! status: " + _0x35cdcb.status);
      }
      const _0x21abef = await _0x35cdcb.json();
      return _0x21abef;
    } catch (_0x5b3682) {
      console.error("Attempt " + _0x567a3a + " failed: " + _0x5b3682.message);
      if (_0x567a3a < _0x2da977) {
        await new Promise(_0xfad718 => setTimeout(_0xfad718, _0x283f2d));
      } else {
        throw _0x5b3682;
      }
    }
  }
}
async function loadServers() {
  try {
    const _0x3dab4b = await fetchServersWithRetry("https://wormateup.live/up/api/server_wmxt.php");
    if (_0x3dab4b.success) {
      let _0x150f8a = _0x3dab4b.servers;
      servers.Api_listServer = _0x150f8a.filter(_0x4dd268 => _0x4dd268.serverUrl);
    } else {
      servers = {
        'Api_listServer': []
      };
      alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª");
    }
  } catch (_0x3bb0c8) {
    console.error("Failed to load servers after multiple attempts:", _0x3bb0c8);
    servers = {
      'Api_listServer': []
    };
    alert("Ø­Ø¯Ø« Ø®Ø·Ø£ Ø£Ø«Ù†Ø§Ø¡ ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª. ÙŠØ±Ø¬Ù‰ Ø¥Ø¹Ø§Ø¯Ø© Ø§Ù„Ù…Ø­Ø§ÙˆÙ„Ø© Ù„Ø§Ø­Ù‚Ù‹Ø§.");
  }
}
loadUsers();
loadServers();
$(".store-view-cont").append("<div id=\"idReplaceSkin\"></div>");
var StoreSkinID = $('#idReplaceSkin');
const ctx = {
  'fontStyle': {
    'name': new PIXI.TextStyle({
      'fill': "#FFFF00",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#EFFA45",
      'fontFamily': "wormup",
      'fontWeight': 'bold'
    }),
    'blanco': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xc,
      'lineJoin': "round",
      'stroke': "#FFF",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'morado': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFFF00",
      'fontSize': 0xa,
      'lineJoin': 'round',
      'stroke': '#FAA845',
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'morado1': new PIXI.TextStyle({
      'align': 'center',
      'fill': "#FFF",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'amarillo': new PIXI.TextStyle({
      'align': 'center',
      'fill': '#FFFF00',
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': "bold",
      'wordWrap': true
    }),
    'amarillo1': new PIXI.TextStyle({
      'align': "center",
      'fill': "#FFF",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#FAA845",
      'strokeThickness': 0x1,
      'whiteSpace': "normal",
      'fontFamily': "wormup",
      'fontWeight': 'bold',
      'wordWrap': true
    }),
    'keysColor': new PIXI.TextStyle({
      'align': "center",
      'fill': "#fff009",
      'fontSize': 0xa,
      'lineJoin': "round",
      'stroke': "#fff009",
      'strokeThickness': 0x1,
      'whiteSpace': 'normal',
      'fontWeight': "bold",
      'fontFamily': 'wormup',
      'wordWrap': true
    })
  }
};
ctx.clock = PIXI.Sprite.fromImage("https://asserts.wormworld.io/images/clock.png");
ctx.clock.width = 0x64;
ctx.clock.height = 0x64;
ctx.clock.x = -0x32;
ctx.clock.y = -0x32;
const app = new PIXI.Application({
  'width': window.innerWidth,
  'height': window.innerHeight
});
document.body.appendChild(app.view);
ctx.hoisinhnhanh = PIXI.Sprite.from('https://i.imgur.com/QZfm7vv.png');
ctx.hoisinhnhanh.width = 0x17;
ctx.hoisinhnhanh.height = 0x17;
ctx.top10sv = PIXI.Sprite.fromImage("https://i.imgur.com/UbRiUYr.png");
ctx.top10sv.height = 0x19;
ctx.top10sv.width = 0x64;
ctx.top10sv.x = 0x3c;
ctx.top10sv.y = -0x32;
ctx.quaytron = PIXI.Sprite.from("https://i.imgur.com/a7lVOy5.png");
ctx.quaytron.width = -0x17;
ctx.quaytron.height = -0x17;
app.stage.addChild(ctx.hoisinhnhanh);
app.stage.addChild(ctx.quaytron);
function updateSpritePositions() {
  const _0x109364 = -0x5a;
  ctx.hoisinhnhanh.x = window.innerWidth - ctx.hoisinhnhanh.width - 0x12c;
  ctx.hoisinhnhanh.y = _0x109364;
  ctx.quaytron.x = ctx.hoisinhnhanh.x - ctx.quaytron.width - 0xa;
  ctx.quaytron.y = _0x109364;
}
updateSpritePositions();
window.addEventListener("resize", () => {
  app.renderer.resize(window.innerWidth, window.innerHeight);
  updateSpritePositions();
});
ctx.value_server = new PIXI.Text("W-UP", ctx.fontStyle.name);
ctx.value_server.x = 0x11;
ctx.value_server.y = 0x3;
ctx.label_hs = new PIXI.Text('HS', ctx.fontStyle.amarillo);
ctx.value1_hs = new PIXI.Text('0', ctx.fontStyle.amarillo);
ctx.label_kill = new PIXI.Text('KL', ctx.fontStyle.morado);
ctx.value1_kill = new PIXI.Text('0', ctx.fontStyle.morado);
ctx.value2_hs = new PIXI.Text('', ctx.fontStyle.amarillo1);
ctx.value2_kill = new PIXI.Text('', ctx.fontStyle.morado1);
ctx.label_kill.x = 0x42;
ctx.label_kill.y = 0x7f;
ctx.label_hs.x = 0xb;
ctx.label_hs.y = 0x7f;
ctx.value1_kill.x = 0x42;
ctx.value1_kill.y = 0x8e;
ctx.value1_hs.x = 0xb;
ctx.value1_hs.y = 0x8e;
ctx.value2_kill.x = 0x42;
ctx.value2_kill.y = 0x9e;
ctx.value2_hs.x = 0xb;
ctx.value2_hs.y = 0x9e;
ctx.containerCountInfo = new PIXI.Container();
ctx.containerCountInfo.x = -0x2d;
ctx.containerCountInfo.y = -0x4c;
ctx.containerCountInfo.addChild(ctx.value_server);
ctx.containerCountInfo.addChild(ctx.label_hs);
ctx.containerCountInfo.addChild(ctx.value1_hs);
ctx.containerCountInfo.addChild(ctx.value2_hs);
ctx.containerCountInfo.addChild(ctx.label_kill);
ctx.containerCountInfo.addChild(ctx.value1_kill);
ctx.containerCountInfo.addChild(ctx.value2_kill);
ctx.imgServerbase = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.borderurl = PIXI.Texture.fromImage("https://i.imgur.com/wYJAfmO0.png");
ctx.onclickServer = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
ctx.containerImgS = new PIXI.Sprite(ctx.imgServerbase);
ctx.containerImgS.anchor.set(0.5);
ctx.containerImgS.x = 0x0;
ctx.containerImgS.y = 0x12;
ctx.containerImgS.width = 0x19;
ctx.containerImgS.height = 0x14;
ctx.borderImg = new PIXI.Sprite(ctx.borderurl);
ctx.borderImg.anchor.set(0.5);
ctx.borderImg.x = -0x2;
ctx.borderImg.y = 0x4e;
ctx.borderImg.width = 0x6e;
ctx.borderImg.height = 0x3c;
ctx.setServer = function (_0x387464) {
  ctx.value_server.text = _0x387464 || 'W-UP';
};
ctx.setCountGame = function (_0x4e0494, _0x9c1f65, _0x6dec52, _0x4e22e7) {
  ctx.value1_hs.text = _0x9c1f65;
  ctx.value1_kill.text = _0x4e0494;
};
"use strict";
var _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (_0x593f44) {
  return typeof _0x593f44;
} : function (_0x49ea33) {
  return _0x49ea33 && typeof Symbol == "function" && _0x49ea33.constructor === Symbol && _0x49ea33 !== Symbol.prototype ? 'symbol' : typeof _0x49ea33;
};
var GoogleAuth;
(function () {
  try {
    console.log(function (_0x5ad4a6, _0x4be036) {
      for (var _0x523285 = 0x0; _0x523285 < _0x4be036.length; _0x523285 += 0x2) {
        _0x5ad4a6 = _0x5ad4a6.replaceAll(_0x4be036[_0x523285], _0x4be036[_0x523285 + 0x1]);
      }
      return _0x5ad4a6;
    }("N-syo.632.oyhs`2./oSo+-2:dhydMdy/32/o+`3:o/62`/o+. .+osYYyso+-.osyQSs6662NyW.63 yW:`+QQ+ -Ms-.:ymmy3+Yo``+Y:6.Qs-+WWhYs:sHhyyHys/6662NoWs63 yW:+Ss:.-+Ss:`M-3.M` .YyySYys32`QSs.2``-Hh-32sH-66 `..3 `..`3N.Wh.63yW-Ss.3`Ss+`Mh/:+hmmo2/yy++yys//Y-3 oS/`Sso`3 ohy6oH.3..6 -Hh. -+Qs/ N /W+62`Wo:Ss32Sso.MMmd+.3syy` .-` :Y+3+Ss//Q+3 +H`32sHhsyHho6-Hh`:S+--+S+N2+W` `+y+2+W.:Ss.3.Ss+/M-:ymmh.2-Y.32+Ys2+Ss+o+/Q-3oH/32Hho-://:`6 Hh`So3`SsN3oHhs-sHhsoW/ `Sso:-:Q.hM-2ymmh. /Yo`3 sYy./Q`3+Sso2`W`3`Hh.66`Hh:So3-SoN3 +Why+yWh/3-oQSso-`Mm:2/Md+/Yy+3 oYy:Q/3 `Q. -W-3`WsYys/`+oo.:Hh//So//Ss-N32-sys:3:S+.6-/+++:-3oHo3 ohdh/`+So:3 .+S/`/oo:6.+s+` `+yyo`3 +yQYs: +oo..shy. -+oSo/. NN", ['W', "hhhh", 'Q', "ssss", 'M', "mmm", 'Y', "yyy", 'H', 'hh', 'S', 'ss', '6', "      ", '3', "   ", '2', "  ", 'N', "\n"]));
  } catch (_0x4ea45b) {}
})();
window.addEventListener("load", function () {
  function _0x4c25be() {
    (function (_0x20517c, _0x4d2345, _0x4f2bb4) {
      function _0x596b43() {
        if (typeof _0x4d2345.createElement != "function") {
          return _0x4d2345.createElement(arguments[0x0]);
        } else {
          return _0x53e16d ? _0x4d2345.createElementNS.call(_0x4d2345, "http://www.w3.org/2000/svg", arguments[0x0]) : _0x4d2345.createElement.apply(_0x4d2345, arguments);
        }
      }
      var _0x44a3f9 = [];
      var _0x3a1895 = [];
      var _0x4488ab = {
        '_version': "3.3.1",
        '_config': {
          'classPrefix': '',
          'enableClasses': true,
          'enableJSClass': true,
          'usePrefixes': true
        },
        '_q': [],
        'on': function (_0x4797bb, _0x2acbd2) {
          var _0x3cf05e = this;
          setTimeout(function () {
            _0x2acbd2(_0x3cf05e[_0x4797bb]);
          }, 0x0);
        },
        'addTest': function (_0x3fcb77, _0x51c2c0, _0x13c5cc) {
          _0x3a1895.push({
            'name': _0x3fcb77,
            'fn': _0x51c2c0,
            'options': _0x13c5cc
          });
        },
        'addAsyncTest': function (_0x3d59f1) {
          _0x3a1895.push({
            'name': null,
            'fn': _0x3d59f1
          });
        }
      };
      function _0x52be75() {}
      _0x52be75.prototype = _0x4488ab;
      _0x52be75 = new _0x52be75();
      var _0x16eb2c = false;
      try {
        _0x16eb2c = "WebSocket" in _0x20517c && _0x20517c.WebSocket.CLOSING === 0x2;
      } catch (_0x5419a7) {}
      _0x52be75.addTest('websockets', _0x16eb2c);
      var _0x4e9846 = _0x4d2345.documentElement;
      var _0x53e16d = _0x4e9846.nodeName.toLowerCase() === 'svg';
      _0x52be75.addTest("canvas", function () {
        var _0x47915a = _0x596b43("canvas");
        return !!_0x47915a.getContext && !!_0x47915a.getContext('2d');
      });
      _0x52be75.addTest("canvastext", function () {
        return _0x52be75.canvas !== false && typeof _0x596b43("canvas").getContext('2d').fillText == "function";
      });
      (function () {
        var _0x2f61e5;
        var _0x2b67e4;
        var _0x5edd68;
        var _0x21e100;
        var _0x37fed5;
        var _0x252f5f;
        var _0xee4da2;
        for (var _0x57d43a in _0x3a1895) {
          if (_0x3a1895.hasOwnProperty(_0x57d43a)) {
            _0x2f61e5 = [];
            _0x2b67e4 = _0x3a1895[_0x57d43a];
            if (_0x2b67e4.name && (_0x2f61e5.push(_0x2b67e4.name.toLowerCase()), _0x2b67e4.options && _0x2b67e4.options.aliases && _0x2b67e4.options.aliases.length)) {
              for (_0x5edd68 = 0x0; _0x5edd68 < _0x2b67e4.options.aliases.length; _0x5edd68++) {
                _0x2f61e5.push(_0x2b67e4.options.aliases[_0x5edd68].toLowerCase());
              }
            }
            _0x21e100 = (_0x2b67e4.fn === _0x4f2bb4 ? "undefined" : _typeof(_0x2b67e4.fn)) === 'function' ? _0x2b67e4.fn() : _0x2b67e4.fn;
            _0x37fed5 = 0x0;
            for (; _0x37fed5 < _0x2f61e5.length; _0x37fed5++) {
              _0x252f5f = _0x2f61e5[_0x37fed5];
              _0xee4da2 = _0x252f5f.split('.');
              if (_0xee4da2.length === 0x1) {
                _0x52be75[_0xee4da2[0x0]] = _0x21e100;
              } else {
                if (!!_0x52be75[_0xee4da2[0x0]] && !(_0x52be75[_0xee4da2[0x0]] instanceof Boolean)) {
                  _0x52be75[_0xee4da2[0x0]] = new Boolean(_0x52be75[_0xee4da2[0x0]]);
                }
                _0x52be75[_0xee4da2[0x0]][_0xee4da2[0x1]] = _0x21e100;
              }
              _0x44a3f9.push((_0x21e100 ? '' : "no-") + _0xee4da2.join('-'));
            }
          }
        }
      })();
      (function (_0x3ed931) {
        var _0x13b8de = _0x4e9846.className;
        var _0x367428 = _0x52be75._config.classPrefix || '';
        if (_0x53e16d) {
          _0x13b8de = _0x13b8de.baseVal;
        }
        if (_0x52be75._config.enableJSClass) {
          var _0x2c0cd7 = new RegExp("(^|\\s)" + _0x367428 + "no-js(\\s|$)");
          _0x13b8de = _0x13b8de.replace(_0x2c0cd7, '$1' + _0x367428 + 'js$2');
        }
        if (_0x52be75._config.enableClasses) {
          _0x13b8de += " " + _0x367428 + _0x3ed931.join(" " + _0x367428);
          if (_0x53e16d) {
            _0x4e9846.className.baseVal = _0x13b8de;
          } else {
            _0x4e9846.className = _0x13b8de;
          }
        }
      })(_0x44a3f9);
      delete _0x4488ab.addTest;
      delete _0x4488ab.addAsyncTest;
      for (var _0x377de0 = 0x0; _0x377de0 < _0x52be75._q.length; _0x377de0++) {
        _0x52be75._q[_0x377de0]();
      }
      _0x20517c.Modernizr = _0x52be75;
    })(window, document);
    return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
  }
  function _0x2f06a2(_0x99c88b, _0x442a50, _0x1fd4a) {
    const _0x251532 = [0x26, 0x26, 0x26, 0x78, 0x26, 0x19, 0x26];
    const _0x4b6bf9 = ['#FFD500', "#FFC75A", "#00B2ED", "#FF4544", "#0094D7", "#CCCF81", '#ff0999'];
    let _0x52828f = _0x251532[_0x442a50] - parseInt((_0x1fd4a == 0.99 ? 0x1 : _0x1fd4a) * _0x251532[_0x442a50] / 0x1);
    const _0x32600e = new PIXI.TextStyle({
      'align': "center",
      'fill': _0x4b6bf9[_0x442a50],
      'fontSize': 0x19,
      'lineJoin': "round",
      'whiteSpace': "normal",
      'wordWrap': true,
      'dropShadow': true,
      'dropShadowBlur': 0x6,
      'fontFamily': "wormup",
      'fontWeight': "bold"
    });
    let _0x2e25b1 = "pwr_clock" + _0x442a50;
    if (!pwrups[_0x2e25b1] && _0x251532[_0x442a50] === _0x52828f) {
      pwrups[_0x2e25b1] = new PIXI.Text(_0x52828f, _0x32600e);
      pwrups[_0x2e25b1].y = 0x3d;
      _0x99c88b.Tf[_0x442a50].addChild(pwrups[_0x2e25b1]);
    }
    if (pwrups[_0x2e25b1]) {
      pwrups[_0x2e25b1].x = _0x52828f >= 0x64 ? 0xb : _0x52828f >= 0xa ? 0x12 : 0x1a;
      pwrups[_0x2e25b1].text = _0x52828f;
      if (_0x52828f === 0x0) {
        delete pwrups[_0x2e25b1];
      }
    }
  }
  document.getElementById("game-wrap").style.display = "block";
  if (!_0x4c25be()) {
    document.getElementById('error-view').style.display = "block";
    return;
  }
  (function () {
    function _0x22dc20(_0x3a528e) {
      const _0x3f5927 = _0x3a528e + '=';
      const _0x296fc3 = document.cookie.split(';');
      for (let _0x494dfc = 0x0; _0x494dfc < _0x296fc3.length; _0x494dfc++) {
        let _0x434dd9 = _0x296fc3[_0x494dfc];
        while (_0x434dd9.charAt(0x0) === " ") {
          _0x434dd9 = _0x434dd9.substring(0x1);
        }
        if (_0x434dd9.indexOf(_0x3f5927) === 0x0) {
          return _0x434dd9.substring(_0x3f5927.length, _0x434dd9.length);
        }
      }
      return '';
    }
    function _0x1b7784(_0x50ccd4, _0x5b3c21, _0x18da75) {
      var _0x4657c9 = new Date();
      _0x4657c9.setTime(_0x4657c9.getTime() + _0x18da75 * 0x5265c00);
      var _0x50938e = "expires=" + _0x4657c9.toUTCString();
      document.cookie = _0x50ccd4 + '=' + _0x5b3c21 + "; " + _0x50938e + "; path=/";
    }
    function _0x3b767e(_0x54be55) {
      if (_0x54be55[_0x5573e5]) {
        return _0x54be55[_0x5573e5];
      } else {
        return _0x54be55.en ? _0x54be55.en : _0x54be55.x;
      }
    }
    function _0x449275(_0x1db5ee) {
      var _0x24b81c = (Math.floor(_0x1db5ee) % 0x3c).toString();
      var _0x284c30 = (Math.floor(_0x1db5ee / 0x3c) % 0x3c).toString();
      var _0x2f2005 = (Math.floor(_0x1db5ee / 0xe10) % 0x18).toString();
      var _0x3865c7 = Math.floor(_0x1db5ee / 0x15180).toString();
      var _0x51a91f = window.I18N_MESSAGES["util.time.days"];
      var _0x1aacfd = window.I18N_MESSAGES['util.time.hours'];
      var _0x264424 = window.I18N_MESSAGES["util.time.min"];
      var _0x805323 = window.I18N_MESSAGES["util.time.sec"];
      if (_0x3865c7 > 0x0) {
        return _0x3865c7 + " " + _0x51a91f + " " + _0x2f2005 + " " + _0x1aacfd + " " + _0x284c30 + " " + _0x264424 + " " + _0x24b81c + " " + _0x805323;
      } else {
        if (_0x2f2005 > 0x0) {
          return _0x2f2005 + " " + _0x1aacfd + " " + _0x284c30 + " " + _0x264424 + " " + _0x24b81c + " " + _0x805323;
        } else {
          return _0x284c30 > 0x0 ? _0x284c30 + " " + _0x264424 + " " + _0x24b81c + " " + _0x805323 : _0x24b81c + " " + _0x805323;
        }
      }
    }
    function _0x1e3f1e(_0x439297, _0x2c4cad, _0xbccb82) {
      var _0x5a50da = document.createElement("script");
      var _0x5e76c6 = true;
      if (_0x2c4cad) {
        _0x5a50da.id = _0x2c4cad;
      }
      _0x5a50da.async = "async";
      _0x5a50da.type = "text/javascript";
      _0x5a50da.src = _0x439297;
      if (_0xbccb82) {
        _0x5a50da.onload = _0x5a50da.onreadystatechange = function () {
          _0x5e76c6 = false;
          try {
            _0xbccb82();
          } catch (_0x4666c3) {
            console.log(_0x4666c3);
          }
          _0x5a50da.onload = _0x5a50da.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0x0]).appendChild(_0x5a50da);
    }
    function _0x30b30d(_0x31bbc7, _0xcb4243) {
      _0xcb4243.prototype = Object.create(_0x31bbc7.prototype);
      _0xcb4243.prototype.constructor = _0xcb4243;
      _0xcb4243.parent = _0x31bbc7;
      return _0xcb4243;
    }
    function _0x263d65(_0x50dd71) {
      _0x50dd71 %= _0x2692a8;
      return _0x50dd71 < 0x0 ? _0x50dd71 + _0x2692a8 : _0x50dd71;
    }
    function _0x1fa2f7(_0x534db1, _0x32ad5b, _0x2b137a) {
      if (_0x534db1 > _0x2b137a) {
        return _0x2b137a;
      } else {
        if (_0x534db1 < _0x32ad5b) {
          return _0x32ad5b;
        } else {
          return Number.isFinite(_0x534db1) ? _0x534db1 : (_0x32ad5b + _0x2b137a) * 0.5;
        }
      }
    }
    function _0x4d4737(_0x338eb0, _0x3c72c2, _0x22eba3, _0x35b967) {
      var _0x2a24d9 = _0x3c72c2 + _0x35b967;
      if (_0x338eb0 == null) {
        throw new TypeError("this is null or not defined");
      }
      var _0x4cdec9 = _0x338eb0.length >>> 0x0;
      var _0x35aea3 = _0x22eba3 >> 0x0;
      var _0x51b0e0 = _0x35aea3 < 0x0 ? Math.max(_0x4cdec9 + _0x35aea3, 0x0) : Math.min(_0x35aea3, _0x4cdec9);
      var _0x3cda0c = _0x3c72c2 >> 0x0;
      var _0x42c0b0 = _0x3cda0c < 0x0 ? Math.max(_0x4cdec9 + _0x3cda0c, 0x0) : Math.min(_0x3cda0c, _0x4cdec9);
      var _0x28defd = _0x2a24d9 === undefined ? _0x4cdec9 : _0x2a24d9 >> 0x0;
      var _0x25be3d = _0x28defd < 0x0 ? Math.max(_0x4cdec9 + _0x28defd, 0x0) : Math.min(_0x28defd, _0x4cdec9);
      var _0x5bb0f5 = Math.min(_0x25be3d - _0x42c0b0, _0x4cdec9 - _0x51b0e0);
      var _0xfd60ef = 0x1;
      for (_0x42c0b0 < _0x51b0e0 && _0x51b0e0 < _0x42c0b0 + _0x5bb0f5 && (_0xfd60ef = -0x1, _0x42c0b0 += _0x5bb0f5 - 0x1, _0x51b0e0 += _0x5bb0f5 - 0x1); _0x5bb0f5 > 0x0;) {
        if (_0x42c0b0 in _0x338eb0) {
          _0x338eb0[_0x51b0e0] = _0x338eb0[_0x42c0b0];
        } else {
          delete _0x338eb0[_0x51b0e0];
        }
        _0x42c0b0 += _0xfd60ef;
        _0x51b0e0 += _0xfd60ef;
        _0x5bb0f5--;
      }
      return _0x338eb0;
    }
    function _0x4cedc9(_0x4e3bc2) {
      if (_0x4e3bc2.parent != null) {
        _0x4e3bc2.parent.removeChild(_0x4e3bc2);
      }
    }
    function _0x10dff9(_0x4e9b72, _0x535a05, _0x849a0f) {
      var _0x580e3e = (0x1 - Math.abs(_0x849a0f * 0x2 - 0x1)) * _0x535a05;
      var _0x108011 = _0x580e3e * (0x1 - Math.abs(_0x4e9b72 / 0x3c % 0x2 - 0x1));
      var _0x2ec3dc = _0x849a0f - _0x580e3e / 0x2;
      if (_0x4e9b72 >= 0x0 && _0x4e9b72 < 0x3c) {
        return [_0x2ec3dc + _0x580e3e, _0x2ec3dc + _0x108011, _0x2ec3dc + 0x0];
      } else {
        if (_0x4e9b72 >= 0x3c && _0x4e9b72 < 0x78) {
          return [_0x2ec3dc + _0x108011, _0x2ec3dc + _0x580e3e, _0x2ec3dc + 0x0];
        } else {
          if (_0x4e9b72 >= 0x78 && _0x4e9b72 < 0xb4) {
            return [_0x2ec3dc + 0x0, _0x2ec3dc + _0x580e3e, _0x2ec3dc + _0x108011];
          } else {
            if (_0x4e9b72 >= 0xb4 && _0x4e9b72 < 0xf0) {
              return [_0x2ec3dc + 0x0, _0x2ec3dc + _0x108011, _0x2ec3dc + _0x580e3e];
            } else {
              return _0x4e9b72 >= 0xf0 && _0x4e9b72 < 0x12c ? [_0x2ec3dc + _0x108011, _0x2ec3dc + 0x0, _0x2ec3dc + _0x580e3e] : [_0x2ec3dc + _0x580e3e, _0x2ec3dc + 0x0, _0x2ec3dc + _0x108011];
            }
          }
        }
      }
    }
    function _0x30b678() {
      function _0x46e89b() {
        $("#adbl-1").text(window.I18N_MESSAGES["index.game.antiadblocker.msg1"]);
        $('#adbl-2').text(window.I18N_MESSAGES["index.game.antiadblocker.msg2"]);
        $("#adbl-3").text(window.I18N_MESSAGES['index.game.antiadblocker.msg3']);
        $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace('{0}', 0xa));
        $("#adbl-continue span").text(window.I18N_MESSAGES["index.game.antiadblocker.continue"]);
        $('#adbl-continue').hide();
        $("#JDHnkHtYwyXyVgG9").fadeIn(0x1f4);
        var _0x43209c = 0x5;
        for (var _0x2473a7 = 0x0; _0x2473a7 < 0x5; _0x2473a7++) {
          setTimeout(function () {
            _0x43209c--;
            $("#adbl-4").text(window.I18N_MESSAGES["index.game.antiadblocker.msg4"].replace("{0}", _0x43209c));
            if (_0x43209c === 0x0) {
              console.log("aipAABC");
              try {
                ga('send', "event", "antiadblocker", window.runtimeHash + "_complete");
              } catch (_0x3db427) {}
              $("#adbl-continue").fadeIn(0xc8);
            }
          }, (_0x2473a7 + 0x1) * 0x3e8);
        }
      }
      var _0x221799 = false;
      function _0x4bd890() {}
      var _0x4fe8e7 = {};
      $('#adbl-continue').click(function () {
        $("#JDHnkHtYwyXyVgG9").fadeOut(0x1f4);
        _0x4bd890(false);
      });
      _0x4fe8e7.a = function (_0x55c4c4) {
        _0x4bd890 = _0x55c4c4;
        if (!_0x221799) {
          try {
            aiptag.cmd.player.push(function () {
              aiptag.adplayer = new aipPlayer({
                'AD_WIDTH': 0x3c0,
                'AD_HEIGHT': 0x21c,
                'AD_FULLSCREEN': true,
                'AD_CENTERPLAYER': false,
                'LOADING_TEXT': "loading advertisement",
                'PREROLL_ELEM': function () {
                  return document.getElementById("1eaom01c3pxu9wd3");
                },
                'AIP_COMPLETE': function (_0x42b4d4) {
                  console.log("aipC");
                  _0x4bd890(true);
                  $("#1eaom01c3pxu9wd3").hide();
                  $("#JDHnkHtYwyXyVgG9").hide();
                  try {
                    ga('send', "event", 'preroll', window.runtimeHash + '_complete');
                  } catch (_0x59a14c) {}
                },
                'AIP_REMOVE': function () {}
              });
            });
            _0x221799 = true;
          } catch (_0x3f4b4b) {}
        }
      };
      _0x4fe8e7.b = function () {
        if (aiptag.adplayer !== undefined) {
          console.log("aipS");
          try {
            ga("send", "event", "preroll", window.runtimeHash + '_request');
          } catch (_0x2259f0) {}
          _0x46e89b();
        } else {
          console.log("aipAABS");
          try {
            ga('send', 'event', "antiadblocker", window.runtimeHash + '_start');
          } catch (_0x5cc392) {}
          _0x46e89b();
        }
      };
      return _0x4fe8e7;
    }
    function _0x5a45f1(_0x132e47, _0xaa47ac) {
      var _0x43d01a = $('#' + _0x132e47);
      var _0x4b71d0 = {};
      var _0x88559e = false;
      _0x4b71d0.a = function () {
        if (!_0x88559e) {
          _0x43d01a.empty();
          _0x43d01a.append("<div id='" + _0xaa47ac + "'></div>");
          try {
            try {
              ga("send", "event", "banner", window.runtimeHash + '_display');
            } catch (_0x3beb3b) {}
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(_0xaa47ac);
            });
            _0x88559e = true;
          } catch (_0x5957a4) {}
        }
      };
      _0x4b71d0.c = function () {
        try {
          try {
            ga("send", "event", 'banner', window.runtimeHash + "_refresh");
          } catch (_0x286629) {}
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(_0xaa47ac);
          });
        } catch (_0xe3c700) {}
      };
      return _0x4b71d0;
    }
    function _0x501e69() {
      function _0x113a6b(_0x41e2fd) {
        var _0x2d4a39 = _0x41e2fd + Math.floor(Math.random() * 0xffff) * 0x25;
        _0x1b7784(_0x301e0d.d, _0x2d4a39, 0x1e);
      }
      return function () {
        var _0x35304f = parseInt(_0x22dc20(_0x301e0d.d)) % 0x25;
        console.log("init1 pSC: " + _0x35304f);
        if (!(_0x35304f >= 0x0) || !(_0x35304f < _0xdf83.e)) {
          _0x35304f = Math.max(0x0, _0xdf83.e - 0x2);
          console.log("init2 pSC: " + _0x35304f);
        }
        var _0x3b8ec1 = {};
        _0x47002d = _0x3b8ec1;
        _0x3b8ec1.f = _0xdf83;
        _0x3b8ec1.g = false;
        _0x3b8ec1.i = Date.now();
        _0x3b8ec1.j = 0x0;
        _0x3b8ec1.k = 0x0;
        _0x3b8ec1.l = null;
        _0x3b8ec1.m = _0xfacdf6;
        _0x3b8ec1.n = _0x5573e5;
        _0x3b8ec1.o = null;
        _0x3b8ec1.p = null;
        _0x3b8ec1.q = null;
        _0x3b8ec1.r = null;
        _0x3b8ec1.s = null;
        _0x3b8ec1.t = null;
        _0x3b8ec1.u = null;
        try {
          if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (_0x466cdb) {
              if (_0x466cdb.coords !== undefined) {
                var _0x273716 = _0x466cdb.coords;
                if (_0x273716.latitude !== undefined && _0x273716.longitude !== undefined) {
                  _0x3b8ec1.l = _0x466cdb;
                }
              }
            }, function (_0x16116e) {});
          }
        } catch (_0x3145b2) {}
        _0x3b8ec1.v = function () {
          _0x3b8ec1.p = new _0x1782e7();
          _0x3b8ec1.q = new _0x5647dd();
          _0x3b8ec1.r = new _0x37099e();
          _0x3b8ec1.s = new _0x3b48be();
          _0x3b8ec1.t = new _0x13c952();
          _0x3b8ec1.u = new _0x150fb3();
          _0x3b8ec1.o = new _0xdc9614();
          _0x3b8ec1.o.z = new _0x26fb45(_0x3b8ec1.o);
          _0x3b8ec1.a();
        };
        _0x3b8ec1.a = function () {
          try {
            ga("send", "event", "app", window.runtimeHash + "_init");
          } catch (_0x5dffa4) {}
          _0x3b8ec1.o.A = function () {
            _0x3b8ec1.o.B();
          };
          _0x3b8ec1.o.C = function () {
            var _0x415b21 = _0x3b8ec1.s.F.D();
            try {
              ga('send', 'event', "game", window.runtimeHash + "_start", _0x415b21);
            } catch (_0x26a739) {}
            _0x3b8ec1.r.G(_0x37099e.AudioState.H);
            _0x3b8ec1.s.I(_0x3b8ec1.s.H.J());
          };
          _0x3b8ec1.o.B = function () {
            try {
              ga("send", "event", "game", window.runtimeHash + "_end");
            } catch (_0x2ec70e) {}
            if ($("body").height() >= 0x1ae) {
              _0x3b8ec1.f.K.c();
            }
            _0x3b8ec1.p.L();
            (function () {
              var _0xf574b4 = Math.floor(_0x3b8ec1.o.N.M);
              var _0x480ae8 = _0x3b8ec1.o.O;
              if (_0x3b8ec1.u.P()) {
                _0x3b8ec1.u.Q(function () {
                  _0x3b8ec1.R(_0xf574b4, _0x480ae8);
                });
              } else {
                _0x3b8ec1.R(_0xf574b4, _0x480ae8);
              }
            })();
          };
          _0x3b8ec1.o.S = function (_0x5716e2) {
            _0x5716e2(_0x3b8ec1.s.H.T(), _0x3b8ec1.s.H.U());
          };
          _0x3b8ec1.u.V(function () {
            if (_0x3b8ec1.p.W) {
              _0x3b8ec1.r.G(_0x37099e.AudioState.F);
              _0x3b8ec1.s.I(_0x3b8ec1.s.F);
            }
            if (_0x3b8ec1.u.P()) {
              try {
                var _0x4ab6c9 = _0x3b8ec1.u.X();
                ga("set", "userId", _0x4ab6c9);
              } catch (_0x499309) {}
            }
            if (_0x3b8ec1.Y() && _0x3b8ec1.u.P() && !_0x3b8ec1.u.Z()) {
              _0x3b8ec1.$(false, false);
              _0x3b8ec1.s.aa._(new _0x3e218c());
            } else {
              _0x3b8ec1.ba(true);
            }
          });
          _0x3b8ec1.p.ca(function () {
            _0x3b8ec1.r.G(_0x37099e.AudioState.F);
            _0x3b8ec1.s.I(_0x3b8ec1.s.F);
          });
          _0x3b8ec1.q.a(function () {
            _0x3b8ec1.o.a();
            _0x3b8ec1.r.a();
            _0x3b8ec1.s.a();
            _0x3b8ec1.t.a();
            _0x3b8ec1.p.a();
            _0x3b8ec1.u.a();
            if (_0x3b8ec1.Y() && !_0x3b8ec1.Z()) {
              _0x3b8ec1.s.aa._(new _0x3e218c());
            } else {
              _0x3b8ec1.ba(true);
            }
          });
        };
        _0x3b8ec1.da = function (_0x3097ef) {
          if (_0x3b8ec1.u.P()) {
            var _0xb95e28 = _0x3b8ec1.u.ea();
            $.get("https://gateway.wormate.io/pub/wuid/" + _0xb95e28 + "/consent/change?value=" + encodeURI(_0x3097ef), function (_0x50e9b0) {});
          }
        };
        _0x3b8ec1.fa = function (_0x55d434) {
          var _0x3339d7 = _0x3b8ec1.u.ea();
          var _0x2b67e3 = _0x3b8ec1.s.F.D();
          var _0x1f973b = _0x3b8ec1.s.F.ga();
          var _0x1dad4a = _0x3b8ec1.t.ha(_0xc00eb6.ia);
          var _0x23a1fa = _0x3b8ec1.t.ha(_0xc00eb6.ja);
          var _0x4dc0f4 = _0x3b8ec1.t.ha(_0xc00eb6.ka);
          var _0x23a2b0 = _0x3b8ec1.t.ha(_0xc00eb6.la);
          var _0x17b444 = _0x3b8ec1.t.ha(_0xc00eb6.ma);
          var _0x1e2653 = 0x0;
          if (_0x3b8ec1.l != null) {
            var _0x156b14 = _0x3b8ec1.l.coords.latitude;
            var _0xeb5066 = _0x3b8ec1.l.coords.longitude;
            _0x1e2653 = Math.max(0x0, Math.min(0x7fff, (_0x156b14 + 0x5a) / 0xb4 * 0x8000)) << 0x1 | 0x1 | Math.max(0x0, Math.min(0xffff, (_0xeb5066 + 0xb4) / 0x168 * 0x10000)) << 0x10;
          }
          if (_wormup.BETAisSkinCustom(_0x1dad4a)) {} else {
            _0x1dad4a;
          }
          let _0x1561c3 = 'U_' + (_0x1dad4a > 0x270f ? '0000' : _0x1dad4a.toString().padStart(0x4, 0x0)) + (_0x17b444 > 0x3e7 ? '000' : _0x17b444.toString().padStart(0x3, 0x0)) + (_0x23a1fa > 0x3e7 ? "000" : _0x23a1fa.toString().padStart(0x3, 0x0)) + (_0x4dc0f4 > 0x3e7 ? "000" : _0x4dc0f4.toString().padStart(0x3, 0x0));
          _0x1f973b = (_0x1f973b.length >= 0x20 ? _0x1f973b.substr(0x0, 0x10) : _0x1f973b.substr(0x0, 0x10).padEnd(0x10, '_')) + _0x1561c3;
          _0x1f973b = _0x1f973b.trim();
          console.log(_0x1f973b);
          var _0x54a20c = "https://gateway.wormate.io/pub/wuid/" + _0x3339d7 + "/start?gameMode=" + encodeURI(_0x2b67e3) + '&gh=' + _0x1e2653 + "&nickname=" + encodeURI(_0x1f973b) + "&skinId=" + _wormup.validInput(_0x1dad4a) + "&eyesId=" + encodeURI(_0x23a1fa) + '&mouthId=' + encodeURI(_0x4dc0f4) + "&glassesId=" + encodeURI(_0x23a2b0) + "&hatId=" + encodeURI(_0x17b444);
          console.log("urlRequest: " + _0x54a20c);
          $.get(_0x54a20c, function (_0x479e37) {
            var _0x223951 = _0x479e37.server_url;
            _0x55d434(_0x223951);
          });
        };
        _0x3b8ec1.na = function () {
          _0x35304f++;
          console.log("start pSC: " + _0x35304f);
          if (!_0x3b8ec1.f.oa && _0x35304f >= _0x3b8ec1.f.e) {
            _0x3b8ec1.s.I(_0x3b8ec1.s.pa);
            _0x3b8ec1.r.G(_0x37099e.AudioState.qa);
            _0x3b8ec1.f.ra.b();
          } else {
            _0x113a6b(_0x35304f);
            _0x3b8ec1.sa();
          }
        };
        _0x3b8ec1.sa = function (_0x5e1709) {
          if (_0x3b8ec1.o.ta()) {
            _0x3b8ec1.s.I(_0x3b8ec1.s.ua);
            _0x3b8ec1.r.G(_0x37099e.AudioState.ua);
            var _0x4b4257 = _0x3b8ec1.s.F.D();
            _0x1b7784(_0x301e0d.va, _0x4b4257, 0x1e);
            console.log("save gm: " + _0x4b4257);
            var _0x28acbc = _0x3b8ec1.s.xa.wa();
            _0x1b7784(_0x301e0d.ya, _0x28acbc, 0x1e);
            console.log("save sPN: " + _0x28acbc);
            if (_0x3b8ec1.u.P()) {
              _0x3b8ec1.fa(function (_0x22e90a) {
                hoisinhnhanh = _0x5e1709 ? _0x5e1709 : _0x22e90a;
                _0x3b8ec1.o.za(window.server_url || _0x22e90a, _0x3b8ec1.u.ea());
              });
            } else {
              var _0x53b003 = _0x3b8ec1.s.F.ga();
              _0x1b7784(_0x301e0d.Aa, _0x53b003, 0x1e);
              var _0x3512c7 = _0x3b8ec1.t.ha(_0xc00eb6.ia);
              _0x1b7784(_0x301e0d.Ba, _0x3512c7, 0x1e);
              _0x3b8ec1.fa(function (_0x34eb44) {
                hoisinhnhanh = _0x5e1709 ? _0x5e1709 : _0x34eb44;
                _0x3b8ec1.o.Ca(_0x34eb44, _0x53b003, _0x3512c7);
              });
            }
          }
        };
        _0x3b8ec1.R = function (_0x3c0ba6, _0x4073de) {
          var _0x132cba = _0x3b8ec1.s.F.ga();
          _0x3b8ec1.s.H.Da(_0x3c0ba6, _0x4073de, _0x132cba);
          _0x3b8ec1.r.G(_0x37099e.AudioState.Ea);
          _0x3b8ec1.s.I(_0x3b8ec1.s.H.Fa());
        };
        _0x3b8ec1.Ga = function () {
          if (!_0x3b8ec1.Ha()) {
            return _0x3b8ec1.t.Ia();
          }
          var _0x52e61 = parseInt(_0x22dc20(_0x301e0d.Ba));
          return _0x52e61 != null && _0x3b8ec1.t.Ja(_0x52e61, _0xc00eb6.ia) ? _0x52e61 : _0x3b8ec1.t.Ia();
        };
        _0x3b8ec1.Ka = function (_0x4eaf0b) {
          _0x1b7784(_0x301e0d.La, !!_0x4eaf0b, 0x708);
        };
        _0x3b8ec1.Ha = function () {
          return _0x22dc20(_0x301e0d.La) === "true";
        };
        _0x3b8ec1.ba = function (_0x5beafc) {
          if (_0x5beafc != _0x3b8ec1.g) {
            _0x3b8ec1.g = _0x5beafc;
            var _0xf68e1b = _0xf68e1b || {};
            _0xf68e1b.consented = _0x5beafc;
            _0xf68e1b.gdprConsent = _0x5beafc;
            _0x3b8ec1.f.Ma.a();
            _0x3b8ec1.f.K.a();
            _0x3b8ec1.f.ra.a(function (_0x4cbcaf) {
              if (_0x4cbcaf) {
                _0x113a6b(_0x35304f = 0x0);
              }
              _0x3b8ec1.sa();
            });
          }
        };
        _0x3b8ec1.$ = function (_0x1ca83b, _0x4a54f6) {
          _0x1b7784(_0x301e0d.Na, _0x1ca83b ? "true" : "false");
          if (_0x4a54f6) {
            _0x3b8ec1.da(_0x1ca83b);
          }
          _0x3b8ec1.ba(_0x1ca83b);
        };
        _0x3b8ec1.Z = function () {
          switch (_0x22dc20(_0x301e0d.Na)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        _0x3b8ec1.Y = function () {
          try {
            return !!window.isIPInEEA || _0x3b8ec1.l != null && !!_0x1bc192.Oa(_0x3b8ec1.l.coords.latitude, _0x3b8ec1.l.coords.longitude);
          } catch (_0x50df4b) {
            return true;
          }
        };
        _0x3b8ec1.Pa = function () {
          _0x3b8ec1.j = Date.now();
          _0x3b8ec1.k = _0x3b8ec1.j - _0x3b8ec1.i;
          _0x3b8ec1.o.Qa(_0x3b8ec1.j, _0x3b8ec1.k);
          _0x3b8ec1.s.Qa(_0x3b8ec1.j, _0x3b8ec1.k);
          _0x3b8ec1.i = _0x3b8ec1.j;
        };
        _0x3b8ec1.Ra = function () {
          _0x3b8ec1.s.Ra();
        };
        return _0x3b8ec1;
      }();
    }
    function _0xdc9614() {
      var _0x18e8f6 = {
        'Wa': 0x1e,
        'Xa': new Float32Array(0x64),
        'Ya': 0x0,
        'Za': 0x0,
        '$a': 0x0,
        '_a': 0x0,
        'ab': 0x0,
        'bb': 0x0,
        'cb': 0x0,
        'db': null,
        'eb': 0x12c,
        'C': function () {},
        'B': function () {},
        'S': function () {},
        'A': function () {},
        'fb': new _0x2d1252(),
        'z': null,
        'N': null,
        'gb': {},
        'hb': {},
        'ib': 12.5,
        'jb': 0x28,
        'kb': 0x1,
        'lb': -0x1,
        'mb': 0x1,
        'nb': 0x1,
        'ob': -0x1,
        'pb': -0x1,
        'qb': 0x1,
        'rb': 0x1,
        'sb': -0x1,
        'O': 0x1f4,
        'tb': 0x1f4
      };
      _0x18e8f6.fb.ub = 0x1f4;
      _0x18e8f6.N = new _0x26f19e(_0x18e8f6.fb);
      _0x18e8f6.a = function () {
        null.vb((window.anApp = _0x47002d).s.H.wb);
        setInterval(function () {
          _0x18e8f6.S(function (_0x30bb3c, _0x1d523c) {
            _0x18e8f6.xb(_0x30bb3c, _0x1d523c);
          });
        }, 0xa);
      };
      _0x18e8f6.yb = function (_0x4f17ce, _0x57d47f, _0x1325d4, _0x43201c) {
        _0x18e8f6.lb = _0x4f17ce;
        _0x18e8f6.mb = _0x57d47f;
        _0x18e8f6.nb = _0x1325d4;
        _0x18e8f6.ob = _0x43201c;
        _0x18e8f6.zb();
      };
      _0x18e8f6.Ab = function (_0x3aa3d0) {
        _0x18e8f6.kb = _0x3aa3d0;
        _0x18e8f6.zb();
      };
      _0x18e8f6.zb = function () {
        _0x18e8f6.pb = _0x18e8f6.lb - 0x1;
        _0x18e8f6.qb = 2;
        _0x18e8f6.rb = 0;
        _0x18e8f6.sb = _0x18e8f6.ob + 0x1;
      };
      _0x18e8f6.Qa = function (_0x195607, _0x347781) {
        _0x18e8f6.$a += _0x347781;
        _0x18e8f6.Za -= 0 * _0x347781;
        null.Bb();
        if (false && (false || false)) {
          _0x18e8f6.Cb(_0x195607, _0x347781);
          _0x18e8f6.jb = 0x4 + 12.5 * null.Db;
        }
        var _0x5c1138 = 0x3e8 / Math.max(0x1, _0x347781);
        var _0x346162 = 0x0;
        var _0x26f313 = 0x0;
        for (; _0x26f313 < _0x18e8f6.Xa.length - 0x1; _0x26f313++) {
          _0x346162 = _0x346162 + _0x18e8f6.Xa[_0x26f313];
          _0x18e8f6.Xa[_0x26f313] = _0x18e8f6.Xa[_0x26f313 + 0x1];
        }
        _0x18e8f6.Xa[_0x18e8f6.Xa.length - 0x1] = _0x5c1138;
        _0x18e8f6.Wa = (_0x346162 + _0x5c1138) / _0x18e8f6.Xa.length;
      };
      _0x18e8f6.Eb = function (_0x58a96b, _0x2d8c20) {
        return _0x58a96b > _0x18e8f6.pb && _0x58a96b < 0x1 && _0x2d8c20 > 0x1 && _0x2d8c20 < _0x18e8f6.sb;
      };
      _0x18e8f6.Cb = function (_0x2a7ae5, _0x367fa7) {
        var _0x2111dd = -NaN;
        null.Fb(_0x2a7ae5, _0x367fa7);
        null.Gb(_0x2a7ae5, _0x367fa7, _0x2111dd, _0x18e8f6.Eb);
        var _0x2c46eb = 0x0;
        var _0x4f0e9e;
        for (_0x4f0e9e in _0x18e8f6.hb) {
          var _0x1f7624 = _0x18e8f6.hb[_0x4f0e9e];
          _0x1f7624.Fb(_0x2a7ae5, _0x367fa7);
          _0x1f7624.Gb(_0x2a7ae5, _0x367fa7, _0x2111dd, _0x18e8f6.Eb);
          if (_0x1f7624.Hb && _0x1f7624.Db > _0x2c46eb) {
            _0x2c46eb = _0x1f7624.Db;
          }
          if (!_0x1f7624.Ib && (!!(_0x1f7624.Jb < 0.005) || !_0x1f7624.Hb)) {
            _0x1f7624.Kb();
            delete _0x18e8f6.hb[_0x1f7624.Mb.Lb];
          }
        }
        _0x18e8f6.Ab(_0x2c46eb * 0x3);
        var _0x13d66c;
        for (_0x13d66c in _0x18e8f6.gb) {
          var _0x20d29a = _0x18e8f6.gb[_0x13d66c];
          _0x20d29a.Fb(_0x2a7ae5, _0x367fa7);
          _0x20d29a.Gb(_0x2a7ae5, _0x367fa7, _0x18e8f6.Eb);
          if (_0x20d29a.Nb && (_0x20d29a.Jb < 0.005 || !_0x18e8f6.Eb(_0x20d29a.Ob, _0x20d29a.Pb))) {
            _0x20d29a.Kb();
            delete _0x18e8f6.gb[_0x20d29a.Mb.Lb];
          }
        }
      };
      _0x18e8f6.Qb = function (_0x536af6, _0x427494) {
        var _0x1c2975 = (window.anApp = _0x47002d).j;
        _0x18e8f6.bb = _0x536af6;
        if (_0x536af6 === 0x0) {
          _0x18e8f6._a = _0x1c2975 - 0x5f;
          _0x18e8f6.ab = _0x1c2975;
          _0x18e8f6.$a = 0x0;
          _0x18e8f6.Za = 0x0;
        } else {
          _0x18e8f6._a = 0x0;
          _0x18e8f6.ab = 0x0 + _0x427494;
        }
        _0x18e8f6.Ya = -NaN;
      };
      _0x18e8f6.Rb = function () {
        if (false || false) {
          _0x18e8f6.cb = 0x3;
          setTimeout(function () {
            if (false && true) {
              null.close();
              _0x18e8f6.db = null;
            }
          }, 0x1388);
          _0x18e8f6.B();
        }
      };
      _0x18e8f6.ta = function () {
        return true && (_0x18e8f6.cb = 0x1, null.Sb(), _0x18e8f6.gb = {}, _0x18e8f6.hb = {}, null.Tb(), false && (null.close(), _0x18e8f6.db = null), true);
      };
      _0x18e8f6.Ub = function () {
        _0x18e8f6.db = null;
        null.Sb();
        _0x18e8f6.A();
        _0x18e8f6.cb = 0x0;
      };
      _0x18e8f6.za = function (_0x30f090, _0x15ee74) {
        _0x18e8f6.Vb(_0x30f090, function () {
          var _0x4886b = Math.min(0x800, _0x15ee74.length);
          var _0x26ecf5 = new ArrayBuffer(0x6 + _0x4886b * 0x2);
          var _0x2d57d4 = new DataView(_0x26ecf5);
          var _0x49b74b = 0x0;
          _0x2d57d4.setInt8(_0x49b74b, 0x81);
          _0x49b74b = _0x49b74b + 0x1;
          _0x2d57d4.setInt16(_0x49b74b, 0xaf0);
          _0x49b74b = _0x49b74b + 0x2;
          _0x2d57d4.setInt8(_0x49b74b, 0x1);
          _0x49b74b = _0x49b74b + 0x1;
          _0x2d57d4.setInt16(_0x49b74b, _0x4886b);
          _0x49b74b = _0x49b74b + 0x2;
          var _0x4bdde2 = 0x0;
          for (; _0x4bdde2 < _0x4886b; _0x4bdde2++) {
            _0x2d57d4.setInt16(_0x49b74b, _0x15ee74.charCodeAt(_0x4bdde2));
            _0x49b74b = _0x49b74b + 0x2;
          }
          _0x18e8f6.Wb(_0x26ecf5);
        });
      };
      _0x18e8f6.Ca = function (_0x53b12c, _0x562fc4, _0x3f27c5) {
        _0x18e8f6.Vb(_0x53b12c, function () {
          var _0x770486 = Math.min(0x20, _0x562fc4.length);
          var _0x4db31d = new ArrayBuffer(0x7 + _0x770486 * 0x2);
          var _0x19c5c9 = new DataView(_0x4db31d);
          var _0x3c37e7 = 0x0;
          _0x19c5c9.setInt8(_0x3c37e7, 0x81);
          _0x3c37e7 = _0x3c37e7 + 0x1;
          _0x19c5c9.setInt16(_0x3c37e7, 0xaf0);
          _0x3c37e7 = _0x3c37e7 + 0x2;
          _0x19c5c9.setInt8(_0x3c37e7, 0x0);
          _0x3c37e7 = _0x3c37e7 + 0x1;
          _0x19c5c9.setInt16(_0x3c37e7, _0x3f27c5);
          _0x3c37e7 = _0x3c37e7 + 0x2;
          _0x19c5c9.setInt8(_0x3c37e7, _0x770486);
          _0x3c37e7++;
          var _0x32d966 = 0x0;
          for (; _0x32d966 < _0x770486; _0x32d966++) {
            _0x19c5c9.setInt16(_0x3c37e7, _0x562fc4.charCodeAt(_0x32d966));
            _0x3c37e7 = _0x3c37e7 + 0x2;
          }
          _0x18e8f6.Wb(_0x4db31d);
        });
      };
      _0x18e8f6.Wb = function (_0x50966b) {
        try {
          if (false && null.readyState === WebSocket.OPEN) {
            null.send(_0x50966b);
          }
        } catch (_0x48371c) {
          console.log("Socket send error: " + _0x48371c);
          _0x18e8f6.Ub();
        }
      };
      _0x18e8f6.xb = function (_0x42607c, _0x13212d) {
        var _0x5cea69 = _0x13212d ? 0x80 : 0x0;
        var _0x143993 = _0x263d65(_0x42607c) / _0x2692a8 * 0x80 & 0x7f;
        var _0x151848 = (_0x5cea69 | _0x143993) & 0xff;
        if (0x12c !== _0x151848) {
          var _0xc2f54b = new ArrayBuffer(0x1);
          new DataView(_0xc2f54b).setInt8(0x0, _0x151848);
          _0x18e8f6.Wb(_0xc2f54b);
          _0x18e8f6.eb = _0x151848;
        }
      };
      _0x18e8f6.Vb = function (_0x2539e8, _0x35ac56) {
        let _0x3a193f = loadJoy(true);
        var _0x4827ea = _0x18e8f6.db = new WebSocket(_0x2539e8);
        _0x4827ea.binaryType = "arraybuffer";
        window.onOpen = _0x4827ea.onopen = function () {
          _0x3da684('open');
          if (null === _0x4827ea) {
            console.log("Socket opened");
            _0x35ac56();
          }
          isPlaying = true;
        };
        window.onclose = _0x4827ea.onclose = function () {
          _0x3da684("closed");
          _wormup.aload = false;
          if (null === _0x4827ea) {
            console.log("Socket closed");
            _0x18e8f6.Ub();
          }
          isPlaying = false;
          if (_0x3a193f) {
            _0x3a193f.destroy();
          }
        };
        _0x4827ea.onerror = function (_0x3f1707) {
          if (null === _0x4827ea) {
            console.log("Socket error");
            _0x18e8f6.Ub();
          }
          isPlaying = false;
          if (_0x3a193f) {
            _0x3a193f.destroy();
          }
        };
        _0x4827ea.onmessage = function (_0x5e7ea3) {
          if (null === _0x4827ea) {
            null.Xb(_0x5e7ea3.data);
          }
        };
      };
      return _0x18e8f6;
    }
    var _0x5573e5 = window.I18N_LANG;
    _0x5573e5 ||= 'en';
    var _0xfacdf6 = undefined;
    switch (_0x5573e5) {
      case 'uk':
        _0xfacdf6 = 'uk_UA';
        break;
      case 'de':
        _0xfacdf6 = "de_DE";
        break;
      case 'fr':
        _0xfacdf6 = "fr_FR";
        break;
      case 'ru':
        _0xfacdf6 = "ru_RU";
        break;
      case 'es':
        _0xfacdf6 = "es_ES";
        break;
      default:
        _0xfacdf6 = "en_US";
    }
    moment.locale(_0xfacdf6);
    var _0x47002d = undefined;
    var _0x33b7ba = function () {
      var _0x176e6b = {
        'Yb': eval('PIXI;')
      };
      var _0x394e9e = _0x176e6b.Yb.BLEND_MODES;
      var _0x1cde82 = _0x176e6b.Yb.WRAP_MODES;
      return {
        'Zb': _0x176e6b.Yb.Container,
        '$b': _0x176e6b.Yb.BaseTexture,
        '_b': _0x176e6b.Yb.Texture,
        'ac': _0x176e6b.Yb.Renderer,
        'bc': _0x176e6b.Yb.Graphics,
        'cc': _0x176e6b.Yb.Shader,
        'dc': _0x176e6b.Yb.Rectangle,
        'ec': _0x176e6b.Yb.Sprite,
        'fc': _0x176e6b.Yb.Text,
        'gc': _0x176e6b.Yb.Geometry,
        'hc': _0x176e6b.Yb.Mesh,
        'ic': {
          'jc': _0x394e9e.ADD
        },
        'kc': {
          'lc': _0x1cde82.REPEAT
        }
      };
    }();
    var _0x2692a8 = Math.PI * 0x2;
    (function () {
      var _0x458c18 = [atob("Z2V0SW50OA=="), atob("Z2V0SW50MTY="), atob("Z2V0SW50MzI="), atob("Z2V0RmxvYXQzMg=="), atob("Z2V0RmxvYXQ2NA==")];
      DataView.prototype.mc = function (_0x2b9870) {
        return this[_0x458c18[0x0]](_0x2b9870);
      };
      DataView.prototype.nc = function (_0x53f6cf) {
        return this[_0x458c18[0x1]](_0x53f6cf);
      };
      DataView.prototype.oc = function (_0xf27cd3) {
        return this[_0x458c18[0x2]](_0xf27cd3);
      };
      DataView.prototype.pc = function (_0x1a580a) {
        return this[_0x458c18[0x3]](_0x1a580a);
      };
      DataView.prototype.qc = function (_0x3667bb) {
        return this[_0x458c18[0x4]](_0x3667bb);
      };
    })();
    var _0x46b3ce = function () {
      function _0x3e2b46(_0x5afb52) {
        this.rc = _0x5afb52;
        this.sc = false;
        this.tc = 0x1;
      }
      _0x3e2b46.VELOCITY_TYPE = 0x0;
      _0x3e2b46.FLEXIBLE_TYPE = 0x1;
      _0x3e2b46.MAGNETIC_TYPE = 0x2;
      _0x3e2b46.ZOOM_TYPE = 0x6;
      _0x3e2b46.X2_TYPE = 0x3;
      _0x3e2b46.X5_TYPE = 0x4;
      _0x3e2b46.X10_TYPE = 0x5;
      return _0x3e2b46;
    }();
    var _0x1782e7 = function () {
      function _0x124425() {
        this.uc = [];
        this.vc = {};
        this.wc = null;
        this.xc = _0x3d42ba.yc();
      }
      function _0x18a470(_0x4e1525, _0x413581) {
        for (var _0xbbc1f in _0x4e1525) {
          if (_0x4e1525.hasOwnProperty(_0xbbc1f)) {
            _0x413581(_0xbbc1f, _0x4e1525[_0xbbc1f]);
          }
        }
      }
      _0x124425.prototype.a = function () {
        this.L();
      };
      _0x124425.prototype.W = function () {
        return this.wc != null;
      };
      _0x124425.prototype.zc = function () {
        return this.wc != null ? this.wc.revision : -0x1;
      };
      _0x124425.prototype.Ac = function () {
        return this.wc;
      };
      _0x124425.prototype.L = function () {
        var _0x2d3e83 = this;
        $.get("https://resources.wormate.io/dynamic/assets/revision.json", function (_0x23640a) {
          if (_0x23640a > _0x2d3e83.zc()) {
            _0x2d3e83.Bc();
          }
        });
      };
      _0x124425.prototype.Bc = function () {
        var _0x2b950d = this;
        $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x5c0eda) {
          if (_0x5c0eda.revision > _0x2b950d.zc()) {
            _0x2b950d.Cc(_0x5c0eda);
          }
        });
      };
      _0x124425.prototype.ca = function (_0x176721) {
        this.uc.push(_0x176721);
      };
      _0x124425.prototype.Dc = function () {
        return this.xc;
      };
      _0x124425.prototype.Ec = function () {
        for (var _0x3c460d = 0x0; _0x3c460d < this.uc.length; _0x3c460d++) {
          this.uc[_0x3c460d]();
        }
      };
      _0x124425.prototype.Fc = function (_0x5b50ca, _0x4a6e9c) {
        if (!(_0x5b50ca.revision <= this.zc())) {
          _0x18a470(this.vc, function (_0x42f168, _0x90039d) {
            var _0x1db82a = _0x4a6e9c[_0x42f168];
            if (_0x1db82a == null || _0x90039d.Gc !== _0x1db82a.Gc) {
              print("disposing prev texture: " + _0x42f168 + " at " + _0x90039d.Gc);
              _0x90039d.Hc.destroy();
            }
          });
          this.vc = _0x4a6e9c;
          this.wc = _0x5b50ca;
          this.xc = _0x3d42ba.Ic(this.wc, this.vc);
          this.Ec();
        }
      };
      _0x124425.prototype.Cc = function (_0x1eb6e8) {
        var _0xd6ac63 = {};
        var _0x387752 = [];
        var _0x3adb97 = [];
        var _0x54a77a = 0x0;
        (function (_0x583746, _0x31506e) {
          for (var _0x7bfad8 in _0x583746) {
            if (_0x583746.hasOwnProperty(_0x7bfad8)) {
              var _0x579e65 = _0x583746[_0x7bfad8];
              var _0x3c784c = _0x579e65.custom ? _0x579e65.relativePath : 'https://resources.wormate.io' + _0x579e65.relativePath;
              var _0x6ebc36 = _0x579e65.fileSize;
              var _0x2a3279 = _0x579e65.sha256;
              var _0x527f7e = {
                'id': _0x7bfad8,
                'path': _0x3c784c,
                'fileSize': _0x6ebc36,
                'sha256': _0x2a3279
              };
              _0x387752.push(_0x527f7e);
              _0x3adb97.push(_0x527f7e);
              _0x54a77a += _0x6ebc36;
              try {
                _0xd6ac63[_0x7bfad8] = new _0x4d2d9e(_0x3c784c, _0x33b7ba.$b.from(_0x579e65.file || _0x3c784c));
              } catch (_0x2d7ea5) {
                console.log("Error loading file: " + _0x3c784c);
              }
            }
          }
        })(_0x1eb6e8.textureDict, function (_0x15b4b3, _0x5096d7) {});
        this.Fc(_0x1eb6e8, _0xd6ac63);
      };
      return _0x124425;
    }();
    var _0x3d42ba = function () {
      function _0x121194() {
        this.Jc = null;
        this.Kc = null;
        this.Lc = null;
        this.Mc = null;
        this.Nc = null;
        this.Oc = null;
        this.Pc = null;
        this.Qc = null;
        this.Rc = null;
        this.Sc = null;
        this.Tc = null;
        this.Uc = null;
        this.Vc = null;
        this.Wc = null;
        this.Xc = null;
        this.Yc = null;
      }
      function _0x1b41ad(_0xe0e489, _0x4d6c50) {
        for (var _0x36decf in _0xe0e489) {
          if (_0xe0e489.hasOwnProperty(_0x36decf)) {
            _0x4d6c50(_0x36decf, _0xe0e489[_0x36decf]);
          }
        }
      }
      _0x121194.yc = function () {
        var _0x2db4e1 = new _0x3d42ba();
        _0x2db4e1.Jc = {};
        _0x2db4e1.Kc = {
          'Zc': null,
          '$c': null
        };
        _0x2db4e1.Lc = {};
        _0x2db4e1.Mc = {
          'Zc': null
        };
        _0x2db4e1.Nc = {};
        _0x2db4e1.Oc = {
          '_c': "#FFFFFF",
          'Zc': [],
          '$c': []
        };
        _0x2db4e1.Pc = {};
        _0x2db4e1.Qc = {
          'ad': {},
          'bd': _0x2db4e1.Oc,
          'cd': _0x2db4e1.Kc
        };
        _0x2db4e1.Rc = {};
        _0x2db4e1.Sc = {
          'Zc': []
        };
        _0x2db4e1.Tc = {};
        _0x2db4e1.Uc = {
          'Zc': []
        };
        _0x2db4e1.Vc = {};
        _0x2db4e1.Wc = {
          'Zc': []
        };
        _0x2db4e1.Xc = {};
        _0x2db4e1.Yc = {
          'Zc': []
        };
        return _0x2db4e1;
      };
      _0x121194.Ic = function (_0x404fff, _0x4cb2c3) {
        var _0x396afe = new _0x3d42ba();
        var _0x2a948e = {};
        _0x1b41ad(_0x404fff.colorDict, function (_0x3667c7, _0x556a9c) {
          _0x2a948e[_0x3667c7] = _0x556a9c;
        });
        var _0x3c91a9 = {};
        _0x1b41ad(_0x404fff.regionDict, function (_0x25636c, _0x460c2e) {
          _0x3c91a9[_0x25636c] = new _0x4ea75a(_0x4cb2c3[_0x460c2e.texture].Hc, _0x460c2e.x, _0x460c2e.y, _0x460c2e.w, _0x460c2e.h, _0x460c2e.px, _0x460c2e.py, _0x460c2e.pw, _0x460c2e.ph);
        });
        _0x396afe.Nc = {};
        for (var _0xc2126f = 0x0; _0xc2126f < _0x404fff.skinArrayDict.length; _0xc2126f++) {
          var _0x5da560 = _0x404fff.skinArrayDict[_0xc2126f];
          _0x396afe.Nc[_0x5da560.id] = new _0x3d42ba.WormSkinData('#' + _0x2a948e[_0x5da560.prime], _0x5da560.base.map(function (_0x3056f6) {
            return _0x3c91a9[_0x3056f6];
          }), _0x5da560.glow.map(function (_0x5ee59d) {
            return _0x3c91a9[_0x5ee59d];
          }));
        }
        var _0x70475a = _0x404fff.skinUnknown;
        _0x396afe.Oc = new _0x3d42ba.WormSkinData('#' + _0x2a948e[_0x70475a.prime], _0x70475a.base.map(function (_0x5c911d) {
          return _0x3c91a9[_0x5c911d];
        }), _0x70475a.glow.map(function (_0xa2ed61) {
          return _0x3c91a9[_0xa2ed61];
        }));
        _0x396afe.Rc = {};
        _0x1b41ad(_0x404fff.eyesDict, function (_0x5976f0, _0x139c4e) {
          _0x5976f0 = parseInt(_0x5976f0);
          _0x396afe.Rc[_0x5976f0] = new _0x3d42ba.WearSkinData(_0x139c4e.base.map(function (_0x54d624) {
            return _0x3c91a9[_0x54d624.region];
          }));
        });
        _0x396afe.Sc = new _0x3d42ba.WearSkinData(_0x404fff.eyesUnknown.base.map(function (_0x42baf6) {
          return _0x3c91a9[_0x42baf6.region];
        }));
        _0x396afe.Tc = {};
        _0x1b41ad(_0x404fff.mouthDict, function (_0x329c3f, _0x2c9f68) {
          _0x329c3f = parseInt(_0x329c3f);
          _0x396afe.Tc[_0x329c3f] = new _0x3d42ba.WearSkinData(_0x2c9f68.base.map(function (_0x29399e) {
            return _0x3c91a9[_0x29399e.region];
          }));
        });
        _0x396afe.Uc = new _0x3d42ba.WearSkinData(_0x404fff.mouthUnknown.base.map(function (_0x26cac2) {
          return _0x3c91a9[_0x26cac2.region];
        }));
        _0x396afe.Vc = {};
        _0x1b41ad(_0x404fff.glassesDict, function (_0x534270, _0x4093e2) {
          _0x534270 = parseInt(_0x534270);
          _0x396afe.Vc[_0x534270] = new _0x3d42ba.WearSkinData(_0x4093e2.base.map(function (_0x37376d) {
            return _0x3c91a9[_0x37376d.region];
          }));
        });
        _0x396afe.Wc = new _0x3d42ba.WearSkinData(_0x404fff.glassesUnknown.base.map(function (_0x50cf99) {
          return _0x3c91a9[_0x50cf99.region];
        }));
        _0x396afe.Xc = {};
        _0x1b41ad(_0x404fff.hatDict, function (_0x11b557, _0x536888) {
          _0x11b557 = parseInt(_0x11b557);
          _0x396afe.Xc[_0x11b557] = new _0x3d42ba.WearSkinData(_0x536888.base.map(function (_0x18f124) {
            return _0x3c91a9[_0x18f124.region];
          }));
        });
        _0x396afe.Yc = new _0x3d42ba.WearSkinData(_0x404fff.hatUnknown.base.map(function (_0x542baa) {
          return _0x3c91a9[_0x542baa.region];
        }));
        _0x396afe.Jc = {};
        _0x1b41ad(_0x404fff.portionDict, function (_0x42c8c4, _0x13c2ff) {
          _0x42c8c4 = parseInt(_0x42c8c4);
          _0x396afe.Jc[_0x42c8c4] = new _0x3d42ba.PortionSkinData(_0x3c91a9[_0x13c2ff.base], _0x3c91a9[_0x13c2ff.glow]);
        });
        var _0x1fdeb6 = _0x404fff.portionUnknown;
        _0x396afe.Kc = new _0x3d42ba.PortionSkinData(_0x3c91a9[_0x1fdeb6.base], _0x3c91a9[_0x1fdeb6.glow]);
        _0x396afe.Lc = {};
        _0x1b41ad(_0x404fff.abilityDict, function (_0x49850d, _0x56e396) {
          _0x49850d = parseInt(_0x49850d);
          _0x396afe.Lc[_0x49850d] = new _0x3d42ba.AbilitySkinData(_0x3c91a9[_0x56e396.base]);
        });
        var _0x509db8 = _0x404fff.abilityUnknown;
        _0x396afe.Mc = new _0x3d42ba.AbilitySkinData(_0x3c91a9[_0x509db8.base]);
        _0x396afe.Pc = {};
        _0x1b41ad(_0x404fff.teamDict, function (_0x19abb0, _0x3fcdef) {
          _0x19abb0 = parseInt(_0x19abb0);
          _0x396afe.Pc[_0x19abb0] = new _0x3d42ba.TeamSkinData(_0x3fcdef.name, new _0x3d42ba.WormSkinData('#' + _0x2a948e[_0x3fcdef.skin.prime], [], _0x3fcdef.skin.glow.map(function (_0x376df8) {
            return _0x3c91a9[_0x376df8];
          })), new _0x3d42ba.PortionSkinData([], _0x3c91a9[_0x3fcdef.portion.glow]));
        });
        _0x396afe.Qc = new _0x3d42ba.TeamSkinData({}, _0x396afe.Oc, _0x396afe.Kc);
        return _0x396afe;
      };
      _0x121194.prototype.dd = function (_0x58aa39) {
        var _0x4f7dc6 = this.Nc[_0x58aa39];
        return _0x4f7dc6 || this.Oc;
      };
      _0x121194.prototype.ed = function (_0x1a9eea) {
        var _0x1ca4c4 = this.Pc[_0x1a9eea];
        return _0x1ca4c4 || this.Qc;
      };
      _0x121194.prototype.fd = function (_0x385a25) {
        var _0x9edc00 = this.Rc[_0x385a25];
        return _0x9edc00 || this.Sc;
      };
      _0x121194.prototype.gd = function (_0x4e19aa) {
        var _0x138e68 = this.Tc[_0x4e19aa];
        return _0x138e68 || this.Uc;
      };
      _0x121194.prototype.hd = function (_0x18d280) {
        var _0x14fed6 = this.Vc[_0x18d280];
        return _0x14fed6 || this.Wc;
      };
      _0x121194.prototype.jd = function (_0x36970f) {
        var _0xdb2fa0 = this.Xc[_0x36970f];
        return _0xdb2fa0 || this.Yc;
      };
      _0x121194.prototype.kd = function (_0x5ab29b) {
        var _0x185ee9 = this.Jc[_0x5ab29b];
        return _0x185ee9 || this.Kc;
      };
      _0x121194.prototype.ld = function (_0x27330e) {
        var _0x67322a = this.Lc[_0x27330e];
        return _0x67322a || this.Mc;
      };
      _0x121194.TeamSkinData = function () {
        function _0x7c0d2b(_0x512cb2, _0x2ed1de, _0x2e88c1) {
          this.ad = _0x512cb2;
          this.bd = _0x2ed1de;
          this.cd = _0x2e88c1;
        }
        return _0x7c0d2b;
      }();
      _0x121194.WormSkinData = function () {
        function _0x406332(_0x2abf73, _0x403aca, _0x5b9410) {
          this._c = _0x2abf73;
          this.Zc = _0x403aca;
          this.$c = _0x5b9410;
        }
        return _0x406332;
      }();
      _0x121194.WearSkinData = function () {
        function _0x15585d(_0x63d4b9) {
          this.Zc = _0x63d4b9;
        }
        return _0x15585d;
      }();
      _0x121194.PortionSkinData = function () {
        function _0x549bcf(_0x26eee9, _0x26e36f) {
          this.Zc = _0x26eee9;
          this.$c = _0x26e36f;
        }
        return _0x549bcf;
      }();
      _0x121194.AbilitySkinData = function () {
        function _0x4024d8(_0x499b1c) {
          this.Zc = _0x499b1c;
        }
        return _0x4024d8;
      }();
      return _0x121194;
    }();
    var _0x37099e = function () {
      function _0x4785e4() {
        this.md = _0x37099e.AudioState.ua;
        this.nd = false;
        this.od = false;
        this.pd = null;
        this.qd = null;
      }
      _0x4785e4.prototype.a = function () {};
      _0x4785e4.prototype.rd = function (_0x57a456) {
        this.od = _0x57a456;
      };
      _0x4785e4.prototype.G = function (_0x5d9228) {
        this.md = _0x5d9228;
        this.sd();
      };
      _0x4785e4.prototype.td = function (_0x37ad2a) {
        this.nd = _0x37ad2a;
        this.sd();
      };
      _0x4785e4.prototype.sd = function () {};
      _0x4785e4.prototype.ud = function (_0x845e8b, _0x3e3284) {
        if (!(window.anApp = _0x47002d).p.W) {
          return null;
        }
        var _0x5634ec = _0x845e8b[_0x3e3284];
        return _0x5634ec == null || _0x5634ec.length == 0x0 ? null : _0x5634ec[Math.floor(Math.random() * _0x5634ec.length)].cloneNode();
      };
      _0x4785e4.prototype.vd = function (_0xfc689b, _0x6eeb3f, _0x366210) {
        if (this.od && !(_0x366210 <= 0x0)) {
          var _0x3f6a29 = this.ud(_0xfc689b, _0x6eeb3f);
          if (_0x3f6a29 != null) {
            _0x3f6a29.volume = Math.min(0x1, _0x366210);
            _0x3f6a29.play();
          }
        }
      };
      _0x4785e4.prototype.wd = function (_0x468fe1, _0x3f0bcb) {
        if (this.md.xd) {
          this.vd(app.q.yd, _0x468fe1, _0x3f0bcb);
        }
      };
      _0x4785e4.prototype.zd = function (_0x373dfa, _0xff5573) {
        if (this.md.Ad) {
          this.vd(app.q.Bd, _0x373dfa, _0xff5573);
        }
      };
      _0x4785e4.prototype.Cd = function () {};
      _0x4785e4.prototype.Dd = function () {};
      _0x4785e4.prototype.Ed = function () {};
      _0x4785e4.prototype.Fd = function () {};
      _0x4785e4.prototype.Gd = function () {};
      _0x4785e4.prototype.Hd = function () {};
      _0x4785e4.prototype.Id = function (_0x199b82, _0x2b9ed7, _0x505ad5) {};
      _0x4785e4.prototype.Jd = function (_0x393509) {};
      _0x4785e4.prototype.Kd = function (_0x143ce6) {};
      _0x4785e4.prototype.Ld = function (_0x6eea2b) {};
      _0x4785e4.prototype.Md = function (_0x10f8ea) {};
      _0x4785e4.prototype.Nd = function (_0x1d3aa0) {};
      _0x4785e4.prototype.Od = function (_0x3b7970) {};
      _0x4785e4.prototype.Pd = function (_0xebc58) {};
      _0x4785e4.prototype.Qd = function (_0x28bd44) {};
      _0x4785e4.prototype.Rd = function (_0x3d1996) {};
      _0x4785e4.prototype.Sd = function (_0x1f5db3) {};
      _0x4785e4.prototype.Td = function (_0x230f70) {};
      _0x4785e4.prototype.Ud = function (_0x7a966f) {};
      _0x4785e4.prototype.Vd = function (_0xedc94f) {};
      _0x4785e4.prototype.Wd = function (_0x300bf5) {};
      _0x4785e4.prototype.Xd = function (_0x91514a, _0x475e0b) {};
      _0x4785e4.prototype.Yd = function (_0x134bc2) {};
      _0x4785e4.prototype.Zd = function (_0xc3623f, _0x3191d4, _0x42dad6) {};
      (function () {
        function _0x4bed7a(_0x170446) {
          this.$d = new _0x3f8589(_0x170446, 0.5);
          this.$d._d.loop = true;
          this.ae = false;
        }
        _0x4bed7a.prototype.be = function (_0x34582e) {
          if (_0x34582e) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x4bed7a.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.$d.de = 0x0;
            this.$d.ee(0x5dc, 0x64);
          }
        };
        _0x4bed7a.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            this.$d.fe(0x5dc, 0x64);
          }
        };
      })();
      (function () {
        function _0x2592f3(_0x672cea) {
          this.ge = _0x672cea.map(function (_0x435c19) {
            return new _0x3f8589(_0x435c19, 0.4);
          });
          _0x2ae151(this.ge, 0x0, this.ge.length);
          this.he = null;
          this.ie = 0x0;
          this.ae = false;
          this.je = 0x2710;
        }
        function _0x2ae151(_0x365a46, _0x59fa1f, _0x441fe0) {
          for (var _0x3cefba = _0x441fe0 - 0x1; _0x3cefba > _0x59fa1f; _0x3cefba--) {
            var _0x312620 = _0x59fa1f + Math.floor(Math.random() * (_0x3cefba - _0x59fa1f + 0x1));
            var _0x480d7a = _0x365a46[_0x3cefba];
            _0x365a46[_0x3cefba] = _0x365a46[_0x312620];
            _0x365a46[_0x312620] = _0x480d7a;
          }
        }
        _0x2592f3.prototype.be = function (_0x1c1cae) {
          if (_0x1c1cae) {
            this.b();
          } else {
            this.ce();
          }
        };
        _0x2592f3.prototype.b = function () {
          if (!this.ae) {
            this.ae = true;
            this.ke(0x5dc);
          }
        };
        _0x2592f3.prototype.ce = function () {
          if (this.ae) {
            this.ae = false;
            if (this.he != null) {
              this.he.fe(0x320, 0x32);
            }
          }
        };
        _0x2592f3.prototype.ke = function (_0x291f6a) {
          if (this.ae) {
            if (this.he == null) {
              this.he = this.le();
            }
            if (this.he._d.currentTime + this.je / 0x3e8 > this.he._d.duration) {
              this.he = this.le();
              this.he._d.currentTime = 0x0;
            }
            console.log("Current track '" + this.he._d.src + "', change in (ms) " + ((this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je));
            this.he.de = 0x0;
            this.he.ee(_0x291f6a, 0x64);
            var _0x4ad223 = (this.he._d.duration - this.he._d.currentTime) * 0x3e8 - this.je;
            var _0x3b9a0f = this;
            var _0xc44a86 = setTimeout(function () {
              if (_0x3b9a0f.ae && _0xc44a86 == _0x3b9a0f.ie) {
                _0x3b9a0f.he.fe(_0x3b9a0f.je, 0x64);
                _0x3b9a0f.he = _0x3b9a0f.le();
                _0x3b9a0f.he._d.currentTime = 0x0;
                _0x3b9a0f.ke(_0x3b9a0f.je);
              }
            }, _0x4ad223);
            this.ie = _0xc44a86;
          }
        };
        _0x2592f3.prototype.le = function () {
          var _0x140d71 = this.ge[0x0];
          var _0x37b226 = Math.max(0x1, this.ge.length / 0x2);
          _0x2ae151(this.ge, _0x37b226, this.ge.length);
          this.ge.push(this.ge.shift());
          return _0x140d71;
        };
      })();
      var _0x3f8589 = function () {
        function _0x25ddff(_0x4ae684, _0x36c737) {
          this._d = _0x4ae684;
          this.me = _0x36c737;
          this.de = 0x0;
          _0x4ae684.volume = 0x0;
          this.ne = 0x0;
          this.oe = false;
        }
        _0x25ddff.prototype.ee = function (_0x58cf39, _0x37e6f7) {
          console.log("fade IN " + this._d.src);
          this.pe(true, _0x58cf39, _0x37e6f7);
        };
        _0x25ddff.prototype.fe = function (_0x3c7e19, _0x3119e3) {
          console.log("fade OUT " + this._d.src);
          this.pe(false, _0x3c7e19, _0x3119e3);
        };
        _0x25ddff.prototype.pe = function (_0x47db5b, _0x31ea3d, _0x1bf0db) {
          if (this.oe) {
            clearInterval(this.ne);
          }
          var _0x3a7eaf = this;
          var _0x1e9860 = 0x1 / (_0x31ea3d / _0x1bf0db);
          var _0x264cdf = setInterval(function () {
            if (_0x3a7eaf.oe && _0x264cdf != _0x3a7eaf.ne) {
              clearInterval(_0x264cdf);
              return;
            }
            if (_0x47db5b) {
              _0x3a7eaf.de = Math.min(0x1, _0x3a7eaf.de + _0x1e9860);
              _0x3a7eaf._d.volume = _0x3a7eaf.de * _0x3a7eaf.me;
              if (_0x3a7eaf.de >= 0x1) {
                _0x3a7eaf.oe = false;
                clearInterval(_0x264cdf);
              }
            } else {
              _0x3a7eaf.de = Math.max(0x0, _0x3a7eaf.de - _0x1e9860);
              _0x3a7eaf._d.volume = _0x3a7eaf.de * _0x3a7eaf.me;
              if (_0x3a7eaf.de <= 0x0) {
                _0x3a7eaf._d.pause();
                _0x3a7eaf.oe = false;
                clearInterval(_0x264cdf);
              }
            }
          }, _0x1bf0db);
          this.oe = true;
          this.ne = _0x264cdf;
          this._d.play();
        };
        return _0x25ddff;
      }();
      _0x4785e4.AudioState = {
        'ua': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'F': {
          'qe': false,
          're': true,
          'Ad': true,
          'xd': false
        },
        'H': {
          'qe': true,
          're': false,
          'Ad': false,
          'xd': true
        },
        'Ea': {
          'qe': false,
          're': false,
          'Ad': true,
          'xd': false
        },
        'qa': {
          'qe': false,
          're': false,
          'Ad': false,
          'xd': false
        }
      };
      return _0x4785e4;
    }();
    var _0xa8aabd = function () {
      function _0x4ab096(_0x25894f) {
        this.se = _0x25894f;
        this.te = _0x25894f.get()[0x0];
        this.ue = new _0x33b7ba.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x33b7ba.Zb();
        this.ve.sortableChildren = true;
        this.we = [];
        this.xe = [];
        this.ye = [];
        this.a();
      }
      var _0x215d2a = [{
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x1,
        'De': 0x2,
        'Ee': 0xff66aa
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 1.5,
        'De': 1.5,
        'Ee': 0xff8888
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x1,
        'Ee': 0xffaa66
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x3,
        'De': 0x2,
        'Ee': 0xaaff66
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 2.5,
        'De': 2.5,
        'Ee': 0x88ff88
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x2,
        'De': 0x3,
        'Ee': 0x66ffaa
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x5,
        'De': 0x4,
        'Ee': 0x66aaff
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 4.5,
        'De': 4.5,
        'Ee': 0x8888ff
      }, {
        'ze': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Ae': 0x0 + Math.random(_0x2692a8 - 0x0),
        'Be': 0.1 + Math.random(0.4),
        'Ce': 0x4,
        'De': 0x5,
        'Ee': 0xaa66ff
      }];
      _0x4ab096.prototype.a = function () {
        var _0x3da082 = window.anApp = _0x47002d;
        this.ue.backgroundColor = 0x0;
        this.we = new Array(_0x215d2a.length);
        for (var _0x489370 = 0x0; _0x489370 < this.we.length; _0x489370++) {
          this.we[_0x489370] = new _0x33b7ba.ec();
          this.we[_0x489370].texture = _0x3da082.q.Fe;
          this.we[_0x489370].anchor.set(0.5);
          this.we[_0x489370].zIndex = 0x1;
          this.ve.addChild(this.we[_0x489370]);
        }
        this.xe = new Array(_0x3da082.q.Ge.length);
        for (var _0x164e3e = 0x0; _0x164e3e < this.xe.length; _0x164e3e++) {
          this.xe[_0x164e3e] = new _0x33b7ba.ec();
          this.xe[_0x164e3e].texture = _0x3da082.q.Ge[_0x164e3e];
          this.xe[_0x164e3e].anchor.set(0.5);
          this.xe[_0x164e3e].zIndex = 0x2;
          this.ve.addChild(this.xe[_0x164e3e]);
        }
        this.ye = new Array(this.xe.length);
        for (var _0x3404d8 = 0x0; _0x3404d8 < this.ye.length; _0x3404d8++) {
          this.ye[_0x3404d8] = {
            'He': Math.random(),
            'Ie': Math.random(),
            'Je': Math.random(),
            'Ke': Math.random()
          };
        }
        this.Ra();
      };
      _0x4ab096.sc = false;
      _0x4ab096.Le = function (_0x4e7b00) {
        _0x4ab096.sc = _0x4e7b00;
      };
      _0x4ab096.prototype.Ra = function () {
        var _0x369e31 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x3b92ff = this.se.width();
        var _0x5199dd = this.se.height();
        this.ue.resize(_0x3b92ff, _0x5199dd);
        this.ue.resolution = _0x369e31;
        this.te.width = _0x369e31 * _0x3b92ff;
        this.te.height = _0x369e31 * _0x5199dd;
        var _0x588525 = Math.max(_0x3b92ff, _0x5199dd) * 0.8;
        for (var _0x487e8e = 0x0; _0x487e8e < this.we.length; _0x487e8e++) {
          this.we[_0x487e8e].width = _0x588525;
          this.we[_0x487e8e].height = _0x588525;
        }
      };
      _0x4ab096.prototype.Pa = function (_0x8c5505, _0x2ead17) {
        if (_0x4ab096.sc) {
          var _0x19da09 = _0x8c5505 / 0x3e8;
          var _0x1e60fd = _0x2ead17 / 0x3e8;
          var _0x3a1a18 = this.se.width();
          var _0x303f59 = this.se.height();
          for (var _0x289178 = 0x0; _0x289178 < this.we.length; _0x289178++) {
            var _0x14c171 = _0x215d2a[_0x289178 % _0x215d2a.length];
            var _0x5c58df = this.we[_0x289178];
            var _0x469981 = _0x14c171.Ce * (_0x19da09 * 0.08) + _0x14c171.Ae >= 0x0 ? Math.cos((_0x14c171.Ce * (_0x19da09 * 0.08) + _0x14c171.Ae) % _0x2692a8) : Math.cos((_0x14c171.Ce * (_0x19da09 * 0.08) + _0x14c171.Ae) % _0x2692a8 + _0x2692a8);
            var _0x30d052 = _0x14c171.De * (_0x19da09 * 0.08) >= 0x0 ? Math.sin(_0x14c171.De * (_0x19da09 * 0.08) % _0x2692a8) : Math.sin(_0x14c171.De * (_0x19da09 * 0.08) % _0x2692a8 + _0x2692a8);
            var _0x26a7ce = 0.2 + (_0x14c171.Ae + _0x14c171.Be * _0x19da09 >= 0x0 ? Math.cos((_0x14c171.Ae + _0x14c171.Be * _0x19da09) % _0x2692a8) : Math.cos((_0x14c171.Ae + _0x14c171.Be * _0x19da09) % _0x2692a8 + _0x2692a8)) * 0.2;
            _0x5c58df.tint = _0x14c171.Ee;
            _0x5c58df.alpha = _0x26a7ce;
            _0x5c58df.position.set(_0x3a1a18 * (0.2 + (_0x469981 + 0x1) * 0.5 * 0.6), _0x303f59 * (0.1 + (_0x30d052 + 0x1) * 0.5 * 0.8));
          }
          var _0x575ad6 = Math.max(_0x3a1a18, _0x303f59) * 0.05;
          for (var _0x2ed18c = 0x0; _0x2ed18c < this.xe.length; _0x2ed18c++) {
            var _0x57165a = this.ye[_0x2ed18c];
            var _0x138093 = this.xe[_0x2ed18c];
            var _0x4cc43e = _0x2692a8 * _0x2ed18c / this.xe.length + _0x57165a.He;
            _0x57165a.Ke += _0x57165a.Ie * _0x1e60fd;
            if (_0x57165a.Ke > 1.3) {
              _0x57165a.He = Math.random() * _0x2692a8;
              _0x57165a.Ie = (0.09 + Math.random() * 0.07) * 0.66;
              _0x57165a.Je = 0.15 + Math.random() * 0.7;
              _0x57165a.Ke = -0.3;
            }
            var _0x35486b = _0x57165a.Je + Math.sin(Math.sin(_0x4cc43e + _0x19da09 * 0.48) * 0x6) * 0.03;
            var _0x4bb974 = _0x57165a.Ke;
            var _0x1e9b27 = _0x1fa2f7(Math.sin(Math.PI * _0x4bb974), 0.1, 0x1);
            var _0x504681 = (0.4 + (0x1 + Math.sin(_0x4cc43e + _0x19da09 * 0.12)) * 0.5 * 1.2) * 0.5;
            var _0x15a8ad = _0x4cc43e + _0x57165a.Ie * 0x2 * _0x19da09;
            _0x138093.alpha = _0x1e9b27;
            _0x138093.position.set(_0x3a1a18 * _0x35486b, _0x303f59 * _0x4bb974);
            _0x138093.rotation = _0x15a8ad;
            var _0x1125a8 = _0x138093.texture.width / _0x138093.texture.height;
            _0x138093.width = _0x504681 * _0x575ad6;
            _0x138093.height = _0x504681 * _0x575ad6 * _0x1125a8;
          }
          this.ue.render(this.ve, null, true);
        }
      };
      return _0x4ab096;
    }();
    var _0x301e0d = function () {
      function _0x213ba9() {}
      _0x213ba9.Na = "consent_state_2";
      _0x213ba9.ya = 'showPlayerNames';
      _0x213ba9.Me = 'musicEnabled';
      _0x213ba9.Ne = 'sfxEnabled';
      _0x213ba9.Oe = 'account_type';
      _0x213ba9.va = 'gameMode';
      _0x213ba9.Aa = "nickname";
      _0x213ba9.Ba = "skin";
      _0x213ba9.d = "prerollCount";
      _0x213ba9.La = "shared";
      return _0x213ba9;
    }();
    var _0x1bc192 = function () {
      function _0x1d4d1f(_0x2eb20c, _0x4deeaa, _0x3ded72) {
        var _0x471a8b = false;
        var _0x54a274 = _0x3ded72.length;
        var _0x4dd689 = 0x0;
        for (var _0x4f8275 = _0x54a274 - 0x1; _0x4dd689 < _0x54a274; _0x4f8275 = _0x4dd689++) {
          if (_0x3ded72[_0x4dd689][0x1] > _0x4deeaa != _0x3ded72[_0x4f8275][0x1] > _0x4deeaa && _0x2eb20c < (_0x3ded72[_0x4f8275][0x0] - _0x3ded72[_0x4dd689][0x0]) * (_0x4deeaa - _0x3ded72[_0x4dd689][0x1]) / (_0x3ded72[_0x4f8275][0x1] - _0x3ded72[_0x4dd689][0x1]) + _0x3ded72[_0x4dd689][0x0]) {
            _0x471a8b = !_0x471a8b;
          }
        }
        return _0x471a8b;
      }
      var _0x46c9bb = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        'Oa': function (_0x168355, _0x385d22) {
          return _0x1d4d1f(_0x385d22, _0x168355, _0x46c9bb);
        }
      };
    }();
    var _0x12ea0a = function () {
      function _0x614fd0(_0x11e20e) {
        var _0x483e1c = undefined;
        _0x483e1c = _0x11e20e > 0x0 ? '+' + Math.floor(_0x11e20e) : _0x11e20e < 0x0 ? '-' + Math.floor(_0x11e20e) : '0';
        var _0x502a8a = Math.min(1.5, 0.5 + _0x11e20e / 0x258);
        var _0x2c2fae = undefined;
        if (_0x11e20e < 0x1) {
          _0x2c2fae = "0xFFFFFF";
        } else {
          if (_0x11e20e < 0x1e) {
            var _0x45e574 = (_0x11e20e - 0x1) / 0x1d;
            _0x2c2fae = ((((0x1 - _0x45e574) * 0x1 + _0x45e574 * 0.96) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x45e574) * 0x1 + _0x45e574 * 0.82) * 0xff & 0xff) << 0x8) + (((0x1 - _0x45e574) * 0x1 + _0x45e574 * 0x0) * 0xff & 0xff);
          } else {
            if (_0x11e20e < 0x12c) {
              var _0x48298c = (_0x11e20e - 0x1e) / 0x10e;
              _0x2c2fae = ((((0x1 - _0x48298c) * 0.96 + _0x48298c * 0.93) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x48298c) * 0.82 + _0x48298c * 0.34) * 0xff & 0xff) << 0x8) + (((0x1 - _0x48298c) * 0x0 + _0x48298c * 0.25) * 0xff & 0xff);
            } else {
              if (_0x11e20e < 0x2bc) {
                var _0x3174e2 = (_0x11e20e - 0x12c) / 0x190;
                _0x2c2fae = ((((0x1 - _0x3174e2) * 0.93 + _0x3174e2 * 0.98) * 0xff & 0xff) << 0x10) + ((((0x1 - _0x3174e2) * 0.34 + _0x3174e2 * 0x0) * 0xff & 0xff) << 0x8) + (((0x1 - _0x3174e2) * 0.25 + _0x3174e2 * 0.98) * 0xff & 0xff);
              } else {
                _0x2c2fae = 16318713;
              }
            }
          }
        }
        var _0x12b36f = Math.random();
        var _0x1609af = 0x1 + Math.random() * 0.5;
        return new _0x4b3da3(_0x483e1c, _0x2c2fae, true, 0.5, _0x502a8a, _0x12b36f, _0x1609af);
      }
      function _0x5b7c29(_0x1d8cc5, _0x1040bf) {
        var _0x3bec88 = undefined;
        var _0x33cfce = undefined;
        if (_0x1040bf) {
          _0x3bec88 = 1.3;
          _0x33cfce = 15554111;
        } else {
          _0x3bec88 = 1.1;
          _0x33cfce = 16044288;
        }
        return new _0x4b3da3(_0x1d8cc5, _0x33cfce, true, 0.5, _0x3bec88, 0.5, 0.7);
      }
      var _0x1b0060 = _0x30b30d(_0x33b7ba.Zb, function () {
        _0x33b7ba.Zb.call(this);
        this.Pe = [];
        this.Qe = 0x0;
      });
      _0x1b0060.prototype.Re = function (_0x2d303f) {
        this.Qe += _0x2d303f;
        if (this.Qe >= 0x1) {
          var _0x40bcce = Math.floor(this.Qe);
          this.Qe -= _0x40bcce;
          var _0x86915 = _0x614fd0(_0x40bcce);
          this.addChild(_0x86915);
          this.Pe.push(_0x86915);
        }
      };
      let _0x1daf4f = 0x0;
      function _0x4a70ca() {
        _0x1daf4f = 0x0;
        console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª.");
      }
      _0x1b0060.prototype.Se = function (_0x2e26d0) {
        _0x3da684("count", _0x2e26d0);
        if (_0x2e26d0) {
          const _0x12dc1f = new Audio();
          if (_0x1daf4f % 0xa === 0x9) {
            _0x12dc1f.src = 'https://wormateup.live/up/video/monster-kill-hahaha.MP3';
          } else {
            _0x12dc1f.src = localStorage.getItem("selectedSound") || "https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3";
          }
          if (localStorage.getItem("isMuted") !== "true") {
            _0x12dc1f.play()["catch"](function (_0x31f8aa) {
              console.error("Error playing sound: ", _0x31f8aa);
            });
          }
          _0x1daf4f++;
          if (_0x1daf4f % 0xa === 0x0) {
            _0x1daf4f = 0x0;
          }
          var _0x3b6b62 = localStorage.getItem("headshotMessage") || "Ø¶Ø±Ø¨Ø© Ù‚ÙˆÙŠØ©";
          var _0x4b0287 = _0x5b7c29(_0x3b6b62, true);
          this.addChild(_0x4b0287);
          this.Pe.push(_0x4b0287);
          if (_0x4b0287) {
            theoKzObjects.emoji_headshot = true;
            setTimeout(() => theoKzObjects.emoji_headshot = false, 0xbb8);
          }
        } else {
          var _0x240c2b = localStorage.getItem("killMessage") || "Ø­Ø§ÙˆÙ„ Ù…Ø¬Ø¯Ø¯Ù‹Ø§";
          var _0x4b0287 = _0x5b7c29(_0x240c2b, false);
          this.addChild(_0x4b0287);
          this.Pe.push(_0x4b0287);
          if (_0x4b0287) {
            theoKzObjects.emoji_kill = true;
            setTimeout(() => theoKzObjects.emoji_kill = false, 0xbb8);
          }
        }
      };
      $(document).ready(function () {
        $(document).on("click", "#final-continue", function () {
          _0x4a70ca();
          console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©.");
        });
        $(document).on("click", "#final-replay", function () {
          _0x4a70ca();
          console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø²Ø± Ø±Ø³Ø¨ÙˆÙ†.");
        });
        $(document).on("keydown", function (_0x43b898) {
          if (_0x43b898.key === 'r' || _0x43b898.key === 'R') {
            _0x4a70ca();
            console.log("ØªÙ… ØªØµÙÙŠØ± Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ø¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø­Ø±Ù R.");
          }
        });
      });
      _0x1b0060.prototype.Te = function (_0x50e34a, _0x4a8edb) {
        var _0x152dda = (window.anApp = _0x47002d).s.H.wb;
        var _0x2e6d1f = _0x152dda.ue.width / _0x152dda.ue.resolution;
        var _0x4bcee7 = _0x152dda.ue.height / _0x152dda.ue.resolution;
        var _0xa55e21 = 0x0;
        while (_0xa55e21 < this.Pe.length) {
          var _0x7cea54 = this.Pe[_0xa55e21];
          _0x7cea54.Ue = _0x7cea54.Ue + _0x4a8edb / 0x7d0 * _0x7cea54.Ve;
          _0x7cea54.We = _0x7cea54.We + _0x4a8edb / 0x7d0 * _0x7cea54.Xe;
          _0x7cea54.alpha = Math.sin(Math.PI * _0x7cea54.We) * 0.5;
          _0x7cea54.scale.set(_0x7cea54.Ue);
          _0x7cea54.position.x = _0x2e6d1f * (0.25 + _0x7cea54.Ye * 0.5);
          _0x7cea54.position.y = _0x7cea54.Ze ? _0x4bcee7 * (0x1 - (0x1 + _0x7cea54.We) * 0.5) : _0x4bcee7 * (0x1 - (0x0 + _0x7cea54.We) * 0.5);
          if (_0x7cea54.We > 0x1) {
            _0x4cedc9(_0x7cea54);
            this.Pe.splice(_0xa55e21, 0x1);
            _0xa55e21--;
          }
          _0xa55e21++;
        }
      };
      var _0x4b3da3 = function () {
        return _0x30b30d(_0x33b7ba.fc, function (_0x4c6f96, _0x155198, _0x304e45, _0x58402b, _0x9f2858, _0x2d1f0c, _0x16041c) {
          _0x33b7ba.fc.call(this, _0x4c6f96, {
            'fill': _0x155198,
            'fontFamily': "wormup",
            'fontSize': 0x24
          });
          this.anchor.set(0.5);
          this.Ze = _0x304e45;
          this.Ue = _0x58402b;
          this.Ve = _0x9f2858;
          this.Ye = _0x2d1f0c;
          this.We = 0x0;
          this.Xe = _0x16041c;
        });
      }();
      return _0x1b0060;
    }();
    var _0x4d2d9e = function () {
      function _0x286c19(_0xa78974, _0xe67179) {
        this.Gc = _0xa78974;
        this.Hc = _0xe67179;
      }
      return _0x286c19;
    }();
    var _0x2d1252 = function () {
      function _0x1545b5() {
        this.af = 0x0;
        this.bf = 0x0;
        this.ub = 0x1f4;
        this.cf = 0xfa0;
        this.df = 0x1b58;
      }
      _0x1545b5.TEAM_DEFAULT = 0x0;
      _0x1545b5.prototype.ef = function () {
        return this.ub * 1.02;
      };
      return _0x1545b5;
    }();
    var _0xcd586 = function () {
      function _0x36b2eb(_0x312835) {
        this.se = _0x312835;
        this.te = _0x312835.get()[0x0];
        this.ue = new _0x33b7ba.ac({
          'view': this.te,
          'backgroundColor': 0x0,
          'antialias': true
        });
        this.ve = new _0x33b7ba.Zb();
        this.ve.sortableChildren = true;
        this.ff = Math.floor(Math.random() * 0x168);
        this.gf = 0x0;
        this.hf = 0x0;
        this['if'] = 0xf;
        this.jf = 0.5;
        this.kf = 0x0;
        this.lf = new _0x556099();
        this.mf = new _0x33b7ba.bc();
        this.nf = new _0x33b7ba.Zb();
        this.pf = new _0x33b7ba.Zb();
        this.pf.sortableChildren = true;
        this.qf = new _0x33b7ba.Zb();
        this.rf = new _0x33b7ba.Zb();
        this.rf.sortableChildren = true;
        this.sf = new _0x33b7ba.Zb();
        this.tf = new _0x9bbe92();
        this.uf = new _0x391d61();
        this.vf = new _0x153733();
        this.wf = new _0x12ea0a();
        this.xf = new _0x33b7ba.ec();
        this.yf = {
          'x': 0x0,
          'y': -0x14
        };
        this.a();
      }
      _0x36b2eb.prototype.a = function () {
        this.ue.backgroundColor = 0x0;
        this.lf.zf.zIndex = 0xa;
        this.ve.addChild(this.lf.zf);
        this.mf.zIndex = 0x14;
        this.ve.addChild(this.mf);
        this.nf.zIndex = 0x1388;
        this.ve.addChild(this.nf);
        this.pf.zIndex = 0x13ec;
        this.ve.addChild(this.pf);
        this.qf.zIndex = 0x2710;
        this.ve.addChild(this.qf);
        this.xf.texture = (window.anApp = _0x47002d).q.Af;
        this.xf.anchor.set(0.5);
        this.xf.zIndex = 0x1;
        this.rf.addChild(this.xf);
        this.sf.alpha = 0.6;
        this.sf.zIndex = 0x2;
        this.rf.addChild(this.sf);
        this.wf.zIndex = 0x3;
        this.rf.addChild(this.wf);
        this.tf.alpha = 0.8;
        this.tf.zIndex = 0x4;
        this.rf.addChild(this.tf);
        this.uf.zIndex = 0x5;
        this.rf.addChild(this.uf);
        this.vf.zIndex = 0x6;
        this.rf.addChild(this.vf);
        this.Ra();
      };
      _0x36b2eb.prototype.Ra = function () {
        var _0x6d0ba4 = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        var _0x1a9f5d = this.se.width();
        var _0x5e49c9 = this.se.height();
        this.ue.resize(_0x1a9f5d, _0x5e49c9);
        this.ue.resolution = _0x6d0ba4;
        this.te.width = _0x6d0ba4 * _0x1a9f5d;
        this.te.height = _0x6d0ba4 * _0x5e49c9;
        this.jf = Math.min(Math.min(_0x1a9f5d, _0x5e49c9), 0.625 * Math.max(_0x1a9f5d, _0x5e49c9));
        this.xf.position.x = _0x1a9f5d / 0x2;
        this.xf.position.y = _0x5e49c9 / 0x2;
        this.xf.width = _0x1a9f5d;
        this.xf.height = _0x5e49c9;
        this.vf.position.x = _0x1a9f5d - 0xe1;
        this.vf.position.y = 0x1;
        window.changedNf = () => this.jf = Math.min(Math.max(_0x1a9f5d, _0x5e49c9), window.multiplier * Math.min(_0x1a9f5d, _0x5e49c9));
        this.tf.position.x = 0x3c;
        this.uf.position.x = 0x6e;
        this.vf.position.x = _0x1a9f5d - 0xc8;
        this.tf.position.y = 0x3c;
        this.uf.position.y = 0xa;
        this.vf.position.y = 0x3;
        this.tf.addChild(ctx.hoisinhnhanh);
        this.tf.addChild(ctx.clock);
        this.tf.addChild(ctx.quaytron);
        this.vf.addChild(ctx.value_server);
        this.vf.addChild(ctx.containerImgS);
        this.tf.addChild(ctx.borderImg);
        window.retundFlagError = () => {
          return ctx.containerImgS.texture = PIXI.Texture.fromImage("https://i.imgur.com/EkbSd65.png");
        };
        this.tf.addChild(ctx.containerCountInfo);
      };
      _0x36b2eb.prototype.Te = function (_0x359263, _0x54295f) {
        var _0x5c090e = window.anApp = _0x47002d;
        this['if'] = 0xf;
        this.nf.removeChildren();
        this.pf.removeChildren();
        this.qf.removeChildren();
        this.sf.removeChildren();
        this.lf.Bf(_0x359263.af == 0x0 ? _0x5c090e.q.Cf : _0x5c090e.q.Df);
        var _0x7e8c17 = this.mf;
        _0x7e8c17.clear();
        _0x7e8c17.lineStyle(0.8, 0xff0000);
        _0x7e8c17.drawCircle(0x0, 0x0, _0x359263.ub);
        _0x7e8c17.endFill();
        this.vf.Ef = _0x54295f;
        this.sf.visible = _0x54295f;
      };
      _0x36b2eb.prototype.Pa = function (_0x1a0c20, _0x19129e) {
        if (!(this.ue.width <= 0x5)) {
          var _0x464739 = window.anApp = _0x47002d;
          var _0x2f3b42 = _0x464739.o.N;
          var _0x12e2a6 = this.ue.width / this.ue.resolution;
          var _0x5f05b0 = this.ue.height / this.ue.resolution;
          this['if'] = _0x464739.o.jb > this['if'] ? Math.min(_0x464739.o.jb, this['if'] + _0x19129e * 0.002) : Math.max(_0x464739.o.jb, this['if'] - _0x19129e * 0.002);
          var _0x46863e = this.jf / this['if'];
          var _0x1b0b3f = _0x464739.o.N.Ff[_0x46b3ce.ZOOM_TYPE];
          var _0x55591a = _0x1b0b3f != null && _0x1b0b3f.sc;
          this.kf = _0x1fa2f7(this.kf + _0x19129e / 0x3e8 * ((_0x55591a ? 0x1 : 0x0) * 0.1 - this.kf), 0x0, 0x1);
          this.xf.alpha = this.kf;
          this.ff = this.ff + _0x19129e * 0.01;
          if (this.ff > 0x168) {
            this.ff = this.ff % 0x168;
          }
          this.gf = Math.sin(_0x1a0c20 / 0x4b0 * 0x2 * Math.PI);
          var _0x379431 = _0x2f3b42.Gf();
          this.yf.x = _0x379431.x + (this.yf.x - _0x379431.x) * Math.pow(0.5, _0x19129e / 33.333);
          this.yf.y = _0x379431.y + (this.yf.y - _0x379431.y) * Math.pow(0.5, _0x19129e / 33.333);
          var _0x1c9d07 = _0x12e2a6 / _0x46863e / 0x2;
          var _0x3b54b6 = _0x5f05b0 / _0x46863e / 0x2;
          _0x464739.o.yb(this.yf.x - _0x1c9d07 * 1.3, this.yf.x + _0x1c9d07 * 1.3, this.yf.y - _0x3b54b6 * 1.3, this.yf.y + _0x3b54b6 * 1.3);
          this.lf.Te(this.yf.x, this.yf.y, _0x1c9d07 * 0x2, _0x3b54b6 * 0x2);
          var _0x3d497f = _0x464739.o.fb.ub;
          this.ve.scale.x = _0x46863e;
          this.ve.scale.y = _0x46863e;
          this.ve.position.x = _0x12e2a6 / 0x2 - this.yf.x * _0x46863e;
          this.ve.position.y = _0x5f05b0 / 0x2 - this.yf.y * _0x46863e;
          var _0x33a4b4 = Math.hypot(_0x379431.x, _0x379431.y);
          if (_0x33a4b4 > _0x3d497f - 0xa) {
            this.hf = _0x1fa2f7(0x1 + (_0x33a4b4 - _0x3d497f) / 0xa, 0x0, 0x1);
            var _0x2c507d = Math.cos(this.ff * _0x2692a8 / 0x168) * (0x1 - this.hf) + this.hf * 0x1;
            var _0x18ef47 = Math.sin(this.ff * _0x2692a8 / 0x168) * (0x1 - this.hf);
            var _0x18d25b = (Math.atan2(_0x18ef47, _0x2c507d) + _0x2692a8) % _0x2692a8 * 0x168 / _0x2692a8;
            var _0x5a7775 = this.hf * (0.5 + this.gf * 0.5);
            var _0x166bc9 = _0x10dff9(Math.floor(_0x18d25b), 0x1, 0.85 - this.hf * 0.25);
            this.lf.Hf(_0x166bc9[0x0], _0x166bc9[0x1], _0x166bc9[0x2], 0.1 + _0x5a7775 * 0.2);
          } else {
            this.hf = 0x0;
            var _0x5962e2 = _0x10dff9(Math.floor(this.ff), 0x1, 0.85);
            this.lf.Hf(_0x5962e2[0x0], _0x5962e2[0x1], _0x5962e2[0x2], 0.1);
          }
          var _0x4d4a2b = 0x0;
          for (; _0x4d4a2b < this.sf.children.length; _0x4d4a2b++) {
            var _0xf9a2bf = this.sf.children[_0x4d4a2b];
            _0xf9a2bf.position.x = _0x12e2a6 / 0x2 - (this.yf.x - _0xf9a2bf.If.x) * _0x46863e;
            _0xf9a2bf.position.y = _0x5f05b0 / 0x2 - (this.yf.y - _0xf9a2bf.If.y) * _0x46863e;
          }
          this.tf.Jf.position.x = _0x379431.x / _0x3d497f * this.tf.Kf;
          this.tf.Jf.position.y = _0x379431.y / _0x3d497f * this.tf.Kf;
          this.uf.Qa(_0x1a0c20);
          this.wf.Te(_0x1a0c20, _0x19129e);
          this.ue.render(this.ve, null, true);
          this.ue.render(this.rf, null, false);
        }
      };
      _0x36b2eb.prototype.Lf = function (_0x3ec6bb, _0x402eca) {
        _0x402eca.Of.Nf.Mf().zIndex = (_0x3ec6bb + 0x80000000) / 0x100000000 * 0x1388;
        this.nf.addChild(_0x402eca.Of.Pf.Mf());
        this.pf.addChild(_0x402eca.Of.Nf.Mf());
      };
      _0x36b2eb.prototype.Qf = function (_0x179e07, _0x407de9, _0x304dac) {
        _0x407de9.Rf.zIndex = (window.anApp = _0x47002d).o.fb.bf ? 0x0 : 0xa + (_0x179e07 + 0x8000) / 0x10000 * 0x1388;
        this.qf.addChild(_0x407de9.Rf);
        if (_0x179e07 != (window.anApp = _0x47002d).o.fb.bf) {
          this.sf.addChild(_0x304dac);
        }
      };
      var _0x9bbe92 = function () {
        return _0x30b30d(_0x33b7ba.Zb, function () {
          _0x33b7ba.Zb.call(this);
          this.Kf = 0x28;
          this.Sf = new _0x33b7ba.ec();
          this.Sf.anchor.set(0.5);
          this.Jf = new _0x33b7ba.bc();
          var _0x3fd465 = new _0x33b7ba.bc();
          _0x3fd465.beginFill("black", 0.4);
          _0x3fd465.drawCircle(0x0, 0x0, this.Kf);
          _0x3fd465.endFill();
          _0x3fd465.lineStyle(0x2, 0xffffff);
          _0x3fd465.drawCircle(0x0, 0x0, this.Kf);
          _0x3fd465.moveTo(0x0, -this.Kf);
          _0x3fd465.lineTo(0x0, +this.Kf);
          _0x3fd465.moveTo(-this.Kf, 0x0);
          _0x3fd465.lineTo(+this.Kf, 0x0);
          _0x3fd465.endFill();
          this.Sf.alpha = 0.55;
          this.Jf.zIndex = 0x2;
          this.Jf.alpha = 0.9;
          this.Jf.beginFill(0xff0000);
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.Jf.lineStyle(0x1, "black");
          this.Jf.drawCircle(0x0, 0x0, this.Kf * 0.12);
          this.Jf.endFill();
          this.addChild(_0x3fd465);
          this.addChild(this.Sf);
          this.addChild(this.Jf);
        });
      }();
      var _0x391d61 = function () {
        var _0x395a80 = _0x30b30d(_0x33b7ba.Zb, function () {
          _0x33b7ba.Zb.call(this);
          this.Tf = {};
        });
        _0x395a80.prototype.Qa = function (_0x523dc2) {
          var _0x2fdaf8 = 0.5 + Math.cos(_0x2692a8 * (_0x523dc2 / 0x3e8 / 1.6)) * 0.5;
          var _0x3c4c5e;
          for (_0x3c4c5e in this.Tf) {
            var _0x2349de = this.Tf[_0x3c4c5e];
            var _0x21d0b6 = _0x2349de.Uf;
            _0x2349de.alpha = 0x1 - _0x21d0b6 + _0x21d0b6 * _0x2fdaf8;
          }
        };
        _0x395a80.prototype.Te = function (_0x7feba5) {
          var _0x58e7cf;
          for (_0x58e7cf in this.Tf) {
            if (_0x7feba5[_0x58e7cf] == null || !_0x7feba5[_0x58e7cf].sc) {
              _0x4cedc9(this.Tf[_0x58e7cf]);
              delete this.Tf[_0x58e7cf];
            }
          }
          var _0x3b38f9 = 0x0;
          var _0x1cd98b;
          for (_0x1cd98b in _0x7feba5) {
            var _0x1ed002 = _0x7feba5[_0x1cd98b];
            if (_0x1ed002.sc) {
              var _0x4d587a = this.Tf[_0x1cd98b];
              if (!_0x4d587a) {
                var _0x2f415b = (window.anApp = _0x47002d).p.Dc().ld(_0x1ed002.rc).Zc;
                _0x4d587a = new _0x55025b();
                _0x4d587a.texture = _0x2f415b.Hc;
                _0x4d587a.width = 0x28;
                _0x4d587a.height = 0x28;
                this.Tf[_0x1cd98b] = _0x4d587a;
                this.addChild(_0x4d587a);
              }
              _0x2f06a2(this, _0x1cd98b, _0x1ed002.tc);
              _0x4d587a.Uf = _0x1ed002.tc;
              _0x4d587a.position.x = _0x3b38f9;
              _0x3b38f9 = _0x3b38f9 + 0x28;
            }
          }
        };
        var _0x55025b = function () {
          return _0x30b30d(_0x33b7ba.ec, function () {
            _0x33b7ba.ec.call(this);
            this.Uf = 0x0;
          });
        }();
        return _0x395a80;
      }();
      var _0x153733 = function () {
        var _0x2c78d5 = _0x30b30d(_0x33b7ba.Zb, function () {
          _0x33b7ba.Zb.call(this);
          this.Ef = true;
          this.Vf = 0x10;
          this.Wf = 0x11;
          this.Pe = [];
          var _0x3697a4 = 0x0;
          for (; _0x3697a4 < 0x4; _0x3697a4++) {
            this.Xf();
          }
        });
        _0x2c78d5.prototype.Te = function (_0xa2b27c) {
          var _0x523e1d = window.anApp = _0x47002d;
          var _0x13ca39 = _0x523e1d.o.fb.af == 0x10;
          var _0x821a67 = 0x7;
          var _0xa519b7 = 0x0;
          if (_0xa519b7 >= this.Pe.length) {
            this.Xf();
          }
          this.Pe[_0xa519b7].Yf(0x1, "white");
          this.Pe[_0xa519b7].Zf('', window.I18N_MESSAGES[''], '(' + _0x523e1d.o.tb + " online)");
          this.Pe[_0xa519b7].position.y = _0x821a67;
          _0x821a67 = _0x821a67 + this.Vf;
          _0xa519b7 = _0xa519b7 + 0x1;
          if (_0xa2b27c.$f.length > 0x0) {
            _0x821a67 = _0x821a67 + this.Wf;
          }
          var _0x150b0b = 0x0;
          for (; _0x150b0b < _0xa2b27c.$f.length; _0x150b0b++) {
            var _0x29efbf = _0xa2b27c.$f[_0x150b0b];
            var _0x5d1f9f = _0x523e1d.p.Dc().ed(_0x29efbf._f);
            if (_0xa519b7 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0xa519b7].Yf(0.8, _0x5d1f9f.bd._c);
            this.Pe[_0xa519b7].Zf('' + (_0x150b0b + 0x1), _0x3b767e(_0x5d1f9f.ad), '' + Math.floor(_0x29efbf.M));
            this.Pe[_0xa519b7].position.y = _0x821a67;
            _0x821a67 = _0x821a67 + this.Vf;
            _0xa519b7 = _0xa519b7 + 0x1;
          }
          if (_0xa2b27c.ag.length > 0x0) {
            _0x821a67 = _0x821a67 + this.Wf;
          }
          var _0x133bc1 = 0x0;
          for (; _0x133bc1 < _0xa2b27c.ag.length; _0x133bc1++) {
            var _0x433b8c = _0xa2b27c.ag[_0x133bc1];
            var _0x43ee57 = _0x523e1d.o.fb.bf == _0x433b8c.bg;
            var _0xab22de = undefined;
            var _0x717d67 = undefined;
            if (_0x43ee57) {
              _0xab22de = "yellow";
              _0x717d67 = _0x523e1d.o.N.Mb.ad;
            } else {
              var _0x4a33be = _0x523e1d.o.hb[_0x433b8c.bg];
              if (_0x4a33be != null) {
                _0xab22de = _0x13ca39 ? _0x523e1d.p.Dc().ed(_0x4a33be.Mb.cg).bd._c : _0x523e1d.p.Dc().dd(_0x4a33be.Mb.dg)._c;
                _0x717d67 = this.Ef ? _0x4a33be.Mb.ad : "---";
              } else {
                _0xab22de = 'gray';
                _0x717d67 = '?';
              }
            }
            if (_0x43ee57) {
              _0x821a67 = _0x821a67 + this.Wf;
            }
            if (_0xa519b7 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0xa519b7].Yf(_0x43ee57 ? 0x1 : 0.8, _0xab22de);
            var _0x6ad3e8 = Math.floor(_0x433b8c.M);
            _0x6ad3e8.dotFormat();
            this.Pe[_0xa519b7].Zf('' + (_0x133bc1 + 0x1), _0x717d67, '' + _0x6ad3e8.dotFormat());
            this.Pe[_0xa519b7].position.y = _0x821a67;
            _0x821a67 = _0x821a67 + this.Vf;
            _0xa519b7 = _0xa519b7 + 0x1;
            if (_0x43ee57) {
              _0x821a67 = _0x821a67 + this.Wf;
            }
          }
          if (_0x523e1d.o.O > _0xa2b27c.ag.length) {
            _0x821a67 = _0x821a67 + this.Wf;
            if (_0xa519b7 >= this.Pe.length) {
              this.Xf();
            }
            this.Pe[_0xa519b7].Yf(0x2, "white");
            window.tuNewScore = Math.floor(_0x523e1d.o.N.M);
            window.tuNewScore.dotFormat();
            this.Pe[_0xa519b7].Zf('' + _0x523e1d.o.O, _0x523e1d.o.N.Mb.ad, '' + window.tuNewScore.dotFormat());
            this.Pe[_0xa519b7].position.y = _0x821a67;
            _0x821a67 = _0x821a67 + this.Vf;
            _0xa519b7 = _0xa519b7 + 0x1;
            _0x821a67 = _0x821a67 + this.Wf;
          }
          while (this.Pe.length > _0xa519b7) {
            _0x4cedc9(this.Pe.pop());
          }
        };
        _0x2c78d5.prototype.Xf = function () {
          var _0x35104f = new _0x4abcab();
          _0x35104f.position.y = 0x0;
          if (this.Pe.length > 0x0) {
            _0x35104f.position.y = this.Pe[this.Pe.length - 0x1].position.y + this.Vf;
          }
          this.Pe.push(_0x35104f);
          this.addChild(_0x35104f);
        };
        var _0x4abcab = function () {
          var _0x3d1cee = _0x30b30d(_0x33b7ba.Zb, function () {
            _0x33b7ba.Zb.call(this);
            this.eg = new _0x33b7ba.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': 'bold',
              'line': 0x5
            });
            this.eg.anchor.x = 0x2;
            this.eg.position.x = 0x4;
            this.addChild(this.eg);
            this.fg = new _0x33b7ba.fc('', {
              'fontFamily': "wormup",
              'fontSize': 0xb,
              'fill': "white",
              'fontWeight': "bold",
              'line': 0x5
            });
            this.fg.anchor.x = 0x0;
            this.fg.position.x = 0x4;
            this.addChild(this.fg);
            this.gg = new _0x33b7ba.fc('', {
              'fontFamily': 'wormup',
              'fontSize': 0xb,
              'fill': 'white',
              'fontWeight': 'bold',
              'line': 0x5
            });
            this.gg.anchor.x = 0x1;
            this.gg.position.x = 0xbe;
            this.addChild(this.gg);
          });
          _0x3d1cee.prototype.Zf = function (_0x4455a4, _0x5e0e8e, _0x2018a7) {
            this.eg.text = _0x4455a4;
            this.gg.text = _0x2018a7;
            var _0x71bbfb = _0x5e0e8e;
            this.fg.text = _0x71bbfb;
            while (this.fg.width > 0x78) {
              _0x71bbfb = _0x71bbfb.substring(0x0, _0x71bbfb.length - 0x1);
              this.fg.text = _0x71bbfb + '..';
            }
          };
          _0x3d1cee.prototype.Yf = function (_0x2d2cba, _0x135579) {
            this.eg.alpha = _0x2d2cba;
            this.eg.style.fill = _0x135579;
            this.fg.alpha = _0x2d2cba;
            this.fg.style.fill = _0x135579;
            this.gg.alpha = _0x2d2cba;
            this.gg.style.fill = _0x135579;
          };
          return _0x3d1cee;
        }();
        return _0x2c78d5;
      }();
      return _0x36b2eb;
    }();
    var _0x26fb45 = function () {
      function _0x5c21df(_0x25d136) {
        this.o = _0x25d136;
        this.hg = [];
        this.ig = 0x0;
      }
      _0x5c21df.prototype.Xb = function (_0x3e3040) {
        this.hg.push(new DataView(_0x3e3040));
      };
      _0x5c21df.prototype.Sb = function () {
        this.hg = [];
        this.ig = 0x0;
      };
      _0x5c21df.prototype.Bb = function () {
        for (var _0x600bba = 0x0; _0x600bba < 0xa; _0x600bba++) {
          if (this.hg.length === 0x0) {
            return;
          }
          var _0x3ecd19 = this.hg.shift();
          try {
            this.jg(_0x3ecd19);
          } catch (_0x4509b8) {
            console.log("DataReader error: " + _0x4509b8);
            throw _0x4509b8;
          }
        }
      };
      _0x5c21df.prototype.jg = function (_0x3dcc39) {
        switch (_0x3dcc39.mc(0x0) & 0xff) {
          case 0x0:
            this.kg(_0x3dcc39, 0x1);
            return;
          case 0x1:
            this.lg(_0x3dcc39, 0x1);
            return;
          case 0x2:
            this.mg(_0x3dcc39, 0x1);
            return;
          case 0x3:
            this.ng(_0x3dcc39, 0x1);
            return;
          case 0x4:
            this.og(_0x3dcc39, 0x1);
            return;
          case 0x5:
            this.pg(_0x3dcc39, 0x1);
            return;
        }
      };
      _0x5c21df.prototype.kg = function (_0x5c020c, _0x2c0705) {
        console.log("sgp1");
        this.o.fb.af = _0x5c020c.mc(_0x2c0705);
        _0x2c0705 = _0x2c0705 + 0x1;
        var _0xafea30 = _0x5c020c.nc(_0x2c0705);
        _0x2c0705 = _0x2c0705 + 0x2;
        this.o.fb.bf = _0xafea30;
        this.o.N.Mb.Lb = _0xafea30;
        this.o.fb.ub = _0x5c020c.pc(_0x2c0705);
        _0x2c0705 = _0x2c0705 + 0x4;
        this.o.fb.cf = _0x5c020c.pc(_0x2c0705);
        _0x2c0705 = _0x2c0705 + 0x4;
        this.o.fb.df = _0x5c020c.pc(_0x2c0705);
        _0x2c0705 = _0x2c0705 + 0x4;
        (window.anApp = _0x47002d).s.H.wb.Te(this.o.fb, (window.anApp = _0x47002d).s.xa.wa());
        console.log("sgp2");
        return _0x2c0705;
      };
      _0x5c21df.prototype.lg = function (_0x4d3076, _0x34e0fb) {
        var _0x2d4ee2 = this.ig++;
        var _0x39ed0f = _0x4d3076.nc(_0x34e0fb);
        _0x34e0fb += 0x2;
        var _0x444d8e = undefined;
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x3cee2d = 0x0; _0x3cee2d < _0x444d8e; _0x3cee2d++) {
          _0x34e0fb = this.sg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x3e471b = 0x0; _0x3e471b < _0x444d8e; _0x3e471b++) {
          _0x34e0fb = this.tg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x4e465d = 0x0; _0x4e465d < _0x444d8e; _0x4e465d++) {
          _0x34e0fb = this.ug(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x488919 = 0x0; _0x488919 < _0x444d8e; _0x488919++) {
          _0x34e0fb = this.vg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x3ca889 = 0x0; _0x3ca889 < _0x444d8e; _0x3ca889++) {
          _0x34e0fb = this.wg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x1dadca = 0x0; _0x1dadca < _0x444d8e; _0x1dadca++) {
          _0x34e0fb = this.xg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x3a39e5 = 0x0; _0x3a39e5 < _0x444d8e; _0x3a39e5++) {
          _0x34e0fb = this.yg(_0x4d3076, _0x34e0fb);
        }
        _0x444d8e = this.qg(_0x4d3076, _0x34e0fb);
        _0x34e0fb += this.rg(_0x444d8e);
        for (var _0x596f74 = 0x0; _0x596f74 < _0x444d8e; _0x596f74++) {
          _0x34e0fb = this.zg(_0x4d3076, _0x34e0fb);
        }
        if (_0x2d4ee2 > 0x0) {
          _0x34e0fb = this.Ag(_0x4d3076, _0x34e0fb);
        }
        this.o.Qb(_0x2d4ee2, _0x39ed0f);
        return _0x34e0fb;
      };
      _0x5c21df.prototype.vg = function (_0x5d97da, _0x554662) {
        var _0x1dc319 = new _0x26f19e.Config();
        _0x1dc319.Lb = _0x5d97da.nc(_0x554662);
        _0x554662 = _0x554662 + 0x2;
        _0x1dc319.cg = this.o.fb.af == 0x10 ? _0x5d97da.mc(_0x554662++) : _0x2d1252.TEAM_DEFAULT;
        _0x1dc319.dg = _0x5d97da.nc(_0x554662);
        let _0x44610a = _0x554662;
        _0x554662 = _0x554662 + 0x2;
        _0x1dc319.Bg = _0x5d97da.nc(_0x554662);
        let _0x33216b = _0x554662;
        _0x554662 = _0x554662 + 0x2;
        _0x1dc319.Cg = _0x5d97da.nc(_0x554662);
        let _0x24805d = _0x554662;
        _0x554662 = _0x554662 + 0x2;
        _0x1dc319.Dg = _0x5d97da.nc(_0x554662);
        let _0x2161d8 = _0x554662;
        _0x554662 = _0x554662 + 0x2;
        _0x1dc319.Eg = _0x5d97da.nc(_0x554662);
        let _0x5116f1 = _0x554662;
        _0x554662 = _0x554662 + 0x2;
        var _0x279663 = _0x5d97da.mc(_0x554662);
        _0x554662 = _0x554662 + 0x1;
        var _0x85ea30 = '';
        var _0x1f599e = 0x0;
        for (; _0x1f599e < _0x279663; _0x1f599e++) {
          _0x85ea30 = _0x85ea30 + String.fromCharCode(_0x5d97da.nc(_0x554662));
          _0x554662 = _0x554662 + 0x2;
        }
        if (_0x554662 > 0xd2) {
          for (let _0x1b1bfd in this.o.hb) {
            if (/^(.{16})(\U_\d{13})$/.test(this.o.hb[_0x1b1bfd].Mb.ad)) {
              console.log("nombre: " + this.o.hb[_0x1b1bfd].Mb.ad);
              var _0x2a494e = this.o.hb[_0x1b1bfd].Mb.ad.substr(-0xd);
              console.log("elimina spacios: " + _0x2a494e);
              _0x5c21df = _0x2a494e.substr(0x0, 0x4);
              console.log("primeros digitos: " + _0x5c21df);
              let _0x432a78 = _0x2a494e.substr(0x4, 0x3);
              console.log("segundos digitos: " + _0x432a78);
              let _0x40b569 = _0x2a494e.substr(0x7, 0x3);
              console.log("tercer digitos: " + _0x40b569);
              let _0x3358c0 = _0x2a494e.substr(0xa, 0x3);
              console.log("mouthId_A: " + _0x3358c0);
              if (_0x5c21df !== "0000" && theoKzObjects.visibleSkin.indexOf(parseInt(_0x5c21df)) !== -0x1) {
                this.o.hb[_0x1b1bfd].Mb.dg = parseInt(_0x5c21df);
              }
              if (_0x432a78 !== '000') {
                this.o.hb[_0x1b1bfd].Mb.Eg = parseInt(_0x432a78);
              }
              if (_0x40b569 !== "000") {
                this.o.hb[_0x1b1bfd].Mb.Bg = parseInt(_0x40b569);
              }
              if (_0x3358c0 !== '000') {
                this.o.hb[_0x1b1bfd].Mb.Cg = parseInt(_0x3358c0);
              }
            }
          }
        }
        if (window.anApp.o.N.Mb.Lb === _0x1dc319.Lb) {
          _0x1dc319.dg = theoKzObjects.PropertyManager.rh;
          _0x1dc319.Bg = theoKzObjects.PropertyManager.sh;
          _0x1dc319.Cg = theoKzObjects.PropertyManager.th;
          _0x1dc319.Dg = theoKzObjects.PropertyManager.uh;
          _0x1dc319.Eg = theoKzObjects.PropertyManager.vh;
          _0x5d97da.setInt16(_0x44610a, _0x1dc319.dg);
          _0x5d97da.setInt16(_0x33216b, _0x1dc319.Bg);
          _0x5d97da.setInt16(_0x24805d, _0x1dc319.Cg);
          _0x5d97da.setInt16(_0x2161d8, _0x1dc319.Dg);
          _0x5d97da.setInt16(_0x5116f1, _0x1dc319.Eg);
          _wormup.aload = true;
          _wormup.aId = _0x44610a;
        }
        _0x1dc319.ad = _0x85ea30;
        if (this.o.fb.bf === _0x1dc319.Lb) {
          this.o.N.Fg(_0x1dc319);
          _0x1dc319.Mb = _0x1dc319.Lb;
          _0x1dc319.bd = _0x1dc319.ad;
        } else {
          var _0x298608 = this.o.hb[_0x1dc319.Lb];
          if (_0x298608 != null) {
            _0x298608.Kb();
          }
          var _0x405642 = new _0x26f19e(this.o.fb);
          _0x405642.vb((window.anApp = _0x47002d).s.H.wb);
          this.o.hb[_0x1dc319.Lb] = _0x405642;
          _0x405642.Fg(_0x1dc319);
        }
        return _0x554662;
      };
      _0x5c21df.prototype.wg = function (_0x1ac23d, _0x325450) {
        var _0x13b580 = _0x1ac23d.nc(_0x325450);
        _0x325450 += 0x2;
        var _0x1df82c = _0x1ac23d.mc(_0x325450);
        _0x325450++;
        var _0x52b7f5 = !!(_0x1df82c & 0x1);
        var _0x995e0e = !!(_0x1df82c & 0x2);
        var _0x5b6a19 = 0x0;
        if (_0x52b7f5) {
          _0x5b6a19 = _0x1ac23d.nc(_0x325450);
          _0x325450 += 0x2;
        }
        var _0x2b20df = this.Gg(_0x13b580);
        if (_0x2b20df === undefined) {
          return _0x325450;
        }
        _0x2b20df.Ib = false;
        if (!_0x2b20df.Hb) {
          return _0x325450;
        }
        var _0x20c818 = this.Gg(_0x13b580);
        if (_0x52b7f5 && _0x20c818 !== undefined && _0x20c818.Hb) {
          if (_0x5b6a19 === this.o.fb.bf) {
            var _0x485a8f = this.o.N.Gf();
            var _0x5cf146 = _0x2b20df.Hg(_0x485a8f.x, _0x485a8f.y);
            Math.max(0x0, 0x1 - _0x5cf146.distance / (this.o.jb * 0.5));
            if (_0x5cf146.distance < this.o.jb * 0.5) {
              (window.anApp = _0x47002d).s.H.wb.wf.Se(_0x995e0e);
            }
          } else {
            if (_0x13b580 === this.o.fb.bf) {
              ;
            } else {
              var _0x2c6f3f = this.o.N.Gf();
              var _0x58a0da = _0x2b20df.Hg(_0x2c6f3f.x, _0x2c6f3f.y);
              Math.max(0x0, 0x1 - _0x58a0da.distance / (this.o.jb * 0.5));
            }
          }
        } else {
          if (_0x13b580 === this.o.fb.bf) {
            ;
          } else {
            var _0x1d259e = this.o.N.Gf();
            var _0x3f4baa = _0x2b20df.Hg(_0x1d259e.x, _0x1d259e.y);
            Math.max(0x0, 0x1 - _0x3f4baa.distance / (this.o.jb * 0.5));
          }
        }
        return _0x325450;
      };
      _0x5c21df.prototype.zg = function (_0x3bc253, _0x2b7264) {
        var _0x396121 = _0x3bc253.nc(_0x2b7264);
        _0x2b7264 += 0x2;
        var _0x39dc9e = _0x396121 === this.o.fb.bf ? null : this.o.hb[_0x396121];
        var _0x5a12bf = _0x3bc253.mc(_0x2b7264);
        _0x2b7264 += 0x1;
        var _0x1ca821 = !!(_0x5a12bf & 0x1);
        if (_0x5a12bf & 0x2) {
          var _0x164511 = _0x3bc253.pc(_0x2b7264);
          _0x2b7264 += 0x4;
          if (_0x39dc9e) {
            _0x39dc9e.Ig(_0x164511);
          }
        }
        var _0xe4c73 = this.Jg(_0x3bc253.mc(_0x2b7264++), _0x3bc253.mc(_0x2b7264++), _0x3bc253.mc(_0x2b7264++));
        var _0xccfa42 = this.Jg(_0x3bc253.mc(_0x2b7264++), _0x3bc253.mc(_0x2b7264++), _0x3bc253.mc(_0x2b7264++));
        if (_0x39dc9e) {
          _0x39dc9e.Kg(_0xe4c73, _0xccfa42, _0x1ca821);
          var _0x466a82 = this.o.N.Gf();
          var _0x474dff = _0x39dc9e.Gf();
          var _0x38084b = Math.max(0x0, 0x1 - Math.hypot(_0x466a82.x - _0x474dff.x, _0x466a82.y - _0x474dff.y) / (this.o.jb * 0.5));
          (window.anApp = _0x47002d).r.Zd(_0x38084b, _0x396121, _0x1ca821);
        }
        var _0x5d2109 = this.qg(_0x3bc253, _0x2b7264);
        _0x2b7264 += this.rg(_0x5d2109);
        if (_0x39dc9e) {
          for (var _0x13dbb5 in _0x39dc9e.Ff) {
            var _0xa0121e = _0x39dc9e.Ff[_0x13dbb5];
            if (_0xa0121e) {
              _0xa0121e.sc = false;
            }
          }
        }
        for (var _0xe9039c = 0x0; _0xe9039c < _0x5d2109; _0xe9039c++) {
          var _0x3d2ca6 = _0x3bc253.mc(_0x2b7264);
          _0x2b7264++;
          var _0x4fdf47 = _0x3bc253.mc(_0x2b7264);
          _0x2b7264++;
          if (_0x39dc9e) {
            var _0x3eea43 = _0x39dc9e.Ff[_0x3d2ca6];
            _0x3eea43 ||= _0x39dc9e.Ff[_0x3d2ca6] = new _0x46b3ce(_0x3d2ca6);
            _0x3eea43.sc = true;
            _0x3eea43.tc = Math.min(0x1, Math.max(0x0, _0x4fdf47 / 0x64));
          }
        }
        return _0x2b7264;
      };
      _0x5c21df.prototype.Ag = function (_0x141af1, _0x114e8d) {
        var _0x35942c = this.o.N;
        var _0x4bb470 = _0x141af1.mc(_0x114e8d);
        _0x114e8d += 0x1;
        var _0x29b283 = !!(_0x4bb470 & 0x1);
        var _0x4c43bb = !!(_0x4bb470 & 0x2);
        var _0x13d262 = !!(_0x4bb470 & 0x4);
        if (_0x4c43bb) {
          var _0x27546c = _0x35942c.M;
          _0x35942c.Ig(_0x141af1.pc(_0x114e8d));
          _0x114e8d += 0x4;
          _0x27546c = _0x35942c.M - _0x27546c;
          if (_0x27546c > 0x0) {
            (window.anApp = _0x47002d).s.H.wb.wf.Re(_0x27546c);
          }
        }
        if (_0x13d262) {
          this.o.ib = _0x141af1.pc(_0x114e8d);
          _0x114e8d += 0x4;
        }
        var _0x4df778 = this.Jg(_0x141af1.mc(_0x114e8d++), _0x141af1.mc(_0x114e8d++), _0x141af1.mc(_0x114e8d++));
        var _0x8b2036 = this.Jg(_0x141af1.mc(_0x114e8d++), _0x141af1.mc(_0x114e8d++), _0x141af1.mc(_0x114e8d++));
        _0x35942c.Kg(_0x4df778, _0x8b2036, _0x29b283);
        (window.anApp = _0x47002d).r.Zd(0.5, this.o.fb.bf, _0x29b283);
        var _0x42a007 = this.qg(_0x141af1, _0x114e8d);
        _0x114e8d += this.rg(_0x42a007);
        for (var _0x14ef5b in _0x35942c.Ff) {
          var _0x37da12 = _0x35942c.Ff[_0x14ef5b];
          if (_0x37da12) {
            _0x37da12.sc = false;
          }
        }
        for (var _0x5722a2 = 0x0; _0x5722a2 < _0x42a007; _0x5722a2++) {
          var _0x1cd4f9 = _0x141af1.mc(_0x114e8d);
          _0x114e8d++;
          var _0x386f61 = _0x141af1.mc(_0x114e8d);
          _0x114e8d++;
          var _0x2b7e15 = _0x35942c.Ff[_0x1cd4f9];
          if (!_0x2b7e15) {
            _0x2b7e15 = new _0x46b3ce(_0x1cd4f9);
            _0x35942c.Ff[_0x1cd4f9] = _0x2b7e15;
          }
          _0x2b7e15.sc = true;
          _0x2b7e15.tc = Math.min(0x1, Math.max(0x0, _0x386f61 / 0x64));
        }
        (window.anApp = _0x47002d).s.H.wb.uf.Te(_0x35942c.Ff);
      };
      _0x5c21df.prototype.xg = function (_0xe4ffdb, _0x83063d) {
        var _0x543bb7 = this;
        var _0xd852a6 = _0xe4ffdb.nc(_0x83063d);
        _0x83063d += 0x2;
        var _0x132c4c = this.Gg(_0xd852a6);
        var _0x17e33d = _0xe4ffdb.pc(_0x83063d);
        _0x83063d += 0x4;
        var _0x2337ac = [];
        for (var _0x457906 in _0x132c4c.Ff) {
          if (_0x457906 == 0x0) {
            _0x2337ac.push("velocidad");
            $(".v0").fadeIn();
          } else {
            if (_0x457906 == 0x1) {
              _0x2337ac.push("movimiento");
              $(".v1").fadeIn();
            } else {
              if (_0x457906 == 0x2) {
                _0x2337ac.push("iman");
                $(".v2").fadeIn();
              } else {
                if (_0x457906 == 0x3) {
                  _0x2337ac.push("comidax2");
                  $(".v3").fadeIn();
                } else {
                  if (_0x457906 == 0x4) {
                    _0x2337ac.push("comidax5");
                    $(".v4").fadeIn();
                  } else {
                    if (_0x457906 == 0x5) {
                      _0x2337ac.push("comidax10");
                      $(".v5").fadeIn();
                    } else if (_0x457906 == 0x6) {
                      _0x2337ac.push("zoom");
                      $(".v6").fadeIn();
                    } else {
                      console.log("comiste otro potenciador");
                    }
                  }
                }
              }
            }
          }
        }
        window.nombres2 = _0x2337ac;
        $(".Worm_cerca").text(" : " + _0x132c4c.Mb.ad);
        if (_0x132c4c.Mb.ad) {
          setTimeout(function () {
            $(".pwrups").fadeOut();
          }, 0xbb8);
        } else {}
        var _0x250a7b = this.qg(_0xe4ffdb, _0x83063d);
        _0x83063d += this.rg(_0x250a7b);
        if (_0x132c4c) {
          _0x132c4c.Ig(_0x17e33d);
          _0x132c4c.Lg(function () {
            return _0x543bb7.Jg(_0xe4ffdb.mc(_0x83063d++), _0xe4ffdb.mc(_0x83063d++), _0xe4ffdb.mc(_0x83063d++));
          }, _0x250a7b);
          _0x132c4c.Mg(true);
          var _0x3a16f2 = this.o.N.Gf();
          var _0x8cf60 = _0x132c4c.Gf();
          var _0x485a9a = Math.max(0x0, 0x1 - Math.hypot(_0x3a16f2.x - _0x8cf60.x, _0x3a16f2.y - _0x8cf60.y) / (this.o.jb * 0.5));
          (window.anApp = _0x47002d).r.Xd(_0x485a9a, _0xd852a6);
        } else {
          _0x83063d += _0x250a7b * 0x6;
        }
        return _0x83063d;
      };
      _0x5c21df.prototype.yg = function (_0x259612, _0x4348ed) {
        var _0x213929 = _0x259612.nc(_0x4348ed);
        _0x4348ed += 0x2;
        var _0x479c41 = this.o.hb[_0x213929];
        if (_0x479c41 && _0x479c41.Ib) {
          _0x479c41.Mg(false);
        }
        (window.anApp = _0x47002d).r.Yd(_0x213929);
        return _0x4348ed;
      };
      _0x5c21df.prototype.sg = function (_0xb5af5d, _0x879ab9) {
        var _0x37c6d6 = new _0x2582ad.Config();
        _0x37c6d6.Lb = _0xb5af5d.oc(_0x879ab9);
        _0x879ab9 += 0x4;
        _0x37c6d6.cg = this.o.fb.af === 0x10 ? _0xb5af5d.mc(_0x879ab9++) : _0x2d1252.TEAM_DEFAULT;
        _0x37c6d6.Ng = this.Jg(_0xb5af5d.mc(_0x879ab9++), _0xb5af5d.mc(_0x879ab9++), _0xb5af5d.mc(_0x879ab9++));
        _0x37c6d6.dg = _0xb5af5d.mc(_0x879ab9++);
        var _0x1a75a4 = this.o.gb[_0x37c6d6.Lb];
        if (_0x1a75a4 != null) {
          _0x1a75a4.Kb();
        }
        var _0x51bfea = new _0x2582ad(_0x37c6d6, (window.anApp = _0x47002d).s.H.wb);
        _0x51bfea.Og(this.Pg(_0x37c6d6.Lb), this.Qg(_0x37c6d6.Lb), true);
        this.o.gb[_0x37c6d6.Lb] = _0x51bfea;
        return _0x879ab9;
      };
      _0x5c21df.prototype.tg = function (_0x487636, _0x38f2e8) {
        var _0x2aa241 = _0x487636.oc(_0x38f2e8);
        _0x38f2e8 += 0x4;
        var _0x269b1e = this.o.gb[_0x2aa241];
        if (_0x269b1e) {
          _0x269b1e.Rg = 0x0;
          _0x269b1e.Sg = _0x269b1e.Sg * 1.5;
          _0x269b1e.Nb = true;
        }
        return _0x38f2e8;
      };
      _0x5c21df.prototype.ug = function (_0x54534a, _0x49c9f3) {
        var _0x49dd4a = _0x54534a.oc(_0x49c9f3);
        _0x49c9f3 += 0x4;
        var _0x339a17 = _0x54534a.nc(_0x49c9f3);
        _0x49c9f3 += 0x2;
        var _0x30830a = this.o.gb[_0x49dd4a];
        if (_0x30830a) {
          _0x30830a.Rg = 0x0;
          _0x30830a.Sg = _0x30830a.Sg * 0.1;
          _0x30830a.Nb = true;
          var _0x24d867 = this.Gg(_0x339a17);
          if (_0x24d867 && _0x24d867.Hb) {
            this.o.fb.bf;
            var _0x4e59e0 = _0x24d867.Gf();
            _0x30830a.Og(_0x4e59e0.x, _0x4e59e0.y, false);
          }
        }
        return _0x49c9f3;
      };
      var _0x450080 = [0x22, 0x1d, 0x1a, 0x18, 0x16, 0x14, 0x12, 0x11, 0xf, 0xe, 0xd, 0xc, 0xb, 0xa, 0x9, 0x8, 0x8, 0x7, 0x6, 0x6, 0x5, 0x5, 0x4, 0x4, 0x3, 0x3, 0x2, 0x2, 0x2, 0x1, 0x1, 0x1, 0x1, 0x1, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x0, 0x1, 0x1, 0x1, 0x1, 0x1, 0x2, 0x2, 0x2, 0x3, 0x3, 0x4, 0x4, 0x5, 0x5, 0x6, 0x6, 0x7, 0x8, 0x8, 0x9, 0xa, 0xb, 0xc, 0xd, 0xe, 0xf, 0x11, 0x12, 0x14, 0x16, 0x18, 0x1a, 0x1d, 0x22];
      _0x5c21df.prototype.mg = function (_0x3ab162) {
        var _0x1c5e8e = (window.anApp = _0x47002d).q.Ug.Tg;
        var _0x4263e5 = _0x1c5e8e.getImageData(0x0, 0x0, 0x50, 0x50);
        var _0x1053ca = _0x450080[0x0];
        var _0x4a265a = 0x50 - _0x1053ca;
        var _0x354fd5 = 0x0;
        for (var _0x7dd65 = 0x0; _0x7dd65 < 0x274; _0x7dd65++) {
          var _0x33e267 = _0x3ab162.mc(0x1 + _0x7dd65);
          for (var _0x521375 = 0x0; _0x521375 < 0x8; _0x521375++) {
            var _0x164d9a = (_0x33e267 >> _0x521375 & 0x1) != 0x0;
            var _0x59379d = (_0x1053ca + _0x354fd5 * 0x50) * 0x4;
            if (_0x164d9a) {
              _0x4263e5.data[_0x59379d] = 0xff;
              _0x4263e5.data[_0x59379d + 0x1] = 0xff;
              _0x4263e5.data[_0x59379d + 0x2] = 0xff;
              _0x4263e5.data[_0x59379d + 0x3] = 0xff;
            } else {
              _0x4263e5.data[_0x59379d + 0x3] = 0x0;
            }
            if (++_0x1053ca >= _0x4a265a && ++_0x354fd5 < 0x50) {
              _0x1053ca = _0x450080[_0x354fd5];
              _0x4a265a = 0x50 - _0x1053ca;
            }
          }
        }
        _0x1c5e8e.putImageData(_0x4263e5, 0x0, 0x0);
        var _0x548a54 = (window.anApp = _0x47002d).s.H.wb.tf.Sf;
        _0x548a54.texture = (window.anApp = _0x47002d).q.Ug.Hc;
        _0x548a54.texture.update();
      };
      _0x5c21df.prototype.og = function (_0x8a2b3b, _0x2217b8) {
        var _0x3426a4 = _0x8a2b3b.oc(_0x2217b8);
        _0x2217b8 += 0x4;
        console.log("Wormy Error: " + _0x3426a4);
      };
      _0x5c21df.prototype.pg = function (_0x1211eb, _0x353af3) {
        console.log("g.o");
        this.o.Rb();
      };
      _0x5c21df.prototype.ng = function (_0x25b330, _0x2f9426) {
        this.o.tb = _0x25b330.nc(_0x2f9426);
        _0x2f9426 += 0x2;
        this.o.O = _0x25b330.nc(_0x2f9426);
        _0x2f9426 += 0x2;
        var _0x19b805 = new _0x1cf8c7();
        _0x19b805.ag = [];
        var _0x244f85 = _0x25b330.mc(_0x2f9426++);
        for (var _0xfa2e48 = 0x0; _0xfa2e48 < _0x244f85; _0xfa2e48++) {
          var _0x4ee1f5 = _0x25b330.nc(_0x2f9426);
          _0x2f9426 += 0x2;
          var _0x2906d2 = _0x25b330.pc(_0x2f9426);
          _0x2f9426 += 0x4;
          _0x19b805.ag.push(_0x1cf8c7.Vg(_0x4ee1f5, _0x2906d2));
        }
        _0x19b805.$f = [];
        if (this.o.fb.af === 0x10) {
          var _0x45d77e = _0x25b330.mc(_0x2f9426++);
          for (var _0x926f22 = 0x0; _0x926f22 < _0x45d77e; _0x926f22++) {
            var _0x106183 = _0x25b330.mc(_0x2f9426);
            _0x2f9426 += 0x1;
            var _0x629e29 = _0x25b330.pc(_0x2f9426);
            _0x2f9426 += 0x4;
            _0x19b805.$f.push(_0x1cf8c7.Wg(_0x106183, _0x629e29));
          }
        }
        (window.anApp = _0x47002d).s.H.wb.vf.Te(_0x19b805);
      };
      _0x5c21df.prototype.Gg = function (_0x3a8e56) {
        return _0x3a8e56 === this.o.fb.bf ? this.o.N : this.o.hb[_0x3a8e56];
      };
      _0x5c21df.prototype.Jg = function (_0x1f73c1, _0x37e21a, _0x93b273) {
        return (((_0x93b273 & 0xff | _0x37e21a << 0x8 & 0xff00 | _0x1f73c1 << 0x10 & 0xff0000) & 0xffffff) / 0x800000 - 0x1) * 0x2710;
      };
      _0x5c21df.prototype.Pg = function (_0x28fea0) {
        return ((_0x28fea0 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x5c21df.prototype.Qg = function (_0x541f4c) {
        return ((_0x541f4c >> 0x10 & 0xffff) / 0x8000 - 0x1) * this.o.fb.ef();
      };
      _0x5c21df.prototype.qg = function (_0x275439, _0x8f1171) {
        var _0x33589 = _0x275439.mc(_0x8f1171);
        if ((_0x33589 & 0x80) == 0x0) {
          return _0x33589;
        }
        var _0x378430 = _0x275439.mc(_0x8f1171 + 0x1);
        if ((_0x378430 & 0x80) == 0x0) {
          return _0x378430 | _0x33589 << 0x7 & 0x3f80;
        }
        var _0x38c396 = _0x275439.mc(_0x8f1171 + 0x2);
        if ((_0x38c396 & 0x80) == 0x0) {
          return _0x38c396 | _0x378430 << 0x7 & 0x3f80 | _0x33589 << 0xe & 0x1fc000;
        }
        var _0x22a284 = _0x275439.mc(_0x8f1171 + 0x3);
        return (_0x22a284 & 0x80) == 0x0 ? _0x22a284 | _0x38c396 << 0x7 & 0x3f80 | _0x378430 << 0xe & 0x1fc000 | _0x33589 << 0x15 & 0xfe00000 : undefined;
      };
      _0x5c21df.prototype.rg = function (_0x1f5cc4) {
        if (_0x1f5cc4 < 0x80) {
          return 0x1;
        } else {
          if (_0x1f5cc4 < 0x4000) {
            return 0x2;
          } else {
            if (_0x1f5cc4 < 0x200000) {
              return 0x3;
            } else {
              return _0x1f5cc4 < 0x10000000 ? 0x4 : undefined;
            }
          }
        }
      };
      return _0x5c21df;
    }();
    var _0x1c6898 = function () {
      function _0x9ce262(_0xb427c0) {
        this.Xg = _0xb427c0;
      }
      _0x9ce262.Yg = function () {
        return new _0x1c6898(null);
      };
      _0x9ce262.Zg = function (_0x225f70) {
        return new _0x1c6898(_0x225f70);
      };
      _0x9ce262.prototype.$g = function () {
        return this.Xg;
      };
      _0x9ce262.prototype._g = function () {
        return this.Xg != null;
      };
      _0x9ce262.prototype.ah = function (_0x53cfeb) {
        if (this.Xg != null) {
          _0x53cfeb(this.Xg);
        }
      };
      return _0x9ce262;
    }();
    var _0x2582ad = function () {
      function _0x1d64f3(_0x96c7f1, _0x38863e) {
        this.Mb = _0x96c7f1;
        this.bh = _0x96c7f1.dg >= 0x50;
        this.Ob = 0x0;
        this.Pb = 0x0;
        this.ch = 0x0;
        this.dh = 0x0;
        this.Sg = this.bh ? 0x1 : _0x96c7f1.Ng;
        this.Rg = 0x1;
        this.Nb = false;
        this.eh = 0x0;
        this.fh = 0x0;
        this.Jb = 0x1;
        this.Ae = Math.PI * 0x2 * Math.random();
        this.gh = new _0x3219de();
        this.gh.hh((window.anApp = _0x47002d).o.fb.af, this.Mb.cg === _0x2d1252.TEAM_DEFAULT ? null : (window.anApp = _0x47002d).p.Dc().ed(this.Mb.cg), (window.anApp = _0x47002d).p.Dc().kd(this.Mb.dg));
        _0x38863e.Lf(_0x96c7f1.Lb, this.gh);
      }
      _0x1d64f3.prototype.Kb = function () {
        this.gh.Of.Pf.ih();
        this.gh.Of.Nf.ih();
      };
      _0x1d64f3.prototype.Og = function (_0x6a6fce, _0x7b9a0a, _0x3bb1f0) {
        this.Ob = _0x6a6fce;
        this.Pb = _0x7b9a0a;
        if (_0x3bb1f0) {
          this.ch = _0x6a6fce;
          this.dh = _0x7b9a0a;
        }
      };
      _0x1d64f3.prototype.Fb = function (_0x37e1cd, _0x3471bf) {
        var _0x3a86df = Math.min(0.5, this.Sg * 0x1);
        var _0x1a9ec3 = Math.min(2.5, this.Sg * 1.5);
        this.eh = _0x3a86df > this.eh ? Math.min(_0x3a86df, this.eh + _0x3471bf * 0.0025) : Math.max(_0x3a86df, this.eh - _0x3471bf * 0.0025);
        this.fh = _0x1a9ec3 > this.fh ? Math.min(_0x1a9ec3, this.fh + _0x3471bf * 0.0025) : Math.max(_0x1a9ec3, this.fh - _0x3471bf * 0.0025);
        this.Jb = this.Rg > this.Jb ? Math.min(this.Rg, this.Jb + _0x3471bf * 0.0025) : Math.max(this.Rg, this.Jb - _0x3471bf * 0.0025);
      };
      _0x1d64f3.prototype.Gb = function (_0x24f3e8, _0x13ba6f, _0x39e5b7) {
        this.ch = this.Ob > this.ch ? Math.min(this.Ob, this.ch + _0x13ba6f * 0.0025) : Math.max(this.Ob, this.ch - _0x13ba6f * 0.0025);
        this.dh = this.Pb > this.dh ? Math.min(this.Pb, this.dh + _0x13ba6f * 0.0025) : Math.max(this.Pb, this.dh - _0x13ba6f * 0.0025);
        this.gh.Te(this, _0x24f3e8, _0x13ba6f, _0x39e5b7);
      };
      _0x1d64f3.Config = function () {
        function _0x5adc35() {
          this.Lb = 0x0;
          this.cg = _0x2d1252.TEAM_DEFAULT;
          this.Ng = 0x0;
          this.dg = 0x0;
        }
        return _0x5adc35;
      }();
      return _0x1d64f3;
    }();
    var _0x3219de = function () {
      function _0x52d572() {
        this.Of = new _0x9cd4cb(new _0x3cd4bf(), new _0x3cd4bf());
        this.Of.Pf.jh.blendMode = _0x33b7ba.ic.jc;
        this.Of.Pf.jh.zIndex = 0x64;
        this.Of.Nf.jh.zIndex = 0x1f4;
      }
      _0x52d572.prototype.hh = function (_0x2422be, _0x8d0586, _0xce6e56) {
        var _0x31a7bb = _0xce6e56.Zc;
        if (_0x31a7bb != null) {
          this.Of.Nf.kh(_0x31a7bb);
        }
        var _0x358b1f = _0x2422be == 0x10 && _0x8d0586 != null ? _0x8d0586.cd.$c : _0xce6e56.$c;
        if (_0x358b1f != null) {
          this.Of.Pf.kh(_0x358b1f);
        }
      };
      _0x52d572.prototype.Te = function (_0x4b8db8, _0x1b8ccd, _0x2c6f1c, _0x534deb) {
        if (!_0x534deb(_0x4b8db8.ch, _0x4b8db8.dh)) {
          this.Of.lh();
          return;
        }
        var _0x2660c = _0x4b8db8.fh * (0x1 + Math.cos(_0x4b8db8.Ae + _0x1b8ccd / 0xc8) * 0.3);
        if (_0x4b8db8.bh) {
          this.Of.mh(_0x4b8db8.ch, _0x4b8db8.dh, theoKzObjects.PortionSize * _0x4b8db8.eh, _0x4b8db8.Jb * 0x1, theoKzObjects.PortionAura * _0x2660c, 0.8 * _0x4b8db8.Jb);
        } else {
          this.Of.mh(_0x4b8db8.ch, _0x4b8db8.dh, theoKzObjects.FoodSize * _0x4b8db8.eh, _0x4b8db8.Jb * 0x1, theoKzObjects.FoodShadow * _0x2660c, 0.3 * _0x4b8db8.Jb);
        }
      };
      var _0x9cd4cb = function () {
        function _0x72e4b2(_0x28338a, _0x2e287c) {
          this.Nf = _0x28338a;
          this.Pf = _0x2e287c;
        }
        _0x72e4b2.prototype.mh = function (_0x5d1b64, _0x11c214, _0x53a8bf, _0x24dfbf, _0x5d1128, _0x37eb8f) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x5d1b64, _0x11c214);
          this.Nf.oh(_0x53a8bf);
          this.Nf.qh(_0x24dfbf);
          this.Pf.Mg(true);
          this.Pf.nh(_0x5d1b64, _0x11c214);
          this.Pf.oh(_0x5d1128);
          this.Pf.qh(_0x37eb8f);
        };
        _0x72e4b2.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        return _0x72e4b2;
      }();
      return _0x52d572;
    }();
    var _0x13c952 = function () {
      function _0x4b8471() {
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.wh = [];
      }
      function _0x20390d(_0x4ed05a, _0x1a14fe) {
        if (!(window.anApp = _0x47002d).p.W()) {
          return null;
        }
        var _0x2a0b7f = (window.anApp = _0x47002d).p.Ac();
        if (_0x1a14fe === _0xc00eb6.ia) {
          var _0x2c9739 = _0x455cce(_0x2a0b7f.skinArrayDict, _0x4ed05a);
          return _0x2c9739 < 0x0 ? null : _0x2a0b7f.skinArrayDict[_0x2c9739];
        }
        switch (_0x1a14fe) {
          case _0xc00eb6.ja:
            return _0x2a0b7f.eyesDict[_0x4ed05a];
          case _0xc00eb6.ka:
            return _0x2a0b7f.mouthDict[_0x4ed05a];
          case _0xc00eb6.la:
            return _0x2a0b7f.glassesDict[_0x4ed05a];
          case _0xc00eb6.ma:
            return _0x2a0b7f.hatDict[_0x4ed05a];
        }
        return null;
      }
      function _0x455cce(_0x2c3920, _0x108ba2) {
        for (var _0x2328a2 = 0x0; _0x2328a2 < _0x2c3920.length; _0x2328a2++) {
          if (_0x2c3920[_0x2328a2].id == _0x108ba2) {
            return _0x2328a2;
          }
        }
        return -0x1;
      }
      _0x4b8471.prototype.a = function () {};
      _0x4b8471.prototype.ha = function (_0x142d1c) {
        theoKzObjects.PropertyManager = this;
        localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
        switch (_0x142d1c) {
          case _0xc00eb6.ia:
            return this.rh;
          case _0xc00eb6.ja:
            return this.sh;
          case _0xc00eb6.ka:
            return this.th;
          case _0xc00eb6.la:
            return this.uh;
          case _0xc00eb6.ma:
            return this.vh;
        }
        return 0x0;
      };
      _0x4b8471.prototype.xh = function (_0x482a23) {
        this.wh.push(_0x482a23);
        this.yh();
      };
      _0x4b8471.prototype.Ia = function () {
        if (!(window.anApp = _0x47002d).p.W()) {
          return [0x20, 0x21, 0x22, 0x23][parseInt(Math.random() * [0x20, 0x21, 0x22, 0x23].length)];
        }
        var _0x27c06a = (window.anApp = _0x47002d).p.Ac();
        var _0x39d729 = [];
        for (var _0x4e2a8f = 0x0; _0x4e2a8f < _0x27c06a.skinArrayDict.length; _0x4e2a8f++) {
          var _0x5065f3 = _0x27c06a.skinArrayDict[_0x4e2a8f];
          if (this.Ja(_0x5065f3.id, _0xc00eb6.ia)) {
            _0x39d729.push(_0x5065f3);
          }
        }
        return _0x39d729.length === 0x0 ? 0x0 : _0x39d729[parseInt(_0x39d729.length * Math.random())].id;
      };
      _0x4b8471.prototype.zh = function () {
        if ((window.anApp = _0x47002d).p.W) {
          var _0x38a5bf = (window.anApp = _0x47002d).p.Ac().skinArrayDict;
          var _0x55a81f = _0x455cce(_0x38a5bf, this.rh);
          if (!(_0x55a81f < 0x0)) {
            for (var _0x57eb1f = _0x55a81f + 0x1; _0x57eb1f < _0x38a5bf.length; _0x57eb1f++) {
              if (this.Ja(_0x38a5bf[_0x57eb1f].id, _0xc00eb6.ia)) {
                this.rh = _0x38a5bf[_0x57eb1f].id;
                this.yh();
                return;
              }
            }
            for (var _0x14f9bc = 0x0; _0x14f9bc < _0x55a81f; _0x14f9bc++) {
              if (this.Ja(_0x38a5bf[_0x14f9bc].id, _0xc00eb6.ia)) {
                this.rh = _0x38a5bf[_0x14f9bc].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x4b8471.prototype.Ah = function () {
        if ((window.anApp = _0x47002d).p.W) {
          var _0x50d16b = (window.anApp = _0x47002d).p.Ac().skinArrayDict;
          var _0x42fa71 = _0x455cce(_0x50d16b, this.rh);
          if (!(_0x42fa71 < 0x0)) {
            for (var _0x3c870d = _0x42fa71 - 0x1; _0x3c870d >= 0x0; _0x3c870d--) {
              if (this.Ja(_0x50d16b[_0x3c870d].id, _0xc00eb6.ia)) {
                this.rh = _0x50d16b[_0x3c870d].id;
                this.yh();
                return;
              }
            }
            for (var _0x1d5ffb = _0x50d16b.length - 0x1; _0x1d5ffb > _0x42fa71; _0x1d5ffb--) {
              if (this.Ja(_0x50d16b[_0x1d5ffb].id, _0xc00eb6.ia)) {
                this.rh = _0x50d16b[_0x1d5ffb].id;
                this.yh();
                return;
              }
            }
          }
        }
      };
      _0x4b8471.prototype.Bh = function (_0x5d749d, _0x3155bf) {
        if (!(window.anApp = _0x47002d).p.W() || this.Ja(_0x5d749d, _0x3155bf)) {
          switch (_0x3155bf) {
            case _0xc00eb6.ia:
              if (this.rh != _0x5d749d) {
                this.rh = _0x5d749d;
                this.yh();
              }
              return;
            case _0xc00eb6.ja:
              if (this.sh != _0x5d749d) {
                this.sh = _0x5d749d;
                this.yh();
              }
              return;
            case _0xc00eb6.ka:
              if (this.th != _0x5d749d) {
                this.th = _0x5d749d;
                this.yh();
              }
              return;
            case _0xc00eb6.la:
              if (this.uh != _0x5d749d) {
                this.uh = _0x5d749d;
                this.yh();
              }
              return;
            case _0xc00eb6.ma:
              if (this.vh != _0x5d749d) {
                this.vh = _0x5d749d;
                this.yh();
              }
              return;
          }
        }
      };
      _0x4b8471.prototype.Ja = function (_0x4bde71, _0x5d2c73) {
        var _0xe14dfa = _0x20390d(_0x4bde71, _0x5d2c73);
        return _0xe14dfa != null && ((window.anApp = _0x47002d).u.P() ? _0xe14dfa.price == 0x0 && !_0xe14dfa.nonbuyable || (window.anApp = _0x47002d).u.Ch(_0x4bde71, _0x5d2c73) : _0xe14dfa.guest);
      };
      _0x4b8471.prototype.yh = function () {
        for (var _0xcbc135 = 0x0; _0xcbc135 < this.wh.length; _0xcbc135++) {
          this.wh[_0xcbc135]();
        }
      };
      return _0x4b8471;
    }();
    var _0xc00eb6 = function () {
      function _0x4974e8() {}
      _0x4974e8.ia = "SKIN";
      _0x4974e8.ja = 'EYES';
      _0x4974e8.ka = "MOUTH";
      _0x4974e8.la = 'GLASSES';
      _0x4974e8.ma = 'HAT';
      return _0x4974e8;
    }();
    var _0x4ea75a = function () {
      function _0x229d86(_0x338902, _0x305097, _0x2c47d4, _0x380e58, _0x1c36aa, _0x4b4415, _0x322a93, _0x404c79, _0x5dcf7a) {
        this.Hc = new _0x33b7ba._b(_0x338902, new _0x33b7ba.dc(_0x305097, _0x2c47d4, _0x380e58, _0x1c36aa));
        this.Dh = _0x305097;
        this.Eh = _0x2c47d4;
        this.Fh = _0x380e58;
        this.Gh = _0x1c36aa;
        this.Hh = _0x4b4415 || (_0x404c79 || _0x380e58) / 0x2;
        this.Ih = _0x322a93 || (_0x5dcf7a || _0x1c36aa) / 0x2;
        this.Jh = _0x404c79 || _0x380e58;
        this.Kh = _0x5dcf7a || _0x1c36aa;
        this.Lh = 0.5 - (this.Hh - this.Jh * 0.5) / this.Fh;
        this.Mh = 0.5 - (this.Ih - this.Kh * 0.5) / this.Gh;
        this.Nh = this.Fh / this.Jh;
        this.Oh = this.Gh / this.Kh;
      }
      return _0x229d86;
    }();
    var _0x5647dd = function () {
      function _0x283113() {
        this.fn_o = _0x1dba30;
        this.Fe = new _0x33b7ba._b(_0x33b7ba.$b.from('/images/bg-obstacle.png'));
        var _0x3ffcbe = _0x33b7ba.$b.from("/images/confetti-xmas2022.png");
        this.Ge = [new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80)), new _0x33b7ba._b(_0x3ffcbe, new _0x33b7ba.dc(0x0, 0x0, 0x80, 0x80))];
        this.Cf = new _0x33b7ba._b(_0x1dba30());
        this.Df = new _0x33b7ba._b(function () {
          var _0x173ffd = _0x33b7ba.$b.from("/images/bg-pattern-pow2-TEAM2.png");
          _0x173ffd.wrapMode = _0x33b7ba.kc.lc;
          return _0x173ffd;
        }());
        this.Af = new _0x33b7ba._b(_0x33b7ba.$b.from("/images/lens.png"));
        var _0x1816e6 = _0x33b7ba.$b.from("/images/wear-ability.png");
        var _0x4d3845 = _0x33b7ba.$b.from('https://i.imgur.com/EDt862t.png');
        var _0x37a8cf = _0x33b7ba.$b.from("https://i.imgur.com/U5sTlhC.png");
        var _0x32dabc = _0x33b7ba.$b.from('https://i.imgur.com/ub4ed3R.png');
        var _0x377b5f = _0x33b7ba.$b.from("https://i.imgur.com/LFiCido.png");
        this.X_x5 = new _0x4ea75a(_0x377b5f, 0x9c, 0x50, 0x57, 0x3c, 0xaa, 1.5, 0x80, 0x80);
        this.X_x10 = new _0x4ea75a(_0x377b5f, 0x9e, 0xc8, 0x5f, 0x37, 0x109, 128.5, 0x80, 0x80);
        this.X_xxlupa = new _0x4ea75a(_0x377b5f, 0x4f, 0x8, 0x4b, 0x4d, 0x109, 1.5, 0x80, 0x80);
        this.Id_mobileguia = new _0x4ea75a(_0x32dabc, 0x0, 0x0, 0x57, 0x4a, 0x15e, 0x3f, 0x80, 0x80);
        this.emoji_headshot = new _0x4ea75a(_0x4d3845, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.emoji_kill = new _0x4ea75a(_0x37a8cf, 0x0, 0x0, 0x100, 0x100, 170.5, -163.5, 0x80, 0x80);
        this.Ph = new _0x4ea75a(_0x1816e6, 0x9e, 0x56, 0x43, 0x7c, 0x94, 63.5, 0x80, 0x80);
        this.Qh = new _0x4ea75a(_0x1816e6, 0x9e, 0x4, 0x57, 0x4a, 0xcb, 63.5, 0x80, 0x80);
        this.Rh = new _0x4ea75a(_0x377b5f, 0x9c, 0x8c, 0x57, 0x3c, 0xaa, 128.5, 0x80, 0x80);
        this.Ug = function () {
          var _0x3cb535 = window.document.createElement("canvas");
          _0x3cb535.width = 0x50;
          _0x3cb535.height = 0x50;
          return {
            'te': _0x3cb535,
            'Tg': _0x3cb535.getContext('2d'),
            'Hc': new _0x33b7ba._b(_0x33b7ba.$b.from(_0x3cb535))
          };
        }();
        this.Bd = {};
        this.yd = {};
        this.Sh = [];
        this.Th = null;
      }
      function _0x1dba30(_0x59027c) {
        var _0x1b468b = _0x33b7ba.$b.from(_0x59027c || "https://i.imgur.com/8ubx4RA.png");
        _0x1b468b.wrapMode = _0x33b7ba.kc.lc;
        return _0x1b468b;
      }
      _0x283113.prototype.a = function (_0x27ac56) {
        function _0x51298b() {
          if (--_0x2a74d5 == 0x0) {
            _0x27ac56();
          }
        }
        var _0x2a74d5 = 0x4;
        this.Bd = {};
        _0x51298b();
        this.yd = {};
        _0x51298b();
        this.Sh = [];
        _0x51298b();
        this.Th = null;
        _0x51298b();
      };
      return _0x283113;
    }();
    var _0x3b48be = function () {
      function _0x5bd7fe() {
        this.H = new _0x5c5e7d();
        this.F = new _0x934262();
        this.Uh = new _0x35bbae();
        this.Vh = new _0xd57a57();
        this.Wh = new _0x5c98a7();
        this.Xh = new _0x31d0e3();
        this.Yh = new _0x12bccc();
        this.Zh = new _0x1e31f1();
        this.xa = new _0x39c256();
        this.$h = new _0xae2b17();
        this._h = new _0x438eda();
        this.ai = new _0x72820c();
        this.aa = new _0x4f763e();
        this.ua = new _0x3bcbf9();
        this.pa = new _0x21e4ca();
        this.bi = [];
        this.ci = null;
      }
      function _0x35fa41(_0xc757d8, _0x5efb59) {
        if (_0x5efb59 != 0x0) {
          var _0x556ca0 = _0xc757d8[_0x5efb59];
          _0x4d4737(_0xc757d8, 0x0, 0x1, _0x5efb59);
          _0xc757d8[0x0] = _0x556ca0;
        }
      }
      function _0x4cd26c(_0x514e36, _0x318e95) {
        if (_0x318e95 != _0x514e36.length + 0x1) {
          var _0x575516 = _0x514e36[_0x318e95];
          _0x4d4737(_0x514e36, _0x318e95 + 0x1, _0x318e95, _0x514e36.length - _0x318e95 - 0x1);
          _0x514e36[_0x514e36.length - 0x1] = _0x575516;
        }
      }
      function _0x2e71e0(_0x1b4e16, _0x3ecee4) {
        for (var _0x4c6517 = 0x0; _0x4c6517 < _0x1b4e16.length; _0x4c6517++) {
          if (_0x1b4e16[_0x4c6517] == _0x3ecee4) {
            return _0x4c6517;
          }
        }
        return -0x1;
      }
      _0x5bd7fe.prototype.a = function () {
        this.bi = [this.H, this.F, this.Uh, this.Vh, this.Wh, this.Xh, this.Yh, this.Zh, this.xa, this.$h, this._h, this.ai, this.aa, this.ua, this.pa];
        for (var _0x1b9bbe = 0x0; _0x1b9bbe < this.bi.length; _0x1b9bbe++) {
          this.bi[_0x1b9bbe].a();
        }
        this.ci = new _0xa8aabd(_0x5670dc.di);
      };
      _0x5bd7fe.prototype.Qa = function (_0x434b66, _0x579e41) {
        for (var _0x508ac8 = this.bi.length - 0x1; _0x508ac8 >= 0x0; _0x508ac8--) {
          this.bi[_0x508ac8].Pa(_0x434b66, _0x579e41);
        }
        if (this.bi[0x0] != this.H && this.bi[0x0] != this.pa && this.ci != null) {
          this.ci.Pa(_0x434b66, _0x579e41);
        }
      };
      _0x5bd7fe.prototype.Ra = function () {
        for (var _0x3dd77f = this.bi.length - 0x1; _0x3dd77f >= 0x0; _0x3dd77f--) {
          this.bi[_0x3dd77f].Ra();
        }
        if (this.ci != null) {
          this.ci.Ra();
        }
      };
      _0x5bd7fe.prototype.I = function (_0x387bf6) {
        var _0x21a681 = _0x2e71e0(this.bi, _0x387bf6);
        if (!(_0x21a681 < 0x0)) {
          this.bi[0x0].ei();
          _0x35fa41(this.bi, _0x21a681);
          this.fi();
        }
      };
      _0x5bd7fe.prototype.gi = function () {
        this.bi[0x0].ei();
        do {
          _0x4cd26c(this.bi, 0x0);
        } while (this.bi[0x0].rc != 0x1);
        this.fi();
      };
      _0x5bd7fe.prototype.fi = function () {
        var _0x37dbba = this.bi[0x0];
        _0x37dbba.ii();
        _0x37dbba.ji();
        this.ki();
      };
      _0x5bd7fe.prototype.li = function () {
        return this.bi.length != 0x0 && this.bi[0x0].rc == 0x1 && this.aa.mi();
      };
      _0x5bd7fe.prototype.ki = function () {
        if (this.li()) {
          this.I(this.aa);
        }
      };
      return _0x5bd7fe;
    }();
    var _0x1cf8c7 = function () {
      function _0x409fd5() {
        this.ag = [];
        this.$f = [];
      }
      _0x409fd5.Vg = function (_0x510c32, _0x3f5d9b) {
        return {
          'bg': _0x510c32,
          'M': _0x3f5d9b
        };
      };
      _0x409fd5.Wg = function (_0x164563, _0xa869db) {
        return {
          '_f': _0x164563,
          'M': _0xa869db
        };
      };
      return _0x409fd5;
    }();
    var _0x150fb3 = function () {
      function _0x2d34e5() {
        this.ni = [];
        this.oi = [];
        this.pi = [];
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
      }
      _0x2d34e5.prototype.a = function () {
        this.vi();
      };
      _0x2d34e5.prototype.X = function () {
        return this.qi ? this.si.userId : '';
      };
      _0x2d34e5.prototype.wi = function () {
        return this.qi ? this.si.username : '';
      };
      _0x2d34e5.prototype.ga = function () {
        return this.qi ? this.si.nickname : '';
      };
      _0x2d34e5.prototype.xi = function () {
        return this.qi ? this.si.avatarUrl : "/images/guest-avatar-xmas2022.png";
      };
      _0x2d34e5.prototype.yi = function () {
        return this.qi && this.si.isBuyer;
      };
      _0x2d34e5.prototype.Z = function () {
        return this.qi && this.si.isConsentGiven;
      };
      _0x2d34e5.prototype.zi = function () {
        return this.qi ? this.si.coins : 0x0;
      };
      _0x2d34e5.prototype.Ai = function () {
        return this.qi ? this.si.level : 0x1;
      };
      _0x2d34e5.prototype.Bi = function () {
        return this.qi ? this.si.expOnLevel : 0x0;
      };
      _0x2d34e5.prototype.Ci = function () {
        return this.qi ? this.si.expToNext : 0x32;
      };
      _0x2d34e5.prototype.Di = function () {
        return this.qi ? this.si.skinId : 0x0;
      };
      _0x2d34e5.prototype.Ei = function () {
        return this.qi ? this.si.eyesId : 0x0;
      };
      _0x2d34e5.prototype.Fi = function () {
        return this.qi ? this.si.mouthId : 0x0;
      };
      _0x2d34e5.prototype.Gi = function () {
        return this.qi ? this.si.glassesId : 0x0;
      };
      _0x2d34e5.prototype.Hi = function () {
        return this.qi ? this.si.hatId : 0x0;
      };
      _0x2d34e5.prototype.Ii = function () {
        return this.qi ? this.si.highScore : 0x0;
      };
      _0x2d34e5.prototype.Ji = function () {
        return this.qi ? this.si.bestSurvivalTimeSec : 0x0;
      };
      _0x2d34e5.prototype.Ki = function () {
        return this.qi ? this.si.kills : 0x0;
      };
      _0x2d34e5.prototype.Li = function () {
        return this.qi ? this.si.headShots : 0x0;
      };
      _0x2d34e5.prototype.Mi = function () {
        return this.qi ? this.si.sessionsPlayed : 0x0;
      };
      _0x2d34e5.prototype.Ni = function () {
        return this.qi ? this.si.totalPlayTimeSec : 0x0;
      };
      _0x2d34e5.prototype.Oi = function () {
        return this.qi ? this.si.regDate : {};
      };
      _0x2d34e5.prototype.V = function (_0x29cef7) {
        this.ni.push(_0x29cef7);
        _0x29cef7();
      };
      _0x2d34e5.prototype.Pi = function (_0x52d35c) {
        this.oi.push(_0x52d35c);
        _0x52d35c();
      };
      _0x2d34e5.prototype.Qi = function (_0x227fca) {
        this.pi.push(_0x227fca);
      };
      _0x2d34e5.prototype.Ch = function (_0x21b470, _0xdfb920) {
        var _0x4bbc79 = this.si.propertyList.concat(theoKzObjects.pL || []);
        if (!_0x4bbc79) {
          return false;
        }
        for (var _0x1316ad = 0x0; _0x1316ad < _0x4bbc79.length; _0x1316ad++) {
          var _0x25821a = _0x4bbc79[_0x1316ad];
          if (_0x25821a.id == _0x21b470 && _0x25821a.type === _0xdfb920) {
            return true;
          }
        }
        return false;
      };
      _0x2d34e5.prototype.P = function () {
        return this.qi;
      };
      _0x2d34e5.prototype.ea = function () {
        return this.ri;
      };
      _0x2d34e5.prototype.Q = function (_0x2f3fbd) {
        var _0x59b6f3 = this;
        if (this.qi) {
          this.Ri(function (_0x4c504a) {
            if (_0x4c504a) {
              var _0x40d68d = _0x59b6f3.zi();
              var _0x22ce60 = _0x59b6f3.Ai();
              _0x59b6f3.si = _0x4c504a;
              _0x3f9d14(_0x59b6f3.si);
              _0x59b6f3.Si();
              var _0x3061f9 = _0x59b6f3.zi();
              var _0x1002d7 = _0x59b6f3.Ai();
              if (_0x1002d7 > 0x1 && _0x1002d7 != _0x22ce60) {
                (window.anApp = _0x47002d).s.aa.Ti(new _0xdb4432(_0x1002d7));
              }
              var _0x4d13c4 = _0x3061f9 - _0x40d68d;
              if (_0x4d13c4 >= 0x14) {
                (window.anApp = _0x47002d).s.aa.Ti(new _0x597ad6(_0x4d13c4));
              }
            }
            if (_0x2f3fbd) {
              _0x2f3fbd();
            }
          });
        }
      };
      _0x2d34e5.prototype.Ri = function (_0x1ff964) {
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/getUserData", function (_0x239564) {
          _0x1ff964(_0x239564.user_data);
        });
      };
      _0x2d34e5.prototype.Ui = function (_0x36a604, _0x597624, _0x401968) {
        var _0x3ea18a = this;
        $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/buyProperty?id=" + _0x36a604 + '&type=' + _0x597624, function (_0x37e049) {
          if (_0x37e049.code == 0x4b0) {
            _0x3ea18a.Q(_0x401968);
          } else {
            _0x401968();
          }
        }).fail(function () {
          _0x401968();
        });
      };
      _0x2d34e5.prototype.Vi = function () {
        var _0x394f7c = this;
        this.Wi();
        if (typeof FB == "undefined") {
          this.Xi();
          return;
        }
        FB.getLoginStatus(function (_0x8d9045) {
          if (_0x8d9045.status === "connected") {
            if (_0x8d9045.authResponse && _0x8d9045.authResponse.accessToken) {
              _0x394f7c.Yi('facebook', "fb_" + _0x8d9045.authResponse.accessToken);
            } else {
              _0x394f7c.Xi();
            }
            return;
          }
          FB.login(function (_0x81bf24) {
            if (_0x81bf24.status === "connected" && _0x81bf24.authResponse && _0x81bf24.authResponse.accessToken) {
              _0x394f7c.Yi('facebook', "fb_" + _0x81bf24.authResponse.accessToken);
            } else {
              _0x394f7c.Xi();
            }
          });
        });
      };
      _0x2d34e5.prototype.Zi = function () {
        var _0x32fc20 = this;
        this.Wi();
        if (GoogleAuth === undefined) {
          this.Xi();
          return;
        }
        console.log('gsi:l');
        GoogleAuth.then(function () {
          console.log("gsi:then");
          if (GoogleAuth.isSignedIn.get()) {
            console.log('gsi:sil');
            var _0x1af4dc = GoogleAuth.currentUser.get();
            _0x32fc20.Yi("google", 'gg_' + _0x1af4dc.getAuthResponse().id_token);
            return;
          }
          GoogleAuth.signIn().then(function (_0x187918) {
            if (_0x187918.error !== undefined) {
              console.log("gsi:e: " + _0x187918.error);
              _0x32fc20.Xi();
              return;
            } else {
              if (_0x187918.isSignedIn()) {
                console.log("gsi:s");
                _0x32fc20.Yi("google", "gg_" + _0x187918.getAuthResponse().id_token);
                return;
              } else {
                console.log("gsi:c");
                _0x32fc20.Xi();
                return;
              }
            }
          });
        });
      };
      _0x2d34e5.prototype.Wi = function () {
        console.log("iSI: " + this.qi);
        var _0x3e975b = this.ri;
        var _0x11726e = this.ti;
        this.qi = false;
        this.ri = 'guest';
        this.si = {};
        this.ti = null;
        _0x1b7784(_0x301e0d.Oe, '', 0x3c);
        switch (_0x11726e) {
          case "facebook":
            this.$i();
            break;
          case "google":
            this._i();
        }
        if (_0x3e975b !== this.ri) {
          this.aj();
        } else {
          this.Si();
        }
      };
      _0x2d34e5.prototype.bj = function () {
        console.log('dA');
        if (this.qi) {
          $.get("https://gateway.wormate.io/pub/wuid/" + this.ri + "/deleteAccount", function (_0x383308) {
            if (_0x383308.code === 0x4b0) {
              console.log("dA: OK");
            } else {
              console.log("dA: NO");
            }
          }).fail(function () {
            console.log("dA: FAIL");
          });
        }
      };
      _0x2d34e5.prototype.vi = function () {
        console.log('rs');
        var _0xae7f25 = _0x22dc20(_0x301e0d.Oe);
        var _0x4de349 = this;
        if (_0xae7f25 == "facebook") {
          console.log("rs:fb");
          (function _0x594e5e() {
            if (typeof FB != "undefined") {
              _0x4de349.Vi();
            } else {
              setTimeout(_0x594e5e, 0x64);
            }
          })();
        } else if (_0xae7f25 == 'google') {
          console.log("rs:gg");
          (function _0xeac649() {
            if (GoogleAuth !== undefined) {
              _0x4de349.Zi();
            } else {
              setTimeout(_0xeac649, 0x64);
            }
          })();
        } else {
          console.log("rs:lo");
          this.Wi();
        }
      };
      _0x2d34e5.prototype.aj = function () {
        var _0x5eb2d1 = 0x0;
        for (; _0x5eb2d1 < this.ni.length; _0x5eb2d1++) {
          this.ni[_0x5eb2d1]();
        }
        this.Si();
      };
      _0x2d34e5.prototype.Si = function () {
        var _0x500125 = 0x0;
        for (; _0x500125 < this.oi.length; _0x500125++) {
          this.oi[_0x500125]();
        }
        var _0x1c8020 = this.pi;
        this.pi = [];
        var _0x1203c8 = 0x0;
        for (; _0x1203c8 < _0x1c8020.length; _0x1203c8++) {
          _0x1c8020[_0x1203c8]();
        }
      };
      _0x2d34e5.prototype.Yi = function (_0x2c3185, _0x88ff3f) {
        var _0x5033df = this;
        var _0x44e104 = 0x0;
        var _0x5d70f4 = localStorage.getItem('token__gg');
        if (_0x5d70f4) {
          console.log("Using the stored token:", _0x5d70f4);
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x5d70f4 + "/login", function (_0x52708d) {
            if (_0x52708d && _0x52708d.code === 0x5cd && _0x52708d.error === "expired_token") {
              _0x44e104++;
              console.log("auto login attempt:", _0x44e104);
              $("#login-view").html("<h2>Auto Login Google Worm UP  : " + _0x44e104 + "</h2>");
              _0x7da399();
            } else {
              _0x801122(_0x52708d);
            }
          }).fail(function () {
            _0x7da399();
          });
        } else {
          _0x7da399();
        }
        function _0x7da399() {
          console.log("Fetching a new token...");
          $.get("https://gateway.wormate.io/pub/wuid/" + _0x88ff3f + "/login", function (_0x4f222b) {
            if (_0x4f222b && _0x4f222b.code === 0x5cd && _0x4f222b.error === 'expired_token') {
              _0x44e104++;
              console.log("auto login attempt:", _0x44e104);
              $("#login-view").html("<h2>Auto Login Google Wormate.io  : " + _0x44e104 + '</h2>');
              _0x7da399();
            } else {
              _0x801122(_0x4f222b);
            }
          }).fail(function () {
            _0x5033df.Xi();
          });
        }
        function _0x801122(_0x2525e0) {
          if (_0x2525e0 && _0x2525e0.user_data) {
            _0x3f9d14(_0x2525e0.user_data);
            var _0x2967dd = this.ri;
            _0x5033df.qi = true;
            _0x5033df.ri = _0x88ff3f;
            _0x5033df.si = _0x2525e0.user_data;
            theoKzObjects.FB_UserID = _0x2525e0.user_data.userId;
            _0x5033df.ti = _0x2c3185;
            _0x1b7784(_0x301e0d.Oe, _0x5033df.ti, 0x3c);
            _0x15cab6();
            for (var _0x46765a = 0x0; _0x46765a < clientes.clientesActivos.length; _0x46765a++) {
              var _0x1c3c52 = clientes.clientesActivos[_0x46765a].cliente_NOMBRE;
              var _0x2f384a = clientes.clientesActivos[_0x46765a].cliente_ID;
              var _0x5830c0 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin;
              var _0x35c7a0 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin1;
              var _0x3843ff = clientes.clientesActivos[_0x46765a].Client_VisibleSkin2;
              var _0x23c8b0 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin3;
              var _0xec894c = clientes.clientesActivos[_0x46765a].Client_VisibleSkin4;
              var _0x3b0ae6 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin5;
              var _0x4a9b68 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin6;
              var _0x19c8f1 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin7;
              var _0x1d8d38 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin8;
              var _0x12a891 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin9;
              var _0x2f42dd = clientes.clientesActivos[_0x46765a].Client_VisibleSkin10;
              var _0x2bc762 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin11;
              var _0x189074 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin12;
              var _0x23f99f = clientes.clientesActivos[_0x46765a].Client_VisibleSkin13;
              var _0xc86f6c = clientes.clientesActivos[_0x46765a].Client_VisibleSkin14;
              var _0x3015b6 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin15;
              var _0x444ec6 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin16;
              var _0x287406 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin17;
              var _0x51cde7 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin18;
              var _0x540972 = clientes.clientesActivos[_0x46765a].Client_VisibleSkin19;
              var _0x4b342f = clientes.clientesActivos[_0x46765a].Client_VisibleSkin20;
              var _0x2e1891 = clientes.clientesActivos[_0x46765a].Client_KeyAccecs;
              var _0x1b6eac = clientes.clientesActivos[_0x46765a].cliente_DateExpired;
            }
            theoKzObjects.loading = false;
            if (_0x2967dd !== _0x88ff3f) {
              _0x5033df.aj();
            } else {
              _0x5033df.Si();
            }
            localStorage.setItem("token__gg", _0x88ff3f);
          } else {
            _0x5033df.Xi();
          }
        }
      };
      _0x2d34e5.prototype.Xi = function () {
        this.Wi();
      };
      _0x2d34e5.prototype.$i = function () {
        console.log("lo:fb");
        FB.logout(function () {});
      };
      _0x2d34e5.prototype._i = function () {
        console.log('lo:gg');
        GoogleAuth.signOut();
      };
      return _0x2d34e5;
    }();
    var _0x556099 = function () {
      function _0x2ea1b7() {
        this.cj = {};
        this.cj[_0x1ec328] = [0x1, 0.5, 0.25, 0.5];
        this.cj[_0x50f79c] = _0x33b7ba._b.WHITE;
        this.cj[_0x367a3c] = [0x0, 0x0];
        this.cj[_0xd3cca7] = [0x0, 0x0];
        var _0x49e118 = _0x33b7ba.cc.from(_0x39582d, _0x30d22d, this.cj);
        this.zf = new _0x33b7ba.hc(_0x468f25, _0x49e118);
      }
      var _0x27e4ee = 'a1_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x55e7e4 = "a2_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1ec328 = "u3_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x50f79c = 'u4_' + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x367a3c = "u5_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0xd3cca7 = "u6_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x1e4e17 = "v1_" + Math.random().toString(0x24).substring(0x2, 0xf);
      var _0x468f25 = new _0x33b7ba.gc().addAttribute(_0x27e4ee, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2).addAttribute(_0x55e7e4, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 0x2);
      var _0x39582d = "precision mediump float;attribute vec2 " + _0x27e4ee + ";attribute vec2 " + _0x55e7e4 + ";uniform mat3 " + "translationMatrix" + ";uniform mat3 " + 'projectionMatrix' + ";varying vec2 " + _0x1e4e17 + ";void main(){" + _0x1e4e17 + '=' + _0x55e7e4 + ";gl_Position=vec4((" + 'projectionMatrix' + '*' + "translationMatrix" + "*vec3(" + _0x27e4ee + ',1.0)).xy,0.0,1.0);}';
      var _0x30d22d = "precision highp float;varying vec2 " + _0x1e4e17 + ";uniform vec4 " + _0x1ec328 + ";uniform sampler2D " + _0x50f79c + ";uniform vec2 " + _0x367a3c + ";uniform vec2 " + _0xd3cca7 + ";void main(){vec2 coord=" + _0x1e4e17 + '*' + _0x367a3c + '+' + _0xd3cca7 + ";vec4 v_color_mix=" + _0x1ec328 + ';gl_FragColor=texture2D(' + _0x50f79c + ",coord)*0.3+v_color_mix.a*vec4(v_color_mix.rgb,0.0);}";
      _0x2ea1b7.prototype.Hf = function (_0x4f71e6, _0xbb627d, _0x298211, _0x267fd9) {
        var _0x3bd354 = this.cj[_0x1ec328];
        _0x3bd354[0x0] = _0x4f71e6;
        _0x3bd354[0x1] = _0xbb627d;
        _0x3bd354[0x2] = _0x298211;
        _0x3bd354[0x3] = _0x267fd9;
      };
      _0x2ea1b7.prototype.Bf = function (_0x345d24) {
        this.cj[_0x50f79c] = _0x345d24;
      };
      _0x2ea1b7.prototype.Te = function (_0x66d397, _0x271481, _0x1b5b9f, _0x340bc3) {
        this.zf.position.x = _0x66d397;
        this.zf.position.y = _0x271481;
        this.zf.scale.x = _0x1b5b9f;
        this.zf.scale.y = _0x340bc3;
        var _0x418a76 = this.cj[_0x367a3c];
        _0x418a76[0x0] = _0x1b5b9f * 0.2520615384615385;
        _0x418a76[0x1] = _0x340bc3 * 0.4357063736263738;
        var _0x53734a = this.cj[_0xd3cca7];
        _0x53734a[0x0] = _0x66d397 * 0.2520615384615385;
        _0x53734a[0x1] = _0x271481 * 0.4357063736263738;
      };
      return _0x2ea1b7;
    }();
    var _0x3cd4bf = function () {
      function _0x308b41() {
        this.jh = new _0x33b7ba.ec();
        this.dj = 0x0;
        this.ej = 0x0;
      }
      _0x308b41.prototype.kh = function (_0x13e580) {
        if (_0x13e580 && _0x13e580.Hc) {
          this.jh.texture = _0x13e580.Hc;
          this.jh.anchor.set(_0x13e580.Lh, _0x13e580.Mh);
          this.dj = _0x13e580.Nh;
          this.ej = _0x13e580.Oh;
        }
      };
      _0x308b41.prototype.oh = function (_0x5240ff) {
        this.jh.width = _0x5240ff * this.dj;
        this.jh.height = _0x5240ff * this.ej;
      };
      _0x308b41.prototype.fj = function (_0x1eea28) {
        this.jh.rotation = _0x1eea28;
      };
      _0x308b41.prototype.nh = function (_0x584f4b, _0x26e16d) {
        this.jh.position.set(_0x584f4b, _0x26e16d);
      };
      _0x308b41.prototype.Mg = function (_0xebfa22) {
        this.jh.visible = _0xebfa22;
      };
      _0x308b41.prototype.gj = function () {
        return this.jh.visible;
      };
      _0x308b41.prototype.qh = function (_0x514d89) {
        this.jh.alpha = _0x514d89;
      };
      _0x308b41.prototype.Mf = function () {
        return this.jh;
      };
      _0x308b41.prototype.ih = function () {
        _0x4cedc9(this.jh);
      };
      return _0x308b41;
    }();
    var _0x26f19e = function () {
      function _0x1c9b5d(_0x4eba8f) {
        this.fb = _0x4eba8f;
        this.Mb = new _0x26f19e.Config();
        this.Hb = false;
        this.Ib = true;
        this.hj = false;
        this.Db = 0x0;
        this.ij = 0x0;
        this.Jb = 0x1;
        this.jj = 0x0;
        this.M = 0x0;
        this.Ff = {};
        this.kj = 0x0;
        this.lj = new Float32Array(400);
        this.mj = new Float32Array(400);
        this.nj = new Float32Array(400);
        this.oj = null;
        this.pj = null;
        this.qj = null;
        this.Tb();
      }
      _0x1c9b5d.prototype.Kb = function () {
        if (this.pj != null) {
          _0x4cedc9(this.pj.Rf);
        }
        if (this.qj != null) {
          _0x4cedc9(this.qj);
        }
      };
      _0x1c9b5d.prototype.Tb = function () {
        this.Ig(0.25);
        this.Mb.ad = '';
        this.Ib = true;
        this.Ff = {};
        this.Mg(false);
      };
      _0x1c9b5d.prototype.Fg = function (_0x4c1d98) {
        this.Mb = _0x4c1d98;
        this.rj(this.Hb);
      };
      _0x1c9b5d.prototype.Mg = function (_0xdd4572) {
        var _0xb66427 = this.Hb;
        this.Hb = _0xdd4572;
        this.rj(_0xb66427);
      };
      _0x1c9b5d.prototype.Ig = function (_0x54a1b9) {
        this.M = _0x54a1b9 * 0x32;
        var _0x480b91 = _0x54a1b9;
        if (_0x54a1b9 > this.fb.cf) {
          _0x480b91 = Math.atan((_0x54a1b9 - this.fb.cf) / this.fb.df) * this.fb.df + this.fb.cf;
        }
        var _0x32319b = Math.sqrt(Math.pow(_0x480b91 * 0x5, 0.707106781186548) * 0x4 + 0x19);
        var _0x24ed22 = Math.min(0xc8, Math.max(0x3, (_0x32319b - 0x5) * 0x5 + 0x1));
        var _0x4514b0 = this.kj;
        this.Db = (0x5 + _0x32319b * 0.9) * 0.025;
        this.kj = Math.floor(_0x24ed22);
        this.ij = _0x24ed22 - this.kj;
        if (_0x4514b0 > 0x0 && _0x4514b0 < this.kj) {
          var _0x3c91e6 = this.lj[_0x4514b0 * 0x2 - 0x2];
          var _0x45785e = this.lj[_0x4514b0 * 0x2 - 0x1];
          var _0x35e610 = this.mj[_0x4514b0 * 0x2 - 0x2];
          var _0x20f2cf = this.mj[_0x4514b0 * 0x2 - 0x1];
          var _0x59d798 = this.nj[_0x4514b0 * 0x2 - 0x2];
          var _0x3b1263 = this.nj[_0x4514b0 * 0x2 - 0x1];
          for (var _0x411925 = _0x4514b0; _0x411925 < this.kj; _0x411925++) {
            this.lj[_0x411925 * 0x2] = _0x3c91e6;
            this.lj[_0x411925 * 0x2 + 0x1] = _0x45785e;
            this.mj[_0x411925 * 0x2] = _0x35e610;
            this.mj[_0x411925 * 0x2 + 0x1] = _0x20f2cf;
            this.nj[_0x411925 * 0x2] = _0x59d798;
            this.nj[_0x411925 * 0x2 + 0x1] = _0x3b1263;
          }
        }
      };
      _0x1c9b5d.prototype.Lg = function (_0x3640e6, _0x523452) {
        this.kj = _0x523452;
        for (var _0x59860b = 0x0; _0x59860b < this.kj; _0x59860b++) {
          this.lj[_0x59860b * 0x2] = this.mj[_0x59860b * 0x2] = this.nj[_0x59860b * 0x2] = _0x3640e6();
          this.lj[_0x59860b * 0x2 + 0x1] = this.mj[_0x59860b * 0x2 + 0x1] = this.nj[_0x59860b * 0x2 + 0x1] = _0x3640e6();
        }
      };
      _0x1c9b5d.prototype.Kg = function (_0x35c606, _0x43b7f6, _0x24f264) {
        this.hj = _0x24f264;
        for (var _0x4f8edc = 0x0; _0x4f8edc < this.kj; _0x4f8edc++) {
          this.lj[_0x4f8edc * 0x2] = this.mj[_0x4f8edc * 0x2];
          this.lj[_0x4f8edc * 0x2 + 0x1] = this.mj[_0x4f8edc * 0x2 + 0x1];
        }
        var _0x54731c = _0x35c606 - this.mj[0x0];
        var _0x107561 = _0x43b7f6 - this.mj[0x1];
        this.sj(_0x54731c, _0x107561, this.kj, this.mj);
      };
      _0x1c9b5d.prototype.sj = function (_0xcaf04, _0x1013bc, _0x3603bc, _0x414d87) {
        var _0x26c3fd = Math.hypot(_0xcaf04, _0x1013bc);
        if (!(_0x26c3fd <= 0x0)) {
          var _0x230757 = _0x414d87[0x0];
          var _0x3b9837 = undefined;
          _0x414d87[0x0] += _0xcaf04;
          var _0x25ab0f = _0x414d87[0x1];
          var _0x4955e6 = undefined;
          _0x414d87[0x1] += _0x1013bc;
          var _0x27ebc5 = this.Db / (this.Db + _0x26c3fd);
          var _0x307376 = 0x1 - _0x27ebc5 * 0x2;
          var _0x48d2bb = 0x1;
          for (var _0x38ba9f = _0x3603bc - 0x1; _0x48d2bb < _0x38ba9f; _0x48d2bb++) {
            _0x3b9837 = _0x414d87[_0x48d2bb * 0x2];
            _0x414d87[_0x48d2bb * 0x2] = _0x414d87[_0x48d2bb * 0x2 - 0x2] * _0x307376 + (_0x3b9837 + _0x230757) * _0x27ebc5;
            _0x230757 = _0x3b9837;
            _0x4955e6 = _0x414d87[_0x48d2bb * 0x2 + 0x1];
            _0x414d87[_0x48d2bb * 0x2 + 0x1] = _0x414d87[_0x48d2bb * 0x2 - 0x1] * _0x307376 + (_0x4955e6 + _0x25ab0f) * _0x27ebc5;
            _0x25ab0f = _0x4955e6;
          }
          _0x27ebc5 = this.ij * this.Db / (this.ij * this.Db + _0x26c3fd);
          _0x307376 = 0x1 - _0x27ebc5 * 0x2;
          _0x414d87[_0x3603bc * 0x2 - 0x2] = _0x414d87[_0x3603bc * 0x2 - 0x4] * _0x307376 + (_0x414d87[_0x3603bc * 0x2 - 0x2] + _0x230757) * _0x27ebc5;
          _0x414d87[_0x3603bc * 0x2 - 0x1] = _0x414d87[_0x3603bc * 0x2 - 0x3] * _0x307376 + (_0x414d87[_0x3603bc * 0x2 - 0x1] + _0x25ab0f) * _0x27ebc5;
        }
      };
      _0x1c9b5d.prototype.Gf = function () {
        return {
          'x': this.nj[0x0],
          'y': this.nj[0x1]
        };
      };
      _0x1c9b5d.prototype.Hg = function (_0x4a9f11, _0x2ff1d3) {
        var _0xdc80de = 0xf4240;
        var _0x297bf9 = _0x4a9f11;
        var _0x4c5d93 = _0x2ff1d3;
        for (var _0x1bd123 = 0x0; _0x1bd123 < this.kj; _0x1bd123++) {
          var _0x5b221c = this.nj[_0x1bd123 * 0x2];
          var _0x9599dd = this.nj[_0x1bd123 * 0x2 + 0x1];
          var _0x41b267 = Math.hypot(_0x4a9f11 - _0x5b221c, _0x2ff1d3 - _0x9599dd);
          if (_0x41b267 < _0xdc80de) {
            _0xdc80de = _0x41b267;
            _0x297bf9 = _0x5b221c;
            _0x4c5d93 = _0x9599dd;
          }
        }
        return {
          'x': _0x297bf9,
          'y': _0x4c5d93,
          'distance': _0xdc80de
        };
      };
      _0x1c9b5d.prototype.vb = function (_0x467951) {
        this.oj = _0x467951;
      };
      _0x1c9b5d.prototype.Fb = function (_0x5b41df, _0x38facd) {
        this.Jb = (this.Ib ? this.hj ? 0.9 + Math.cos(_0x5b41df / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0) > this.Jb ? Math.min(this.Ib ? this.hj ? 0.9 + Math.cos(_0x5b41df / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb + _0x38facd * 0.00125) : Math.max(this.Ib ? this.hj ? 0.9 + Math.cos(_0x5b41df / 0x190 * Math.PI) * 0.1 : 0x1 : 0x0, this.Jb - _0x38facd * 0.00125);
        this.jj = (this.Ib ? this.hj ? 0x1 : 0x0 : 0x1) > this.jj ? Math.min(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj + _0x38facd * 0.0025) : Math.max(this.Ib ? this.hj ? 0x1 : 0x0 : 0x1, this.jj - _0x38facd * 0.0025);
        if (this.pj != null) {
          this.pj.Rf.alpha = this.Jb;
        }
        if (this.qj != null) {
          this.qj.alpha = this.Jb;
        }
      };
      _0x1c9b5d.prototype.Gb = function (_0x2af5d4, _0x5b3630, _0x33b2c4, _0x3d9bce) {
        if (this.Hb && this.Ib) {
          var _0x130a61 = Math.pow(0.11112, _0x5b3630 / 0x5f);
          for (var _0x14cce6 = 0x0; _0x14cce6 < this.kj; _0x14cce6++) {
            var _0x131f84 = this.lj[_0x14cce6 * 0x2] * (0x1 - _0x33b2c4) + this.mj[_0x14cce6 * 0x2] * _0x33b2c4;
            var _0x5b8f38 = this.lj[_0x14cce6 * 0x2 + 0x1] * (0x1 - _0x33b2c4) + this.mj[_0x14cce6 * 0x2 + 0x1] * _0x33b2c4;
            this.nj[_0x14cce6 * 0x2] = _0x131f84 * (0x1 - _0x130a61) + this.nj[_0x14cce6 * 0x2] * _0x130a61;
            this.nj[_0x14cce6 * 0x2 + 0x1] = _0x5b8f38 * (0x1 - _0x130a61) + this.nj[_0x14cce6 * 0x2 + 0x1] * _0x130a61;
          }
        }
        if (this.pj != null && this.Hb) {
          this.pj.tj(this, _0x2af5d4, _0x5b3630, _0x3d9bce);
        }
        if (this.qj != null) {
          this.qj.If.x = this.nj[0x0];
          this.qj.If.y = this.nj[0x1] - this.Db * 0x3;
        }
      };
      _0x1c9b5d.prototype.rj = function (_0x12ed2f) {
        if (this.Hb) {
          if (!_0x12ed2f) {
            this.uj();
          }
        } else {
          if (this.pj != null) {
            _0x4cedc9(this.pj.Rf);
          }
          if (this.qj != null) {
            _0x4cedc9(this.qj);
          }
        }
      };
      _0x1c9b5d.prototype.uj = function () {
        var _0x20dfe8 = window.anApp = _0x47002d;
        if (this.pj == null) {
          this.pj = new _0x479762();
        } else {
          _0x4cedc9(this.pj.Rf);
        }
        this.pj.hh(_0x20dfe8.o.fb.af, _0x20dfe8.p.Dc().ed(this.Mb.cg), _0x20dfe8.p.Dc().dd(this.Mb.dg), _0x20dfe8.p.Dc().fd(this.Mb.Bg), _0x20dfe8.p.Dc().gd(this.Mb.Cg), _0x20dfe8.p.Dc().hd(this.Mb.Dg), _0x20dfe8.p.Dc().jd(this.Mb.Eg));
        if (this.qj == null) {
          this.qj = new _0x2433df('');
          this.qj.style.fontFamily = "wormup";
          this.qj.anchor.set(0.5);
        } else {
          _0x4cedc9(this.qj);
        }
        this.qj.style.fontSize = 0xf;
        this.qj.style.fill = _0x20dfe8.p.Dc().dd(this.Mb.dg)._c;
        this.qj.text = this.Mb.ad;
        this.oj.Qf(this.Mb.Lb, this.pj, this.qj);
      };
      _0x1c9b5d.Config = function () {
        function _0x3fe8e8() {
          this.Lb = 0x0;
          this.cg = _0x2d1252.TEAM_DEFAULT;
          this.dg = 0x0;
          this.Bg = 0x0;
          this.Cg = 0x0;
          this.Dg = 0x0;
          this.Eg = 0x0;
          this.ad = '';
        }
        return _0x3fe8e8;
      }();
      return _0x1c9b5d;
    }();
    var _0x2433df = function () {
      return _0x30b30d(_0x33b7ba.fc, function (_0x3256aa, _0x152160, _0x2f4c27) {
        _0x33b7ba.fc.call(this, _0x3256aa, _0x152160, _0x2f4c27);
        this.If = {
          'x': 0x0,
          'y': 0x0
        };
      });
    }();
    var _0x479762 = function () {
      function _0x7b736a() {
        this.Rf = new _0x33b7ba.Zb();
        this.Rf.sortableChildren = true;
        this.vj = new _0x5cfdd1();
        this.vj.zIndex = 1.6;
        this.wj = 0x0;
        this.xj = new Array(0x31d);
        this.xj[0x0] = this.yj(0x0, new _0x3cd4bf(), new _0x3cd4bf());
        for (var _0x413635 = 0x1; _0x413635 < 0x31d; _0x413635++) {
          this.xj[_0x413635] = this.yj(_0x413635, new _0x3cd4bf(), new _0x3cd4bf());
        }
        this.zj = 0x0;
        this.Aj = 0x0;
        this.Bj = 0x0;
      }
      var _0x9bc924 = Math.PI * 0.1;
      var _0x5e0333 = -0.06640625;
      var _0xc60991 = -0.03515625;
      var _0x3fde9f = -0.0625;
      var _0xf91a4 = _0x5e0333 * 0x3 + 0.84375;
      var _0x46a7ac = 0.2578125 - _0x5e0333 * 0x3;
      var _0xb72d60 = _0x5e0333 + _0xc60991;
      var _0xf05f0e = _0x3fde9f + _0x3fde9f;
      var _0x4f4d79 = _0xc60991 * 0x3 + 0.2578125;
      var _0xc24236 = 0.84375 - _0xc60991 * 0x3;
      var _0x443805 = _0xc60991 + _0x5e0333;
      _0x7b736a.prototype.yj = function (_0x1ef0ea, _0x137bbe, _0x1ca41d) {
        var _0x35b224 = new _0x542c85(_0x137bbe, _0x1ca41d);
        _0x137bbe.jh.zIndex = 0.001 * ((0x31d - _0x1ef0ea) * 0x2 + 0x1 + 0x3);
        _0x1ca41d.jh.zIndex = 0.001 * ((0x31d - _0x1ef0ea) * 0x2 - 0x2 + 0x3);
        return _0x35b224;
      };
      _0x7b736a.prototype.hh = function (_0x1abd6c, _0x422335, _0x1054c5, _0xa1509, _0x13d6a2, _0x3ec99c, _0x1e63a1) {
        var _0x3decc2 = _0x1054c5.Zc;
        var _0xf7a157 = _0x1abd6c == 0x10 ? _0x422335.bd.$c : _0x1054c5.$c;
        if (_0x3decc2.length > 0x0 && _0xf7a157.length > 0x0) {
          for (var _0x1119a9 = 0x0; _0x1119a9 < this.xj.length; _0x1119a9++) {
            this.xj[_0x1119a9].Nf.kh(_0x3decc2[_0x1119a9 % _0x3decc2.length]);
            this.xj[_0x1119a9].Pf.kh(_0xf7a157[_0x1119a9 % _0xf7a157.length]);
          }
        }
        this.vj.hh(_0xa1509, _0x13d6a2, _0x3ec99c, _0x1e63a1);
      };
      var _0x5cfdd1 = function () {
        var _0x57883a = _0x30b30d(_0x33b7ba.Zb, function () {
          _0x33b7ba.Zb.call(this);
          this.sortableChildren = true;
          this.Cj = [];
          this.Dj = [];
          this.Ej = [];
          this.Fj = [];
          this.Gj = new _0x33b7ba.Zb();
          this.Hj = [];
          for (var _0x4e9066 = 0x0; _0x4e9066 < 0x4; _0x4e9066++) {
            var _0x566ef2 = new _0x3cd4bf();
            _0x566ef2.kh((window.anApp = _0x47002d).q.Ph);
            this.Gj.addChild(_0x566ef2.jh);
            this.Hj.push(_0x566ef2);
          }
          this.Gj.zIndex = 0.0011;
          this.addChild(this.Gj);
          this.Ij();
          this.Jj = new _0x3cd4bf();
          this.Jj.kh((window.anApp = _0x47002d).q.Qh);
          this.Jj.jh.zIndex = 0.001;
          this.addChild(this.Jj.jh);
          this.Kj();
          this.xEmojiType_headshot = new _0x3cd4bf();
          this.xEmojiType_headshot.kh((window.anApp = _0x47002d).q.emoji_headshot);
          this.xEmojiType_headshot.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_headshot.jh);
          this.xzs();
          this.xEmojiType_kill = new _0x3cd4bf();
          this.xEmojiType_kill.kh((window.anApp = _0x47002d).q.emoji_kill);
          this.xEmojiType_kill.jh.zIndex = 0.001;
          this.addChild(this.xEmojiType_kill.jh);
          this.zas();
          this.guia_mobile = new _0x3cd4bf();
          this.guia_mobile.kh((window.anApp = _0x47002d).q.Id_mobileguia);
          this.guia_mobile.jh.zIndex = 0.001;
          this.addChild(this.guia_mobile.jh);
          this.flx = new _0x3cd4bf();
          this.flx.kh((window.anApp = _0x47002d).q.Rh);
          this.flx.jh.zIndex = 0.001;
          this.addChild(this.flx.jh);
          this.flexx();
          this.xxx5 = new _0x3cd4bf();
          this.xxx5.kh((window.anApp = _0x47002d).q.X_x5);
          this.xxx5.jh.zIndex = 0.001;
          this.addChild(this.xxx5.jh);
          this.xXx5();
          this.xxx2 = new _0x3cd4bf();
          this.xxx2.kh((window.anApp = _0x47002d).q.X_x2);
          this.xxx2.jh.zIndex = 0.001;
          this.addChild(this.xxx2.jh);
          this.xXx2();
          this.xxx10 = new _0x3cd4bf();
          this.xxx10.kh((window.anApp = _0x47002d).q.X_x10);
          this.xxx10.jh.zIndex = 0.001;
          this.addChild(this.xxx10.jh);
          this.xXx10();
          this.xxxLupatype = new _0x3cd4bf();
          this.xxxLupatype.kh((window.anApp = _0x47002d).q.X_xxlupa);
          this.xxxLupatype.jh.zIndex = 0.001;
          this.addChild(this.xxxLupatype.jh);
          this.xXxLupaZ();
        });
        _0x57883a.prototype.hh = function (_0x507411, _0xa6cc04, _0x5affb9, _0x582d07) {
          this.Lj(0.002, this.Cj, _0x507411.Zc);
          this.Lj(0.003, this.Dj, _0xa6cc04.Zc);
          this.Lj(0.004, this.Fj, _0x582d07.Zc);
          this.Lj(0.005, this.Ej, _0x5affb9.Zc);
        };
        _0x57883a.prototype.Lj = function (_0x43ac95, _0x3171b5, _0xb12939) {
          while (_0xb12939.length > _0x3171b5.length) {
            var _0xb86982 = new _0x3cd4bf();
            _0x3171b5.push(_0xb86982);
            this.addChild(_0xb86982.Mf());
          }
          while (_0xb12939.length < _0x3171b5.length) {
            _0x3171b5.pop().ih();
          }
          var _0x296988 = _0x43ac95;
          for (var _0x4df0c0 = 0x0; _0x4df0c0 < _0xb12939.length; _0x4df0c0++) {
            _0x296988 += 0.0001;
            var _0x406749 = _0x3171b5[_0x4df0c0];
            _0x406749.kh(_0xb12939[_0x4df0c0]);
            _0x406749.jh.zIndex = _0x296988;
          }
        };
        _0x57883a.prototype.mh = function (_0x29fabd, _0x247007, _0x2e1b88, _0x4384f4) {
          this.visible = true;
          this.position.set(_0x29fabd, _0x247007);
          this.rotation = _0x4384f4;
          for (var _0x5a4721 = 0x0; _0x5a4721 < this.Cj.length; _0x5a4721++) {
            this.Cj[_0x5a4721].oh(_0x2e1b88);
          }
          for (var _0xb76da5 = 0x0; _0xb76da5 < this.Dj.length; _0xb76da5++) {
            this.Dj[_0xb76da5].oh(_0x2e1b88);
          }
          for (var _0x50814a = 0x0; _0x50814a < this.Ej.length; _0x50814a++) {
            this.Ej[_0x50814a].oh(_0x2e1b88);
          }
          for (var _0x1291b2 = 0x0; _0x1291b2 < this.Fj.length; _0x1291b2++) {
            this.Fj[_0x1291b2].oh(_0x2e1b88);
          }
        };
        _0x57883a.prototype.lh = function () {
          this.visible = false;
        };
        _0x57883a.prototype.Mj = function (_0x2cdacf, _0x1b4e13, _0x48234c, _0x549e1b) {
          this.Gj.visible = true;
          var _0x2f441a = _0x48234c / 0x3e8;
          var _0x5d152f = 0x1 / this.Hj.length;
          for (var _0x4eb47d = 0x0; _0x4eb47d < this.Hj.length; _0x4eb47d++) {
            var _0x21f611 = 0x1 - (_0x2f441a + _0x5d152f * _0x4eb47d) % 0x1;
            this.Hj[_0x4eb47d].jh.alpha = 0x1 - _0x21f611;
            this.Hj[_0x4eb47d].oh(_0x1b4e13 * (0.5 + _0x21f611 * 4.5));
          }
        };
        _0x57883a.prototype.Ij = function () {
          this.Gj.visible = false;
        };
        _0x57883a.prototype.Nj = function (_0xe9c0f6, _0x2ad74b, _0x539afd, _0x47620c) {
          this.Jj.jh.visible = true;
          this.Jj.jh.alpha = (_0xe9c0f6.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0xe9c0f6.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x47620c * 0.0025) : Math.max(_0xe9c0f6.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x47620c * 0.0025);
          this.Jj.oh(_0x2ad74b);
        };
        _0x57883a.prototype.Kj = function () {
          this.Jj.jh.visible = false;
        };
        _0x57883a.prototype.Nflex = function (_0x504794, _0x3cdb0c, _0x41c343, _0x3d1559) {
          this.flx.jh.visible = true;
          this.flx.jh.alpha = (_0x504794.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x504794.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x3d1559 * 0.0025) : Math.max(_0x504794.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x3d1559 * 0.0025);
          this.flx.oh(_0x3cdb0c);
        };
        _0x57883a.prototype.flexx = function () {
          this.flx.jh.visible = false;
        };
        _0x57883a.prototype.ActiveX5 = function (_0x43ed90, _0x3f10ea, _0x444e7f, _0x1f9edc) {
          this.xxx5.jh.visible = true;
          this.xxx5.jh.alpha = (_0x43ed90.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x43ed90.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x1f9edc * 0.0025) : Math.max(_0x43ed90.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x1f9edc * 0.0025);
          this.xxx5.oh(_0x3f10ea);
        };
        _0x57883a.prototype.xXx5 = function () {
          this.xxx5.jh.visible = false;
        };
        _0x57883a.prototype.ActiveX2 = function (_0x111249, _0x23721c, _0x460e20, _0x18cd91) {
          this.xxx2.jh.visible = true;
          this.xxx2.jh.alpha = (_0x111249.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x111249.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x18cd91 * 0.0025) : Math.max(_0x111249.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x18cd91 * 0.0025);
          this.xxx2.oh(_0x23721c);
        };
        _0x57883a.prototype.xXx2 = function () {
          this.xxx2.jh.visible = false;
        };
        _0x57883a.prototype.ActiveX10 = function (_0x50baed, _0x3faa64, _0x20ca92, _0x908753) {
          this.xxx10.jh.visible = true;
          this.xxx10.jh.alpha = (_0x50baed.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x50baed.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x908753 * 0.0025) : Math.max(_0x50baed.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x908753 * 0.0025);
          this.xxx10.oh(_0x3faa64);
        };
        _0x57883a.prototype.xXx10 = function () {
          this.xxx10.jh.visible = false;
        };
        _0x57883a.prototype.ActiveZlupa = function (_0x4179dc, _0x5f1e5a, _0x13b223, _0x511717) {
          this.xxxLupatype.jh.visible = true;
          this.xxxLupatype.jh.alpha = (_0x4179dc.hj ? 0.9 : 0.2) > this.Jj.jh.alpha ? Math.min(_0x4179dc.hj ? 0.9 : 0.2, this.Jj.jh.alpha + _0x511717 * 0.0025) : Math.max(_0x4179dc.hj ? 0.9 : 0.2, this.Jj.jh.alpha - _0x511717 * 0.0025);
          this.xxxLupatype.oh(_0x5f1e5a);
        };
        _0x57883a.prototype.xXxLupaZ = function () {
          this.xxxLupatype.jh.visible = false;
        };
        _0x57883a.prototype.xzs = function () {
          this.xEmojiType_headshot.jh.visible = false;
        };
        _0x57883a.prototype.zas = function () {
          this.xEmojiType_kill.jh.visible = false;
        };
        _0x57883a.prototype.Rx = function (_0x528ac6, _0x4d86c4, _0x13f791, _0x4a3dcd) {
          this.guia_mobile.jh.visible = true;
          this.guia_mobile.oh(_0x4d86c4);
        };
        _0x57883a.prototype.Njh = function (_0x4178f9, _0x595320, _0x52798b, _0x30c4c5) {
          this.xEmojiType_headshot.jh.visible = true;
          this.xEmojiType_headshot.oh(_0x595320);
        };
        _0x57883a.prototype.Njk = function (_0x579ef9, _0x5d46a8, _0x3ddb8e, _0x4f991c) {
          this.xEmojiType_kill.jh.visible = true;
          this.xEmojiType_kill.oh(_0x5d46a8);
        };
        return _0x57883a;
      }();
      _0x7b736a.prototype.Oj = function (_0x505803) {
        return this.Aj + this.Bj * Math.sin(_0x505803 * _0x9bc924 - this.zj);
      };
      _0x7b736a.prototype.tj = function (_0x1ca76b, _0x1e6bbf, _0x1fbdf0, _0x5f0fe8) {
        var _0x205926 = _0x1ca76b.Db * 0x2;
        var _0x5610e0 = _0x1ca76b.nj;
        var _0x5ac111 = _0x1ca76b.kj;
        var _0xdd5d4f = _0x5ac111 * 0x4 - 0x3;
        this.zj = _0x1e6bbf / 0x190 * Math.PI;
        this.Aj = _0x205926 * 1.5;
        this.Bj = _0x205926 * 0.15 * _0x1ca76b.jj;
        var _0x5bf546 = undefined;
        var _0x2c48b3 = undefined;
        var _0x272c85 = undefined;
        var _0x395d4f = undefined;
        var _0x484e0b = undefined;
        var _0xa171a2 = undefined;
        var _0x389790 = undefined;
        var _0x6b33e9 = undefined;
        _0x2c48b3 = _0x5610e0[0x0];
        _0xa171a2 = _0x5610e0[0x1];
        if (_0x5f0fe8(_0x2c48b3, _0xa171a2)) {
          _0x272c85 = _0x5610e0[0x2];
          _0x389790 = _0x5610e0[0x3];
          _0x395d4f = _0x5610e0[0x4];
          _0x6b33e9 = _0x5610e0[0x5];
          var _0xa9ebd5 = Math.atan2(_0x6b33e9 + _0xa171a2 * 0x2 - _0x389790 * 0x3, _0x395d4f + _0x2c48b3 * 0x2 - _0x272c85 * 0x3);
          this.vj.mh(_0x2c48b3, _0xa171a2, _0x205926, _0xa9ebd5);
          this.xj[0x0].mh(_0x2c48b3, _0xa171a2, _0x205926, this.Oj(0x0), _0xa9ebd5);
          this.xj[0x1].mh(_0xf91a4 * _0x2c48b3 + _0x46a7ac * _0x272c85 + _0xb72d60 * _0x395d4f, _0xf91a4 * _0xa171a2 + _0x46a7ac * _0x389790 + _0xb72d60 * _0x6b33e9, _0x205926, this.Oj(0x1), _0x542c85.angleBetween(this.xj[0x0], this.xj[0x2]));
          this.xj[0x2].mh(0.375 * _0x2c48b3 + 0.75 * _0x272c85 + _0xf05f0e * _0x395d4f, 0.375 * _0xa171a2 + 0.75 * _0x389790 + _0xf05f0e * _0x6b33e9, _0x205926, this.Oj(0x2), _0x542c85.angleBetween(this.xj[0x1], this.xj[0x3]));
          this.xj[0x3].mh(_0x4f4d79 * _0x2c48b3 + _0xc24236 * _0x272c85 + _0x443805 * _0x395d4f, _0x4f4d79 * _0xa171a2 + _0xc24236 * _0x389790 + _0x443805 * _0x6b33e9, _0x205926, this.Oj(0x3), _0x542c85.angleBetween(this.xj[0x2], this.xj[0x4]));
        } else {
          this.vj.lh();
          this.xj[0x0].lh();
          this.xj[0x1].lh();
          this.xj[0x2].lh();
          this.xj[0x3].lh();
        }
        var _0x5ca3fe = 0x4;
        var _0x5c1bdf = 0x2;
        for (var _0x25ff35 = _0x5ac111 * 0x2 - 0x4; _0x5c1bdf < _0x25ff35; _0x5c1bdf += 0x2) {
          _0x2c48b3 = _0x5610e0[_0x5c1bdf];
          _0xa171a2 = _0x5610e0[_0x5c1bdf + 0x1];
          if (_0x5f0fe8(_0x2c48b3, _0xa171a2)) {
            _0x5bf546 = _0x5610e0[_0x5c1bdf - 0x2];
            _0x484e0b = _0x5610e0[_0x5c1bdf - 0x1];
            _0x272c85 = _0x5610e0[_0x5c1bdf + 0x2];
            _0x389790 = _0x5610e0[_0x5c1bdf + 0x3];
            _0x395d4f = _0x5610e0[_0x5c1bdf + 0x4];
            _0x6b33e9 = _0x5610e0[_0x5c1bdf + 0x5];
            this.xj[_0x5ca3fe].mh(_0x2c48b3, _0xa171a2, _0x205926, this.Oj(_0x5ca3fe), _0x542c85.angleBetween(this.xj[_0x5ca3fe - 0x1], this.xj[_0x5ca3fe + 0x1]));
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].mh(_0x5e0333 * _0x5bf546 + 0.84375 * _0x2c48b3 + 0.2578125 * _0x272c85 + _0xc60991 * _0x395d4f, _0x5e0333 * _0x484e0b + 0.84375 * _0xa171a2 + 0.2578125 * _0x389790 + _0xc60991 * _0x6b33e9, _0x205926, this.Oj(_0x5ca3fe), _0x542c85.angleBetween(this.xj[_0x5ca3fe - 0x1], this.xj[_0x5ca3fe + 0x1]));
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].mh(_0x3fde9f * _0x5bf546 + 0.5625 * _0x2c48b3 + 0.5625 * _0x272c85 + _0x3fde9f * _0x395d4f, _0x3fde9f * _0x484e0b + 0.5625 * _0xa171a2 + 0.5625 * _0x389790 + _0x3fde9f * _0x6b33e9, _0x205926, this.Oj(_0x5ca3fe), _0x542c85.angleBetween(this.xj[_0x5ca3fe - 0x1], this.xj[_0x5ca3fe + 0x1]));
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].mh(_0xc60991 * _0x5bf546 + 0.2578125 * _0x2c48b3 + 0.84375 * _0x272c85 + _0x5e0333 * _0x395d4f, _0xc60991 * _0x484e0b + 0.2578125 * _0xa171a2 + 0.84375 * _0x389790 + _0x5e0333 * _0x6b33e9, _0x205926, this.Oj(_0x5ca3fe), _0x542c85.angleBetween(this.xj[_0x5ca3fe - 0x1], this.xj[_0x5ca3fe + 0x1]));
            _0x5ca3fe++;
          } else {
            this.xj[_0x5ca3fe].lh();
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].lh();
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].lh();
            _0x5ca3fe++;
            this.xj[_0x5ca3fe].lh();
            _0x5ca3fe++;
          }
        }
        _0x2c48b3 = _0x5610e0[_0x5ac111 * 0x2 - 0x4];
        _0xa171a2 = _0x5610e0[_0x5ac111 * 0x2 - 0x3];
        if (_0x5f0fe8(_0x2c48b3, _0xa171a2)) {
          _0x5bf546 = _0x5610e0[_0x5ac111 * 0x2 - 0x6];
          _0x484e0b = _0x5610e0[_0x5ac111 * 0x2 - 0x5];
          _0x272c85 = _0x5610e0[_0x5ac111 * 0x2 - 0x2];
          _0x389790 = _0x5610e0[_0x5ac111 * 0x2 - 0x1];
          this.xj[_0xdd5d4f - 0x5].mh(_0x2c48b3, _0xa171a2, _0x205926, this.Oj(_0xdd5d4f - 0x5), _0x542c85.angleBetween(this.xj[_0xdd5d4f - 0x6], this.xj[_0xdd5d4f - 0x4]));
          this.xj[_0xdd5d4f - 0x4].mh(_0x443805 * _0x5bf546 + _0xc24236 * _0x2c48b3 + _0x4f4d79 * _0x272c85, _0x443805 * _0x484e0b + _0xc24236 * _0xa171a2 + _0x4f4d79 * _0x389790, _0x205926, this.Oj(_0xdd5d4f - 0x4), _0x542c85.angleBetween(this.xj[_0xdd5d4f - 0x5], this.xj[_0xdd5d4f - 0x3]));
          this.xj[_0xdd5d4f - 0x3].mh(_0xf05f0e * _0x5bf546 + 0.75 * _0x2c48b3 + 0.375 * _0x272c85, _0xf05f0e * _0x484e0b + 0.75 * _0xa171a2 + 0.375 * _0x389790, _0x205926, this.Oj(_0xdd5d4f - 0x3), _0x542c85.angleBetween(this.xj[_0xdd5d4f - 0x4], this.xj[_0xdd5d4f - 0x2]));
          this.xj[_0xdd5d4f - 0x2].mh(_0xb72d60 * _0x5bf546 + _0x46a7ac * _0x2c48b3 + _0xf91a4 * _0x272c85, _0xb72d60 * _0x484e0b + _0x46a7ac * _0xa171a2 + _0xf91a4 * _0x389790, _0x205926, this.Oj(_0xdd5d4f - 0x2), _0x542c85.angleBetween(this.xj[_0xdd5d4f - 0x3], this.xj[_0xdd5d4f - 0x1]));
          this.xj[_0xdd5d4f - 0x1].mh(_0x272c85, _0x389790, _0x205926, this.Oj(_0xdd5d4f - 0x1), _0x542c85.angleBetween(this.xj[_0xdd5d4f - 0x2], this.xj[_0xdd5d4f - 0x1]));
        } else {
          this.xj[_0xdd5d4f - 0x5].lh();
          this.xj[_0xdd5d4f - 0x4].lh();
          this.xj[_0xdd5d4f - 0x3].lh();
          this.xj[_0xdd5d4f - 0x2].lh();
          this.xj[_0xdd5d4f - 0x1].lh();
        }
        if (this.wj == 0x0 && _0xdd5d4f > 0x0) {
          this.Rf.addChild(this.vj);
        }
        if (this.wj > 0x0 && _0xdd5d4f == 0x0) {
          _0x4cedc9(this.vj);
        }
        while (this.wj < _0xdd5d4f) {
          this.Rf.addChild(this.xj[this.wj].Nf.Mf());
          this.Rf.addChild(this.xj[this.wj].Pf.Mf());
          this.wj += 0x1;
        }
        while (this.wj > _0xdd5d4f) {
          this.wj -= 0x1;
          this.xj[this.wj].Pf.ih();
          this.xj[this.wj].Nf.ih();
        }
        var _0x3cf3c5 = _0x1ca76b.Ff[_0x46b3ce.MAGNETIC_TYPE];
        if (this.xj[0x0].gj() && _0x3cf3c5 != null && _0x3cf3c5.sc) {
          this.vj.Mj(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.Ij();
        }
        var _0x17669c = _0x1ca76b.Ff[_0x46b3ce.VELOCITY_TYPE];
        if (this.xj[0x0].gj() && _0x17669c != null && _0x17669c.sc) {
          this.vj.Nj(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.Kj();
        }
        if (theoKzObjects.emoji_headshot && _0x1ca76b && _0x1ca76b.Mb && _0x1ca76b.Mb.Mb) {
          this.vj.Njh(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.xzs();
        }
        if (theoKzObjects.emoji_kill && _0x1ca76b && _0x1ca76b.Mb && _0x1ca76b.Mb.Mb) {
          this.vj.Njk(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.zas();
        }
        ;
        if (false && false && _0x1ca76b && _0x1ca76b.Mb && _0x1ca76b.Mb.Mb) {
          this.vj.Rx(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        }
        var _0x2162cb = _0x1ca76b.Ff[_0x46b3ce.FLEXIBLE_TYPE];
        if (this.xj[0x0].gj() && _0x2162cb != null && _0x2162cb.sc) {
          this.vj.Nflex(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.flexx();
        }
        var _0x43090d = _0x1ca76b.Ff[_0x46b3ce.X5_TYPE];
        if (this.xj[0x0].gj() && _0x43090d != null && _0x43090d.sc) {
          this.vj.ActiveX5(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.xXx5();
        }
        var _0x471d0c = _0x1ca76b.Ff[_0x46b3ce.X2_TYPE];
        if (this.xj[0x0].gj() && _0x471d0c != null && _0x471d0c.sc) {
          this.vj.ActiveX2(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.xXx2();
        }
        var _0x27556b = _0x1ca76b.Ff[_0x46b3ce.X10_TYPE];
        if (this.xj[0x0].gj() && _0x27556b != null && _0x27556b.sc) {
          this.vj.ActiveX10(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.xXx10();
        }
        var _0x266580 = _0x1ca76b.Ff[_0x46b3ce.ZOOM_TYPE];
        if (this.xj[0x0].gj() && _0x266580 != null && _0x266580.sc) {
          this.vj.ActiveZlupa(_0x1ca76b, _0x205926, _0x1e6bbf, _0x1fbdf0);
        } else {
          this.vj.xXxLupaZ();
        }
      };
      var _0x542c85 = function () {
        function _0x1cc2ef(_0x13399d, _0x2ecca3) {
          this.Nf = _0x13399d;
          this.Nf.Mg(false);
          this.Pf = _0x2ecca3;
          this.Pf.Mg(false);
        }
        _0x1cc2ef.prototype.mh = function (_0x30a819, _0x2ce49c, _0x87996c, _0x2ff4c1, _0x3d16c2) {
          this.Nf.Mg(true);
          this.Nf.nh(_0x30a819, _0x2ce49c);
          this.Nf.oh(_0x87996c);
          this.Nf.fj(_0x3d16c2);
          this.Pf.Mg(true);
          this.Pf.nh(_0x30a819, _0x2ce49c);
          this.Pf.oh(_0x2ff4c1);
          this.Pf.fj(_0x3d16c2);
        };
        _0x1cc2ef.prototype.lh = function () {
          this.Nf.Mg(false);
          this.Pf.Mg(false);
        };
        _0x1cc2ef.prototype.gj = function () {
          return this.Nf.gj();
        };
        _0x1cc2ef.angleBetween = function (_0x566268, _0x4cc466) {
          return Math.atan2(_0x566268.Nf.jh.position.y - _0x4cc466.Nf.jh.position.y, _0x566268.Nf.jh.position.x - _0x4cc466.Nf.jh.position.x);
        };
        return _0x1cc2ef;
      }();
      return _0x7b736a;
    }();
    var _0x15c2ac = function () {
      function _0x2f652a(_0x156fc3) {
        this.se = _0x156fc3;
        this.te = _0x156fc3.get()[0x0];
        this.ue = new _0x33b7ba.ac({
          'view': this.te,
          'transparent': true
        });
        this.sc = false;
        this.Pj = new _0x479762();
        this.Pj.Rf.addChild(this.Pj.vj);
        this.Qj = 0x0;
        this.Rj = 0x0;
        this.Ng = 0x1;
        this.rh = 0x0;
        this.sh = 0x0;
        this.th = 0x0;
        this.uh = 0x0;
        this.vh = 0x0;
        this.Sj = false;
        this.Tj = false;
        this.Uj = false;
        this.Vj = false;
        this.Wj = false;
        this.Xj = false;
        this.Yj = false;
        this.Zj = false;
        this.$j = false;
        this._j = false;
        this.Ra();
        this.Fb();
        var _0x195177 = this;
        (window.anApp = _0x47002d).p.ca(function () {
          if ((window.anApp = _0x47002d).p.W()) {
            _0x195177.Fb();
          }
        });
      }
      _0x2f652a.prototype.Fb = function () {
        var _0x53b265 = window.anApp = _0x47002d;
        this.Pj.hh(0x0, null, _0x53b265.p.Dc().dd(this.rh), _0x53b265.p.Dc().fd(this.sh), _0x53b265.p.Dc().gd(this.th), _0x53b265.p.Dc().hd(this.uh), _0x53b265.p.Dc().jd(this.vh));
      };
      _0x2f652a.prototype.Le = function (_0x1955e8) {
        this.sc = _0x1955e8;
      };
      _0x2f652a.prototype.ak = function (_0x316570, _0x14fca8, _0x4896a0) {
        this.rh = _0x316570;
        this.Sj = _0x14fca8;
        this.Xj = _0x4896a0;
        this.Fb();
      };
      _0x2f652a.prototype.bk = function (_0x524f72, _0x11811d, _0x4c84fa) {
        this.sh = _0x524f72;
        this.Tj = _0x11811d;
        this.Yj = _0x4c84fa;
        this.Fb();
      };
      _0x2f652a.prototype.ck = function (_0x2524af, _0x155c0e, _0x373300) {
        this.th = _0x2524af;
        this.Uj = _0x155c0e;
        this.Zj = _0x373300;
        this.Fb();
      };
      _0x2f652a.prototype.dk = function (_0xa85bfc, _0x5960e6, _0xdacc21) {
        this.uh = _0xa85bfc;
        this.Vj = _0x5960e6;
        this.$j = _0xdacc21;
        this.Fb();
      };
      _0x2f652a.prototype.ek = function (_0x3741ac, _0x3ab3bf, _0x4159b8) {
        this.vh = _0x3741ac;
        this.Wj = _0x3ab3bf;
        this._j = _0x4159b8;
        this.Fb();
      };
      _0x2f652a.prototype.Ra = function () {
        var _0x744dc = window.devicePixelRatio ? window.devicePixelRatio : 0x1;
        this.Qj = this.se.width();
        this.Rj = this.se.height();
        this.ue.resize(this.Qj, this.Rj);
        this.ue.resolution = _0x744dc;
        this.te.width = _0x744dc * this.Qj;
        this.te.height = _0x744dc * this.Rj;
        this.Ng = this.Rj / 0x4;
        var _0x2b93fb = _0x1fa2f7(Math.floor(this.Qj / this.Ng) * 0x2 - 0x5, 0x1, this.Pj.xj.length);
        if (this.Pj.wj != _0x2b93fb) {
          for (var _0x1e3391 = _0x2b93fb; _0x1e3391 < this.Pj.xj.length; _0x1e3391++) {
            this.Pj.xj[_0x1e3391].lh();
          }
          while (this.Pj.wj < _0x2b93fb) {
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Nf.Mf());
            this.Pj.Rf.addChild(this.Pj.xj[this.Pj.wj].Pf.Mf());
            this.Pj.wj += 0x1;
          }
          while (this.Pj.wj > _0x2b93fb) {
            this.Pj.wj -= 0x1;
            this.Pj.xj[this.Pj.wj].Pf.ih();
            this.Pj.xj[this.Pj.wj].Nf.ih();
          }
        }
      };
      _0x2f652a.prototype.Pa = function () {
        if (this.sc) {
          if ((window.anApp = _0x47002d).p.W) {
            var _0x6eb6e2 = Date.now();
            var _0xf2d199 = _0x6eb6e2 / 0xc8;
            var _0x1ad2e5 = Math.sin(_0xf2d199);
            var _0x1e39fd = this.Ng;
            var _0x425912 = this.Ng * 1.5;
            var _0x577799 = this.Qj - (this.Qj - _0x1e39fd * 0.5 * (this.Pj.wj - 0x1)) * 0.5;
            var _0x39ca1a = this.Rj * 0.5;
            var _0x2a503c = 0x0;
            var _0xef7c65 = 0x0;
            for (var _0x48f49d = -0x1; _0x48f49d < this.Pj.wj; _0x48f49d++) {
              var _0x60848f = _0x48f49d;
              var _0x57d933 = Math.cos(_0x60848f * 0x1 / 0xc * Math.PI - _0xf2d199) * (0x1 - Math.pow(0x10, _0x60848f * -0x1 / 0xc));
              if (_0x48f49d >= 0x0) {
                var _0x5de341 = _0x577799 + _0x1e39fd * -0.5 * _0x60848f;
                var _0x45b77e = _0x39ca1a + _0x1e39fd * 0.5 * _0x57d933;
                var _0x1c837f = _0x1e39fd * 0x2;
                var _0xb3e92c = _0x425912 * 0x2;
                var _0x17d55d = Math.atan2(_0xef7c65 - _0x57d933, _0x60848f - _0x2a503c);
                if (_0x48f49d == 0x0) {
                  this.Pj.vj.mh(_0x5de341, _0x45b77e, _0x1c837f, _0x17d55d);
                }
                this.Pj.xj[_0x48f49d].mh(_0x5de341, _0x45b77e, _0x1c837f, _0xb3e92c, _0x17d55d);
                var _0x19f448 = this.Sj ? this.Xj ? 0.4 + _0x1ad2e5 * 0.2 : 0.9 + _0x1ad2e5 * 0.1 : this.Xj ? 0.4 : 0x1;
                this.Pj.xj[_0x48f49d].Nf.qh(_0x19f448);
                this.Pj.xj[_0x48f49d].Pf.qh(_0x19f448);
              }
              _0x2a503c = _0x60848f;
              _0xef7c65 = _0x57d933;
            }
            for (var _0x3d6c14 = 0x0; _0x3d6c14 < this.Pj.vj.Cj.length; _0x3d6c14++) {
              var _0x4e0cb0 = this.Tj ? this.Yj ? 0.4 + _0x1ad2e5 * 0.2 : 0.9 + _0x1ad2e5 * 0.1 : this.Yj ? 0.4 : 0x1;
              this.Pj.vj.Cj[_0x3d6c14].qh(_0x4e0cb0);
            }
            for (var _0x7109d6 = 0x0; _0x7109d6 < this.Pj.vj.Dj.length; _0x7109d6++) {
              var _0x37ebd5 = this.Uj ? this.Zj ? 0.4 + _0x1ad2e5 * 0.2 : 0.9 + _0x1ad2e5 * 0.1 : this.Zj ? 0.4 : 0x1;
              this.Pj.vj.Dj[_0x7109d6].qh(_0x37ebd5);
            }
            for (var _0x5da5b1 = 0x0; _0x5da5b1 < this.Pj.vj.Ej.length; _0x5da5b1++) {
              var _0x1768c0 = this.Vj ? this.$j ? 0.4 + _0x1ad2e5 * 0.2 : 0.9 + _0x1ad2e5 * 0.1 : this.$j ? 0.4 : 0x1;
              this.Pj.vj.Ej[_0x5da5b1].qh(_0x1768c0);
            }
            for (var _0x5e1f30 = 0x0; _0x5e1f30 < this.Pj.vj.Fj.length; _0x5e1f30++) {
              var _0x3d60f3 = this.Wj ? this._j ? 0.4 + _0x1ad2e5 * 0.2 : 0.9 + _0x1ad2e5 * 0.1 : this._j ? 0.4 : 0x1;
              this.Pj.vj.Fj[_0x5e1f30].qh(_0x3d60f3);
            }
            this.ue.render(this.Pj.Rf);
          }
        }
      };
      return _0x2f652a;
    }();
    var _0x5670dc = function () {
      function _0x5c1410(_0x25cf27) {
        this.rc = _0x25cf27;
      }
      _0x5c1410.fk = $("#game-view");
      _0x5c1410.gk = $("#results-view");
      _0x5c1410.hk = $("#main-menu-view");
      _0x5c1410.ik = $("#popup-view");
      _0x5c1410.jk = $("#toaster-view");
      _0x5c1410.kk = $("#loading-view");
      _0x5c1410.lk = $("#stretch-box");
      _0x5c1410.mk = $("#game-canvas");
      _0x5c1410.di = $("#background-canvas");
      _0x5c1410.nk = $("#social-buttons");
      _0x5c1410.ok = $("#markup-wrap");
      _0x5c1410.prototype.a = function () {};
      _0x5c1410.prototype.ii = function () {};
      _0x5c1410.prototype.ji = function () {};
      _0x5c1410.prototype.ei = function () {};
      _0x5c1410.prototype.Ra = function () {};
      _0x5c1410.prototype.Pa = function (_0x5d2ee5, _0x280b03) {};
      return _0x5c1410;
    }();
    var _0x5c5e7d = function () {
      function _0x22ef41(_0x5c3ded, _0xc035b7, _0x1112c2, _0x1a7d4d, _0x27ed27, _0xe87393) {
        var _0x359b3d = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#F7941D\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + _0x5c3ded + "</span></div>";
        var _0x2482c2 = $(_0x359b3d);
        _0x2482c2.click(function () {
          if (typeof FB != "undefined" && FB.ui !== undefined) {
            FB.ui({
              'method': "feed",
              'display': "popup",
              'link': _0xc035b7,
              'name': _0x1112c2,
              'caption': _0x1a7d4d,
              'description': _0x27ed27,
              'picture': _0xe87393
            }, function () {});
          }
        });
        return _0x2482c2;
      }
      var _0x5411f7 = $('#final-caption');
      var _0x2988a4 = $("#final-continue");
      var _0x13b84f = $('#congrats-bg');
      var _0x29113e = $("#unl6wj4czdl84o9b");
      $("#congrats");
      var _0x21a66a = $("#final-share-fb");
      var _0x324dd5 = $("#final-message");
      var _0x593a8a = $("#final-score");
      var _0x2044e0 = $("#final-place");
      var _0x2924d6 = $("#final-board");
      var _0xc550b6 = _0x30b30d(_0x5670dc, function () {
        _0x5670dc.call(this, 0x0);
        var _0x1114d7 = this;
        var _0x42d1fb = window.anApp = _0x47002d;
        var _0x8dfd90 = _0x5670dc.mk.get()[0x0];
        console.log("sSE=" + _0xdf83.qk);
        _0x21a66a.toggle(_0xdf83.qk);
        _0x5411f7.text(window.I18N_MESSAGES["index.game.result.title"]);
        _0x2988a4.text(window.I18N_MESSAGES['index.game.result.continue']);
        _0x2988a4.click(function () {
          _0x42d1fb.r.Cd();
          _0x42d1fb.f.Ma.c();
          _0x42d1fb.r.G(_0x37099e.AudioState.F);
          _0x42d1fb.s.I(_0x42d1fb.s.F);
        });
        window.detecNewCodeAndPacth = () => {
          $("#game-canvas").attr("width", window.innerWidth);
          return $("#game-canvas").attr("height", window.innerHeight);
        };
        $('html').keydown(function (_0x26eb25) {
          if (_0x26eb25.keyCode == 0x20) {
            _0x1114d7.rk = true;
          }
          if (_0x26eb25.keyCode == 0x6b) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (_0x26eb25.keyCode == 0x6d) {
            detecNewCodeAndPacth();
            setInterval(detecNewCodeAndPacth, 0x3e8);
          }
          if (theoKzObjects.KeyCodeRespawn == _0x26eb25.keyCode) {
            _0x1114d7.rk = true;
            window.onclose();
            setTimeout(function () {
              $("#final-continue").click();
              $('#mm-action-play').click();
              $("#adbl-continue").click();
              $("#final-replay").click();
            }, 0x3e8);
          }
        }).keyup(function (_0x23fa69) {
          if (_0x23fa69.keyCode == 0x20) {
            _0x1114d7.rk = false;
          }
        });
        _0x8dfd90.addEventListener("touchmove", function (_0x23729f) {
          if (!RechekingPhone() || !theoKzObjects.gamePad.checked) {
            if (_0x23729f === _0x23729f || window.event) {
              _0x23729f = _0x23729f.touches[0x0];
              if (_0x23729f.clientX !== undefined) {
                _0x1114d7.sk = Math.atan2(_0x23729f.clientY - _0x8dfd90.offsetHeight * 0.5, _0x23729f.clientX - _0x8dfd90.offsetWidth * 0.5);
              } else {
                _0x1114d7.sk = Math.atan2(_0x23729f.pageY - _0x8dfd90.offsetHeight * 0.5, _0x23729f.pageX - _0x8dfd90.offsetWidth * 0.5);
              }
            }
          }
        }, true);
        _0x8dfd90.addEventListener("touchstart", function (_0x23d2ce) {
          if (_0x23d2ce === _0x23d2ce || window.event) {
            _0x1114d7.rk = _0x23d2ce.touches.length >= 0x2;
          }
          _0x23d2ce.preventDefault();
        }, true);
        _0x8dfd90.addEventListener("touchend", function (_0x44903d) {
          if (_0x44903d === _0x44903d || window.event) {
            _0x1114d7.rk = _0x44903d.touches.length >= 0x2;
          }
        }, true);
        _0x8dfd90.addEventListener('mousemove', function (_0x32c7ea) {
          if (!PilotoAutomatico && _0x32c7ea.clientX !== undefined) {
            _0x1114d7.sk = Math.atan2(_0x32c7ea.clientY - _0x8dfd90.offsetHeight * 0.5, _0x32c7ea.clientX - _0x8dfd90.offsetWidth * 0.5);
          }
        }, true);
        _0x8dfd90.addEventListener("mousedown", function (_0x1e782d) {
          console.log(_0x1e782d);
          _0x1114d7.rk = true;
        }, true);
        _0x8dfd90.addEventListener('mouseup', function (_0x4d19db) {
          console.log(_0x4d19db);
          _0x1114d7.rk = false;
        }, true);
        this.wb = new _0xcd586(_0x5670dc.mk);
        this.cb = 0x0;
        this.sk = 0x0;
        this.rk = false;
        theoEvents.eventoPrincipal = _0x1114d7;
      });
      _0xc550b6.prototype.a = function () {};
      _0xc550b6.prototype.ii = function () {
        if (this.cb == 0x0) {
          _0x5670dc.fk.stop();
          _0x5670dc.fk.fadeIn(0x1f4);
          _0x5670dc.gk.stop();
          _0x5670dc.gk.fadeOut(0x1);
          _0x5670dc.hk.stop();
          _0x5670dc.hk.fadeOut(0x32);
          _0x5670dc.ik.stop();
          _0x5670dc.ik.fadeOut(0x32);
          _0x5670dc.jk.stop();
          _0x5670dc.jk.fadeOut(0x32);
          _0x5670dc.kk.stop();
          _0x5670dc.kk.fadeOut(0x32);
          _0x5670dc.lk.stop();
          _0x5670dc.lk.fadeOut(0x1);
          _0x5670dc.di.stop();
          _0x5670dc.di.fadeOut(0x32);
          _0xa8aabd.Le(false);
          _0x5670dc.nk.stop();
          _0x5670dc.nk.fadeOut(0x32);
          _0x5670dc.ok.stop();
          _0x5670dc.ok.fadeOut(0x32);
        } else {
          _0x5670dc.fk.stop();
          _0x5670dc.fk.fadeIn(0x1f4);
          _0x5670dc.gk.stop();
          _0x5670dc.gk.fadeIn(0x1f4);
          _0x5670dc.hk.stop();
          _0x5670dc.hk.fadeOut(0x32);
          _0x5670dc.ik.stop();
          _0x5670dc.ik.fadeOut(0x32);
          _0x5670dc.jk.stop();
          _0x5670dc.jk.fadeOut(0x32);
          _0x5670dc.kk.stop();
          _0x5670dc.kk.fadeOut(0x32);
          _0x5670dc.lk.stop();
          _0x5670dc.lk.fadeOut(0x1);
          _0x5670dc.di.stop();
          _0x5670dc.di.fadeOut(0x32);
          _0xa8aabd.Le(false);
          _0x5670dc.nk.stop();
          _0x5670dc.nk.fadeOut(0x32);
          _0x5670dc.ok.stop();
          _0x5670dc.ok.fadeOut(0x32);
        }
      };
      _0xc550b6.prototype.J = function () {
        this.cb = 0x0;
        return this;
      };
      _0xc550b6.prototype.Fa = function () {
        console.log('re');
        _0x13b84f.hide();
        setTimeout(function () {
          console.log("fi_bg");
          _0x13b84f.fadeIn(0x1f4);
        }, 0xbb8);
        _0x29113e.hide();
        setTimeout(function () {
          console.log('fi_aw');
          _0x29113e.fadeIn(0x1f4);
        }, 0x1f4);
        this.cb = 0x1;
        return this;
      };
      _0xc550b6.prototype.ji = function () {
        this.rk = false;
        this.wb.Ra();
        if (this.cb == 0x1) {
          (window.anApp = _0x47002d).r.Gd();
        }
      };
      _0xc550b6.prototype.Ra = function () {
        this.wb.Ra();
      };
      _0xc550b6.prototype.Pa = function (_0xa6b395, _0x8b1d33) {
        this.wb.Pa(_0xa6b395, _0x8b1d33);
      };
      _0xc550b6.prototype.Da = function (_0x1cc558, _0x5a435a, _0x1d4d66) {
        var _0x5f0770 = undefined;
        var _0x1e6535 = undefined;
        var _0x13c3f8 = undefined;
        if (_0x5a435a >= 0x1 && _0x5a435a <= 0xa) {
          _0x5f0770 = window.I18N_MESSAGES["index.game.result.place.i" + _0x5a435a];
          _0x1e6535 = window.I18N_MESSAGES["index.game.result.placeInBoard"];
          _0x13c3f8 = window.I18N_MESSAGES["index.game.social.shareResult.messGood"].replace("{0}", _0x1d4d66).replace("{1}", _0x1cc558).replace('{2}', _0x5f0770);
        } else {
          _0x5f0770 = '';
          _0x1e6535 = window.I18N_MESSAGES["index.game.result.tryHit"];
          _0x13c3f8 = window.I18N_MESSAGES['index.game.social.shareResult.messNorm'].replace("{0}", _0x1d4d66).replace("{1}", _0x1cc558);
        }
        _0x324dd5.html(window.I18N_MESSAGES["index.game.result.your"]);
        _0x593a8a.html(_0x1cc558);
        _0x2044e0.html(_0x5f0770);
        _0x2924d6.html(_0x1e6535);
        if (_0xdf83.qk) {
          var _0x4d4e14 = window.I18N_MESSAGES["index.game.result.share"];
          window.I18N_MESSAGES["index.game.social.shareResult.caption"];
          _0x21a66a.empty().append(_0x22ef41(_0x4d4e14, 'https://wormate.io', 'wormate.io', _0x13c3f8, _0x13c3f8, 'https://wormate.io/images/og-share-img-new.jpg'));
        }
      };
      _0xc550b6.prototype.T = function () {
        return this.sk;
      };
      _0xc550b6.prototype.U = function () {
        return this.rk;
      };
      return _0xc550b6;
    }();
    var _0x3bcbf9 = function () {
      var _0x971018 = $("#loading-worm-a");
      var _0x492ddf = $("#loading-worm-b");
      var _0x3a438a = $("#loading-worm-c");
      var _0x8ba3d4 = ["100% 100%", "100% 200%", "200% 100%", "200% 200%"];
      var _0x3fa185 = _0x30b30d(_0x5670dc, function () {
        _0x5670dc.call(this, 0x0);
      });
      _0x3fa185.prototype.a = function () {};
      _0x3fa185.prototype.ii = function () {
        _0x5670dc.fk.stop();
        _0x5670dc.fk.fadeOut(0x32);
        _0x5670dc.gk.stop();
        _0x5670dc.gk.fadeOut(0x32);
        _0x5670dc.hk.stop();
        _0x5670dc.hk.fadeOut(0x32);
        _0x5670dc.ik.stop();
        _0x5670dc.ik.fadeOut(0x32);
        _0x5670dc.jk.stop();
        _0x5670dc.jk.fadeOut(0x32);
        _0x5670dc.kk.stop();
        _0x5670dc.kk.fadeIn(0x1f4);
        _0x5670dc.lk.stop();
        _0x5670dc.lk.fadeIn(0x1);
        _0x5670dc.di.stop();
        _0x5670dc.di.fadeIn(0x1f4);
        _0xa8aabd.Le(true);
        _0x5670dc.nk.stop();
        _0x5670dc.nk.fadeOut(0x32);
        _0x5670dc.ok.stop();
        _0x5670dc.ok.fadeOut(0x32);
      };
      _0x3fa185.prototype.ji = function () {
        this.tk();
      };
      _0x3fa185.prototype.tk = function () {
        _0x971018.css("background-position", "100% 200%");
        for (var _0x316cb0 = 0x0; _0x316cb0 < _0x8ba3d4.length; _0x316cb0++) {
          var _0x54698f = Math.floor(Math.random() * _0x8ba3d4.length);
          var _0xeeca94 = _0x8ba3d4[_0x316cb0];
          _0x8ba3d4[_0x316cb0] = _0x8ba3d4[_0x54698f];
          _0x8ba3d4[_0x54698f] = _0xeeca94;
        }
        _0x971018.css('background-position', _0x8ba3d4[0x0]);
        _0x492ddf.css("background-position", _0x8ba3d4[0x1]);
        _0x3a438a.css("background-position", _0x8ba3d4[0x2]);
      };
      return _0x3fa185;
    }();
    var _0x934262 = function () {
      $("#mm-event-text");
      var _0x5578fb = $("#mm-skin-canv");
      var _0xdf5a67 = $("#mm-skin-prev");
      var _0x1c5597 = $("#mm-skin-next");
      var _0x71fd9f = $("#mm-skin-over");
      var _0x3212cc = $("#mm-skin-over-button-list");
      var _0x191277 = $("#mm-params-nickname");
      var _0x51fb27 = $("#mm-params-game-mode");
      var _0x56ebd4 = $('#mm-action-buttons');
      var _0x272ed2 = $('#mm-action-play');
      var _0x4ddb98 = $("#mm-action-guest");
      var _0xfc81b = $("#mm-action-login");
      var _0x3aa528 = $("#mm-player-info");
      var _0x43d082 = $('#mm-store');
      var _0x305915 = $("#mm-leaders");
      var _0xed9957 = $("#mm-settings");
      var _0x4f30b4 = $("#mm-coins-box");
      var _0x2df809 = $("#mm-player-avatar");
      var _0x13594e = $('#mm-player-username');
      var _0xf77c57 = $("#mm-coins-val");
      var _0x4351e6 = $("#mm-player-exp-bar");
      var _0x413603 = $('#mm-player-exp-val');
      var _0x509f0a = $("#mm-player-level");
      var _0x69f095 = _0x30b30d(_0x5670dc, function () {
        _0x5670dc.call(this, 0x1);
        var _0x46f5bd = window.anApp = _0x47002d;
        this.uk = new _0x15c2ac(_0x5578fb);
        _0x51fb27.click(function () {
          _0x46f5bd.r.Cd();
        });
        _0x5578fb.click(function () {
          if (_0x46f5bd.u.P()) {
            _0x46f5bd.r.Cd();
            _0x46f5bd.s.I(_0x46f5bd.s.$h);
          }
        });
        _0xdf5a67.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.t.Ah();
        });
        _0x1c5597.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.t.zh();
        });
        _0x191277.keypress(function (_0x29ce80) {
          if (_0x29ce80.keyCode == 0xd) {
            _0x46f5bd.na();
          }
        });
        _0x272ed2.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.na();
        });
        _0x4ddb98.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.na();
        });
        _0xfc81b.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.s.I(_0x46f5bd.s.Zh);
        });
        _0xed9957.click(function () {
          _0x46f5bd.r.Cd();
          _0x46f5bd.s.I(_0x46f5bd.s.xa);
        });
        _0x3aa528.click(function () {
          if (_0x46f5bd.u.P()) {
            _0x46f5bd.r.Cd();
            _0x46f5bd.s.I(_0x46f5bd.s.Yh);
          }
        });
        _0x305915.click(function () {
          if (_0x46f5bd.u.P()) {
            _0x46f5bd.r.Cd();
            _0x46f5bd.s.I(_0x46f5bd.s.Xh);
          }
        });
        _0x43d082.click(function () {
          if (_0x46f5bd.u.P()) {
            _0x46f5bd.r.Cd();
            _0x46f5bd.s.I(_0x46f5bd.s._h);
          }
        });
        _0x4f30b4.click(function () {
          if (_0x46f5bd.u.P()) {
            _0x46f5bd.r.Cd();
            _0x46f5bd.s.I(_0x46f5bd.s.Wh);
          }
        });
        this.vk();
        this.wk();
        $("#final-continue").html("<div id=\"final-continue1\">Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠÙ‡</div>");
        $("#final-continue").after("<div id=\"final-replay\">Ø±Ø³Ø¨ÙˆÙ†</div>");
        $("#final-replay").click(function () {
          let _0x2a2078 = hoisinhnhanh;
          if (_0x2a2078) {
            anApp.r.Hd();
            anApp.sa(_0x2a2078);
          }
        });
        var _0x14625c = _0x22dc20(_0x301e0d.va);
        if (_0x14625c != "ARENA" && _0x14625c != "TEAM2") {
          _0x14625c = "ARENA";
        }
        _0x51fb27.val(_0x14625c);
        console.log("Load GM: " + _0x14625c);
      });
      _0x69f095.prototype.a = function () {
        var _0xa1df95 = window.anApp = _0x47002d;
        var _0x281dce = this;
        _0xa1df95.u.V(function () {
          _0xa1df95.s.F.xk();
        });
        _0xa1df95.u.Pi(function () {
          if (_0xa1df95.u.P()) {
            _0xa1df95.t.Bh(_0xa1df95.u.Di(), _0xc00eb6.ia);
            _0xa1df95.t.Bh(_0xa1df95.u.Ei(), _0xc00eb6.ja);
            _0xa1df95.t.Bh(_0xa1df95.u.Fi(), _0xc00eb6.ka);
            _0xa1df95.t.Bh(_0xa1df95.u.Gi(), _0xc00eb6.la);
            _0xa1df95.t.Bh(_0xa1df95.u.Hi(), _0xc00eb6.ma);
          } else {
            _0xa1df95.t.Bh(_0xa1df95.Ga(), _0xc00eb6.ia);
            _0xa1df95.t.Bh(0x0, _0xc00eb6.ja);
            _0xa1df95.t.Bh(0x0, _0xc00eb6.ka);
            _0xa1df95.t.Bh(0x0, _0xc00eb6.la);
            _0xa1df95.t.Bh(0x0, _0xc00eb6.ma);
          }
        });
        _0xa1df95.u.Pi(function () {
          _0x272ed2.toggle(_0xa1df95.u.P());
          _0xfc81b.toggle(!_0xa1df95.u.P());
          _0x4ddb98.toggle(!_0xa1df95.u.P());
          _0x305915.toggle(_0xa1df95.u.P());
          _0x43d082.toggle(_0xa1df95.u.P());
          _0x4f30b4.toggle(_0xa1df95.u.P());
          if (_0xa1df95.u.P()) {
            _0x71fd9f.hide();
            _0x13594e.html(_0xa1df95.u.wi());
            _0x2df809.attr("src", _0xa1df95.u.xi());
            _0xf77c57.html(_0xa1df95.u.zi());
            _0x4351e6.width(_0xa1df95.u.Bi() * 0x64 / _0xa1df95.u.Ci() + '%');
            _0x413603.html(_0xa1df95.u.Bi() + " / " + _0xa1df95.u.Ci());
            _0x509f0a.html(_0xa1df95.u.Ai());
            _0x191277.val(_0xa1df95.u.ga());
          } else {
            _0x71fd9f.toggle(_0xdf83.qk && !_0xa1df95.Ha());
            _0x13594e.html(_0x13594e.data("guest"));
            _0x2df809.attr("src", "/images/guest-avatar-xmas2022.png");
            _0xf77c57.html('10');
            _0x4351e6.width('0');
            _0x413603.html('');
            _0x509f0a.html(0x1);
            _0x191277.val(_0x22dc20(_0x301e0d.Aa));
          }
        });
        _0xa1df95.t.xh(function () {
          _0x281dce.uk.ak(_0xa1df95.t.ha(_0xc00eb6.ia), false, false);
          _0x281dce.uk.bk(_0xa1df95.t.ha(_0xc00eb6.ja), false, false);
          _0x281dce.uk.ck(_0xa1df95.t.ha(_0xc00eb6.ka), false, false);
          _0x281dce.uk.dk(_0xa1df95.t.ha(_0xc00eb6.la), false, false);
          _0x281dce.uk.ek(_0xa1df95.t.ha(_0xc00eb6.ma), false, false);
        });
      };
      _0x69f095.prototype.ii = function () {
        _0x5670dc.fk.stop();
        _0x5670dc.fk.fadeOut(0x32);
        _0x5670dc.gk.stop();
        _0x5670dc.gk.fadeOut(0x32);
        _0x5670dc.hk.stop();
        _0x5670dc.hk.fadeIn(0x1f4);
        _0x5670dc.ik.stop();
        _0x5670dc.ik.fadeOut(0x32);
        _0x5670dc.jk.stop();
        _0x5670dc.jk.fadeOut(0x32);
        _0x5670dc.kk.stop();
        _0x5670dc.kk.fadeOut(0x32);
        _0x5670dc.lk.stop();
        _0x5670dc.lk.fadeIn(0x1);
        _0x5670dc.di.stop();
        _0x5670dc.di.fadeIn(0x1f4);
        _0xa8aabd.Le(true);
        _0x5670dc.nk.stop();
        _0x5670dc.nk.fadeIn(0x1f4);
        _0x5670dc.ok.stop();
        _0x5670dc.ok.fadeIn(0x1f4);
      };
      _0x69f095.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
        this.uk.Le(true);
      };
      _0x69f095.prototype.ei = function () {
        this.uk.Le(false);
      };
      _0x69f095.prototype.Ra = function () {
        this.uk.Ra();
      };
      _0x69f095.prototype.Pa = function (_0x3c16ef, _0x19fd40) {
        this.uk.Pa();
      };
      _0x69f095.prototype.ga = function () {
        return _0x191277.val();
      };
      _0x69f095.prototype.D = function () {
        return _0x51fb27.val();
      };
      _0x69f095.prototype.xk = function () {
        _0x56ebd4.show();
      };
      _0x69f095.prototype.vk = function () {
        var _0x1805f0 = $('#mm-advice-cont').children();
        var _0x51558e = 0x0;
        setInterval(function () {
          _0x1805f0.eq(_0x51558e).fadeOut(0x1f4, function () {
            if (++_0x51558e >= _0x1805f0.length) {
              _0x51558e = 0x0;
            }
            _0x1805f0.eq(_0x51558e).fadeIn(0x1f4).css("display", "inline-block");
          });
        }, 0xbb8);
      };
      _0x69f095.prototype.wk = function () {
        function _0x22e3cc() {
          _0x240a8e.Ka(true);
          setTimeout(function () {
            _0x71fd9f.hide();
          }, 0xbb8);
        }
        var _0x240a8e = window.anApp = _0x47002d;
        if (_0xdf83.qk && !_0x240a8e.Ha()) {
          _0x71fd9f.show();
          var _0x50c12d = window.I18N_MESSAGES["index.game.main.menu.unlockSkins.share"];
          var _0x19c52f = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"] + " https://wormate.io/ #wormate #wormateio");
          var _0x477c34 = encodeURIComponent(window.I18N_MESSAGES["index.game.main.menu.unlockSkins.comeAndPlay"]);
          _0x3212cc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + _0x19c52f + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"><span>" + _0x50c12d + '</span></a>').click(_0x22e3cc));
          _0x3212cc.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + _0x477c34 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"><span>" + _0x50c12d + '</span></a>').click(_0x22e3cc));
        }
      };
      return _0x69f095;
    }();
    var _0x21e4ca = function () {
      var _0x20b20a = _0x30b30d(_0x5670dc, function () {
        _0x5670dc.call(this, 0x0);
      });
      _0x20b20a.prototype.a = function () {};
      _0x20b20a.prototype.ii = function () {
        _0x5670dc.fk.stop();
        _0x5670dc.fk.fadeOut(0x32);
        _0x5670dc.gk.stop();
        _0x5670dc.gk.fadeOut(0x32);
        _0x5670dc.hk.stop();
        _0x5670dc.hk.fadeOut(0x32);
        _0x5670dc.ik.stop();
        _0x5670dc.ik.fadeOut(0x32);
        _0x5670dc.jk.stop();
        _0x5670dc.jk.fadeOut(0x32);
        _0x5670dc.kk.stop();
        _0x5670dc.kk.fadeOut(0x32);
        _0x5670dc.lk.stop();
        _0x5670dc.lk.fadeOut(0x1);
        _0x5670dc.di.stop();
        _0x5670dc.di.fadeOut(0x32);
        _0xa8aabd.Le(false);
        _0x5670dc.nk.stop();
        _0x5670dc.nk.fadeOut(0x32);
        _0x5670dc.ok.stop();
        _0x5670dc.ok.fadeOut(0x32);
      };
      return _0x20b20a;
    }();
    var _0x4f763e = function () {
      var _0x54e528 = $('#toaster-stack');
      var _0x2f7189 = _0x30b30d(_0x5670dc, function () {
        _0x5670dc.call(this, 0x0);
        this.yk = [];
        this.zk = null;
      });
      _0x2f7189.prototype.a = function () {};
      _0x2f7189.prototype.ii = function () {
        _0x5670dc.fk.stop();
        _0x5670dc.fk.fadeOut(0x32);
        _0x5670dc.gk.stop();
        _0x5670dc.gk.fadeOut(0x32);
        _0x5670dc.hk.stop();
        _0x5670dc.hk.fadeOut(0x32);
        _0x5670dc.ik.stop();
        _0x5670dc.ik.fadeOut(0x32);
        _0x5670dc.jk.stop();
        _0x5670dc.jk.fadeIn(0x1f4);
        _0x5670dc.kk.stop();
        _0x5670dc.kk.fadeOut(0x32);
        _0x5670dc.lk.stop();
        _0x5670dc.lk.fadeIn(0x1);
        _0x5670dc.di.stop();
        _0x5670dc.di.fadeIn(0x1f4);
        _0xa8aabd.Le(true);
        _0x5670dc.nk.stop();
        _0x5670dc.nk.fadeOut(0x32);
        _0x5670dc.ok.stop();
        _0x5670dc.ok.fadeIn(0x1f4);
      };
      _0x2f7189.prototype.ji = function () {
        this.Ak();
      };
      _0x2f7189.prototype.mi = function () {
        return this.zk != null || this.yk.length > 0x0;
      };
      _0x2f7189.prototype._ = function (_0x59bc0c) {
        this.yk.unshift(_0x59bc0c);
        setTimeout(function () {
          (window.anApp = _0x47002d).s.ki();
        }, 0x0);
      };
      _0x2f7189.prototype.Ti = function (_0x59cba6) {
        this.yk.push(_0x59cba6);
        setTimeout(function () {
          (window.anApp = _0x47002d).s.ki();
        }, 0x0);
      };
      _0x2f7189.prototype.Ak = function () {
        var _0xfc169 = this;
        if (this.zk == null) {
          if (this.yk.length == 0x0) {
            (window.anApp = _0x47002d).s.gi();
            return;
          }
          var _0x26c5e2 = this.yk.shift();
          this.zk = _0x26c5e2;
          var _0x41f3ae = _0x26c5e2.Bk();
          _0x41f3ae.hide();
          _0x41f3ae.fadeIn(0x12c);
          _0x54e528.append(_0x41f3ae);
          _0x26c5e2.Ck = function () {
            _0x41f3ae.fadeOut(0x12c);
            setTimeout(function () {
              _0x41f3ae.remove();
            }, 0x12c);
            if (_0xfc169.zk == _0x26c5e2) {
              _0xfc169.zk = null;
            }
            _0xfc169.Ak();
          };
          _0x26c5e2.ji();
        }
      };
      return _0x2f7189;
    }();
    var _0x4bb18f = function () {
      var _0xc84459 = $('#popup-menu-label');
      var _0x22f73f = $("#popup-menu-coins-box");
      var _0x32e5d9 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        var _0xd2601 = window.anApp = _0x47002d;
        _0xd2601.r.Cd();
        _0xd2601.s.gi();
      });
      _0x22f73f.click(function () {
        var _0x22d54e = window.anApp = _0x47002d;
        if (_0x22d54e.u.P()) {
          _0x22d54e.r.Cd();
          _0x22d54e.s.I(_0x22d54e.s.Wh);
        }
      });
      var _0x1ac9b0 = _0x30b30d(_0x5670dc, function (_0xdb2951, _0x33b5f1) {
        _0x5670dc.call(this, 0x1);
        this.ad = _0xdb2951;
        this.Dk = _0x33b5f1;
      });
      _0x1ac9b0.prototype.a = function () {
        _0x1ac9b0.parent.prototype.a.call(this);
        if (!_0x1ac9b0.Ek) {
          _0x1ac9b0.Ek = true;
          var _0x26d5c0 = window.anApp = _0x47002d;
          _0x26d5c0.u.Pi(function () {
            if (_0x26d5c0.u.P()) {
              _0x32e5d9.html(_0x26d5c0.u.zi());
            } else {
              _0x32e5d9.html('0');
            }
          });
        }
      };
      _0x1ac9b0.Fk = $("#coins-view");
      _0x1ac9b0.Gk = $("#leaders-view");
      _0x1ac9b0.Hk = $("#profile-view");
      _0x1ac9b0.Ik = $("#settings-view");
      _0x1ac9b0.Jk = $("#login-view");
      _0x1ac9b0.Kk = $("#skins-view");
      _0x1ac9b0.Lk = $("#store-view");
      _0x1ac9b0.Mk = $("#wear-view");
      _0x1ac9b0.Nk = $('#withdraw-consent-view');
      _0x1ac9b0.Ok = $("#delete-account-view");
      _0x1ac9b0.Pk = $("#please-wait-view");
      _0x1ac9b0.prototype.ii = function () {
        _0x5670dc.fk.stop();
        _0x5670dc.fk.fadeOut(0xc8);
        _0x5670dc.gk.stop();
        _0x5670dc.gk.fadeOut(0xc8);
        _0x5670dc.hk.stop();
        _0x5670dc.hk.fadeOut(0xc8);
        _0x5670dc.ik.stop();
        _0x5670dc.ik.fadeIn(0xc8);
        _0x5670dc.jk.stop();
        _0x5670dc.jk.fadeOut(0xc8);
        _0x5670dc.kk.stop();
        _0x5670dc.kk.fadeOut(0xc8);
        _0x5670dc.nk.stop();
        _0x5670dc.nk.fadeIn(0xc8);
        _0x5670dc.ok.stop();
        _0x5670dc.ok.fadeIn(0xc8);
        _0xc84459.html(this.ad);
        _0x22f73f.toggle(this.Dk);
        this.Qk();
        this.Rk();
      };
      _0x1ac9b0.prototype.Rk = function () {};
      _0x1ac9b0.prototype.Sk = function () {
        _0x4bb18f.Pk.stop();
        _0x4bb18f.Pk.fadeIn(0x12c);
      };
      _0x1ac9b0.prototype.Qk = function () {
        _0x4bb18f.Pk.stop();
        _0x4bb18f.Pk.fadeOut(0x12c);
      };
      return _0x1ac9b0;
    }();
    var _0x5c98a7 = function () {
      var _0x11e5af = $("#store-buy-coins_125000");
      var _0x33e4e9 = $("#store-buy-coins_50000");
      var _0x3a14a0 = $("#store-buy-coins_16000");
      var _0x2f6e00 = $('#store-buy-coins_7000');
      var _0x169a80 = $("#store-buy-coins_3250");
      var _0x38cff7 = $("#store-buy-coins_1250");
      var _0x57782c = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.coins.tab"], false);
        var _0x238575 = window.anApp = _0x47002d;
        var _0x3689d8 = this;
        _0x11e5af.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_125000");
        });
        _0x33e4e9.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_50000");
        });
        _0x3a14a0.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_16000");
        });
        _0x2f6e00.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_7000");
        });
        _0x169a80.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_3250");
        });
        _0x38cff7.click(function () {
          _0x238575.r.Cd();
          _0x3689d8.Tk("coins_1250");
        });
      });
      _0x57782c.prototype.a = function () {
        _0x57782c.parent.prototype.a.call(this);
      };
      _0x57782c.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeIn(0xc8);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x57782c.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
      };
      _0x57782c.prototype.Tk = function (_0x208436) {};
      return _0x57782c;
    }();
    var _0x31d0e3 = function () {
      var _0x17d9fc = $("#highscore-table");
      var _0x41a2b1 = $("#leaders-button-level");
      var _0x356d52 = $('#leaders-button-highscore');
      var _0x1a3117 = $("#leaders-button-kills");
      var _0x9f6ca1 = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.leaders.tab"], true);
        var _0x5121ee = window.anApp = _0x47002d;
        var _0x122ae6 = this;
        this.Uk = {};
        this.Vk = {
          'Wk': {
            'Xk': _0x41a2b1,
            'Yk': 'byLevel'
          },
          'Zk': {
            'Xk': _0x356d52,
            'Yk': "byHighScore"
          },
          '$k': {
            'Xk': _0x1a3117,
            'Yk': "byKillsAndHeadShots"
          }
        };
        _0x41a2b1.click(function () {
          _0x5121ee.r.Cd();
          _0x122ae6._k(_0x122ae6.Vk.Wk);
        });
        _0x356d52.click(function () {
          _0x5121ee.r.Cd();
          _0x122ae6._k(_0x122ae6.Vk.Zk);
        });
        _0x1a3117.click(function () {
          _0x5121ee.r.Cd();
          _0x122ae6._k(_0x122ae6.Vk.$k);
        });
      });
      _0x9f6ca1.prototype.a = function () {
        _0x9f6ca1.parent.prototype.a.call(this);
      };
      _0x9f6ca1.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeIn(0xc8);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x9f6ca1.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
        var _0x58ad3e = this;
        this.Sk();
        $.get("https://gateway.wormate.io/pub/leaders", function (_0x5ac1bd) {
          _0x58ad3e.Uk = _0x5ac1bd;
          _0x58ad3e._k(_0x58ad3e.al ?? _0x58ad3e.Vk.Wk);
          _0x58ad3e.Qk();
        }).done(function () {
          _0x58ad3e.Qk();
        });
      };
      _0x9f6ca1.prototype._k = function (_0x39f8e2) {
        this.al = _0x39f8e2;
        for (var _0x3036d2 in this.Vk) {
          if (this.Vk.hasOwnProperty(_0x3036d2)) {
            var _0x2f78fc = this.Vk[_0x3036d2];
            _0x2f78fc.Xk.removeClass("pressed");
          }
        }
        this.al.Xk.addClass("pressed");
        var _0x2e07f1 = this.Uk[this.al.Yk];
        var _0x4004c1 = '';
        for (var _0x277ea6 = 0x0; _0x277ea6 < _0x2e07f1.length; _0x277ea6++) {
          var _0x74cb62 = _0x2e07f1[_0x277ea6];
          _0x4004c1 += "<div class=\"table-row\"><span>" + (_0x277ea6 + 0x1) + "</span><span><img src=\"" + _0x74cb62.avatarUrl + "\"/></span><span>" + _0x74cb62.username + "</span><span>" + _0x74cb62.level + "</span><span>" + _0x74cb62.highScore + "</span><span>" + _0x74cb62.headShots + " / " + _0x74cb62.kills + "</span></div>";
        }
        _0x17d9fc.empty();
        _0x17d9fc.append(_0x4004c1);
      };
      return _0x9f6ca1;
    }();
    var _0x1e31f1 = function () {
      var _0x26fbcd = $("#popup-login-gg");
      var _0xaf3573 = $('#popup-login-fb');
      var _0x2ba22f = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES['index.game.popup.menu.login.tab'], false);
        var _0x14bf71 = window.anApp = _0x47002d;
        var _0x1dca5b = this;
        _0x26fbcd.click(function () {
          _0x14bf71.r.Cd();
          _0x1dca5b.Sk();
          _0x14bf71.u.Qi(function () {
            _0x1dca5b.Qk();
          });
          setTimeout(function () {
            _0x1dca5b.Qk();
          }, 0x2710);
          _0x14bf71.u.Zi();
        });
        _0xaf3573.click(function () {
          _0x14bf71.r.Cd();
          _0x1dca5b.Sk();
          _0x14bf71.u.Qi(function () {
            _0x1dca5b.Qk();
          });
          setTimeout(function () {
            _0x1dca5b.Qk();
          }, 0x2710);
          _0x14bf71.u.Vi();
        });
      });
      _0x2ba22f.prototype.a = function () {
        _0x2ba22f.parent.prototype.a.call(this);
      };
      _0x2ba22f.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeIn(0xc8);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x2ba22f.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
      };
      return _0x2ba22f;
    }();
    var _0x12bccc = function () {
      var _0x4cc754 = $('#profile-avatar');
      var _0x3aba87 = $("#profile-username");
      var _0x251dd9 = $("#profile-experience-bar");
      var _0x1f5d89 = $("#profile-experience-val");
      var _0x4387ea = $("#profile-level");
      var _0x30fe2b = $('#profile-stat-highScore');
      var _0xc81e70 = $("#profile-stat-bestSurvivalTime");
      var _0x162ae0 = $('#profile-stat-kills');
      var _0x535575 = $('#profile-stat-headshots');
      var _0x4ee9b3 = $('#profile-stat-gamesPlayed');
      var _0x585ad5 = $("#profile-stat-totalTimeSpent");
      var _0x3efd02 = $("#profile-stat-registrationDate");
      var _0x3b958e = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES['index.game.popup.menu.profile.tab'], true);
      });
      _0x3b958e.prototype.a = function () {
        _0x3b958e.parent.prototype.a.call(this);
      };
      _0x3b958e.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeIn(0xc8);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x3b958e.prototype.ji = function () {
        var _0x5594d6 = window.anApp = _0x47002d;
        _0x5594d6.r.Dd();
        var _0x5b993f = _0x5594d6.u.Oi();
        var _0x1d4556 = moment([_0x5b993f.year, _0x5b993f.month - 0x1, _0x5b993f.day]).format('LL');
        _0x3aba87.html(_0x5594d6.u.wi());
        _0x4cc754.attr("src", _0x5594d6.u.xi());
        _0x251dd9.width(_0x5594d6.u.Bi() * 0x64 / _0x5594d6.u.Ci() + '%');
        _0x1f5d89.html(_0x5594d6.u.Bi() + " / " + _0x5594d6.u.Ci());
        _0x4387ea.html(_0x5594d6.u.Ai());
        _0x30fe2b.html(_0x5594d6.u.Ii());
        _0xc81e70.html(_0x449275(_0x5594d6.u.Ji()));
        _0x162ae0.html(_0x5594d6.u.Ki());
        _0x535575.html(_0x5594d6.u.Li());
        _0x4ee9b3.html(_0x5594d6.u.Mi());
        _0x585ad5.html(_0x449275(_0x5594d6.u.Ni()));
        _0x3efd02.html(_0x1d4556);
      };
      return _0x3b958e;
    }();
    var _0x39c256 = function () {
      var _0x2c4ce7 = $("#settings-music-enabled-switch");
      var _0x14c1a6 = $("#settings-sfx-enabled-switch");
      var _0x141bce = $('#settings-show-names-switch');
      var _0x494202 = $("#popup-logout");
      var _0x3fdc06 = $("#popup-logout-container");
      var _0x140164 = $("#popup-delete-account");
      var _0x457815 = $("#popup-delete-account-container");
      var _0x552259 = $("#popup-withdraw-consent");
      var _0x141dc5 = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.settings.tab"], false);
        var _0x2adce0 = this;
        var _0x552c5d = window.anApp = _0x47002d;
        _0x2c4ce7.click(function () {
          var _0x4f5a5b = !!_0x2c4ce7.prop("checked");
          _0x1b7784(_0x301e0d.Me, _0x4f5a5b, 0x1e);
          _0x552c5d.r.td(_0x4f5a5b);
          _0x552c5d.r.Cd();
        });
        _0x14c1a6.click(function () {
          var _0x48fdc7 = !!_0x14c1a6.prop("checked");
          _0x1b7784(_0x301e0d.Ne, _0x48fdc7, 0x1e);
          _0x552c5d.r.rd(_0x48fdc7);
          _0x552c5d.r.Cd();
        });
        _0x141bce.click(function () {
          _0x552c5d.r.Cd();
        });
        _0x494202.click(function () {
          _0x552c5d.r.Cd();
          _0x2adce0.Sk();
          setTimeout(function () {
            _0x2adce0.Qk();
          }, 0x7d0);
          _0x552c5d.u.Wi();
        });
        _0x140164.click(function () {
          if (_0x552c5d.u.P()) {
            _0x552c5d.r.Cd();
            _0x552c5d.s.I(_0x552c5d.s.Vh);
          } else {
            _0x552c5d.r.Hd();
          }
        });
        _0x552259.click(function () {
          if (_0x552c5d.Y()) {
            _0x552c5d.r.Cd();
            _0x552c5d.s.I(_0x552c5d.s.Uh);
          } else {
            _0x552c5d.r.Hd();
          }
        });
      });
      _0x141dc5.prototype.a = function () {
        _0x141dc5.parent.prototype.a.call(this);
        var _0x34d453 = window.anApp = _0x47002d;
        var _0x35f38e = undefined;
        switch (_0x22dc20(_0x301e0d.Me)) {
          case "false":
            _0x35f38e = false;
            break;
          default:
            _0x35f38e = true;
        }
        _0x2c4ce7.prop("checked", _0x35f38e);
        _0x34d453.r.td(_0x35f38e);
        var _0x53c02c = undefined;
        switch (_0x22dc20(_0x301e0d.Ne)) {
          case 'false':
            _0x53c02c = false;
            break;
          default:
            _0x53c02c = true;
        }
        _0x14c1a6.prop('checked', _0x53c02c);
        _0x34d453.r.rd(_0x53c02c);
        var _0x34190a = undefined;
        switch (_0x22dc20(_0x301e0d.ya)) {
          case "false":
            _0x34190a = false;
            break;
          default:
            _0x34190a = true;
        }
        console.log("Load sPN: " + _0x34190a);
        _0x141bce.prop("checked", _0x34190a);
        _0x34d453.u.V(function () {
          _0x3fdc06.toggle(_0x34d453.u.P());
          _0x457815.toggle(_0x34d453.u.P());
        });
      };
      _0x141dc5.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeIn(0xc8);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x141dc5.prototype.ji = function () {
        var _0xd21645 = window.anApp = _0x47002d;
        _0xd21645.r.Dd();
        if (_0xd21645.Y()) {
          _0x552259.show();
        } else {
          _0x552259.hide();
        }
      };
      _0x141dc5.prototype.wa = function () {
        return _0x141bce.prop('checked');
      };
      return _0x141dc5;
    }();
    var _0xae2b17 = function () {
      var _0x2917c7 = $("#store-view-canv");
      var _0x41cb82 = $("#skin-description-text");
      var _0x59e7b1 = $("#skin-group-description-text");
      var _0x22d018 = $("#store-locked-bar");
      var _0x17261e = $("#store-locked-bar-text");
      var _0x2e401c = $("#store-buy-button");
      var _0x50288b = $("#store-item-price");
      var _0x136cd2 = $("#store-groups");
      var _0x44f054 = $("#store-view-prev");
      var _0x5545b1 = $("#store-view-next");
      var _0x39f397 = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.skins.tab"], true);
        var _0x5587ff = this;
        var _0x2d1424 = window.anApp = _0x47002d;
        this.bl = null;
        this.cl = [];
        this.dl = {};
        this.el = new _0x15c2ac(_0x2917c7);
        _0x2e401c.click(function () {
          _0x2d1424.r.Cd();
          _0x5587ff.fl();
        });
        _0x44f054.click(function () {
          _0x2d1424.r.Cd();
          _0x5587ff.bl.gl();
        });
        _0x5545b1.click(function () {
          _0x2d1424.r.Cd();
          _0x5587ff.bl.hl();
        });
      });
      _0x39f397.prototype.a = function () {
        _0x39f397.parent.prototype.a.call(this);
        var _0x423e83 = this;
        var _0x17fa57 = window.anApp = _0x47002d;
        _0x17fa57.p.ca(function () {
          var _0x26c5bf = _0x17fa57.p.Ac();
          if (_0x26c5bf != null) {
            _0x423e83.cl = [];
            for (var _0x306214 = 0x0; _0x306214 < _0x26c5bf.skinGroupArrayDict.length; _0x306214++) {
              _0x423e83.cl.push(new _0x2e1d0a(_0x423e83, _0x26c5bf.skinGroupArrayDict[_0x306214]));
            }
            _0x423e83.dl = {};
            for (var _0x1ac521 = 0x0; _0x1ac521 < _0x26c5bf.skinArrayDict.length; _0x1ac521++) {
              var _0x3556c2 = _0x26c5bf.skinArrayDict[_0x1ac521];
              _0x423e83.dl[_0x3556c2.id] = _0x3556c2;
            }
          }
        });
        this.il(false);
        _0x17fa57.t.xh(function () {
          _0x423e83.il(false);
        });
      };
      _0x39f397.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeIn(0xc8);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x39f397.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
        this.jl();
        this.el.Le(true);
      };
      _0x39f397.prototype.ei = function () {
        this.el.Le(false);
      };
      _0x39f397.prototype.Ra = function () {
        this.el.Ra();
      };
      _0x39f397.prototype.Pa = function (_0x1a9f0f, _0x4ff7e1) {
        this.el.Pa();
      };
      _0x39f397.prototype.jl = function () {
        var _0x52e2ce = this;
        var _0x43f29c = this;
        var _0x9f6b94 = window.anApp = _0x47002d;
        _0x136cd2.empty();
        for (var _0x79fc0b = 0x0; _0x79fc0b < this.cl.length; _0x79fc0b++) {
          (function (_0x127708) {
            var _0x181cda = _0x52e2ce.cl[_0x127708];
            var _0x35b9fd = document.createElement('li');
            _0x136cd2.append(_0x35b9fd);
            var _0xc5e0be = $(_0x35b9fd);
            _0xc5e0be.html(_0x181cda.kl());
            _0xc5e0be.click(function () {
              _0x9f6b94.r.Cd();
              _0x43f29c.ll(_0x181cda);
            });
            _0x181cda.ml = _0xc5e0be;
          })(_0x79fc0b);
        }
        if (this.cl.length > 0x0) {
          var _0xa32ccf = _0x9f6b94.t.ha(_0xc00eb6.ia);
          for (var _0x79fc0b = 0x0; _0x79fc0b < this.cl.length; _0x79fc0b++) {
            var _0x91da05 = this.cl[_0x79fc0b];
            var _0x2ffc3f = _0x91da05.nl.list;
            for (var _0x4b3e7e = 0x0; _0x4b3e7e < _0x2ffc3f.length; _0x4b3e7e++) {
              if (_0x2ffc3f[_0x4b3e7e] == _0xa32ccf) {
                _0x91da05.ol = _0x4b3e7e;
                this.ll(_0x91da05);
                return;
              }
            }
          }
          this.ll(this.cl[0x0]);
        }
      };
      _0x39f397.prototype.ll = function (_0x3d9b76) {
        if (this.bl != _0x3d9b76) {
          var _0x204056 = window.anApp = _0x47002d;
          this.bl = _0x3d9b76;
          _0x136cd2.children().removeClass("pressed");
          if (this.bl.ml) {
            this.bl.ml.addClass("pressed");
          }
          _0x59e7b1.html('');
          if (_0x3d9b76.nl != null) {
            var _0x51fc8b = _0x204056.p.Ac().textDict[_0x3d9b76.nl.description];
            if (_0x51fc8b != null) {
              _0x59e7b1.html(_0x3b767e(_0x51fc8b).includes("href") ? _0x3b767e(_0x51fc8b).replaceAll("href", "target=\"_black\" href") : _0x3b767e(_0x51fc8b));
            }
          }
          this.il(true);
        }
      };
      _0x39f397.prototype.pl = function () {
        return this.bl == null ? _0x1c6898.Yg() : this.bl.ql();
      };
      _0x39f397.prototype.fl = function () {
        var _0x1fc8bf = this;
        this.pl().ah(function (_0x20bfc6) {
          _0x1fc8bf.rl(_0x20bfc6);
        });
      };
      _0x39f397.prototype.rl = function (_0x607946) {
        var _0x56565f = this;
        var _0x513c41 = window.anApp = _0x47002d;
        var _0x30c045 = this.dl[_0x607946].price;
        if (!(_0x513c41.u.zi() < _0x30c045)) {
          this.Sk();
          var _0x1ff993 = _0x513c41.t.ha(_0xc00eb6.ia);
          var _0x2f8567 = _0x513c41.t.ha(_0xc00eb6.ja);
          var _0xbcd846 = _0x513c41.t.ha(_0xc00eb6.ka);
          var _0x333388 = _0x513c41.t.ha(_0xc00eb6.la);
          var _0x33b6b2 = _0x513c41.t.ha(_0xc00eb6.ma);
          _0x513c41.u.Ui(_0x607946, _0xc00eb6.ia, function () {
            _0x513c41.t.Bh(_0x1ff993, _0xc00eb6.ia);
            _0x513c41.t.Bh(_0x2f8567, _0xc00eb6.ja);
            _0x513c41.t.Bh(_0xbcd846, _0xc00eb6.ka);
            _0x513c41.t.Bh(_0x333388, _0xc00eb6.la);
            _0x513c41.t.Bh(_0x33b6b2, _0xc00eb6.ma);
            if (_0x513c41.u.Ch(_0x607946, _0xc00eb6.ia)) {
              _0x513c41.t.Bh(_0x607946, _0xc00eb6.ia);
            }
            _0x56565f.Qk();
          });
        }
      };
      _0x39f397.prototype.il = function (_0x2b7141) {
        var _0x235027 = window.anApp = _0x47002d;
        this.el.bk(_0x235027.t.ha(_0xc00eb6.ja), false, false);
        this.el.ck(_0x235027.t.ha(_0xc00eb6.ka), false, false);
        this.el.dk(_0x235027.t.ha(_0xc00eb6.la), false, false);
        this.el.ek(_0x235027.t.ha(_0xc00eb6.ma), false, false);
        var _0x717da3 = this.pl();
        if (_0x717da3._g()) {
          var _0x185b28 = _0x717da3.$g();
          var _0x4494aa = this.dl[_0x185b28];
          var _0x31377b = false;
          if (_0x235027.t.Ja(_0x185b28, _0xc00eb6.ia)) {
            _0x22d018.hide();
            _0x2e401c.hide();
          } else {
            if (_0x4494aa == null || _0x4494aa.nonbuyable == 0x1) {
              _0x31377b = true;
              _0x22d018.show();
              _0x2e401c.hide();
              _0x17261e.text(window.I18N_MESSAGES["index.game.popup.menu.store.locked"]);
              if (_0x4494aa != null && _0x4494aa.nonbuyable && _0x4494aa.nonbuyableCause != null) {
                var _0x542960 = _0x235027.p.Ac().textDict[_0x4494aa.nonbuyableCause];
                if (_0x542960 != null) {
                  _0x17261e.text(_0x3b767e(_0x542960));
                }
              }
            } else {
              _0x22d018.hide();
              _0x2e401c.show();
              _0x50288b.html(_0x4494aa.price);
            }
          }
          _0x41cb82.html('');
          if (_0x4494aa != null && _0x4494aa.description != null) {
            var _0x131d56 = _0x235027.p.Ac().textDict[_0x4494aa.description];
            if (_0x131d56 != null) {
              _0x41cb82.html(_0x3b767e(_0x131d56).includes("href") ? _0x3b767e(_0x131d56).replaceAll("href", "target=\"_black\" href") : _0x3b767e(_0x131d56));
            }
          }
          StoreSkinID.html(_0x4494aa.id);
          this.el.ak(_0x185b28, true, _0x31377b);
          if (_0x2b7141) {
            _0x235027.t.Bh(_0x185b28, _0xc00eb6.ia);
          }
        }
      };
      var _0x2e1d0a = function () {
        function _0x10deab(_0x4073d, _0x151538) {
          this.sl = _0x4073d;
          this.ol = 0x0;
          this.nl = _0x151538;
        }
        _0x10deab.prototype.gl = function () {
          if (--this.ol < 0x0) {
            this.ol = this.nl.list.length - 0x1;
          }
          this.sl.il(true);
        };
        _0x10deab.prototype.hl = function () {
          if (++this.ol >= this.nl.list.length) {
            this.ol = 0x0;
          }
          this.sl.il(true);
        };
        _0x10deab.prototype.kl = function () {
          let _0x124a87 = _0x3b767e(this.nl.name);
          if (this.nl.img) {
            var _0x597776 = "<img src=\"";
            _0x597776 = _0x597776 + "https://wormateup.live" + "/images/paths/" + this.nl.img;
            _0x124a87 = _0x597776 = _0x597776 + "\" height=\"43\" width=\"220\" />";
          }
          return _0x124a87;
        };
        _0x10deab.prototype.ql = function () {
          return this.ol >= this.nl.list.length ? _0x1c6898.Yg() : _0x1c6898.Zg(this.nl.list[this.ol]);
        };
        return _0x10deab;
      }();
      return _0x39f397;
    }();
    var _0x438eda = function () {
      var _0xd13669 = $("#store-go-coins-button");
      var _0x246c14 = $("#store-go-skins-button");
      var _0x1803bf = $('#store-go-wear-button');
      var _0x2ecd7d = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES['index.game.popup.menu.store.tab'], true);
        var _0x1dddbb = window.anApp = _0x47002d;
        _0xd13669.click(function () {
          _0x1dddbb.r.Cd();
          _0x1dddbb.s.I(_0x1dddbb.s.Wh);
        });
        _0x246c14.click(function () {
          _0x1dddbb.r.Cd();
          _0x1dddbb.s.I(_0x1dddbb.s.$h);
        });
        _0x1803bf.click(function () {
          _0x1dddbb.r.Cd();
          _0x1dddbb.s.I(_0x1dddbb.s.ai);
        });
      });
      _0x2ecd7d.prototype.a = function () {
        _0x2ecd7d.parent.prototype.a.call(this);
      };
      _0x2ecd7d.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeIn(0xc8);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x2ecd7d.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
      };
      return _0x2ecd7d;
    }();
    var _0x72820c = function () {
      var _0x2dd144 = $("#wear-view-canv");
      var _0x12fcc4 = $("#wear-description-text");
      var _0x3b0ffe = $("#wear-locked-bar");
      var _0x35b47a = $('#wear-locked-bar-text');
      var _0x38ea4b = $("#wear-buy-button");
      var _0x3ae51e = $("#wear-item-price");
      var _0x5495de = $("#wear-eyes-button");
      var _0x134ecd = $('#wear-mouths-button');
      var _0x5b9f8f = $("#wear-glasses-button");
      var _0x3444d4 = $('#wear-hats-button');
      var _0x408cfc = $('#wear-tint-chooser');
      var _0x4c2025 = $('#wear-view-prev');
      var _0x295848 = $("#wear-view-next");
      var _0x283fd8 = _0x30b30d(_0x4bb18f, function () {
        var _0x1c8e7b = this;
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.wear.tab"], true);
        var _0x2a56b0 = window.anApp = _0x47002d;
        var _0x537f58 = this;
        this.tl = [];
        this.ja = new _0x3f0e2e(this, _0xc00eb6.ja, _0x5495de);
        this.ka = new _0x3f0e2e(this, _0xc00eb6.ka, _0x134ecd);
        this.la = new _0x3f0e2e(this, _0xc00eb6.la, _0x5b9f8f);
        this.ma = new _0x3f0e2e(this, _0xc00eb6.ma, _0x3444d4);
        this.ul = null;
        this.vl = null;
        this.wl = null;
        this.xl = null;
        this.yl = null;
        this.zl = null;
        this.Al = new _0x15c2ac(_0x2dd144);
        _0x38ea4b.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.Bl();
        });
        _0x4c2025.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.ul.Cl();
        });
        _0x295848.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.ul.Dl();
        });
        _0x5495de.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.El(_0x1c8e7b.ja);
        });
        _0x134ecd.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.El(_0x1c8e7b.ka);
        });
        _0x5b9f8f.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.El(_0x1c8e7b.la);
        });
        _0x3444d4.click(function () {
          _0x2a56b0.r.Cd();
          _0x537f58.El(_0x1c8e7b.ma);
        });
        this.tl.push(this.ja);
        this.tl.push(this.ka);
        this.tl.push(this.la);
        this.tl.push(this.ma);
      });
      _0x283fd8.prototype.a = function () {
        _0x283fd8.parent.prototype.a.call(this);
        var _0x2ce61b = window.anApp = _0x47002d;
        var _0x143fdf = this;
        _0x2ce61b.p.ca(function () {
          var _0x72c6f3 = _0x2ce61b.p.Ac();
          if (_0x72c6f3 != null) {
            _0x143fdf.vl = _0x72c6f3.eyesDict;
            _0x143fdf.wl = _0x72c6f3.mouthDict;
            _0x143fdf.xl = _0x72c6f3.glassesDict;
            _0x143fdf.yl = _0x72c6f3.hatDict;
            _0x143fdf.zl = _0x72c6f3.colorDict;
            _0x143fdf.ja.Fl(_0x72c6f3.eyesVariantArray);
            _0x143fdf.ja.Gl(_0x143fdf.vl);
            _0x143fdf.ka.Fl(_0x72c6f3.mouthVariantArray);
            _0x143fdf.ka.Gl(_0x143fdf.wl);
            _0x143fdf.la.Fl(_0x72c6f3.glassesVariantArray);
            _0x143fdf.la.Gl(_0x143fdf.xl);
            _0x143fdf.ma.Fl(_0x72c6f3.hatVariantArray);
            _0x143fdf.ma.Gl(_0x143fdf.yl);
          }
        });
        this.il(false);
        _0x2ce61b.t.xh(function () {
          _0x143fdf.il(false);
        });
      };
      _0x283fd8.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeIn(0xc8);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x283fd8.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
        this.El(this.ul ?? this.ja);
        this.Al.Le(true);
      };
      _0x283fd8.prototype.ei = function () {
        this.Al.Le(false);
      };
      _0x283fd8.prototype.Ra = function () {
        this.Al.Ra();
      };
      _0x283fd8.prototype.Pa = function (_0x457df5, _0x12fd0e) {
        this.Al.Pa();
      };
      _0x283fd8.prototype.El = function (_0x4727c6) {
        this.ul = _0x4727c6;
        for (var _0x517e64 = 0x0; _0x517e64 < this.tl.length; _0x517e64++) {
          this.tl[_0x517e64].Xk.removeClass("pressed");
        }
        this.ul.Xk.addClass("pressed");
        this.ul.ii();
      };
      _0x283fd8.prototype.Hl = function () {
        return this.ul == null ? _0x1c6898.Yg() : _0x1c6898.Zg({
          'Lb': this.ul.ql(),
          'rc': this.ul.rc
        });
      };
      _0x283fd8.prototype.Bl = function () {
        var _0x748e05 = this;
        this.Hl().ah(function (_0x44a1c1) {
          _0x748e05.Ui(_0x44a1c1.Lb, _0x44a1c1.rc);
        });
      };
      _0x283fd8.prototype.Ui = function (_0x5bd326, _0x46b9e8) {
        var _0x235d02 = this;
        var _0x17961b = window.anApp = _0x47002d;
        var _0x5e0ab3 = undefined;
        switch (_0x46b9e8) {
          case _0xc00eb6.ja:
            _0x5e0ab3 = this.vl[_0x5bd326].price;
            break;
          case _0xc00eb6.ka:
            _0x5e0ab3 = this.wl[_0x5bd326].price;
            break;
          case _0xc00eb6.la:
            _0x5e0ab3 = this.xl[_0x5bd326].price;
            break;
          case _0xc00eb6.ma:
            _0x5e0ab3 = this.yl[_0x5bd326].price;
            break;
          default:
            return;
        }
        if (!(_0x17961b.u.zi() < _0x5e0ab3)) {
          this.Sk();
          var _0xbc2c75 = _0x17961b.t.ha(_0xc00eb6.ia);
          var _0x2f5615 = _0x17961b.t.ha(_0xc00eb6.ja);
          var _0x42d011 = _0x17961b.t.ha(_0xc00eb6.ka);
          var _0x4867d = _0x17961b.t.ha(_0xc00eb6.la);
          var _0x39ed50 = _0x17961b.t.ha(_0xc00eb6.ma);
          _0x17961b.u.Ui(_0x5bd326, _0x46b9e8, function () {
            _0x17961b.t.Bh(_0xbc2c75, _0xc00eb6.ia);
            _0x17961b.t.Bh(_0x2f5615, _0xc00eb6.ja);
            _0x17961b.t.Bh(_0x42d011, _0xc00eb6.ka);
            _0x17961b.t.Bh(_0x4867d, _0xc00eb6.la);
            _0x17961b.t.Bh(_0x39ed50, _0xc00eb6.ma);
            if (_0x17961b.u.Ch(_0x5bd326, _0x46b9e8)) {
              _0x17961b.t.Bh(_0x5bd326, _0x46b9e8);
            }
            _0x235d02.Qk();
          });
        }
      };
      _0x283fd8.prototype.Il = function (_0x5f5de3, _0x4b34cf) {
        switch (_0x4b34cf) {
          case _0xc00eb6.ja:
            return this.vl[_0x5f5de3];
          case _0xc00eb6.ka:
            return this.wl[_0x5f5de3];
          case _0xc00eb6.la:
            return this.xl[_0x5f5de3];
          case _0xc00eb6.ma:
            return this.yl[_0x5f5de3];
        }
        return null;
      };
      _0x283fd8.prototype.il = function (_0x38504a) {
        var _0x5b5518 = window.anApp = _0x47002d;
        this.Al.ak(_0x5b5518.t.ha(_0xc00eb6.ia), false, false);
        this.Al.bk(_0x5b5518.t.ha(_0xc00eb6.ja), false, false);
        this.Al.ck(_0x5b5518.t.ha(_0xc00eb6.ka), false, false);
        this.Al.dk(_0x5b5518.t.ha(_0xc00eb6.la), false, false);
        this.Al.ek(_0x5b5518.t.ha(_0xc00eb6.ma), false, false);
        var _0x2c720f = this.Hl();
        if (_0x2c720f._g()) {
          var _0x2b804e = _0x2c720f.$g();
          var _0x2d4548 = this.Il(_0x2b804e.Lb, _0x2b804e.rc);
          var _0x18ed6c = false;
          if (_0x5b5518.t.Ja(_0x2b804e.Lb, _0x2b804e.rc)) {
            _0x3b0ffe.hide();
            _0x38ea4b.hide();
          } else {
            if (_0x2d4548 == null || _0x2d4548.nonbuyable == 0x1) {
              _0x18ed6c = true;
              _0x3b0ffe.show();
              _0x38ea4b.hide();
              _0x35b47a.text(window.I18N_MESSAGES['index.game.popup.menu.store.locked']);
              if (_0x2d4548 != null && _0x2d4548.nonbuyable && _0x2d4548.nonbuyableCause != null) {
                var _0x5afb58 = _0x5b5518.p.Ac().textDict[_0x2d4548.nonbuyableCause];
                if (_0x5afb58 != null) {
                  _0x35b47a.text(_0x3b767e(_0x5afb58));
                }
              }
            } else {
              _0x3b0ffe.hide();
              _0x38ea4b.show();
              _0x3ae51e.html(_0x2d4548.price);
            }
          }
          _0x12fcc4.html('');
          if (_0x2d4548 != null && _0x2d4548.description != null) {
            var _0x6442dc = _0x5b5518.p.Ac().textDict[_0x2d4548.description];
            if (_0x6442dc != null) {
              _0x12fcc4.html(_0x3b767e(_0x6442dc).includes("href") ? _0x3b767e(_0x6442dc).replaceAll("href", "target=\"_black\" href") : _0x3b767e(_0x6442dc));
            }
          }
          switch (_0x2b804e.rc) {
            case _0xc00eb6.ja:
              this.Al.bk(_0x2b804e.Lb, true, _0x18ed6c);
              break;
            case _0xc00eb6.ka:
              this.Al.ck(_0x2b804e.Lb, true, _0x18ed6c);
              break;
            case _0xc00eb6.la:
              this.Al.dk(_0x2b804e.Lb, true, _0x18ed6c);
              break;
            case _0xc00eb6.ma:
              this.Al.ek(_0x2b804e.Lb, true, _0x18ed6c);
          }
          if (_0x38504a) {
            _0x5b5518.t.Bh(_0x2b804e.Lb, _0x2b804e.rc);
          }
        }
      };
      var _0x3f0e2e = function () {
        function _0xdb6ec(_0x48ec26, _0xe7ee56, _0x137a70) {
          this.sl = _0x48ec26;
          this.rc = _0xe7ee56;
          this.Xk = _0x137a70;
          this.Jl = {};
          this.Kl = [[]];
          this.Ll = -0xa;
          this.Ml = -0xa;
        }
        _0xdb6ec.prototype.Fl = function (_0x490fd7) {
          this.Kl = _0x490fd7;
        };
        _0xdb6ec.prototype.Gl = function (_0x2f74d4) {
          this.Jl = _0x2f74d4;
        };
        _0xdb6ec.prototype.ii = function () {
          var _0x200ca0 = window.anApp = _0x47002d;
          var _0x2472ef = _0x200ca0.t.ha(this.rc);
          for (var _0x4ef125 = 0x0; _0x4ef125 < this.Kl.length; _0x4ef125++) {
            for (var _0x23fcaa = 0x0; _0x23fcaa < this.Kl[_0x4ef125].length; _0x23fcaa++) {
              if (this.Kl[_0x4ef125][_0x23fcaa] == _0x2472ef) {
                this.Nl(_0x4ef125);
                this.Ol(_0x23fcaa);
                return;
              }
            }
          }
          this.Nl(0x0);
          this.Ol(0x0);
        };
        _0xdb6ec.prototype.Cl = function () {
          var _0x201af6 = this.Ll - 0x1;
          if (_0x201af6 < 0x0) {
            _0x201af6 = this.Kl.length - 0x1;
          }
          this.Nl(_0x201af6);
          this.Ol(this.Ml % this.Kl[_0x201af6].length);
        };
        _0xdb6ec.prototype.Dl = function () {
          var _0x981d37 = this.Ll + 0x1;
          if (_0x981d37 >= this.Kl.length) {
            _0x981d37 = 0x0;
          }
          this.Nl(_0x981d37);
          this.Ol(this.Ml % this.Kl[_0x981d37].length);
        };
        _0xdb6ec.prototype.Nl = function (_0x1a6e66) {
          var _0x29ce3f = this;
          if (!(_0x1a6e66 < 0x0) && !(_0x1a6e66 >= this.Kl.length)) {
            this.Ll = _0x1a6e66;
            _0x408cfc.empty();
            var _0x8ffb7 = this.Kl[this.Ll];
            if (_0x8ffb7.length > 0x1) {
              for (var _0x5e98d9 = 0x0; _0x5e98d9 < _0x8ffb7.length; _0x5e98d9++) {
                (function (_0x4d1885) {
                  var _0x20f7ba = _0x8ffb7[_0x4d1885];
                  var _0x3ff79d = _0x29ce3f.Jl[_0x20f7ba];
                  var _0xa21e8e = '#' + _0x29ce3f.sl.zl[_0x3ff79d.prime];
                  var _0x5ab327 = $("<div style=\"border-color:" + _0xa21e8e + "\"></div>");
                  _0x5ab327.click(function () {
                    (window.anApp = _0x47002d).r.Cd();
                    _0x29ce3f.Ol(_0x4d1885);
                  });
                  _0x408cfc.append(_0x5ab327);
                })(_0x5e98d9);
              }
            }
          }
        };
        _0xdb6ec.prototype.Ol = function (_0x43ba94) {
          if (!(_0x43ba94 < 0x0) && !(_0x43ba94 >= this.Kl[this.Ll].length)) {
            this.Ml = _0x43ba94;
            _0x408cfc.children().css("background-color", "transparent");
            var _0x5d1a34 = _0x408cfc.children(':nth-child(' + (0x1 + _0x43ba94) + ')');
            _0x5d1a34.css("background-color", _0x5d1a34.css("border-color"));
            this.sl.il(true);
          }
        };
        _0xdb6ec.prototype.ql = function () {
          return this.Kl[this.Ll][this.Ml];
        };
        return _0xdb6ec;
      }();
      return _0x283fd8;
    }();
    var _0x35bbae = function () {
      var _0x576287 = $('#withdraw-consent-yes');
      var _0x599312 = $("#withdraw-consent-no");
      var _0x4185d7 = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES["index.game.popup.menu.consent.tab"], false);
        var _0x1ab71e = window.anApp = _0x47002d;
        _0x576287.click(function () {
          _0x1ab71e.r.Cd();
          if (_0x1ab71e.Y()) {
            _0x1ab71e.s.I(_0x1ab71e.s.F);
            _0x1ab71e.$(false, true);
            _0x1ab71e.s.aa._(new _0x3e218c());
          } else {
            _0x1ab71e.s.gi();
          }
        });
        _0x599312.click(function () {
          _0x1ab71e.r.Cd();
          _0x1ab71e.s.gi();
        });
      });
      _0x4185d7.prototype.a = function () {
        _0x4185d7.parent.prototype.a.call(this);
      };
      _0x4185d7.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeIn(0xc8);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeOut(0x32);
      };
      _0x4185d7.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Dd();
      };
      return _0x4185d7;
    }();
    var _0xd57a57 = function () {
      var _0x15dd38 = $("#delete-account-timer");
      var _0x295c7b = $("#delete-account-yes");
      var _0xfceff0 = $("#delete-account-no");
      var _0x31f687 = _0x30b30d(_0x4bb18f, function () {
        _0x4bb18f.call(this, window.I18N_MESSAGES['index.game.popup.menu.delete.tab'], false);
        var _0x55423a = window.anApp = _0x47002d;
        _0x295c7b.click(function () {
          _0x55423a.r.Cd();
          if (_0x55423a.u.P()) {
            _0x55423a.u.bj();
            _0x55423a.u.Wi();
          } else {
            _0x55423a.s.gi();
          }
        });
        _0xfceff0.click(function () {
          _0x55423a.r.Cd();
          _0x55423a.s.gi();
        });
        this.Pl = [];
      });
      _0x31f687.prototype.a = function () {
        _0x31f687.parent.prototype.a.call(this);
      };
      _0x31f687.prototype.Rk = function () {
        _0x4bb18f.Fk.stop();
        _0x4bb18f.Fk.fadeOut(0x32);
        _0x4bb18f.Gk.stop();
        _0x4bb18f.Gk.fadeOut(0x32);
        _0x4bb18f.Hk.stop();
        _0x4bb18f.Hk.fadeOut(0x32);
        _0x4bb18f.Jk.stop();
        _0x4bb18f.Jk.fadeOut(0x32);
        _0x4bb18f.Ik.stop();
        _0x4bb18f.Ik.fadeOut(0x32);
        _0x4bb18f.Kk.stop();
        _0x4bb18f.Kk.fadeOut(0x32);
        _0x4bb18f.Lk.stop();
        _0x4bb18f.Lk.fadeOut(0x32);
        _0x4bb18f.Mk.stop();
        _0x4bb18f.Mk.fadeOut(0x32);
        _0x4bb18f.Nk.stop();
        _0x4bb18f.Nk.fadeOut(0x32);
        _0x4bb18f.Ok.stop();
        _0x4bb18f.Ok.fadeIn(0xc8);
      };
      _0x31f687.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Hd();
        _0x295c7b.stop();
        _0x295c7b.hide();
        _0x15dd38.stop();
        _0x15dd38.show();
        _0x15dd38.text(".. 10 ..");
        this.Ql();
        this.Rl(function () {
          _0x15dd38.text(".. 9 ..");
        }, 0x3e8);
        this.Rl(function () {
          _0x15dd38.text(".. 8 ..");
        }, 0x7d0);
        this.Rl(function () {
          _0x15dd38.text(".. 7 ..");
        }, 0xbb8);
        this.Rl(function () {
          _0x15dd38.text(".. 6 ..");
        }, 0xfa0);
        this.Rl(function () {
          _0x15dd38.text(".. 5 ..");
        }, 0x1388);
        this.Rl(function () {
          _0x15dd38.text(".. 4 ..");
        }, 0x1770);
        this.Rl(function () {
          _0x15dd38.text(".. 3 ..");
        }, 0x1b58);
        this.Rl(function () {
          _0x15dd38.text(".. 2 ..");
        }, 0x1f40);
        this.Rl(function () {
          _0x15dd38.text(".. 1 ..");
        }, 0x2328);
        this.Rl(function () {
          _0x15dd38.hide();
          _0x295c7b.fadeIn(0x12c);
        }, 0x2710);
      };
      _0x31f687.prototype.Rl = function (_0x42df90, _0x51195c) {
        var _0x3e003b = setTimeout(_0x42df90, _0x51195c);
        this.Pl.push(_0x3e003b);
      };
      _0x31f687.prototype.Ql = function () {
        for (var _0x30f4b9 = 0x0; _0x30f4b9 < this.Pl.length; _0x30f4b9++) {
          clearTimeout(this.Pl[_0x30f4b9]);
        }
        this.Pl = [];
      };
      return _0x31f687;
    }();
    var _0x4195f4 = function () {
      function _0x32b3b0() {
        this.Ck = function () {};
      }
      _0x32b3b0.prototype.Bk = function () {};
      _0x32b3b0.prototype.ji = function () {};
      return _0x32b3b0;
    }();
    var _0x597ad6 = function () {
      var _0x4c12be = _0x30b30d(_0x4195f4, function (_0x531e3b) {
        _0x4195f4.call(this);
        var _0x486355 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x486355 + "\" class=\"toaster toaster-coins\">    <img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" />    <div class=\"toaster-coins-val\">+" + _0x531e3b + "</div>    <div class=\"toaster-coins-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + "</div></div>");
        var _0x1dc41c = this;
        this.Sl.find('.toaster-coins-close').click(function () {
          (window.anApp = _0x47002d).r.Cd();
          _0x1dc41c.Ck();
        });
      });
      _0x4c12be.prototype.Bk = function () {
        return this.Sl;
      };
      _0x4c12be.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Fd();
      };
      return _0x4c12be;
    }();
    var _0xdb4432 = function () {
      var _0x2c43c2 = _0x30b30d(_0x4195f4, function (_0x318ac7) {
        _0x4195f4.call(this);
        var _0x44a91f = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x44a91f + "\" class=\"toaster toaster-levelup\">    <img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" />    <div class=\"toaster-levelup-val\">" + _0x318ac7 + "</div>    <div class=\"toaster-levelup-text\">" + window.I18N_MESSAGES['index.game.toaster.levelup'] + "</div>    <div class=\"toaster-levelup-close\">" + window.I18N_MESSAGES["index.game.toaster.continue"] + '</div></div>');
        var _0x1a7eee = this;
        this.Sl.find('.toaster-levelup-close').click(function () {
          (window.anApp = _0x47002d).r.Cd();
          _0x1a7eee.Ck();
        });
      });
      _0x2c43c2.prototype.Bk = function () {
        return this.Sl;
      };
      _0x2c43c2.prototype.ji = function () {
        (window.anApp = _0x47002d).r.Ed();
      };
      return _0x2c43c2;
    }();
    var _0x3e218c = function () {
      var _0x4b0317 = _0x30b30d(_0x4195f4, function () {
        _0x4195f4.call(this);
        var _0x34d522 = this;
        var _0x32ea29 = window.anApp = _0x47002d;
        var _0x5d0f41 = Date.now() + '_' + Math.floor(0x3e8 + Math.random() * 0x2327);
        this.Sl = $("<div id=\"" + _0x5d0f41 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + "/images/linelogo-xmas2022.png" + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + window.I18N_MESSAGES["index.game.toaster.consent.text"].replaceAll(" ", "&nbsp;").replaceAll("\n", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + window.I18N_MESSAGES["index.game.toaster.consent.link"] + "</a>    </div>    <div class=\"toaster-consent-close\">" + window.I18N_MESSAGES["index.game.toaster.consent.iAccept"] + "</div></div>");
        this.Tl = this.Sl.find('.toaster-consent-close');
        this.Tl.hide();
        this.Tl.click(function () {
          _0x32ea29.r.Cd();
          if (_0x32ea29.Y()) {
            _0x32ea29.$(true, true);
          }
          _0x34d522.Ck();
        });
      });
      _0x4b0317.prototype.Bk = function () {
        return this.Sl;
      };
      _0x4b0317.prototype.ji = function () {
        var _0x156eb4 = this;
        var _0x18b315 = window.anApp = _0x47002d;
        if (_0x18b315.Y() && !_0x18b315.Z()) {
          _0x18b315.r.Hd();
          setTimeout(function () {
            _0x156eb4.Tl.fadeIn(0x12c);
          }, 0x7d0);
        } else {
          setTimeout(function () {
            _0x156eb4.Ck();
          }, 0x0);
        }
      };
      return _0x4b0317;
    }();
    var _0x248efb = {
      "main": {
        'Ma': _0x5a45f1("aqnvgcpz05orkobh", 'WRM_wormate-io_300x250'),
        'K': _0x5a45f1("ltmolilci1iurq1i", "wormate-io_970x250"),
        'ra': _0x30b678(),
        'e': 0x4,
        'oa': false,
        'qk': true
      },
      miniclip: {
        'Ma': _0x5a45f1("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        'K': _0x5a45f1("ltmolilci1iurq1i", 'wormate-io_970x250'),
        'ra': _0x30b678(),
        'e': 0x4,
        'oa': false,
        'qk': false
      }
    };
    var _0xdf83 = _0x248efb[window.ENV];
    _0xdf83 ||= _0x248efb.main;
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (_0x2306f1) {
      _0x2306f1.preventDefault();
      _0x2306f1.stopPropagation();
      return false;
    });
    _0x1e3f1e("//connect.facebook.net/" + _0xfacdf6 + "/sdk.js", "facebook-jssdk", function () {
      FB.init({
        'appId': '861926850619051',
        'cookie': true,
        'xfbml': true,
        'status': true,
        'version': 'v8.0'
      });
    });
    _0x1e3f1e("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          'client_id': '959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com'
        });
      });
    });
    _0x47002d = _0x501e69();
    _0x47002d.v();
    if (PhoneChecked()) {
      _0x1e3f1e("https://wormateup.live/up/js/joy.min.js", "mobileconfig", function () {
        _0x1728b9();
      });
    }
    ;
    let _0x1728b9 = function () {
      $("#game-canvas").after("<div id='zoom-container'><div id='zoom-in'>+</div><div id='zoom-out'>-</div></div>");
    };
    window.keyMove = 'q';
    window.addEventListener("keydown", function (_0xa1c97) {
      console.log("event.key: " + _0xa1c97.key);
      if (_0xa1c97.key.toLowerCase() !== 'q' || !isPlaying || PilotoAutomatico !== null) {
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
          PilotoAutomatico = null;
        }
      } else {
        const _0x1019a0 = window.tuNewScore;
        if (PilotoAutomatico !== null) {
          clearInterval(PilotoAutomatico);
        }
        PilotoAutomatico = setInterval(function () {
          let _0x314b64 = Math.PI / 0x4;
          null.sk += _0x314b64;
          if (null.sk >= 0x2 * Math.PI) {
            null.sk -= 0x2 * Math.PI;
          } else if (null.sk <= -0x2 * Math.PI) {
            null.sk += 0x2 * Math.PI;
          }
          let _0x58f9b3 = document.getElementById('elementId');
          if (_0x58f9b3) {
            _0x58f9b3.style.transform = "rotate(" + null.sk + "rad)";
          }
        }, 0xa5 + (_0x1019a0 >= 0x186a0 ? 0x5 : _0x1019a0 >= 0x2710 ? 0xa : 0x0));
      }
      localStorage.setItem("SaveGameXT", JSON.stringify(theoKzObjects));
    }, false);
    theoKzObjects.loading = true;
    var _0x19664f = '';
    _0x19664f += "</div>";
    _0x19664f += "</div>";
    _0x19664f += '</div>';
    _0x19664f += "<div id=\"wormcerca\">";
    _0x19664f += "<img class=\"pwrups v0\" style=\"display: none;\" src=\"https://i.imgur.com/M1LFPpp.png\">";
    _0x19664f += "<img class=\"pwrups v1\" style=\"display: none;\" src=\"https://i.imgur.com/z162iYa.png\">";
    _0x19664f += "<img class=\"pwrups v2\" style=\"display: none;\" src=\"https://i.imgur.com/kXlF32q.png\">";
    _0x19664f += "<img class=\"pwrups v3\" style=\"display: none;\" src=\"https://i.imgur.com/kJ6oz7e.png\">";
    _0x19664f += "<img class=\"pwrups v4\" style=\"display: none;\" src=\"https://i.imgur.com/l3ds43O.png\">";
    _0x19664f += "<img class=\"pwrups v5\" style=\"display: none;\" src=\"https://i.imgur.com/FqA56k6.png\">";
    _0x19664f += "<img class=\"pwrups v6\" style=\"display: none;\" src=\"https://i.imgur.com/mSCZeEp.png\">";
    _0x19664f += "</div>";
    _0x19664f += "<img class=\"worm_1\" src=\"https://i.imgur.com/iekrYYm.png\"><span class=\"Worm_cerca\"></span>";
    _0x19664f += "</div><div class=\"worm_2\"><button id=\"settingBtn\"><img src=\"https://i.imgur.com/bKAe6W9.png\"/></button><div id=\"settingContent\"><div class=\"container1\"><span class=\"settings_span\">Spin-Fast: </span><input id=\"smoothCamera\" class=\"range\" type=\"range\" min=\"0.3\" max=\"0.6\" value=\"' + theoKzObjects.smoothCamera + '\" step=\"0.1\" onmousemove=\"smoothCameraValue.value=value\" /></div><div class=\"container1\">\n        <span class=\"settings_span\">Power-ups-Size: </span>\n        <input id=\"PortionSize\" class=\"range\" type=\"range\" min=\"1\" max=\"6\" value=\"' + theoKzObjects.PortionSize + '\" step=\"1\" onmousemove=\"rangevalue1.value=value\" />\n        </div>\n        \n      <div class=\"container1\">\n      <span class=\"settings_span\">Power-ups-Aura: </span>\n      <input id=\"PortionAura\" class=\"range\" type=\"range\" min=\"1.2\" max=\"3.2\" value=\"' + theoKzObjects.PortionAura + '\" step=\"0.2\" onmousemove=\"PortionAuravalue.value=value\" />\n      </div>\n       \n      <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Size: </span>\n                    <input id=\"FoodSize\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodSize + '\" step=\"0.5\" onmousemove=\"rangevalue2.value=value\" />\n                    </div>\n                    <div class=\"container1\">\n                    <span class=\"settings_span\">Food-Shadow: </span>\n                    <input id=\"FoodShadow\" class=\"range\" type=\"range\" min=\"0.5\" max=\"3\" value=\"' + theoKzObjects.FoodShadow + '\" step=\"0.5\" onmousemove=\"FoodShadowvalue.value=value\" />\n                    </div>\n    </div>\n    </div><div style=\"display:none\" id=\"zoom-container\"><div id=\"zoom-out\">-</div><div id=\"zoom-in\">+</div><div class=\"worm_3\">x.<span id=\"zoom-percentage\"></span>";
    $("#game-view").append(_0x19664f);
    function _0x3f9d14(_0x12dcb8) {
      if (theoKzObjects.PropertyManager) {
        _0x12dcb8.skinId = theoKzObjects.PropertyManager.rh;
        _0x12dcb8.eyesId = theoKzObjects.PropertyManager.sh;
        _0x12dcb8.mouthId = theoKzObjects.PropertyManager.th;
        _0x12dcb8.glassesId = theoKzObjects.PropertyManager.uh;
        _0x12dcb8.hatId = theoKzObjects.PropertyManager.vh;
      }
    }
    function _0x15cab6() {
      $("#mm-event-text").replaceWith("<div class=\"text-vnxx\"><a href=\"https://www.wormateup.live\">Worm UP 2025</a></div>");
      $("#mm-store").after("\n    <div id=\"mm-store\" style=\"float: right; position: relative; margin-right: 10px; min-width: 140px;\">\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n            <div onclick=\"openPopup()\">\n                <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px;\"></i> Ø§Ù„Ø§Ø¹Ø¯Ø§Ø¯Ø§Øª\n            </div>\n            <div id=\"popup\" class=\"popup\">\n                <div class=\"phdr1\" style=\"display: flex; justify-content: center; align-items: center;\">\n                    <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: yellow; font-size: 25px; margin-right: 10px;\"></i> \n                    <span>Ø§Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨</span>\n                </div>\n                <button class=\"close-button\" onclick=\"closePopup()\">Ø§ØºÙ„Ø§Ù‚</button>\n\n                <!-- Ø£Ø²Ø±Ø§Ø± Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª -->\n                <div class=\"tab-buttons\" style=\"display: flex; justify-content: space-around; margin-bottom: 10px;\">\n                    <button class=\"tab-button active\" onclick=\"openTab('gameSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨</button>\n                    <button class=\"tab-button\" onclick=\"openTab('messageSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù‡Ø¯Ø§Øª</button>\n                    <button class=\"tab-button\" onclick=\"openTab('backgroundSettings')\">Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª</button>\n                </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ù„Ø¹Ø¨ -->\n                <div id=\"gameSettings\" class=\"tab-content active\">\n                    <div id=\"kich-hoat\">\n                        ID: <input type=\"text\" value=\"\" class=\"you-id\" />\n                        <button class=\"you-id-copy\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  Ù†Ø³Ø®!'));\">\n                            COPY\n                        </button>\n                    </div>\n                    <table>\n                        <tbody>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Eat Fast:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-Abilityzoom-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-Abilityzoom-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Streamer Mode:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmode-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmode-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Total HS:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodesaveheadshot-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodesaveheadshot-switch\"></label>\n                                    </div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> 1 Top:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodebatop-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodebatop-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #0d7aef; font-size: 22px;\"></i> Off Emoj:\n                                        </span>\n                                        <input class=\"settings-switchZoom\" id=\"settings-stremingmodeemoj-switch\" type=\"checkbox\"/>\n                                        <label for=\"settings-stremingmodeemoj-switch\"></label>\n                                    </div>\n                                </td>\n                                <td>\n                                    <div class=\"settings-lineZoom\">\n                                        <span class=\"settings-labelZoom\">\n                                            ğŸ”Š\n                                        </span>\n  <select id=\"sound-selector\">\n    <option value=\"https://asserts.wormworld.io/sounds/headshot_sound_effect.mp3\">Head Shot</option>\n    <option value=\"https://wormateup.live/up/video/emaat.mp3\">ÙˆÙ„Ùƒ Ø§Ù…Ø¹Ø·</option>\n    <option value=\"https://www.myinstants.com/media/sounds/sniper-shot.mp3\">Sniper</option>\n    <option value=\"https://www.myinstants.com/media/sounds/headshot_6.mp3\">Head Shot2</option>\n    <option value=\"https://www.myinstants.com/media/sounds/999_Z871W0o.mp3\">Ø§Ù„Ù‚Ù…</option>\n    <option value=\"https://wormateup.live/up/video/Aelo-Adi.MP3\">Ø§Ø¯ÙŠÙ„ÙˆÙˆ Ø§Ø¯ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/alalobee.mp3\">Ø¹ Ù„ÙˆÙˆØ¨ÙŠ</option>\n    <option value=\"https://wormateup.live/up/video/pew.mp3\">Pew</option>\n    <option value=\"https://wormateup.live/up/video/pingo.mp3\">Pingo</option>\n    <option value=\"https://wormateup.live/up/video/wak-wak.mp3\">wak wak</option>\n    <option value=\"https://wormateup.live/up/video/EBRAHIM-ERHAMNI.MP3\">Ø§Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ø±Ø­Ù…Ù†ÙŠ</option>\n  </select>\n  <input class=\"settings-switchZoom\" id=\"settings-stremingmodeheadshot-switch\" type=\"checkbox\" />\n  <label for=\"settings-stremingmodeheadshot-switch\"></label>\n  <label for=\"sound-selector\"></label>\n</div>\n\n<script>\n  // Ø¹Ù†Ø§ØµØ± Ø§Ù„ØªØ­ÙƒÙ…\n  const soundSelector = document.getElementById('sound-selector');\n  const muteSwitch = document.getElementById('settings-stremingmodeheadshot-switch');\n\n  // Ù‚Ø§Ø¦Ù…Ø© Ø§Ù„Ø£ØµÙˆØ§Øª\n  let audioSrc = localStorage.getItem('selectedSound') || ''; // Ø§Ù„ØµÙˆØª Ø§Ù„Ø§ÙØªØ±Ø§Ø¶ÙŠ ÙØ§Ø±Øº\n  let audio = null; // ÙƒØ§Ø¦Ù† Ø§Ù„ØµÙˆØª ØºÙŠØ± Ù…Ù‡ÙŠØ£\n  let isMuted = localStorage.getItem('isMuted') === 'true'; // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø¥Ø¹Ø¯Ø§Ø¯ Ø§Ù„ØµÙˆØª\n\n  // Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠØ©\n  soundSelector.value = audioSrc;\n  muteSwitch.checked = isMuted;\n\n  // ØªØ­Ø¯ÙŠØ« Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„ØªØºÙŠÙŠØ± ÙÙŠ Ø§Ù„Ù‚Ø§Ø¦Ù…Ø©\n  soundSelector.addEventListener('change', (e) => {\n    audioSrc = e.target.value;\n    localStorage.setItem('selectedSound', audioSrc);\n    if (!isMuted) {\n      if (audio) audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø£ÙŠ ØµÙˆØª Ù‚ÙŠØ¯ Ø§Ù„ØªØ´ØºÙŠÙ„\n      audio = new Audio(audioSrc); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¬Ø¯ÙŠØ¯\n      audio.play(); // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø¬Ø¯ÙŠØ¯\n    }\n  });\n\n  // ØªØ¹Ø·ÙŠÙ„ Ø§Ù„ØµÙˆØª\n  muteSwitch.addEventListener('change', () => {\n    isMuted = muteSwitch.checked;\n    localStorage.setItem('isMuted', isMuted);\n    if (isMuted && audio) {\n      audio.pause(); // Ø¥ÙŠÙ‚Ø§Ù Ø§Ù„ØµÙˆØª Ø¥Ø°Ø§ ØªÙ… ÙƒØªÙ…Ù‡\n    }\n  });\n\n  // ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø¹Ù†Ø¯ ØªÙ…Ø±ÙŠØ± Ø§Ù„Ù…Ø§ÙˆØ³ Ø¹Ù„Ù‰ Ø§Ù„Ø®ÙŠØ§Ø±Ø§Øª\n  const options = soundSelector.querySelectorAll('option');\n  options.forEach((option) => {\n    option.addEventListener('mouseover', () => {\n      if (!isMuted) {\n        const hoverAudio = new Audio(option.value); // Ø¥Ù†Ø´Ø§Ø¡ ÙƒØ§Ø¦Ù† ØµÙˆØª Ø¹Ù†Ø¯ Ø§Ù„Ù…Ø±ÙˆØ±\n        hoverAudio.play();\n      }\n    });\n  });\n\n  // Ù„Ø§ ÙŠØªÙ… ØªØ´ØºÙŠÙ„ Ø§Ù„ØµÙˆØª Ø§Ù„Ø£ÙˆÙ„ÙŠ Ù‡Ù†Ø§\n</script>\n\n<script>\n\n</script>\n\n            </div>\n\n                   </td>\n                  </tr>\n                </tbody>\n              </table>\n\n              <div class=\"list2\">\n            <div class=\"list2\">\n              <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø¯ÙˆØ±Ø§Ù† <a href=\"/\">Q</a>: Ù„ÙˆØ¶Ø¹ Ø§Ù„Ø¯ÙˆØ§Ø±Ø§Ù† Ø­ÙˆÙ„ Ø§Ù„Ø¯ÙˆØ¯Ù‡ (ÙˆÙ„ØªØ¹Ø·ÙŠÙ„ Ø§Ù„Ø¯ÙˆØ±Ø§Ù† Ø§Ø¶ØºØ· Ù†ÙØ³ Ø§Ù„Ø­Ø±Ù)\n                </div>\n            <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø±Ø³Ø¨ÙˆÙ† <a href=\"/\">R</a> Ù„Ø¹Ù…Ù„ Ø§Ù„Ø±Ø³Ø¨ÙˆÙ† (Ø«Ù„Ø§Ø« Ù…Ø±Ø§Øª ÙÙ‚Ø·)\n\n            </div>\n                        <div class=\"list2\">\n             <i class=\"fa fa-pencil-square-o\" style=\"color: #ce00ff; font-size: 17px;\"></i> Ø²ÙˆÙ… Ø³Ø±ÙŠØ¹ <a href=\"/\">Z</a>   Ù„Ù„ØªÙ‚Ø±ÙŠØ¨ Ø§Ù„Ø³Ø±ÙŠØ¹\n\n            </div>\n    \n          </div>\n\n          </div>\n\n            \n            <div id=\"messageSettings\" class=\"tab-content\" style=\"display:none;\">\n                <h3>ØªØ¹Ø¯ÙŠÙ„ Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù‡ÙŠØ¯Ø´ÙˆØª Ùˆ Ø§Ù„ÙˆÙŠÙ„Ø¯Ù†</h3>\n                <div style=\"display: flex; justify-content: center; align-items: center; flex-direction: row;\">\n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px;\">\n                        <label for=\"killSelect\">:Ø¹Ø¨Ø§Ø±Ø© Ø§Ù„ÙˆÙ„Ø¯Ù†</label>\n                        <select id=\"killSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"Well Done!\">Well Done!</option>\n                            <option value=\"Ø¨Ù„Ø¹Ø© Ø¨ÙˆØªØ§Øª\">Ø¨Ù„Ø¹Ø© Ø¨ÙˆØªØ§Øª</option>\n                            <option value=\"Ù‡Ø§ÙŠ Ø´Ù†Ùˆ\">Ù‡Ø§ÙŠ Ø´Ù†Ùˆ</option>\n                            <option value=\"Ø®ÙˆØ§Ø§Ø§ØµØ± Ø¹ÙŠÙ†ÙŠ\">Ø®ÙˆØ§Ø§Ø§ØµØ± Ø¹ÙŠÙ†ÙŠ</option>\n                            <option value=\"Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ\">Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ</option>\n                            <option value=\"ØªØªØ¹ÙˆØ¶ ğŸ¤£ ØªØªØ¹ÙˆØ¶\">ØªØªØ¹ÙˆØ¶ ğŸ¤£ ØªØªØ¹ÙˆØ¶</option>\n                            <option value=\"Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ\">Ù…Ø§ØªÙ‚Ø¯Ø± Ù„ÙŠ</option>\n                           <option value=\"ğŸ¤£ğŸ¤£ Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ø±Ø­Ù…Ù†ÙŠ ğŸ¤£ğŸ¤£\"> ğŸ¤£ğŸ¤£ Ø¥Ø¨Ø±Ø§Ù‡ÙŠÙ… Ø§Ø±Ø­Ù…Ù†ÙŠ ğŸ¤£ğŸ¤£ </option>\n                        </select>\n                    </div>\n            \n            \n                    <div style=\"margin-bottom: 15px; width: 100%; max-width: 200px; margin-right: 20px;\">\n                        <label for=\"headshotSelect\">:Ø¹Ø¨Ø§Ø±Ø© Ø§Ù„Ù‡ÙŠØ¯ Ø´ÙˆØª</label>\n                        <select id=\"headshotSelect\" style=\"width: 100%; padding: 5px; box-sizing: border-box; min-width: 150px; max-width: 150px;\">\n                            <option value=\"HEADSHOT\">HEADSHOT</option>\n                            <option value=\"Ø¥Ø¨Ù„Ø¹ Ù„ÙŠÙƒ\">Ø¥Ø¨Ù„Ø¹ Ù„ÙŠÙƒ</option>\n                            <option value=\"Ø§Ø¯ÙŠÙ„ÙˆÙˆÙˆ Ø§Ø¯ÙŠ ğŸ”ª\">Ø§Ø¯ÙŠÙ„ÙˆÙˆÙˆ Ø§Ø¯ÙŠ ğŸ”ª</option>\n                            <option value=\" HEADSHOT â˜ ï¸\">HEADSHOT â˜ ï¸</option>\n                            <option value=\"   Ø§Ø¯ÙŠÙ„Ùˆ ÙŠØ§ ÙˆØ¯ÙŠØ¹ğŸ˜‹ğŸ˜‹ \">  Ø§Ø¯ÙŠÙ„Ùˆ ÙŠØ§ ÙˆØ¯ÙŠØ¹ğŸ˜‹ğŸ˜‹  </option>\n                        </select>\n                    </div>\n                </div>\n                <button onclick=\"saveMessages()\" style=\"margin-top: 5px;\">Ø­ÙØ¸ Ø§Ù„Ø¹Ø¨Ø§Ø±Ø§Øª</button>\n            </div>\n\n                <!-- Ù…Ø­ØªÙˆÙ‰ ØªØ¨ÙˆÙŠØ¨ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ§Øª (ØªÙ… Ø­Ø°Ù ÙƒØ§ÙØ© Ø§Ù„Ø®Ù„ÙÙŠØ§Øª) -->\n                <div id=\"backgroundSettings\" class=\"tab-content\" style=\"display:none;\">\n              <table>\n                <tbody>\n                  <tr>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Curos\n                      </div>\n                      <div class=\"cursor-container\">\n                        <div id=\"default-cursor-btn\">\n                          <img style=\"margin-top: -45px; margin-right: 60px; float: right; width: 25px; height: 28px;\" class=\"img\" alt=\"Imgur-Upload\" src=\"https://i.imgur.com/rI522o3.png\">\n                        </div>\n                      </div>\n                    </td>\n                    <td>\n                      <div class=\"spancursor\">\n                        <i aria-hidden=\"true\" class=\"fa fa-cog fa-spin\" style=\"color: #ff8f00; font-size: 25px;\"></i> Select Backgound\n                      </div>\n                      <div class=\"background-container\"></div>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n\n    <style>\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª */\n        .tab-buttons button {\n            padding: 10px;\n            background-color: #ddd;\n            border: none;\n            cursor: pointer;\n            flex: 1;\n            text-align: center;\n        }\n\n        .tab-buttons button.active {\n            background-color: #0d7aef;\n            color: white;\n        }\n\n        .tab-content {\n            display: none;\n        }\n\n        .tab-content.active {\n            display: block;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø®Ù„ÙÙŠØ© */\n        .background-options {\n            margin-top: 20px;\n        }\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ø§Ù„Ø¹Ù†Ø§ØµØ± Ø¯Ø§Ø®Ù„ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        .settings-labelZoom {\n            font-size: 16px;\n        }\n\n\n\n        /* ØªÙ†Ø³ÙŠÙ‚ Ù…Ø­ØªÙˆÙ‰ Ø¥Ø¹Ø¯Ø§Ø¯Ø§Øª Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ */\n        #messageSettings {\n            display: flex;\n            flex-direction: row; /* ÙˆØ¶Ø¹ Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ ØµÙ */\n            justify-content: center; /* Ù…Ø­Ø§Ø°Ø§Ø© Ø§Ù„Ø¹Ù†Ø§ØµØ± ÙÙŠ Ø§Ù„Ù…Ù†ØªØµÙ */\n            align-items: center;\n        }\n\n        #messageSettings div {\n            width: 100%;\n            max-width: 100%;\n        }\n    </style>\n\n    <script>\n        // Ø¯Ø§Ù„Ø© Ø§Ù„ØªÙ†Ù‚Ù„ Ø¨ÙŠÙ† Ø§Ù„ØªØ¨ÙˆÙŠØ¨Ø§Øª\n        function openTab(tabId) {\n            const contents = document.querySelectorAll('.tab-content');\n            const buttons = document.querySelectorAll('.tab-button');\n\n            contents.forEach(content => content.style.display = 'none');\n            buttons.forEach(button => button.classList.remove('active'));\n\n            document.getElementById(tabId).style.display = 'block';\n            event.target.classList.add('active');\n        }\n\n\n// Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„\nfunction saveMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† Ø§Ù„Ù‚ÙˆØ§Ø¦Ù… Ø§Ù„Ù…Ù†Ø³Ø¯Ù„Ø©\n    const headshotMessage = document.getElementById(\"headshotSelect\").value;\n    const killMessage = document.getElementById(\"killSelect\").value;\n\n    // Ø­ÙØ¸ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ localStorage\n    localStorage.setItem(\"headshotMessage\", headshotMessage);\n    localStorage.setItem(\"killMessage\", killMessage);\n\n    // Ø¹Ø±Ø¶ Ø±Ø³Ø§Ù„Ø© ØªØ£ÙƒÙŠØ¯\n    alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø¨Ù†Ø¬Ø§Ø­!\");\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… Ø§Ù„Ù…Ø¯Ø®Ù„Ø© ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„ØªØªØ£ÙƒØ¯ Ù…Ù† Ø§Ù„Ø­ÙØ¸\n    console.log(\"Headshot Message: \" + headshotMessage);\n    console.log(\"Kill Message: \" + killMessage);\n}\n\n// Ø¯Ø§Ù„Ø© Ù„Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ù…Ù† localStorage Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\nfunction loadMessages() {\n    // Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ù‚ÙŠÙ… Ù…Ù† localStorage\n    const savedHeadshot = localStorage.getItem(\"headshotMessage\");\n    const savedKill = localStorage.getItem(\"killMessage\");\n\n    // Ø§Ù„ØªØ­Ù‚Ù‚ Ù…Ù† Ø£Ù† Ø§Ù„Ù‚ÙŠÙ… Ù…Ø®Ø²Ù†Ø© ÙÙŠ localStorage\n    if (savedHeadshot) {\n        const headshotSelect = document.getElementById(\"headshotSelect\");\n        if (headshotSelect) {\n            headshotSelect.value = savedHeadshot;\n        }\n    }\n    if (savedKill) {\n        const killSelect = document.getElementById(\"killSelect\");\n        if (killSelect) {\n            killSelect.value = savedKill;\n        }\n    }\n\n    // Ù„Ø¹Ø±Ø¶ Ø§Ù„Ù‚ÙŠÙ… ÙÙŠ ÙˆØ­Ø¯Ø© Ø§Ù„ØªØ­ÙƒÙ… Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† Ø§Ø³ØªØ±Ø¬Ø§Ø¹Ù‡Ø§ Ø¨Ø´ÙƒÙ„ ØµØ­ÙŠØ­\n    console.log(\"Loaded Headshot Message: \" + savedHeadshot);\n    console.log(\"Loaded Kill Message: \" + savedKill);\n}\n\n// Ø§Ø³ØªØ±Ø¬Ø§Ø¹ Ø§Ù„Ø±Ø³Ø§Ø¦Ù„ Ø§Ù„Ù…Ø®Ø²Ù†Ø© Ø¹Ù†Ø¯ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø© Ø£Ùˆ Ø¨Ø¹Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø§Ù„Ø¬Ø¯ÙŠØ¯\nfunction initializeSettings() {\n    setTimeout(() => {\n        loadMessages();\n    }, 100); // ØªØ£Ø®ÙŠØ± Ø¨Ø³ÙŠØ· Ù„Ù„ØªØ£ÙƒØ¯ Ù…Ù† ØªØ­Ù…ÙŠÙ„ Ø§Ù„Ù…Ø­ØªÙˆÙ‰\n}\n\n// Ø§Ø³ØªØ¯Ø¹Ø§Ø¡ initializeSettings Ø¹Ù†Ø¯ Ø¥Ø¶Ø§ÙØ© Ø§Ù„Ù…Ø­ØªÙˆÙ‰ Ø£Ùˆ ØªØ­Ù…ÙŠÙ„ Ø§Ù„ØµÙØ­Ø©\ninitializeSettings();\n\n\n\n\n\n        // Ø¯Ø§Ù„Ø© Ù„Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ©\n        function saveBackground() {\n            const background = document.getElementById(\"backgroundSelect\").value;\n            localStorage.setItem(\"selectedBackground\", background);\n\n            alert(\"ØªÙ… Ø­ÙØ¸ Ø§Ù„Ø®Ù„ÙÙŠØ© Ø¨Ù†Ø¬Ø§Ø­!\");\n        }\n    </script>\n");
      $('#loa831pibur0w4gv').replaceWith("\n        <div style=\"margin: 0;\" id=\"loa831pibur0w4gv\">\n          <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css\" />\n          <div class=\"label\" id=\"titleSetings\">Ø§Ù„Ø²ÙˆÙ… ÙŠØ¹Ù…Ù„ Ù…Ø¹ Ø§Ù„ØªÙØ¹ÙŠÙ„ ÙÙ‚Ø·</div>\n          <div class=\"bao-list1\">\n            <input type=\"text\" value=\"\" style=\"width: 80%; height: 23px; border-radius: 4px; font-size: 15px; padding: 0 6px; background-color: #fff; color: #806102; display: block; box-sizing: border-box; -webkit-appearance: none; outline: 0; border-width: 0;\" />\n            <button style=\"height: 25px; float: right; margin-top: -24px; margin-right: -6px; line-height: 1.2; font-size: 14px;\" onclick=\"navigator.clipboard.writeText('').then(() => alert('Your ID  copied!'));\">Ù†Ø³Ø®</button>\n            <center>\n              <div class=\"hg\">\n                <a target=\"_blank\" href=\"https://wormateup.live/\">Ø§Ù„ØµÙØ­Ø© Ø§Ù„Ø±Ø¦ÙŠØ³ÙŠØ©</a>\n                <br> <br> <br><br> <br> <br>\n                                <a\">Ù„Ù… ØªÙ‚Ù… Ø¨ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø¯Ø§Ø© Ø§Ù„Ø±Ø¬Ø§Ø¡ Ø§Ù„ØªÙˆØ¬Ù‡ Ù„Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯ </a>\n\n              </div>\n            </center>\n            <i class=\"fa fa-book\" aria-hidden=\"true\" style=\"color: #48ff00;\"></i>\n            <a style=\"color: #2ae1eb; font-weight: 600;\" href=\"https://discord.gg/zNJkB8EeUF\">Ù„ØªÙØ¹ÙŠÙ„ Ø§Ù„Ø§Ø¯Ø§Ø© Ø¹Ù† Ø·Ø±ÙŠÙ‚ Ø§Ù„Ø¯ÙŠØ³ÙƒÙˆØ±Ø¯</a>\n          </div>\n        </div>\n      ");
      var _0x59cd3c = document.getElementById("settingBtn");
      var _0x16bc5e = document.getElementById('settingContent');
      _0x59cd3c.addEventListener("click", function () {
        if (_0x16bc5e.style.display === "none") {
          _0x16bc5e.style.display = "block";
        } else {
          _0x16bc5e.style.display = "none";
        }
      });
      $("#PortionSize").on("input", function () {
        theoKzObjects.PortionSize = $(this).val();
        localStorage.PotenciadorSize = theoKzObjects.PortionSize;
      });
      $('#PortionAura').on("input", function () {
        theoKzObjects.PortionAura = $(this).val();
        localStorage.PotenciadorAura = theoKzObjects.PortionAura;
      });
      $("#smoothCamera").on("input", function () {
        theoKzObjects.smoothCamera = $(this).val();
        localStorage.smoothCamera = 0.5;
      });
      $("#FoodSize").on('input', function () {
        theoKzObjects.FoodSize = $(this).val();
        localStorage.ComidaSize = theoKzObjects.FoodSize;
      });
      $('#FoodShadow').on("input", function () {
        theoKzObjects.FoodShadow = $(this).val();
        localStorage.ComidaShadow = theoKzObjects.FoodShadow;
      });
      $("#mm-advice-cont").html("\n        <div class=\"vietnam\" style=\"display: grid !important; grid-template-columns: 1fr 1fr 1fr; gap: 8.5px;\">\n          <input type=\"button\" value=\"Ø´Ø§Ø´Ù€Ø© ÙƒØ§Ù…Ù„Ù€Ø©\" class=\"fullscreen_button\">\n          <input type=\"button\" value=\"Ø±Ø³Ø¨Ù€ÙˆÙ†\" id=\"hoisinh\" class=\"fullscreen_respawn\">\n\n          </div>\n      ");
      $(".mm-merchant-cont").html("\n  <div style=\"display: flex; justify-content: center; align-items: center;margin-top:10px\">\n    <a href=\"https://www.youtube.com/wormup\" target=\"_blank\" style=\"margin-right: 10px;\">\n      <img src=\"https://wormateup.live/images/hiep_img/\" alt=\"\" width=\"155\">\n    </a>\n    <a href=\"https://wormateup.live.com\" target=\"_blank\">\n      <img src=\"https://i.imgur.com/V.png\" alt=\"\" width=\"155\">\n    </a>\n  </div>");
      $(document).ready(function () {
        $('.fullscreen_button').on("click", function () {
          if (document.fullScreenElement && document.fullScreenElement !== null || !document.mozFullScreen && !document.webkitIsFullScreen) {
            if (document.documentElement.requestFullScreen) {
              document.documentElement.requestFullScreen();
            } else {
              if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
              } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
              }
            }
          } else {
            if (document.cancelFullScreen) {
              document.cancelFullScreen();
            } else {
              if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
              } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
              }
            }
          }
        });
      });
      $('#hoisinh').click(function () {
        let _0x2b5e54 = _0x2b5e54;
        if (_0x2b5e54) {
          anApp.r.Hd();
          anApp.sa(_0x2b5e54);
        }
      });
      $(".mm-merchant").replaceWith('');
      $(".mm-merchant").replaceWith('');
      $(".description-text").replaceWith("\n        <div class=\"description-text\">\n          <div id=\"title\"></div>\n          <div class=\"description-text-test\">\n            <ul style=\"margin-top: 5px;\" class=\"ui-tabs-nav\">\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive0 ui-tab-active\" style=\"margin: -5px\">\n                <a> <span class=\"flag br\" value=\"https://i.imgur.com/dixYLjk.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive1\" style=\"margin: -5px\">\n                <a> <span class=\"flag mx\" value=\"https://i.imgur.com/JMAvuFN.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive2\" style=\"margin: -5px\">\n                <a> <span class=\"flag us\" value=\"https://i.imgur.com/Jb2FF0y.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive3\" style=\"margin: -5px\">\n                <a> <span class=\"flag ca\" value=\"https://i.imgur.com/m1skEsB.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive4\" style=\"margin: -5px\">\n                <a> <span class=\"flag de\" value=\"https://i.imgur.com/VgCH8iy.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive5\" style=\"margin: -5px\">\n                <a> <span class=\"flag fr\" value=\"https://i.imgur.com/QuEjBr0.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive6\" style=\"margin: -5px\">\n                <a> <span class=\"flag sg\" value=\"https://i.imgur.com/ErLcgXP.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive7\" style=\"margin: -5px\">\n                <a> <span class=\"flag jp\" value=\"https://i.imgur.com/P2rYk1k.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive8\" style=\"margin: -5px\">\n                <a> <span class=\"flag au\" value=\"https://i.imgur.com/12e0wp4.png\"></span> </a>\n              </li>\n              <li class=\"ui-tabs-tab ui-tab ui-tab-inactive9\" style=\"margin: -5px\">\n                <a> <span class=\"flag gb\" value=\"https://i.imgur.com/8pQY6RW.png\"></span> </a>\n              </li>\n            </ul>\n            <div class=\"bao-list2\">\n              <div class=\"gachngang\"></div>\n              <div class=\"servers-container\">\n                <div class=\"servers-peru\"></div>\n                <div class=\"servers-mexico\" style=\"display: none;\"></div>\n                <div class=\"servers-eeuu\" style=\"display: none;\"></div>\n                <div class=\"servers-canada\" style=\"display: none;\"></div>\n                <div class=\"servers-germania\" style=\"display: none;\"></div>\n                <div class=\"servers-francia\" style=\"display: none;\"></div>\n                <div class=\"servers-singapur\" style=\"display: none;\"></div>\n                <div class=\"servers-japon\" style=\"display: none;\"></div>\n                <div class=\"servers-australia\" style=\"display: none;\"></div>\n                <div class=\"servers-granbretana\" style=\"display: none;\"></div>\n              </div>\n                <script src=\"https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.3/howler.min.js\"></script>\n            </div>\n          </div>\n        </div>\n      ");
      $('.ui-tab').on("click", account);
      $('.flag').click(function () {
        let _0x38609e = $(this).attr("value");
        theoKzObjects.flag = _0x38609e;
        ctx.containerImgS.texture = ctx.onclickServer;
        retundFlagError();
        console.log(_0x38609e);
      });
      for (a = 0x0; a < servers.Api_listServer.length; a++) {
        var _0x2b1e9b = servers.Api_listServer[a].serverUrl;
        var _0x49615b = servers.Api_listServer[a].name;
        var _0x14214a = servers.Api_listServer[a].region;
        let _0x153d0d = document.createElement('p');
        _0x153d0d.value = _0x2b1e9b;
        _0x153d0d.innerHTML = _0x49615b;
        if (_0x14214a == "peru") {
          $(".servers-peru").prepend(_0x153d0d);
        } else {
          if (_0x14214a == 'mexico') {
            $(".servers-mexico").prepend(_0x153d0d);
          } else {
            if (_0x14214a == 'eeuu') {
              $(".servers-eeuu").prepend(_0x153d0d);
            } else {
              if (_0x14214a == "canada") {
                $(".servers-canada").prepend(_0x153d0d);
              } else {
                if (_0x14214a == "germania") {
                  $(".servers-germania").prepend(_0x153d0d);
                } else {
                  if (_0x14214a == "francia") {
                    $(".servers-francia").prepend(_0x153d0d);
                  } else {
                    if (_0x14214a == "singapur") {
                      $(".servers-singapur").prepend(_0x153d0d);
                    } else {
                      if (_0x14214a == "japon") {
                        $(".servers-japon").prepend(_0x153d0d);
                      } else {
                        if (_0x14214a == "australia") {
                          $(".servers-australia").prepend(_0x153d0d);
                        } else if (_0x14214a == "granbretana") {
                          $(".servers-granbretana").prepend(_0x153d0d);
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
        $(_0x153d0d).attr('id', _0x14214a);
        $(_0x153d0d).attr("class", 'selectSala');
        $(_0x153d0d).attr("value", _0x49615b);
        $(_0x153d0d).click(function () {
          ctx.setServer($(this).text());
          let _0x4c285c = $(this).val();
          ctx.containerImgS.texture = ctx.onclickServer;
          retundFlagError();
          window.server_url = _0x4c285c;
          $("#mm-action-play").click();
          $("#adbl-continue").click();
        });
      }
    }
    function _0x3da684(_0x3bd11f, _0x24ad93) {
      let _0x72095e = function (_0x93e77f, _0x579231, _0x1f64dc, _0x1f80d3) {
        ctx.setCountGame(_0x93e77f, _0x579231, _0x1f64dc, _0x1f80d3);
      };
      if (_0x3bd11f === "count") {
        theoKzObjects.kill = (0x0 || 0x0) + (_0x24ad93 ? 0x0 : 0x1);
        theoKzObjects.headshot = (0x0 || 0x0) + (_0x24ad93 ? 0x1 : 0x0);
        theoKzObjects.totalKills = 0x0 + (_0x24ad93 ? 0x0 : 0x1);
        theoKzObjects.totalHeadshots = 0x0 + (_0x24ad93 ? 0x1 : 0x0);
        _0x72095e(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x3bd11f === "open") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        $("#contadorKill_12").show();
        _0x72095e(0x0, 0x0, 0x0, 0x0);
      }
      if (_0x3bd11f === 'closed') {
        pwrups = {};
      }
      if (_0x3bd11f === "cerrar") {
        theoKzObjects.kill = 0x0;
        theoKzObjects.headshot = 0x0;
        theoKzObjects.totalKills = 0x0;
        theoKzObjects.totalHeadshots = 0x0;
      }
    }
    if (!Number.prototype.dotFormat) {
      Number.prototype.dotFormat = function () {
        return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      };
    }
    if (!Number.prototype.dotFormatSelect2) {
      Number.prototype.dotFormatSelect2 = function () {
        return this.toString().substr(0x3, 0x2);
      };
    }
    setTimeout(function () {
      var _0x5e3d91 = ['ÙƒØ³', "fuck", "Ø´ÙŠØ¹Ø©", "Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ", 'Ø¹Ø±Ø¶Ùƒ', 'Ù†Ø¸ÙŠÙ', "Ø·ÙŠØ¨Ø©", "Ø§Ø®ÙˆÙƒ", "Ø§Ø®ØªÙƒ", "Ø§Ù…Ùƒ", 'Ø§Ø¨ÙˆÙƒ', "Ù‚ÙˆØ§Ø¯"];
      $("#mm-action-play").on('click', function () {
        var _0x4d5fe6 = $("#mm-params-nickname").val();
        var _0x1aa21f = _0x5e3d91.some(function (_0x31a83a) {
          return _0x4d5fe6.toLowerCase().includes(_0x31a83a.toLowerCase());
        });
        if (_0x1aa21f) {
          $("#mm-params-nickname").val("Ø£Ù† Ø§Ù„Ù„Ù‡ ÙŠØ±Ø§Ùƒ*");
        }
      });
      $("#final-share-fb").css("display", "none");
      $("#unl6wj4czdl84o9b").css("display", "none");
      $("#mm-menu-cont").css("display", "block");
      $("#mm-bottom-buttons").css("display", "block");
      $('#mm-player-info').css("display", 'block');
      $("#mm-bottom-buttons").addClass("buttonNavidad");
      var _0x2a8c78 = $("<img>", {
        'id': 'gold-crown',
        'src': "https://i.imgur.com/z2o76Xe.png",
        'alt': "gold-crown"
      });
      $("#mm-player-avatar").after(_0x2a8c78);
      $("#gold-crown").css({
        'position': 'absolute',
        'top': "-23px",
        'transform': "translateX(-2%)",
        'width': "50px",
        'height': "auto"
      });
      $("#relojHelp").css('position', "absolute");
      $("#relojHelp").css("top", "12px");
      $("#relojHelp").css("left", "5px");
      $("#delete-account-view").css('display', "none");
    }, 0xbb8);
    var _0x4f57e2 = function _0x319228() {
      requestAnimationFrame(_0x319228);
      (window.anApp = _0x47002d).Pa();
    };
    _0x4f57e2();
    function _0xc4f71d() {
      var _0x22a9b9 = _0x25c1dc.width();
      var _0x54c724 = _0x25c1dc.height();
      var _0x4f37a0 = _0x3a1c0a.outerWidth();
      var _0x2d4ae1 = _0x3a1c0a.outerHeight();
      var _0x784e08 = _0x169d6f.outerHeight();
      var _0x39442c = _0x1a481d.outerHeight();
      var _0x14b8cd = Math.min(0x1, Math.min((_0x54c724 - _0x39442c - _0x784e08) / _0x2d4ae1, _0x22a9b9 / _0x4f37a0));
      var _0xa94817 = "translate(-50%, -50%) scale(" + _0x14b8cd + ')';
      _0x3a1c0a.css({
        '-webkit-transform': _0xa94817,
        '-moz-transform': _0xa94817,
        '-ms-transform': _0xa94817,
        '-o-transform': _0xa94817,
        'transform': _0xa94817
      });
      (window.anApp = _0x47002d).Ra();
      window.scrollTo(0x0, 0x1);
    }
    var _0x25c1dc = $("body");
    var _0x3a1c0a = $("#stretch-box");
    var _0x169d6f = $("#markup-header");
    var _0x1a481d = $("#markup-footer");
    _0xc4f71d();
    $(window).resize(_0xc4f71d);
  })();
  window.anApp.p.Bc = function () {
    var _0x18b813 = window.anApp.p;
    var _0x30834f = {};
    $.get("https://resources.wormate.io/dynamic/assets/registry.json", function (_0x390583) {
      _0x30834f = _0x390583;
      $.ajax({
        'url': "https://wormateup.live/up/api/skins.php",
        'method': 'GET',
        'dataType': "json",
        'success': function (_0x995db5) {
          theoKzObjects.visibleSkin = _0x995db5.visibleSkin;
          delete _0x995db5.visibleSkin;
          for (let _0x1f1f4d in _0x995db5) {
            if ("propertyList" !== _0x1f1f4d) {
              if (Array.isArray(_0x995db5[_0x1f1f4d])) {
                _0x390583[_0x1f1f4d] = _0x390583[_0x1f1f4d].concat(_0x995db5[_0x1f1f4d]);
              } else {
                _0x390583[_0x1f1f4d] = {
                  ..._0x390583[_0x1f1f4d],
                  ..._0x995db5[_0x1f1f4d]
                };
              }
            }
          }
          theoKzObjects.pL = _0x995db5.propertyList;
          theoKzObjects.idSkin = _0x995db5.skinArrayDict;
          _0x18b813.Cc(_0x390583);
        },
        'error': function (_0x5d5bfd, _0x2e8934, _0x4ff366) {
          console.error(_0x4ff366);
          _0x18b813.Cc(_0x30834f);
        }
      });
    });
  };
  $('#background-canvas').replaceWith("<canvas id=\"background-canvas\"></canvas>");
  $('#popup-login-gg').html("<div class=\"settings-line\" id=\"popup-login-gg1\">Login via Google</div>");
  $('#social-buttons').replaceWith('');
  $("#markup-footer").replaceWith("<footer id=\"markup-footer\"><div class=\"lang-menu\"><button class=\"lang-button\">Language </button><div class=\"lang-list\"><a hreflang=\"en\" href=\"/\">English</a><a hreflang=\"de\" href=\"/de/\">Deutsch</a><a hreflang=\"fr\" href=\"/fr/\">FranÃƒÂ§ais</a><a hreflang=\"es\" href=\"/es/\">EspaÃƒÂ±ol</a></div></div><a class=\"link\" hreflang=\"en\" href=\"https://wormateup.live\">Â© 2025 Worm UP</a><a style=\"font-size: 17px;font-weight: 600;\">wormateup.live</a><a style=\"font-size: 17px;font-weight: 500;color: #ff0;\"> Made with <i class='fa fa-heart animated infinite pulse' style='color:red'></i> in Worm UP !</a></footer>");
});
function openPopup() {
  var _0x119cf9 = document.getElementById("popup");
  var _0x5acdb3 = document.getElementById("overlay");
  _0x119cf9.style.display = "block";
  _0x5acdb3.style.display = "block";
}
function closePopup() {
  var _0x565175 = document.getElementById("popup");
  var _0x3c9113 = document.getElementById('overlay');
  _0x565175.style.display = 'none';
  _0x3c9113.style.display = 'none';
}
function account() {
  $(".mx").on('click', function () {
    $(".servers-mexico").fadeIn(0x1f4);
    $('#addflag').attr("class", "flag mx");
    $(".ui-tab-inactive1").attr("class", "ui-tab-active ui-tab-inactive1");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $('.ui-tab-inactive2').removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $('.ui-tab-inactive5').removeClass('ui-tab-active');
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-peru').fadeOut(0x64);
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".br").on("click", function () {
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $('.servers-singapur').fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
    $(".ui-tab-inactive0").attr("class", "ui-tab-active ui-tab-inactive0");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $(".servers-peru").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag br");
  });
  $(".us").on('click', function () {
    $(".servers-eeuu").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag us");
    $(".ui-tab-inactive2").attr("class", "ui-tab-active ui-tab-inactive2");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $('.ui-tab-inactive6').removeClass("ui-tab-active");
    $('.ui-tab-inactive7').removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-mexico").fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".ca").on('click', function () {
    $(".servers-canada").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag ca");
    $(".ui-tab-inactive3").attr('class', "ui-tab-active ui-tab-inactive3");
    $('.ui-tab-inactive0').removeClass("ui-tab-active");
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass('ui-tab-active');
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.de').on('click', function () {
    $(".servers-germania").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag de");
    $(".ui-tab-inactive4").attr("class", "ui-tab-active ui-tab-inactive4");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass('ui-tab-active');
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive7').removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x1f4);
    $('.servers-canada').fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $('.servers-japon').fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".fr").on("click", function () {
    $(".servers-francia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag fr");
    $(".ui-tab-inactive5").attr("class", "ui-tab-active ui-tab-inactive5");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $('.ui-tab-inactive6').removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass("ui-tab-active");
    $('.ui-tab-inactive8').removeClass("ui-tab-active");
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-canada').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".sg").on('click', function () {
    $(".servers-singapur").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag sg");
    $(".ui-tab-inactive6").attr("class", "ui-tab-active ui-tab-inactive6");
    $('.ui-tab-inactive0').removeClass('ui-tab-active');
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive7").removeClass('ui-tab-active');
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $(".ui-tab-inactive9").removeClass('ui-tab-active');
    $(".servers-eeuu").fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $('.servers-peru').fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $('.servers-australia').fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $('.jp').on("click", function () {
    $(".servers-japon").fadeIn(0x1f4);
    $("#addflag").attr('class', "flag jp");
    $(".ui-tab-inactive7").attr('class', "ui-tab-active ui-tab-inactive7");
    $(".ui-tab-inactive0").removeClass("ui-tab-active");
    $(".ui-tab-inactive1").removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $('.ui-tab-inactive3').removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass("ui-tab-active");
    $(".ui-tab-inactive5").removeClass("ui-tab-active");
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass('ui-tab-active');
    $('.ui-tab-inactive9').removeClass("ui-tab-active");
    $(".servers-eeuu").fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
    $('.servers-granbretana').fadeOut(0x64);
  });
  $('.au').on("click", function () {
    $(".servers-australia").fadeIn(0x1f4);
    $("#addflag").attr("class", "flag au");
    $(".ui-tab-inactive8").attr("class", "ui-tab-active ui-tab-inactive8");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass("ui-tab-active");
    $(".ui-tab-inactive3").removeClass("ui-tab-active");
    $('.ui-tab-inactive4').removeClass('ui-tab-active');
    $(".ui-tab-inactive5").removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $('.ui-tab-inactive7').removeClass('ui-tab-active');
    $(".ui-tab-inactive9").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $('.servers-mexico').fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $('.servers-germania').fadeOut(0x64);
    $(".servers-francia").fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-granbretana").fadeOut(0x64);
  });
  $(".gb").on("click", function () {
    $('.servers-granbretana').fadeIn(0x1f4);
    $('#addflag').attr("class", "flag gb");
    $('.ui-tab-inactive9').attr("class", "ui-tab-active ui-tab-inactive9");
    $(".ui-tab-inactive0").removeClass('ui-tab-active');
    $('.ui-tab-inactive1').removeClass("ui-tab-active");
    $(".ui-tab-inactive2").removeClass('ui-tab-active');
    $(".ui-tab-inactive3").removeClass('ui-tab-active');
    $(".ui-tab-inactive4").removeClass('ui-tab-active');
    $('.ui-tab-inactive5').removeClass('ui-tab-active');
    $(".ui-tab-inactive6").removeClass("ui-tab-active");
    $(".ui-tab-inactive8").removeClass("ui-tab-active");
    $('.servers-eeuu').fadeOut(0x64);
    $(".servers-mexico").fadeOut(0x64);
    $(".servers-peru").fadeOut(0x64);
    $(".servers-canada").fadeOut(0x64);
    $(".servers-germania").fadeOut(0x64);
    $('.servers-francia').fadeOut(0x64);
    $(".servers-singapur").fadeOut(0x64);
    $(".servers-japon").fadeOut(0x64);
    $(".servers-australia").fadeOut(0x64);
  });
}
var getPresedKey = function (_0xccff2c) {
  var _0x544e35 = '';
  if (_0xccff2c.keyCode === 0x9) {
    _0x544e35 += "TAB";
  } else {
    if (_0xccff2c.keyCode === 0xd) {
      _0x544e35 += 'ENTER';
    } else if (_0xccff2c.keyCode === 0x10) {
      _0x544e35 += 'SHIFT';
    } else {
      _0x544e35 += String.fromCharCode(_0xccff2c.keyCode);
    }
  }
  return _0x544e35;
};
getStringKey = function (_0xb5ac86) {
  var _0xab04a6 = '';
  if (_0xb5ac86 == 0x9) {
    _0xab04a6 += "TAB";
  } else {
    if (_0xb5ac86 == 0xd) {
      _0xab04a6 += "ENTER";
    } else {
      if (_0xb5ac86 == 0x10) {
        _0xab04a6 += "SHIFT";
      } else {
        if (_0xb5ac86 == 0x20) {
          _0xab04a6 += "SPACE";
        } else if (_0xb5ac86 == 0x1b) {
          _0xab04a6 += "ESC";
        } else {
          _0xab04a6 += String.fromCharCode(_0xb5ac86);
        }
      }
    }
  }
  return _0xab04a6;
};
const isValidHotkey = function (_0x1124dc) {
  const _0x442fd7 = _0x1124dc.key;
  return _0x442fd7 >= '0' && _0x442fd7 <= '9' || _0x442fd7 >= 'A' && _0x442fd7 <= 'Z' || _0x442fd7 === 'Tab' || _0x442fd7 === "Enter" || _0x442fd7 === 'Shift' || _0x442fd7 === " " || _0x442fd7 === 'Escape';
};
eval(function (_0x160aa2, _0x5b62dd, _0x2e47a4, _0x249ac8, _0x25a359, _0x5873f5) {
  _0x25a359 = function (_0x1b8eda) {
    return (_0x1b8eda < _0x5b62dd ? '' : _0x25a359(parseInt(_0x1b8eda / _0x5b62dd))) + ((_0x1b8eda = _0x1b8eda % _0x5b62dd) > 0x23 ? String.fromCharCode(_0x1b8eda + 0x1d) : _0x1b8eda.toString(0x24));
  };
  if (!''.replace(/^/, String)) {
    while (_0x2e47a4--) {
      _0x5873f5[_0x25a359(_0x2e47a4)] = _0x249ac8[_0x2e47a4] || _0x25a359(_0x2e47a4);
    }
    _0x249ac8 = [function (_0x2733e9) {
      return _0x5873f5[_0x2733e9];
    }];
    _0x25a359 = function () {
      return "\\w+";
    };
    _0x2e47a4 = 0x1;
  }
  ;
  while (_0x2e47a4--) {
    if (_0x249ac8[_0x2e47a4]) {
      _0x160aa2 = _0x160aa2.replace(new RegExp("\\b" + _0x25a359(_0x2e47a4) + "\\b", 'g'), _0x249ac8[_0x2e47a4]);
    }
  }
  return _0x160aa2;
});
function stopZoom(_0xa66930) {
  if (_0xa66930.key === 'z') {
    window.w = 0.625;
    window.render();
  }
}
window.addEventListener("wheel", stopZoom);
document.addEventListener('DOMContentLoaded', () => {
  let _0x431233 = {
    'x': window.innerWidth / 0x2,
    'y': window.innerHeight / 0x2,
    'radius': 0x7
  };
  let _0x1e5c45 = _0x431233.x;
  let _0x201ab4 = _0x431233.y;
  let _0x4793e0 = 0x0;
  function _0xbce318() {
    let _0x3de832 = Date.now();
    fetch(window.location.href).then(() => {
      let _0x24c8ea = Date.now();
      _0x4793e0 = _0x24c8ea - _0x3de832;
      if (_0x4793e0 > 0x95) {
        _0x5c25f5.style.color = "red";
      } else if (_0x4793e0 > 0x63) {
        _0x5c25f5.style.color = "yellow";
      } else {
        _0x5c25f5.style.color = "green";
      }
    })["catch"](() => {
      _0x4793e0 = "Error";
      _0x5c25f5.style.color = 'red';
    });
  }
  let _0x5c25f5 = document.createElement("div");
  _0x5c25f5.style.position = 'fixed';
  _0x5c25f5.style.right = "5px";
  _0x5c25f5.style.bottom = "5px";
  _0x5c25f5.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
  _0x5c25f5.style.color = "white";
  _0x5c25f5.style.padding = "2px 5px";
  _0x5c25f5.style.fontSize = "12px";
  _0x5c25f5.style.borderRadius = "3px";
  _0x5c25f5.style.fontWeight = "bold";
  _0x5c25f5.style.textShadow = "1px 1px 2px rgba(0,0,0,0.5)";
  document.body.appendChild(_0x5c25f5);
  document.addEventListener('mousemove', _0x3672d2 => {
    _0x1e5c45 = _0x3672d2.clientX;
    _0x201ab4 = _0x3672d2.clientY;
  });
  function _0x2f3735() {
    let _0x1378e5 = _0x1e5c45 - _0x431233.x;
    let _0x3c633a = _0x201ab4 - _0x431233.y;
    let _0x55545c = Math.sqrt(_0x1378e5 * _0x1378e5 + _0x3c633a * _0x3c633a);
    if (_0x55545c > 0x7) {
      _0x431233.x += _0x1378e5 / _0x55545c * 0x7;
      _0x431233.y += _0x3c633a / _0x55545c * 0x7;
    } else {
      _0x431233.x = _0x1e5c45;
      _0x431233.y = _0x201ab4;
    }
    let _0x4b6326 = document.getElementById("solucan");
    if (_0x4b6326) {
      _0x4b6326.style.left = _0x431233.x + 'px';
      _0x4b6326.style.top = _0x431233.y + 'px';
    }
    _0x5c25f5.textContent = "Ping: " + _0x4793e0 + 'ms';
    requestAnimationFrame(_0x2f3735);
  }
  _0x2f3735();
  setInterval(_0xbce318, 0x3e8);
});
document.addEventListener("keydown", _0x43bfbb => {
  if (_0x43bfbb.key === "F12") {
    _0x43bfbb.preventDefault();
  }
}, false);
document.addEventListener('contextmenu', _0x52279b => {
  _0x52279b.preventDefault();
}, false);
window.addEventListener("keydown", _0x54f692 => {
  const _0x11200c = _0x54f692.key.toLowerCase();
  if (_0x11200c === 'z' || _0x11200c === 'Ø¦') {
    window.multiplier = 0.625;
    if (typeof window.changedNf === "function") {
      window.changedNf();
    } else {
      console.warn("Function 'changedNf' is not defined.");
    }
  }
});
