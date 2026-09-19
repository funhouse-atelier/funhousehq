# funhousehq.com

The Funhouse Atelier website. Static Astro 7 + Tailwind CSS v4 site, no backend yet.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # outputs to dist/
npm run preview   # serve the built site
```

## Where things live

| What | File |
| --- | --- |
| Email, booking link, form endpoint | `src/data/site.ts` |
| Services, prices, what's included, Stripe links | `src/data/services.ts` |
| Care plan tiers | `src/data/services.ts` (`CARE_PLANS`) |
| Tailwind theme: brand colors, fonts, hard shadows, custom utilities (`awning`, `text-outline`, `container`) | `src/styles/global.css` |
| Shared UI: `Button`, `SectionHead` | `src/components/ui/` |
| Page sections | `src/components/*.astro` |
| SEO / Open Graph / favicon | `src/layouts/Base.astro`, `public/` |

## Before launch (TODOs)

1. `site.ts`: real `email`, Cal.com `bookingUrl`, and a form endpoint (Formspree/Web3Forms/etc.).
2. `services.ts`: confirm prices, then paste a Stripe Payment Link into each `checkoutUrl`. Empty links fall back to the contact form with that service preselected.
3. In Stripe, set each Payment Link's after-payment redirect to `https://funhousehq.com/thanks/`.
4. Replace the "Coming soon" cards in `Portfolio.astro` with real demo builds.
5. Review the About copy in `About.astro`.

## Deploy (Cloudflare Pages or Netlify)

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 24
- Then add `funhousehq.com` as a custom domain and update DNS. Keep the MX records pointing at Google Workspace so email keeps working.
