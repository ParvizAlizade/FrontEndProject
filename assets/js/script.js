$(document).ready(function () {
    $(".drone-item").mouseover(function(){
        $(".onhoverdrone").addClass('active');
      });
      $(".drone-item").mouseout(function(){
        $(".onhoverdrone").removeClass('active');
      });

      $(".accessories-item").mouseover(function(){
        $(".onhoveraccesories").addClass('active');
      });
      $(".accessories-item").mouseout(function(){
        $(".onhoveraccesories").removeClass('active');
      });    

      $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:3800,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 768.1,
            settings: {
             infinite: true,
             slidesToShow: 1,
             slidesToScroll: 1,
             dots:true,
             infinite:true,
             arrows:false,
             autoplay: true,
             autoplaySpeed: 2000,
            }
          },
        ]
      });;


      $('.sponsor-images').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots:false,
        infinite:true,
        arrows:false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
             infinite: true,
             slidesToShow: 4,
             slidesToScroll: 1,
             dots:false,
             infinite:true,
             arrows:false,
             autoplay: true,
             autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 992,
            settings: {
              infinite: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              dots:false,
              infinite:true,
              arrows:false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              dots:false,
              infinite:true,
              arrows:false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          },
          {
            breakpoint: 390,
            settings: {
              centerMode: true,
              centerPadding: '40px',
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              dots:false,
              infinite:true,
              arrows:false,
              autoplay: true,
              autoplaySpeed: 2000,
            }
          }
        ]
      });

      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:2,
                nav:true,
                loop:false,
                nav:false
            }
        }
    })





    const menu = document.querySelector(".menu");
    const menuItems = document.querySelectorAll(".menuItem");
    const hamburger= document.querySelector(".hamburger");
    const closeIcon= document.querySelector(".xmark");
    const menuIcon = document.querySelector(".bar");
    
    function toggleMenu() {
      if (menu.classList.contains("showMenu")) {
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
        hamburger.style.position=""
      } else {
        menu.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
        hamburger.style.position="fixed"
      }
    }
    
    hamburger.addEventListener("click", toggleMenu);
    
    menuItems.forEach( 
      function(menuItem) { 
        menuItem.addEventListener("click", toggleMenu);
      }
    )





      $("header").mouseenter(function () {
        $(".slick-prev, .slick-next").css("opacity",1).css("transition","0.8s")
      })
      $("header").mouseleave(function () {
        $(".slick-prev, .slick-next").css("opacity",0).css("transition","0.8s")
      })
  

    });
