(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4feb4503"],{"0d8a":function(e,t,n){"use strict";n("11b4")},"11b4":function(e,t,n){},"25f0":function(e,t,n){"use strict";var o=n("6eeb"),c=n("825a"),i=n("d039"),a=n("ad6d"),r="toString",l=RegExp.prototype,u=l[r],b=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),d=u.name!=r;(b||d)&&o(RegExp.prototype,r,(function(){var e=c(this),t=String(e.source),n=e.flags,o=String(void 0===n&&e instanceof RegExp&&!("flags"in l)?a.call(e):n);return"/"+t+"/"+o}),{unsafe:!0})},"78c1":function(e,t,n){"use strict";n.r(t);n("d3b7"),n("25f0");var o=n("7a23"),c=Object(o["gb"])("data-v-45a3c30d");Object(o["H"])("data-v-45a3c30d");var i=Object(o["n"])("h1",null,"各類測試用頁面",-1),a={class:"about"},r={class:"timer"},l={class:"test-container"},u=Object(o["n"])("label",{for:"aaa"},"aaa",-1),b=Object(o["n"])("label",{for:"bbb"},"bbb",-1),d=Object(o["n"])("label",{for:"ccc"},"ccc",-1),s=Object(o["n"])("label",{for:"Item1"},"Item1",-1),p=Object(o["n"])("label",{for:"Item2"},"Item2",-1),f=Object(o["n"])("label",{for:"Item3"},"Item3",-1),w=Object(o["n"])("label",{for:"isOpen"},"isOpen",-1),h=Object(o["n"])("option",{disabled:"",value:""},"請選擇",-1),O=Object(o["n"])("option",{value:"123"},"123",-1),m=Object(o["n"])("option",{value:"456"},"456",-1),v=Object(o["n"])("option",{value:"789"},"789",-1),k=Object(o["n"])("hr",null,null,-1);Object(o["F"])();var j=c((function(e,t,n,c,j,x){return Object(o["E"])(),Object(o["i"])(o["b"],null,[i,Object(o["n"])("div",a,[Object(o["n"])("div",r,"time : "+Object(o["R"])(c.nowTimer.toString()),1)]),Object(o["n"])("div",l,[Object(o["db"])(Object(o["n"])("input",{type:"checkbox",id:"aaa",value:"aaa","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.checkBoxData.checkBox=e})},null,512),[[o["V"],c.checkBoxData.checkBox]]),u,Object(o["db"])(Object(o["n"])("input",{type:"checkbox",id:"bbb",value:"bbb","onUpdate:modelValue":t[2]||(t[2]=function(e){return c.checkBoxData.checkBox=e})},null,512),[[o["V"],c.checkBoxData.checkBox]]),b,Object(o["db"])(Object(o["n"])("input",{type:"checkbox",id:"ccc",value:"ccc","onUpdate:modelValue":t[3]||(t[3]=function(e){return c.checkBoxData.checkBox=e})},null,512),[[o["V"],c.checkBoxData.checkBox]]),d,Object(o["db"])(Object(o["n"])("input",{type:"checkbox","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.checkBoxData.checkBox=e}),id:"Item1",value:"Item1"},null,512),[[o["V"],c.checkBoxData.checkBox]]),s,Object(o["db"])(Object(o["n"])("input",{type:"checkbox","onUpdate:modelValue":t[5]||(t[5]=function(e){return c.checkBoxData.checkBox=e}),id:"Item2",value:"Item2"},null,512),[[o["V"],c.checkBoxData.checkBox]]),p,Object(o["db"])(Object(o["n"])("input",{type:"checkbox","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.checkBoxData.checkBox=e}),id:"Item3",value:"Item3"},null,512),[[o["V"],c.checkBoxData.checkBox]]),f,Object(o["db"])(Object(o["n"])("input",{type:"checkbox","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.isOpen=e}),id:"isOpen",value:"isOpen"},null,512),[[o["V"],c.isOpen]]),w,Object(o["db"])(Object(o["n"])("select",{"onUpdate:modelValue":t[8]||(t[8]=function(e){return c.selectData.select=e})},[h,O,m,v],512),[[o["X"],c.selectData.select]]),Object(o["db"])(Object(o["n"])("input",{"onUpdate:modelValue":t[9]||(t[9]=function(e){return c.inputData.input=e}),class:{error:c.inputData.input.length>10}},null,2),[[o["Y"],c.inputData.input,void 0,{trim:!0}]]),Object(o["n"])("div",{textContent:Object(o["R"])(c.vhtmltext.text)},null,8,["textContent"]),Object(o["n"])("div",{innerHTML:c.vhtmltext.text},null,8,["innerHTML"]),Object(o["n"])("p",null,"CheckBox : "+Object(o["R"])(c.checkBoxData.checkBox)+" - isOpen : "+Object(o["R"])(c.isOpen),1),Object(o["n"])("p",null,"Select : "+Object(o["R"])(c.selectData.select),1),Object(o["n"])("p",null,"Input : "+Object(o["R"])(c.inputData.input),1),Object(o["n"])("button",{onClick:t[10]||(t[10]=function(){return c.claerCBD&&c.claerCBD.apply(c,arguments)})},"ClaerCheckBoxArray"),k,Object(o["n"])("p",null,"plus - count : "+Object(o["R"])(c.count),1),Object(o["n"])("button",{onClick:t[11]||(t[11]=function(e){return c.plus(1,"123465",e)})},"PLUS")])],64)})),x="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y=window.device,g={},B=[];window.device=g;var D=window.document.documentElement,I=window.navigator.userAgent.toLowerCase(),P=["googletv","viera","smarttv","internet.tv","netcast","nettv","appletv","boxee","kylo","roku","dlnadoc","pov_tv","hbbtv","ce-html"];function T(e,t){return-1!==e.indexOf(t)}function V(e){return T(I,e)}function C(e){return D.className.match(new RegExp(e,"i"))}function R(e){var t=null;C(e)||(t=D.className.replace(/^\s+|\s+$/g,""),D.className=t+" "+e)}function S(e){C(e)&&(D.className=D.className.replace(" "+e,""))}function E(){g.landscape()?(S("portrait"),R("landscape"),U("landscape")):(S("landscape"),R("portrait"),U("portrait")),M()}function U(e){for(var t=0;t<B.length;t++)B[t](e)}g.macos=function(){return V("mac")},g.ios=function(){return g.iphone()||g.ipod()||g.ipad()},g.iphone=function(){return!g.windows()&&V("iphone")},g.ipod=function(){return V("ipod")},g.ipad=function(){var e="MacIntel"===navigator.platform&&navigator.maxTouchPoints>1;return V("ipad")||e},g.android=function(){return!g.windows()&&V("android")},g.androidPhone=function(){return g.android()&&V("mobile")},g.androidTablet=function(){return g.android()&&!V("mobile")},g.blackberry=function(){return V("blackberry")||V("bb10")},g.blackberryPhone=function(){return g.blackberry()&&!V("tablet")},g.blackberryTablet=function(){return g.blackberry()&&V("tablet")},g.windows=function(){return V("windows")},g.windowsPhone=function(){return g.windows()&&V("phone")},g.windowsTablet=function(){return g.windows()&&V("touch")&&!g.windowsPhone()},g.fxos=function(){return(V("(mobile")||V("(tablet"))&&V(" rv:")},g.fxosPhone=function(){return g.fxos()&&V("mobile")},g.fxosTablet=function(){return g.fxos()&&V("tablet")},g.meego=function(){return V("meego")},g.cordova=function(){return window.cordova&&"file:"===location.protocol},g.nodeWebkit=function(){return"object"===x(window.process)},g.mobile=function(){return g.androidPhone()||g.iphone()||g.ipod()||g.windowsPhone()||g.blackberryPhone()||g.fxosPhone()||g.meego()},g.tablet=function(){return g.ipad()||g.androidTablet()||g.blackberryTablet()||g.windowsTablet()||g.fxosTablet()},g.desktop=function(){return!g.tablet()&&!g.mobile()},g.television=function(){var e=0;while(e<P.length){if(V(P[e]))return!0;e++}return!1},g.portrait=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?T(screen.orientation.type,"portrait"):g.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90!==Math.abs(window.orientation):window.innerHeight/window.innerWidth>1},g.landscape=function(){return screen.orientation&&Object.prototype.hasOwnProperty.call(window,"onorientationchange")?T(screen.orientation.type,"landscape"):g.ios()&&Object.prototype.hasOwnProperty.call(window,"orientation")?90===Math.abs(window.orientation):window.innerHeight/window.innerWidth<1},g.noConflict=function(){return window.device=y,this},g.ios()?g.ipad()?R("ios ipad tablet"):g.iphone()?R("ios iphone mobile"):g.ipod()&&R("ios ipod mobile"):g.macos()?R("macos desktop"):g.android()?g.androidTablet()?R("android tablet"):R("android mobile"):g.blackberry()?g.blackberryTablet()?R("blackberry tablet"):R("blackberry mobile"):g.windows()?g.windowsTablet()?R("windows tablet"):g.windowsPhone()?R("windows mobile"):R("windows desktop"):g.fxos()?g.fxosTablet()?R("fxos tablet"):R("fxos mobile"):g.meego()?R("meego mobile"):g.nodeWebkit()?R("node-webkit"):g.television()?R("television"):g.desktop()&&R("desktop"),g.cordova()&&R("cordova"),g.onChangeOrientation=function(e){"function"==typeof e&&B.push(e)};var L="resize";function H(e){for(var t=0;t<e.length;t++)if(g[e[t]]())return e[t];return"unknown"}function M(){g.orientation=H(["portrait","landscape"])}Object.prototype.hasOwnProperty.call(window,"onorientationchange")&&(L="orientationchange"),window.addEventListener?window.addEventListener(L,E,!1):window.attachEvent?window.attachEvent(L,E):window[L]=E,E(),g.type=H(["mobile","tablet","desktop"]),g.os=H(["ios","iphone","ipad","ipod","android","blackberry","macos","windows","fxos","meego","television"]),M();var N={setup:function(){var e=new Date,t=Object(o["I"])({checkBox:[]}),n=function(){t.checkBox=[]},c=Object(o["J"])(!1),i=function(e){};Object(o["ab"])(c,(function(e){e&&i(e)}));var a=Object(o["I"])({select:[]}),r=Object(o["I"])({input:"753159"}),l=Object(o["I"])({text:'<h1 v-model="inputData.input">vhtmltext , '.concat(r.input,"</h1>")}),u=Object(o["J"])(0),b=function(e,t,n){u.value+=e};return{nowTimer:e,checkBoxData:t,claerCBD:n,isOpen:c,selectData:a,inputData:r,vhtmltext:l,count:u,plus:b}}};n("0d8a");N.render=j,N.__scopeId="data-v-45a3c30d";t["default"]=N},ad6d:function(e,t,n){"use strict";var o=n("825a");e.exports=function(){var e=o(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}}}]);
//# sourceMappingURL=chunk-4feb4503.js.map