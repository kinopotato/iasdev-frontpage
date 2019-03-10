// // //switch front page from home to about
// // function switchFront () {
// //   document.querySelectorAll("#mainWindow").forEach(function(elem, index){
// //     elem.classList.toggle("display--hidden");
// //   })
// //   document.querySelector("#about").textContent === "home"? document.querySelector("#about").textContent = "about" : document.querySelector("#about").textContent = "home";
// // }

// // document.querySelector("#about").addEventListener("click", switchFront);

// // //switch between FAQs and links
// // function switchLinks () {
// //   document.querySelectorAll("#subWindow").forEach(function(elem, index){
// //     elem.classList.toggle("display--hidden");
// //   })
// //   document.querySelector("#about").textContent === "FAQs"? document.querySelector("#links").textContent = "FAQs" : document.querySelector("#about").textContent = "home";
// // }

// // document.querySelector("#faqs").addEventListener("click", switchLinks);

// //switch main display element via clicking nav buttons

// function switchFront (id) {
//   let sectionArr = document.querySelectorAll(".section");
//   let aboutBtn = document.querySelector("#aboutBtn");
//   let faqsBtn = document.querySelector("#faqsBtn");
  
//   sectionArr.forEach(function(elem, index){
//     elem.classList.add("display--hidden")
//   });
  
//   if (id === "about"){
//     if (aboutBtn.textContent === "about"){
//       document.querySelector("#about").classList.remove("display--hidden");
//       aboutBtn.textContent = "home";
//     } else {
//       document.querySelector("#home").classList.remove("display--hidden");
//       aboutBtn.textContent = "about";
//     }
//   } 

//   if (id === "faqs"){
//     if(faqsBtn.textContent === "FAQs"){
//       document.querySelector("#faqs").classList.remove("display--hidden");
//       faqsBtn.textContent = "links";
//     } else {
//       document.querySelector("#links").classList.remove("display--hidden");
//       faqsBtn.textContent = "FAQs";
//     }
//   }
//   }

// document.querySelector("#aboutBtn").addEventListener("click", () => switchFront("about"));
// document.querySelector("#faqsBtn").addEventListener("click", () => switchFront("faqs"));