
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


      $(".slick-arrow").click(function () {
        alert("31");
      })

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
    

      $(window).scroll(function () {
      if($(window).scrollTop()>75){
        $(".lg-navbar").css(
          {
            position:"fixed",
            transition:"0.3s",
            top:0,
            left:0,
            backgroundColor:"rgb(130, 130, 130)",
            paddingTop:"10px",
            paddingBottom:"10px",
            paddingRight:"150px",
            paddingLeft:"210px"

          }
        )
      }

      
      else{
        $(".lg-navbar").css(
          {
            position:"static",
            width:"100%",
            backgroundColor:"transparent",
            paddingTop:"10px",
            paddingBottom:"10px",
            paddingRight:"20px",
            paddingLeft:"90px"
          }
        )
      }
      })




      $(window).scroll(function () {
        if($(window).scrollTop()>75){
          $(".md-navbar").css(
            {
              position:"fixed",
              top:0,
              left:0,
              backgroundColor:"rgb(130, 130, 130)",
              paddingTop:"10px",
              paddingBottom:"10px",
              paddingRight:"20px",
              paddingLeft:"100px",
  
            }
          )
        }
        else{
          $(".md-navbar").css(
            {
              position:"static",
              width:"100%",
              backgroundColor:"transparent",
              paddingTop:"10px",
              paddingBottom:"10px",
              paddingRight:"20px",
              paddingLeft:"90px"
            }
          )
        }
        })
      
      $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2500,
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
           
            767:{
                items:1,
                nav:false
            },
            992:{
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
