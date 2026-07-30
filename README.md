# Marsha Walungua — SOC Analyst Portfolio

Dark, single-page portfolio built with vanilla HTML/CSS/JS. Deployable on **GitHub Pages**.

## Sections

- **Hero** — title, tagline, availability status
- **About** — background + terminal card with live-ish output
- **Skills & Tools** — SIEM, network analysis, defense, scripting, homelab
- **Certifications** — CCNA, Security+ (in progress), CySA+ & Splunk (next goals)
- **Projects** — Home SIEM Lab, CTF Writeups, PCAP Analysis, Detection Rules
- **Contact** — GitHub, LinkedIn, Email

## Deploy

**Via GitHub Actions (recommended):**

1. Push this repo to `github.com/marsha-walungua/marsha-walungua.github.io`
2. Go to **Settings > Pages > Source: GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` auto-deploys

**Or manually:**

Just push the files to a repo named `marsha-walungua.github.io` and enable Pages from the root of the `main` branch.

## Customize

- Edit `index.html` to update content
- Edit `style.css` to tweak colors (check the `:root` variables)
- Edit `script.js` for interactivity

Colors:
```css
--accent: #06b6d4;       /* Cyan/teal — primary accent */
--bg-primary: #0a0e17;   /* Dark background */
--bg-secondary: #111827;  /* Card background */
```

## License

MIT — go wild 🛡️
