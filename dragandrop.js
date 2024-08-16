const draggable = document.getElementById("draggable");
const dropzone = document.getElementById("dropzone");
draggable.addEventListener("dragstart", function(event) {
  setTimeout(() => {
    this.style.display = "none";
  },0);
})
dropzone.addEventListener("dragover", function (e)  {
  e.preventDefault();
})
dropzone.addEventListener("drop", () => {
  draggable.style.display = "block"; //show

  dropzone.appendChild(draggable); 
  this.append(draggable); 

})
