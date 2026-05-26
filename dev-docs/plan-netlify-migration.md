# Plan-genomförande: Migrera hosting GitHub Pages → Netlify

**Status:** Planerad — INTE genomförd
**Skapad:** 2026-05-26
**Ägare:** Jakob
**Repo:** `Svenstolpez/LobeDrive-Website` (branch `main`)
**Domän:** `lobedrive.com` (DNS hos Cloudflare)

> Detta är ett genomförandedokument. Inga steg nedan har körts. Varje fas
> markeras manuellt när den är klar. Kör faserna i ordning — sekvensen är
> designad för noll nedtid.

---

## 1. Mål och varför

Flytta hostingen från GitHub Pages till Netlify så att GitHub-repot kan göras
**privat**. Repot är publikt idag enbart för att GitHub Pages kräver det på
gratisnivån. Netlify är redan betalt och hostar tre andra projekt
(`lupnumber-new-website`, `noak-hemsida`, `jakob-sorensen.com`).

**Sidoeffekt som åtgärdas:** Interna filer är publikt läsbara idag via GitHub
Pages — bekräftat 2026-05-26:

| URL | Svar idag |
|-----|-----------|
| `https://lobedrive.com/CLAUDE.md` | **200 (exponerad)** |
| `https://lobedrive.com/README.md` | **200 (exponerad)** |
| `https://lobedrive.com/dev-docs/tasks.md` | **200 (exponerad)** |
| `https://lobedrive.com/.claude/CLAUDE.md` | 404 (dot-mapp exkluderas) |

Migreringen stänger denna lucka (se Fas 0, netlify.toml deny-list).

---

## 2. Nuläge (verifierat 2026-05-26)

| Sak | Värde |
|-----|-------|
| Sajttyp | Ren statisk HTML i repo-roten. **Ingen build, ingen `dist/`, ingen `package.json`.** |
| Sidor | `index.html`, `privacy.html`, `privacy_sv.html`, `terms*.html`, `references*.html`, `contact.html`, `bluetooth-setup.html` |
| Assets | `assets/css`, `assets/js`, `assets/images`, `assets/videos` |
| GitHub-repo | `Svenstolpez/LobeDrive-Website` — **PUBLIC**, default branch `main` |
| Hosting | GitHub Pages (`server: GitHub.com`) via `CNAME`-fil → `lobedrive.com` |
| DNS-host | Cloudflare (`dante.ns.cloudflare.com`, `destiny.ns.cloudflare.com`) |
| `lobedrive.com` | A → `185.199.108–111.153` (GitHub Pages), **DNS only / grått moln** |
| `www.lobedrive.com` | CNAME → `svenstolpez.github.io` |

**Externa resurser som CSP måste tillåta (verifierat i HTML):**
- Google Fonts: `fonts.googleapis.com` (stylesheet) + `fonts.gstatic.com` (fontfiler)
- Formulär (waitlist på `index.html` + `contact.html`): POST till
  `https://docs.google.com/forms/.../formResponse` via **dold iframe**
  (`target="hidden_iframe_*"`) → kräver både `form-action` och `frame-src` för
  `docs.google.com`
- Inline `<script>`/`<style>` förekommer → kräver `'unsafe-inline'`
- Utgående länkar (`doi.org`, `linkedin.com`) = vanliga `<a href>`, kräver inget i CSP

---

## 3. Korrigering mot ursprungligt task-utkast

Det tidigare utkastet i `tasks.md` var modellerat på **jakob-sorensen.com**, vilket
är fel förlaga:

| Utkast (fel) | Korrekt |
|--------------|---------|
| Build → `dist/` (Astro-modell) | **Ingen build.** Statisk site. |
| Publish directory = `web/` | **Publish directory = `.` (repo-roten).** GitHub-repot `LobeDrive-Website` har `index.html` i sin rot — det finns ingen `web/`-undermapp på GitHub. |
| Förlaga: jakob-sorensen.com | **Förlaga: `noak-hemsida`** (statisk, `publish = "."`). |

---

## 4. netlify.toml (komplett — skapas i Fas 0)

Lägg denna fil i repo-roten. Den ger säkerhets-headers, cache-regler och
blockerar interna filer från publik åtkomst.

