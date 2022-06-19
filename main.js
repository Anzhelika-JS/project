// const stekloSize = 200;

// function magnify(id, zoom){
//   const el = document.getElementById(id);
//   const copy = el.cloneNode(true);
//   const steklo = document.createElement("div");
   
//   steklo.setAttribute("id","steklo")  
//   steklo.style.width = stekloSize + "px";
//   steklo.style.height = stekloSize + "px";
   
//   el.appendChild(steklo);
//   el.getBoundingClientRect();
//   copy.style.zoom = zoom;
//   steklo.appendChild(copy);
   
//   copy.style.width = (el.offsetWidth * zoom) + "px";
//   copy.style.heigth = (el.offsetHeight * zoom) + "px";
//   copy.style.position = "absolute";
   
//   el.addEventListener("mousemove", (ev) => {
//   ev.preventDefault();
//   ev.stopPropagation();
//   const pos = getCursorPos(ev);
//   steklo.style.left = - (stekloSize/2) + pos.x + "px";
//   steklo.style.top = - (stekloSize/2) + pos.y + "px";
//   copy.style.left = - (pos.x - el.offsetLeft) + (stekloSize/zoom)*0.5 + "px";
//   copy.style.top = - (pos.y - el.offsetTop) + (stekloSize/zoom)*0.5 + "px";
//   })
// }

//   function getCursorPos(e) {
//   var x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
//   var y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
//   return {x : x , y : y};
//   }

// magnify("advance", 4)