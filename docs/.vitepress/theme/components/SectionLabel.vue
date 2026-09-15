<script setup>
/*
 * The micro-label above a page title, naming the sidebar group the page
 * belongs to — "Getting started" above "What tickerlog is".
 *
 * It is derived, not written: nothing goes in a page's frontmatter, so a page
 * moved to another group in config.mjs relabels itself and cannot disagree with
 * the sidebar. A page in no group (the landing page) renders nothing at all
 * rather than an empty line.
 */
import { computed } from 'vue'
import { useData, useRoute, withBase } from 'vitepress'

const { theme } = useData()
const route = useRoute()

/* Compare paths, not strings as written. A sidebar link is authored
   `/start/what-it-is` while the route arrives as `/start/what-it-is.html` —
   `cleanUrls` hides the extension from the address bar, not from the router. */
function normalise(path) {
  return path
    .replace(/\.html$/, '')
    .replace(/\/index$/, '/')
    .replace(/\/$/, '') || '/'
}

const label = computed(() => {
  const here = normalise(route.path)
  const groups = Array.isArray(theme.value.sidebar) ? theme.value.sidebar : []

  for (const group of groups) {
    const items = group.items ?? []
    if (items.some((item) => item.link && normalise(withBase(item.link)) === here)) {
      return group.text
    }
  }
  return ''
})
</script>

<template>
  <div v-if="label" class="tl-section-label">{{ label }}</div>
</template>

<style scoped>
/* The kit's uppercase micro-label: mono, 11px, tracked, in the caps grey. It
   places the page without competing with the h1 under it. */
.tl-section-label {
  margin-bottom: 12px;
  font-family: var(--tl-font-mono);
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 16px;
  color: var(--tl-ink-caps);
}
</style>
