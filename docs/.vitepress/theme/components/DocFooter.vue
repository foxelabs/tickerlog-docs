<script setup>
/*
 * The copyright line under every page, matching the marketing site's footer.
 *
 * VitePress's own `footer` is not rendered on any page with a sidebar — which
 * is every page here — so this sits in the `doc-after` slot instead. The year
 * is stamped at build time.
 */
const year = new Date().getFullYear()
</script>

<template>
  <footer class="tl-doc-footer">
    <p>
      Copyright © {{ year }} tickerlog · Made by
      <a href="https://foxelabs.com" target="_blank" rel="noopener">Foxe Labs</a>
    </p>
    <p>
      <a href="https://tickerlog.io/legal/terms" target="_blank" rel="noopener">Terms</a>
      ·
      <a href="https://tickerlog.io/legal/privacy" target="_blank" rel="noopener">Privacy</a>
      · A journal, not advice. It cannot place trades.
    </p>
  </footer>
</template>

<style scoped>
.tl-doc-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 24px;
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid var(--tl-border);
  font-family: var(--tl-font-mono);
  font-size: 12px;
  line-height: 1.5;
  color: var(--tl-ink-dim);
}
.tl-doc-footer p { margin: 0; }
.tl-doc-footer a {
  color: var(--tl-ink);
  font-weight: 500;
  text-decoration: none;
  transition: color 0.15s ease;
}
.tl-doc-footer a:hover { color: var(--tl-ink-strong); }
</style>
