!function(){var a,e;a=window.location,window.projectPages,e="/"+a.pathname.split("/")[1],"404"===document.title?a.replace(a.protocol+"//"+a.hostname+(a.port?":"+a.port:"")+e+"/?"+(a.pathname?"p="+a.pathname.replace(/&/g,"~and~").replace(e,""):"")+(a.search?"&q="+a.search.slice(1).replace(/&/g,"~and~"):"")+a.hash):function(){if(a.search){var c={};a.search.slice(1).split("&").forEach((function(a){var e=a.split("=");c[e[0]]=e.slice(1).join("=").replace(/~and~/g,"&")})),void 0!==c.p&&window.history.replaceState(null,null,e+(c.p||"")+(c.q?"?"+c.q:"")+a.hash)}}(),window.projectPages=!1}();
//# sourceMappingURL=index.e7576642.js.map
