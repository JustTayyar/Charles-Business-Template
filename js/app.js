function expandMenu(element) {
  let menu = element.querySelector(".dropdown-content");
  menu.style.maxHeight = "300px";
}

function collapseMenu(element) {
  let menu = element.querySelector(".dropdown-content");
  menu.style.maxHeight = "0";
}

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    animateOut: "slideOutDown",
    animateIn: "slideInUp",
    nav: false,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      625: {
        items: 2, 
      },
      990: {
        items: 3, 
      }
    },
  });
});
