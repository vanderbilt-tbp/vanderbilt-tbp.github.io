
          window.__NEXT_REGISTER_PAGE('/_document', function() {
            var comp = module.exports=webpackJsonp([2],{101:function(e,t,n){e.exports=n(195)},191:function(e,t,n){e.exports=n(192)},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(12),l=r(a),u=n(3),s=r(u),i=n(4),c=r(i),o=n(13),d=r(o),f=n(14),_=r(f),p=n(1),h=r(p),m=n(193),y=r(m),k=n(101),E=r(k),v=function(e){function t(){return(0,s.default)(this,t),(0,d.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,_.default)(t,e),(0,c.default)(t,[{key:"render",value:function(){return h.default.createElement("html",{lang:"en-US"},h.default.createElement(m.Head,null,h.default.createElement("link",{rel:"shortcut icon",href:"/static/img/favicon.ico"}),h.default.createElement("link",{href:"/static/css/bootstrap.min.css",rel:"stylesheet"}),h.default.createElement("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",rel:"stylesheet"}),h.default.createElement("link",{href:"/static/css/custom.css",rel:"stylesheet"}),h.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Montserrat:400,700",rel:"stylesheet"}),h.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Kaushan+Script",rel:"stylesheet"}),h.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic",rel:"stylesheet"}),h.default.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700",rel:"stylesheet"}),h.default.createElement("script",{src:"/static/js/jquery.min.js"}),h.default.createElement("script",{src:"/static/js/bootstrap.min.js"}),h.default.createElement("script",{src:"/static/js/custom.min.js"})),h.default.createElement("body",null,this.props.customValue,h.default.createElement(m.Main,null),h.default.createElement(m.NextScript,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,E.default)()}}}]),t}(y.default);t.default=v},193:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return"/"===e?"/index.js":e+".js"}Object.defineProperty(t,"__esModule",{value:!0}),t.NextScript=t.Main=t.Head=void 0;var l=n(43),u=r(l),s=n(12),i=r(s),c=n(3),o=r(c),d=n(4),f=r(d),_=n(13),p=r(_),h=n(14),m=r(h),y=n(1),k=r(y),E=n(33),v=r(E),g=n(194),x=r(g),P=n(101),T=r(P),j=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChildContext",value:function(){return{_documentProps:this.props}}},{key:"render",value:function(){return k.default.createElement("html",null,k.default.createElement(N,null),k.default.createElement("body",null,k.default.createElement(S,null),k.default.createElement(C,null)))}}],[{key:"getInitialProps",value:function(e){var t=e.renderPage,n=t();return{html:n.html,head:n.head,errorHtml:n.errorHtml,chunks:n.chunks,styles:(0,T.default)()}}}]),t}(y.Component);j.childContextTypes={_documentProps:v.default.any},t.default=j;var N=t.Head=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkPreloadLink",value:function(e){var t=this.context._documentProps.__NEXT_DATA__,n=t.buildStats,r=t.assetPrefix,a=t.buildId,l=n?n[e].hash:a;return k.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+l+"/"+e,as:"script"})}},{key:"getPreloadMainLinks",value:function(){return this.context._documentProps.dev?[this.getChunkPreloadLink("manifest.js"),this.getChunkPreloadLink("commons.js"),this.getChunkPreloadLink("main.js")]:[this.getChunkPreloadLink("app.js")]}},{key:"getPreloadDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,a=n.buildId;return t.map(function(e){return k.default.createElement("link",{key:e,rel:"preload",href:r+"/_next/"+a+"/webpack/chunks/"+e,as:"script"})})}},{key:"render",value:function(){var e=this.context._documentProps,t=e.head,n=e.styles,r=e.__NEXT_DATA__,l=r.pathname,u=r.buildId,s=r.assetPrefix,i=a(l);return k.default.createElement("head",this.props,(t||[]).map(function(e,t){return k.default.cloneElement(e,{key:t})}),k.default.createElement("link",{rel:"preload",href:s+"/_next/"+u+"/page"+i,as:"script"}),k.default.createElement("link",{rel:"preload",href:s+"/_next/"+u+"/page/_error.js",as:"script"}),this.getPreloadDynamicChunks(),this.getPreloadMainLinks(),n||null,this.props.children)}}]),t}(y.Component);N.contextTypes={_documentProps:v.default.any};var S=t.Main=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.context._documentProps,t=e.html,n=e.errorHtml,r=this.props.className;return k.default.createElement("div",{className:r},k.default.createElement("div",{id:"__next",dangerouslySetInnerHTML:{__html:t}}),k.default.createElement("div",{id:"__next-error",dangerouslySetInnerHTML:{__html:n}}))}}]),t}(y.Component);S.propTypes={className:v.default.string},S.contextTypes={_documentProps:v.default.any};var C=t.NextScript=function(e){function t(){return(0,o.default)(this,t),(0,p.default)(this,(t.__proto__||(0,i.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,f.default)(t,[{key:"getChunkScript",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=this.context._documentProps.__NEXT_DATA__,r=n.buildStats,a=n.assetPrefix,l=n.buildId,s=r?r[e].hash:l;return k.default.createElement("script",(0,u.default)({key:e,type:"text/javascript",src:a+"/_next/"+s+"/"+e},t))}},{key:"getScripts",value:function(){return this.context._documentProps.dev?[this.getChunkScript("manifest.js"),this.getChunkScript("commons.js"),this.getChunkScript("main.js")]:[this.getChunkScript("app.js",{async:!0})]}},{key:"getDynamicChunks",value:function(){var e=this.context._documentProps,t=e.chunks,n=e.__NEXT_DATA__,r=n.assetPrefix,a=n.buildId;return k.default.createElement("div",null,t.map(function(e){return k.default.createElement("script",{async:!0,key:e,type:"text/javascript",src:r+"/_next/"+a+"/webpack/chunks/"+e})}))}},{key:"render",value:function(){var e=this.context._documentProps,t=e.staticMarkup,n=e.__NEXT_DATA__,r=e.chunks,l=n.pathname,u=n.buildId,s=n.assetPrefix,i=a(l);return n.chunks=r,k.default.createElement("div",null,t?null:k.default.createElement("script",{nonce:this.props.nonce,dangerouslySetInnerHTML:{__html:"\n          __NEXT_DATA__ = "+(0,x.default)(n)+"\n          module={}\n          __NEXT_LOADED_PAGES__ = []\n          __NEXT_LOADED_CHUNKS__ = []\n\n          __NEXT_REGISTER_PAGE = function (route, fn) {\n            __NEXT_LOADED_PAGES__.push({ route: route, fn: fn })\n          }\n\n          __NEXT_REGISTER_CHUNK = function (chunkName, fn) {\n            __NEXT_LOADED_CHUNKS__.push({ chunkName: chunkName, fn: fn })\n          }\n        "}}),k.default.createElement("script",{async:!0,id:"__NEXT_PAGE__"+l,type:"text/javascript",src:s+"/_next/"+u+"/page"+i}),k.default.createElement("script",{async:!0,id:"__NEXT_PAGE__/_error",type:"text/javascript",src:s+"/_next/"+u+"/page/_error.js"}),t?null:this.getDynamicChunks(),t?null:this.getScripts())}}]),t}(y.Component);C.propTypes={nonce:v.default.string},C.contextTypes={_documentProps:v.default.any}},194:function(e,t,n){"use strict";function r(e){return l[e]}function a(e){return s[e]}var l={"&":"\\u0026",">":"\\u003e","<":"\\u003c","\u2028":"\\u2028","\u2029":"\\u2029"},u=/[&><\u2028\u2029]/g;e.exports=function(e){return JSON.stringify(e).replace(u,r)};var s={"\u2028":"\\u2028","\u2029":"\\u2029"},i=/[\u2028\u2029]/g;e.exports.sanitize=function(e){return e.replace(i,a)}},195:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(){var e=(0,f.flush)(),t=[],n=!0,r=!1,a=void 0;try{for(var l,u=(0,c.default)(e);!(n=(l=u.next()).done);n=!0){var i=(0,s.default)(l.value,2),o=i[0],_=i[1];t.push(d.default.createElement("style",{id:"__"+o,key:"__"+o,dangerouslySetInnerHTML:{__html:_}}))}}catch(e){r=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw a}}return t}function l(){var e=(0,f.flush)(),t="",n=!0,r=!1,a=void 0;try{for(var l,u=(0,c.default)(e);!(n=(l=u.next()).done);n=!0){var i=(0,s.default)(l.value,2);t+='<style id="__'+i[0]+'">'+i[1]+"</style>"}}catch(e){r=!0,a=e}finally{try{!n&&u.return&&u.return()}finally{if(r)throw a}}return t}Object.defineProperty(t,"__esModule",{value:!0});var u=n(42),s=r(u),i=n(49),c=r(i);t.default=a,t.flushToHTML=l;var o=n(1),d=r(o),f=n(102)}},[191]);
            return { page: comp.default }
          })
        