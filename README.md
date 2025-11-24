# LobeDrive Website

A single-page landing website for LobeDrive - a psychology tool for managing road rage and driving frustration.

## 🚀 Quick Start

This is a static website that can be deployed anywhere. No build process required!

### Local Development

1. Simply open `index.html` in your browser
2. Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server
   ```
3. Visit `http://localhost:8000` in your browser

## 📋 Project Structure

```
website/
├── index.html          # Main HTML file
├── assets/
│   ├── css/
│   │   └── styles.css  # All styles (mobile-first, responsive)
│   ├── js/
│   │   └── script.js   # JavaScript for interactions and form
│   └── images/         # Place your images here
└── README.md           # This file
```

## 🎨 Design Specifications

- **Colors**:
  - Primary: #6B9080 (Soft green)
  - Accent: #A4B0A8 (Warm gray)
  - Background: #FFFFFF, #F5F5F5
  - Text: #333333
- **Font**: Inter (loaded from Google Fonts)
- **Style**: Clean, calming, zen-inspired minimalism
- **Mobile-first**: Fully responsive design

## 📧 Setting Up Email Waitlist

The form is currently set up to store submissions locally. You need to integrate with an email service:

### Option 1: Google Sheets (Easiest - Free)

1. Create a Google Sheet
2. Go to Extensions > Apps Script
3. Use this script:

```javascript
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    new Date(),
    data.email,
    data.name,
    data.interest
  ]);

  return ContentService.createTextOutput(JSON.stringify({success: true}))
    .setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy as Web App (Anyone can access)
5. Copy the URL and update `script.js` line with your URL in the `submitToGoogleSheets` function
6. Uncomment the function call in the form submit handler

### Option 2: Mailchimp

1. Create a Mailchimp account
2. Create an audience
3. Get your API key and Audience ID
4. Update the `submitToMailchimp` function in `script.js`
5. Uncomment the function call

### Option 3: ConvertKit

1. Create a ConvertKit account
2. Create a form
3. Get your Form ID
4. Update the `submitToConvertKit` function in `script.js`
5. Uncomment the function call

### Option 4: Custom Backend

Create your own API endpoint and update the fetch call in `script.js`:

```javascript
await fetch('https://your-api.com/api/waitlist', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

## 🌐 Deployment Options

### GitHub Pages (Recommended - Free)

1. Push this website folder to your GitHub repository
2. Go to repository Settings > Pages
3. Select branch and `/website` folder
4. Your site will be live at `https://yourusername.github.io/LobeDrive`

To use with custom domain:
1. Add a `CNAME` file with your domain name
2. Configure DNS settings with your domain provider

### Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the website directory
3. Follow the prompts
4. Your site is live!

### Netlify (Free)

1. Drag and drop the `website` folder to [netlify.com/drop](https://app.netlify.com/drop)
2. Or connect your GitHub repo
3. Your site is live!

### Traditional Web Hosting

1. Upload all files via FTP to your hosting provider
2. Ensure `index.html` is in the root directory

## 🎯 Customization

### Update Contact Information

Edit `index.html` and find:
- Email: `contact@lobedrive.com`
- Social media links (currently placeholders with `#`)

### Add Your Logo

1. Add your logo image to `assets/images/`
2. Update the navigation logo in `index.html`:
   ```html
   <a href="#hero" class="nav-logo">
       <img src="assets/images/logo.png" alt="LobeDrive">
   </a>
   ```

### Update Colors

All colors are defined in `assets/css/styles.css`. Search for:
- `#6B9080` - Primary green
- `#A4B0A8` - Accent gray
- `#333333` - Text color

### Add Analytics

Add Google Analytics or similar before the closing `</body>` tag in `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📱 Mobile Navigation

The site includes a responsive mobile navigation:
- Hamburger menu on small screens
- Smooth scroll to sections
- Auto-close on link click

## ✨ Features

- ✅ Fully responsive (mobile-first design)
- ✅ Smooth scrolling navigation
- ✅ Email form validation
- ✅ Local storage backup for form submissions
- ✅ Animated sections on scroll
- ✅ FAQ section
- ✅ Clean, accessible HTML
- ✅ SEO-friendly meta tags
- ✅ Fast loading (no dependencies except Google Fonts)

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 Legal Pages

Don't forget to create:
- Privacy Policy
- Terms of Service

You can use generators like:
- [TermsFeed](https://www.termsfeed.com)
- [FreePrivacyPolicy](https://www.freeprivacypolicy.com)

## 🤝 Support

For questions or issues with the website:
- Email: contact@lobedrive.com
- GitHub: [Create an issue](https://github.com/yourusername/LobeDrive/issues)

## 📝 License

© 2025 LobeDrive. All rights reserved.

---

Built with ❤️ for safer, calmer driving.
