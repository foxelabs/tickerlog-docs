import { defineConfig } from 'vitepress'

/*
 * Site-wide configuration: navigation groups and page order, navbar and footer
 * links, and the head tags.
 *
 * Two things worth noting, because neither is a VitePress default:
 *   - the webfont (Figtree, the only family) is loaded from Google Fonts here;
 *   - the "on this page" outline is turned on explicitly.
 */
export default defineConfig({
  title: 'TickerLog',
  description:
    'How to use TickerLog — recording trades, importing statements, and reading what your journal tells you back.',
  cleanUrls: true,
  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&display=swap',
      },
    ],
  ],

  themeConfig: {
    logo: { light: '/logo/light.svg', dark: '/logo/dark.svg' },

    /* Every nav item leaves the docs for the marketing site, so each opens in a
       new tab — a reader following a link off a reference page should not lose
       the page they were reading. `noIcon` drops VitePress's ↗ glyph: every
       item here is external, so the marker would be on all of them and inform
       nobody. */
    nav: [
      { text: 'Home', link: 'https://tickerlog.io', target: '_blank', rel: 'noopener', noIcon: true },
      {
        text: 'Features',
        link: 'https://tickerlog.io/features',
        target: '_blank',
        rel: 'noopener',
        noIcon: true,
      },
      {
        text: 'Support',
        link: 'https://tickerlog.io/contact',
        target: '_blank',
        rel: 'noopener',
        noIcon: true,
      },
      /* The call to action, drawn as a button by style.css rather than as a
         link. VitePress has no `class` on a nav item, so the CSS matches this
         exact href — which means the two must stay in step. The label is the
         marketing site's own ("Start free", Nav.astro), because two names for
         one button is two things for a reader to reconcile. */
      {
        text: 'Start free',
        link: 'https://app.tickerlog.io/signup',
        target: '_blank',
        rel: 'noopener',
        noIcon: true,
      },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'TickerLog documentation', link: '/' },
          { text: 'What TickerLog is', link: '/start/what-it-is' },
          { text: 'Create your account', link: '/start/create-your-account' },
          { text: 'Add a trading account', link: '/start/add-an-account' },
          { text: 'Log your first trade', link: '/start/first-trade' },
        ],
      },
      {
        text: 'Recording trades',
        items: [
          { text: 'The Trades screen', link: '/trades/trades-screen' },
          { text: 'Logging a trade', link: '/trades/logging' },
          { text: 'Importing from CSV', link: '/trades/import' },
          { text: 'Symbols', link: '/trades/symbols' },
          { text: 'Strategies', link: '/trades/strategies' },
        ],
      },
      {
        text: 'Reading it back',
        items: [
          { text: 'Dashboard', link: '/review/dashboard' },
          { text: 'Calendar', link: '/review/calendar' },
          { text: 'Reports', link: '/review/reports' },
          { text: 'Weekly review', link: '/review/weekly-review' },
          { text: 'Journal', link: '/review/journal' },
        ],
      },
      {
        text: 'Accounts and settings',
        items: [
          { text: 'Trading accounts', link: '/settings/accounts' },
          { text: 'Your account', link: '/settings/account' },
          { text: 'App settings', link: '/settings/app' },
          { text: 'Plans and billing', link: '/settings/billing' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'CSV format', link: '/reference/csv-format' },
          { text: 'Keyboard shortcuts', link: '/reference/shortcuts' },
          { text: 'Markets', link: '/reference/markets' },
        ],
      },
    ],

    outline: { level: [2, 3], label: 'On this page' },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/tickerlog' },
      { icon: 'youtube', link: 'https://www.youtube.com/@tickerlog' },
    ],

    search: { provider: 'local' },

    editLink: undefined,

    footer: {
      message:
        '<a href="https://tickerlog.io/legal/terms" target="_blank" rel="noopener">Terms</a> · <a href="https://tickerlog.io/legal/privacy" target="_blank" rel="noopener">Privacy</a>',
      /* The year is stamped at build time, not read in the browser — so it
         only advances when the site is rebuilt, which for a docs site that
         deploys on every content change is often enough. */
      copyright: `Copyright © ${new Date().getFullYear()}, Duck Dev LLP. All rights reserved.`,
    },
  },
})
