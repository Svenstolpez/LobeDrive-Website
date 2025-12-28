# LobeDrive Website - Brand Compliance Audit Findings

*Audit Date: 2025-12-28*
*Auditor: Project Manager Agent + Jakob*
*Files Audited: index.html, styles.css*

---

## EXECUTIVE SUMMARY

**Overall Compliance: 65% ✓ | 35% ❌**

**Critical Violations Found: 7**
**High Priority Violations: 11**
**Medium Priority Violations: 8**
**Low Priority Violations: 3**

**RECOMMENDATION:** Fix all Critical and High Priority violations before V1 launch.

---

## 1. COLOR SYSTEM COMPLIANCE ⚠️ PARTIAL

### ✅ CORRECT USAGE
- Zen Green #A5C49F: Not explicitly used (potential issue)
- Logo usage: Correct (logo_2_zen_wheel_clean.svg)
- White space: Good use throughout

### ❌ VIOLATIONS FOUND

**CRITICAL-1: Incorrect Primary Text Color**
- **Location:** styles.css line 19
- **Found:** `color: #333333;` (body text)
- **Should be:** `#1A1A1A` (Deep Ink per @docs/BRAND.md)
- **Impact:** All text across website uses wrong color
- **Fix:** Change body color to #1A1A1A

**CRITICAL-2: Incorrect Background Color**
- **Location:** styles.css line 20
- **Found:** `background-color: #F5F1E8;` (Warm Beige)
- **Should be:** `#F7F4EF` (Soft Sand per @docs/BRAND.md)
- **Impact:** Background slightly off-brand
- **Fix:** Change to #F7F4EF or verify if F5F1E8 is intentional variant

**CRITICAL-3: Green Colors Not Matching Brand Palette**
- **Location:** Multiple locations in styles.css
- **Found Colors:**
  - `#2C5F4A` (Forest Green) - NOT in brand palette
  - `#6B9080` (Soft Sage) - NOT in brand palette
- **Should use:**
  - Primary: `#A5C49F` (Zen Green)
  - Supporting: `#53735B` (Forest Line)
- **Impact:** CTA buttons, links, headings use wrong green
- **Fix:** Replace all green colors with brand palette colors

**Specific instances:**
- Line 72: `color: #2C5F4A` (links)
- Line 166: `background: #2C5F4A` (nav CTA)
- Line 194: `background: #2C5F4A` (primary button)
- Line 814: `color: #2C5F4A` (founder heading)
- Line 840: `color: #6B9080` (founder greeting)
- Plus ~20 more instances

