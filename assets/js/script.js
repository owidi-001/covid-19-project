$(window).scroll(function (){
  if ($(this).scrollTop()>50){
      $('#back-to-top').fadeIn();
  }else{
      $('#back-to-top').fadeOut();
  }
});
// scroll body
$('#back-to-top').click(function () {
$('body,html').animate({
  scrollTop:0
},400);
return false;
});
});

// scroll animation

AOS.init({
  duration:1200,
});
