$(document).ready(function () {
  $(".replay").on("click", function () {
    $(this)
      .parent()
      .parent()
      .parent()
      .parent()
      .children(".card-inner")
      .toggleClass("dis");
  });
});
