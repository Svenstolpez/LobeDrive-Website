# LobeDrive Website - Claude Code Context

**Version:** 2.0 (Governance Realignment - January 2026)

**⚠️ GOVERNANCE HIERARCHY:**
This file contains **web-specific constraints only**.

**All governance defers to:**
- **`/CLAUDE.md`** (supreme authority - monorepo root)
- `startup/dev-docs/context.md` (product identity)
- `docs/BRAND.md` (brand guidelines)
- `startup/business/brand-position.md` (market positioning)

**In case of conflict, `/CLAUDE.md` wins.**

---

## Purpose
Public-facing marketing website for LobeDrive.

## Technical Architecture

### Tech Stack
- Static HTML5/CSS3/JavaScript
- Responsive design (mobile-first)
- No framework dependencies
- Optimized for performance

### Key Directories
```
@web/
├── website/
│   ├── index.html           # Landing page
│   ├── privacy.html         # Privacy policy
│   ├── terms.html           # Terms of service
│   ├── contact.html         # Contact form
│   ├── references.html      # Scientific references
│   └── assets/
│       ├── css/             # Stylesheets
│       ├── js/              # Scripts
│       ├── images/          # Website images
│       └── videos/          # Demo videos
├── Docs/                    # Brand assets (SVGs, logos, brand guide)
└── dev-docs/                # Web development planning
    ├── plan.md              # Website roadmap
    ├── context.md           # Technical architecture
    └── tasks.md             # Active development tasks
```

## Content Sources

**Brand Assets:**
```
@web/Docs/                  # 27 SVG files, demo video, brand guide
```

**Brand Guidelines:**
```
@docs/BRAND.md              # Tone, visual identity, design principles
```

**Strategic Context:**
```
@startup/dev-docs/context.md          # Product identity
@startup/business/brand-position.md   # Market positioning
@startup/coach-concept.md             # Core methodology
@startup/business/customer-segments.md # Target audiences
```

## Development Workflow

### Planning & Tasks
- **Check priorities:** @web/dev-docs/tasks.md
- **Review roadmap:** @web/dev-docs/plan.md
- **Understand architecture:** @web/dev-docs/context.md

### Brand & Messaging Constraints
- **Visual identity:** @docs/BRAND.md
- **Tone of voice:** @docs/BRAND.md Section 8
- **Market positioning:** @startup/business/brand-position.md
- **Product methodology:** @startup/coach-concept.md

### Making Changes
1. Read @docs/BRAND.md for visual/tone guidelines
2. Check @startup/business/brand-position.md for positioning
3. Never use mindfulness/wellness language (see @startup/coach-concept.md)
4. Use calm-tech principles (minimal attention demand)
5. Update @web/dev-docs/tasks.md when completing features

## Brand Identity Rules

**Tone of Voice (from @docs/BRAND.md):**
- Warm but not soft
- Direct but not harsh
- Professional but human
- Subtle humor, no mockery

**Visual Design (from @docs/BRAND.md):**
- Minimal Scandinavian aesthetic
- Zen-inspired composition
- Low contrast, soft boundaries
- Space to breathe

**Messaging (from @startup/coach-concept.md):**
- "Rage coach" not "mindfulness app"
- "Just-in-time coach" not "wellness tool"
- "Clarity" not "relaxation"
- "Agency" not "therapy"

## Key Pages

**Landing page (index.html):**
- Hero: Clear value proposition (from @startup/business/brand-position.md)
- How it works: 3-4 steps
- Built on science: Evidence-informed
- Social proof: Testimonials (when available)
- CTA: App Store download

**Privacy/Terms:**
- Clear, accessible language
- GDPR compliant
- No legal jargon

**References:**
- Scientific backing for methodology (see @startup/coach-concept.md)
- Links to research papers
- Credibility building

## Related Contexts
- **Monorepo root:** @CLAUDE.md
- **Brand guidelines:** @docs/BRAND.md
- **Strategic context:** @startup/dev-docs/context.md
- **Market positioning:** @startup/business/brand-position.md
- **Customer segments:** @startup/business/customer-segments.md
- **Coach methodology:** @startup/coach-concept.md

## Claude Agents and Skills

**Governance location:** See `/CLAUDE.md` Section 5 for agent and skill system.

**Web-specific notes:**
- All general agents and skills apply
- No web-specific agents or skills at this time

**UI/UX Skill:**
- `ui-ux-pro-max` skill available at `.claude/skills/ui-ux-pro-max/`
- Use for visual hierarchy, spacing, typography, accessibility, landing page design, and responsive layouts