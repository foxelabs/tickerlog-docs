# TickerLog docs

The source of `docs.tickerlog.io`, built with [VitePress](https://vitepress.dev).

```bash
npm install
npm run dev      # http://localhost:5199
npm run build    # docs/.vitepress/dist
npm run preview
```

## Layout

Everything the site is made of lives in `docs/`:

| Path | What it is |
|---|---|
| `docs/**/*.md` | The pages. Plain Markdown, edited directly. |
| `docs/index.md` | Landing page. |
| `docs/.vitepress/config.mjs` | Navigation, sidebar, navbar, footer, head tags. |
| `docs/.vitepress/theme/style.css` | The palette, fonts and layout overrides. |
| `docs/.vitepress/theme/components/` | `Card` and `CardGroup`, usable in any page. |
| `docs/public/` | Favicon and logos, copied to the site root as-is. |

Adding a page means creating the `.md` file and adding it to the sidebar in
`config.mjs`; nothing else generates or rewrites the content.

Give every page a `title` in the frontmatter **and** an `# h1` in the body —
VitePress does not print the frontmatter title on the page, so without the
heading the page opens on its first paragraph.

`Card` and `CardGroup` are Vue components registered globally, so they work
inside Markdown without an import. `Card` takes `title`, `href`, `horizontal`
and an optional `icon` — five icons are drawn (`rocket`, `upload`,
`chart-line`, `gear`, `book-open`), and an unrecognised name renders no icon
rather than failing the build.

## Worth knowing

- **Fonts come from Google Fonts** (Figtree 800 headings, Inter body), which is
  a third-party request on a hostname the privacy policy currently says makes
  none. Either self-host the two families in `docs/public/` or check the
  policy's wording. **Still open.**
- **Search is a local index** built at compile time — no service, no network
  call, no key.
- **No telemetry.** Nothing writes to localStorage except VitePress's own
  colour-scheme preference, which is necessary rather than analytical.
- **No "copy page as Markdown" or LLM hand-off menu.** If it is wanted, a
  `llms.txt` or a per-page copy button has to be built.

## Deployment — Vercel

`vercel.json` holds the whole configuration, so importing the repo needs no
dashboard fields:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `docs/.vitepress/dist` |
| Clean URLs | on — matches `cleanUrls: true` in `config.mjs` |
| Trailing slash | off |

Hashed assets under `/assets/` are served immutable for a year; everything else
keeps Vercel's default revalidation, so a deploy publishes new HTML immediately.

After the first deploy, point `docs.tickerlog.io` at the project in **Settings →
Domains**. There is nothing server-side — the output is static files, and a
rollback is a redeploy of the previous build.

An alternative, if Vercel is ever dropped: GitHub Pages, with a workflow that
uploads the same directory. On the custom domain no `base` is needed; on
`<user>.github.io/<repo>` set `base: '/<repo>/'` in `config.mjs`.

---

The docs rule from the main repo still applies: **what the docs claim is what
the app does**, and no page walks through connecting a broker until sync ships.