```toml
[build]
  publish = "."
  # Inget build-kommando — statisk site.

# =============================================================================
# Blockera interna filer/mappar från publik åtkomst
# (Netlify publicerar hela roten med publish=".", så vi 404:ar internt innehåll.)
# =============================================================================
[[redirects]]
  from = "/dev-docs/*"
  to = "/404.html"
  status = 404
  force = true

[[redirects]]
  from = "/Docs/*"
  to = "/404.html"
  status = 404
  force = true

[[redirects]]
  from = "/CLAUDE.md"
  to = "/404.html"
  status = 404
  force = true

[[redirects]]
  from = "/README.md"
  to = "/404.html"
  status = 404
  force = true

# =============================================================================
# Säkerhets-headers (alla sidor)
# =============================================================================
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"
    Permissions-Policy = "camera=(), microphone=(), geolocation=()"
    Strict-Transport-Security = "max-age=31536000; includeSubDomains; preload"
    Content-Security-Policy = "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'; form-action 'self' https://docs.google.com; frame-src https://docs.google.com; frame-ancestors 'none'; base-uri 'self'"

# =============================================================================
# Cache
# =============================================================================
[[headers]]
  for = "/assets/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/videos/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/assets/css/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

[[headers]]
  for = "/assets/js/*"
  [headers.values]
    Cache-Control = "public, max-age=2592000"

[[headers]]
  for = "/*.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

**Notering om CSP:** Den är skräddarsydd efter sidans faktiska resurser. En rak
kopia av noaks CSP hade brutit Google Fonts och båda Google Forms-formulären.
Verifiera i webbläsarens konsol efter deploy att inga CSP-violations loggas.

**Notering om deny-list:** `.claude/` och andra dot-mappar serveras inte av
Netlify som standard. `force = true` krävs så att redirecten vinner över en
faktiskt existerande fil. Saknas `/404.html` på sajten visar Netlify sin
standard-404 — fungerar ändå.

---

## 5. Genomförande — steg för steg

### Fas 0 — Förbered repo (görs lokalt, ingen extern påverkan)
- [ ] Skapa `netlify.toml` i repo-roten med innehållet i avsnitt 4.
- [ ] Commit + push till `main`.
- [ ] *(GitHub Pages ignorerar `netlify.toml` — ingen påverkan på live-sajten.)*

### Fas 1 — Netlify-site (ingen DNS-påverkan)
- [ ] app.netlify.com → **Add new site → Import an existing project → GitHub → `Svenstolpez/LobeDrive-Website`**.
      Netlifys GitHub-app får då repo-åtkomst (behålls även när repot blir privat).
- [ ] Build settings:
      - **Base directory:** *(tomt)*
      - **Build command:** *(tomt)*
      - **Publish directory:** `.`
- [ ] Deploya. Verifiera på `https://[site].netlify.app` — klicka igenom alla sidor.

### Fas 2 — Lägg till custom domain i Netlify
- [ ] Domain settings → **Add a domain** → `lobedrive.com` (sätt som **primary domain**).
- [ ] Lägg även till `www.lobedrive.com` (Netlify gör då auto-301 `www → apex`).
- [ ] Netlify visar "Awaiting external DNS configuration" — väntat, fortsätt till Fas 3.

### Fas 3 — Flytta DNS i Cloudflare (omkopplingen sker här)
- [ ] **Ta bort** gamla GitHub Pages-poster:
      - A `@` → `185.199.108.153`, `.109`, `.110`, `.111` (alla fyra)
      - CNAME `www` → `svenstolpez.github.io`
- [ ] **Lägg till** (se tabell i avsnitt 6), **grått moln (DNS only)**:
      - `@` → CNAME-flattening till `[site].netlify.app`
        *(alternativt A `@` → `75.2.60.5`)*
      - `www` → CNAME → `[site].netlify.app`

### Fas 4 — SSL
- [ ] Netlify → Domain settings → **Verify DNS configuration**.
- [ ] Netlify provisionerar Let's Encrypt-cert automatiskt (tar några minuter,
      kräver grått moln).

### Fas 5 — Verifiera (se checklista avsnitt 7)
- [ ] Allt grönt → gå vidare. Något fel → se Rollback (avsnitt 9).

