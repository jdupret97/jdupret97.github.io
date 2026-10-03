# Jean-Loup Dupret — academic website

A complete, lightweight academic website for GitHub Pages, inspired by the clean layout of Songyan Hou’s site. It uses plain HTML, CSS and a small JavaScript file; no installation or build process is needed.

## Preview

Open `index.html` in a browser. All content, navigation and appearance switching work locally.

## Website and deployment

Website: https://jdupret97.github.io/

GitHub Pages publishes this repository from the `main` branch and the root folder. Changes committed to `main` are deployed automatically. No build or dependency installation is required.

Official instructions: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Edit the website

- `index.html`: biography, news, publication entries, teaching, academic background and contact information. Edit a file on GitHub and commit to update the website after Pages is enabled.
- `assets/style.css`: layout, colors, light/dark appearance, mobile and print styles. The accent color is defined by `--accent`.
- `assets/site.js`: the appearance button and navigation highlighting. Academic content remains readable without JavaScript. Appearance preferences are stored locally in the visitor’s browser.
- `assets/portrait.png`: portrait from your public ETH profile. To change it, replace the image and update its dimensions and alternative text if necessary.
- `.nojekyll`: tells GitHub Pages to serve the static files directly.

Update the footer’s month and year when changing the content. No tracking scripts, third-party fonts, analytics or external JavaScript libraries are loaded.

## Content review

The content was assembled on 3 October 2026 from the supplied UvA, ETH and Google Scholar profiles, with publication metadata checked against arXiv, the NeurIPS proceedings, the coauthor’s profile and journal records where they conflicted. See `SOURCES.md` for decisions and source links.

The UvA course information uses the course and September 2026 start previously supplied by Jean-Loup; a public UvA course link was not located. The older ETH CV is not presented as a current CV. Add an up-to-date CV later if desired.

PDF links point to the authors’ existing arXiv/ETH copies. If those addresses change, update the links or add copies you have the right to distribute to an `assets/papers/` folder.
