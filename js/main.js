$(document).ready(function(){
  $(function(){
    setTimeout(function(){
      $(".loader").fadeOut(500, function(){
        $(".content").fadeIn(500);
      });
    }, 2000);
  });
    // Scrollnav
    $(window).scroll(function(){
      if($(window).scrollTop()<=1){
        $(".navbar").removeClass('navbar-scroll');
      }
      else{
        $(".navbar").addClass('navbar-scroll');
      }
    });

    //Smooth Scroll  
    $("a").on('click', function(event){
      if(this.hash !== ""){
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 1000, function(){
          window.location.hash = hash;
        });
      } 
    });

    //Hero anim
    var width = $(window).width();
    setTimeout(function(){
      $(".hero-text h2").fadeIn(1000);
      $(".hero-text h2").animate({top: 0}, {queue: false, duration: 1000}); 
    }, 2800);

    if(width>1200){
      setTimeout(function(){
        $(".hero img").fadeIn(1000);
        $(".hero img").animate({top: 0}, {queue: false, duration: 1000}); 
      }, 2800);
    }
    else{
      setTimeout(function(){
        $(".hero img").fadeIn(1000);
        $(".hero img").animate({top: 0}, {queue: false, duration: 1000}); 
      }, 4000); 
    }

    setTimeout(function(){
      $(".hero-text h5").fadeIn(1000);
      $(".hero-text h5").animate({top: 0}, {queue: false, duration: 1000});
    }, 3400);

    setTimeout(function(){
      $(".hero-text .buttons").fadeIn(1000);
      $(".hero-text .buttons").animate({top: 0}, {queue: false, duration: 1000});
    }, 3700);

    // Services anim
    $(window).scroll(function(){
      if($(window).scrollTop()>=500){

        $(function(){
          $(".services-container h2").fadeIn(1000);
          $(".services-container h2").animate({top: 0}, {queue: false, duration: 1000});
        });

        setTimeout(function(){
          $(".box").fadeIn(1000);
          $(".box").animate({top: 0}, {queue: false, duration: 1000});
        }, 300);

        setTimeout(function(){
          $(".service-1").fadeIn(1000);
          $(".service-1").animate({top: 0}, {queue: false, duration: 1000});
        }, 300);

        setTimeout(function(){
          $(".service-1 img").fadeIn(1000);
          $(".service-1 img").animate({top: 0}, {queue: false, duration: 1000});
        }, 300);

        setTimeout(function(){
          $(".service-1 h5").fadeIn(1000);
          $(".service-1 h5").animate({top: 0}, {queue: false, duration: 1000});
        }, 500);

        setTimeout(function(){
          $(".service-1 p").fadeIn(1000);
          $(".service-1 p").animate({top: 0}, {queue: false, duration: 1000});
        }, 700);

        setTimeout(function(){
          $(".service-1 button").fadeIn(1000);
          $(".service-1 button").animate({top: 0}, {queue: false, duration: 1000});
        }, 900);

        setTimeout(function(){
          $(".service-2").fadeIn(1000);
          $(".service-2").animate({top: 0}, {queue: false, duration: 1000});
        }, 300);

        setTimeout(function(){
          $(".service-2 img").fadeIn(1000);
          $(".service-2 img").animate({top: 0}, {queue: false, duration: 1000});
        }, 600);

        setTimeout(function(){
          $(".service-2 h5").fadeIn(1000);
          $(".service-2 h5").animate({top: 0}, {queue: false, duration: 1000});
        }, 800);

        setTimeout(function(){
          $(".service-2 p").fadeIn(1000);
          $(".service-2 p").animate({top: 0}, {queue: false, duration: 1000});
        }, 1000);

        setTimeout(function(){
          $(".service-2 button").fadeIn(1000);
          $(".service-2 button").animate({top: 0}, {queue: false, duration: 1000});
        }, 1200);

        setTimeout(function(){
          $(".service-3").fadeIn(1000);
          $(".service-3").animate({top: 0}, {queue: false, duration: 1000});
        }, 300);

        setTimeout(function(){
          $(".service-3 img").fadeIn(1000);
          $(".service-3 img").animate({top: 0}, {queue: false, duration: 1000});
        }, 900);

        setTimeout(function(){
          $(".service-3 h5").fadeIn(1000);
          $(".service-3 h5").animate({top: 0}, {queue: false, duration: 1000});
        }, 1100);

        setTimeout(function(){
          $(".service-3 p").fadeIn(1000);
          $(".service-3 p").animate({top: 0}, {queue: false, duration: 1000});
        }, 1300);

        setTimeout(function(){
          $(".service-3 button").fadeIn(1000);
          $(".service-3 button").animate({top: 0}, {queue: false, duration: 1000});
        }, 1500);

      }    
    });
});