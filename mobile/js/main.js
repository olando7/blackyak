$( function(){
   
   $( "#sidemeun_accodion" ).accordion({
      heightStyle: "content"
   }); //sidemenu
 
   $('.hamburger').click(function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
         $('aside').addClass('active');
         $('body').css({position: 'fixed', top:0, right:0, left:0});
      }else{
         $('aside').removeClass('active');
         $('body').css({position: 'static'});
      }
   }); //hamburger

   $('.search_btn').click(function(ev){
      ev.preventDefault();
      $('.main_search_modal').slideToggle();
   }); //search

   $('.banner_slider').bxSlider({
      controls:false,
      auto:true
   }); //banner
});