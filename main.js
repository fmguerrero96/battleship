(()=>{"use strict";const e=e=>{let t=null,r=[];const c=(e,c)=>{c.isValidAttack(e)&&c.receiveAttack(e),r.push(e),t=!1},o=()=>[Math.floor(10*Math.random()),Math.floor(10*Math.random())],l=e=>{const c=o();for(;!e.isValidAttack(c);)c=o;e.receiveAttack(c),r.push(c),t=!1};return{humanPlayerAttack:c,computerPlayerAttack:l,attack:"human"===e?c:l,isMyTurn:t,myAttacks:r}},t=()=>{const e=[],t=[],r=[],c=[];return(()=>{for(let t=0;t<10;t++){e[t]=[];for(let r=0;r<10;r++)e[t][r]=null}})(),{placeShip:(r,c)=>{const o=(e=>{let t=0,r=!1,c=e;return{hit:()=>(t+=1,t),isSunk:()=>(t===c&&(r=!0),r),hits:t,sunk:r,shipLength:c}})(c),[l,n]=r;for(let t=0;t<c;t++)if(null!==e[l+t][n])throw new Error("Cannot place ship on an occupied spot");for(let t=0;t<c;t++)e[l+t][n]=o;t.push(o)},grid:e,ships:t,receiveAttack:t=>{const[o,l]=t;null===e[o][l]?(r.push([o,l]),e[o][l]=0):(e[o][l].hit(),c.push([o,l]))},missedAttacks:r,successfulAttacks:c,allShipsSunk:()=>t.every((e=>e.isSunk())),isValidAttack:e=>{const[t,o]=e;for(const[e,r]of c)if(e===t&&r===o)return!1;for(const[e,c]of r)if(e===t&&c===o)return!1;return!0}}},r=(e("human"),e("computer"),t()),c=(t(),(e=>{const t=[5,4,3,3,2];let r=0;const c=o=>{const l=o.target.getAttribute("data-coordinate"),[n,s]=JSON.parse(l);for(let e=0;e<t[r];e++)document.querySelector(`.cell[data-coordinate="[${n+e}, ${s}]"]`).className="ship-cell";e.placeShip([n,s],t[r]),r++,r>=t.length&&document.querySelector(".pre-board").removeEventListener("click",c)};return{createCells:e=>{const t=document.querySelector(e);t.style.gridTemplateColumns="repeat(10, 1fr)",t.style.gridTemplateRows="repeat(10, 1fr)";for(let e=0;e<100;e++){let r=document.createElement("div");r.className="cell";const c=e%10,o=Math.floor(e/10);r.setAttribute("data-coordinate",`[${c}, ${o}]`),t.insertAdjacentElement("beforeend",r)}},insertShip:()=>{document.querySelector(".pre-board").addEventListener("click",c)},closeModal:()=>{const e=document.querySelector(".begin"),t=document.querySelector(".welcomeScreen");e.addEventListener("click",(()=>{t.close()}))}}})(r));c.createCells(".pre-board"),c.createCells(".human"),c.createCells(".computer"),c.insertShip(),c.closeModal()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUdBLEVBQUlzQixFQUFZQyxHQUFXdkIsSUFDeEI4QixTQUFTQyxjQUFjLDJCQUEyQnBCLEVBQUVYLE1BQU1ZLFFBQ2hFb0IsVUFBWSxZQUd6QjlDLEVBQU1pQixVQUFVLENBQUNRLEVBQUdDLEdBQUdVLEVBQVlDLElBQ25DQSxJQUVJQSxHQUFZRCxFQUFZaEIsUUFDUHdCLFNBQVNDLGNBQWMsY0FDL0JFLG9CQUFvQixRQUFTVCxFQUN4QyxFQWdCTixNQUFPLENBQUNVLFlBakRhQyxJQUNqQixNQUNNakQsRUFBUTRDLFNBQVNDLGNBQWNJLEdBQ3JDakQsRUFBTWtELE1BQU1DLG9CQUFzQixrQkFDbENuRCxFQUFNa0QsTUFBTUUsaUJBQW1CLGtCQUcvQixJQUFLLElBQUl0QyxFQUFJLEVBQUdBLEVBREZ1QyxJQUNldkMsSUFBSSxDQUM3QixJQUFJd0MsRUFBT1YsU0FBU1csY0FBYyxPQUNsQ0QsRUFBS1IsVUFBWSxPQUNqQixNQUFNckIsRUFBSVgsRUFUSyxHQVVUWSxFQUFJckIsS0FBS0MsTUFBTVEsRUFWTixJQVdmd0MsRUFBS0UsYUFBYSxrQkFBbUIsSUFBSS9CLE1BQU1DLE1BQy9DMUIsRUFBTXlELHNCQUFzQixZQUFhSCxFQUM3QyxHQW1DaUJJLFdBYkYsS0FDRWQsU0FBU0MsY0FBYyxjQUMvQmMsaUJBQWlCLFFBQVMsRUFBcUIsRUFXM0JDLFdBUmQsS0FDZixNQUFNQyxFQUFRakIsU0FBU0MsY0FBYyxVQUMvQmlCLEVBQWdCbEIsU0FBU0MsY0FBYyxrQkFDN0NnQixFQUFNRixpQkFBaUIsU0FBUyxLQUM1QkcsRUFBY0MsT0FBTSxHQUN2QixFQUlSLEVJNUNpQixDQUFPL0IsSUFFekJHLEVBQVVhLFlBQVksY0FDdEJiLEVBQVVhLFlBQVksVUFDdEJiLEVBQVVhLFlBQVksYUFFdEJiLEVBQVV1QixhQUNWdkIsRUFBVXlCLFkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBldmVudHMgPSAoKGJvYXJkKSA9PiB7XG4gICAgY29uc3Qgc2hpcExlbmd0aHMgPSBbNSwgNCwgMywgMywgMl07XG4gICAgbGV0IHRoaXNTaGlwID0gMFxuXG4gICAgY29uc3QgY3JlYXRlQ2VsbHMgPSAoY29udGFpbmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGRpbWVuc2lvbnMgPSAxMFxuICAgICAgICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY29udGFpbmVyKVxuICAgICAgICBib2FyZC5zdHlsZS5ncmlkVGVtcGxhdGVDb2x1bW5zID0gYHJlcGVhdCgke2RpbWVuc2lvbnN9LCAxZnIpYDtcbiAgICAgICAgYm9hcmQuc3R5bGUuZ3JpZFRlbXBsYXRlUm93cyA9IGByZXBlYXQoJHtkaW1lbnNpb25zfSwgMWZyKWA7XG4gICAgXG4gICAgICAgIGxldCBudW1EaXZzID0gZGltZW5zaW9ucyAqIGRpbWVuc2lvbnM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGl2czsgaSsrKXtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7IFxuICAgICAgICAgICAgY2VsbC5jbGFzc05hbWUgPSAnY2VsbCdcbiAgICAgICAgICAgIGNvbnN0IHggPSBpICUgZGltZW5zaW9uczsgLy8gQ2FsY3VsYXRlIHggY29vcmRpbmF0ZVxuICAgICAgICAgICAgY29uc3QgeSA9IE1hdGguZmxvb3IoaSAvIGRpbWVuc2lvbnMpOyAvLyBDYWxjdWxhdGUgeSBjb29yZGluYXRlXG4gICAgICAgICAgICBjZWxsLnNldEF0dHJpYnV0ZSgnZGF0YS1jb29yZGluYXRlJywgYFske3h9LCAke3l9XWApXG4gICAgICAgICAgICBib2FyZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgY2VsbClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJldHJpZXZlQ29vcmRpbmF0ZXMgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgY2xpY2tlZENlbGwgPSBldmVudC50YXJnZXRcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZXMgPSBjbGlja2VkQ2VsbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtY29vcmRpbmF0ZScpXG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IEpTT04ucGFyc2UoY29vcmRpbmF0ZXMpXG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwTGVuZ3Roc1t0aGlzU2hpcF07IGkrKyl7XG4gICAgICAgICAgICBsZXQgc2hpcENlbGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuY2VsbFtkYXRhLWNvb3JkaW5hdGU9XCJbJHt4K2l9LCAke3l9XVwiXWApXG4gICAgICAgICAgICBzaGlwQ2VsbC5jbGFzc05hbWUgPSAnc2hpcC1jZWxsJ1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBib2FyZC5wbGFjZVNoaXAoW3gsIHldLHNoaXBMZW5ndGhzW3RoaXNTaGlwXSlcbiAgICAgICAgdGhpc1NoaXArK1xuXG4gICAgICAgIGlmICh0aGlzU2hpcCA+PSBzaGlwTGVuZ3Rocy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByZS1ib2FyZCcpO1xuICAgICAgICAgICAgcHJlQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZXRyaWV2ZUNvb3JkaW5hdGVzKTtcbiAgICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgaW5zZXJ0U2hpcCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgcHJlQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlLWJvYXJkJylcbiAgICAgICAgcHJlQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAocmV0cmlldmVDb29yZGluYXRlcykpXG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgYmVnaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmVnaW4nKVxuICAgICAgICBjb25zdCB3ZWxjb21lU2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlbGNvbWVTY3JlZW4nKVxuICAgICAgICBiZWdpbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHdlbGNvbWVTY3JlZW4uY2xvc2UoKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7Y3JlYXRlQ2VsbHMsIGluc2VydFNoaXAsIGNsb3NlTW9kYWx9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzIiwiY29uc3QgcGxheWVyRmFjdG9yeSA9IChwbGF5ZXJUeXBlKSA9PiB7XG4gICAgbGV0IGlzTXlUdXJuID0gbnVsbFxuICAgIGxldCBteUF0dGFja3MgPSBbXVxuXG4gICAgY29uc3QgaHVtYW5QbGF5ZXJBdHRhY2sgPSAoY29vcmRpbmF0ZXMsIGJvYXJkKSA9PiB7XG4gICAgICAgIGlmIChib2FyZC5pc1ZhbGlkQXR0YWNrKGNvb3JkaW5hdGVzKSl7XG4gICAgICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgICAgICB9XG4gICAgICAgIG15QXR0YWNrcy5wdXNoKGNvb3JkaW5hdGVzKVxuICAgICAgICBpc015VHVybiA9IGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0UmFuZG9tQ29vcmRpbmF0ZXMgPSAoKSA9PiB7XG4gICAgICAgIGxldCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIGxldCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgIHJldHVybiBbeCwgeV1cbiAgICB9XG5cbiAgICBjb25zdCBjb21wdXRlclBsYXllckF0dGFjayA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlcyA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKClcbiAgICAgICAgd2hpbGUoIWJvYXJkLmlzVmFsaWRBdHRhY2soY29vcmRpbmF0ZXMpKXtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXNcbiAgICAgICAgfVxuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGVzKVxuICAgICAgICBteUF0dGFja3MucHVzaChjb29yZGluYXRlcylcbiAgICAgICAgaXNNeVR1cm4gPSBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGF0dGFjayA9IHBsYXllclR5cGUgPT09IFwiaHVtYW5cIiA/IGh1bWFuUGxheWVyQXR0YWNrIDogY29tcHV0ZXJQbGF5ZXJBdHRhY2s7XG5cbiAgICByZXR1cm57aHVtYW5QbGF5ZXJBdHRhY2ssIGNvbXB1dGVyUGxheWVyQXR0YWNrLCBhdHRhY2ssIGlzTXlUdXJuLFxuICAgICAgICAgICBteUF0dGFja3N9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHBsYXllckZhY3Rvcnlcbi8vbW9kdWxlLmV4cG9ydHMgPSBwbGF5ZXJGYWN0b3J5IiwiaW1wb3J0IHNoaXBGYWN0b3J5IGZyb20gJy4vc2hpcHMnXG5cbmNvbnN0IGdhbWVib2FyZEZhY3RvcnkgPSAoKSA9PiB7XG4gICAgY29uc3QgZ3JpZCA9IFtdXG4gICAgY29uc3Qgc2hpcHMgPSBbXVxuICAgIGNvbnN0IG1pc3NlZEF0dGFja3MgPSBbXVxuICAgIGNvbnN0IHN1Y2Nlc3NmdWxBdHRhY2tzID0gW11cblxuICAgIGNvbnN0IHBvcHVsYXRlR3JpZCA9ICgpID0+IHtcbiAgICAgICAgbGV0IHJvd3MgPSAxMFxuICAgICAgICBsZXQgY29scyA9IDEwXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspe1xuICAgICAgICAgICAgZ3JpZFtpXSA9IFtdO1xuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGNvbHM7IGorKyl7XG4gICAgICAgICAgICAgICAgZ3JpZFtpXVtqXSA9IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBsYWNlU2hpcCA9IChjb29yZGluYXRlcywgc2hpcExlbmd0aCkgPT4ge1xuICAgICAgICBjb25zdCBzaGlwID0gc2hpcEZhY3Rvcnkoc2hpcExlbmd0aClcbiAgICAgICAgY29uc3QgW3gsIHldID0gY29vcmRpbmF0ZXM7XG4gICAgICAgIFxuICAgICAgICBmb3IobGV0IGkgPTA7IGkgPCBzaGlwTGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgaWYoZ3JpZFt4ICsgaV1beV0gIT09IG51bGwpe1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHBsYWNlIHNoaXAgb24gYW4gb2NjdXBpZWQgc3BvdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2hpcExlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIGdyaWRbeCArIGldW3ldID0gc2hpcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNoaXBzLnB1c2goc2hpcClcbiAgICB9XG5cbiAgICBjb25zdCByZWNlaXZlQXR0YWNrID0gKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGNvbnN0IFt4LHldID0gY29vcmRpbmF0ZXNcbiAgICAgICAgaWYoZ3JpZFt4XVt5XSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBtaXNzZWRBdHRhY2tzLnB1c2goW3gseV0pXG4gICAgICAgICAgICBncmlkW3hdW3ldID0gMCAvLzAgd2lsbCBpbmRpY2F0ZSBhIGdyaWQgcG9zaXRpb24gdGhhdCB3YXMgYXR0YWNrZWQgYW5kIG1pc3NlZFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSBncmlkW3hdW3ldXG4gICAgICAgICAgICBzaGlwLmhpdCgpXG4gICAgICAgICAgICBzdWNjZXNzZnVsQXR0YWNrcy5wdXNoKFt4LHldKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYWxsU2hpcHNTdW5rID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuaXNTdW5rKCkpXG4gICAgfVxuXG4gICAgY29uc3QgaXNWYWxpZEF0dGFjayA9IChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSBjb29yZGluYXRlcztcbiAgICAgICAgZm9yIChjb25zdCBbYXR0YWNrWCwgYXR0YWNrWV0gb2Ygc3VjY2Vzc2Z1bEF0dGFja3MpIHtcbiAgICAgICAgICAgIGlmIChhdHRhY2tYID09PSB4ICYmIGF0dGFja1kgPT09IHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBbYXR0YWNrWCwgYXR0YWNrWV0gb2YgbWlzc2VkQXR0YWNrcykge1xuICAgICAgICAgICAgaWYgKGF0dGFja1ggPT09IHggJiYgYXR0YWNrWSA9PT0geSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHBvcHVsYXRlR3JpZCgpXG5cbiAgICByZXR1cm57cGxhY2VTaGlwLCBncmlkLCBzaGlwcywgcmVjZWl2ZUF0dGFjaywgXG4gICAgICAgIG1pc3NlZEF0dGFja3MsIHN1Y2Nlc3NmdWxBdHRhY2tzLCBhbGxTaGlwc1N1bmssIGlzVmFsaWRBdHRhY2t9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2FtZWJvYXJkRmFjdG9yeVxuLy9tb2R1bGUuZXhwb3J0cyA9IGdhbWVib2FyZEZhY3RvcnkiLCJjb25zdCBzaGlwRmFjdG9yeSA9IChsZW5ndGgpID0+IHtcbiAgICBsZXQgaGl0cyA9IDAgXG4gICAgbGV0IHN1bmsgPSBmYWxzZVxuICAgIGxldCBzaGlwTGVuZ3RoID0gbGVuZ3RoXG5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIGhpdHMgKz0gMVxuICAgICAgICByZXR1cm4gaGl0c1xuICAgIH1cblxuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoaGl0cyA9PT0gc2hpcExlbmd0aCl7XG4gICAgICAgICAgICBzdW5rID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdW5rXG4gICAgfVxuXG4gICAgcmV0dXJuIHtoaXQsIGlzU3VuaywgaGl0cywgc3Vuaywgc2hpcExlbmd0aH1cbn1cbmV4cG9ydCBkZWZhdWx0IHNoaXBGYWN0b3J5XG4vL21vZHVsZS5leHBvcnRzID0gc2hpcEZhY3RvcnkiLCJpbXBvcnQgZXZlbnRzIGZyb20gXCIuL21vZHVsZXMvZG9tXCI7XG5pbXBvcnQgcGxheWVyRmFjdG9yeSBmcm9tIFwiLi9tb2R1bGVzL3BsYXllclwiXG5pbXBvcnQgZ2FtZWJvYXJkRmFjdG9yeSBmcm9tIFwiLi9tb2R1bGVzL2dhbWVib2FyZFwiXG5cbmNvbnN0IGh1bWFuUGxheWVyID0gcGxheWVyRmFjdG9yeSgnaHVtYW4nKVxuY29uc3QgYWlQbGF5ZXIgPSBwbGF5ZXJGYWN0b3J5KCdjb21wdXRlcicpXG5cbmNvbnN0IGh1bWFuR2FtZWJvYXJkID0gZ2FtZWJvYXJkRmFjdG9yeSgpXG5jb25zdCBhaUdhbWVib2FyZCA9IGdhbWVib2FyZEZhY3RvcnkoKVxuXG5jb25zdCBkb21FdmVudHMgPSBldmVudHMoaHVtYW5HYW1lYm9hcmQpXG5cbmRvbUV2ZW50cy5jcmVhdGVDZWxscygnLnByZS1ib2FyZCcpXG5kb21FdmVudHMuY3JlYXRlQ2VsbHMoJy5odW1hbicpXG5kb21FdmVudHMuY3JlYXRlQ2VsbHMoJy5jb21wdXRlcicpXG5cbmRvbUV2ZW50cy5pbnNlcnRTaGlwKClcbmRvbUV2ZW50cy5jbG9zZU1vZGFsKCkiXSwibmFtZXMiOlsicGxheWVyVHlwZSIsImlzTXlUdXJuIiwibXlBdHRhY2tzIiwiaHVtYW5QbGF5ZXJBdHRhY2siLCJjb29yZGluYXRlcyIsImJvYXJkIiwiaXNWYWxpZEF0dGFjayIsInJlY2VpdmVBdHRhY2siLCJwdXNoIiwiZ2V0UmFuZG9tQ29vcmRpbmF0ZXMiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJjb21wdXRlclBsYXllckF0dGFjayIsImF0dGFjayIsImdyaWQiLCJzaGlwcyIsIm1pc3NlZEF0dGFja3MiLCJzdWNjZXNzZnVsQXR0YWNrcyIsImkiLCJqIiwicG9wdWxhdGVHcmlkIiwicGxhY2VTaGlwIiwic2hpcExlbmd0aCIsInNoaXAiLCJsZW5ndGgiLCJoaXRzIiwic3VuayIsImhpdCIsImlzU3VuayIsIngiLCJ5IiwiRXJyb3IiLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsImF0dGFja1giLCJhdHRhY2tZIiwiaHVtYW5HYW1lYm9hcmQiLCJwbGF5ZXIiLCJnYW1lYm9hcmQiLCJkb21FdmVudHMiLCJzaGlwTGVuZ3RocyIsInRoaXNTaGlwIiwicmV0cmlldmVDb29yZGluYXRlcyIsImV2ZW50IiwidGFyZ2V0IiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNyZWF0ZUNlbGxzIiwiY29udGFpbmVyIiwic3R5bGUiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZ3JpZFRlbXBsYXRlUm93cyIsImRpbWVuc2lvbnMiLCJjZWxsIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZSIsImluc2VydEFkamFjZW50RWxlbWVudCIsImluc2VydFNoaXAiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xvc2VNb2RhbCIsImJlZ2luIiwid2VsY29tZVNjcmVlbiIsImNsb3NlIl0sInNvdXJjZVJvb3QiOiIifQ==