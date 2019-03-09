//switch front page from hook to about
function switchFront () {
  //find the target
  let mainWindowArr = document.querySelectorAll("#mainWindow");
  //change the items so one will appear and the other one go
  mainWindowArr.forEach(function(elem, index){
    elem.classList.toggle("display--hidden");
  })
}

document.querySelectorAll(".chevron").forEach(function(elem, index) {
  elem.addEventListener("click", switchFront);  
})

