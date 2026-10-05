# Project Website

Public URL: https://ppppyq.github.io/SeamLoc/

This is a static site with no build dependencies. GitHub Pages publishes the `docs/` directory on `main`. In repository settings, select **Pages > Deploy from a branch > main > /docs**.

For a quick local preview, open `docs/index.html` in a browser. Relative image and video paths also work without a server.

## Content

- `docs/index.html`: English project title, overview, video, hardware, experiments, related repositories, acknowledgments, and contact.
- `docs/styles.css`: Responsive layout and typography.
- `docs/site.js`: Mobile navigation and video error handling.
- `docs/assets/seamloc-demo.mp4`: Project demonstration video.
- `docs/assets/video-poster.jpg`: Preview frame extracted from the demonstration.
- `docs/assets/`: Project figures and locally bundled Lucide icons.
- `code/`: Reserved for a future source release. No localization source code is included.

Replace the MP4 at the same path to update the video. Update its poster when appropriate. Keep result descriptions consistent between the website and README, especially the distinction between checkpoint error and endpoint closure error.

Figure images are derived from the project's manuscript assets. The current demonstration is taken from `ping_SeamLoc.mp4`. The underlying research source, laboratory records, manuscript source, and private submission information are not part of this public repository.

Lucide icon assets are distributed under the ISC license retained at `docs/assets/icons/LICENSE`.
