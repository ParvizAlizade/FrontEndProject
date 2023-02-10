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
        autoplay:true,
        autoplaySpeed:3800,
        pauseOnHover:false,
      });;


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
      $("header").mouseenter(function () {
        $(".slick-prev, .slick-next").css("opacity",1).css("transition","0.8s")
      })
      $("header").mouseleave(function () {
        $(".slick-prev, .slick-next").css("opacity",0).css("transition","0.8s")
      })
    });
