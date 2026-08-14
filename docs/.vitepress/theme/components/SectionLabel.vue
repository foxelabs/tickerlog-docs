<script setup>
/*
 * The small blue line above a page title, naming the sidebar group the page
 * belongs to — "Getting started" above "What TickerLog is".
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
/* 14px at weight 400 in the brand colour: present enough to place the page,
   quiet enough that the h1 under it is still the first thing read. The 10px
   below is the same gap the sidebar keeps under a group heading. */
.tl-section-label {
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: var(--vp-c-brand-1);
}
</style>
