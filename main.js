(()=>{"use strict";const e=e=>{let t=null,r=[];const a=(e,a)=>{a.isValidAttack(e)&&a.receiveAttack(e),r.push(e),t=!1},c=()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],l=e=>{let a=c();for(;!e.isValidAttack(a);)a=c;return e.receiveAttack(a),r.push(a),t=!1,a};return{humanPlayerAttack:a,computerPlayerAttack:l,attack:"human"===e?a:l,isMyTurn:t,myAttacks:r}},t=()=>{const e=[],t=[],r=[],a=[],c=(r,a)=>{const c=(e=>{let t=0,r=!1,a=e;return{hit:()=>(t+=1,t),isSunk:()=>(t===a&&(r=!0),r),hits:t,sunk:r,shipLength:a}})(a),[l,o]=r;for(let t=0;t<a;t++)if(null!==e[l+t][o])throw new Error("Cannot place ship on an occupied spot");for(let t=0;t<a;t++)e[l+t][o]=c;t.push(c)};return(()=>{for(let t=0;t<10;t++){e[t]=[];for(let r=0;r<10;r++)e[t][r]=null}})(),{placeShip:c,grid:e,ships:t,receiveAttack:t=>{const[c,l]=t;null===e[c][l]?(r.push([c,l]),e[c][l]=0):(e[c][l].hit(),a.push([c,l]))},placeRandomShips:()=>{const e=[5,4,3,3,2];for(let t=0;t<e.length;t++){let r=!1;for(;!r;){let a=Math.floor(10*Math.random()),l=Math.floor(10*Math.random());try{c([a,l],e[t]),r=!0}catch(e){}}}return t},missedAttacks:r,successfulAttacks:a,allShipsSunk:()=>t.every((e=>e.isSunk())),isValidAttack:e=>{let[t,c]=e;for(let[e,r]of a)if(e===t&&r===c)return!1;for(const[e,a]of r)if(e===t&&a===c)return!1;return!0},getShips:()=>t,getGrid:()=>e}},r=e("human"),a=e("computer"),c=t(),l=t(),o=((e,t,r,a)=>{const c=[5,4,3,3,2];let l=0;const o=t=>{const r=t.target.getAttribute("data-coordinate"),[a,s]=JSON.parse(r);e.placeShip([a,s],c[l]);for(let e=0;e<c[l];e++)document.querySelector(`.cell[data-coordinate="[${a+e}, ${s}]"]`).className="ship-cell";l++,l>=c.length&&document.querySelector(".pre-board").removeEventListener("click",o)},s=()=>{const e=document.querySelectorAll(".pre-board .ship-cell"),t=document.querySelectorAll(".human .cell"),r=[];for(let t=0;t<e.length;t++)r.push(e[t].getAttribute("data-coordinate"));for(let e=0;e<t.length;e++){let a=t[e],c=t[e].getAttribute("data-coordinate");r.includes(c)&&(a.className="ship-cell")}},n=e=>{const a=e.target,c=a.getAttribute("data-coordinate"),[l,o]=JSON.parse(c);r.attack([l,o],t),0===t.getGrid()[l][o]?a.className="miss":a.className="hit"};return{createCells:e=>{const t=document.querySelector(e);t.style.gridTemplateColumns="repeat(10, 1fr)",t.style.gridTemplateRows="repeat(10, 1fr)";for(let e=0;e<100;e++){let r=document.createElement("div");r.className="cell";const a=e%10,c=Math.floor(e/10);r.setAttribute("data-coordinate",`[${a}, ${c}]`),t.insertAdjacentElement("beforeend",r)}},insertShip:()=>{document.querySelector(".pre-board").addEventListener("click",o)},closeModal:()=>{const e=document.querySelector(".begin"),t=document.querySelector(".welcomeScreen");e.addEventListener("click",(()=>{t.close(),s()}))},showShips:s,showAttack:()=>{document.querySelector(".computer").addEventListener("click",n)},aiAttack:()=>{let t=a.attack(e);const[r,c]=t,l=e.getGrid(),o=document.querySelector(`.human .cell[data-coordinate="[${r}, ${c}]"`);0===l[r][c]?o.className="miss":o.className="hit"}}})(c,l,r,a);o.createCells(".pre-board"),o.createCells(".human"),o.createCells(".computer"),l.placeRandomShips(),o.insertShip(),o.closeModal(),o.showAttack()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUNtQ0EsRUFuQ3VCQSxJQUNuQixJQUFJQyxFQUFXLEtBQ1hDLEVBQVksR0FFaEIsTUFBTUMsRUFBb0IsQ0FBQ0MsRUFBYUMsS0FDaENBLEVBQU1DLGNBQWNGLElBQ3BCQyxFQUFNRSxjQUFjSCxHQUV4QkYsRUFBVU0sS0FBS0osR0FDZkgsR0FBVyxHQUdUUSxFQUF1QixJQUdsQixDQUZDQyxLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFDaEJGLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxXQUl0QkMsRUFBd0JSLElBQzFCLElBQUlELEVBQWNLLElBQ2xCLE1BQU9KLEVBQU1DLGNBQWNGLElBQ3ZCQSxFQUFjSyxFQUtsQixPQUhBSixFQUFNRSxjQUFjSCxHQUNwQkYsRUFBVU0sS0FBS0osR0FDZkgsR0FBVyxFQUNKRyxHQUtYLE1BQU0sQ0FBQ0Qsb0JBQW1CVSx1QkFBc0JDLE9BRmxCLFVBQWZkLEVBQXlCRyxFQUFvQlUsRUFFSlosV0FDakRDLFlBQVMsRUNzRXBCLEVBcEd5QixLQUNyQixNQUFNYSxFQUFPLEdBQ1BDLEVBQVEsR0FDUkMsRUFBZ0IsR0FDaEJDLEVBQW9CLEdBYXBCQyxFQUFZLENBQUNmLEVBQWFnQixLQUM1QixNQUFNQyxFQ3BCTSxDQUFDQyxJQUNqQixJQUFJQyxFQUFPLEVBQ1BDLEdBQU8sRUFDUEosRUFBYUUsRUFjakIsTUFBTyxDQUFDRyxJQVpJLEtBQ1JGLEdBQVEsRUFDREEsR0FVRUcsT0FQRSxLQUNSSCxJQUFTSCxJQUNSSSxHQUFPLEdBRUpBLEdBR1VELE9BQU1DLE9BQU1KLGFBQVUsRURHMUIsQ0FBWUEsSUFDbEJPLEVBQUdDLEdBQUt4QixFQUVmLElBQUksSUFBSXlCLEVBQUcsRUFBR0EsRUFBSVQsRUFBWVMsSUFDMUIsR0FBc0IsT0FBbkJkLEVBQUtZLEVBQUlFLEdBQUdELEdBQ1gsTUFBTSxJQUFJRSxNQUFNLHlDQUl4QixJQUFJLElBQUlELEVBQUksRUFBR0EsRUFBSVQsRUFBWVMsSUFDM0JkLEVBQUtZLEVBQUlFLEdBQUdELEdBQUtQLEVBR3JCTCxFQUFNUixLQUFLYSxFQUFJLEVBK0RuQixNQXhGcUIsTUFHakIsSUFBSSxJQUFJUSxFQUFJLEVBQUdBLEVBRkosR0FFY0EsSUFBSSxDQUN6QmQsRUFBS2MsR0FBSyxHQUNWLElBQUksSUFBSUUsRUFBSSxFQUFHQSxFQUhSLEdBR2tCQSxJQUNyQmhCLEVBQUtjLEdBQUdFLEdBQUssSUFFckIsR0E4RUpDLEdBRU0sQ0FBQ2IsWUFBV0osT0FBTUMsUUFBT1QsY0F6Q1JILElBQ25CLE1BQU91QixFQUFFQyxHQUFLeEIsRUFDSSxPQUFmVyxFQUFLWSxHQUFHQyxJQUNQWCxFQUFjVCxLQUFLLENBQUNtQixFQUFFQyxJQUN0QmIsRUFBS1ksR0FBR0MsR0FBSyxJQUVGYixFQUFLWSxHQUFHQyxHQUNkSCxNQUNMUCxFQUFrQlYsS0FBSyxDQUFDbUIsRUFBRUMsSUFDOUIsRUFnQzBDSyxpQkE1RHJCLEtBQ3JCLE1BQU1DLEVBQWMsQ0FBQyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBRWpDLElBQUksSUFBSUwsRUFBSSxFQUFHQSxFQUFJSyxFQUFZWixPQUFRTyxJQUFJLENBQ3ZDLElBQUlNLEdBQVMsRUFDYixNQUFPQSxHQUFPLENBQ1YsSUFBSVIsRUFBSWpCLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxVQUNwQmdCLEVBQUlsQixLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFDeEIsSUFDSU8sRUFBVSxDQUFDUSxFQUFFQyxHQUFJTSxFQUFZTCxJQUM3Qk0sR0FBUyxDQUNiLENBQUUsTUFBT0MsR0FFVCxDQUNKLENBQ0osQ0FDQSxPQUFPcEIsR0E2Q1BDLGdCQUFlQyxvQkFBbUJtQixhQXRCakIsSUFDVnJCLEVBQU1zQixPQUFPakIsR0FBU0EsRUFBS0ssV0FxQmNwQixjQWxCN0JGLElBQ25CLElBQUt1QixFQUFHQyxHQUFLeEIsRUFDYixJQUFLLElBQUttQyxFQUFTQyxLQUFZdEIsRUFDM0IsR0FBSXFCLElBQVlaLEdBQUthLElBQVlaLEVBQzdCLE9BQU8sRUFHZixJQUFLLE1BQU9XLEVBQVNDLEtBQVl2QixFQUM3QixHQUFJc0IsSUFBWVosR0FBS2EsSUFBWVosRUFDN0IsT0FBTyxFQUdmLE9BQU8sQ0FBSSxFQU9YYSxTQS9CYSxJQUNOekIsRUE4QkcwQixRQTNCRSxJQUNMM0IsRUEwQlUsRUU5Rm5CNEIsRUFBY0MsRUFBYyxTQUM1QkMsRUFBV0QsRUFBYyxZQUV6QkUsRUFBaUJDLElBQ2pCQyxFQUFjRCxJQUVkRSxFSlZTLEVBQUU1QyxFQUFPNkMsRUFBWVAsRUFBYVEsS0FDN0MsTUFBTWpCLEVBQWMsQ0FBQyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBQ2pDLElBQUlrQixFQUFXLEVBRWYsTUFpQk1DLEVBQXVCQyxJQUN6QixNQUNNbEQsRUFEY2tELEVBQU1DLE9BQ01DLGFBQWEsb0JBQ3RDN0IsRUFBR0MsR0FBSzZCLEtBQUtDLE1BQU10RCxHQUUxQkMsRUFBTWMsVUFBVSxDQUFDUSxFQUFHQyxHQUFHTSxFQUFZa0IsSUFFbkMsSUFBSyxJQUFJdkIsRUFBSSxFQUFHQSxFQUFJSyxFQUFZa0IsR0FBV3ZCLElBQ3hCOEIsU0FBU0MsY0FBYywyQkFBMkJqQyxFQUFFRSxNQUFNRCxRQUNoRWlDLFVBQVksWUFHekJULElBQ0lBLEdBQVlsQixFQUFZWixRQUNQcUMsU0FBU0MsY0FBYyxjQUMvQkUsb0JBQW9CLFFBQVNULEVBQ3hDLEVBaUJBVSxFQUFZLEtBQ2QsTUFBTUMsRUFBbUJMLFNBQVNNLGlCQUFpQix5QkFDN0NDLEVBQXFCUCxTQUFTTSxpQkFBaUIsZ0JBQy9DRSxFQUFZLEdBRWxCLElBQUksSUFBSXRDLEVBQUksRUFBR0EsRUFBSW1DLEVBQWlCMUMsT0FBUU8sSUFDeENzQyxFQUFVM0QsS0FBS3dELEVBQWlCbkMsR0FBRzJCLGFBQWEsb0JBR3BELElBQUksSUFBSTNCLEVBQUksRUFBR0EsRUFBSXFDLEVBQW1CNUMsT0FBUU8sSUFBSSxDQUM5QyxJQUFJdUMsRUFBT0YsRUFBbUJyQyxHQUMxQndDLEVBQWFILEVBQW1CckMsR0FBRzJCLGFBQWEsbUJBQ2pEVyxFQUFVRyxTQUFTRCxLQUNsQkQsRUFBS1AsVUFBWSxZQUd6QixHQUdFVSxFQUFlakIsSUFDakIsTUFBTWtCLEVBQWNsQixFQUFNQyxPQUNwQm5ELEVBQWNvRSxFQUFZaEIsYUFBYSxvQkFDdEM3QixFQUFHQyxHQUFLNkIsS0FBS0MsTUFBTXRELEdBRTFCdUMsRUFBWTdCLE9BQU8sQ0FBQ2EsRUFBRUMsR0FBSXNCLEdBR0gsSUFGTEEsRUFBV1IsVUFFaEJmLEdBQUdDLEdBQ1o0QyxFQUFZWCxVQUFZLE9BQ3BCVyxFQUFZWCxVQUFZLEtBQUssRUFtQjdDLE1BQU8sQ0FBQ1ksWUFsR2lCQyxJQUNqQixNQUNNckUsRUFBUXNELFNBQVNDLGNBQWNjLEdBQ3JDckUsRUFBTXNFLE1BQU1DLG9CQUFzQixrQkFDbEN2RSxFQUFNc0UsTUFBTUUsaUJBQW1CLGtCQUcvQixJQUFLLElBQUloRCxFQUFJLEVBQUdBLEVBREZpRCxJQUNlakQsSUFBSSxDQUM3QixJQUFJa0QsRUFBT3BCLFNBQVNxQixjQUFjLE9BQ2xDRCxFQUFLbEIsVUFBWSxPQUNqQixNQUFNbEMsRUFBSUUsRUFUSyxHQVVURCxFQUFJbEIsS0FBS0MsTUFBTWtCLEVBVk4sSUFXZmtELEVBQUtFLGFBQWEsa0JBQW1CLElBQUl0RCxNQUFNQyxNQUMvQ3ZCLEVBQU02RSxzQkFBc0IsWUFBYUgsRUFDN0MsR0FvRmFJLFdBOURFLEtBQ0V4QixTQUFTQyxjQUFjLGNBQy9Cd0IsaUJBQWlCLFFBQVMsRUFBcUIsRUE0RC9CQyxXQXpEVixLQUNmLE1BQU1DLEVBQVEzQixTQUFTQyxjQUFjLFVBQy9CMkIsRUFBZ0I1QixTQUFTQyxjQUFjLGtCQUM3QzBCLEVBQU1GLGlCQUFpQixTQUFTLEtBQzVCRyxFQUFjQyxRQUNkekIsR0FBVSxHQUNiLEVBbURvQ0EsWUFBVzBCLFdBaEJqQyxLQUNDOUIsU0FBU0MsY0FBYyxhQUMvQndCLGlCQUFpQixRQUFTLEVBQWMsRUFjWU0sU0FYL0MsS0FDYixJQUFJdEYsRUFBYytDLEVBQWVyQyxPQUFPVCxHQUN4QyxNQUFPc0IsRUFBRUMsR0FBS3hCLEVBQ1J1RixFQUFTdEYsRUFBTXFDLFVBQ2ZxQyxFQUFPcEIsU0FBU0MsY0FBYyxrQ0FBa0NqQyxNQUFNQyxPQUV4RCxJQUFqQitELEVBQU9oRSxHQUFHQyxHQUNUbUQsRUFBS2xCLFVBQVksT0FDYmtCLEVBQUtsQixVQUFZLEtBQUssRUFJckMsRUk3RmlCLENBQU9mLEVBQWdCRSxFQUFhTCxFQUFhRSxHQUcvREksRUFBVXdCLFlBQVksY0FDdEJ4QixFQUFVd0IsWUFBWSxVQUN0QnhCLEVBQVV3QixZQUFZLGFBRXRCekIsRUFBWWYsbUJBQ1pnQixFQUFVa0MsYUFDVmxDLEVBQVVvQyxhQUNWcEMsRUFBVXdDLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSAoKGJvYXJkLCBlbmVteUJvYXJkLCBodW1hblBsYXllciwgY29tcHV0ZXJQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBsZXQgdGhpc1NoaXAgPSAwXG5cbiAgICBjb25zdCBjcmVhdGVDZWxscyA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IDEwXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpXG4gICAgICAgIGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7ZGltZW5zaW9uc30sIDFmcilgO1xuICAgICAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2RpbWVuc2lvbnN9LCAxZnIpYDtcbiAgICBcbiAgICAgICAgbGV0IG51bURpdnMgPSBkaW1lbnNpb25zICogZGltZW5zaW9ucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EaXZzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJ1xuICAgICAgICAgICAgY29uc3QgeCA9IGkgJSBkaW1lbnNpb25zOyAvLyBDYWxjdWxhdGUgeCBjb29yZGluYXRlXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gZGltZW5zaW9ucyk7IC8vIENhbGN1bGF0ZSB5IGNvb3JkaW5hdGVcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnLCBgWyR7eH0sICR7eX1dYClcbiAgICAgICAgICAgIGJvYXJkLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjZWxsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmV0cmlldmVDb29yZGluYXRlcyA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGlja2VkQ2VsbCA9IGV2ZW50LnRhcmdldFxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJylcbiAgICAgICAgY29uc3QgW3gsIHldID0gSlNPTi5wYXJzZShjb29yZGluYXRlcylcbiAgICAgICAgXG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChbeCwgeV0sc2hpcExlbmd0aHNbdGhpc1NoaXBdKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1t0aGlzU2hpcF07IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2hpcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLWNvb3JkaW5hdGU9XCJbJHt4K2l9LCAke3l9XVwiXWApXG4gICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc05hbWUgPSAnc2hpcC1jZWxsJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1NoaXArK1xuICAgICAgICBpZiAodGhpc1NoaXAgPj0gc2hpcExlbmd0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmUtYm9hcmQnKTtcbiAgICAgICAgICAgIHByZUJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0cmlldmVDb29yZGluYXRlcyk7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluc2VydFNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZS1ib2FyZCcpXG4gICAgICAgIHByZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHJldHJpZXZlQ29vcmRpbmF0ZXMpKVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlZ2luJylcbiAgICAgICAgY29uc3Qgd2VsY29tZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lU2NyZWVuJylcbiAgICAgICAgYmVnaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3ZWxjb21lU2NyZWVuLmNsb3NlKClcbiAgICAgICAgICAgIHNob3dTaGlwcygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmVCb2FyZE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmUtYm9hcmQgLnNoaXAtY2VsbFwiKVxuICAgICAgICBjb25zdCBodW1hbkJvYXJkTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmh1bWFuIC5jZWxsXCIpXG4gICAgICAgIGNvbnN0IHNoaXBDZWxscyA9IFtdXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZUJvYXJkTm9kZUxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgc2hpcENlbGxzLnB1c2gocHJlQm9hcmROb2RlTGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGh1bWFuQm9hcmROb2RlTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGh1bWFuQm9hcmROb2RlTGlzdFtpXVxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBodW1hbkJvYXJkTm9kZUxpc3RbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnKVxuICAgICAgICAgICAgaWYoc2hpcENlbGxzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKXtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9ICdzaGlwLWNlbGwnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGh1bWFuQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRDZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gY2xpY2tlZENlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnKVxuICAgICAgICBjb25zdCBbeCwgeV0gPSBKU09OLnBhcnNlKGNvb3JkaW5hdGVzKVxuXG4gICAgICAgIGh1bWFuUGxheWVyLmF0dGFjayhbeCx5XSwgZW5lbXlCb2FyZClcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZW5lbXlCb2FyZC5nZXRHcmlkKClcblxuICAgICAgICBpZihlbmVteUdyaWRbeF1beV0gPT09IDApe1xuICAgICAgICAgICAgY2xpY2tlZENlbGwuY2xhc3NOYW1lID0gJ21pc3MnXG4gICAgICAgIH0gZWxzZSB7Y2xpY2tlZENlbGwuY2xhc3NOYW1lID0gJ2hpdCd9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0F0dGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlcicpXG4gICAgICAgIGFpQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaHVtYW5BdHRhY2spIClcbiAgICB9XG5cbiAgICBjb25zdCBhaUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gY29tcHV0ZXJQbGF5ZXIuYXR0YWNrKGJvYXJkKVxuICAgICAgICBjb25zdCBbeCx5XSA9IGNvb3JkaW5hdGVzXG4gICAgICAgIGNvbnN0IG15R3JpZCA9IGJvYXJkLmdldEdyaWQoKVxuICAgICAgICBjb25zdCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuIC5jZWxsW2RhdGEtY29vcmRpbmF0ZT1cIlske3h9LCAke3l9XVwiYClcblxuICAgICAgICBpZihteUdyaWRbeF1beV0gPT09IDApe1xuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnbWlzcydcbiAgICAgICAgfSBlbHNlIHtjZWxsLmNsYXNzTmFtZSA9ICdoaXQnfVxuICAgIH1cblxucmV0dXJuIHtjcmVhdGVDZWxscywgaW5zZXJ0U2hpcCwgY2xvc2VNb2RhbCwgc2hvd1NoaXBzLCBzaG93QXR0YWNrLCBhaUF0dGFja31cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHMiLCJjb25zdCBwbGF5ZXJGYWN0b3J5ID0gKHBsYXllclR5cGUpID0+IHtcbiAgICBsZXQgaXNNeVR1cm4gPSBudWxsXG4gICAgbGV0IG15QXR0YWNrcyA9IFtdXG5cbiAgICBjb25zdCBodW1hblBsYXllckF0dGFjayA9IChjb29yZGluYXRlcywgYm9hcmQpID0+IHtcbiAgICAgICAgaWYgKGJvYXJkLmlzVmFsaWRBdHRhY2soY29vcmRpbmF0ZXMpKXtcbiAgICAgICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpXG4gICAgICAgIH1cbiAgICAgICAgbXlBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgICAgIGlzTXlUdXJuID0gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBnZXRSYW5kb21Db29yZGluYXRlcyA9ICgpID0+IHtcbiAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgcmV0dXJuIFt4LCB5XVxuICAgIH1cblxuICAgIGNvbnN0IGNvbXB1dGVyUGxheWVyQXR0YWNrID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGxldCBjb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgd2hpbGUoIWJvYXJkLmlzVmFsaWRBdHRhY2soY29vcmRpbmF0ZXMpKXtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgICAgICBteUF0dGFja3MucHVzaChjb29yZGluYXRlcylcbiAgICAgICAgaXNNeVR1cm4gPSBmYWxzZVxuICAgICAgICByZXR1cm4gY29vcmRpbmF0ZXNcbiAgICB9XG5cbiAgICBjb25zdCBhdHRhY2sgPSBwbGF5ZXJUeXBlID09PSBcImh1bWFuXCIgPyBodW1hblBsYXllckF0dGFjayA6IGNvbXB1dGVyUGxheWVyQXR0YWNrO1xuXG4gICAgcmV0dXJue2h1bWFuUGxheWVyQXR0YWNrLCBjb21wdXRlclBsYXllckF0dGFjaywgYXR0YWNrLCBpc015VHVybixcbiAgICAgICAgICAgbXlBdHRhY2tzfVxufVxuXG5leHBvcnQgZGVmYXVsdCBwbGF5ZXJGYWN0b3J5XG4vL21vZHVsZS5leHBvcnRzID0gcGxheWVyRmFjdG9yeSIsImltcG9ydCBzaGlwRmFjdG9yeSBmcm9tICcuL3NoaXBzJ1xuXG5jb25zdCBnYW1lYm9hcmRGYWN0b3J5ID0gKCkgPT4ge1xuICAgIGNvbnN0IGdyaWQgPSBbXVxuICAgIGNvbnN0IHNoaXBzID0gW11cbiAgICBjb25zdCBtaXNzZWRBdHRhY2tzID0gW11cbiAgICBjb25zdCBzdWNjZXNzZnVsQXR0YWNrcyA9IFtdXG5cbiAgICBjb25zdCBwb3B1bGF0ZUdyaWQgPSAoKSA9PiB7XG4gICAgICAgIGxldCByb3dzID0gMTBcbiAgICAgICAgbGV0IGNvbHMgPSAxMFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKXtcbiAgICAgICAgICAgIGdyaWRbaV0gPSBbXTtcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjb2xzOyBqKyspe1xuICAgICAgICAgICAgICAgIGdyaWRbaV1bal0gPSBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBwbGFjZVNoaXAgPSAoY29vcmRpbmF0ZXMsIHNoaXBMZW5ndGgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcCA9IHNoaXBGYWN0b3J5KHNoaXBMZW5ndGgpXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0wOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGlmKGdyaWRbeCArIGldW3ldICE9PSBudWxsKXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwbGFjZSBzaGlwIG9uIGFuIG9jY3VwaWVkIHNwb3QnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBncmlkW3ggKyBpXVt5XSA9IHNoaXA7XG4gICAgICAgIH1cblxuICAgICAgICBzaGlwcy5wdXNoKHNoaXApXG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VSYW5kb21TaGlwcyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGV0IHBsYWNlZCA9IGZhbHNlXG4gICAgICAgICAgICB3aGlsZSghcGxhY2VkKXtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwKFt4LHldLCBzaGlwTGVuZ3Roc1tpXSlcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKXtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2hpcHNcbiAgICAgIH07XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRpbmF0ZXNcbiAgICAgICAgaWYoZ3JpZFt4XVt5XSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goW3gseV0pXG4gICAgICAgICAgICBncmlkW3hdW3ldID0gMCAvLzAgd2lsbCBpbmRpY2F0ZSBhIGdyaWQgcG9zaXRpb24gdGhhdCB3YXMgYXR0YWNrZWQgYW5kIG1pc3NlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBncmlkW3hdW3ldXG4gICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICBzdWNjZXNzZnVsQXR0YWNrcy5wdXNoKFt4LHldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgZ2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBzaGlwc1xuICAgIH1cblxuICAgIGNvbnN0IGdldEdyaWQgPSAoKSA9PiB7XG4gICAgICAgIHJldHVybiBncmlkXG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBsZXQgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIGZvciAobGV0IFthdHRhY2tYLCBhdHRhY2tZXSBvZiBzdWNjZXNzZnVsQXR0YWNrcykge1xuICAgICAgICAgICAgaWYgKGF0dGFja1ggPT09IHggJiYgYXR0YWNrWSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IFthdHRhY2tYLCBhdHRhY2tZXSBvZiBtaXNzZWRBdHRhY2tzKSB7XG4gICAgICAgICAgICBpZiAoYXR0YWNrWCA9PT0geCAmJiBhdHRhY2tZID09PSB5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVHcmlkKClcblxuICAgIHJldHVybntwbGFjZVNoaXAsIGdyaWQsIHNoaXBzLCByZWNlaXZlQXR0YWNrLCBwbGFjZVJhbmRvbVNoaXBzLCBcbiAgICAgICAgbWlzc2VkQXR0YWNrcywgc3VjY2Vzc2Z1bEF0dGFja3MsIGFsbFNoaXBzU3VuaywgaXNWYWxpZEF0dGFjaywgXG4gICAgICAgIGdldFNoaXBzLCBnZXRHcmlkfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWVib2FyZEZhY3Rvcnlcbi8vbW9kdWxlLmV4cG9ydHMgPSBnYW1lYm9hcmRGYWN0b3J5IiwiY29uc3Qgc2hpcEZhY3RvcnkgPSAobGVuZ3RoKSA9PiB7XG4gICAgbGV0IGhpdHMgPSAwIFxuICAgIGxldCBzdW5rID0gZmFsc2VcbiAgICBsZXQgc2hpcExlbmd0aCA9IGxlbmd0aFxuXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBoaXRzICs9IDFcbiAgICAgICAgcmV0dXJuIGhpdHNcbiAgICB9XG5cbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKGhpdHMgPT09IHNoaXBMZW5ndGgpe1xuICAgICAgICAgICAgc3VuayA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3Vua1xuICAgIH1cblxuICAgIHJldHVybiB7aGl0LCBpc1N1bmssIGhpdHMsIHN1bmssIHNoaXBMZW5ndGh9XG59XG5leHBvcnQgZGVmYXVsdCBzaGlwRmFjdG9yeVxuLy9tb2R1bGUuZXhwb3J0cyA9IHNoaXBGYWN0b3J5IiwiaW1wb3J0IGV2ZW50cyBmcm9tIFwiLi9tb2R1bGVzL2RvbVwiO1xuaW1wb3J0IHBsYXllckZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9wbGF5ZXJcIlxuaW1wb3J0IGdhbWVib2FyZEZhY3RvcnkgZnJvbSBcIi4vbW9kdWxlcy9nYW1lYm9hcmRcIlxuXG5jb25zdCBodW1hblBsYXllciA9IHBsYXllckZhY3RvcnkoJ2h1bWFuJykgLy9jcmVhdGUgcGxheWVyIGluc3RhbmNlc1xuY29uc3QgYWlQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCdjb21wdXRlcicpXG5cbmNvbnN0IGh1bWFuR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpIC8vY3JlYXRlIGJvYXJkIGluc3RhbmNlcyBcbmNvbnN0IGFpR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpXG5cbmNvbnN0IGRvbUV2ZW50cyA9IGV2ZW50cyhodW1hbkdhbWVib2FyZCwgYWlHYW1lYm9hcmQsIGh1bWFuUGxheWVyLCBhaVBsYXllcilcblxuY29uc3QgZ2FtZUxvb3AgPSAoKSA9PiB7XG4gICAgZG9tRXZlbnRzLmNyZWF0ZUNlbGxzKCcucHJlLWJvYXJkJylcbiAgICBkb21FdmVudHMuY3JlYXRlQ2VsbHMoJy5odW1hbicpXG4gICAgZG9tRXZlbnRzLmNyZWF0ZUNlbGxzKCcuY29tcHV0ZXInKVxuXG4gICAgYWlHYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwcygpXG4gICAgZG9tRXZlbnRzLmluc2VydFNoaXAoKVxuICAgIGRvbUV2ZW50cy5jbG9zZU1vZGFsKClcbiAgICBkb21FdmVudHMuc2hvd0F0dGFjaygpXG5cbiAgICBcbn1cbmdhbWVMb29wKCkiXSwibmFtZXMiOlsicGxheWVyVHlwZSIsImlzTXlUdXJuIiwibXlBdHRhY2tzIiwiaHVtYW5QbGF5ZXJBdHRhY2siLCJjb29yZGluYXRlcyIsImJvYXJkIiwiaXNWYWxpZEF0dGFjayIsInJlY2VpdmVBdHRhY2siLCJwdXNoIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlclBsYXllckF0dGFjayIsImF0dGFjayIsImdyaWQiLCJzaGlwcyIsIm1pc3NlZEF0dGFja3MiLCJzdWNjZXNzZnVsQXR0YWNrcyIsInBsYWNlU2hpcCIsInNoaXBMZW5ndGgiLCJzaGlwIiwibGVuZ3RoIiwiaGl0cyIsInN1bmsiLCJoaXQiLCJpc1N1bmsiLCJ4IiwieSIsImkiLCJFcnJvciIsImoiLCJwb3B1bGF0ZUdyaWQiLCJwbGFjZVJhbmRvbVNoaXBzIiwic2hpcExlbmd0aHMiLCJwbGFjZWQiLCJlcnJvciIsImFsbFNoaXBzU3VuayIsImV2ZXJ5IiwiYXR0YWNrWCIsImF0dGFja1kiLCJnZXRTaGlwcyIsImdldEdyaWQiLCJodW1hblBsYXllciIsInBsYXllciIsImFpUGxheWVyIiwiaHVtYW5HYW1lYm9hcmQiLCJnYW1lYm9hcmQiLCJhaUdhbWVib2FyZCIsImRvbUV2ZW50cyIsImVuZW15Qm9hcmQiLCJjb21wdXRlclBsYXllciIsInRoaXNTaGlwIiwicmV0cmlldmVDb29yZGluYXRlcyIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInNob3dTaGlwcyIsInByZUJvYXJkTm9kZUxpc3QiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaHVtYW5Cb2FyZE5vZGVMaXN0Iiwic2hpcENlbGxzIiwibm9kZSIsImNvb3JkaW5hdGUiLCJpbmNsdWRlcyIsImh1bWFuQXR0YWNrIiwiY2xpY2tlZENlbGwiLCJjcmVhdGVDZWxscyIsImNvbnRhaW5lciIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJkaW1lbnNpb25zIiwiY2VsbCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRBZGphY2VudEVsZW1lbnQiLCJpbnNlcnRTaGlwIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlTW9kYWwiLCJiZWdpbiIsIndlbGNvbWVTY3JlZW4iLCJjbG9zZSIsInNob3dBdHRhY2siLCJhaUF0dGFjayIsIm15R3JpZCJdLCJzb3VyY2VSb290IjoiIn0=