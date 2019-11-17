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

function copy_to_clipboard(text){
  var target = document.createElement("textarea");
  target.value = text;
  document.body.appendChild(target);
  target.select();
  document.execCommand('copy');
  target.parentElement.removeChild(target);
}