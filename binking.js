function blinking($el, x) {

  var n = 0;
  $el.addClass('blinking');
  var interval = setInterval(function(){
    n++;
    if($el.hasClass('blinking')){
      $el.removeClass('blinking');
    } else{
      $el.addClass('blinking');
    }
    if(n==5){
      clearInterval(interval);
      $el.removeClass('blinking');
    }
  }, x);

}
