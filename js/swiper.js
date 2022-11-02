window.addEventListener("scroll", function () {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 3,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
  
      //   var appendNumber = 3;
      //   var prependNumber = 1;
      //   document
      //     .querySelector(".prepend-2-slides")
      //     .addEventListener("click", function (e) {
      //       e.preventDefault();
      //       swiper.prependSlide([
      //         '<div class="swiper-slide">Slide ' + --prependNumber + "</div>",
      //       ]);
      //     });

      //   document.querySelector(".prepend-2-slides").click();
      });    
       
      