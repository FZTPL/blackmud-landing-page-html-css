const radios = document.querySelectorAll(".checkplay");
const videos = document.querySelectorAll("video");

radios.forEach((radio, index) => {
  radio.addEventListener("change", () => {
    videos.forEach((video, i) => {
      if (i === index && radio.checked) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});