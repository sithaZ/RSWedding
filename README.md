# Wedding invitation

A static website. No installation or build step is required.

## Run locally

Open PowerShell in this folder and run:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Open http://localhost:8000 in your browser. Keep PowerShell open while previewing. Press Ctrl+C to stop the server. If port 8000 is busy, use 8001 instead.

You can also double-click index.html to open it directly.

## Personalize

Edit `resources.js`. Change the sample names, date, timezone, location, messages, and schedule. Set `isDemo: false` when your real details are ready. Keep the UTC offset in `date` and `endDate` consistent with the venue timezone. The schedule text is edited separately.

## Resource folder format

```text
Wedding001/
  index.html
  styles.css
  app.js
  resources.js                 <-- all content and resource paths
  assets/
    images/
      hero.jpg                 <-- add your own photo
      photo-01.jpg
      photo-02.jpg
      photo-03.jpg
    documents/
      invitation.pdf           <-- add your invitation PDF
    music/
      our-song.mp3             <-- add your music
```

The included SVG illustrations are placeholders you can keep or replace. Add your files, then update the resources section in `resources.js`:

```javascript
resources: {
  hero: { src: "assets/images/hero.jpg", alt: "Our engagement photo" },
  gallery: [
    { src: "assets/images/photo-01.jpg", alt: "Together at the beach", caption: "Our favorite place" },
    { src: "assets/images/photo-02.jpg", alt: "Our engagement", caption: "The easiest yes" },
    { src: "assets/images/photo-03.jpg", alt: "Celebrating together", caption: "A new beginning" }
  ],
  invitationPdf: "assets/documents/invitation.pdf",
  music: "assets/music/our-song.mp3",
  musicVolume: 0.35
}
```

Use forward slashes and paths relative to `index.html`. For example, use `assets/music/our-song.mp3`, not a Windows drive path. Full HTTPS resource URLs also work when the host permits access. Keep filenames and capitalization exact for hosting. Move the whole project folder together to preserve relative paths. Refresh the browser after changes.

Images: JPG, PNG, WebP, or SVG. Portrait images work best for the tall arch and gallery. PDF: set the path to your final PDF. Music: MP3 is a practical choice. Music starts only after the visitor presses Play. Empty PDF/music paths display unavailable controls until you add files. The download link works best with a PDF hosted alongside the website; external hosts may open the file instead.

Fonts use Google Fonts with local serif/sans-serif fallbacks when offline. All placeholder artwork is included locally. There is no RSVP collection or backend. Calendar downloads are created locally in the visitor's browser.

To host later, upload this entire folder to any static web host with `index.html` at the site root.
"# RSWedding" 
