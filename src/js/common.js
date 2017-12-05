;(function() {
  /**
   * BRIEF SLIDER
   */
  var slideIndex = 1;
  var prev = document.querySelector(".slider-controls--prev");
  var next = document.querySelector(".slider-controls--next");
  showDivs(slideIndex);

  prev.addEventListener("click", function(e) {
    plusDivs(-1);


  });

  next.addEventListener("click", function(e) {
    plusDivs(+1);
  });

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function showDivs(n) {
    var x = document.querySelectorAll(".brief-slide");
    var submit = document.querySelector("#submit");

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active"); 
    }
    x[slideIndex-1].classList.add("active");
  }


})();

$(document).ready(function() {
  
  $(".slider-controls--prev, .slider-controls--next").mPageScroll2id();

});

$(document).ready(function() {
  var $rangeslider = $('#js-amount-range');
  var $amount = $('#js-amount-days');

  $rangeslider
    .rangeslider({
      polyfill: false
    })
    .on('input', function() {
      $amount[0].value = this.value;
    });

  $amount.on('input', function() {
    $rangeslider.val(this.value).change();
  });
});