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

## Deployment — Cloudflare Workers

**Pushing to `main` deploys.** `.github/workflows/deploy.yml` builds and uploads
on every push, and can be re-run by hand from the Actions tab. Deploying
locally is the fallback, for when the site has to go out without a commit:

```bash
npm run deploy   # builds, then uploads docs/.vitepress/dist
```

The workflow needs one repository secret, **`CLOUDFLARE_API_TOKEN`** — created
at *Cloudflare Dashboard → My Profile → API Tokens → Create Token*, from the
**Edit Cloudflare Workers** template, scoped to the TickerLog account. Nothing
else is secret: the account id is in the workflow file, and there are no build
time variables. Rotating the token is a Dashboard change plus a secret update,
with no code change.

`wrangler.toml` is the source of truth, including the `docs.tickerlog.io`
custom domain — a route set in the Dashboard alone is dropped by the next
deploy. There is no `main` and no Worker script: an assets-only Worker is served
straight from Cloudflare's asset storage, so no request is billed as an
invocation.

Two settings there are load-bearing rather than taste:

- `html_handling = "drop-trailing-slash"` matches `cleanUrls: true` in
  `config.mjs`. The build writes flat `start/first-trade.html` files and links
  to them without the extension, so `/start/first-trade` must serve the file and
  `/start/first-trade/` must redirect to it. Cloudflare's default serves both,
  which is two URLs for one page.
- `not_found_handling = "404-page"` serves the themed `404.html`. Without it an
  unknown path gets Cloudflare's generic 404, with no nav and no way back in.

Nothing runs server-side, so a rollback is a redeploy of the previous build.
Note the free plan permits this: Cloudflare has no non-commercial restriction on
static assets, where Vercel's Hobby plan does and would rule out a paid
product's documentation.

---

The docs rule from the main repo still applies: **what the docs claim is what
the app does**, and no page walks through connecting a broker until sync ships.
