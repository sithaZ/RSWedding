(() => {
  "use strict";
  const W = window.Wedding;
  W.cover = function (onOpen) {
    const dialog = document.createElement("div");
    dialog.className = "cover-screen";
    dialog.setAttribute("role", "dialog");
    dialog.setAttribute("aria-modal", "true");
    dialog.setAttribute("aria-label", "Open the wedding invitation for " + W.config.couple);
    const artwork = document.createElement("div");
    artwork.className = "cover-artwork";
    artwork.dataset.sourcePage = "01";
    const image = W.image(W.config.images.cover, "Green invitation envelope. Tap the gold seal to open.", true);
    image.fetchPriority = "high";
    const seal = document.createElement("button");
    seal.type = "button";
    seal.className = "seal-button";
    seal.setAttribute("aria-label", "Open invitation with piano music");
    const sealImage = document.createElement("img");
    sealImage.src = W.config.seal;
    sealImage.alt = "";
    sealImage.width = 880;
    sealImage.height = 894;
    sealImage.addEventListener("error", () => { sealImage.hidden = true; seal.classList.add("seal-fallback"); seal.textContent = "Open"; });
    seal.append(sealImage);
    artwork.append(image, seal);
    dialog.append(artwork);
    let opened = false;
    function open() {
      if (opened) return;
      opened = true;
      onOpen();
      dialog.inert = true;
      dialog.classList.add("is-opening");
      dialog.setAttribute("aria-hidden", "true");
      setTimeout(() => dialog.remove(), 850);
    }
    seal.addEventListener("click", open);
    dialog.addEventListener("keydown", event => {
      if (event.key === "Tab") { event.preventDefault(); seal.focus(); }
    });
    document.getElementById("cover-root").append(dialog);
    seal.focus({preventScroll: true});
  };
})();
