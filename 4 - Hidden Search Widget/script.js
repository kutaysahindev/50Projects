"use strict";

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

// Old Codes
// const btn = document.querySelector(".fa-search");
// const formInput = document.querySelector(".formInput");
// btn.addEventListener("focus", () => {
//   formInput.classList.toggle("hidden");
// });
