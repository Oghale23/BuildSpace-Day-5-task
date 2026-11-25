// Task 01
const heading = document.querySelector("h1");
heading.textContent = "Welcome to Harmony Bakery!";
// select paragragh and change the content
const paragraph = document.querySelector("p");
paragraph.textContent =
  "You get freshly baked bread, chin-chin, cakes and other pastries from Harmony Bakery.";
const image = document.querySelector("img");
image.src = "././bakery.png";
heading.classList.add("highlight");
const list = document.querySelector("li");
list.textContent = "Milky Doughnut";

// Task 2
// Select items by classname, id, or css selector
const button = document.getElementById("btn");
const intro = document.getElementsByClassName("intro");
const selector = document.querySelector(".container");
// Loop through eaach selected items
const multipleElement = document.querySelectorAll("li");
multipleElement.forEach(function (item) {
  console.log(item);
});
// Loop through each elements and change their text
// multipleElement.forEach(function (item) {
//   console.log(item);
//   item.textContent = "Vanilla Cookies";
// });
