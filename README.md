# Abdul Wahab Rehan — Personal Portfolio

Responsive personal portfolio built with HTML, Tailwind CSS (CDN) and vanilla JavaScript.

## Files
- `index.html` — complete portfolio layout and styling
- `script.js` — animations, mobile navigation, active section navigation and EmailJS contact form
- `assets/` — place your CV PDF here

## 1. Add your CV PDF
Create an `assets` folder (already included) and place your CV inside it with this exact filename:

`Abdul-Wahab-Rehan-CV.pdf`

The Download CV buttons already point to `assets/Abdul-Wahab-Rehan-CV.pdf`.
If your file has a different name, update the `href` in `index.html`.

## 2. Make the contact form deliver messages to your email

The form uses EmailJS so it can send email from a static website without your own backend.

1. Create a free account at https://www.emailjs.com/
2. Add and connect an email service in the EmailJS dashboard.
3. Create an email template. Set the recipient / **To Email** to:
   `abdulwahabrehan7@gmail.com`
4. Add these template variables (names must match):
   - `from_name`
   - `reply_to`
   - `subject`
   - `message`
5. In `script.js`, replace:
   - `YOUR_EMAILJS_PUBLIC_KEY`
   - `YOUR_EMAILJS_SERVICE_ID`
   - `YOUR_EMAILJS_TEMPLATE_ID`
   with the values from your EmailJS dashboard.
6. Save and test the form from your deployed website.

Suggested EmailJS template:
- **To email:** `abdulwahabrehan7@gmail.com`
- **From name:** `Portfolio contact from {{from_name}}`
- **Reply to:** `{{reply_to}}`
- **Subject:** `{{subject}}`
- **Message body:** `{{message}}`

Important: a static HTML page cannot securely send email by itself. EmailJS handles the delivery. Never put an email account password or private SMTP credentials in frontend JavaScript. Add EmailJS domain restrictions and CAPTCHA/rate limiting in the EmailJS dashboard where available to reduce spam.

## 3. Update project links

The project URLs currently use `YOUR-GITHUB-USERNAME`. Replace this placeholder in `index.html` with your GitHub username.

Current project URL patterns:
- Toursaza: `https://YOUR-GITHUB-USERNAME.github.io/toursaza/`
- AutoWorth: `https://YOUR-GITHUB-USERNAME.github.io/autoworth-car-predictor/`

Also update the GitHub repository links in the same project cards if your repository names differ.

## 4. Run locally
Open `index.html` in a browser, or use the VS Code **Live Server** extension.

## 5. Deploy with GitHub Pages
1. Create a GitHub repository, for example `abdul-wahab-portfolio`.
2. Upload `index.html`, `script.js`, `README.md`, and the `assets` folder.
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
5. Wait for GitHub Pages to publish the website.

## Notes
- Tailwind CDN, Google Fonts, Font Awesome and EmailJS are loaded from external CDNs, so an internet connection is required for those features.
- The website is responsive and includes reduced-motion support.
- The skill-bar percentages are visual presentation indicators, not independently assessed proficiency scores; adjust or remove them if you prefer not to display ratings.