### Fas 6 — Lås ner GitHub-repot
- [ ] `gh repo edit Svenstolpez/LobeDrive-Website --visibility private`
      *(detta stänger samtidigt av GitHub Pages — önskat).*
- [ ] Bekräfta att Netlify fortfarande auto-deployar (gör en liten test-commit).

### Fas 7 — Cleanup (valfritt)
- [ ] Ta bort `CNAME`-filen ur repot — den är en GitHub Pages-rest, oanvänd på Netlify.
- [ ] *(Valfritt, renare på sikt)* flytta alla publika sidor till en undermapp,
      t.ex. `public/`, och sätt `publish = "public"`. Då behövs ingen deny-list
      eftersom interna docs aldrig hamnar i deploy:en.

---

## 6. DNS-ändringar i Cloudflare

**Alla poster: grått moln (DNS only), INTE proxied (orange moln).**
Netlify sköter CDN + SSL + DDoS-skydd; orange moln bryter Netlifys cert-flöde.

| Typ | Namn | Före (GitHub Pages) | Efter (Netlify) |
|-----|------|---------------------|-----------------|
| A | `@` | `185.199.108–111.153` (4 st) | *ta bort* |
| CNAME | `@` | — | `[site].netlify.app` (CNAME-flattening) |
| CNAME | `www` | `svenstolpez.github.io` | `[site].netlify.app` |

Alternativ för apex om du hellre använder A-record:
A `@` → `75.2.60.5` (Netlifys anycast-IP) i stället för CNAME-flattening.

---

## 7. Verifieringschecklista (Fas 5)

- [ ] `https://lobedrive.com` laddar korrekt, giltigt SSL (hänglås).
- [ ] `https://www.lobedrive.com` → 301-redirect till `https://lobedrive.com`.
- [ ] `http://lobedrive.com` → redirectar till `https`.
- [ ] Alla undersidor 200: privacy (sv/en), terms (sv/en), references (sv/en), contact, bluetooth-setup.
- [ ] Waitlist-formuläret (index) skickar utan fel (dold iframe, ingen CSP-violation i konsolen).
- [ ] Contact-formuläret skickar utan fel.
- [ ] Google Fonts laddar (ingen fallback-typsnitt).
- [ ] Bilder/video laddar.
- [ ] **Deny-list verifierad:** `/CLAUDE.md`, `/README.md`, `/dev-docs/tasks.md`, `/Docs/...` ger **404**.
- [ ] Webbläsarkonsol: inga CSP-violations.
- [ ] `curl -I https://lobedrive.com` visar `server: Netlify` + säkerhets-headers.

---

## 8. Sekvens kring repo-privatisering (viktigt)

Gör **inte** repot privat förrän Fas 1–5 är klara och verifierade. Skälen:
- Netlifys GitHub-app behöver ha repot kopplat **innan** det blir privat
  (kopplingen i Fas 1 ger appen åtkomst som kvarstår).
- Om något i DNS/SSL strular vill du kunna falla tillbaka till GitHub Pages,
  vilket kräver publikt repo.

---

## 9. Rollback

Om migreringen fallerar i Fas 3–5: återställ DNS i Cloudflare till nuläget och
GitHub Pages tar över igen (repot är fortfarande publikt tills Fas 6).

| Typ | Namn | Återställ till |
|-----|------|----------------|
| A | `@` | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| CNAME | `www` | `svenstolpez.github.io` |

GitHub Pages-konfigurationen (CNAME-fil + Settings → Pages) lämnas orörd tills
migreringen är bekräftad, så rollback är en ren DNS-återställning.

---

## 10. Risker och gotchas

- **Orange moln (proxied) bryter Netlifys SSL-provisionering.** Håll alla poster grå.
- **DNS-propagering:** Cloudflare TTL "Auto" ≈ 300 s. Räkna med några minuters glapp innan cert provisioneras.
- **CSP:** skräddarsydd — testa formulär + fonts efter deploy. Om något bryts, kolla konsolen och justera `netlify.toml`.
- **`publish = "."` exponerar allt i roten** om deny-listen saknas. Verifiera 404 enligt checklistan.
- **Glöm inte** att Netlify-appen måste vara kopplad till repot innan det görs privat (Fas 1 före Fas 6).
