# LobeDrive Website - Claude Code Context

## Purpose
Public-facing marketing website for LobeDrive.

## Repository Context
- **Parent monorepo:** @CLAUDE.md
- **Brand guidelines:** @docs/BRAND.md
- **Strategic positioning:** @startup/business/brand-position.md
- **Product identity:** @startup/dev-docs/context.md

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

## UI/UX Skill Library: ui-ux-pro-max

This repository includes a local UI/UX design intelligence skill.

Use it ONLY when working on:
- UI layout, visual hierarchy, spacing, typography
- Landing pages, components, dashboards
- UX flows, accessibility, and UI anti-pattern reviews

Local search (optional):
python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain> -n 10