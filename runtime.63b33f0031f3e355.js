(()=>{"use strict";var e,v={},g={};function r(e){var n=g[e];if(void 0!==n)return n.exports;var t=g[e]={id:e,loaded:!1,exports:{}};return v[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=v,e=[],r.O=(n,t,i,d)=>{if(!t){var a=1/0;for(f=0;f<e.length;f++){for(var[t,i,d]=e[f],l=!0,o=0;o<t.length;o++)(!1&d||a>=d)&&Object.keys(r.O).every(p=>r.O[p](t[o]))?t.splice(o--,1):(l=!1,d<a&&(a=d));if(l){e.splice(f--,1);var c=i();void 0!==c&&(n=c)}}return n}d=d||0;for(var f=e.length;f>0&&e[f-1][2]>d;f--)e[f]=e[f-1];e[f]=[t,i,d]},r.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return r.d(n,{a:n}),n},r.d=(e,n)=>{for(var t in n)r.o(n,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((n,t)=>(r.f[t](e,n),n),[])),r.u=e=>(592===e?"common":e)+"."+{7:"ea8eeb203736685e",50:"9495dd51f28f70b4",123:"90c491d0e662d31e",218:"29956fd3d1c4d07e",259:"6c5ecba128be112b",275:"d38e0ef9859c0997",298:"32498738b39702f2",322:"79a4254de0e58d2d",351:"966ecb59f9771a28",372:"528058f7c7450537",440:"f004d6d3d06077f2",529:"86599cb72a9cd10c",592:"326947923c221640",701:"bce5b0b9e720e7bd",705:"da5670bc1e65db74",774:"20fec247cb822200",801:"693ba359e12d94d1",923:"afeb19a1cbacc47d",947:"417a9d321e95c2cb"}[e]+".js",r.miniCssF=e=>{},r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e={},n="angular-tfg:";r.l=(t,i,d,f)=>{if(e[t])e[t].push(i);else{var a,l;if(void 0!==d)for(var o=document.getElementsByTagName("script"),c=0;c<o.length;c++){var u=o[c];if(u.getAttribute("src")==t||u.getAttribute("data-webpack")==n+d){a=u;break}}a||(l=!0,(a=document.createElement("script")).type="module",a.charset="utf-8",a.timeout=120,r.nc&&a.setAttribute("nonce",r.nc),a.setAttribute("data-webpack",n+d),a.src=r.tu(t)),e[t]=[i];var s=(m,p)=>{a.onerror=a.onload=null,clearTimeout(b);var h=e[t];if(delete e[t],a.parentNode&&a.parentNode.removeChild(a),h&&h.forEach(_=>_(p)),m)return m(p)},b=setTimeout(s.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=s.bind(null,a.onerror),a.onload=s.bind(null,a.onload),l&&document.head.appendChild(a)}}})(),r.r=e=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:n=>n},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={666:0};r.f.j=(i,d)=>{var f=r.o(e,i)?e[i]:void 0;if(0!==f)if(f)d.push(f[2]);else if(666!=i){var a=new Promise((u,s)=>f=e[i]=[u,s]);d.push(f[2]=a);var l=r.p+r.u(i),o=new Error;r.l(l,u=>{if(r.o(e,i)&&(0!==(f=e[i])&&(e[i]=void 0),f)){var s=u&&("load"===u.type?"missing":u.type),b=u&&u.target&&u.target.src;o.message="Loading chunk "+i+" failed.\n("+s+": "+b+")",o.name="ChunkLoadError",o.type=s,o.request=b,f[1](o)}},"chunk-"+i,i)}else e[i]=0},r.O.j=i=>0===e[i];var n=(i,d)=>{var o,c,[f,a,l]=d,u=0;if(f.some(b=>0!==e[b])){for(o in a)r.o(a,o)&&(r.m[o]=a[o]);if(l)var s=l(r)}for(i&&i(d);u<f.length;u++)r.o(e,c=f[u])&&e[c]&&e[c][0](),e[c]=0;return r.O(s)},t=self.webpackChunkangular_tfg=self.webpackChunkangular_tfg||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))})()})();