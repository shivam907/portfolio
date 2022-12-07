const typed = new Typed("#type", {
  strings: [
    "Software Developer",
    "Frontend Developer",
    "Web Designer",
    "Backend Developer",
    "App Developer",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  //   fadeOut: true,
});

$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    const mouse = document.querySelector(".scroll-downs");
    mouse.classList.toggle("op");
    console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
  });
});

console.log("On Load");
const loader = () => {
  $(window).on("load", function () {
    setTimeout(() => {
      $(".loading").fadeIn(500, () => {
        setTimeout(() => {
          $(".loading").fadeOut(500);
        }, 300);
      });
    }, 300);
  });
};
loader();
