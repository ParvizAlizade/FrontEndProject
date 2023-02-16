
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


      $(".cart-icon").click(function (e) {
        e.stopPropagation()
      })
      
      $(".cart-icon").click(function () {
        $(".shopping-card-items").css("transform","translateX(300%)")
        $("#header").css("filter", "brightness(100%)").css("transition","1s");
        $(".user-icon-hover-lg").hide();
        $(".search-icon-hover-lg").hide();
      
      });

      $("#header").click(function () {
        $(".shopping-card-items").css("transform","translateX(400%)")
        $("#header").css("filter", "brightness(100%)").css("transition","1s")
        $(".search-icon-hover-lg").hide();
        $(".user-icon-hover-lg").hide();
        $(".user-icon-hover-md").hide();
        $(".search-icon-hover-md").hide();
        
      });

      $("#header").click(function () {
        $(".shopping-card-items").css("transform","translateX(400%)")
        $("#header").css("filter", "brightness(100%)").css("transition","1s")
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


      $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        responsive:{
           
          389:{
            items:2,
            nav:false,
            infinite:true,
          },
            767:{
                items:3,
                nav:false,
            infinite:true,

            },
            992:{
                items:4,
                loop:true,
            infinite:true,
            }
        }
    })


      $('.slider-images').slick({
        arrows:true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 2000,
            settings: {
              slidesToShow: 4,
              slidesToScroll:1,
              infinite: true,
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 390,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
    
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
