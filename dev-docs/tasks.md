# LobeDrive Website - Development Tasks

## Purpose
This file tracks website updates, content changes, and maintenance tasks.

## Active Tasks

### **Critical Priority (V1 Launch - Mandatory)**

- [ ] **Create Bluetooth Setup Guide Page (V1 MANDATORY)**
      Status: Not started
      Phase: V1 Launch
      Notes: Users need clear instructions for pairing Bluetooth button with app and car
      Acceptance Criteria:
      - Create dedicated page (e.g., bluetooth-setup.html or integrated in How It Works)
      - Step-by-step pairing instructions (app → button → car)
      - Troubleshooting section (connection fails, button not responding, etc.)
      - Visual aids (screenshots, icons, diagrams)
      - Emphasize hands-free safety benefit
      - Link from main page and "How it works" section
      - Mobile-responsive design

### High Priority (V1 Launch)

- [ ] **Redesign Hero Section for Immediate Comprehension**
      Status: Not started
      Phase: V1 Launch
      Owner: Jakob (with design/copywriter support)
      Notes: Current hero doesn't clearly communicate how the app works
      Acceptance Criteria:
      - Design visual representation of app functionality (avoid text-heavy explanation)
      - Consider: "Situation → Button → Coach → Clarity" visual flow
      - Show Bluetooth button + in-app button options visually
      - Use icons/illustrations from @web/Docs/
      - Test with 5-second comprehension rule (user understands concept in <5s)
      - Follow @docs/BRAND.md (minimal Scandinavian, zen-inspired, calm-tech)
      - Integrate clear value proposition from @startup/business/brand-position.md
      Reference: @startup/business/brand-position.md Section 11


- [ ] Add App Store download CTA
      Status: Not started
      Notes: Prominent placement in hero and footer

- [ ] Verify privacy.html GDPR compliance
      Status: Not started
      Notes: Review with legal if needed

### Medium Priority

- [ ] Add "How it works" section to landing page
      Status: Not started
      Notes: 3-4 simple steps, visual aids from @web/Docs/, emphasize Bluetooth hands-free option
      Acceptance Criteria:
      - Write 3-4 steps: "1. Irritation spikes → 2. Press button (Bluetooth or in-app) → 3. Hear coach → 4. Clarity returns"
      - Include visuals/icons
      - Mention both Bluetooth and in-app options
      - Link to Bluetooth setup guide

- [ ] Create references.html with scientific backing
      Status: Not started
      Notes: Link to research on affect regulation, cognitive reframing

- [ ] Optimize page speed and performance
      Status: Not started
      Notes: Compress assets, minify CSS/JS

### Low Priority
- [ ] Add contact form functionality
      Status: Not started
      Notes: Simple form or mailto link

- [ ] Add social proof section (when testimonials available)
      Status: Not started
      Notes: Wait for user feedback

## Completed

- [x] **Verify Website Brand Guidelines Compliance**
      Completed: 2025-12-28
      Phase: V1 Launch
      Owner: Jakob
      Result:
      - Created comprehensive brand compliance audit (@web/dev-docs/brand-compliance-checklist.md)
      - Documented 29 violations across 4 severity levels (@web/dev-docs/brand-audit-findings.md)
      - Fixed all CRITICAL (8), HIGH (11), and MEDIUM (8) violations
      - Color palette: Replaced #2C5F4A → #A5C49F, #6B9080 → #53735B, #333333 → #1A1A1A, #F5F1E8 → #F7F4EF
      - Removed 6 instances of mindfulness/wellness language across all pages
      - Typography: h1 weight 700→600, sizes reduced, transitions 300ms→250ms
      - Border radius: 8px→14px (buttons), 12px→20px (cards)
      - Verified compliance: index.html, contact.html, privacy.html, terms.html, references.html

- [x] **Remove/Replace Outdated App Animation**
      Completed: 2025-12-28
      Phase: V1 Launch
      Owner: Jakob
      Result:
      - Replaced outdated demo video with user-provided webanimation.mp4/webm
      - Backed up old files: lobedrive_demo_OLD.mp4/webm
      - Updated index.html video source paths
      - New animation: 79KB (mp4), 45KB (webm)

- [x] **Update index.html with V1 messaging**
      Completed: 2025-12-28
      Phase: V1 Launch
      Result:
      - Page title: "Turn Road Rage into Calm" → "Restore Clarity When Irritation Strikes"
      - Hero headline: Updated to agency-focused language
      - Hero subheadline: "A just-in-time coach that helps you choose clarity in real traffic conditions"
      - Removed all "breathe" language (2 instances)
      - Science section: "Mindfulness CBT" → "Cognitive Regulation"
      - Features: "mindfulness" → "affect regulation"
      - Waitlist: "drive calmer" → "drive with clarity"
      - All copy now follows @startup/business/brand-position.md

- [x] **Add Education Platform Teaser Section**
      Completed: 2025-12-28
      Phase: V1 Launch
      Owner: Jakob
      Result:
      - Added new SECTION 6 to index.html (lines 240-285)
      - Two-column grid layout: "Education Platform teaches" vs "Mobile App applies"
      - Headline: "Learn the principles. Apply them in real time."
      - Subheadline: "Coming soon: A 30-minute course on emotional regulation in traffic"
      - Positioned education as core knowledge layer, app as memory trigger
      - CTA links to waitlist
      - Added complete CSS styles (lines 688-770): responsive grid, white cards, custom arrow bullets
      - All language brand-compliant (no mindfulness/therapy terminology)

- [x] **Fix Education Platform Section Layout for Visual Consistency**
      Completed: 2025-12-28
      Phase: V1 Launch
      Owner: Jakob
      Result:
      - Centered column headings and decorative underlines
      - Centered bullet lists within white cards (max-width: 350px, margin: auto)
      - Maintained left-aligned text within lists for readability
      - Improved visual harmony with rest of centered page layout
      - Fixed aesthetic inconsistency between centered intro and left-aligned content

## Backlog (Post-V1)

- [ ] Blog section for content marketing
- [ ] Case studies page
- [ ] Video demos/tutorials
- [ ] Partner showcase section
- [ ] Multi-language support (English, Swedish, Danish)
- [ ] Analytics integration
- [ ] A/B testing framework

## Notes

**CRITICAL GROUND TRUTH (2025-12-17):**
- **Bluetooth setup guide is V1 MANDATORY** (users need clear onboarding instructions)
- **Onboarding is emphasized throughout website** (hands-free safety is core value prop)

**Content Guidelines:**
- Always check @docs/BRAND.md before writing copy
- Verify no mindfulness/wellness language (see @startup/coach-concept.md)
- Use brand assets from @web/Docs/
- Emphasize Bluetooth as recommended hands-free option (not required)
- Update @web/dev-docs/plan.md when milestones are reached
