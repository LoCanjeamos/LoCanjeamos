if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let o={};const a=e=>n(e,c),f={module:{uri:c},exports:o,require:a};i[c]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(s(...e),o)))}}define(["./workbox-27b29e6f"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-8fb916d0.css",revision:null},{url:"assets/index-b1e4c758.js",revision:null},{url:"index.html",revision:"2812487abff499420fb430f5aa1a786a"},{url:"OneSignalSDKWorker.js",revision:"bb342b01d13bebb317c67b881692efd3"},{url:"registerSW.js",revision:"402b66900e731ca748771b6fc5e7a068"},{url:"favicon.ico",revision:"0b9471418afe82df9a6369491e6374aa"},{url:"maskable_icon.png",revision:"dc97accc6831a62c753e188d8816c4e7"},{url:"android-chrome-192x192.png",revision:"3831c9f0efcc28b5acc97c357026affc"},{url:"android-chrome-512x512.png",revision:"2b9ab6167e96ab9031506f4e8c931732"},{url:"apple-touch-icon.png",revision:"946487e839ee409efac56ee3a2c01d3d"},{url:"add.png",revision:"8490973d1bd51664e3c3b21c41fe065a"},{url:"user.png",revision:"11efeabaf8a2f94cd2bbaafeb18e48bd"},{url:"manifest.webmanifest",revision:"8c15fbc446e52554b29998e418156fa7"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
