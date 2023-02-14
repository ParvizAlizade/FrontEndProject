
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
      else{
        $gridCont.addClass('list-view');
        $(".card-body .about").removeClass("d-none");
        $(".card-body").removeClass("text-center");
      }
    }
    
    $(document).on('click', '.grid-icon', gridList);
    $(document).on('click', '.list-icon', showList);


    

    
    });
