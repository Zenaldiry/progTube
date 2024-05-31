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
      $(".layer").fadeIn();
    }
  });
  $(".layer").on("click", function () {
    $(".list-right").css("right", "-27rem");
    $(".layer").fadeOut();
  });
});
