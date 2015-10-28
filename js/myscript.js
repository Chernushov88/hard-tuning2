
      $(document).ready(function(){
        var touch = $('#touch-menu');
          var menu = $('.nav-top-inside');
       
          $(touch).on('click', function(e) {
              e.preventDefault();
              menu.slideToggle();
          });
          $(window).resize(function(){
              var wid = $(window).width();
              if(wid > 768 && menu.is(':hidden')) {
                  menu.removeAttr('style');
              }
          });
      });


      $(document).ready(function(){
        var touchBottom = $('#touch-menu-bottom');
          var menuBottom = $('.nav-bottom-inside');
       
          $(touchBottom).on('click', function(e) {
              e.preventDefault();
              menuBottom.slideToggle();
          });
          $(window).resize(function(){
              var wid = $(window).width();
              if(wid > 768 && menuBottom.is(':hidden')) {
                  menu.removeAttr('style');
              }
          });
      });

/*-----------------------------------------------------------------------------------*/
/*  Slider
/*-----------------------------------------------------------------------------------*/
 $( '#carousel' ).elastislide();
/*-----------------------------------------------------------------------------------*/
/*  PopUp
/*-----------------------------------------------------------------------------------*/
//Функция отображения PopUp
function PopUpShow(){$(".darken").fadeIn(); $("#popup").fadeIn();}
function PopUpShow2(){$(".darken").fadeIn(); $("#popup2").fadeIn();}
        
    //Функция скрытия PopUp
function PopUpHide(){$(".darken").fadeOut(300); $("#popup, #popup2").fadeOut(300);}