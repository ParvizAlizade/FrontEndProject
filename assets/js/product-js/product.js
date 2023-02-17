
$(document).ready(function () {
  $(".drone-item").mouseover(function () {
    $(".onhoverdrone").addClass('active');
  });
  $(".drone-item").mouseout(function () {
    $(".onhoverdrone").removeClass('active');
  });

  $(".accessories-item").mouseover(function () {
    $(".onhoveraccesories").addClass('active');
  });
  $(".accessories-item").mouseout(function () {
    $(".onhoveraccesories").removeClass('active');
  });




  $(".cart-icon").click(function (e) {
    e.stopPropagation()
    $(".shopping-card-items").css("visibility", "visible").css("width", "25%").css("transform", "translateX(269.5%)").css("display", "flex")
    $(".user-icon-hover-lg").hide();
    $(".search-icon-hover-lg").hide();
  });

  $(window).click(function () {
    $(".shopping-card-items").css("transform", "translateX(400%)")
    $("#header").css("filter", "brightness(100%)").css("transition", "1s")
    $(".search-icon-hover-lg").hide();
    $(".user-icon-hover-lg").hide();
    $(".user-icon-hover-md").hide();
    $(".search-icon-hover-md").hide();
    $(".shopping-card-items").css("visibility", "hidden").css("width", "0%").css("transform", "translateX(300%)").css("display", "none")
  });



  $(".search-icon-lg").click(function (e) {
    e.stopPropagation();
    $(".search-icon-hover-lg").toggle();
    $(".user-icon--lg").hide();

  });
  $(".user-icon-lg").click(function (e) {
    e.stopPropagation();
    $(".user-icon-hover-lg").toggle();
    $(".search-icon-hover-lg").hide();
  });


  $(".search-icon-md").click(function (e) {
    e.stopPropagation();
    $(".search-icon-hover-md").toggle();
    $(".user-icon-hover-md").hide();

  });
  $(".user-icon-md").click(function (e) {
    e.stopPropagation();
    $(".user-icon-hover-md").toggle();
    $(".search-icon-hover-md").hide();
  });


  const menu = document.querySelector(".menu");
  const menuItems = document.querySelectorAll(".menuItem");
  const hamburger = document.querySelector(".hamburger");
  const closeIcon = document.querySelector(".xmark");
  const menuIcon = document.querySelector(".bar");

  function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      closeIcon.style.display = "none";
      menuIcon.style.display = "block";
      hamburger.style.position = ""
    } else {
      menu.classList.add("showMenu");
      closeIcon.style.display = "block";
      menuIcon.style.display = "none";
      hamburger.style.position = "fixed"
    }
  }
  hamburger.addEventListener("click", toggleMenu);
  menuItems.forEach(
    function (menuItem) {
      menuItem.addEventListener("click", toggleMenu);
    }
  )

  $(window).scroll(function () {
    if ($(window).scrollTop() > 75) {
      $(".lg-navbar").css(
        {
          position: "fixed",
          transition: "0.3s",
          top: 0,
          left: 0,
          zIndex: 324423,
          backgroundColor: "rgb(130, 130, 130)",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "150px",
          paddingLeft: "210px"

        }
      )
    }
    else {
      $(".lg-navbar").css(
        {
          zINdex: 2344,
          position: "static",
          width: "100%",
          backgroundColor: "transparent",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "20px",
          paddingLeft: "90px"
        }
      )
    }
  })

  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $(".md-navbar").css(
        {
          zIndex: 5,
          position: "fixed",
          transition: "0.4s",
          top: 0,
          left: 0,
          backgroundColor: "rgb(130, 130, 130)",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "20px",
          paddingLeft: "100px",

        }
      )
    }
    else {
      $(".md-navbar").css(
        {
          position: "static",
          width: "100%",
          backgroundColor: "transparent",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingRight: "20px",
          paddingLeft: "90px"
        }
      )
    }
  })
  var $gridCont = $('.grid-container');

  function gridList(e) {
    var $gridCont = $('.grid-container')
    $(".card-body .about").addClass("d-none");
    $(".card-body").addClass("text-center");
    $(".card-body .button").removeClass("list-button");
    $(".star-icon").removeClass("d-none");
    $(".star-icon").addClass("d-block");


    e.preventDefault();
    $gridCont.removeClass('list-view');
    $(".card-body .about").addClass("d-none");
  }

  function showList(e) {
    $(".card-body .button").addClass("list-button");
    $(".star-icon").removeClass("d-block");
    $(".star-icon").addClass("d-none");


    e.preventDefault();
    if ($gridCont.hasClass('list-view')) {
    }
    else {
      $gridCont.addClass('list-view');
      $(".card-body .about").removeClass("d-none");
      $(".card-body").removeClass("text-center");
    }
  }

  $(document).on('click', '.grid-icon', gridList);
  $(document).on('click', '.list-icon', showList);

});
