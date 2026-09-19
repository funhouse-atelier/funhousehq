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

| What                                                                                                        | File                                  |
| ----------------------------------------------------------------------------------------------------------- | ------------------------------------- |
| Email, booking link, form endpoint                                                                          | `src/data/site.ts`                    |
| Services, prices, what's included, Stripe links                                                             | `src/data/services.ts`                |
| Care plan tiers                                                                                             | `src/data/services.ts` (`CARE_PLANS`) |
| Tailwind theme: brand colors, fonts, hard shadows, custom utilities (`awning`, `text-outline`, `container`) | `src/styles/global.css`               |
| Shared UI: `Button`, `SectionHead`                                                                          | `src/components/ui/`                  |
| Page sections                                                                                               | `src/components/*.astro`              |
| SEO / Open Graph / favicon                                                                                  | `src/layouts/Base.astro`, `public/`   |

## Before launch (TODOs)

1. `site.ts`: set the Cal.com `bookingUrl`.
2. `services.ts`: paste a Stripe Payment Link into each `checkoutUrl` as they're created. Empty links fall back to the contact form with that service preselected.
3. In Stripe, set each Payment Link's after-payment redirect to `https://funhousehq.com/thanks/`.
4. Replace the "Coming soon" cards in `Portfolio.astro` with real demo builds.

## Deploy (Netlify)

Build settings live in `netlify.toml` (build command, `dist` output, Node 24), so Netlify needs no manual configuration.

- Import the `funhouse-atelier/funhousehq` repo in Netlify; every push to `main` deploys.
- Contact form: handled by Netlify Forms (`data-netlify` on the form in `Contact.astro`). After the first deploy, turn on email notifications under Forms → contact → Form notifications. Successful submissions redirect to `/sent/`.
- Add `funhousehq.com` as a custom domain and update DNS. Keep the MX records pointing at Google Workspace so email keeps working.
