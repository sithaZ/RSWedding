(() => {
  const W = window.Wedding;
  W.sections.push({
    id: "venue", title: "The venue", image: "venue", number: 9,
    alt: "The venue: Lucky Bright Restaurant 598, Phnom Penh, with a drawn location map. With love: Your presence is our gift. For those who wish to send one, our KHQR is below. The original gift QR is preserved in the artwork.",
    enhance(section) {
      // Use the artwork's gap between the map and gift section.
      const area = document.createElement("div");
      area.className = "venue-link-area";
      const link = document.createElement("a");
      try {
        const url = new URL(W.config.mapUrl);
        if (url.protocol !== "https:") throw new Error("Map links must use HTTPS.");
        link.href = url.href;
      } catch { return; }
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "venue-map-link";
      link.setAttribute("aria-label", "Find the venue on Google Maps (opens a new tab)");
      const image = document.createElement("img");
      image.src = W.config.mapButton;
      image.alt = "Open map";
      image.loading = "lazy";
      image.addEventListener("error", () => {
        link.classList.add("is-fallback");
        image.replaceWith(document.createTextNode("Open map ↗"));
      });
      link.append(image);
      area.append(link);
      section.append(area);
    }
  });
})();
