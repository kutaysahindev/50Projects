"use strict";

const panels = document.querySelectorAll(".panel");
const removeActiveClasses = function () {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
};
panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

// for (let i = 0; i < 5; i++) {
//   panel[i].addEventListener("click", function () {
//     panel[i].classList.toggle("active");
//   });
// }
