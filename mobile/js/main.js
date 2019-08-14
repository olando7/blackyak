$( function(){
   
   $( "#sidemenu_accodion" ).accordion({
      heightStyle: "content",
      collapsible: true
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
      $('.main_search_modal').slideUp();
      $('.main-search').removeClass('close');
   }); //hamburger

   $('.search_btn').click(function(ev){
      ev.preventDefault();
      $('.main_search_modal').slideToggle();
      $(this).parent('.main-search').toggleClass('close');
      $('.hamburger').removeClass('active');
      $('aside').removeClass('active');
      $('body').css({position: 'static'});
   }); //search

   $('.banner_slider').bxSlider({
      controls:false,
      auto:true
   }); //banner

   $('.best_list').bxSlider({
      mode:'vertical',
      pager:false,
      controls:false,
      auto:true,
      minSlides:5,
      maxSlides:5,
      moveSlides:1,
      shrinkItems:true,
      touchEnabled:false
   }); //best

   $('.list_checked').click(function(){
     $('.plv').removeClass('active');
   });
   $('.card_checked').click(function(){
      $('.plv').addClass('active');
   }); //product list view

});