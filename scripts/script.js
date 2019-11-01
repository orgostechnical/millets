/* Demo Scripts for Bootstrap Carousel and Animate.css article
* on SitePoint by Maria Antonietta Perna
*/
(function($) {
  
var intervalId;
var slidetime = 3000;
    //Function to animate slider captions
    function doAnimations(elems) {
      //Cache the animationend event in a variable
      var animEndEv = "webkitAnimationEnd animationend";
  
      elems.each(function() {
        var $this = $(this),
          $animationType = $this.data("animation");
        $this.addClass($animationType).one(animEndEv, function() {
          $this.removeClass($animationType);
        });
      });
    }
   
    //Variables on page load
    var $myCarousel = $("#carouselExampleIndicators"),
      $firstAnimatingElems = $myCarousel
        .find(".carousel-item:first")
        .find("[data-animation ^= 'animated']");
  
    //Initialize carousel
    $myCarousel.carousel();
  
    //Animate captions in first slide on page load
    doAnimations($firstAnimatingElems);
  
    //Other slides to be animated on carousel slide event
    $myCarousel.on("slide.bs.carousel", function(e) {
      var $animatingElems = $(e.relatedTarget).find(
        "[data-animation ^= 'animated']"
      );
      doAnimations($animatingElems);
    });

    /*products carousel*/
    var carousel = $(".carousel-products"),
    currdeg  = 0;

$(".next").on("click", { d: "n" }, rotate);
$(".prev").on("click", { d: "p" }, rotate);


function rotate(e){
  if(e == undefined){
    currdeg = currdeg - 60;
  } else if(e.data.d=="n"){
    currdeg = currdeg - 60;
  } else if(e.data.d=="p"){
    currdeg = currdeg + 60;
  }
  carousel.css({
    "-webkit-transform": "rotateY("+currdeg+"deg)",
    "-moz-transform": "rotateY("+currdeg+"deg)",
    "-o-transform": "rotateY("+currdeg+"deg)",
    "transform": "rotateY("+currdeg+"deg)"
  });
}

$(document).ready(function()
{
  setInterval (rotate, slidetime);
});


$(window).scroll(function(){
  var scrollPos = $(document).scrollTop();
  if(scrollPos>60){
    $(".navbar").addClass('bg-dark');
  }else{
    $(".navbar").removeClass('bg-dark');
  }
  
});

})(jQuery);

  