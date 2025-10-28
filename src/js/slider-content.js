$(document).ready(function () {
  const $slider = $('.financial-slider');
  const $progressBar = $('.progress-bar');
  const $current = $('#slider-current');
  const $total = $('#slider-total');

  const totalSlides = $slider.children().length;
  $total.text('/ ' + (totalSlides < 10 ? '0' + totalSlides : totalSlides));

  // Initialize Slick
  $slider.on('init', function (event, slick) {
    updatePagination(0, slick.slideCount);
    updateProgress(0, slick.slideCount);
  });

  $slider.on('afterChange', function (event, slick, currentSlide) {
    updatePagination(currentSlide, slick.slideCount);
    updateProgress(currentSlide, slick.slideCount);
  });

  $slider.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    infinite: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  });

  // Pagination update
  function updatePagination(currentIndex, total) {
    let current = currentIndex + 1;
    if (current > total) current = 1;
    $current.text(current < 10 ? '0' + current : current);
  }

  // Progress bar update
  function updateProgress(currentIndex, total) {
    const progress = ((currentIndex + 1) / total) * 100;
    $progressBar.css('width', progress + '%');
  }
});