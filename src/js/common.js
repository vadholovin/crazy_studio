/* BRIEF SLIDER */
(function() {
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


/* SCROLL TO ID */
$(document).ready(function() {
  $(".slider-controls--prev, .slider-controls--next").mPageScroll2id();
});


/* AMOUNT OF DAYS */
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


/* AMOUNT OF GOODS */
$(document).ready(function() {
  var $rangeslider = $('#amount-goods-range');
  var $amount = $('#js-amount-goods');

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


/* SHOW/HIDE MODAL BOX FOR FORM */
(function() {
  const modalBox = document.querySelector('.modal-box'),
        background = document.querySelector('.modal-background'),
        closeBtn = document.querySelector('.modal-content__close');

  background.addEventListener('click', hideModalBox);

  closeBtn.addEventListener('click', hideModalBox);

  function hideModalBox() {
    modalBox.classList.add('is-hidden');
  }
})();


/* SHOW/HIDE INNER LABELS FOR INPUTS */
(function() {
  const phone = document.querySelector('#phone'),
        email = document.querySelector('#email'),
        skype = document.querySelector('#skype');

  if (phone.value.length != 0) {
    console.log(phone.value.length);
    labelPhone.style.display = 'none';
  }

  phone.addEventListener('blur', onBlur);
  phone.addEventListener('focus', onFocus);
  email.addEventListener('blur', onBlur);
  email.addEventListener('focus', onFocus);
  skype.addEventListener('blur', onBlur);
  skype.addEventListener('focus', onFocus);

  function onBlur(e) {
    if (e.target.value.length != 0) {
      this.nextElementSibling.style.opacity = '0';
    } else {
      this.nextElementSibling.style.opacity = '1';
    }
  }

  function onFocus() {
    this.nextElementSibling.style.opacity = '0';
  }
})();


/* SELECT LIST FOR INPUT */
(function() {
  const cmsList = document.querySelector('#cms-list'),
        cmsTitle = document.querySelector('#cms-title'),
        cmsInput = document.querySelector('#cms');

  cmsTitle.addEventListener('click', function() {
    cmsTitle.classList.toggle('is-chosen');
    setTimeout(function () {
      cmsList.classList.toggle('is-hidden');
    }, 100);
    
  });

  cmsList.addEventListener('click', function(e) {
    cmsTitle.textContent = e.target.textContent;
    cmsInput.value = e.target.textContent;
  });

  window.addEventListener('click', function(e) {
    if (e.target != cmsList && e.target != cmsTitle) {
      if (cmsTitle.classList.contains('is-chosen') && !cmsList.classList.contains('is-hidden')) {
        setTimeout(function () {
          cmsTitle.classList.remove('is-chosen');
          cmsList.classList.add('is-hidden');
        }, 100);
      }
    }
  });
})();


/* INPUT FILE */
/*
(function() {
  const uploadContainer1 = document.querySelector("#upload-container-1");
  const uploadContainer2 = document.querySelector("#upload-container-2");
  const inputFile1 = uploadContainer1.firstElementChild;
  const inputFile2 = uploadContainer2.firstElementChild;

  uploadContainer1.addEventListener("click", function(e) {
    if (e.target == inputFile1.nextSibling) {
      inputFile1.focus();
      return false;
    }
  });

  inputFile1.addEventListener("change", function() {
    let text = this.value.slice(12);
    uploadContainer1.lastElementChild.innerHTML = text;
  });

  uploadContainer2.addEventListener("click", function(e) {
    if (e.target == inputFile2.nextSibling) {
      inputFile2.focus();
      return false;
    }
  });

  inputFile2.addEventListener("change", function() {
    let text = this.value.slice(12);
    uploadContainer2.lastElementChild.innerHTML = text;
  });
})();
*/