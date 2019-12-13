'use strict';

(function () {
  var mainNavigation = document.querySelector('.main-nav');
  var navToogle = document.querySelector('.main-nav__toogle');

  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');
  var modalButtons = document.querySelectorAll('.button-modal');

  // navigtion toggle
  mainNavigation.classList.remove('main-nav--open');
  mainNavigation.classList.add('main-nav--closed');

  navToogle.addEventListener('click', function() {
    mainNavigation.classList.toggle('main-nav--closed');
    mainNavigation.classList.toggle('main-nav--open');
  });

  // modal window
  if (modal && overlay && modalButtons) {
    modalButtons = Array.prototype.slice.call(modalButtons);

    var closeModal = function () {
      if (modal.classList.contains('modal--show')) {
        modal.classList.remove('modal--show');
      }
      if (overlay.classList.contains('overlay--show')) {
        overlay.classList.remove('overlay--show');
      }
    }

    modalButtons.forEach(function (element) {
      element.addEventListener('click', function (evt) {
        evt.preventDefault();
        modal.classList.add('modal--show');
        overlay.classList.add('overlay--show');
      });
    });

    overlay.addEventListener('click', closeModal);

    modal.addEventListener('click', function (evt) {
      evt.stopPropagation();
    });

    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === 27) {
        closeModal();
      }
    });
  }

})();


// interactive Map
(function () {
  var interactiveMap = document.querySelector('.contacts__map');

  if (interactiveMap) {
    window.initMap = function () {
      var location = {lat: 59.938705, lng: 30.322992};
      var map = new google.maps.Map(interactiveMap, {
        zoom: 17,
        center: location
      });

      var image = {
        url: 'img/icon-map-pin.svg',
        scaledSize: new google.maps.Size(66, 101),
      }

      var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'Мишка',
        optimized: false,
        icon: image
      });
    }
  }
})();


// slider toggles
(function () {
  var togglePrevious = document.querySelector('.reviews__toogle--previous');
  var toggleNext = document.querySelector('.reviews__toogle--next');

  if (togglePrevious && toggleNext) {
    toggleNext.addEventListener('click', function (evt) {
      evt.preventDefault();

      var currentSlide = document.querySelector('.reviews__item--show');
      var nextSlide = currentSlide.nextElementSibling;

      if (!nextSlide) return;
      if (!nextSlide.nextElementSibling) {
        toggleNext.classList.add('reviews__toogle--disabled');
      }

      currentSlide.classList.remove('reviews__item--show');
      nextSlide.classList.add('reviews__item--show');
      togglePrevious.classList.remove('reviews__toogle--disabled');
    });

    togglePrevious.addEventListener('click', function (evt) {
      evt.preventDefault();

      var currentSlide = document.querySelector('.reviews__item--show');
      var previousSlide = currentSlide.previousElementSibling;

      if (!previousSlide) return;
      if (!previousSlide.previousElementSibling) {
        togglePrevious.classList.add('reviews__toogle--disabled');
      }

      currentSlide.classList.remove('reviews__item--show');
      previousSlide.classList.add('reviews__item--show');
      toggleNext.classList.remove('reviews__toogle--disabled');
    });
  }
})();
