$(function () {
  $img = $(".top-img");
  changeImg = "changeImg";
  setInterval(function () {
    $img.toggleClass(changeImg);
  }, 3000);

  //topbtn
  $(".top-btn").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      500
    );
  });

  var height = $("#header").height();
  if (window.matchMedia("(min-width:768px)").matches) {
    $(".top-btn").click(function () {
      var top = $("#main").offset().top;
      $("html, body").animate({ scrollTop: top }, 500);
    });
    $(".plofile-btn").click(function () {
      var plofile = $("#plofile").offset().top - height;
      $("html, body").animate({ scrollTop: plofile }, 500);
    });
    $(".service-btn").click(function () {
      var service = $("#service").offset().top - height;
      $("html, body").animate({ scrollTop: service }, 500);
    });
    $(".skill-btn").click(function () {
      var skill = $("#skill").offset().top - height;
      $("html, body").animate({ scrollTop: skill }, 500);
    });
    $(".works-btn").click(function () {
      var works = $("#works").offset().top - height;
      $("html, body").animate({ scrollTop: works }, 500);
    });
    $(".footer-btn").click(function () {
      var footer = $("#footer").offset().top - height;
      $("html, body").animate({ scrollTop: footer }, 500);
    });
  } else {
    $(".top-btn").click(function () {
      var top = $("#main").offset().top;
      $("html, body").animate({ scrollTop: top }, 500);
    });
    $(".plofile-btn").click(function () {
      var plofile = $("#plofile").offset().top;
      $("html, body").animate({ scrollTop: plofile }, 500);
    });
    $(".service-btn").click(function () {
      var service = $("#service").offset().top;
      $("html, body").animate({ scrollTop: service }, 500);
    });
    $(".skill-btn").click(function () {
      var skill = $("#skill").offset().top;
      $("html, body").animate({ scrollTop: skill }, 500);
    });
    $(".works-btn").click(function () {
      var works = $("#works").offset().top;
      $("html, body").animate({ scrollTop: works }, 500);
    });
    $(".footer-btn").click(function () {
      var footer = $("#footer").offset().top;
      $("html, body").animate({ scrollTop: footer }, 500);
    });
  }

  //--------------------------------------------------------------------------------
  //スクロール時
  $(window).on("load scroll", function () {
    var box = $(".fadein");
    var animated = "animated";

    //文字フェードイン
    box.each(function () {
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();

      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if (scrollPos > boxOffset - wh + 100) {
        $(this).addClass("scrollin");
      } else {
        $(this).removeClass("scrollin");
      }
    });
  });
});
