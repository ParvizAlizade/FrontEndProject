$(document).ready(function () {
    $(".navbar .menu #drone").hover(function(){
        $(".onhoverdrone").css("visibility","visible");
      });
      $(".navbar .menu #drone").mouseleave(function(){
        $(".onhoverdrone").css("visibility","hidden");
      });

      $(".navbar .menu #accesories").hover(function(){
        $(".onhoveraccesories").css("visibility","visible");
      });
      $(".navbar .menu #accesories").mouseleave(function(){
        $(".onhoveraccesories").css("visibility","hidden");
      });      
})