var orderAmount = 1;

$(document).ready(function () {
  $(".container1 .img-thumb").click(function () {
    $(".container1 .img-thumb").removeClass("active");
    $(this).addClass("active");

    var image = $(this).children().attr("src");
    $("#active-image").attr("src", image);
  });

  $("#active-image").click(function () {
    $(".overlay-container").addClass("show");
  });
  $(".close-overlay").click(function () {
    $(".overlay-container").removeClass("show");
  });

  $(".overlay-img-thumb").click(function () {
    $(".overlay-img-thumb").removeClass("active");
    $(this).addClass("active");

    var image = $(this).children().attr("src");
    $("#overlay-active-image").attr("src", image);
  });

  $(".overlay-next-container").click(function () {
    var currentImg = $(".overlay-img-thumb.active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active");
      nextImg.addClass("active");
    }

    var image = $(".overlay-img-thumb.active .thumbnail").attr("src");
    $("#overlay-active-image").attr("src", image);
  });

  $(".overlay-prev-container").click(function () {
    var currentImg = $(".overlay-img-thumb.active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active");
      prevImg.addClass("active");
    }

    var image = $(".overlay-img-thumb.active .thumbnail").attr("src");
    $("#overlay-active-image").attr("src", image);
  });

  $(".next-container").click(function () {
    var currentImg = $(".img-thumb.active");
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass("active");
      nextImg.addClass("active");
    }

    var image = $(".img-thumb.active .thumbnail").attr("src");
    $("#active-image").attr("src", image);
  });

  $(".prev-container").click(function () {
    var currentImg = $(".img-thumb.active");
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass("active");
      prevImg.addClass("active");
    }

    var image = $(".img-thumb.active .thumbnail").attr("src");
    $("#active-image").attr("src", image);
  });

  $(".add-order-container").click(function () {
    $("#number").text(orderAmount);
    $(".cart-noti").removeClass("none");
    $("#amount").text(orderAmount);
    $(".total-price").text("$" + orderAmount * 125 + ".00");
    $(".order-have").removeClass("none");
    $(".nothing-order").addClass("none");
  });

  $(".menu-icon").click(function () {
    $(".mobile-link-list-container").removeClass("hide");
    $("body").css("overflow", "hidden");
  });

  $(".close-menu").click(function () {
    $(".mobile-link-list-container").addClass("hide");
    $("body").css("overflow", "auto");
  });

  $(".add-amount").click(function () {
    orderAmount += 1;
    updateOrderAmount();
  });

  $(".del-amount").click(function () {
    orderAmount -= 1;
    updateOrderAmount();
  });

  $(".cart").click(function (e) {
    $(".cart-noti").addClass("none");

    var documentWidth = $("body").width();

    var curtain = $(".curtain");
    var curtainClass = curtain.hasClass("hide");

    var body = $(".order-container .body");
    var bodyClass = body.hasClass("hide");

    var head = $(".order-container-head");
    var headClass = head.hasClass("hide");

    var curtainShow = curtain.css("display");

    if ((headClass, bodyClass, curtainClass)) {
      head.removeClass("hide");
      body.removeClass("hide");
      curtain.removeClass("hide");
    } else {
      head.addClass("hide");
      body.addClass("hide");
      curtain.addClass("hide");
    }

    if (curtainShow === "block") {
      $("body").attr("style", "overflow: auto");
    }
    if (curtainShow === "none" && documentWidth <= 580) {
      $("body").attr("style", "overflow: hidden");
    }
    $(".del-order").click(function (a) {
      $(".order-have").addClass("none");
      $(".nothing-order").removeClass("none");

      a.stopPropagation();
    });

    body.click(function (cb) {
      cb.stopPropagation();
    });

    $("html").one("click", function () {
      head.addClass("hide");
      body.addClass("hide");
      curtain.addClass("hide");
      $("body").attr("style", "overflow: auto");
    });


    e.stopPropagation();
  });


  updateOrderAmount();

});

function updateOrderAmount() {
  orderAmount = Math.min(Math.max(orderAmount, 1), 12);
  $("#order-amount").text(orderAmount);
}

