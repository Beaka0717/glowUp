// header Menu 
window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    console.log("hi");
    header.classList.toggle("menu-scroll", window.scrollY > 0);

    
  });


// hamburger
  

      $(".hamburger-menu-icon").click(function(){
        $(".hamburger-menu-icon").toggleClass("open");
        if ($(".hamburger-menu-icon").hasClass("open")){
          $(".menuWrapper").css("visibility", "visible");
          $(".menuWrapper>ul").css("visibility", "visible")
        }else{
          $(".menuWrapper").css("visibility", "hidden")
          $(".menuWrapper>ul").css("visibility", "hidden")
        }
      });
    
     