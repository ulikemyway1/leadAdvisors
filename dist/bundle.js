(() => {
  "use strict";
  var n = {
      1475: (n, e, t) => {
        t.d(e, { A: () => l });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o),
          r = t(6719),
          a = s()(i());
        a.i(r.A),
          a.push([
            n.id,
            "@import url(https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);",
          ]),
          a.push([
            n.id,
            "html{scroll-behavior:smooth}*{box-sizing:border-box}body{font-family:Poppins}.container{margin:0 auto;max-width:1920px}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:#f1f1f1}::-webkit-scrollbar-thumb{background:#263483}::-webkit-scrollbar-thumb:hover{background:#4d27a5 8fe}",
            "",
            {
              version: 3,
              sources: ["webpack://./src/app/styles/style.scss"],
              names: [],
              mappings:
                "AAIA,KACE,sBAAA,CAGF,EACE,qBAAA,CAGF,KACE,mBAAA,CAGF,WACE,aAAA,CACA,gBAAA,CAGF,oBACE,SAAA,CAGF,0BACE,kBAAA,CAGF,0BACE,kBAAA,CAGF,gCACE,sBAAA",
              sourcesContent: [
                '@import url("./normalize.css");\n\n@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");\n\nhtml {\n  scroll-behavior: smooth;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: Poppins;\n}\n\n.container {\n  margin: 0 auto;\n  max-width: 1920px;\n}\n\n::-webkit-scrollbar {\n  width: 4px;\n}\n\n::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n::-webkit-scrollbar-thumb {\n  background: #263483;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: rgb(77, 39, 165) 8fe;\n}\n',
              ],
              sourceRoot: "",
            },
          ]);
        const l = a;
      },
      710: (n, e, t) => {
        t.d(e, { A: () => p });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o),
          r = t(4417),
          a = t.n(r),
          l = new URL(t(2145), t.b),
          c = s()(i()),
          d = a()(l);
        c.push([
          n.id,
          `.subscribe{position:relative;margin-top:-10px}.subscribe__input{width:440px;height:59px;padding:8px 8px 8px 27px;border-radius:40px;box-shadow:0 0 50px 0 rgba(0,0,0,.4);border:solid 1px rgba(0,0,0,.8);background-color:#fff}.subscribe__submit{position:absolute;display:flex;align-items:center;justify-content:center;width:43px;height:43px;background-color:#df2224;border-radius:100%;border:none;right:8px;top:50%;transform:translateY(-50%);transition:all .6s;cursor:pointer}.subscribe__submit::after{content:"";position:relative;display:block;background-image:url(${d});background-size:contain;background-repeat:no-repeat;width:20px;height:20px}.subscribe__submit:disabled{filter:saturate(0);cursor:auto}@media(hover: hover)and (pointer: fine){.subscribe__submit:hover:enabled{filter:brightness(1.2);transform:translateY(-50%) scale(1.05)}}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/features/subcribe/ui/subscribe.scss"],
            names: [],
            mappings:
              "AAAA,WACE,iBAAA,CACA,gBAAA,CAEA,kBACE,WAAA,CACA,WAAA,CACA,wBAAA,CACA,kBAAA,CACA,oCAAA,CACA,+BAAA,CACA,qBAAA,CAGF,mBACE,iBAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CACA,WAAA,CACA,wBAAA,CACA,kBAAA,CACA,WAAA,CACA,SAAA,CACA,OAAA,CACA,0BAAA,CACA,kBAAA,CACA,cAAA,CACA,0BACE,UAAA,CACA,iBAAA,CACA,aAAA,CACA,wDAAA,CACA,uBAAA,CACA,2BAAA,CACA,UAAA,CACA,WAAA,CAEF,4BACE,kBAAA,CACA,WAAA,CAKN,wCACE,iCACE,sBAAA,CACA,sCAAA,CAAA",
            sourcesContent: [
              '.subscribe {\n  position: relative;\n  margin-top: -10px;\n\n  &__input {\n    width: 440px;\n    height: 59px;\n    padding: 8px 8px 8px 27px;\n    border-radius: 40px;\n    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.4);\n    border: solid 1px rgba(0, 0, 0, 0.8);\n    background-color: #ffffff;\n  }\n\n  &__submit {\n    position: absolute;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 43px;\n    height: 43px;\n    background-color: #df2224;\n    border-radius: 100%;\n    border: none;\n    right: 8px;\n    top: 50%;\n    transform: translateY(-50%);\n    transition: all 0.6s;\n    cursor: pointer;\n    &::after {\n      content: "";\n      position: relative;\n      display: block;\n      background-image: url("./arrow-right.svg");\n      background-size: contain;\n      background-repeat: no-repeat;\n      width: 20px;\n      height: 20px;\n    }\n    &:disabled {\n      filter: saturate(0);\n      cursor: auto;\n    }\n  }\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .subscribe__submit:hover:enabled {\n    filter: brightness(1.2);\n    transform: translateY(-50%) scale(1.05);\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const p = c;
      },
      194: (n, e, t) => {
        t.d(e, { A: () => r });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o)()(i());
        s.push([
          n.id,
          ".events{padding:110px;text-align:center;min-height:100vh}.events__title{margin:0;font-size:72px;color:#162c4e;opacity:.4;text-transform:uppercase}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/pages/events/UI/events.scss"],
            names: [],
            mappings:
              "AAAA,QACE,aAAA,CACA,iBAAA,CACA,gBAAA,CAEA,eACE,QAAA,CACA,cAAA,CACA,aAAA,CACA,UAAA,CACA,wBAAA",
            sourcesContent: [
              ".events {\n  padding: 110px;\n  text-align: center;\n  min-height: 100vh;\n\n  &__title {\n    margin: 0;\n    font-size: 72px;\n    color: #162c4e;\n    opacity: 0.4;\n    text-transform: uppercase;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const r = s;
      },
      9534: (n, e, t) => {
        t.d(e, { A: () => p });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o),
          r = t(4417),
          a = t.n(r),
          l = new URL(t(4788), t.b),
          c = s()(i()),
          d = a()(l);
        c.push([
          n.id,
          `.home{position:relative;display:flex;flex-direction:column;min-height:100vh;align-items:center}.home__main-content{display:flex;flex-direction:column;align-items:center;flex-grow:1}.home__logo-icon{transition:all .6s ease}.home__logo-link{margin-top:110px}.home__title{margin:0;margin-top:85px;font-size:72px;font-weight:700;text-transform:uppercase;color:#162c4e;opacity:.39;transition:all .7s ease}.home__sub-title{margin-top:4px;color:#000;opacity:.8;font-size:18px;line-height:27px;width:423px;text-align:center;transition:all .8s ease}.home__footer{display:flex;position:relative;align-items:center;justify-content:center;height:192px;width:100%;background-color:#162c4e}.home__footer-link{display:flex;position:absolute;right:110px;font-size:20px;gap:10px;align-items:center;text-decoration:none;color:#fff;justify-self:flex-end}.home__footer-link::after{content:"";display:block;width:24px;height:24px;background:url(${d}) center/contain no-repeat;transform:rotate(90deg);transition:all .6s}.home__footer-link::before{content:"";display:block;position:absolute;bottom:-5px;width:0%;height:2px;background:#fff;transition:width .6s}.home__left-side-img,.home__right-side-img{position:absolute;transition:all .7s}.home__left-side-img{left:0}.home__right-side-img{right:0}.home__event-wrapper{display:flex;flex-direction:column;align-items:center;gap:12px;margin-top:130px;font-size:18px}.home__event-link{display:flex;align-items:center;justify-content:flex-start;color:#fff;text-decoration:none;width:240px;height:60px;padding:16px 20px 17px 28px;border-radius:40px;background-color:#1d4169;transition:all .6s;margin-bottom:75px}.home__event-link::after{content:"";position:relative;background:url(${d});width:20px;height:20px;left:36px;transition:all .6s}@media(hover: hover)and (pointer: fine){.home__event-link:hover{filter:brightness(1.2);transform:scale(1.05)}.home__event-link:hover::after{transform:translateX(5px) scale(1.05) rotate(-35deg)}.home__footer-link:hover::before{width:100%}.home__footer-link:hover::after{transform:rotate(45deg)}}@media(max-width: 1200px)and (min-width: 768px){.home__title{font-size:36px}.home__sub-title{font-size:16px;width:286px}.timer__time,.timer__divider{font-size:36px}.home__left-side-img{width:256px;transform:translateX(-10px) translateY(-20px)}.home{overflow:hidden}.home__right-side-img{width:350px;transform:translateX(72px) translateY(-19px) rotate(-7deg)}.home__logo-link{margin-top:100px}.home__logo-icon{width:100%}.home__title{margin-top:160px}.home__sub-title{margin-top:15px}.timer{margin-top:18px}.timer__time,.timer__divider{width:50px}.timer__time::after{transform:scaleY(1.5);width:65px;height:40px;bottom:-53px;font-size:10px}.timer__time::before{bottom:-29px;font-size:12px}.days::before{content:"DD"}.hours::before{content:"HH"}.minutes::before{content:"MM"}.seconds::before{content:"SS"}.home__event-wrapper{margin-top:88px;font-size:16px}.home__event-link{font-size:18px;margin-bottom:170px}.home__footer{flex-direction:column;gap:15px;height:160px;margin-top:5px;font-size:14px}.home__footer-link{font-size:16px;position:static;gap:3px}.subscribe__input{width:360px;height:40px;padding:10px 80px 10px 20px}.subscribe__submit{width:33px;height:33px}}@media(min-width: 300px){.home__title{font-size:36px}.home__sub-title{font-size:16px;width:286px}.timer__time,.timer__divider{font-size:36px}.home__left-side-img{width:180px;transform:translateX(-10px) translateY(-20px)}.home{overflow:hidden}.home__right-side-img{width:265px;transform:translateX(72px) translateY(-19px) rotate(-7deg)}.home__logo-link{margin-top:80px}.home__logo-icon{width:128px}.home__title{margin-top:60px;text-align:center;line-height:38px}.home__sub-title{margin-top:15px;line-height:25px}.home__event-wrapper{gap:17px}.timer{margin-top:18px}.timer__time,.timer__divider{width:40px}.timer__time::after{transform:scaleY(1.5);width:65px;height:40px;bottom:-53px;font-size:10px}.timer__time::before{bottom:-29px;font-size:12px}.days::before{content:"DD"}.hours::before{content:"HH"}.minutes::before{content:"MM"}.seconds::before{content:"SS"}.home__event-wrapper{margin-top:88px;font-size:16px}.home__event-link{font-size:18px;margin-bottom:115px}.home__footer{flex-direction:column;gap:15px;height:160px;margin-top:5px;font-size:14px}.home__footer-link{font-size:16px;position:static;gap:3px}.subscribe__input{margin-top:-10px;width:280px;height:40px;padding:10px 40px 10px 20px;font-size:14px;letter-spacing:-0.6px}.subscribe__submit{width:33px;height:33px;top:36%;right:4px}}.home.at-loading .home__logo-icon{transform:translateY(-100px);opacity:0}.home.at-loading .home__title{transform:translateY(-100px);opacity:0}.home.at-loading .home__sub-title{transform:translateY(-150px);opacity:0}.home.at-loading .home__left-side-img{opacity:0;transform:translateX(-100%) translateY(-100%)}.home.at-loading .home__right-side-img{opacity:0;transform:translateX(100%) translateY(-100%)}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/pages/home/UI/home.scss"],
            names: [],
            mappings:
              "AAAA,MACE,iBAAA,CACA,YAAA,CACA,qBAAA,CACA,gBAAA,CACA,kBAAA,CAEA,oBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,WAAA,CAEJ,iBACE,uBAAA,CAEA,iBACE,gBAAA,CAGF,aACE,QAAA,CACA,eAAA,CACA,cAAA,CACA,eAAA,CACA,wBAAA,CACA,aAAA,CACA,WAAA,CACA,uBAAA,CAGF,iBACE,cAAA,CACA,UAAA,CACA,UAAA,CACA,cAAA,CACA,gBAAA,CACA,WAAA,CACA,iBAAA,CACA,uBAAA,CAGF,cACE,YAAA,CACA,iBAAA,CACA,kBAAA,CACA,sBAAA,CACA,YAAA,CACA,UAAA,CACA,wBAAA,CAEA,mBACE,YAAA,CACA,iBAAA,CACA,WAAA,CACA,cAAA,CACA,QAAA,CACA,kBAAA,CACA,oBAAA,CACA,UAAA,CACA,qBAAA,CAEA,0BACE,UAAA,CACA,aAAA,CACA,UAAA,CACA,WAAA,CACA,2EAAA,CACA,uBAAA,CACA,kBAAA,CAGF,2BACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,WAAA,CACA,QAAA,CACA,UAAA,CACA,eAAA,CACA,oBAAA,CAKN,2CAEE,iBAAA,CACA,kBAAA,CAGF,qBACE,MAAA,CAGF,sBACE,OAAA,CAGF,qBACE,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CACA,gBAAA,CACA,cAAA,CAGF,kBACE,YAAA,CACA,kBAAA,CACA,0BAAA,CACA,UAAA,CACA,oBAAA,CACA,WAAA,CACA,WAAA,CACA,2BAAA,CACA,kBAAA,CACA,wBAAA,CACA,kBAAA,CACA,kBAAA,CACA,yBACE,UAAA,CACA,iBAAA,CACA,kDAAA,CACA,UAAA,CACA,WAAA,CACA,SAAA,CACA,kBAAA,CAKN,wCACE,wBACE,sBAAA,CACA,qBAAA,CACA,+BACE,oDAAA,CAIJ,iCACE,UAAA,CAEF,gCACE,uBAAA,CAAA,CAIJ,gDACE,aACE,cAAA,CAGF,iBACE,cAAA,CACA,WAAA,CAGF,6BAEE,cAAA,CAEF,qBACE,WAAA,CACA,6CAAA,CAEF,MACE,eAAA,CAEF,sBACE,WAAA,CACA,0DAAA,CAEF,iBACE,gBAAA,CAEF,iBACE,UAAA,CAGF,aACE,gBAAA,CAGF,iBACE,eAAA,CAGF,OACE,eAAA,CAGF,6BAEE,UAAA,CAGF,oBACE,qBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CAGF,qBACE,YAAA,CACA,cAAA,CAGF,cACE,YAAA,CAEF,eACE,YAAA,CAEF,iBACE,YAAA,CAEF,iBACE,YAAA,CAGF,qBACE,eAAA,CACA,cAAA,CAGF,kBACE,cAAA,CACA,mBAAA,CAGF,cACE,qBAAA,CACA,QAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA,CAEA,mBACE,cAAA,CACA,eAAA,CACA,OAAA,CAGJ,kBACE,WAAA,CACA,WAAA,CACA,2BAAA,CAGF,mBACE,UAAA,CACA,WAAA,CAAA,CAIJ,yBACE,aACE,cAAA,CAGF,iBACE,cAAA,CACA,WAAA,CAGF,6BAEE,cAAA,CAEF,qBACE,WAAA,CACA,6CAAA,CAEF,MACE,eAAA,CAEF,sBACE,WAAA,CACA,0DAAA,CAEF,iBACE,eAAA,CAEF,iBACE,WAAA,CAGF,aACE,eAAA,CACA,iBAAA,CACA,gBAAA,CAGF,iBACE,eAAA,CACA,gBAAA,CAGF,qBACE,QAAA,CAGF,OACE,eAAA,CAGF,6BAEE,UAAA,CAGF,oBACE,qBAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,cAAA,CAGF,qBACE,YAAA,CACA,cAAA,CAGF,cACE,YAAA,CAEF,eACE,YAAA,CAEF,iBACE,YAAA,CAEF,iBACE,YAAA,CAGF,qBACE,eAAA,CACA,cAAA,CAGF,kBACE,cAAA,CACA,mBAAA,CAGF,cACE,qBAAA,CACA,QAAA,CACA,YAAA,CACA,cAAA,CACA,cAAA,CAEA,mBACE,cAAA,CACA,eAAA,CACA,OAAA,CAGJ,kBACE,gBAAA,CACA,WAAA,CACA,WAAA,CACA,2BAAA,CACA,cAAA,CACA,qBAAA,CAGF,mBACE,UAAA,CACA,WAAA,CACA,OAAA,CACA,SAAA,CAAA,CAKF,kCACE,4BAAA,CACA,SAAA,CAGF,8BACE,4BAAA,CACA,SAAA,CAGF,kCACE,4BAAA,CACA,SAAA,CAGF,sCACE,SAAA,CACA,6CAAA,CAEF,uCACE,SAAA,CACA,4CAAA",
            sourcesContent: [
              '.home {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  align-items: center;\n\n  &__main-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    flex-grow: 1;\n  }\n&__logo-icon {\n  transition: all 0.6s ease;\n}\n  &__logo-link {\n    margin-top: 110px;\n  }\n\n  &__title {\n    margin: 0;\n    margin-top: 85px;\n    font-size: 72px;\n    font-weight: 700;\n    text-transform: uppercase;\n    color: #162c4e;\n    opacity: 0.39;\n    transition: all 0.7s ease;\n  }\n\n  &__sub-title {\n    margin-top: 4px;\n    color: #000000;\n    opacity: 0.8;\n    font-size: 18px;\n    line-height: 27px;\n    width: 423px;\n    text-align: center;\n    transition: all 0.8s ease;\n  }\n\n  &__footer {\n    display: flex;\n    position: relative;\n    align-items: center;\n    justify-content: center;\n    height: 192px;\n    width: 100%;\n    background-color: #162c4e;\n\n    &-link {\n      display: flex;\n      position: absolute;\n      right: 110px;\n      font-size: 20px;\n      gap: 10px;\n      align-items: center;\n      text-decoration: none;\n      color: #ffffff;\n      justify-self: flex-end;\n\n      &::after {\n        content: "";\n        display: block;\n        width: 24px;\n        height: 24px;\n        background: url("./img/arrow-right.svg") center/contain no-repeat;\n        transform: rotate(90deg);\n        transition: all 0.6s;\n      }\n\n      &::before {\n        content: "";\n        display: block;\n        position: absolute;\n        bottom: -5px;\n        width: 0%;\n        height: 2px;\n        background: #ffffff;\n        transition: width 0.6s;\n      }\n    }\n  }\n\n  &__left-side-img,\n  &__right-side-img {\n    position: absolute;\n    transition: all 0.7s;\n  }\n\n  &__left-side-img {\n    left: 0;\n  }\n\n  &__right-side-img {\n    right: 0;\n  }\n\n  &__event-wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 12px;\n    margin-top: 130px;\n    font-size: 18px;\n  }\n\n  &__event-link {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    color: #ffffff;\n    text-decoration: none;\n    width: 240px;\n    height: 60px;\n    padding: 16px 20px 17px 28px;\n    border-radius: 40px;\n    background-color: #1d4169;\n    transition: all 0.6s;\n    margin-bottom: 75px;\n    &::after {\n      content: "";\n      position: relative;\n      background: url("./img/arrow-right.svg");\n      width: 20px;\n      height: 20px;\n      left: 36px;\n      transition: all 0.6s;\n    }\n  }\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .home__event-link:hover {\n    filter: brightness(1.2);\n    transform: scale(1.05);\n    &::after {\n      transform: translateX(5px) scale(1.05) rotate(-35deg);\n    }\n  }\n\n  .home__footer-link:hover::before {\n    width: 100%;\n  }\n  .home__footer-link:hover::after {\n    transform: rotate(45deg);\n  }\n}\n\n@media (max-width: 1200px) and (min-width: 768px) {\n  .home__title {\n    font-size: 36px;\n  }\n\n  .home__sub-title {\n    font-size: 16px;\n    width: 286px;\n  }\n\n  .timer__time,\n  .timer__divider {\n    font-size: 36px;\n  }\n  .home__left-side-img {\n    width: 256px;\n    transform: translateX(-10px) translateY(-20px);\n  }\n  .home {\n    overflow: hidden;\n  }\n  .home__right-side-img {\n    width: 350px;\n    transform: translateX(72px) translateY(-19px) rotate(-7deg);\n  }\n  .home__logo-link {\n    margin-top: 100px;\n  }\n  .home__logo-icon {\n    width: 100%;\n  }\n\n  .home__title {\n    margin-top: 160px;\n  }\n\n  .home__sub-title {\n    margin-top: 15px;\n  }\n\n  .timer {\n    margin-top: 18px;\n  }\n\n  .timer__time,\n  .timer__divider {\n    width: 50px;\n  }\n\n  .timer__time::after {\n    transform: scaleY(1.5);\n    width: 65px;\n    height: 40px;\n    bottom: -53px;\n    font-size: 10px;\n  }\n\n  .timer__time::before {\n    bottom: -29px;\n    font-size: 12px;\n  }\n\n  .days::before {\n    content: "DD";\n  }\n  .hours::before {\n    content: "HH";\n  }\n  .minutes::before {\n    content: "MM";\n  }\n  .seconds::before {\n    content: "SS";\n  }\n\n  .home__event-wrapper {\n    margin-top: 88px;\n    font-size: 16px;\n  }\n\n  .home__event-link {\n    font-size: 18px;\n    margin-bottom: 170px;\n  }\n\n  .home__footer {\n    flex-direction: column;\n    gap: 15px;\n    height: 160px;\n    margin-top: 5px;\n    font-size: 14px;\n\n    &-link {\n      font-size: 16px;\n      position: static;\n      gap: 3px;\n    }\n  }\n  .subscribe__input {\n    width: 360px;\n    height: 40px;\n    padding: 10px 80px 10px 20px;\n  }\n\n  .subscribe__submit {\n    width: 33px;\n    height: 33px;\n  }\n}\n\n@media (min-width: 300px) {\n  .home__title {\n    font-size: 36px;\n  }\n\n  .home__sub-title {\n    font-size: 16px;\n    width: 286px;\n  }\n\n  .timer__time,\n  .timer__divider {\n    font-size: 36px;\n  }\n  .home__left-side-img {\n    width: 180px;\n    transform: translateX(-10px) translateY(-20px);\n  }\n  .home {\n    overflow: hidden;\n  }\n  .home__right-side-img {\n    width: 265px;\n    transform: translateX(72px) translateY(-19px) rotate(-7deg);\n  }\n  .home__logo-link {\n    margin-top: 80px;\n  }\n  .home__logo-icon {\n    width: 128px;\n  }\n\n  .home__title {\n    margin-top: 60px;\n    text-align: center;\n    line-height: 38px;\n  }\n\n  .home__sub-title {\n    margin-top: 15px;\n    line-height: 25px;\n  }\n\n  .home__event-wrapper {\n    gap: 17px;\n  }\n\n  .timer {\n    margin-top: 18px;\n  }\n\n  .timer__time,\n  .timer__divider {\n    width: 40px;\n  }\n\n  .timer__time::after {\n    transform: scaleY(1.5);\n    width: 65px;\n    height: 40px;\n    bottom: -53px;\n    font-size: 10px;\n  }\n\n  .timer__time::before {\n    bottom: -29px;\n    font-size: 12px;\n  }\n\n  .days::before {\n    content: "DD";\n  }\n  .hours::before {\n    content: "HH";\n  }\n  .minutes::before {\n    content: "MM";\n  }\n  .seconds::before {\n    content: "SS";\n  }\n\n  .home__event-wrapper {\n    margin-top: 88px;\n    font-size: 16px;\n  }\n\n  .home__event-link {\n    font-size: 18px;\n    margin-bottom: 115px;\n  }\n\n  .home__footer {\n    flex-direction: column;\n    gap: 15px;\n    height: 160px;\n    margin-top: 5px;\n    font-size: 14px;\n\n    &-link {\n      font-size: 16px;\n      position: static;\n      gap: 3px;\n    }\n  }\n  .subscribe__input {\n    margin-top: -10px;\n    width: 280px;\n    height: 40px;\n    padding: 10px 40px 10px 20px;\n    font-size: 14px;\n    letter-spacing: -0.6px;\n  }\n\n  .subscribe__submit {\n    width: 33px;\n    height: 33px;\n    top: 36%;\n    right: 4px;\n  }\n}\n\n.home.at-loading {\n  .home__logo-icon {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n\n  .home__title {\n    transform: translateY(-100px);\n    opacity: 0;\n  }\n\n  .home__sub-title {\n    transform: translateY(-150px);\n    opacity: 0;\n  }\n\n  .home__left-side-img {\n    opacity: 0;\n    transform: translateX(-100%) translateY(-100%);\n  }\n  .home__right-side-img {\n    opacity: 0;\n    transform: translateX(100%) translateY(-100%);\n  }\n\n\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const p = c;
      },
      331: (n, e, t) => {
        t.d(e, { A: () => r });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o)()(i());
        s.push([
          n.id,
          '.popup{position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);display:flex;flex-direction:column;align-items:center;gap:30px;padding:16px 16px 70px 16px;margin:0 auto;width:320px;height:370px;background:#fff;z-index:100}.popup__title{font-size:36px;color:#162c4e;margin:0}.popup__descr{text-align:center;font-size:16px;opacity:.8;margin:0}.popup__close{width:200px;height:60px;border-radius:40px;background-color:#1d4169;color:#fff;font-size:18px;border:none;cursor:pointer;transition:all .6s}.popup__cross{display:block;margin-top:8px;padding:0;border:none;background:none;width:24px;height:24px;align-self:end;cursor:pointer;transition:all .6s}.popup__cross::after,.popup__cross::before{content:"";display:block;width:100%;height:1px;background:#135978}.popup__cross::after{transform:rotate(45deg) translateY(-1px)}.popup__cross::before{transform:rotate(-45deg)}.popup__background{position:fixed;top:0;width:100vw;height:100vh;background:#162c4e;opacity:.6;z-index:10}@media(hover: hover)and (pointer: fine){.popup__cross:hover{transform:scale(1.2)}.popup__close:hover{transform:scale(1.05);filter:brightness(1.2)}}',
          "",
          {
            version: 3,
            sources: ["webpack://./src/shared/popup/UI/popup.scss"],
            names: [],
            mappings:
              "AAAA,OACE,iBAAA,CACA,OAAA,CACA,QAAA,CACA,2CAAA,CACA,YAAA,CACA,qBAAA,CACA,kBAAA,CACA,QAAA,CACA,2BAAA,CACA,aAAA,CACA,WAAA,CACA,YAAA,CACA,eAAA,CACA,WAAA,CAEA,cACE,cAAA,CACA,aAAA,CACA,QAAA,CAGF,cACE,iBAAA,CACA,cAAA,CACA,UAAA,CACA,QAAA,CAGF,cACE,WAAA,CACA,WAAA,CACA,kBAAA,CACA,wBAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CACA,cAAA,CACA,kBAAA,CAGF,cACE,aAAA,CACA,cAAA,CACA,SAAA,CACA,WAAA,CACA,eAAA,CACA,UAAA,CACA,WAAA,CACA,cAAA,CACA,cAAA,CACA,kBAAA,CAEA,2CAEE,UAAA,CACA,aAAA,CACA,UAAA,CACA,UAAA,CACA,kBAAA,CAGF,qBACE,wCAAA,CAGF,sBACE,wBAAA,CAIJ,mBACE,cAAA,CACA,KAAA,CACA,WAAA,CACA,YAAA,CACA,kBAAA,CACA,UAAA,CACA,UAAA,CAIJ,wCAEI,oBACE,oBAAA,CAGF,oBACE,qBAAA,CACA,sBAAA,CAAA",
            sourcesContent: [
              '.popup {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateY(-50%) translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 30px;\n  padding: 16px 16px 70px 16px;\n  margin: 0 auto;\n  width: 320px;\n  height: 370px;\n  background: #ffffff;\n  z-index: 100;\n\n  &__title {\n    font-size: 36px;\n    color: #162c4e;\n    margin: 0;\n  }\n\n  &__descr {\n    text-align: center;\n    font-size: 16px;\n    opacity: 0.8;\n    margin: 0;\n  }\n\n  &__close {\n    width: 200px;\n    height: 60px;\n    border-radius: 40px;\n    background-color: #1d4169;\n    color: #ffffff;\n    font-size: 18px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.6s;\n  }\n\n  &__cross {\n    display: block;\n    margin-top: 8px;\n    padding: 0;\n    border: none;\n    background: none;\n    width: 24px;\n    height: 24px;\n    align-self: end;\n    cursor: pointer;\n    transition: all 0.6s;\n\n    &::after,\n    &::before {\n      content: "";\n      display: block;\n      width: 100%;\n      height: 1px;\n      background: #135978;\n    }\n\n    &::after {\n      transform: rotate(45deg) translateY(-1px);\n    }\n\n    &::before {\n      transform: rotate(-45deg);\n    }\n  }\n\n  &__background {\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    background: #162c4e;\n    opacity: 0.6;\n    z-index: 10;\n  }\n}\n\n@media (hover: hover) and (pointer: fine) {\n  .popup {\n    &__cross:hover {\n      transform: scale(1.2);\n    }\n\n    &__close:hover {\n      transform: scale(1.05);\n      filter: brightness(1.2);\n    }\n  }\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const r = s;
      },
      21: (n, e, t) => {
        t.d(e, { A: () => r });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o)()(i());
        s.push([
          n.id,
          ".accordion{margin-top:20px;display:flex;border:1px solid #000;gap:4px;min-height:400px;min-width:400px;width:1705px;overflow:hidden}.accordion__item{display:flex;cursor:pointer}.accordion__item.collapsed .accordion__main{width:0}.accordion__root{display:flex;align-items:center;justify-content:center;position:relative;width:85px;background:#162c4e;color:#fff}.accordion__main{overflow:hidden;width:995px;transition:all .6s ease-in}.accordion__descr{transform:rotate(-90deg);font-size:32px;white-space:nowrap}.accordion__number{position:absolute;bottom:15px;font-size:40px}.accordion__img{object-fit:cover}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/widgets/accordion/UI/accordion.scss"],
            names: [],
            mappings:
              "AAAA,WACE,eAAA,CACA,YAAA,CACA,qBAAA,CACA,OAAA,CACA,gBAAA,CACA,eAAA,CACA,YAAA,CACA,eAAA,CACA,iBACE,YAAA,CACA,cAAA,CACA,4CACE,OAAA,CAIJ,iBACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,iBAAA,CACA,UAAA,CACA,kBAAA,CACA,UAAA,CAGF,iBACE,eAAA,CACA,WAAA,CACA,0BAAA,CAGF,kBACE,wBAAA,CACA,cAAA,CACA,kBAAA,CAEF,mBACE,iBAAA,CACA,WAAA,CACA,cAAA,CAGF,gBACE,gBAAA",
            sourcesContent: [
              ".accordion {\n  margin-top: 20px;\n  display: flex;\n  border: 1px solid black;\n  gap: 4px;\n  min-height: 400px;\n  min-width: 400px;\n  width: 1705px;\n  overflow: hidden;\n  &__item {\n    display: flex;\n    cursor: pointer;\n    &.collapsed .accordion__main {\n      width: 0;\n    }\n  }\n\n  &__root {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    width: 85px;\n    background: #162c4e;\n    color: #ffffff;\n  }\n\n  &__main {\n    overflow: hidden;\n    width: 995px;\n    transition: all 0.6s ease-in;\n  }\n\n  &__descr {\n    transform: rotate(-90deg);\n    font-size: 32px;\n    white-space: nowrap;\n  }\n  &__number {\n    position: absolute;\n    bottom: 15px;\n    font-size: 40px;\n  }\n\n  &__img {\n    object-fit: cover;\n  }\n}\n",
            ],
            sourceRoot: "",
          },
        ]);
        const r = s;
      },
      3115: (n, e, t) => {
        t.d(e, { A: () => p });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o),
          r = t(4417),
          a = t.n(r),
          l = new URL(t(3444), t.b),
          c = s()(i()),
          d = a()(l);
        c.push([
          n.id,
          `.timer{display:flex;margin-top:7px;transition:all .9s ease}.timer__time,.timer__divider{display:flex;position:relative;gap:2px;align-items:center;justify-content:center;color:#162c4e;font-size:72px;font-weight:500;width:95px}.timer__time div,.timer__divider div{display:flex;align-items:center;justify-content:center;width:95px}.timer__divider{width:55px}.timer__time::after{content:"";display:block;position:absolute;background-image:url(${d});background-size:contain;background-repeat:no-repeat;height:55px;width:135px;bottom:-55px}.days:before,.hours:before,.minutes:before,.seconds:before{content:"Days";position:absolute;bottom:-37px;font-weight:400;font-size:16px;text-align:center;color:#fff;z-index:1}.hours:before{content:"Hours"}.minutes:before{content:"Minutes"}.seconds:before{content:"Seconds"}.at-loading .timer{opacity:0;transform:translateY(-230px)}`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/widgets/timer/UI/timer.scss"],
            names: [],
            mappings:
              "AAAA,OACE,YAAA,CACA,cAAA,CACA,uBAAA,CACA,6BAEE,YAAA,CACA,iBAAA,CACA,OAAA,CACA,kBAAA,CACA,sBAAA,CACA,aAAA,CACA,cAAA,CACA,eAAA,CACA,UAAA,CACA,qCACE,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,UAAA,CAGJ,gBACE,UAAA,CAGF,oBACE,UAAA,CACA,aAAA,CACA,iBAAA,CACA,wDAAA,CACA,uBAAA,CACA,2BAAA,CACA,WAAA,CACA,WAAA,CACA,YAAA,CAIJ,2DAIE,cAAA,CACA,iBAAA,CACA,YAAA,CACA,eAAA,CACA,cAAA,CACA,iBAAA,CACA,UAAA,CACA,SAAA,CAGF,cACE,eAAA,CAGF,gBACE,iBAAA,CAGF,gBACE,iBAAA,CAGF,mBACI,SAAA,CACA,4BAAA",
            sourcesContent: [
              '.timer {\n  display: flex;\n  margin-top: 7px;\n  transition: all 0.9s ease;\n  &__time,\n  &__divider {\n    display: flex;\n    position: relative;\n    gap: 2px;\n    align-items: center;\n    justify-content: center;\n    color: #162c4e;\n    font-size: 72px;\n    font-weight: 500;\n    width: 95px;\n    div {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      width: 95px;\n    }\n  }\n  &__divider {\n    width: 55px;\n  }\n\n  &__time::after {\n    content: "";\n    display: block;\n    position: absolute;\n    background-image: url("./timer-bg.svg");\n    background-size: contain;\n    background-repeat: no-repeat;\n    height: 55px;\n    width: 135px;\n    bottom: -55px;\n  }\n}\n\n.days:before,\n.hours:before,\n.minutes:before,\n.seconds:before {\n  content: "Days";\n  position: absolute;\n  bottom: -37px;\n  font-weight: 400;\n  font-size: 16px;\n  text-align: center;\n  color: #ffffff;\n  z-index: 1;\n}\n\n.hours:before {\n  content: "Hours";\n}\n\n.minutes:before {\n  content: "Minutes";\n}\n\n.seconds:before {\n  content: "Seconds";\n}\n\n.at-loading .timer {\n    opacity: 0;\n    transform: translateY(-230px);\n}',
            ],
            sourceRoot: "",
          },
        ]);
        const p = c;
      },
      6719: (n, e, t) => {
        t.d(e, { A: () => r });
        var A = t(1354),
          i = t.n(A),
          o = t(6314),
          s = t.n(o)()(i());
        s.push([
          n.id,
          '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',
          "",
          {
            version: 3,
            sources: ["webpack://./src/app/styles/normalize.css"],
            names: [],
            mappings:
              "AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;;EAEE,MAAM;EACN,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf",
            sourcesContent: [
              '/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type="button"],\n[type="reset"],\n[type="submit"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type="checkbox"],\n[type="radio"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n',
            ],
            sourceRoot: "",
          },
        ]);
        const r = s;
      },
      6314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  A = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  A &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {",
                    )),
                  (t += n(e)),
                  A && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, A, i, o) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var s = {};
              if (A)
                for (var r = 0; r < this.length; r++) {
                  var a = this[r][0];
                  null != a && (s[a] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var c = [].concat(n[l]);
                (A && s[c[0]]) ||
                  (void 0 !== o &&
                    (void 0 === c[5] ||
                      (c[1] = "@layer"
                        .concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {")
                        .concat(c[1], "}")),
                    (c[5] = o)),
                  t &&
                    (c[2]
                      ? ((c[1] = "@media "
                          .concat(c[2], " {")
                          .concat(c[1], "}")),
                        (c[2] = t))
                      : (c[2] = t)),
                  i &&
                    (c[4]
                      ? ((c[1] = "@supports ("
                          .concat(c[4], ") {")
                          .concat(c[1], "}")),
                        (c[4] = i))
                      : (c[4] = "".concat(i))),
                  e.push(c));
              }
            }),
            e
          );
        };
      },
      4417: (n) => {
        n.exports = function (n, e) {
          return (
            e || (e = {}),
            n
              ? ((n = String(n.__esModule ? n.default : n)),
                /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)),
                e.hash && (n += e.hash),
                /["'() \t\n]|(%20)/.test(n) || e.needQuotes
                  ? '"'.concat(
                      n.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
                      '"',
                    )
                  : n)
              : n
          );
        };
      },
      1354: (n) => {
        n.exports = function (n) {
          var e = n[1],
            t = n[3];
          if (!t) return e;
          if ("function" == typeof btoa) {
            var A = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              i =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  A,
                ),
              o = "/*# ".concat(i, " */");
            return [e].concat([o]).join("\n");
          }
          return [e].join("\n");
        };
      },
      8930: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(1475),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      5619: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(710),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      4303: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(194),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      699: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(9534),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      1592: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(331),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      3652: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(21),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      258: (n, e, t) => {
        t.r(e), t.d(e, { default: () => f });
        var A = t(5072),
          i = t.n(A),
          o = t(7825),
          s = t.n(o),
          r = t(7659),
          a = t.n(r),
          l = t(5056),
          c = t.n(l),
          d = t(540),
          p = t.n(d),
          C = t(1113),
          h = t.n(C),
          m = t(3115),
          u = {};
        (u.styleTagTransform = h()),
          (u.setAttributes = c()),
          (u.insert = a().bind(null, "head")),
          (u.domAPI = s()),
          (u.insertStyleElement = p()),
          i()(m.A, u);
        const f = m.A && m.A.locals ? m.A.locals : void 0;
      },
      5072: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, A = 0; A < e.length; A++)
            if (e[A].identifier === n) {
              t = A;
              break;
            }
          return t;
        }
        function A(n, A) {
          for (var o = {}, s = [], r = 0; r < n.length; r++) {
            var a = n[r],
              l = A.base ? a[0] + A.base : a[0],
              c = o[l] || 0,
              d = "".concat(l, " ").concat(c);
            o[l] = c + 1;
            var p = t(d),
              C = {
                css: a[1],
                media: a[2],
                sourceMap: a[3],
                supports: a[4],
                layer: a[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(C);
            else {
              var h = i(C, A);
              (A.byIndex = r),
                e.splice(r, 0, { identifier: d, updater: h, references: 1 });
            }
            s.push(d);
          }
          return s;
        }
        function i(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, i) {
          var o = A((n = n || []), (i = i || {}));
          return function (n) {
            n = n || [];
            for (var s = 0; s < o.length; s++) {
              var r = t(o[s]);
              e[r].references--;
            }
            for (var a = A(n, i), l = 0; l < o.length; l++) {
              var c = t(o[l]);
              0 === e[c].references && (e[c].updater(), e.splice(c, 1));
            }
            o = a;
          };
        };
      },
      7659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var A = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!A)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          A.appendChild(t);
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      5056: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      7825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var A = "";
                t.supports && (A += "@supports (".concat(t.supports, ") {")),
                  t.media && (A += "@media ".concat(t.media, " {"));
                var i = void 0 !== t.layer;
                i &&
                  (A += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {",
                  )),
                  (A += t.css),
                  i && (A += "}"),
                  t.media && (A += "}"),
                  t.supports && (A += "}");
                var o = t.sourceMap;
                o &&
                  "undefined" != typeof btoa &&
                  (A +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(o)))),
                      " */",
                    )),
                  e.styleTagTransform(A, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      1113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      8675: (n, e, t) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          t(8930),
          (e.default = class {
            content = [];
            addSection(n) {
              this.content.push(n);
            }
            run() {
              this.content.forEach((n) => {
                document.body.append(n), n.classList.add("at-loading");
              });
            }
          });
      },
      2963: (n, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = async function (n) {
            const e = await fetch(
              "https://api.egorovagency.com/storage/portfolio/warhammer-40k-3d-character-160111657/modules/images/desktop/jpg/4912e1160111657.645273044b950.jpg",
            );
            return (
              console.log(`Request status: ${e.status}`),
              !!e.ok && (console.log("Success!"), !0)
            );
          });
      },
      2516: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(4066)).default.getView();
        e.default = i;
      },
      4066: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(8113)),
          o = A(t(8813)),
          s = A(t(2963)),
          r = A(t(2253)),
          a = new (class {
            view;
            constructor(n) {
              (this.view = n),
                this.view.input.addEventListener("input", (n) => {
                  n.target instanceof HTMLInputElement &&
                    (n.target.validity.valid
                      ? /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
                          n.target.value,
                        ) && (this.view.submit.disabled = !1)
                      : (this.view.submit.disabled = !0));
                }),
                this.view.submit.addEventListener("click", async (n) => {
                  n.preventDefault(),
                    n.target instanceof HTMLButtonElement &&
                      ((await (0, s.default)(n.target.value))
                        ? o.default.setStatus("ok")
                        : o.default.setStatus("fail"),
                      document.body.append(i.default),
                      document.body.append(o.default.view.background),
                      (this.view.input.value = ""),
                      (n.target.disabled = !0),
                      (document.body.style.overflow = "hidden"));
                });
            }
            getView() {
              return this.view.getView();
            }
          })(r.default);
        e.default = a;
      },
      2253: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.SubscibeView = void 0);
        const i = A(t(8581));
        t(5619);
        class o {
          view = new i.default({
            tag: "form",
            cssClasses: ["subscribe"],
          }).getHTMLElement();
          input = new i.default({
            tag: "input",
            cssClasses: ["subscribe__input"],
            attributes: {
              type: "email",
              required: "true",
              placeholder: "Enter your Email and get notified",
            },
          }).getHTMLElement();
          submit = new i.default({
            tag: "button",
            cssClasses: ["subscribe__submit"],
            attributes: { disabled: "true" },
          }).getHTMLElement();
          constructor() {
            this.view.append(this.input, this.submit);
          }
          getView() {
            return this.view;
          }
        }
        e.SubscibeView = o;
        const s = new o();
        e.default = s;
      },
      8156: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(8675)),
          o = A(t(4217)),
          s = A(t(1511)),
          r = new i.default();
        r.addSection(s.default),
          r.addSection(o.default),
          r.run(),
          window.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
              r.content.forEach((n) => {
                n.classList.remove("at-loading");
              });
            }, 100);
          });
      },
      3401: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.EventsUI = void 0),
          t(4303);
        const i = A(t(8581)),
          o = A(t(4091));
        class s {
          view = new i.default({
            tag: "section",
            cssClasses: ["events"],
            id: "events",
          }).getHTMLElement();
          tittle = new i.default({
            tag: "h2",
            cssClasses: ["events__title"],
            textContent: "All events",
          }).getHTMLElement();
          constructor() {
            this.view.append(this.tittle, o.default);
          }
          getView() {
            return this.view;
          }
        }
        e.EventsUI = s;
        const r = new s();
        e.default = r;
      },
      4217: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(3401)).default.getView();
        e.default = i;
      },
      973: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(8581)),
          o = A(t(2516)),
          s = A(t(3544));
        t(699);
        const r = t(4615),
          a = t(2044),
          l = t(177),
          c = new (class {
            content = new i.default({
              tag: "section",
              cssClasses: ["home"],
              id: "home",
            }).getHTMLElement();
            logoLinkWrapper = new i.default({
              tag: "a",
              cssClasses: ["home__logo-link"],
              attributes: { href: "#home" },
            }).getHTMLElement();
            logoIcon = new i.default({
              tag: "img",
              cssClasses: ["home__logo-icon"],
              attributes: { src: r },
            }).getHTMLElement();
            title = new i.default({
              tag: "h1",
              cssClasses: ["home__title"],
              textContent: "Under Construction",
            }).getHTMLElement();
            subTitle = new i.default({
              tag: "p",
              cssClasses: ["home__sub-title"],
              textContent:
                "We're making lots of improvements and will be back soon",
            }).getHTMLElement();
            mainContent = new i.default({
              tag: "div",
              cssClasses: ["home__main-content"],
            }).getHTMLElement();
            footer = new i.default({
              tag: "div",
              cssClasses: ["home__footer"],
            }).getHTMLElement();
            leftSideImg = new i.default({
              tag: "img",
              cssClasses: ["home__left-side-img"],
              attributes: { src: a },
            }).getHTMLElement();
            rightSideImg = new i.default({
              tag: "img",
              cssClasses: ["home__right-side-img"],
              attributes: { src: l },
            }).getHTMLElement();
            wrapperEventLink = new i.default({
              tag: "div",
              cssClasses: ["home__event-wrapper"],
              textContent: "Check our event page when you wait:",
            }).getHTMLElement();
            eventLink = new i.default({
              tag: "a",
              cssClasses: ["home__event-link"],
              attributes: {
                href: "https://egorovagency.com/",
                target: "__blank",
              },
              textContent: "Go to the event",
            }).getHTMLElement();
            otherEventsLink = new i.default({
              tag: "a",
              cssClasses: ["home__footer-link"],
              attributes: { href: "#events" },
              textContent: "Other Events",
            }).getHTMLElement();
            constructor() {
              this.logoLinkWrapper.append(this.logoIcon),
                this.wrapperEventLink.append(this.eventLink),
                this.mainContent.append(
                  this.logoLinkWrapper,
                  this.title,
                  this.subTitle,
                  s.default,
                  this.wrapperEventLink,
                ),
                this.footer.append(o.default, this.otherEventsLink),
                this.content.append(
                  this.leftSideImg,
                  this.rightSideImg,
                  this.mainContent,
                  this.footer,
                );
            }
            getContent() {
              return this.content;
            }
          })();
        e.default = c;
      },
      1511: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(973)).default.getContent();
        e.default = i;
      },
      8581: (n, e) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        class t {
          element;
          constructor(n) {
            (this.element = document.createElement(n.tag)),
              n.id && (this.element.id = n.id),
              n.cssClasses && this.element.classList.add(...n.cssClasses),
              n.attributes &&
                Object.entries(n.attributes).forEach(([n, e]) => {
                  this.element.setAttribute(n, e);
                }),
              n.textContent && (this.element.textContent = n.textContent),
              n.innerHTML && (this.element.innerHTML = n.innerHTML);
            const { callback: e, eventType: t } = n;
            t &&
              e &&
              "function" == typeof e &&
              this.element.addEventListener(t, e),
              n.children && this.addInnerElements(n.children);
          }
          addInnerElement(n) {
            n instanceof t
              ? this.element.append(n.getHTMLElement())
              : this.element.append(n);
          }
          addInnerElements(n) {
            Array.isArray(n)
              ? n.forEach((n) => {
                  this.addInnerElement(n);
                })
              : this.addInnerElement(n);
          }
          getHTMLElement() {
            return this.element;
          }
        }
        e.default = t;
      },
      8336: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PopupView = void 0);
        const i = A(t(8581));
        t(1592);
        class o {
          view = new i.default({
            tag: "section",
            cssClasses: ["popup"],
          }).getHTMLElement();
          title = new i.default({
            tag: "h2",
            cssClasses: ["popup__title"],
          }).getHTMLElement();
          descr = new i.default({
            tag: "p",
            cssClasses: ["popup__descr"],
          }).getHTMLElement();
          crosBtn = new i.default({
            tag: "button",
            cssClasses: ["popup__button", "popup__cross"],
            attributes: { title: "Close" },
          }).getHTMLElement();
          closeBtn = new i.default({
            tag: "button",
            cssClasses: ["popup__button", "popup__close"],
            textContent: "Close",
          }).getHTMLElement();
          background = new i.default({
            tag: "div",
            cssClasses: ["popup__background"],
          }).getHTMLElement();
          getView() {
            return this.view;
          }
          constructor() {
            this.view.append(
              this.crosBtn,
              this.title,
              this.descr,
              this.closeBtn,
            );
          }
        }
        e.PopupView = o;
        const s = new o();
        e.default = s;
      },
      8113: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(8813)).default.getViw();
        e.default = i;
      },
      8813: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.PopupController = void 0);
        const i = A(t(8336));
        class o {
          view;
          constructor(n) {
            (this.view = n),
              this.view.view.addEventListener("click", (n) => {
                n.target instanceof HTMLButtonElement &&
                  (this.view.view.remove(),
                  this.view.background.remove(),
                  (document.body.style.overflow = "auto"));
              });
          }
          getViw() {
            return this.view.getView();
          }
          setStatus(n) {
            "ok" === n
              ? ((this.view.title.textContent = "Success!"),
                this.view.view.classList.remove("fail"),
                this.view.view.classList.add("success"),
                (this.view.descr.textContent =
                  "You have successfully subscribed to the email newsletter"))
              : ((this.view.title.textContent = "Fail :("),
                this.view.view.classList.add("fail"),
                this.view.view.classList.remove("success"),
                (this.view.descr.textContent =
                  "Something went wrong. Try again..."));
          }
        }
        e.PopupController = o;
        const s = new o(i.default);
        e.default = s;
      },
      8782: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.AccordionView = void 0),
          t(3652);
        const i = A(t(8581)),
          o = A(t(5682));
        class s {
          view = new i.default({
            tag: "div",
            cssClasses: ["accordion"],
          }).getHTMLElement();
          data;
          items = [];
          constructor(n) {
            (this.data = n),
              this.data.forEach((n, e) => {
                this.view.append(this.createItem(n, e));
              }),
              this.items[0].classList.remove("collapsed");
          }
          getView() {
            return this.view;
          }
          createItem(n, e) {
            const t = new i.default({
                tag: "div",
                cssClasses: ["accordion__item", "collapsed"],
              }).getHTMLElement(),
              A = new i.default({
                tag: "div",
                cssClasses: ["accordion__root"],
              }).getHTMLElement(),
              o = new i.default({
                tag: "div",
                cssClasses: ["accordion__number"],
                textContent: (e + 1).toString().padStart(2, "0"),
              }).getHTMLElement(),
              s = new i.default({
                tag: "div",
                cssClasses: ["accordion__descr"],
                textContent: n.title,
              }).getHTMLElement();
            A.append(s, o);
            const r = new i.default({
                tag: "div",
                cssClasses: ["accordion__main"],
              }).getHTMLElement(),
              a = new i.default({
                tag: "img",
                cssClasses: ["accordion__img"],
                attributes: { src: `${n.src}` },
              }).getHTMLElement();
            return (
              r.append(a),
              t.append(A, r),
              t.addEventListener("click", () => {
                if (t.classList.contains("collapsed"))
                  this.items.forEach((n) => {
                    n.classList.add("collapsed");
                  }),
                    t.classList.remove("collapsed");
                else {
                  const n = this.items.indexOf(t);
                  this.items.forEach((n) => {
                    n.classList.add("collapsed");
                  }),
                    this.items[n - 1] &&
                      this.items[n - 1].classList.remove("collapsed");
                }
              }),
              this.items.push(t),
              t
            );
          }
        }
        e.AccordionView = s;
        const r = new s(o.default);
        e.default = r;
      },
      4091: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(8782)).default.getView();
        e.default = i;
      },
      5682: (n, e, t) => {
        Object.defineProperty(e, "__esModule", { value: !0 });
        const A = [
          { title: "Hawaiian party", src: t(5278) },
          { title: "Мafia party", src: t(4053) },
          { title: "Party", src: t(6540) },
          { title: "Party on the beach", src: t(147) },
          { title: "Home Security", src: t(9386) },
          { title: "Network Design & Implementation", src: t(8369) },
          { title: "System Design & Engineering", src: t(5656) },
          { title: "Client Care Plans", src: t(7311) },
        ];
        e.default = A;
      },
      4552: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TimerUI = void 0);
        const i = A(t(8581));
        t(258);
        class o {
          view = new i.default({
            tag: "div",
            cssClasses: ["timer"],
          }).getHTMLElement();
          days = new i.default({
            tag: "span",
            cssClasses: ["timer__time", "days"],
            children: [
              new i.default({ tag: "div" }).getHTMLElement(),
              new i.default({ tag: "div" }).getHTMLElement(),
            ],
          }).getHTMLElement();
          hours = new i.default({
            tag: "div",
            cssClasses: ["timer__time", "hours"],
            children: [
              new i.default({ tag: "div" }).getHTMLElement(),
              new i.default({ tag: "div" }).getHTMLElement(),
            ],
          }).getHTMLElement();
          minutes = new i.default({
            tag: "div",
            cssClasses: ["timer__time", "minutes"],
            children: [
              new i.default({ tag: "div" }).getHTMLElement(),
              new i.default({ tag: "div" }).getHTMLElement(),
            ],
          }).getHTMLElement();
          seconds = new i.default({
            tag: "div",
            cssClasses: ["timer__time", "seconds"],
            children: [
              new i.default({ tag: "div" }).getHTMLElement(),
              new i.default({ tag: "div" }).getHTMLElement(),
            ],
          }).getHTMLElement();
          divider1 = new i.default({
            tag: "span",
            cssClasses: ["timer__divider"],
            textContent: ":",
          }).getHTMLElement();
          divider2 = new i.default({
            tag: "span",
            cssClasses: ["timer__divider"],
            textContent: ":",
          }).getHTMLElement();
          divider3 = new i.default({
            tag: "span",
            cssClasses: ["timer__divider"],
            textContent: ":",
          }).getHTMLElement();
          constructor() {
            this.view.append(
              this.days,
              this.divider1,
              this.hours,
              this.divider2,
              this.minutes,
              this.divider3,
              this.seconds,
            );
          }
          setDays(n) {
            const e = n.toString().padStart(2, "0");
            this.days.firstElementChild &&
              this.days.lastElementChild &&
              ((this.days.firstElementChild.textContent = e[0]),
              (this.days.lastElementChild.textContent = e[1]));
          }
          setHours(n) {
            const e = n.toString().padStart(2, "0");
            this.hours.firstElementChild &&
              this.hours.lastElementChild &&
              ((this.hours.firstElementChild.textContent = e[0]),
              (this.hours.lastElementChild.textContent = e[1]));
          }
          setMinutes(n) {
            const e = n.toString().padStart(2, "0");
            this.minutes.firstElementChild &&
              this.minutes.lastElementChild &&
              ((this.minutes.firstElementChild.textContent = e[0]),
              (this.minutes.lastElementChild.textContent = e[1]));
          }
          setSeconds(n) {
            const e = n.toString().padStart(2, "0");
            this.seconds.firstElementChild &&
              this.seconds.lastElementChild &&
              ((this.seconds.firstElementChild.textContent = e[0]),
              (this.seconds.lastElementChild.textContent = e[1]));
          }
          getView() {
            return this.view;
          }
        }
        e.TimerUI = o;
        const s = new o();
        e.default = s;
      },
      3544: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(4947)).default.getView();
        e.default = i;
      },
      4947: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 });
        const i = A(t(4552)),
          o = A(t(7478)),
          s = new (class {
            model;
            view;
            constructor(n, e) {
              (this.model = n), (this.view = e);
            }
            getView() {
              return this.model.getActualTime(), this.view.getView();
            }
          })(o.default, i.default);
        e.default = s;
      },
      7478: function (n, e, t) {
        var A =
          (this && this.__importDefault) ||
          function (n) {
            return n && n.__esModule ? n : { default: n };
          };
        Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.TimerModel = void 0);
        const i = A(t(4552));
        class o {
          TARGET_TIME = new Date("2024-07-24T00:00:00").getTime();
          SECONDS_IN_MINUTE = 60;
          SECONDS_IN_HOUR = 60 * this.SECONDS_IN_MINUTE;
          SECONDS_IN_DAY = 24 * this.SECONDS_IN_HOUR;
          view;
          timeDiffInSeconds = this.calculateTimeDiffInSeconds();
          days = Math.floor(this.timeDiffInSeconds / this.SECONDS_IN_DAY);
          hours = Math.floor(
            (this.timeDiffInSeconds - this.days * this.SECONDS_IN_DAY) /
              this.SECONDS_IN_HOUR,
          );
          minutes = Math.floor(
            (this.timeDiffInSeconds -
              (this.days * this.SECONDS_IN_DAY +
                this.hours * this.SECONDS_IN_HOUR)) /
              this.SECONDS_IN_MINUTE,
          );
          seconds =
            this.timeDiffInSeconds -
            (this.days * this.SECONDS_IN_DAY +
              this.hours * this.SECONDS_IN_HOUR +
              this.minutes * this.SECONDS_IN_MINUTE);
          constructor(n) {
            (this.view = n),
              this.days < 0 ||
                (this.view.setDays(this.days),
                this.view.setHours(this.hours),
                this.view.setMinutes(this.minutes),
                this.view.setSeconds(this.seconds));
          }
          getActualTime() {
            const n = setInterval(() => {
              const e = this.calculateTimeDiffInSeconds();
              e <= 0 && clearInterval(n);
              const t = Math.floor(e / this.SECONDS_IN_DAY),
                A = Math.floor(
                  (e - t * this.SECONDS_IN_DAY) / this.SECONDS_IN_HOUR,
                ),
                i = Math.floor(
                  (e - (t * this.SECONDS_IN_DAY + A * this.SECONDS_IN_HOUR)) /
                    this.SECONDS_IN_MINUTE,
                ),
                o =
                  e -
                  (t * this.SECONDS_IN_DAY +
                    A * this.SECONDS_IN_HOUR +
                    i * this.SECONDS_IN_MINUTE);
              t >= 0 &&
                (t !== this.days && (this.view.setDays(t), (this.days = t)),
                A !== this.hours && (this.view.setHours(A), (this.hours = A)),
                i !== this.minutes &&
                  (this.view.setMinutes(i), (this.minutes = i)),
                o !== this.seconds &&
                  (this.view.setSeconds(o), (this.seconds = o)));
            }, 1e3);
          }
          calculateTimeDiffInSeconds() {
            const n = new Date().getTime();
            return Math.floor((this.TARGET_TIME - n) / 1e3);
          }
        }
        e.TimerModel = o;
        const s = new o(i.default);
        e.default = s;
      },
      2145: (n, e, t) => {
        n.exports = t.p + "a6e75fccc7be500982e5.svg";
      },
      4788: (n, e, t) => {
        n.exports = t.p + "a6e75fccc7be500982e5.svg";
      },
      2044: (n, e, t) => {
        n.exports = t.p + "cfa546d677f563a18853.svg";
      },
      4615: (n, e, t) => {
        n.exports = t.p + "c66d978f2c9fa7e194e1.svg";
      },
      177: (n, e, t) => {
        n.exports = t.p + "6058469296c49ca2420d.svg";
      },
      5278: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      4053: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      6540: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      147: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      9386: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      8369: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      5656: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      7311: (n, e, t) => {
        n.exports = t.p + "416dc589a94c5d984eb9.png";
      },
      3444: (n, e, t) => {
        n.exports = t.p + "744934591b9ff13fbe35.svg";
      },
    },
    e = {};
  function t(A) {
    var i = e[A];
    if (void 0 !== i) return i.exports;
    var o = (e[A] = { id: A, exports: {} });
    return n[A].call(o.exports, o, o.exports, t), o.exports;
  }
  (t.m = n),
    (t.n = (n) => {
      var e = n && n.__esModule ? () => n.default : () => n;
      return t.d(e, { a: e }), e;
    }),
    (t.d = (n, e) => {
      for (var A in e)
        t.o(e, A) &&
          !t.o(n, A) &&
          Object.defineProperty(n, A, { enumerable: !0, get: e[A] });
    }),
    (t.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (n) {
        if ("object" == typeof window) return window;
      }
    })()),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.r = (n) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(n, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(n, "__esModule", { value: !0 });
    }),
    (() => {
      var n;
      t.g.importScripts && (n = t.g.location + "");
      var e = t.g.document;
      if (!n && e && (e.currentScript && (n = e.currentScript.src), !n)) {
        var A = e.getElementsByTagName("script");
        if (A.length)
          for (var i = A.length - 1; i > -1 && (!n || !/^http(s?):/.test(n)); )
            n = A[i--].src;
      }
      if (!n)
        throw new Error(
          "Automatic publicPath is not supported in this browser",
        );
      (n = n
        .replace(/#.*$/, "")
        .replace(/\?.*$/, "")
        .replace(/\/[^\/]+$/, "/")),
        (t.p = n);
    })(),
    (t.b = document.baseURI || self.location.href),
    (t.nc = void 0),
    t(8156);
})();
//# sourceMappingURL=bundle.js.map
