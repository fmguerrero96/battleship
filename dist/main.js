(()=>{"use strict";const e=e=>{const t=document.querySelector(e);t.style.gridTemplateColumns="repeat(10, 1fr)",t.style.gridTemplateRows="repeat(10, 1fr)";for(let e=0;e<100;e++){let r=document.createElement("div");r.className="cell";const o=e%10,a=Math.floor(e/10);r.setAttribute("data-coordinate",`[${o}, ${a}]`),t.insertAdjacentElement("beforeend",r)}};e(".pre-board"),e(".human"),e(".computer")})();