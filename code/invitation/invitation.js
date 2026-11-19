/* The four invitation pages follow the supplied image sequence, 02-05. */
(() => {
  const W = window.Wedding;
  W.sections.push(
    {id: "welcome", title: "Welcome", image: "welcome", number: 2, eager: true,
      alt: "In the celebration of love. Ruth and Sea invite you to their wedding on Friday, 18 December 2026 at 5 PM."},
    {id: "khmer-invitation", title: "Khmer invitation", image: "khmer", number: 3,
      alt: "Formal wedding invitation in Khmer, with the families' names and wedding details."},
    {id: "english-invitation", title: "English invitation", image: "english", number: 4,
      alt: "Prak Phannarath and Chor Sokchou, together with Chhan Ratha and Veng Khim, invite you to the wedding reception of Ruth and Sea, Friday 18 December 2026 from 5 PM, at Lucky Bright Restaurant (598), St Chea Sophara, Russey Keo, Phnom Penh."},
    {id: "greeting", title: "Celebrate with us", image: "greeting", number: 5,
      alt: "Join us as our honoured guests, and bless the beginning of our life together. A portrait of the couple beneath the trees."}
  );
})();
