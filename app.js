//switch front page from home to about
function switchFront () {
  document.querySelectorAll("#mainWindow").forEach(function(elem, index){
    elem.classList.toggle("display--hidden");
  })
  document.querySelector("#about").textContent === "home"? document.querySelector("#about").textContent = "about" : document.querySelector("#about").textContent = "home";
}

document.querySelector("#about").addEventListener("click", switchFront);

//switch between FAQs and links
function switchLinks () {
  document.querySelectorAll("#subWindow").forEach(function(elem, index){
    elem.classList.toggle("display--hidden");
  })
  document.querySelector("#about").textContent === "FAQs"? document.querySelector("#links").textContent = "FAQs" : document.querySelector("#about").textContent = "home";
}

document.querySelector("#faqs").addEventListener("click", switchLinks);

