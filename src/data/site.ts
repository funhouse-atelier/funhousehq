// Global site settings. Anything marked TODO needs a real value before launch.

export const SITE = {
  name: "Funhouse Atelier",
  url: "https://funhousehq.com",
  slogan: "Creative digital products and online business solutions.",
  description:
    "Funhouse Atelier is a Fort Worth digital agency: fast small-business websites, care plans, IT help desk, AI setup, and restaurant tech.",
  location: "Fort Worth, Texas",

  // TODO: confirm the public inbox you want on the site.
  email: "hello@funhousehq.com",

  // TODO: replace with your Cal.com booking link (e.g. https://cal.com/funhouse/discovery).
  bookingUrl: "https://cal.com/",

  // TODO: form backend. Any service that accepts a plain HTML POST works
  // (Formspree, Web3Forms, Basin, or a Cloudflare/Netlify function later).
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

export const NAV = [
  { label: "Services", href: "/#services" },
  { label: "Care plans", href: "/#care-plans" },
  { label: "How it works", href: "/#how" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];
