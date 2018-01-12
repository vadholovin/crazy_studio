;(function() {
  /**
   * BRIEF SLIDER
   */
  var slideIndex = 1;
  var firstSlide = document.querySelector("#btn-prev");
  var lastSlide = document.querySelector(".last-slide #btn-next");
  var prev = document.querySelector("#btn-prev");
  var next = document.querySelector("#btn-next");
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

    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");

        (n == 1) ? prev.setAttribute("disabled", "") : prev.removeAttribute("disabled", "");
        (n == x.length) ? next.setAttribute("disabled", "") : next.removeAttribute("disabled", "");
    }
    x[slideIndex-1].classList.add("active");
  }


})();

$(document).ready(function() {
  
  /* SCROLL TO ID INITIALIZATION */

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

