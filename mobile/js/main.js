$( function(){
   
   $( "#sidemeun_accodion" ).accordion({
      collapsible: true
   });
 
   $('.hamburger').click(function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
         $('aside').addClass('active');
      }else{
         $('aside').removeClass('active');
      }
   });

});