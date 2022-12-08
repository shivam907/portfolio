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

    // console.log($nav.height(), $(this).scrollTop() > $nav.height() / 3);
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height() / 3);
  });
});
$(function () {
  $(document).scroll(function () {
    const $mouse = $(".scroll-downs");
    $mouse.toggleClass("op", $(this).scrollTop() > 20).fadeOut();
    // console.log("hlo m");
  });
});

let bar = document.querySelector(".bar");

bar.addEventListener("mouseover", startProgress);

function startProgress() {
  // this.setAttribute('disabled', true);
  let context = this;
  let atPercent = 10;
  let br = document.querySelector(".bar");

  let inter = setInterval(function () {
    if (atPercent >= 70) {
      // context.removeAttribute('disabled');
      clearInterval(inter);
    }
    br.style.width = atPercent + "%";
    atPercent++;
  }, 20);
}
