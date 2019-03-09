//switch front page from hook to about
function switchFront () {
  //find the target
  let mainWindowArr = document.querySelectorAll("#mainWindow");
  //change the items so one will appear and the other one go
  mainWindowArr.forEach(function(elem, index){
    elem.classList.toggle("display--hidden");
  })
  document.querySelector("#about").textContent === "home"? document.querySelector("#about").textContent = "about" : document.querySelector("#about").textContent = "home";
}

document.querySelector("#about").addEventListener("click", switchFront);

