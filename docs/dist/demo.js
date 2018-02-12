!function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}var r={};t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=13)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.fetchRates=t.format=t.getCurrencyFromBrowserLocale=void 0;var a=r(9),o=n(a),l=r(6),u=n(l),c=r(11),s=n(c);t.getCurrencyFromBrowserLocale=function(){if("undefined"==typeof window)return"USD";var e=window.navigator.language.toLowerCase();return s.default[e]||"USD"},t.format=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:Math.round,n=Math.pow(10,!1===t.fractional?0:2),a=r(e*n)/n,o=a.toLocaleString().replace(/(\.[\d]{1})$/,"$10");return t.format.replace("#",o)},t.fetchRates=function(e){var t=(new Date).getTime(),r="react-world-price-rates-"+e,n=(0,u.default)(r)||{},a=n.date,l=n.rates;return a&&t-a<864e5?Promise.resolve(l):(window.__REACT_WORLD_PRICE_FETCHING__=!0,(0,o.default)("//api.fixer.io/latest?base="+e).then(function(e){return e.json()}).then(function(e){return(0,u.default)(r,{date:t,rates:e.rates}),window.__REACT_WORLD_PRICE_FETCHING__=!1,e.rates}).catch(function(){return window.__REACT_WORLD_PRICE_FETCHING__=!1,{}}))}},function(e,t){var r;r=function(){return this}();try{r=r||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){e.exports={AUD:{format:"A$#"},BGN:{format:"# leva"},BRL:{format:"R$#"},CAD:{format:"C$#"},CHF:{format:"CHF #"},CNY:{format:"元#"},CZK:{format:"# Kč",fractional:!1},DKK:{format:"# kr."},EUR:{format:"€#"},GBP:{format:"£#"},HKD:{format:"HK$#"},HRK:{format:"# kn"},HUF:{format:"# Ft",fractional:!1},IDR:{format:"Rp #",fractional:!1},ILS:{format:"₪#"},INR:{format:"₹#"},ISK:{format:"#kr",fractional:!1},JPY:{format:"¥ #",fractional:!1},KRW:{format:"₩#",fractional:!1},MXN:{format:"$#"},MYR:{format:"RM#"},NOK:{format:"# kr",fractional:!1},NZD:{format:"$#"},PHP:{format:"₱#"},PLN:{format:"#zł"},RON:{format:"# lei"},RUB:{format:"#₽"},SEK:{format:"# kr",fractional:!1},SGD:{format:"S$#"},THB:{format:"฿#"},TRY:{format:"₺#"},USD:{format:"$#"},ZAR:{format:"R #"}}},function(e,t){e.exports=React},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var a=r(12),o=n(a),l=r(5),u=n(l);o.default.render(React.createElement(u.default,null),document.querySelector("#react-root"))},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),s=r(3),i=n(s),f=r(10),d=n(f),p=r(0),m=r(2),h=n(m),E=function(e){function t(){var e,r,n,u;o(this,t);for(var c=arguments.length,s=Array(c),i=0;i<c;i++)s[i]=arguments[i];return r=n=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),n.state={amount:100,baseCurrency:(0,p.getCurrencyFromBrowserLocale)(),displayCurrency:"",hideCents:!1,rounding:"round",roundingFn:Math.round},n.updateState=function(e){n.setState(a({},e.target.id,e.target.value))},n.changeHideCents=function(e){n.setState({hideCents:e.target.checked})},n.changeRounding=function(e){var t=e.target.value,r=Math.round;switch(t){case"ceil":r=Math.ceil;break;case"floor":r=Math.floor}n.setState({rounding:t,roundingFn:r})},n.select=function(e){e===n.state.displayCurrency?n.setState({displayCurrency:""}):n.setState({displayCurrency:e})},u=r,l(n,u)}return u(t,e),c(t,[{key:"render",value:function(){var e=this;return i.default.createElement("section",null,i.default.createElement("h1",null,i.default.createElement("a",{href:"https://github.com/jasonbarry/react-world-price#react-world-price"},"react-world-price")),i.default.createElement("aside",null,"An automatic currency conversion component for React that Just Works",i.default.createElement("sup",null,"™"),"."),i.default.createElement("div",{className:"badges center"},i.default.createElement("a",{href:"https://www.npmjs.com/package/react-world-price"},i.default.createElement("img",{src:"https://img.shields.io/npm/v/react-world-price.svg",alt:"npm"})),i.default.createElement("a",null,i.default.createElement("img",{src:"https://img.shields.io/badge/gzipped-3.5kB-brightgreen.svg",alt:"size 3.5kB gzipped"})),i.default.createElement("a",null,i.default.createElement("img",{src:"https://circleci.com/gh/jasonbarry/react-world-price.svg?&style=shield",alt:"circleci passing"})),i.default.createElement("a",{href:"https://david-dm.org/jasonbarry/react-world-price"},i.default.createElement("img",{src:"https://img.shields.io/david/jasonbarry/react-world-price.svg",alt:"David"})),i.default.createElement("a",{href:"https://www.npmjs.com/package/react-world-price"},i.default.createElement("img",{src:"https://img.shields.io/npm/dm/react-world-price.svg",alt:"npm"})),i.default.createElement("iframe",{src:"https://ghbtns.com/github-btn.html?user=jasonbarry&repo=react-world-price&type=star&count=true&size=small",frameborder:"0",scrolling:"0",width:"80px",height:"20px"})),i.default.createElement("div",{className:"inputs background center"},i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"amount"},"Amount"),i.default.createElement("input",{id:"amount",type:"text",value:this.state.amount,onChange:this.updateState})),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"baseCurrency"},"Base Currency"),i.default.createElement("select",{id:"baseCurrency",type:"text",value:this.state.baseCurrency,onChange:this.updateState},Object.keys(h.default).map(function(e){return i.default.createElement("option",{value:e},e)}))),i.default.createElement("div",null,i.default.createElement("input",{id:"hideCents",type:"checkbox",checked:this.state.hideCents,onChange:this.changeHideCents}),i.default.createElement("label",{htmlFor:"hideCents"},"Hide Cents")),i.default.createElement("div",null,i.default.createElement("label",{htmlFor:"rounding"},"Rounding"),i.default.createElement("select",{id:"rounding",type:"text",value:this.state.rounding,onChange:this.changeRounding},i.default.createElement("option",{value:"ceil"},"Math.ceil"),i.default.createElement("option",{value:"round"},"Math.round"),i.default.createElement("option",{value:"floor"},"Math.floor")))),i.default.createElement("div",{className:"prices"},Object.keys(h.default).map(function(t){return i.default.createElement("p",{className:"center "+(t===e.state.displayCurrency?"highlight":""),onClick:function(){e.select(t)}},i.default.createElement(d.default,{key:t,amount:e.state.amount||0,baseCurrency:e.state.baseCurrency,displayCurrency:t,hideCents:e.state.hideCents,rounding:e.state.roundingFn}))})),i.default.createElement("div",{className:"jsx background center"},i.default.createElement("pre",null,i.default.createElement("span",{className:"teal"},"<"),i.default.createElement("span",{className:"pink"},"WorldPrice "),i.default.createElement("span",{className:"purple"},"amount"),i.default.createElement("span",{className:"teal"},"={"),i.default.createElement("span",{className:"orange"},this.state.amount||0),i.default.createElement("span",{className:"teal"},"}"),"USD"!==this.state.baseCurrency&&i.default.createElement("span",null,i.default.createElement("span",{className:"purple"}," baseCurrency"),i.default.createElement("span",{className:"teal"},'="'),i.default.createElement("span",{className:"lightgreen"},this.state.baseCurrency),i.default.createElement("span",{className:"teal"},'"')),this.state.displayCurrency&&i.default.createElement("span",null,i.default.createElement("span",{className:"purple"}," displayCurrency"),i.default.createElement("span",{className:"teal"},'="'),i.default.createElement("span",{className:"lightgreen"},this.state.displayCurrency),i.default.createElement("span",{className:"teal"},'"')),this.state.hideCents&&i.default.createElement("span",{className:"purple"}," hideCents"),"round"!==this.state.rounding&&i.default.createElement("span",null,i.default.createElement("span",{className:"purple"}," rounding"),i.default.createElement("span",{className:"teal"},"={"),i.default.createElement("span",{className:"yellow"},"Math"),i.default.createElement("span",{className:"teal"},"."),i.default.createElement("span",{className:"white"},this.state.rounding),i.default.createElement("span",{className:"teal"},"}")),i.default.createElement("span",{className:"teal"}," />"))),i.default.createElement("footer",{className:"center"},i.default.createElement("a",{href:"https://github.com/jasonbarry/react-world-price#react-world-price"},i.default.createElement("img",{src:"dist/gh.png",width:"32",height:"32",alt:"View react-world-price on GitHub"}))))}}]),t}(i.default.Component);t.default=E},function(e,t,r){"use strict";(function(t){function n(e,t){return 1===arguments.length?a(e):o(e,t)}function a(e){return JSON.parse(i.getItem(e))}function o(e,t){try{return i.setItem(e,JSON.stringify(t)),!0}catch(e){return!1}}function l(e){return i.removeItem(e)}function u(){return i.clear()}var c=r(7),s=r(8),i="localStorage"in t&&t.localStorage?t.localStorage:c;n.set=o,n.get=a,n.remove=l,n.clear=u,n.on=s.on,n.off=s.off,e.exports=n}).call(t,r(1))},function(e,t,r){"use strict";function n(e){return e in u?u[e]:null}function a(e,t){return u[e]=t,!0}function o(e){return!!(e in u)&&delete u[e]}function l(){return u={},!0}var u={};e.exports={getItem:n,setItem:a,removeItem:o,clear:l}},function(e,t,r){"use strict";(function(t){function r(){t.addEventListener?t.addEventListener("storage",n,!1):t.attachEvent?t.attachEvent("onstorage",n):t.onstorage=n}function n(e){function r(t){t(JSON.parse(e.newValue),JSON.parse(e.oldValue),e.url||e.uri)}e||(e=t.event);var n=l[e.key];n&&n.forEach(r)}function a(e,t){l[e]?l[e].push(t):l[e]=[t],!1===u&&r()}function o(e,t){var r=l[e];r.length>1?r.splice(r.indexOf(t),1):l[e]=[]}var l={},u=!1;e.exports={on:a,off:o}}).call(t,r(1))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof fetch?fetch.bind():function(e,t){return t=t||{},new Promise(function(r,n){function a(){var e,t=[],r=[],n={};return o.getAllResponseHeaders().replace(/^(.*?):\s*([\s\S]*?)$/gm,function(a,o,l){t.push(o=o.toLowerCase()),r.push([o,l]),e=n[o],n[o]=e?e+","+l:l}),{ok:1==(o.status/200|0),status:o.status,statusText:o.statusText,url:o.responseURL,clone:a,text:function(){return Promise.resolve(o.responseText)},json:function(){return Promise.resolve(o.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([o.response]))},headers:{keys:function(){return t},entries:function(){return r},get:function(e){return n[e.toLowerCase()]},has:function(e){return e.toLowerCase()in n}}}}var o=new XMLHttpRequest;o.open(t.method||"get",e);for(var l in t.headers)o.setRequestHeader(l,t.headers[l]);o.withCredentials="include"==t.credentials,o.onload=function(){r(a())},o.onerror=n,o.send(t.body)})};t.default=n},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),c=r(3),s=n(c),i=r(0),f=n(i),d=r(2),p=function(e){return e&&e.__esModule?e:{default:e}}(d),m=function(e){function t(){var e,r,n,l;a(this,t);for(var u=arguments.length,c=Array(u),i=0;i<u;i++)c[i]=arguments[i];return r=n=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),n.state={rates:{}},n.fetchRates=function(e){window.__REACT_WORLD_PRICE_FETCHING__?setTimeout(function(){n.fetchRates(e)},50):f.fetchRates(e).then(function(e){n.setState({rates:e})})},n.convert=function(e){return parseFloat(e)*(n.state.rates[n.props.displayCurrency]||1)},n.round=function(e){return n.props.hideCents?n.props.rounding(e):e},n.wrap=function(e,t){return n.props.unwrap?e:s.createElement("span",{title:t},e)},l=r,o(n,l)}return l(t,e),u(t,[{key:"componentDidMount",value:function(){this.fetchRates(this.props.baseCurrency)}},{key:"componentWillReceiveProps",value:function(e){e.baseCurrency!==this.props.baseCurrency&&this.fetchRates(e.baseCurrency)}},{key:"render",value:function(){var e=this.props,t=e.baseCurrency,r=e.displayCurrency,n=e.rounding,a=parseFloat(this.props.amount);if("NaN"===a.toString())return this.wrap(this.props.amount);if(!(t in p.default&&r in p.default))return console.error("react-world-price",this.props),this.wrap(this.round(a));var o=f.format(this.round(a),p.default[t],n);if(!this.state.rates[r])return this.wrap(o);var l=f.format(this.round(this.convert(a)),p.default[r],n);return this.wrap(l,o+" "+t)}}]),t}(s.Component);m.defaultProps={baseCurrency:"USD",displayCurrency:f.getCurrencyFromBrowserLocale(),hideCents:!1,rounding:Math.round,unwrap:!1},t.default=m},function(e,t){e.exports={af:"ZAR","af-af":"ZAR",bg:"BGN","bg-bg":"BGN",da:"DKK","da-dk":"DKK",de:"EUR","de-at":"EUR","de-ch":"CHF","de-de":"EUR","de-li":"EUR","de-lu":"EUR",el:"EUR",en:"EUR","en-au":"AUD","en-ca":"CAD","en-gb":"GBP","en-ie":"EUR","en-nz":"NZD","en-sg":"SGD","en-us":"USD","en-za":"ZAR",es:"EUR","es-mx":"MXN","es-xl":"USD","et-ee":"EUR","fi-fi":"EUR",fil:"PHP",fr:"EUR","fr-be":"EUR","fr-ca":"CAD","fr-ch":"CHF","fr-fr":"EUR","fr-lu":"EUR",gd:"EUR","gd-ie":"EUR",he:"ILS","he-il":"ILS",hu:"HUF","hu-hu":"HUF",id:"INR",is:"ISK","is-is":"ISK",it:"EUR","it-ch":"CHF","it-it":"EUR",ja:"JPY","ja-jp":"JPY",ko:"KRW","ko-kr":"KRW","lt-lt":"EUR","lv-lv":"EUR",nl:"EUR","nl-be":"EUR","nl-nl":"EUR",no:"NOK","no-no":"NOK",pl:"PLN","pl-pl":"PLN",pt:"EUR","pt-br":"BRL","pt-pt":"EUR",ro:"RON","ro-mo":"RON","ro-ro":"RON",ru:"RUB","ru-mo":"RUB","ru-ru":"RUB","sk-sk":"EUR","sl-si":"EUR",th:"THB","th-th":"THB","tk-cyrl":"TRY",tr:"TRY","tr-tr":"TRY","zh-cn":"CNY","zh-tw":"CNY"}},function(e,t){e.exports=ReactDOM},function(e,t,r){e.exports=r(4)}]);