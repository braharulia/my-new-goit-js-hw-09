!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),o=0;t.addEventListener("click",(function(){t.hasAttribute("disabled")&&(t.removeAttribute("disabled"),o=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0)),console.log("kkkkk")}),1e3),console.log("jjjj"));t.setAttribute("disabled","")})),e.addEventListener("click",(function(){t.removeAttribute("disabled"),clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.d7a054db.js.map