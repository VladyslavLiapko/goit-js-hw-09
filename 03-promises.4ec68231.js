!function(){var e=document.querySelector(".form"),n=document.querySelector('[name="delay"]'),o=document.querySelector('[name="step"]'),t=document.querySelector('[name="amount"]');document.querySelector('[type="submit"]');function u(e,n){var o=Math.random()>.3;return new Promise((function(t,u){setTimeout((function(){o?t({position:e,delay:n}):u({position:e,delay:n})}),n)}))}function c(e,n){console.log("✅ Fulfilled promise ".concat(e," in ").concat(n,"ms"))}function r(e,n){console.log("❌ Rejected promise ".concat(e," in ").concat(n,"ms"))}e.addEventListener("submit",(function(e){e.preventDefault();for(var i=Number(n.value),a=Number(o.value),l=Number(t.value),m=0;m<l;m+=1){var s=i+a*m;console.log(m),u(m+1,s).then((function(e){return c(e.position,e.delay)})).catch((function(e){return r(e.position,e.delay)}))}}))}();
//# sourceMappingURL=03-promises.4ec68231.js.map