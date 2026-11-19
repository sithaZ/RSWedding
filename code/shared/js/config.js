/* Resource paths are relative to index.html, not to this JS file.
   Keep your existing resource names. Replace a path here if you rename a file. */
window.Wedding = {
  config: {
    couple: "Ruth & Sea",
    date: "18 December 2026",
    receptionTime: "5:00 PM",
    venue: "Lucky Bright Restaurant (598), St Chea Sophara, Russey Keo, Phnom Penh",
    // This is a search for the venue printed in the artwork. Replace with your
    // exact Google Maps share link when available.
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Lucky%20Bright%20Restaurant%20598%20Phnom%20Penh",
    // Increase the version when replacing the file under the same name.
    music: "assets/music/Valentines Day.mp3?v=2",
    musicVolume: 0.225, // 50% of the original volume (0.45).
    pdf: "assets/images/RS_Wedding_Digital_Invitation-PCover.pdf",
    seal: "assets/images/wax-seal-psd-mockup.png",
    mapButton: "assets/images/OpenMap Button.png",
    // Source sequence checked visually: 01 cover; 02-05 invitation; 06 gallery;
    // 07 programme; 08 dress; 09 venue and QR; 10 closing.
    images: {
      cover: "assets/images/RS_Wedding_Digital_Invitation-PCover-01.jpg",
      welcome: "assets/images/RS_Wedding_Digital_Invitation-PCover-02.jpg",
      khmer: "assets/images/RS_Wedding_Digital_Invitation-PCover-03.jpg",
      english: "assets/images/RS_Wedding_Digital_Invitation-PCover-04.jpg",
      greeting: "assets/images/RS_Wedding_Digital_Invitation-PCover-05.jpg",
      gallery: "assets/images/RS_Wedding_Digital_Invitation-PCover-06.jpg",
      schedule: "assets/images/RS_Wedding_Digital_Invitation-PCover-07.jpg",
      dress: "assets/images/RS_Wedding_Digital_Invitation-PCover-08.jpg",
      venue: "assets/images/RS_Wedding_Digital_Invitation-PCover-09.jpg",
      closing: "assets/images/RS_Wedding_Digital_Invitation-PCover-10.jpg"
    }
  },
  sections: []
};
