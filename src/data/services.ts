// The five core offers. Prices are drafts: edit here and the whole site updates.
// `checkoutUrl` takes a Stripe Payment Link; leave it empty to send people to the contact form.

export type Service = {
  id: string
  name: string
  tagline: string
  price: string
  priceNote: string
  includes: string[]
  cta: string
  checkoutUrl: string
  badge?: string
}

export const SERVICES: Service[] = [
  {
    id: 'website-in-a-week',
    name: 'Website in a Week',
    tagline:
      'A professional small-business site, live seven days after kickoff.',
    price: 'from $500',
    priceNote: 'one-time, paid at booking',
    includes: [
      'Up to 5 pages, built mobile-first',
      'Domain, DNS and business email setup',
      'Google Business Profile claimed and set up',
      'Contact form and click-to-call',
      'On-page SEO basics and analytics',
      'One round of revisions',
    ],
    cta: 'Reserve your week',
    checkoutUrl: '', // TODO: Stripe Payment Link
    badge: 'Most popular',
  },
  {
    id: 'care-plans',
    name: 'Website Care Plans',
    tagline: 'Updates, backups, security and small edits, handled every month.',
    price: 'from $50',
    priceNote: 'per month, cancel anytime',
    includes: [
      'Hosting on fast, managed servers',
      'Core, theme and plugin updates',
      'Daily backups and uptime monitoring',
      'Monthly content edits',
    ],
    cta: 'Compare plans',
    checkoutUrl: '/#care-plans',
  },
  {
    id: 'digital-reputation',
    name: 'Digital Reputation Management',
    tagline:
      'Your listings kept current and your reviews answered, every week.',
    price: 'from $75',
    priceNote: 'per month · 3 platforms included',
    includes: [
      'Google Business Profile kept current',
      'Facebook, Instagram and LinkedIn pages maintained',
      'Reviews and mentions checked every 48 hours',
      'Replies drafted for your approval within 2 days',
      'A monthly summary of what people are saying',
      'More platforms, photography and video available',
    ],
    cta: 'Mind my reputation',
    checkoutUrl: '', // TODO: Stripe subscription link
  },
  {
    id: 'it-help-desk',
    name: 'IT Help Desk',
    tagline: 'Flat-rate tech support for home offices and small teams.',
    price: 'from $40',
    priceNote: 'per month · offices from $100',
    includes: [
      'Remote support when something breaks',
      'Backup and security check-ups',
      'New computer and phone setup',
      'Plain-English advice before you buy',
    ],
    cta: 'Get covered',
    checkoutUrl: '', // TODO: Stripe subscription link
  },
  {
    id: 'ai-setup',
    name: 'AI Setup Packages',
    tagline: 'Practical AI for your business, set up for you and explained.',
    price: 'from $500',
    priceNote: 'one-time · optional retainer',
    includes: [
      'Website chat assistant trained on your FAQ',
      'Review replies and email drafting workflows',
      'Lead capture routed to your inbox',
      'A one-hour hands-on team session',
    ],
    cta: 'Book a consult',
    checkoutUrl: '',
  },
  {
    id: 'restaurant-tech',
    name: 'Restaurant Tech Bundle',
    tagline:
      'Menu site, QR menus and online ordering, from someone who has run a line.',
    price: 'from $1,250',
    priceNote: 'one-time · care plan optional',
    includes: [
      'Menu-first website that is easy to update',
      'Printable QR menus for tables and windows',
      'Online ordering integration',
      'Google profile, hours and photos set up',
    ],
    cta: 'Talk shop',
    checkoutUrl: '',
  },
]

export type Plan = {
  name: string
  price: string
  blurb: string
  features: string[]
  checkoutUrl: string
  featured?: boolean
}

export const CARE_PLANS: Plan[] = [
  {
    name: 'Essentials',
    price: '$50',
    blurb: 'Keep the lights on and the site safe.',
    features: [
      'Managed hosting and SSL',
      'Monthly updates',
      'Daily backups',
      'Uptime monitoring',
      '30 min of edits / month',
    ],
    checkoutUrl: '', // TODO: Stripe subscription link
  },
  {
    name: 'Growth',
    price: '$100',
    blurb: 'For businesses that change often.',
    features: [
      'Everything in Essentials',
      'Weekly updates',
      '2 hrs of edits / month',
      'Monthly traffic report',
      'Small design tweaks',
    ],
    checkoutUrl: '',
    featured: true,
  },
  {
    name: 'Priority',
    price: '$150',
    blurb: 'Your part-time web department.',
    features: [
      'Everything in Growth',
      '4 hrs of edits / month',
      'Same-day response',
      'Quarterly strategy call',
      'Priority on new projects',
    ],
    checkoutUrl: '',
  },
]
