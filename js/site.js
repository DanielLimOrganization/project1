// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
function init(){
  
  var Name = document.getElementById('Name')
  var pressButton = document.getElementById('submit')
  var output = document.getElementById('textoutput')
  
  function alertFunc() {
    //sends the alert
    alert('Daniel Lim: ' + Name.value)
    //changes h2
    output.innerHTML = Name.value + ' account created';
  }
  
  pressButton.addEventListener('click', alertFunc);

}
window.addEventListener('load', init);