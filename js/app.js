// Smooth Scroll
$(document).ready(function() {
    $('.smooth-scroll').click(function(e) {
  
      var linkHref = $(this).attr('href');
      $('html, body').animate({
        scrollTop: $(linkHref).offset().top
      }, 1000);
      e.preventDefault();
  
    });
});

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    var $win = $(window);
    var winH = $win.height();

    if (scroll >= 280) {
        //$(".navbar").addClass("fixed-top");
        $(".navbar").animate({'opacity':'1'},1000);
        $(".navbar").css({'min-height':'70px'},1000);
        $(".navbar").addClass("nav-color");
    } else {
        //$(".navbar").removeClass("fixed-top");
        $(".navbar").css({'min-height':'100px'},1000);
        $(".navbar").removeClass("nav-color");
    }
});

// This is black and white filter effect
//$(document).ready(function() {
  //  $('#story').hover(function() {
  //      $('#story').parent().parent().parent().addClass('bg-vibe');
//});

  //  $('#story').mouseout(function() {
      //  $('#story').parent().parent().parent().removeClass('bg-vibe');
   // });
//});


// navbar fixed styling for mobile screens

$(document).ready(function() {
    if ($(window).width() < 500) {
        $('.navbar').addClass('mobile-nav');
    } else {
        $('.navbar').removeClass('mobile-nav');
    }
});


// Back to Top Button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 500) {
        document.getElementById("b2top").style.display = "block";
    } else {
        document.getElementById("b2top").style.display = "none";
    }
}


