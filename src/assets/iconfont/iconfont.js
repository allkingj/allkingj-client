(function(window){var svgSprite='<svg><symbol id="icon-qrcode" viewBox="0 0 1024 1024"><path d="M320 64l-256 0 0 256 256 0 0-256zM384 0l0 0 0 384-384 0 0-384 384 0zM128 128l128 0 0 128-128 0zM960 64l-256 0 0 256 256 0 0-256zM1024 0l0 0 0 384-384 0 0-384 384 0zM768 128l128 0 0 128-128 0zM320 704l-256 0 0 256 256 0 0-256zM384 640l0 0 0 384-384 0 0-384 384 0zM128 768l128 0 0 128-128 0zM448 0l64 0 0 64-64 0zM512 64l64 0 0 64-64 0zM448 128l64 0 0 64-64 0zM512 192l64 0 0 64-64 0zM448 256l64 0 0 64-64 0zM512 320l64 0 0 64-64 0zM448 384l64 0 0 64-64 0zM448 512l64 0 0 64-64 0zM512 576l64 0 0 64-64 0zM448 640l64 0 0 64-64 0zM512 704l64 0 0 64-64 0zM448 768l64 0 0 64-64 0zM512 832l64 0 0 64-64 0zM448 896l64 0 0 64-64 0zM512 960l64 0 0 64-64 0zM960 512l64 0 0 64-64 0zM64 512l64 0 0 64-64 0zM128 448l64 0 0 64-64 0zM0 448l64 0 0 64-64 0zM256 448l64 0 0 64-64 0zM320 512l64 0 0 64-64 0zM384 448l64 0 0 64-64 0zM576 512l64 0 0 64-64 0zM640 448l64 0 0 64-64 0zM704 512l64 0 0 64-64 0zM768 448l64 0 0 64-64 0zM832 512l64 0 0 64-64 0zM896 448l64 0 0 64-64 0zM960 640l64 0 0 64-64 0zM576 640l64 0 0 64-64 0zM640 576l64 0 0 64-64 0zM704 640l64 0 0 64-64 0zM832 640l64 0 0 64-64 0zM896 576l64 0 0 64-64 0zM960 768l64 0 0 64-64 0zM576 768l64 0 0 64-64 0zM640 704l64 0 0 64-64 0zM768 704l64 0 0 64-64 0zM832 768l64 0 0 64-64 0zM896 704l64 0 0 64-64 0zM960 896l64 0 0 64-64 0zM640 832l64 0 0 64-64 0zM704 896l64 0 0 64-64 0zM768 832l64 0 0 64-64 0zM832 896l64 0 0 64-64 0zM640 960l64 0 0 64-64 0zM768 960l64 0 0 64-64 0zM896 960l64 0 0 64-64 0z"  ></path></symbol><symbol id="icon-computer" viewBox="0 0 1024 1024"><path d="M192 960h640v64H192v-64z"  ></path><path d="M384 768h256v256H384v-256zM960 0H64a64 64 0 0 0-64 64v640a64 64 0 0 0 64 64h896a64 64 0 0 0 64-64V64a64 64 0 0 0-64-64z m0 704H64V64h896v640z"  ></path><path d="M128 128h768v512H128V128z"  ></path></symbol><symbol id="icon-check-circle" viewBox="0 0 1024 1024"><path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8c12.7 17.7 39 17.7 51.7 0l210.6-292c3.9-5.3 0.1-12.7-6.4-12.7z"  ></path><path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"  ></path></symbol><symbol id="icon-doubleleft" viewBox="0 0 1024 1024"><path d="M272.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512z"  ></path><path d="M576.9 512l265.4-339.1c4.1-5.2 0.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3c-9.1 11.6-9.1 27.9 0 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z"  ></path></symbol><symbol id="icon-doubleright" viewBox="0 0 1024 1024"><path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"  ></path><path d="M837.2 492.3L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1c-4.1 5.2-0.4 12.9 6.3 12.9h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)