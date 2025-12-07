"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ReviewsSlider =
/*#__PURE__*/
function () {
  function ReviewsSlider(container) {
    _classCallCheck(this, ReviewsSlider);

    this.container = container;
    this.track = container.querySelector('.reviews-slider__track');
    this.slides = Array.from(container.querySelectorAll('.reviews-slider__slide'));
    this.progressBar = container.querySelector('.reviews-slider__progress-bar');
    this.currentIndex = 0;
    this.slideCount = this.slides.length;
    this.slideWidth = 528;
    this.gap = 46;
    this.init();
  }

  _createClass(ReviewsSlider, [{
    key: "init",
    value: function init() {
      this.updateActiveSlide();
      this.addEventListeners();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var _this = this;

      setInterval(function () {
        _this.next();
      }, 5000);
    }
  }, {
    key: "next",
    value: function next() {
      this.currentIndex = (this.currentIndex + 1) % this.slideCount;
      this.updateActiveSlide();
    }
  }, {
    key: "prev",
    value: function prev() {
      this.currentIndex = (this.currentIndex - 1 + this.slideCount) % this.slideCount;
      this.updateActiveSlide();
    }
  }, {
    key: "updateActiveSlide",
    value: function updateActiveSlide() {
      this.slides.forEach(function (slide) {
        return slide.classList.remove('active');
      });
      var currentSlide = this.slides[this.currentIndex];
      currentSlide.classList.add('active');
      var offset = -(this.currentIndex * (this.slideWidth + this.gap));
      this.track.style.transform = "translateX(".concat(offset, "px)");
      var progress = (this.currentIndex + 1) / this.slideCount * 100;
      this.progressBar.style.width = "".concat(progress, "%");
    }
  }]);

  return ReviewsSlider;
}();

document.addEventListener('DOMContentLoaded', function () {
  var sliderContainer = document.querySelector('.reviews-slider');

  if (sliderContainer) {
    new ReviewsSlider(sliderContainer);
  }
});