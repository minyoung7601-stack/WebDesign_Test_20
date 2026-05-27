$(function () {
  //메뉴
  $("nav>ul>li").on("mouseover focusin", function () {
    $(this).children(".sub").stop().slideDown();
  });

  $("nav>ul>li").on("mouseout focusout", function () {
    $(this).children(".sub").stop().slideUp();
  });

  //팝업
  $(".popup01").click(function () {
    $(".modal_popup").show();
    return false;
  });
  $(".close button").click(function () {
    $(".modal_popup").hide();
  });

  //슬라이드
  setInterval(function () {
    $(".slide ul").animate({ left: "-100%" }, 500, function () {
      $(".slide ul li:first").appendTo(".slide ul");
      $(".slide ul").css("left", "0");
    });
  }, 3000);
});
