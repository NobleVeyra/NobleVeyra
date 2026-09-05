# NobleVeyra Advisory — GitHub Pages Website

This is a static, mobile-responsive site built for GitHub Pages. No paid hosting is required.

## 1. Edit your live links first
Open `site-config.js` and replace these placeholders:

- `strategyPaymentUrl` — your Stripe $199 payment link
- `strategyBookingUrl` — your Google Calendar booking link
- `intensiveApplicationUrl` — leave the email link or replace it with an application form
- `instagramUrl`
- `threadsUrl`
- `email` if you use a different address

Do **not** edit the rest of the code unless you want to customize the site.

## 2. Upload to GitHub
1. Sign in at GitHub.com.
2. Create a new public repository. Suggested name: `nobleveyra-advisory`.
3. Upload **all files and the `assets` folder** from this package to the repository root.
4. Commit the files.
5. Open **Settings → Pages**.
6. Under **Build and deployment**, choose **Deploy from a branch**.
7. Choose `main` and `/ (root)`, then Save.
8. GitHub will provide a temporary `github.io` address.

## 3. Connect nobleveyraadvisory.com
In **Settings → Pages → Custom domain**, enter:

`www.nobleveyraadvisory.com`

At your domain registrar, GitHub normally uses a CNAME for `www` pointing to:

`YOUR-GITHUB-USERNAME.github.io`

For the root/apex domain, GitHub documents these A records:

- `185.199.108.153`
- `185.199.109.153`
- `185.199.110.153`
- `185.199.111.153`

After DNS propagates and GitHub verifies the domain, enable **Enforce HTTPS**.

> DNS requirements can change. Before editing DNS, compare these values with GitHub's current official custom-domain documentation.

## 4. Site structure
- `index.html` — main one-page site
- `styles.css` — full responsive brand styling
- `site-config.js` — links/email you should edit
- `script.js` — navigation and subtle scroll effects
- `privacy.html` — starter privacy page
- `terms.html` — starter terms page
- `404.html` — custom not-found page
- `assets/` — optimized NobleVeyra images

## 5. Brand system used
- Navy: `#062A45`
- Gold: `#AF9050`
- Ivory: `#FEF9F2`

## Important
The Privacy and Terms pages are starter templates, not legal advice. Have final legal terms reviewed for your business and jurisdiction.
