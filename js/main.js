let draggedItem;

function allowDrop(event) {
  event.preventDefault();
}

function drag(event) {
  this.draggedItem = event.target;
  console.log("draggedItem", this.draggedItem);
  event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
  if (event?.currentTarget?.childElementCount == 0) {
    //debugger
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    console.log("event", event);
    event.target.appendChild(document.getElementById(data));

    const audioId = this.draggedItem.id;
    const audioElement = document.getElementById(audioId+"-audio");
    console.log("audioelement", audioElement)
    if (audioElement) {
      if(event?.target?.id == 'drop-zone-element'){
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }
  }
}
