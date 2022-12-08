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
let i = 0;
const sc = function () {
  $(document).scroll(function () {
    const $tech = $(".tech");
    // console.log($tech.height());
    // console.log($(this).scrollTop());
    if ($(this).scrollTop() > 300 && i == 0) {
      i += 1;
      addProgressAnimation();
    }
  });
};
sc();

function startProgress(maxWidth, elem) {
  // this.setAttribute('disabled', true);
  let context = this;
  let atPercent = 0;
  let br = elem;

  let inter = setInterval(function () {
    if (atPercent >= maxWidth) {
      // context.removeAttribute('disabled');
      clearInterval(inter);
    }
    br.style.width = atPercent + "%";
    atPercent++;
  }, 20);
}

// let html = document.querySelector(".bar");
let html = document.querySelector(".html-bar");
let css = document.querySelector(".css-bar");
let bootstrap = document.querySelector(".bootstrap-bar");
let js = document.querySelector(".js-bar");
let nodejs = document.querySelector(".nodejs-bar");
let mongodb = document.querySelector(".mongodb-bar");
let reactjs = document.querySelector(".reactjs-bar");
let flask = document.querySelector(".flask-bar");

html.addEventListener("mouseenter", async function () {
  startProgress(90, document.querySelector(".html"));
});
css.addEventListener("mouseenter", function () {
  startProgress(80, document.querySelector(".css"));
});
bootstrap.addEventListener("mouseenter", function () {
  startProgress(50, document.querySelector(".bootstrap"));
});
js.addEventListener("mouseenter", function () {
  startProgress(70, document.querySelector(".js"));
});
nodejs.addEventListener("mouseenter", function () {
  startProgress(80, document.querySelector(".nodejs"));
});
mongodb.addEventListener("mouseenter", function () {
  startProgress(40, document.querySelector(".mongodb"));
});
reactjs.addEventListener("mouseenter", function () {
  startProgress(20, document.querySelector(".reactjs"));
});
flask.addEventListener("mouseenter", function () {
  startProgress(60, document.querySelector(".flask"));
});

const addProgressAnimation = () => {
  startProgress(90, document.querySelector(".html"));
  startProgress(80, document.querySelector(".css"));
  startProgress(50, document.querySelector(".bootstrap"));
  startProgress(70, document.querySelector(".js"));
  startProgress(80, document.querySelector(".nodejs"));
  startProgress(40, document.querySelector(".mongodb"));
  startProgress(20, document.querySelector(".reactjs"));
  startProgress(60, document.querySelector(".flask"));
};
