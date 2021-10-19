

$(document).on('ready', function() {
     
     
      
  $(".regular").slick({
        // dots: true,
        // vertical: false,
        // centerMode: true,
        // slidesToShow: 3,
        // slidesToScroll: 3
        centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
  });
});




$(".ham").click(function(){
    $(".ham").toggleClass("open");
    $(".menu").toggleClass("change");
    $(".dark-bg").toggleClass("appear");
})

$('header ul li').on('click', function () {
  
    $('header ul li').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');   
    }
    
  });
  let header = document.querySelector("header");
 let ham = document.querySelector(".ham");
 let menu = document.querySelector(".menu");

  let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
      header.classList.remove("hide");
    // header.style.transform = "translateY(0)";
  } else {
    menu.classList.remove("change");
    ham.classList.remove("open");
  
    header.classList.add("hide");
    // header.style.transform = "translateY(100%)";
  }
  prevScrollpos = currentScrollPos;
}

























