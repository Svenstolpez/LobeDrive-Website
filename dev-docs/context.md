# LobeDrive Website - Development Context

## Purpose
This file defines the technical architecture and content guidelines for the LobeDrive public website.

## Technical Stack

**Core Technologies:**
- HTML5 semantic markup
- CSS3 (custom, no framework)
- Vanilla JavaScript (ES6+)
- Responsive design (mobile-first)

**Performance:**
- No heavy frameworks (keep it light)
- Asset optimization (SVG, compressed images)
- Minimal JavaScript for core functionality
- Fast load times (<2s on 3G)

**Hosting:**
- Static site hosting (GitHub Pages, Netlify, or similar)
- HTTPS enabled
- CDN for assets if needed

## Architecture Decisions

### Design Philosophy
- **Minimal attention demand:** Calm-tech principles
- **Clear hierarchy:** Guide user to download CTA
- **Zen aesthetics:** Space, soft boundaries, low contrast
- **Mobile-first:** Most users will discover on mobile

### Content Structure
- **Single scrolling page** (index.html) as primary experience
- **Separate pages** for legal (privacy, terms)
- **References page** for scientific credibility
- **Contact page** for support/inquiries

### Brand Asset Usage
- **Location:** @web/Docs/
- **SVG files:** 27 files including logos, icons, elements
- **Demo video:** lobedrive_demo.mp4
- **Brand guide:** LobeDrive_Brand_Guide.html

## Content Guidelines

All website copy must follow:

### Tone of Voice (from @docs/BRAND.md)
- Warm but not soft
- Direct but not harsh
- Professional but human
- Subtle humor, no mockery

### Messaging Rules (from @startup/coach-concept.md)
- **Say:** "Rage coach," "Just-in-time coach," "Clarity," "Agency"
- **Don't say:** "Mindfulness app," "Wellness tool," "Relaxation," "Therapy"

### Value Proposition (from @startup/business/brand-position.md)
- LobeDrive is the first just-in-time emotional stabilization system for drivers
- Focus on safety enhancement, not wellness
- Evidence-informed micro-interventions
- Minimal attention required

## Key Pages

### index.html (Landing Page)
**Sections:**
1. **Hero:** Clear value proposition + CTA
2. **Problem:** Road rage is real, affects everyone
3. **Solution:** Just-in-time coach for real traffic situations
4. **How it works:** 3-4 simple steps
5. **Science:** Evidence-informed approach
6. **Testimonials:** Social proof (when available)
7. **Download CTA:** App Store link

**Visual elements from @web/Docs/:**
- logo_2_zen_wheel_clean.svg (header)
- brain_enso.svg (hero section)
- element_zen_waves_wide.svg (section dividers)
- icon_hands_free.svg (Bluetooth feature)
- lobedrive_demo.mp4 (demo video)

### privacy.html
- GDPR compliant
- Clear, accessible language
- No legal jargon
- What data we collect, why, how long

### terms.html
- User agreement
- Liability disclaimers
- Clear language

### references.html
- Scientific backing for methodology
- Links to research papers
- Credibility building
- Evidence for affect regulation, cognitive reframing

### contact.html
- Simple contact form
- Support email
- Social links (LinkedIn)

## Development Guidelines

### Adding/Updating Content
1. Read @docs/BRAND.md for tone and visual guidelines
2. Check @startup/business/brand-position.md for positioning
3. Verify messaging against @startup/coach-concept.md (no mindfulness language)
4. Use brand assets from @web/Docs/
5. Update @web/dev-docs/tasks.md when making changes

### Code Quality
- Semantic HTML5 markup
- Accessible (ARIA labels, alt text, keyboard navigation)
- Valid HTML/CSS (W3C validation)
- Cross-browser tested (Chrome, Safari, Firefox, Edge)

### Performance Optimization
- Compress images/videos
- Minify CSS/JS for production
- Lazy load below-the-fold content
- Use SVG for icons and logos

## Related Contexts
- **Brand guidelines:** @docs/BRAND.md
- **Market positioning:** @startup/business/brand-position.md
- **Product identity:** @startup/dev-docs/context.md
- **Coach methodology:** @startup/coach-concept.md
- **Customer segments:** @startup/business/customer-segments.md
