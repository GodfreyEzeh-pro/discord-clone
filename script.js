// document.addEventListener("DOMContentLoaded", function() {
//   var navToggle = document.getElementById("nav-toggle");
//   var mainNav = document.getElementById("main-nav");

//   navToggle.addEventListener("click", function() {
//     if (mainNav.style.display === "block") {
//       mainNav.style.display = "none";
//       navToggle.textContent = "Show Navigation";
//     } else {
//       mainNav.style.display = "block";
//       navToggle.textContent = "Hide Navigation";
//     }
//   });
// });

document.addEventListener("DOMContentLoaded", function() {
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");

  navToggle.addEventListener("click", function() {
    if (mainNav.style.display === "block") {
      mainNav.style.display = "none";
      navToggle.textContent = "\u2630"; // Change button text to hamburger icon
    } else {
      mainNav.style.display = "block";
      navToggle.textContent = "\u2715"; // Change button text to close icon
    }
  });
});

