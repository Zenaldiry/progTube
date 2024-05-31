$(document).ready(function () {
  $(".filter").on("click", function () {
    $(".filter-column").slideToggle("slow");
  });
  $("input:checkbox").on("click", function () {
    let $box = $(this);
    if ($box.is(":checked")) {
      let group = "input:checkbox[name='" + $box.attr("name") + "']";
      $(group).prop("checked", false);
      $box.prop("checked", true);
    }
  });
});
