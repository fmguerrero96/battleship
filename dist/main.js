(()=>{"use strict";const e=e=>{let t=null,r=[];const c=(e,c)=>{c.isValidAttack(e)&&c.receiveAttack(e),r.push(e),t=!1},o=()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],l=e=>{let c=o();for(;!e.isValidAttack(c);)c=o();return e.receiveAttack(c),r.push(c),t=!1,c};return{humanPlayerAttack:c,computerPlayerAttack:l,attack:"human"===e?c:l,isMyTurn:t,myAttacks:r}},t=()=>{const e=[],t=[],r=[],c=[],o=(r,c)=>{const o=(e=>{let t=0,r=!1,c=e;return{hit:()=>(t+=1,t),isSunk:()=>(t===c&&(r=!0),r),hits:t,sunk:r,shipLength:c}})(c),[l,a]=r;for(let t=0;t<c;t++)if(null!==e[l+t][a])throw new Error("Cannot place ship on an occupied spot");for(let t=0;t<c;t++)e[l+t][a]=o;t.push(o)};return(()=>{for(let t=0;t<10;t++){e[t]=[];for(let r=0;r<10;r++)e[t][r]=null}})(),{placeShip:o,grid:e,ships:t,receiveAttack:t=>{const[o,l]=t;null===e[o][l]?(r.push([o,l]),e[o][l]=0):(e[o][l].hit(),c.push([o,l]))},placeRandomShips:()=>{const e=[5,4,3,3,2];for(let t=0;t<e.length;t++){let r=!1;for(;!r;){let c=Math.floor(10*Math.random()),l=Math.floor(10*Math.random());try{o([c,l],e[t]),r=!0}catch(e){}}}return t},missedAttacks:r,successfulAttacks:c,allShipsSunk:()=>t.every((e=>e.isSunk())),isValidAttack:e=>{let[t,o]=e;for(let[e,r]of c)if(e===t&&r===o)return!1;for(const[e,c]of r)if(e===t&&c===o)return!1;return!0},getShips:()=>t,getGrid:()=>e}},r=e("human"),c=e("computer"),o=t(),l=t(),a=((e,t,r,c)=>{const o=[5,4,3,3,2];let l=0;const a=t=>{const r=t.target.getAttribute("data-coordinate"),[c,n]=JSON.parse(r);e.placeShip([c,n],o[l]);for(let e=0;e<o[l];e++)document.querySelector(`.cell[data-coordinate="[${c+e}, ${n}]"]`).className="ship-cell";l++,l>=o.length&&document.querySelector(".pre-board").removeEventListener("click",a)},n=()=>{const e=document.querySelectorAll(".pre-board .ship-cell"),t=document.querySelectorAll(".human .cell"),r=[];for(let t=0;t<e.length;t++)r.push(e[t].getAttribute("data-coordinate"));for(let e=0;e<t.length;e++){let c=t[e],o=t[e].getAttribute("data-coordinate");r.includes(o)&&(c.className="ship-cell")}},s=c=>{const o=c.target,l=o.getAttribute("data-coordinate"),[a,n]=JSON.parse(l);t.attack([a,n],r),0===r.getGrid()[a][n]?o.className="miss":o.className="hit",i(),(e.allShipsSunk()||r.allShipsSunk())&&(document.querySelector(".computer").removeEventListener("click",s),document.querySelector(".gameEnd").showModal(),e.allShipsSunk()?document.querySelector(".winner").textContent="AI Player Wins!":document.querySelector(".winner").textContent="You Win!",document.querySelector(".playAgain").addEventListener("click",(()=>{document.location.reload()})))},i=()=>{let t=c.computerPlayerAttack(e);const[r,o]=t,l=e.getGrid();let a=document.querySelector(`.human .cell[data-coordinate="[${r}, ${o}]"]`);a||(a=document.querySelector(`.human .ship-cell[data-coordinate="[${r}, ${o}]"]`)),0===l[r][o]?a.className="miss":a.className="hit"};return{createCells:e=>{const t=document.querySelector(e);t.style.gridTemplateColumns="repeat(10, 1fr)",t.style.gridTemplateRows="repeat(10, 1fr)";for(let e=0;e<100;e++){let r=document.createElement("div");r.className="cell";const c=e%10,o=Math.floor(e/10);r.setAttribute("data-coordinate",`[${c}, ${o}]`),t.insertAdjacentElement("beforeend",r)}},insertShip:()=>{document.querySelector(".pre-board").addEventListener("click",a)},closeModal:()=>{const e=document.querySelector(".begin"),t=document.querySelector(".welcomeScreen");e.addEventListener("click",(()=>{t.close(),n()}))},showShips:n,aiAttack:i,showAttack:()=>{document.querySelector(".computer").addEventListener("click",s)}}})(o,r,l,c);a.createCells(".pre-board"),a.closeModal(),a.createCells(".human"),a.createCells(".computer"),l.placeRandomShips(),a.insertShip(),a.showAttack()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQUEsTUNtQ0EsRUFuQ3VCQSxJQUNuQixJQUFJQyxFQUFXLEtBQ1hDLEVBQVksR0FFaEIsTUFBTUMsRUFBb0IsQ0FBQ0MsRUFBYUMsS0FDaENBLEVBQU1DLGNBQWNGLElBQ3BCQyxFQUFNRSxjQUFjSCxHQUV4QkYsRUFBVU0sS0FBS0osR0FDZkgsR0FBVyxHQUdUUSxFQUF1QixJQUdsQixDQUZDQyxLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFDaEJGLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxXQUl0QkMsRUFBd0JSLElBQzFCLElBQUlELEVBQWNLLElBQ2xCLE1BQU9KLEVBQU1DLGNBQWNGLElBQ3ZCQSxFQUFjSyxJQUtsQixPQUhBSixFQUFNRSxjQUFjSCxHQUNwQkYsRUFBVU0sS0FBS0osR0FDZkgsR0FBVyxFQUNKRyxHQUtYLE1BQU0sQ0FBQ0Qsb0JBQW1CVSx1QkFBc0JDLE9BRmxCLFVBQWZkLEVBQXlCRyxFQUFvQlUsRUFFSlosV0FDakRDLFlBQVMsRUNzRXBCLEVBcEd5QixLQUNyQixNQUFNYSxFQUFPLEdBQ1BDLEVBQVEsR0FDUkMsRUFBZ0IsR0FDaEJDLEVBQW9CLEdBYXBCQyxFQUFZLENBQUNmLEVBQWFnQixLQUM1QixNQUFNQyxFQ3BCTSxDQUFDQyxJQUNqQixJQUFJQyxFQUFPLEVBQ1BDLEdBQU8sRUFDUEosRUFBYUUsRUFjakIsTUFBTyxDQUFDRyxJQVpJLEtBQ1JGLEdBQVEsRUFDREEsR0FVRUcsT0FQRSxLQUNSSCxJQUFTSCxJQUNSSSxHQUFPLEdBRUpBLEdBR1VELE9BQU1DLE9BQU1KLGFBQVUsRURHMUIsQ0FBWUEsSUFDbEJPLEVBQUdDLEdBQUt4QixFQUVmLElBQUksSUFBSXlCLEVBQUcsRUFBR0EsRUFBSVQsRUFBWVMsSUFDMUIsR0FBc0IsT0FBbkJkLEVBQUtZLEVBQUlFLEdBQUdELEdBQ1gsTUFBTSxJQUFJRSxNQUFNLHlDQUl4QixJQUFJLElBQUlELEVBQUksRUFBR0EsRUFBSVQsRUFBWVMsSUFDM0JkLEVBQUtZLEVBQUlFLEdBQUdELEdBQUtQLEVBR3JCTCxFQUFNUixLQUFLYSxFQUFJLEVBK0RuQixNQXhGcUIsTUFHakIsSUFBSSxJQUFJUSxFQUFJLEVBQUdBLEVBRkosR0FFY0EsSUFBSSxDQUN6QmQsRUFBS2MsR0FBSyxHQUNWLElBQUksSUFBSUUsRUFBSSxFQUFHQSxFQUhSLEdBR2tCQSxJQUNyQmhCLEVBQUtjLEdBQUdFLEdBQUssSUFFckIsR0E4RUpDLEdBRU0sQ0FBQ2IsWUFBV0osT0FBTUMsUUFBT1QsY0F6Q1JILElBQ25CLE1BQU91QixFQUFFQyxHQUFLeEIsRUFDSSxPQUFmVyxFQUFLWSxHQUFHQyxJQUNQWCxFQUFjVCxLQUFLLENBQUNtQixFQUFFQyxJQUN0QmIsRUFBS1ksR0FBR0MsR0FBSyxJQUVGYixFQUFLWSxHQUFHQyxHQUNkSCxNQUNMUCxFQUFrQlYsS0FBSyxDQUFDbUIsRUFBRUMsSUFDOUIsRUFnQzBDSyxpQkE1RHJCLEtBQ3JCLE1BQU1DLEVBQWMsQ0FBQyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBRWpDLElBQUksSUFBSUwsRUFBSSxFQUFHQSxFQUFJSyxFQUFZWixPQUFRTyxJQUFJLENBQ3ZDLElBQUlNLEdBQVMsRUFDYixNQUFPQSxHQUFPLENBQ1YsSUFBSVIsRUFBSWpCLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxVQUNwQmdCLEVBQUlsQixLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFDeEIsSUFDSU8sRUFBVSxDQUFDUSxFQUFFQyxHQUFJTSxFQUFZTCxJQUM3Qk0sR0FBUyxDQUNiLENBQUUsTUFBT0MsR0FFVCxDQUNKLENBQ0osQ0FDQSxPQUFPcEIsR0E2Q1BDLGdCQUFlQyxvQkFBbUJtQixhQXRCakIsSUFDVnJCLEVBQU1zQixPQUFPakIsR0FBU0EsRUFBS0ssV0FxQmNwQixjQWxCN0JGLElBQ25CLElBQUt1QixFQUFHQyxHQUFLeEIsRUFDYixJQUFLLElBQUttQyxFQUFTQyxLQUFZdEIsRUFDM0IsR0FBSXFCLElBQVlaLEdBQUthLElBQVlaLEVBQzdCLE9BQU8sRUFHZixJQUFLLE1BQU9XLEVBQVNDLEtBQVl2QixFQUM3QixHQUFJc0IsSUFBWVosR0FBS2EsSUFBWVosRUFDN0IsT0FBTyxFQUdmLE9BQU8sQ0FBSSxFQU9YYSxTQS9CYSxJQUNOekIsRUE4QkcwQixRQTNCRSxJQUNMM0IsRUEwQlUsRUU5Rm5CNEIsRUFBY0MsRUFBYyxTQUM1QkMsRUFBV0QsRUFBYyxZQUV6QkUsRUFBaUJDLElBQ2pCQyxFQUFjRCxJQUVkRSxFSlZTLEVBQUU1QyxFQUFPc0MsRUFBYU8sRUFBWUMsS0FDN0MsTUFBTWpCLEVBQWMsQ0FBQyxFQUFHLEVBQUcsRUFBRyxFQUFHLEdBQ2pDLElBQUlrQixFQUFXLEVBRWYsTUFpQk1DLEVBQXVCQyxJQUN6QixNQUNNbEQsRUFEY2tELEVBQU1DLE9BQ01DLGFBQWEsb0JBQ3RDN0IsRUFBR0MsR0FBSzZCLEtBQUtDLE1BQU10RCxHQUUxQkMsRUFBTWMsVUFBVSxDQUFDUSxFQUFHQyxHQUFHTSxFQUFZa0IsSUFFbkMsSUFBSyxJQUFJdkIsRUFBSSxFQUFHQSxFQUFJSyxFQUFZa0IsR0FBV3ZCLElBQ3hCOEIsU0FBU0MsY0FBYywyQkFBMkJqQyxFQUFFRSxNQUFNRCxRQUNoRWlDLFVBQVksWUFHekJULElBQ0lBLEdBQVlsQixFQUFZWixRQUNQcUMsU0FBU0MsY0FBYyxjQUMvQkUsb0JBQW9CLFFBQVNULEVBQ3hDLEVBaUJBVSxFQUFZLEtBQ2QsTUFBTUMsRUFBbUJMLFNBQVNNLGlCQUFpQix5QkFDN0NDLEVBQXFCUCxTQUFTTSxpQkFBaUIsZ0JBQy9DRSxFQUFZLEdBRWxCLElBQUksSUFBSXRDLEVBQUksRUFBR0EsRUFBSW1DLEVBQWlCMUMsT0FBUU8sSUFDeENzQyxFQUFVM0QsS0FBS3dELEVBQWlCbkMsR0FBRzJCLGFBQWEsb0JBR3BELElBQUksSUFBSTNCLEVBQUksRUFBR0EsRUFBSXFDLEVBQW1CNUMsT0FBUU8sSUFBSSxDQUM5QyxJQUFJdUMsRUFBT0YsRUFBbUJyQyxHQUMxQndDLEVBQWFILEVBQW1CckMsR0FBRzJCLGFBQWEsbUJBQ2pEVyxFQUFVRyxTQUFTRCxLQUNsQkQsRUFBS1AsVUFBWSxZQUd6QixHQUdFVSxFQUFlakIsSUFDakIsTUFBTWtCLEVBQWNsQixFQUFNQyxPQUNwQm5ELEVBQWNvRSxFQUFZaEIsYUFBYSxvQkFDdEM3QixFQUFHQyxHQUFLNkIsS0FBS0MsTUFBTXRELEdBRTFCdUMsRUFBWTdCLE9BQU8sQ0FBQ2EsRUFBRUMsR0FBSXNCLEdBR0gsSUFGTEEsRUFBV1IsVUFFaEJmLEdBQUdDLEdBQ1o0QyxFQUFZWCxVQUFZLE9BQ3BCVyxFQUFZWCxVQUFZLE1BRWhDWSxLQUdJcEUsRUFBTWdDLGdCQUFrQmEsRUFBV2Isa0JBQ25Cc0IsU0FBU0MsY0FBYyxhQUMvQkUsb0JBQW9CLFFBQVMsR0FDZkgsU0FBU0MsY0FBYyxZQUMvQmMsWUFFWHJFLEVBQU1nQyxlQUNRc0IsU0FBU0MsY0FBYyxXQUM3QmUsWUFBYyxrQkFFUmhCLFNBQVNDLGNBQWMsV0FDN0JlLFlBQWMsV0FFUGhCLFNBQVNDLGNBQWMsY0FDL0JnQixpQkFBaUIsU0FBUyxLQUNoQ2pCLFNBQVNrQixTQUFTQyxRQUFPLElBRWpDLEVBUUVMLEVBQVcsS0FDYixJQUFJckUsRUFBYytDLEVBQWV0QyxxQkFBcUJSLEdBQ3RELE1BQU9zQixFQUFFQyxHQUFLeEIsRUFDUjJFLEVBQVMxRSxFQUFNcUMsVUFDckIsSUFBSXNDLEVBQU9yQixTQUFTQyxjQUFjLGtDQUFrQ2pDLE1BQU1DLFFBRXJFb0QsSUFDREEsRUFBT3JCLFNBQVNDLGNBQWMsdUNBQXVDakMsTUFBTUMsU0FHM0QsSUFBakJtRCxFQUFPcEQsR0FBR0MsR0FDVG9ELEVBQUtuQixVQUFZLE9BQ2JtQixFQUFLbkIsVUFBWSxLQUFLLEVBSWxDLE1BQU8sQ0FBQ29CLFlBN0hhQyxJQUNqQixNQUNNN0UsRUFBUXNELFNBQVNDLGNBQWNzQixHQUNyQzdFLEVBQU04RSxNQUFNQyxvQkFBc0Isa0JBQ2xDL0UsRUFBTThFLE1BQU1FLGlCQUFtQixrQkFHL0IsSUFBSyxJQUFJeEQsRUFBSSxFQUFHQSxFQURGeUQsSUFDZXpELElBQUksQ0FDN0IsSUFBSW1ELEVBQU9yQixTQUFTNEIsY0FBYyxPQUNsQ1AsRUFBS25CLFVBQVksT0FDakIsTUFBTWxDLEVBQUlFLEVBVEssR0FVVEQsRUFBSWxCLEtBQUtDLE1BQU1rQixFQVZOLElBV2ZtRCxFQUFLUSxhQUFhLGtCQUFtQixJQUFJN0QsTUFBTUMsTUFDL0N2QixFQUFNb0Ysc0JBQXNCLFlBQWFULEVBQzdDLEdBK0dpQlUsV0F6RkYsS0FDRS9CLFNBQVNDLGNBQWMsY0FDL0JnQixpQkFBaUIsUUFBUyxFQUFxQixFQXVGM0JlLFdBcEZkLEtBQ2YsTUFBTUMsRUFBUWpDLFNBQVNDLGNBQWMsVUFDL0JpQyxFQUFnQmxDLFNBQVNDLGNBQWMsa0JBQzdDZ0MsRUFBTWhCLGlCQUFpQixTQUFTLEtBQzVCaUIsRUFBY0MsUUFDZC9CLEdBQVUsR0FDYixFQThFd0NBLFlBQVdVLFdBQVVzQixXQXJCL0MsS0FDQ3BDLFNBQVNDLGNBQWMsYUFDL0JnQixpQkFBaUIsUUFBUyxFQUFjLEVBb0J2RCxFSXhIaUIsQ0FBTzlCLEVBQWdCSCxFQUFhSyxFQUFhSCxHQUVuRUksRUFBVWdDLFlBQVksY0FDdEJoQyxFQUFVMEMsYUFDVjFDLEVBQVVnQyxZQUFZLFVBQ3RCaEMsRUFBVWdDLFlBQVksYUFDdEJqQyxFQUFZZixtQkFDWmdCLEVBQVV5QyxhQUNWekMsRUFBVThDLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSAoKGJvYXJkLCBodW1hblBsYXllciwgZW5lbXlCb2FyZCwgY29tcHV0ZXJQbGF5ZXIpID0+IHtcbiAgICBjb25zdCBzaGlwTGVuZ3RocyA9IFs1LCA0LCAzLCAzLCAyXTtcbiAgICBsZXQgdGhpc1NoaXAgPSAwXG5cbiAgICBjb25zdCBjcmVhdGVDZWxscyA9IChjb250YWluZXIpID0+IHtcbiAgICAgICAgY29uc3QgZGltZW5zaW9ucyA9IDEwXG4gICAgICAgIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXIpXG4gICAgICAgIGJvYXJkLnN0eWxlLmdyaWRUZW1wbGF0ZUNvbHVtbnMgPSBgcmVwZWF0KCR7ZGltZW5zaW9uc30sIDFmcilgO1xuICAgICAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVSb3dzID0gYHJlcGVhdCgke2RpbWVuc2lvbnN9LCAxZnIpYDtcbiAgICBcbiAgICAgICAgbGV0IG51bURpdnMgPSBkaW1lbnNpb25zICogZGltZW5zaW9ucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1EaXZzOyBpKyspe1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgXG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdjZWxsJ1xuICAgICAgICAgICAgY29uc3QgeCA9IGkgJSBkaW1lbnNpb25zOyAvLyBDYWxjdWxhdGUgeCBjb29yZGluYXRlXG4gICAgICAgICAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihpIC8gZGltZW5zaW9ucyk7IC8vIENhbGN1bGF0ZSB5IGNvb3JkaW5hdGVcbiAgICAgICAgICAgIGNlbGwuc2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnLCBgWyR7eH0sICR7eX1dYClcbiAgICAgICAgICAgIGJvYXJkLmluc2VydEFkamFjZW50RWxlbWVudChcImJlZm9yZWVuZFwiLCBjZWxsKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcmV0cmlldmVDb29yZGluYXRlcyA9IChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjbGlja2VkQ2VsbCA9IGV2ZW50LnRhcmdldFxuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGNsaWNrZWRDZWxsLmdldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJylcbiAgICAgICAgY29uc3QgW3gsIHldID0gSlNPTi5wYXJzZShjb29yZGluYXRlcylcbiAgICAgICAgXG4gICAgICAgIGJvYXJkLnBsYWNlU2hpcChbeCwgeV0sc2hpcExlbmd0aHNbdGhpc1NoaXBdKVxuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1t0aGlzU2hpcF07IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2hpcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLWNvb3JkaW5hdGU9XCJbJHt4K2l9LCAke3l9XVwiXWApXG4gICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc05hbWUgPSAnc2hpcC1jZWxsJ1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpc1NoaXArK1xuICAgICAgICBpZiAodGhpc1NoaXAgPj0gc2hpcExlbmd0aHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcmUtYm9hcmQnKTtcbiAgICAgICAgICAgIHByZUJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmV0cmlldmVDb29yZGluYXRlcyk7XG4gICAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGluc2VydFNoaXAgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHByZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZS1ib2FyZCcpXG4gICAgICAgIHByZUJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHJldHJpZXZlQ29vcmRpbmF0ZXMpKVxuICAgIH1cblxuICAgIGNvbnN0IGNsb3NlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGJlZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJlZ2luJylcbiAgICAgICAgY29uc3Qgd2VsY29tZVNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lU2NyZWVuJylcbiAgICAgICAgYmVnaW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB3ZWxjb21lU2NyZWVuLmNsb3NlKClcbiAgICAgICAgICAgIHNob3dTaGlwcygpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd1NoaXBzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBwcmVCb2FyZE5vZGVMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcmUtYm9hcmQgLnNoaXAtY2VsbFwiKVxuICAgICAgICBjb25zdCBodW1hbkJvYXJkTm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmh1bWFuIC5jZWxsXCIpXG4gICAgICAgIGNvbnN0IHNoaXBDZWxscyA9IFtdXG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHByZUJvYXJkTm9kZUxpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgc2hpcENlbGxzLnB1c2gocHJlQm9hcmROb2RlTGlzdFtpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGh1bWFuQm9hcmROb2RlTGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGh1bWFuQm9hcmROb2RlTGlzdFtpXVxuICAgICAgICAgICAgbGV0IGNvb3JkaW5hdGUgPSBodW1hbkJvYXJkTm9kZUxpc3RbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnKVxuICAgICAgICAgICAgaWYoc2hpcENlbGxzLmluY2x1ZGVzKGNvb3JkaW5hdGUpKXtcbiAgICAgICAgICAgICAgICBub2RlLmNsYXNzTmFtZSA9ICdzaGlwLWNlbGwnXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGh1bWFuQXR0YWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGNsaWNrZWRDZWxsID0gZXZlbnQudGFyZ2V0XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzID0gY2xpY2tlZENlbGwuZ2V0QXR0cmlidXRlKCdkYXRhLWNvb3JkaW5hdGUnKVxuICAgICAgICBjb25zdCBbeCwgeV0gPSBKU09OLnBhcnNlKGNvb3JkaW5hdGVzKVxuXG4gICAgICAgIGh1bWFuUGxheWVyLmF0dGFjayhbeCx5XSwgZW5lbXlCb2FyZClcbiAgICAgICAgY29uc3QgZW5lbXlHcmlkID0gZW5lbXlCb2FyZC5nZXRHcmlkKClcblxuICAgICAgICBpZihlbmVteUdyaWRbeF1beV0gPT09IDApe1xuICAgICAgICAgICAgY2xpY2tlZENlbGwuY2xhc3NOYW1lID0gJ21pc3MnXG4gICAgICAgIH0gZWxzZSB7Y2xpY2tlZENlbGwuY2xhc3NOYW1lID0gJ2hpdCd9XG5cbiAgICAgICAgYWlBdHRhY2soKSAvL2Vuc3VyZSB0aGF0IGFpIG1ha2VzIGF0dGFjayBhZnRlciBodW1hbiBtYWtlcyBhdHRhY2tcblxuICAgICAgICAvL2NoZWNrIHRvIHNlZSBpZiB0aGVyZSBpcyBhIHdpbm5lclxuICAgICAgICBpZiAoYm9hcmQuYWxsU2hpcHNTdW5rKCkgfHwgZW5lbXlCb2FyZC5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICBjb25zdCBhaUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbXB1dGVyJylcbiAgICAgICAgICAgIGFpQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaHVtYW5BdHRhY2spKVxuICAgICAgICAgICAgY29uc3QgZ2FtZU92ZXJNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lRW5kJylcbiAgICAgICAgICAgIGdhbWVPdmVyTW9kYWwuc2hvd01vZGFsKClcbiAgICAgICAgICAgIC8vY2hlY2sgd2hvIHdvbiwgYW5kIGRpc3BsYXkgdGhlIGNvcnJlY3Qgd2lubmluZyBtZXNzYWdlXG4gICAgICAgICAgICBpZihib2FyZC5hbGxTaGlwc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgbGV0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKVxuICAgICAgICAgICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9ICdBSSBQbGF5ZXIgV2lucyEnXG4gICAgICAgICAgICB9ZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IHdpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5uZXInKVxuICAgICAgICAgICAgICAgIHdpbm5lci50ZXh0Q29udGVudCA9ICdZb3UgV2luISdcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBsYXlBZ2FpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5QWdhaW4nKVxuICAgICAgICAgICAgcGxheUFnYWluLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCgpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2hvd0F0dGFjayA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYWlCb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlcicpXG4gICAgICAgIGFpQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoaHVtYW5BdHRhY2spIClcbiAgICB9XG5cbiAgICBjb25zdCBhaUF0dGFjayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gY29tcHV0ZXJQbGF5ZXIuY29tcHV0ZXJQbGF5ZXJBdHRhY2soYm9hcmQpXG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRpbmF0ZXNcbiAgICAgICAgY29uc3QgbXlHcmlkID0gYm9hcmQuZ2V0R3JpZCgpXG4gICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuIC5jZWxsW2RhdGEtY29vcmRpbmF0ZT1cIlske3h9LCAke3l9XVwiXWApXG5cbiAgICAgICAgaWYgKCFjZWxsKSB7XG4gICAgICAgICAgICBjZWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmh1bWFuIC5zaGlwLWNlbGxbZGF0YS1jb29yZGluYXRlPVwiWyR7eH0sICR7eX1dXCJdYClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKG15R3JpZFt4XVt5XSA9PT0gMCl7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTmFtZSA9ICdtaXNzJ1xuICAgICAgICB9IGVsc2Uge2NlbGwuY2xhc3NOYW1lID0gJ2hpdCd9XG4gICAgfVxuXG5cbiAgICByZXR1cm4ge2NyZWF0ZUNlbGxzLCBpbnNlcnRTaGlwLCBjbG9zZU1vZGFsLCBzaG93U2hpcHMsIGFpQXR0YWNrLCBzaG93QXR0YWNrfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50cyIsImNvbnN0IHBsYXllckZhY3RvcnkgPSAocGxheWVyVHlwZSkgPT4ge1xuICAgIGxldCBpc015VHVybiA9IG51bGxcbiAgICBsZXQgbXlBdHRhY2tzID0gW11cblxuICAgIGNvbnN0IGh1bWFuUGxheWVyQXR0YWNrID0gKGNvb3JkaW5hdGVzLCBib2FyZCkgPT4ge1xuICAgICAgICBpZiAoYm9hcmQuaXNWYWxpZEF0dGFjayhjb29yZGluYXRlcykpe1xuICAgICAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcylcbiAgICAgICAgfVxuICAgICAgICBteUF0dGFja3MucHVzaChjb29yZGluYXRlcylcbiAgICAgICAgaXNNeVR1cm4gPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGdldFJhbmRvbUNvb3JkaW5hdGVzID0gKCkgPT4ge1xuICAgICAgICBsZXQgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICByZXR1cm4gW3gsIHldXG4gICAgfVxuXG4gICAgY29uc3QgY29tcHV0ZXJQbGF5ZXJBdHRhY2sgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoKVxuICAgICAgICB3aGlsZSghYm9hcmQuaXNWYWxpZEF0dGFjayhjb29yZGluYXRlcykpe1xuICAgICAgICAgICAgY29vcmRpbmF0ZXMgPSBnZXRSYW5kb21Db29yZGluYXRlcygpXG4gICAgICAgIH1cbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcylcbiAgICAgICAgbXlBdHRhY2tzLnB1c2goY29vcmRpbmF0ZXMpXG4gICAgICAgIGlzTXlUdXJuID0gZmFsc2VcbiAgICAgICAgcmV0dXJuIGNvb3JkaW5hdGVzXG4gICAgfVxuXG4gICAgY29uc3QgYXR0YWNrID0gcGxheWVyVHlwZSA9PT0gXCJodW1hblwiID8gaHVtYW5QbGF5ZXJBdHRhY2sgOiBjb21wdXRlclBsYXllckF0dGFjaztcblxuICAgIHJldHVybntodW1hblBsYXllckF0dGFjaywgY29tcHV0ZXJQbGF5ZXJBdHRhY2ssIGF0dGFjaywgaXNNeVR1cm4sXG4gICAgICAgICAgIG15QXR0YWNrc31cbn1cblxuZXhwb3J0IGRlZmF1bHQgcGxheWVyRmFjdG9yeVxuLy9tb2R1bGUuZXhwb3J0cyA9IHBsYXllckZhY3RvcnkiLCJpbXBvcnQgc2hpcEZhY3RvcnkgZnJvbSAnLi9zaGlwcydcblxuY29uc3QgZ2FtZWJvYXJkRmFjdG9yeSA9ICgpID0+IHtcbiAgICBjb25zdCBncmlkID0gW11cbiAgICBjb25zdCBzaGlwcyA9IFtdXG4gICAgY29uc3QgbWlzc2VkQXR0YWNrcyA9IFtdXG4gICAgY29uc3Qgc3VjY2Vzc2Z1bEF0dGFja3MgPSBbXVxuXG4gICAgY29uc3QgcG9wdWxhdGVHcmlkID0gKCkgPT4ge1xuICAgICAgICBsZXQgcm93cyA9IDEwXG4gICAgICAgIGxldCBjb2xzID0gMTBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHJvd3M7IGkrKyl7XG4gICAgICAgICAgICBncmlkW2ldID0gW107XG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY29sczsgaisrKXtcbiAgICAgICAgICAgICAgICBncmlkW2ldW2pdID0gbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGxhY2VTaGlwID0gKGNvb3JkaW5hdGVzLCBzaGlwTGVuZ3RoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXAgPSBzaGlwRmFjdG9yeShzaGlwTGVuZ3RoKVxuICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgICAgICAgXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaSA8IHNoaXBMZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICBpZihncmlkW3ggKyBpXVt5XSAhPT0gbnVsbCl7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcGxhY2Ugc2hpcCBvbiBhbiBvY2N1cGllZCBzcG90JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZ3JpZFt4ICsgaV1beV0gPSBzaGlwO1xuICAgICAgICB9XG5cbiAgICAgICAgc2hpcHMucHVzaChzaGlwKVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlUmFuZG9tU2hpcHMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHNoaXBMZW5ndGhzID0gWzUsIDQsIDMsIDMsIDJdO1xuICAgICAgICBcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNoaXBMZW5ndGhzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGxldCBwbGFjZWQgPSBmYWxzZVxuICAgICAgICAgICAgd2hpbGUoIXBsYWNlZCl7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgICAgICBsZXQgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKVxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcChbeCx5XSwgc2hpcExlbmd0aHNbaV0pXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlZCA9IHRydWVcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcil7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNoaXBzXG4gICAgICB9O1xuXG4gICAgY29uc3QgcmVjZWl2ZUF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBjb25zdCBbeCx5XSA9IGNvb3JkaW5hdGVzXG4gICAgICAgIGlmKGdyaWRbeF1beV0gPT09IG51bGwpe1xuICAgICAgICAgICAgbWlzc2VkQXR0YWNrcy5wdXNoKFt4LHldKVxuICAgICAgICAgICAgZ3JpZFt4XVt5XSA9IDAgLy8wIHdpbGwgaW5kaWNhdGUgYSBncmlkIHBvc2l0aW9uIHRoYXQgd2FzIGF0dGFja2VkIGFuZCBtaXNzZWRcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzaGlwID0gZ3JpZFt4XVt5XVxuICAgICAgICAgICAgc2hpcC5oaXQoKVxuICAgICAgICAgICAgc3VjY2Vzc2Z1bEF0dGFja3MucHVzaChbeCx5XSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGdldFNoaXBzID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHNcbiAgICB9XG5cbiAgICBjb25zdCBnZXRHcmlkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ3JpZFxuICAgIH1cblxuICAgIGNvbnN0IGFsbFNoaXBzU3VuayA9ICgpID0+IHtcbiAgICAgICAgcmV0dXJuIHNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLmlzU3VuaygpKVxuICAgIH1cblxuICAgIGNvbnN0IGlzVmFsaWRBdHRhY2sgPSAoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgbGV0IFt4LCB5XSA9IGNvb3JkaW5hdGVzO1xuICAgICAgICBmb3IgKGxldCBbYXR0YWNrWCwgYXR0YWNrWV0gb2Ygc3VjY2Vzc2Z1bEF0dGFja3MpIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tYID09PSB4ICYmIGF0dGFja1kgPT09IHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbYXR0YWNrWCwgYXR0YWNrWV0gb2YgbWlzc2VkQXR0YWNrcykge1xuICAgICAgICAgICAgaWYgKGF0dGFja1ggPT09IHggJiYgYXR0YWNrWSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvcHVsYXRlR3JpZCgpXG5cbiAgICByZXR1cm57cGxhY2VTaGlwLCBncmlkLCBzaGlwcywgcmVjZWl2ZUF0dGFjaywgcGxhY2VSYW5kb21TaGlwcywgXG4gICAgICAgIG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBhbGxTaGlwc1N1bmssIGlzVmFsaWRBdHRhY2ssIFxuICAgICAgICBnZXRTaGlwcywgZ2V0R3JpZH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBnYW1lYm9hcmRGYWN0b3J5XG4vL21vZHVsZS5leHBvcnRzID0gZ2FtZWJvYXJkRmFjdG9yeSIsImNvbnN0IHNoaXBGYWN0b3J5ID0gKGxlbmd0aCkgPT4ge1xuICAgIGxldCBoaXRzID0gMCBcbiAgICBsZXQgc3VuayA9IGZhbHNlXG4gICAgbGV0IHNoaXBMZW5ndGggPSBsZW5ndGhcblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgaGl0cyArPSAxXG4gICAgICAgIHJldHVybiBoaXRzXG4gICAgfVxuXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihoaXRzID09PSBzaGlwTGVuZ3RoKXtcbiAgICAgICAgICAgIHN1bmsgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN1bmtcbiAgICB9XG5cbiAgICByZXR1cm4ge2hpdCwgaXNTdW5rLCBoaXRzLCBzdW5rLCBzaGlwTGVuZ3RofVxufVxuZXhwb3J0IGRlZmF1bHQgc2hpcEZhY3Rvcnlcbi8vbW9kdWxlLmV4cG9ydHMgPSBzaGlwRmFjdG9yeSIsImltcG9ydCBldmVudHMgZnJvbSBcIi4vbW9kdWxlcy9kb21cIjtcbmltcG9ydCBwbGF5ZXJGYWN0b3J5IGZyb20gXCIuL21vZHVsZXMvcGxheWVyXCJcbmltcG9ydCBnYW1lYm9hcmRGYWN0b3J5IGZyb20gXCIuL21vZHVsZXMvZ2FtZWJvYXJkXCJcblxuY29uc3QgaHVtYW5QbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCdodW1hbicpIC8vY3JlYXRlIHBsYXllciBpbnN0YW5jZXNcbmNvbnN0IGFpUGxheWVyID0gcGxheWVyRmFjdG9yeSgnY29tcHV0ZXInKVxuXG5jb25zdCBodW1hbkdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKSAvL2NyZWF0ZSBib2FyZCBpbnN0YW5jZXMgXG5jb25zdCBhaUdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKVxuXG5jb25zdCBkb21FdmVudHMgPSBldmVudHMoaHVtYW5HYW1lYm9hcmQsIGh1bWFuUGxheWVyLCBhaUdhbWVib2FyZCwgYWlQbGF5ZXIgKVxuXG5kb21FdmVudHMuY3JlYXRlQ2VsbHMoJy5wcmUtYm9hcmQnKVxuZG9tRXZlbnRzLmNsb3NlTW9kYWwoKVxuZG9tRXZlbnRzLmNyZWF0ZUNlbGxzKCcuaHVtYW4nKVxuZG9tRXZlbnRzLmNyZWF0ZUNlbGxzKCcuY29tcHV0ZXInKVxuYWlHYW1lYm9hcmQucGxhY2VSYW5kb21TaGlwcygpXG5kb21FdmVudHMuaW5zZXJ0U2hpcCgpXG5kb21FdmVudHMuc2hvd0F0dGFjaygpXG5cblxuIl0sIm5hbWVzIjpbInBsYXllclR5cGUiLCJpc015VHVybiIsIm15QXR0YWNrcyIsImh1bWFuUGxheWVyQXR0YWNrIiwiY29vcmRpbmF0ZXMiLCJib2FyZCIsImlzVmFsaWRBdHRhY2siLCJyZWNlaXZlQXR0YWNrIiwicHVzaCIsImdldFJhbmRvbUNvb3JkaW5hdGVzIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiY29tcHV0ZXJQbGF5ZXJBdHRhY2siLCJhdHRhY2siLCJncmlkIiwic2hpcHMiLCJtaXNzZWRBdHRhY2tzIiwic3VjY2Vzc2Z1bEF0dGFja3MiLCJwbGFjZVNoaXAiLCJzaGlwTGVuZ3RoIiwic2hpcCIsImxlbmd0aCIsImhpdHMiLCJzdW5rIiwiaGl0IiwiaXNTdW5rIiwieCIsInkiLCJpIiwiRXJyb3IiLCJqIiwicG9wdWxhdGVHcmlkIiwicGxhY2VSYW5kb21TaGlwcyIsInNoaXBMZW5ndGhzIiwicGxhY2VkIiwiZXJyb3IiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsImF0dGFja1giLCJhdHRhY2tZIiwiZ2V0U2hpcHMiLCJnZXRHcmlkIiwiaHVtYW5QbGF5ZXIiLCJwbGF5ZXIiLCJhaVBsYXllciIsImh1bWFuR2FtZWJvYXJkIiwiZ2FtZWJvYXJkIiwiYWlHYW1lYm9hcmQiLCJkb21FdmVudHMiLCJlbmVteUJvYXJkIiwiY29tcHV0ZXJQbGF5ZXIiLCJ0aGlzU2hpcCIsInJldHJpZXZlQ29vcmRpbmF0ZXMiLCJldmVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsIkpTT04iLCJwYXJzZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTmFtZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzaG93U2hpcHMiLCJwcmVCb2FyZE5vZGVMaXN0IiwicXVlcnlTZWxlY3RvckFsbCIsImh1bWFuQm9hcmROb2RlTGlzdCIsInNoaXBDZWxscyIsIm5vZGUiLCJjb29yZGluYXRlIiwiaW5jbHVkZXMiLCJodW1hbkF0dGFjayIsImNsaWNrZWRDZWxsIiwiYWlBdHRhY2siLCJzaG93TW9kYWwiLCJ0ZXh0Q29udGVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsIm15R3JpZCIsImNlbGwiLCJjcmVhdGVDZWxscyIsImNvbnRhaW5lciIsInN0eWxlIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImdyaWRUZW1wbGF0ZVJvd3MiLCJkaW1lbnNpb25zIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImluc2VydFNoaXAiLCJjbG9zZU1vZGFsIiwiYmVnaW4iLCJ3ZWxjb21lU2NyZWVuIiwiY2xvc2UiLCJzaG93QXR0YWNrIl0sInNvdXJjZVJvb3QiOiIifQ==