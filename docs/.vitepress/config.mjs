import { defineConfig } from 'vitepress'

/*
 * Site-wide configuration: navigation groups and page order, navbar and footer
 * links, and the head tags.
 *
 * Worth noting, because none of it is a VitePress default:
 *   - the fonts are self-hosted (imported in theme/style.css), so there is no
 *     font request to a third party and no <link> to Google Fonts here;
 *   - dark is the default appearance, as it is in the app and on tickerlog.io;
 *   - the wordmark is type (siteTitle, styled mono 700), not an image.
 */
export default defineConfig({
  title: 'tickerlog docs',
  titleTemplate: ':title · tickerlog docs',
  description:
    'How to use tickerlog — syncing your broker, recording trades, importing statements, and reading what your journal tells you back.',
  cleanUrls: true,
  lastUpdated: false,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#0a0a0b' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'tickerlog',

    /* Every nav item leaves the docs for the marketing site or the app, so each
       opens in a new tab. `noIcon` drops VitePress's ↗ glyph: every item here is
       external, so the marker would be on all of them and inform nobody. The
       labels are the marketing site's own (Nav.astro). */
    nav: [
      { text: 'Features', link: 'https://tickerlog.io/features', target: '_blank', rel: 'noopener', noIcon: true },
      { text: 'Pricing', link: 'https://tickerlog.io/pricing', target: '_blank', rel: 'noopener', noIcon: true },
      { text: 'Contact', link: 'https://tickerlog.io/contact', target: '_blank', rel: 'noopener', noIcon: true },
      { text: 'Log in', link: 'https://app.tickerlog.io/login', target: '_blank', rel: 'noopener', noIcon: true },
      /* Drawn as the site's inverted button by style.css, which matches this
         exact href — the two must stay in step. */
      { text: 'Start free', link: 'https://app.tickerlog.io/signup', target: '_blank', rel: 'noopener', noIcon: true },
    ],

    sidebar: [
      {
        text: 'Getting started',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'What tickerlog is', link: '/start/what-it-is' },
          { text: 'Create your account', link: '/start/create-your-account' },
          { text: 'Add a trading account', link: '/start/add-an-account' },
          { text: 'Log your first trade', link: '/start/first-trade' },
        ],
      },
      {
        text: 'Auto-sync',
        items: [
          { text: 'How sync works', link: '/sync/overview' },
          { text: 'MetaTrader 5', link: '/sync/metatrader' },
          { text: 'Dhan', link: '/sync/dhan' },
          { text: 'Upstox', link: '/sync/upstox' },
          { text: 'Zerodha', link: '/sync/zerodha' },
          { text: 'Troubleshooting', link: '/sync/troubleshooting' },
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
          { text: 'Journal', link: '/review/journal' },
        ],
      },
      {
        text: 'Indian markets',
        items: [
          { text: 'How tickerlog adapts', link: '/india/overview' },
          { text: 'F&O contracts', link: '/india/fo-contracts' },
          { text: 'P&L, charges and expiry', link: '/india/pnl-and-charges' },
        ],
      },
      {
        text: 'Settings',
        items: [
          { text: 'Accounts', link: '/settings/accounts' },
          { text: 'Profile', link: '/settings/profile' },
          { text: 'Security', link: '/settings/security' },
          { text: 'General', link: '/settings/general' },
          { text: 'Data', link: '/settings/data' },
          { text: 'Plans and billing', link: '/settings/billing' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Plan limits', link: '/reference/plan-limits' },
          { text: 'CSV format', link: '/reference/csv-format' },
          { text: 'Markets', link: '/reference/markets' },
          { text: 'Keyboard shortcuts', link: '/reference/shortcuts' },
          { text: 'Glossary', link: '/reference/glossary' },
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

    /* No `footer` here: VitePress does not render it on sidebar pages, which
       is every page. The copyright line is theme/components/DocFooter.vue. */
  },
})
