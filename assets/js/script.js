let rellax = new Rellax('.rellax');

// (function($) {
//     var $window = $(window),
//         $html = $('html');

//     function resize() {
//         if ($window.width() < 514) {
//             $("div").removeClass("horizontal");
//         }

//     }

//     $window
//         .resize(resize)
//         .trigger('resize');
// })(jQuery);

anime({
    targets: '.anime',
    scale: [
      {value: .1, easing: 'easeOutSine', duration: 500},
      {value: 1, easing: 'easeInOutQuad', duration: 1200}
    ],
    delay: anime.stagger(200, {grid: [14, 5], from: 'center'})
  });
