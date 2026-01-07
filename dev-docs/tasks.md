# LobeDrive Website - Development Tasks

## Purpose
This file tracks website updates, content changes, and maintenance tasks.

## Active Tasks

### **Critical Priority (V1 Launch - Mandatory)**

*No critical tasks remaining*

### High Priority (V1 Launch)

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

- [x] **Create Bluetooth Setup Guide Page (V1 MANDATORY)**
      Completed: 2025-12-30
      Phase: V1 Launch
      Owner: Jakob (Technical Writer agent)
      Result:
      - Created comprehensive bluetooth-setup.html page
      - 5-step pairing process: button pairing mode → phone Bluetooth → device selection → app detection → car audio connection
      - 6 troubleshooting sections covering common issues (pairing mode, app trigger, audio playback, connection drops, status display, general support)
      - Success verification section with visual indicators
      - Prerequisites checklist
      - Bilingual support (English/Swedish) via lang.js integration
      - Brand-compliant design (Zen Green #A5C49F, Soft Sand #F7F4EF, calm-tech principles)
      - Mobile-responsive with custom CSS styles
      - Emphasizes hands-free safety benefit throughout
      - Clear messaging: "Bluetooth button is optional, app works fully without it"
      - Links to contact.html for additional support
      - All copy follows @docs/BRAND.md tone (warm, grounded, direct, safety-first)
      - Integrated into site navigation (contact.html FAQ, index.html inline link + footer, all bilingual)
      - Added to sitemap.xml (priority 0.8)
      - Refactored embedded HTML from translation strings (howItWorks.step1Text cleaned)
      - SEO verified: proper metadata, heading hierarchy, internal linking, accessibility maintained
      - Zero regressions: all previous brand compliance fixes intact

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

- [x] **Complete Bilingual Support (Swedish/English)**
      Completed: 2025-12-29
      Phase: V1 Launch
      Owner: Jakob
      Result:
      - Created lang.js translation data structure with complete Swedish/English content
      - Implemented language-switcher.js with localStorage persistence
      - Added language switcher UI component to navigation (flags + toggle)
      - Translated all index.html content (hero, features, FAQ, footer, etc.)
      - Fixed brand name spelling: "Lobe + Drive" (not "Lob + Drive")
      - Implemented bilingual support for contact.html (support FAQ, contact form)
      - Added SEO meta tags to all pages (hreflang, Open Graph, Twitter Card)
      - Integrated pre-translated legal pages:
        * privacy.html ↔ privacy_sv.html
        * terms.html ↔ terms_sv.html
      - Legal pages use separate static files (not JavaScript translation)
      - All language switchers link correctly between EN/SV versions
      - Footer links properly point to correct language versions
      Commits: db319d9, 5d6ff97, ce2e758, bc85c9e, 1a7708f

- [x] **Refine Swedish Copy for Idiomatic Quality and Brand Voice**
      Completed: 2025-12-29
      Phase: V1 Launch
      Owner: Jakob (with Sofia Lindholm agent)
      Result:
      - Comprehensive rewrite of ALL Swedish website copy using English as strict master
      - 234 total improvements (117 insertions, 117 deletions) across 3 files
      - Files modified:
        * assets/js/lang.js (58 changes to Swedish object)
        * privacy_sv.html (92 changes to privacy policy)
        * terms_sv.html (84 changes to terms of service)
      - Key brand voice improvements:
        * "Anmäl intresse" vs "Skriv upp dig" (more professional)
        * "Återta klarheten" vs "Återställ klarhet" (stronger agency)
        * "Kör säkrare" (imperative) over "köra säkrare" (infinitive)
      - Improved natural Swedish flow while preserving legal GDPR terminology
      - Enhanced clarity and calm-tech brand voice throughout
      - Agent: Sofia Lindholm (Swedish copy specialist)

- [x] **Add Bilingual Support to References Page**
      Completed: 2025-12-29
      Phase: V1 Launch
      Owner: Jakob (with Sofia Lindholm agent)
      Result:
      - Created references_sv.html with Swedish translations
      - Academic titles and citations remain in English (per requirements)
      - Descriptions translated to natural Swedish
      - Added SEO meta tags (hreflang, Open Graph, Twitter Card) to both versions
      - Added language switcher to navigation in both versions
      - Footer links correctly point to language-specific legal pages
      - Key translations:
        * "Vetenskapliga referenser som stödjer LobeDrives evidensbaserade metod"
        * "KBT-baserade ilskainterventioner minskar aggressiv körning med ~35–50%"
        * "Omfattande översikt av mekanismerna bakom vägaggression"
      - Files: references.html (updated), references_sv.html (created)
      - Commit: 569f032

- [x] **LobeDrive Web UI Refinement - Hero Section & Section Flow**
      Completed: 2026-01-07
      Phase: V1 Launch
      Owner: Jakob (with ui-designer, tech-copywriter, Sofia Lindholm agents)
      Result:
      - Completed 7-step UI refinement process with mandatory approval checkpoints
      - Hero section redesigned with 3-step visual flow diagram (Irritation → Press button → Clarity)
      - Typography refined: headline 2.5rem/500 weight, subheadline 1.125rem
      - Visual noise removed: breathing circles deleted, 90px arrow reduced to 16px chevron
      - Solid Soft Sand (#F7F4EF) background for calm consistency
      - Section padding hierarchy implemented: primary 112px, supporting 80px, compact 64px
      - Divider architecture refined: road dividers 80px padding (increased from 30px), opacity 0.35
      - Brain illustration spacing increased: gap 48px, margin 64px (premium breathing room)
      - Column underline subtlety: width 60%, opacity 0.5
      - Option 3 hero copy selected: "Drive safer when frustration strikes" / "Kör säkrare när frustrationen slår till"
      - Subheadline: "Real-time coaching that restores clarity in seconds" / "Realtidscoaching som ger dig klarhet på sekunder"
      - Swedish copy refined by Sofia Lindholm agent ("ger dig klarhet" for direct action-oriented language)
      - Handsfree fix applied: single handsfree.svg icon, no <br> tags, simplified "Press button" label
      - Visual flow labels: "Irritation spikes", "Press button", "Clarity returns"
      - Full accessibility verification: WCAG AA+ contrast ratios, semantic HTML (figure/figcaption), screen reader support (.sr-only)
      - Calm-tech principles verified: minimal attention demand, visual clarity, intentional spacing, 5-second comprehension achieved
      - Mobile responsive: vertical flow stack, rotated arrows (90deg), proportional icon sizing (140px circles, 80px handsfree)
      - Files modified: index.html (hero structure), styles.css (typography, spacing, hierarchy, responsive), lang.js (hero copy, flow labels)
      - Brand compliance: all changes align with BRAND.md calm-tech principles and uiux-concept.md ("reduce demand, don't add guidance")
      - Visual parity achieved with mobile app's minimal, ensō-centered interface
      - Zero accessibility degradation, zero scope creep, zero brand violations

## Backlog (Post-V1)

- [ ] Blog section for content marketing
- [ ] Case studies page
- [ ] Video demos/tutorials
- [ ] Partner showcase section
- [ ] Additional language support (Danish, Norwegian, Finnish)
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
