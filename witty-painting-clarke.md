# Elva Barnpsykiatri Website — Implementation Plan

## Context

Elva Barnpsykiatri is a Swedish children's neuropsychiatry clinic whose current website no longer reflects their services and operations. This project builds a new website from scratch to clearly communicate the clinic's offering, serve multiple audiences (new patients, existing patients, referral partners), and provide booking/contact functionality. The site will be hosted on GoDaddy as static files.

## Decisions Made

- **Framework:** Astro 5.x with Tailwind CSS
- **i18n:** URL-based routing (`/sv/`, `/en/`, `/el/`) using Astro's built-in i18n
- **Contact form:** Formspree (no backend needed)
- **Booking:** Embedded Vårdrummet (patient.nu) iframe
- **Visual style:** Warm & approachable — soft teal/sage, coral accents, rounded elements
- **Content:** Realistic Swedish placeholder content, English/Greek placeholders
- **Pages:** 5 pages (Home, About, Services, For Patients, Contact) — no Careers page
- **Hosting:** GoDaddy (upload `dist/` folder after build)

## File Structure

```
/
├── astro.config.mjs          # Astro config with i18n routing
├── tailwind.config.mjs        # Tailwind theme (colours, fonts, spacing)
├── package.json
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   ├── logo.svg               # Elva logo (user to provide)
│   └── robots.txt
├── src/
│   ├── i18n/
│   │   ├── ui.ts              # Translation strings for all 3 languages
│   │   └── utils.ts           # i18n helper functions (getLocalizedUrl, t())
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, head, meta, hreflang tags
│   ├── components/
│   │   ├── Header.astro       # Sticky nav + language switcher + CTA
│   │   ├── Footer.astro       # Contact info, quick links, language switcher
│   │   ├── Hero.astro         # Hero section with headline + CTA
│   │   ├── ServiceCard.astro  # Reusable service card component
│   │   ├── TeamMember.astro   # Team member card
│   │   ├── ContactForm.astro  # Formspree-powered contact form
│   │   ├── BookingEmbed.astro # Vårdrummet iframe embed
│   │   └── LanguageSwitcher.astro
│   └── pages/
│       ├── index.astro        # Redirect / → /sv/
│       ├── sv/
│       │   ├── index.astro    # Hem (Home)
│       │   ├── om-oss.astro   # Om oss (About)
│       │   ├── tjanster.astro # Tjänster (Services)
│       │   ├── for-patienter.astro  # För patienter
│       │   └── kontakt.astro  # Kontakt
│       ├── en/
│       │   ├── index.astro    # Home
│       │   ├── about.astro
│       │   ├── services.astro
│       │   ├── for-patients.astro
│       │   └── contact.astro
│       └── el/
│           ├── index.astro    # Αρχική
│           ├── shetika.astro  # Σχετικά
│           ├── ipiresies.astro # Υπηρεσίες
│           ├── gia-astheneis.astro  # Για ασθενείς
│           └── epikoinonia.astro    # Επικοινωνία
└── Docs/
    └── Elva.se Ny hemsida project brief .md  # (existing spec)
```

## Colour Palette

| Token       | Hex       | Usage                        |
|-------------|-----------|------------------------------|
| primary     | #5B8A72   | Headers, links, accents      |
| secondary   | #F5EDE0   | Backgrounds, cards           |
| accent      | #E8917A   | CTAs, highlights             |
| text        | #2D2D2D   | Body text                    |
| background  | #FAFAF7   | Page background              |

## Typography

- **Headings:** Nunito (Google Fonts) — rounded, friendly
- **Body:** Inter (Google Fonts) — clean, readable

## Implementation Steps

### Step 1: Project Scaffolding
- Initialize Astro project with `npm create astro@latest`
- Install dependencies: `@astrojs/tailwind`, `astro-icon`
- Configure `astro.config.mjs` with i18n routing for sv/en/el
- Configure Tailwind with the colour palette and font families
- Set up Google Fonts in the base layout

### Step 2: i18n System
- Create `src/i18n/ui.ts` with translation strings for all UI text across 3 languages
- Create `src/i18n/utils.ts` with helper functions:
  - `getLangFromUrl(url)` — extract locale from path
  - `useTranslations(lang)` — return t() function for a locale
  - `getLocalizedUrl(url, lang)` — convert URL to another locale

### Step 3: Base Layout & Shared Components
- `BaseLayout.astro` — HTML structure, `<head>` with meta tags, hreflang links, font loading
- `Header.astro` — sticky responsive nav with mobile hamburger menu, logo, nav links, language switcher, "Boka tid" CTA button
- `Footer.astro` — contact info, sitemap links, language switcher
- `LanguageSwitcher.astro` — SV/EN/EL toggle preserving current page

### Step 4: Home Page
- Hero section with headline, subtitle, CTA button
- Services overview (3-4 cards linking to Services page)
- "Why Elva" trust section (brief values/credentials)
- CTA banner for booking

### Step 5: About Page (Om oss)
- Clinic story and mission
- Team section (placeholder cards with names/roles)
- Values and approach to neuropsychiatric care

### Step 6: Services Page (Tjänster)
- Overview of neuropsychiatric services
- Individual service cards with descriptions:
  - Neuropsychiatric assessments (ADHD, autism, etc.)
  - Follow-up treatment and support
  - Parent/family counselling
  - School collaboration
- "What to expect" process section

### Step 7: For Patients Page
- Tabs or sections for new vs. existing patients
- New patients: what to expect, how to prepare, referral info
- Existing patients: practical info, contact for prescriptions/certificates
- Vårdrummet booking iframe embed (responsive container)
- Fallback link to patient.nu

### Step 8: Contact Page
- Formspree contact form (Name, Email, Phone, Subject, Message)
- Client-side validation
- Clinic address, phone, email displayed alongside form
- Embedded map (optional, can use static map image)

### Step 9: Responsive Design & Polish
- Mobile-first responsive breakpoints
- Hamburger menu for mobile navigation
- Touch-friendly tap targets
- Smooth scroll, subtle animations (CSS only)
- Favicon and Open Graph meta tags

### Step 10: SEO & Accessibility
- Semantic HTML (`<nav>`, `<main>`, `<article>`, `<section>`)
- hreflang tags for all language variants
- Alt text on all images
- ARIA labels on interactive elements
- `robots.txt` and basic meta descriptions
- Structured data (LocalBusiness schema)

### Step 11: Build & Deploy Preparation
- Run `npm run build` to generate `dist/` folder
- Verify all pages render correctly
- Document GoDaddy upload process for the user

## Verification

1. **Dev server:** `npm run dev` → verify all 15 pages load at correct URLs
2. **Language switching:** Click SV/EN/EL on every page, verify correct content appears
3. **Contact form:** Submit test form via Formspree, verify email delivery
4. **Booking iframe:** Verify Vårdrummet embed loads on For Patients page
5. **Mobile:** Test responsive layout at 375px, 768px, 1024px, 1440px widths
6. **Build:** `npm run build` → verify `dist/` contains all 15 HTML files
7. **Accessibility:** Check keyboard navigation and screen reader compatibility
