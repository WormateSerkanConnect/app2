window.detectLog = null;
const _wormup = {
  'BETAisSkinCustom'(_value) {
    return typeof _value === "string" && /[a-zA-Z]/.test(_value);
  },
  'testSkinCustom': function (_value) {
    return _wormup.BETAisSkinCustom(_value) ? 0x22 : _value;
  },
  'testSkinMod': function (_value) {
    return _value >= 0x18f && _value < 0x3e7;
  },
  'isNumberValid': function (_value) {
    return _value !== '' && _value !== null && _value !== undefined && !isNaN(_value);
  },
  'validInput': function (_value) {
    if (!(_value >= 0x18f && _value < 0x3e7) && !_wormup.BETAisSkinCustom(_value)) {
      return _value;
    }
    try {
      let inputVal = $("#inputReplaceSkin").val();
      return encodeURI(_wormup.isNumberValid(inputVal) ? inputVal : 0x23);
    } catch (error) {
      return encodeURI(0x23);
    }
  },
  'aload': false,
  'aId': 0x0
};

// Joypad event fix
const loadJoy = function (_enabled) {
  let joystick;
  try {
    console.log(_enabled);
    if (!theoKzObjects.gamePad) {
      theoKzObjects.gamePad = theoEvents.joystick;
    }
    if (RechekingPhone() && (_enabled || theoKzObjects.gamePad.checked)) {
      joystick = nipplejs.create(theoKzObjects.gamePad);
      joystick.on("move", function (_event, _data) {
        if (_data.angle) {
          let angle = _data.angle.radian <= Math.PI ? -1 * _data.angle.radian : Math.PI - (_data.angle.radian - Math.PI);
          console.log(angle);
        }
      });
    }
    return joystick;
  } catch (error) {
    console.error(error);
  }
};

// PIXI Initialization fix
if (typeof PIXI === "undefined") {
  let script = document.createElement("script");
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
  let app = new PIXI.Application();
  document.body.appendChild(app.view);
  let graphics = new PIXI.Graphics();
  graphics.beginFill(0xff0000);
  graphics.drawCircle(400, 300, 50);
  graphics.endFill();
  app.stage.addChild(graphics);
}
