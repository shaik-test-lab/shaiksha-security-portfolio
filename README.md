# Tapal Shaikshavali | Security Auditor and GRC Analyst Portfolio

A static portfolio site built with plain HTML, CSS and JavaScript. There is no build step and no dependencies.

## Structure

```
index.html                      Page content
css/style.css                   All styling
js/main.js                      Mobile menu, active nav link, footer year
assets/resume/                  Resume PDF (linked from the Download resume button)
.nojekyll                       Tells GitHub Pages to serve files as they are
```

## Deploy on GitHub Pages

1. Create a new public repository on GitHub, for example `security-portfolio`.
2. Unzip this project and upload everything inside the folder to the repository root (`index.html` must be at the top level). Using git:
   ```
   git init
   git add .
   git commit -m "Add portfolio"
   git branch -M main
   git remote add origin https://github.com/<username>/security-portfolio.git
   git push -u origin main
   ```
3. In the repository, open **Settings > Pages**.
4. Under **Build and deployment**, set **Source** to **Deploy from a branch**, choose **main** and **/ (root)**, then save.
5. After a minute or two the site is live at `https://<username>.github.io/security-portfolio/`.

To get a shorter address (`https://<username>.github.io/`), name the repository `<username>.github.io`.

## Updating content

- **Text, links, contact details:** edit `index.html`.
- **Colors and fonts:** edit the variables at the top of `css/style.css`.
- **Resume:** replace the PDF in `assets/resume/`. If you change the file name, update the link in the hero section of `index.html`.
- **Projects:** the "How I run an audit" section can sit alongside a projects section if you add real engagements or case studies later. Keep any client details confidential.
