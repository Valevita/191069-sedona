(function () {
  "use strict";
  var link = document.querySelector(".search");
  var popup = document.querySelector(".hotel-search");

  link.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.toggle("hotel-search-show");
  });
}());
