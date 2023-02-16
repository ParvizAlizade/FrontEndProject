
$(document).ready(function () {

  //#region Hover on Navbar 

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

  //#endregion









  //#region  Hamburger Menu


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


  //#endregion







  //#region Click on Navbar Basket,User And Search icon

  $(".cart-icon").click(function (e) {
    e.stopPropagation()
  })

  $(".cart-icon").click(function () {
    $(".shopping-card-items").css("visibility", "visible").css("width", "25%").css("transform", "translateX(300%)")
    $("#header").css("filter", "brightness(100%)").css("transition", "1s");
    $(".user-icon-hover-lg").hide();
    $(".search-icon-hover-lg").hide();

  });

  $("#header").click(function () {
    $(".shopping-card-items").css("transform", "translateX(400%)")
    $("#header").css("filter", "brightness(100%)").css("transition", "1s")
    $(".search-icon-hover-lg").hide();
    $(".user-icon-hover-lg").hide();
    $(".user-icon-hover-md").hide();
    $(".search-icon-hover-md").hide();

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


  //#endregion








  //#region Header Fixed

  $(window).scroll(function () {
    if ($(window).scrollTop() > 75) {
      $(".lg-navbar").css(
        {
          position: "fixed",
          transition: "0.3s",
          top: 0,
          left: 0,
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

  //#endregion





  //#region Slider For Header  

  $('.slider').slick({
    infinite: true,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768.1,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });;
  //#endregion





  //#region Sponsors Carousel

  $('.sponsor-images').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768.1,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 400,
        settings: {
          infinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinite: true,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        }
      },
    ]
  });

  //#endregion




  //#region Customer Region Slider
  $('.usercarousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {

      767: {
        items: 1,
        nav: false
      },
      992: {
        items: 2,
        nav: true,
        loop: false,
        nav: false
      }
    }
  })
  //#endregion



//#region Latest Products Crousel

  $('.productcarousel').owlCarousel({
    loop: true,
    margin: 10,
    dots:false,
    responsiveClass: true,
    responsive: {

      769: {
        items: 6,
        nav: false
      },
      992: {
        items: 3,
        loop: false,
      }
    }
  })


//#endregion

  $("header").mouseenter(function () {
    $(".slick-prev, .slick-next").css("opacity", 1).css("transition", "0.8s")
  })
  $("header").mouseleave(function () {
    $(".slick-prev, .slick-next").css("opacity", 0).css("transition", "0.8s")
  })
});



$(document).ready(function () {
  var activeCat = "";
  function filterGroup(group) {
    if (activeCat != group) {
      $(".productcarousel")
        .filter("." + group)
        .show();
      $(".productcarousel")
        .filter(":not(." + group + ")")
        .hide();
      activeCat = group;
    }
  }

  $(".cat-1").click(function () {
    filterGroup("group-1");
  });
  $(".cat-2").click(function () {
    filterGroup("group-2");
  });
  $(".cat-3").click(function () {
    filterGroup("group-3");
  });
});