(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["random"],{1558:function(t,n,r){},"159b":function(t,n,r){var e=r("da84"),o=r("fdbc"),a=r("17c2"),i=r("9112");for(var c in o){var u=e[c],f=u&&u.prototype;if(f&&f.forEach!==a)try{i(f,"forEach",a)}catch(s){f.forEach=a}}},"17c2":function(t,n,r){"use strict";var e=r("b727").forEach,o=r("a640"),a=r("ae40"),i=o("forEach"),c=a("forEach");t.exports=i&&c?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"1dde":function(t,n,r){var e=r("d039"),o=r("b622"),a=r("2d00"),i=o("species");t.exports=function(t){return a>=51||!e((function(){var n=[],r=n.constructor={};return r[i]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},2912:function(t,n,r){},"34c4":function(t,n,r){"use strict";var e=r("1558"),o=r.n(e);o.a},"3d26":function(t,n,r){t.exports=r.p+"media/pyramids.b2485d2c.mp4"},4160:function(t,n,r){"use strict";var e=r("23e7"),o=r("17c2");e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"44c5":function(t){t.exports=JSON.parse('["The world is a vampire","God is a muffin","Through causes beyond their control","Through their own carelessness"]')},"5a8c":function(t,n,r){t.exports=r.p+"img/hell.697ce469.jpg"},"65f0":function(t,n,r){var e=r("861d"),o=r("e8b5"),a=r("b622"),i=a("species");t.exports=function(t,n){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?e(r)&&(r=r[i],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},"70f4":function(t,n,r){t.exports=r.p+"img/lonely.011a4cde.png"},8418:function(t,n,r){"use strict";var e=r("c04e"),o=r("9bf2"),a=r("5c6c");t.exports=function(t,n,r){var i=e(n);i in t?o.f(t,i,a(0,r)):t[i]=r}},"8cae":function(t,n,r){"use strict";var e=r("2912"),o=r.n(e);o.a},"99af":function(t,n,r){"use strict";var e=r("23e7"),o=r("d039"),a=r("e8b5"),i=r("861d"),c=r("7b0b"),u=r("50c4"),f=r("8418"),s=r("65f0"),d=r("1dde"),l=r("b622"),m=r("2d00"),h=l("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",v=m>=51||!o((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),g=d("concat"),y=function(t){if(!i(t))return!1;var n=t[h];return void 0!==n?!!n:a(t)},S=!v||!g;e({target:"Array",proto:!0,forced:S},{concat:function(t){var n,r,e,o,a,i=c(this),d=s(i,0),l=0;for(n=-1,e=arguments.length;n<e;n++)if(a=-1===n?i:arguments[n],y(a)){if(o=u(a.length),l+o>p)throw TypeError(b);for(r=0;r<o;r++,l++)r in a&&f(d,l,a[r])}else{if(l>=p)throw TypeError(b);f(d,l++,a)}return d.length=l,d}})},a640:function(t,n,r){"use strict";var e=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},ac94:function(t,n,r){},ae40:function(t,n,r){var e=r("83ab"),o=r("d039"),a=r("5135"),i=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,n){if(a(c,t))return c[t];n||(n={});var r=[][t],f=!!a(n,"ACCESSORS")&&n.ACCESSORS,s=a(n,0)?n[0]:u,d=a(n,1)?n[1]:void 0;return c[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?i(t,1,{enumerable:!0,get:u}):t[1]=1,r.call(t,s,d)}))}},b727:function(t,n,r){var e=r("0366"),o=r("44ad"),a=r("7b0b"),i=r("50c4"),c=r("65f0"),u=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,d=6==t,l=5==t||d;return function(m,h,p,b){for(var v,g,y=a(m),S=o(y),x=e(h,p,3),L=i(S.length),T=0,E=b||c,N=n?E(m,L):r?E(m,0):void 0;L>T;T++)if((l||T in S)&&(v=S[T],g=x(v,T,y),t))if(n)N[T]=g;else if(g)switch(t){case 3:return!0;case 5:return v;case 6:return T;case 2:u.call(N,v)}else if(s)return!1;return d?-1:f||s?s:N}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},bbf1:function(t,n,r){"use strict";var e=r("ac94"),o=r.n(e);o.a},ddb0:function(t,n,r){var e=r("da84"),o=r("fdbc"),a=r("e260"),i=r("9112"),c=r("b622"),u=c("iterator"),f=c("toStringTag"),s=a.values;for(var d in o){var l=e[d],m=l&&l.prototype;if(m){if(m[u]!==s)try{i(m,u,s)}catch(p){m[u]=s}if(m[f]||i(m,f,d),o[d])for(var h in a)if(m[h]!==a[h])try{i(m,h,a[h])}catch(p){m[h]=a[h]}}}},e3ff:function(t,n,r){var e={"./cabin.jpg":"37c3","./hell.jpg":"5a8c","./lonely.png":"70f4"};function o(t){var n=a(t);return r(n)}function a(t){if(!r.o(e,t)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e[t]}o.keys=function(){return Object.keys(e)},o.resolve=a,t.exports=o,o.id="e3ff"},e8b5:function(t,n,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},f2b4:function(t,n,r){"use strict";r.r(n);var e=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{attrs:{id:"app"}},[r("RandomImage"),r("RandomText"),r("RandomVideo")],1)},o=[],a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",{style:t.textStyle()},[t._v(t._s(t.randomQuote()))])},i=[],c=(r("99af"),r("44c5")),u={name:"RandomText",methods:{randomNumber:function(t){return Math.floor(Math.random()*Math.floor(t))},randomQuote:function(){return c[this.randomNumber(c.length)]},randomColor:function(){return"rgb(\n          ".concat(this.randomNumber(255),",\n          ").concat(this.randomNumber(255),",\n          ").concat(this.randomNumber(255),")")},textStyle:function(){return{color:this.randomColor(),fontSize:"".concat(this.randomNumber(150),"px"),top:"".concat(this.randomNumber(80),"%"),left:"".concat(this.randomNumber(80),"%")}}}},f=u,s=(r("bbf1"),r("2877")),d=Object(s["a"])(f,a,i,!1,null,"1102a905",null),l=d.exports,m=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("img",{style:t.imageStyle(),attrs:{src:t.randomImage()}})},h=[],p=(r("4160"),r("d3b7"),r("159b"),r("ddb0"),{name:"RandomText",data:function(){return{images:[]}},computed:{},methods:{importImages:function(t){var n=this;t.keys().forEach((function(r){return n.images.push({pathLong:t(r),pathShort:r})}))},randomNumber:function(t){return Math.floor(Math.random()*Math.floor(t))},randomImage:function(){return 0==this.images.length?"":this.images[this.randomNumber(this.images.length)].pathLong},randomSize:function(){return"".concat(this.randomNumber(100),"px")},imageStyle:function(){return{top:"".concat(this.randomNumber(50),"%"),left:"".concat(this.randomNumber(50),"%")}}},mounted:function(){this.importImages(r("e3ff"))}}),b=p,v=(r("8cae"),Object(s["a"])(b,m,h,!1,null,"2e159dc7",null)),g=v.exports,y=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("video",{attrs:{muted:"",loop:"",autoplay:"",src:r("3d26")},domProps:{muted:!0}})},S=[],x={name:"RandomVideo"},L=x,T=Object(s["a"])(L,y,S,!1,null,"28f05adc",null),E=T.exports,N={name:"App",components:{RandomText:l,RandomImage:g,RandomVideo:E}},M=N,w=(r("34c4"),Object(s["a"])(M,e,o,!1,null,"6213991a",null));n["default"]=w.exports},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=random.f8e9937f.js.map