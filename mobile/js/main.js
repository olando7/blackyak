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

   var productColor = $('.sub-detail .content .color label');

   productColor.click(function(){
      var $imageSrc = $(this).attr('data-image-src');
      $('.sub-detail .content img').attr('src', $imageSrc);
   }); //detail img

   $('.dtaile_dec_slide').bxSlider({
      controls:false
   });//dtaile slide

   $('.my_check_01').click(function(){
      var $this = $(this);
      if($this.siblings('input').prop('checked')==false){
         $this.siblings('input').prop('checked',true);
      }else{
         $this.siblings('input').prop('checked',false);
      }
   });
   $('.my_check_02').click(function(){
      var $this = $(this);
      if($this.siblings('input').prop('checked')==false){
         $this.siblings('input').prop('checked',true);
      }else{
         $this.siblings('input').prop('checked',false);
      }
   }); //checkbox

   $("#login_form").validate({
      rules:{
         userId:{
            required:true
         },
         userPass:{
            required:true,
            minlength:6,
            maxlength:12
         }
      },
      messages:{
         userId:{
            required:'정확한 아이디가 아닙니다.',
         },
         userPass:{
            required:'정확한 비밀번호가 아닙니다.',
            minlength:'비밀번호를 6글자 이상 입력해주세요.',
            maxlength:'비밀번호는 12글자로 제한되어 있습니다.'
         }
      },
      errorClass: 'badlogin',
      valideClass: 'goodlogin',
      errorElement:'span'
   });//login_form validate

   $('#email_select').change(function(){ $("#email_select option:selected").each(function () {
      if($(this).val()== '1'){ 
         //직접입력일 경우 
         $("#join_Email_adress").val(''); //값 초기화
         $("#join_Email_adress").attr("disabled",false); //활성화
      }else{
         $("#join_Email_adress").val($(this).text()); //선택값 입력
         $("#join_Email_adress").attr("disabled",true); //비활성화
         } 
      }); 
   });

   $("#join_form").validate({
      rules:{
         join_userName:{
            required:true
         },
         join_userID:{
            required:true
         },
         join_userPass:{
            required:true,
            minlength:6,
            maxlength:12
         },
         join_userPass_re:{
            required:true,
            equalTo:"#join_userPass"
         },
         join_userPhone:{
            required:true,
            number: true
         }
      },
      messages:{
         join_userName:{
            required:'이름은 필수입니다.'
         },
         join_userID:{
            required:'아이디는 필수입니다.'
         },
         join_userPass:{
            required:'비밀번호는 필수입니다.',
            minlength:'비밀번호는 6글자 이상이어야 합니다.',
            maxlength:'비밀번호는 12글자 이하여야 합니다.'
         },
         join_userPass_re:{
            required:'비밀번호 확인은 필수입니다.',
            equalTo:'비밀번호가 일치하지 않습니다.'
         },
         join_userPhone:{
            required:'휴대폰 번호는 필수입니다.',
            number:'숫자만 입력할 수 있습니다.'
         }
      },
      errorClass: 'badlogin',
      valideClass: 'goodlogin',
      errorElement:'span'
   });//login_form validate

   $('.sub-join button').click(function(){
      if($('#join_confirm').prop('checked') == false){
         alert('가입약관에 동의하지 않았습니다.')
      }
   });
});