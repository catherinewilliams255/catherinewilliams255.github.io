window.addEventListener("scroll", function () {

    const image = document.querySelector(".moon-museum");

    if (window.scrollY > 50) {

        image.style.transform =
        "translate(-1050px, -380px) scale(0.1)";

    } else {

        image.style.transform =
        "translate(0px, 0px) scale(1)";
    }

});

const audio = document.getElementById("bg-audio");

let activated = false;

document.addEventListener("click", () => {

  if (activated) return;
  activated = true;

  // unmute after first click
  audio.muted = false;

  // start quiet
  audio.volume = 0;

  // ensure playback
  audio.play();

  // optional delay before fade-in
  setTimeout(() => {

    let volume = 0;

    const fade = setInterval(() => {

      volume += 0.05;

      if (volume >= 0.5) {
        volume = 0.5;
        clearInterval(fade);
      }

      audio.volume = volume;

    }, 200);

  }, 1000);

}, { once: true });

