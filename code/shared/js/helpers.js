(() => {
  "use strict";
  const W = window.Wedding;
  W.image = function (path, alt, eager = false) {
    const image = document.createElement("img");
    image.src = path;
    image.alt = alt;
    image.width = 1080;
    image.height = 1920;
    image.loading = eager ? "eager" : "lazy";
    image.decoding = "async";
    image.className = "page-artwork";
    image.addEventListener("error", () => {
      const message = document.createElement("p");
      message.className = "resource-error";
      message.textContent = "This invitation image could not load: " + path;
      image.replaceWith(message);
    }, {once: true});
    return image;
  };
  W.page = function ({id, title, image, alt, eager = false, number}) {
    const section = document.createElement("section");
    section.id = id;
    section.className = "invitation-page";
    section.dataset.sourcePage = String(number).padStart(2, "0");
    section.setAttribute("aria-label", title);
    section.append(W.image(W.config.images[image], alt, eager));
    return section;
  };
  let noticeTimer;
  W.notice = function (message) {
    const output = document.getElementById("notice");
    output.textContent = message;
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => { output.textContent = ""; }, 6500);
  };
})();