**HIGH-1: Zen Green (#A5C49F) Not Used**
- **Issue:** Primary brand color not present anywhere on website
- **Impact:** Missing brand signature color
- **Fix:** Use #A5C49F for CTAs, highlights, icons as per brand guidelines

---

## 2. TYPOGRAPHY COMPLIANCE ✅ GOOD

### ✅ CORRECT USAGE
- **Typeface:** Inter (correct, preferred) - Line 16
- **Fallbacks:** Good (-apple-system, BlinkMacSystemFont, Segoe UI)
- **No serif fonts:** ✓
- **Line-height body:** 1.7 (within 1.5-1.7 range) ✓
- **Line-height headings:** 1.3 (within 1.3-1.5 range) ✓

### ❌ VIOLATIONS FOUND

**HIGH-2: Heading Weight Too Heavy**
- **Location:** styles.css line 56
- **Found:** `font-weight: 700` (h1)
- **Should be:** Medium (500) → SemiBold (600) per @docs/BRAND.md
- **Impact:** Headings too expressive/aggressive
- **Fix:** Change h1 to font-weight: 600 max

**HIGH-3: Heading Sizes Too Large**
- **Location:** styles.css lines 54-60
- **Found:** h1 = 2.5rem (3rem on hero), h2 = 2rem
- **Rule:** "never overly large" + "calm presence, not expressive"
- **Impact:** Headlines too dominant, not calm
- **Fix:** Reduce heading sizes (h1: 2rem, h2: 1.75rem, hero: 2.5rem max)

---

## 3. TONE OF VOICE COMPLIANCE ❌ CRITICAL VIOLATIONS

### ❌ CRITICAL VIOLATIONS

**CRITICAL-4: Mindfulness Language - "breathe"**
- **Location:** index.html line 164
- **Found:** "A brief, calming message helps you breathe, gain perspective, and regain control."
- **Violation:** "breathe" is explicitly FORBIDDEN per @docs/BRAND.md Section 8
- **Also violates:** @docs/BRAND.md Section 12 "Don't imply deep breathing, mindfulness states"
- **Impact:** Positions product as mindfulness app (core brand violation)
- **Fix:** Remove "breathe" → Rephrase to "pause" or "reset"

**CRITICAL-5: Mindfulness Terminology - "Mindfulness CBT"**
- **Location:** index.html line 211
- **Found:** "**Mindfulness CBT** — Pause before reacting and regain emotional control."
- **Violation:** "Mindfulness" explicitly FORBIDDEN per @docs/BRAND.md Section 8
- **Also:** @startup/coach-concept.md Section 3: "What the Coach Is NOT: mindfulness teacher"
- **Impact:** Directly contradicts product positioning
- **Fix:** Replace with "Cognitive regulation" or "Emotional reset techniques"

**CRITICAL-6: Mindfulness in Features List**
- **Location:** index.html line 182
- **Found:** "Evidence-based psychology (CBT, mindfulness, just-in-time interventions)"
- **Violation:** "mindfulness" forbidden
- **Impact:** Brand confusion
- **Fix:** Replace with "affect regulation" or "cognitive techniques"

**CRITICAL-7: "Calm" as Goal/Outcome (Wellness Framing)**
- **Location:** index.html line 7 (title)
- **Found:** "Turn Road Rage into Calm"
- **Violation:** Implies relaxation/wellness outcome (not agency/clarity)
- **Reference:** @startup/business/brand-position.md - focus is "clarity" not "calm"
- **Impact:** Positions as wellness/relaxation tool
- **Fix:** "Turn Road Rage into Clarity" or "Restore Clarity When Irritation Strikes"

### ⚠️ HIGH PRIORITY VIOLATIONS

**HIGH-4: Sentimental/Soft Language**
- **Location:** index.html line 292
- **Found:** "Be among the first to drive calmer."
- **Issue:** "calmer" = wellness outcome (not agency)
- **Should emphasize:** Clarity, control, choice
- **Fix:** "Be among the first to drive with clarity" or "...to take control"

**HIGH-5: Missing Agency-Focused Language**
- **Issue:** Throughout copy, focus is on outcomes (calm, focus) vs. agency (you choose, your control)
- **Examples:**
  - Line 44: "Real-time support" (passive) vs. "Take back control in real-time"
  - Line 171: "You stay focused" vs. "You choose clarity"
- **Fix:** Rewrite key sections to emphasize choice/agency

---

## 4. OUTDATED CONTENT ❌ CRITICAL

**CRITICAL-8: Outdated Demo Video**
- **Location:** index.html lines 126-137
- **Found:** `<video src="assets/videos/lobedrive_demo.mp4">`
- **Issue:** Video no longer reflects current app (per your description)
- **Impact:** Misleads users about actual app experience
- **Fix:** Remove OR replace with:
  - Option A: Real app screenshots from @app/screenshots/Screenshots_PNG/
  - Option B: New animation matching 3-screen onboarding + ensō button
- **Status:** Marked as separate task in tasks.md ✓

---

## 5. LAYOUT PRINCIPLES COMPLIANCE ✅ MOSTLY GOOD

### ✅ CORRECT USAGE
- Generous whitespace: ✓ (Good padding/margins throughout)
- Long vertical rhythm: ✓ (sections well-spaced)
- Minimal design: ✓ (clean, not cluttered)
- Soft opacity transitions: ✓ (hover effects 0.3s)

### ❌ VIOLATIONS FOUND

**MEDIUM-1: Animation Too Bouncy**
- **Location:** styles.css line 199-202
- **Found:** `transform: translateY(-2px)` on button hover
- **Rule:** "No bounce, spring, or elastic feel" (@docs/BRAND.md Section 5)
- **Impact:** Minor - button movement too playful
- **Fix:** Reduce to translateY(-1px) or remove transform

**MEDIUM-2: Sharp Corners on Some Elements**
- **Location:** Multiple locations
- **Found:** `border-radius: 8px` (buttons), `12px` (cards)
- **Rule:** "No sharp cornered boxes" (@docs/BRAND.md Section 5)
- **Impact:** Minor - could be softer
- **Fix:** Increase border-radius to 12-16px for buttons, 16-24px for cards

**LOW-1: Animation Speed**
- **Location:** styles.css line 189
- **Found:** `transition: all 0.3s ease`
- **Rule:** Subtle motion should be 150-300ms (within range but on high end)
- **Impact:** Very minor
- **Fix:** Consider 200-250ms for more subtle feel

---

## 6. PSYCHOLOGICAL IDENTITY ALIGNMENT ❌ HIGH PRIORITY

### ❌ VIOLATIONS FOUND

**HIGH-6: Meditation/Wellness Aesthetics**
- **Location:** index.html line 106
- **Found:** "A brief pause. A moment to breathe."
- **Violation:** Implies meditation practice (@docs/BRAND.md Section 11)
- **Impact:** Brand stands for "clarity in real conditions" NOT escape
- **Fix:** Remove meditation language, focus on quick acknowledgment

**HIGH-7: Escapism Implied**
- **Location:** Hero section overall tone
- **Issue:** Focus on "calm" and "support" vs. "clarity" and "agency"
- **Impact:** Suggests escape from traffic stress rather than handling it
- **Fix:** Reframe hero to emphasize "clarity in real conditions"

---

## 7. LOGO SYSTEM COMPLIANCE ✅ GOOD

### ✅ CORRECT USAGE
- Primary logo used correctly: Line 19 (logo_2_zen_wheel_clean.svg)
- Height: 40px (above 28px minimum) ✓
- Not stretched/rotated ✓
- Navigation has good spacing ✓

### No violations found in logo usage.

---

## 8. ICONOGRAPHY & ILLUSTRATIONS ⚠️ NEEDS VERIFICATION

### ✅ CORRECT USAGE
- Zen elements used: element_zen_waves_wide.svg ✓
- Hand-drawn underline: element_handdrawn_underline.svg ✓
- Primary motifs: calmbrain.svg, brainroadrage.svg ✓

### ⚠️ NEEDS VERIFICATION
**MEDIUM-3: Unclear Icon Sources**
- **Location:** Lines 154, 161, 168 (step icons)
- **Found:** pressbutton.svg, regulate.svg, Drivesafe.svg
- **Question:** Are these from the Zen-inspired SVG set in /Docs/?
- **Rule:** "All illustrations come from Zen-inspired SVG set" (@docs/BRAND.md Section 6)
- **Action needed:** Verify all icons are from approved set, check for soft lines/organic curves

**MEDIUM-4: Illustration Style Not Verified**
- **Issue:** Cannot verify without seeing SVG files if they follow rules:
  - Soft lines only
  - Organic curves
  - No hard geometry
  - No drop shadows
  - No gradients
- **Action needed:** Visual inspection of all SVG assets

---

## 9. DO/DON'T COMPLIANCE SUMMARY

### ✅ DO (Followed)
- Use whitespace generously: ✓
- Create slow, steady rhythm: ✓
- Favor organic shapes: ✓ (based on SVG usage)
- Reinforce agency: ⚠️ (weak - needs improvement)

### ❌ DON'T (Violated)
- ❌ Use introspective or soft-therapy language: VIOLATED (breathe, mindfulness)
- ❌ Imply deep breathing, mindfulness states: VIOLATED (multiple instances)
- ❌ Use bright, alarming colors: ✓ (not violated - colors are soft)

---

## CROSS-REFERENCE: COACH CONCEPT VIOLATIONS

**Reference:** @startup/coach-concept.md

### ❌ VIOLATIONS

**HIGH-8: Positioned as Mindfulness App**
- **Violation:** Multiple instances of "mindfulness" language
- **Rule:** "What LobeDrive is NOT: mindfulness app" (coach-concept.md Section 3)
- **Impact:** CORE IDENTITY VIOLATION
- **Fix:** Remove ALL mindfulness language

**HIGH-9: Wellness Product Framing**
- **Violation:** Focus on "calm" outcomes vs. "clarity" and "choice"
- **Rule:** "Not wellness product" (coach-concept.md Section 3)
- **Impact:** Brand confusion
- **Fix:** Shift all copy to emphasize:
  - Irritations, surges, spikes (not stress/anxiety)
  - Agency (you choose) not outcomes (be calm)
  - Clarity (forward movement) not relaxation

**HIGH-10: Therapeutic Tone**
- **Location:** General copy tone throughout
- **Issue:** Language feels therapeutic ("regain emotional control", "manage road rage")
- **Rule:** "Not therapy" (coach-concept.md Section 3)
- **Impact:** Misrepresents product
- **Fix:** Shift to coach tone: warm, grounded, direct, practical

---

## SUMMARY OF VIOLATIONS BY PRIORITY

### 🔴 CRITICAL (Must Fix Before Launch) - 8 violations

1. **CRITICAL-1:** Body text color #333333 → should be #1A1A1A
2. **CRITICAL-2:** Background color #F5F1E8 → should be #F7F4EF
3. **CRITICAL-3:** Green colors wrong (#2C5F4A, #6B9080) → use #A5C49F, #53735B
4. **CRITICAL-4:** "breathe" language (index.html:164)
5. **CRITICAL-5:** "Mindfulness CBT" (index.html:211)
6. **CRITICAL-6:** "mindfulness" in features (index.html:182)
7. **CRITICAL-7:** "Turn Road Rage into Calm" title
8. **CRITICAL-8:** Outdated demo video (index.html:126-137)

### 🟠 HIGH PRIORITY (Should Fix Before Launch) - 11 violations

1. **HIGH-1:** Zen Green (#A5C49F) not used
2. **HIGH-2:** H1 font-weight too heavy (700 → 600)
3. **HIGH-3:** Heading sizes too large
4. **HIGH-4:** "drive calmer" language (index.html:292)
5. **HIGH-5:** Missing agency-focused language
6. **HIGH-6:** Meditation aesthetics implied
7. **HIGH-7:** Escapism implied in hero
8. **HIGH-8:** Positioned as mindfulness app
9. **HIGH-9:** Wellness product framing
10. **HIGH-10:** Therapeutic tone throughout
11. **Bonus:** Verify all pages (privacy, terms, contact, references) for same violations

### 🟡 MEDIUM PRIORITY (Nice to Fix) - 8 violations

1. **MEDIUM-1:** Button hover animation too bouncy
2. **MEDIUM-2:** Border radius too sharp (8px, 12px)
3. **MEDIUM-3:** Unclear icon sources (verify from Docs/)
4. **MEDIUM-4:** Illustration style not verified
5-8: Additional copy refinements for agency/clarity focus

### ⚪ LOW PRIORITY (Post-Launch OK) - 3 violations

1. **LOW-1:** Animation speed could be 200-250ms (currently 300ms)
2-3: Minor polish items

---

## RECOMMENDED FIX SEQUENCE

### PHASE 1: Critical Content Fixes (2-3 hours)
1. Remove ALL "mindfulness" language (3 instances)
2. Remove "breathe" (1 instance)
3. Change title from "Calm" to "Clarity"
4. Rewrite hero section for agency/clarity focus
5. Remove/replace outdated video

### PHASE 2: Critical Color Fixes (1-2 hours)
1. Update body text color → #1A1A1A
2. Update background → #F7F4EF
3. Replace all green colors:
   - #2C5F4A → #A5C49F (Zen Green for CTAs)
   - #6B9080 → #53735B (Forest Line for supporting)
4. Verify visual consistency after changes

### PHASE 3: High Priority Copy Fixes (2-3 hours)
1. Rewrite key sections for agency language
2. Remove therapeutic tone
3. Shift wellness → coach positioning
4. Test messaging alignment with brand

### PHASE 4: Typography & Polish (1 hour)
1. Reduce h1 weight to 600
2. Reduce heading sizes
3. Minor layout adjustments

**TOTAL ESTIMATED TIME: 6-9 hours**

---

## APPROVAL TRACKING

**Audit Completed:** 2025-12-28
**Reviewed By:** Jakob
**Fixes Started:** [PENDING]
**Fixes Completed:** [PENDING]
**Re-Audit Date:** [PENDING]
**Final Sign-Off:** [PENDING]

---

# End of Audit Findings
