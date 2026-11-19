(() => {
  "use strict";
  const W = window.Wedding;
  const main = document.getElementById("invitation");
  const audio = document.getElementById("wedding-music");
  const musicButton = document.getElementById("music-toggle");
  audio.src = W.config.music;
  audio.volume = Math.min(1, Math.max(0, W.config.musicVolume));
  // Order is explicit in the source artwork, independent of file timestamps.
  const sections = [...W.sections].sort((a, b) => a.number - b.number);
  for (const entry of sections) {
    const page = W.page(entry);
    if (entry.enhance) entry.enhance(page);
    main.append(page);
  }
  function updateMusic() {
    const playing = !audio.paused && !audio.error;
    musicButton.setAttribute("aria-pressed", String(playing));
    musicButton.setAttribute("aria-label", playing ? "Pause music" : "Play music");
  }
  async function playMusic() {
    try { await audio.play(); }
    catch { W.notice("Tap the music icon to retry playback."); }
    updateMusic();
  }
  audio.addEventListener("play", updateMusic);
  audio.addEventListener("pause", updateMusic);
  audio.addEventListener("error", () => {
    updateMusic();
    if (!document.body.classList.contains("is-sealed")) W.notice("Music is temporarily unavailable. You can still enjoy the invitation.");
  });
  musicButton.addEventListener("click", () => { if (audio.paused) playMusic(); else audio.pause(); });
  const background = [...document.querySelectorAll(".mobile-heading,.skip-link")];
  background.forEach(element => element.inert = true);
  W.cover(() => {
    document.body.classList.remove("is-sealed");
    main.inert = false;
    background.forEach(element => element.inert = false);
    musicButton.hidden = false;
    window.scrollTo({top: 0, left: 0, behavior: "instant"});
    main.focus({preventScroll: true});
    playMusic();
  });
})();
