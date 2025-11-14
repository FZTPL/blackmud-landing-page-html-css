const radios = document.querySelectorAll('.checkplay');

radios.forEach(r => {
  r.addEventListener('change', () => {
    // pause all videos
    document.querySelectorAll('.card video').forEach(v => v.pause());

    // play selected card video
    if (r.checked) {
      const video = r.closest('.card').querySelector('video');
      video.muted = true;
      video.play();
    }
  });
});