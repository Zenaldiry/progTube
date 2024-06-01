$(document).ready(function () {
  $(".first-link").addClass("active");
  $(".nav-item").click(function () {
    $(".nav-item").removeClass("active");
    $(this).addClass("active");
  });
  $(".fa-bars").on("click", function () {
    let right = $(".list-right").css("right");
    if (right === "0px") {
      $(".list-right").css("right", "-27rem");
      $(".layer").fadeOut();
    } else {
      $(".list-right").css("right", "0");
      $("body").css("overflow", "hidden");
      $(".layer").fadeIn();
    }
  });
  $(".layer").on("click", function () {
    $(".list-right").css("right", "-27rem");
    $("body").css("overflow", "auto");
    $(".layer").fadeOut();
  });
  $(".navbar-toggler").addClass("collapsed");
  $(document).on("click", function (event) {
    if (
      !$(event.target).closest(".navbar, .navbar *").length &&
      !$(".navbar-toggler").hasClass("collapsed")
    ) {
      $(".navbar-toggler").trigger("click");
    }
  });
});
