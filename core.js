window.sr = ScrollReveal({reset: true});
sr.reveal('.leftside', {
  easing: 'ease',
  duration: 2000,
  distance: '150px',
  opacity: 1, 
  scale: 1, 
  origin:"left"
  });

var option = {
  section : '.js-section', //対象の指定
  easing: "swing", // イージングの指定
  scrollSpeed: 600, // スクロール速度
  scrollbars: true, // スクロールバーを表示するか
};

function copy_to_clipboard(text){
  var target = document.createElement("textarea");
  target.value = text;
  document.body.appendChild(target);
  target.select();
  document.execCommand('copy');
  target.parentElement.removeChild(target);
}