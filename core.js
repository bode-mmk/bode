$(function(){
  var _window = $(window),
      _header = $('.page-header'),
      backBottom;
  
  _window.on('scroll',function(){
      backBottom = $('.back').height();
      if(_window.scrollTop() > backBottom){
          _header.addClass('transform');   
      }
      else{
          _header.removeClass('transform');   
      }
  });
  
  _window.trigger('scroll');
});