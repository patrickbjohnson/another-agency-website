'use strict';
$(document).ready(function(){
  $('.grid-list > li').on('click', function(){
    var item = $(this).find('.grid-info');
    if (item.hasClass('active')){
      item.stop().fadeOut('400').removeClass('active');
    } else {
      $('.grid-info').stop().fadeOut('400').removeClass('active');
      item.stop().fadeIn('400').addClass('active');
    }
  });
});