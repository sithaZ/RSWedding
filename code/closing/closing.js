(() => {
  const W = window.Wedding;
  W.sections.push({
    id: "closing", title: "Thank you", image: "closing", number: 10,
    alt: "Thank you. Ruth and Sea share a joyful moment in the garden, beneath their Khmer wedding monogram.",
    enhance(section) {
      const footer = document.createElement("footer");
      footer.className = "invitation-footer";
      const label = document.createElement("span"); label.className = "eyebrow"; label.textContent = "WITH LOVE, ALWAYS";
      const name = document.createElement("p"); name.textContent = W.config.couple;
      const back = document.createElement("a"); back.href = "#welcome"; back.className = "back-link"; back.textContent = "Back to the beginning ↑";
      footer.append(label, name, back);
      section.append(footer);
    }
  });
})();
