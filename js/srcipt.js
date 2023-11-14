$(document).ready(function(){

    $('.slider').slick({
      infinite: true,
      speed: 1000,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpeed: 2000,
    });

    
$(".moblie-menu").click(function(){
  $(".menu").toggleClass("open-close");
});
		
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
  

  var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


  });