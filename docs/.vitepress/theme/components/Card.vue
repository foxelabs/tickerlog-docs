<script setup>
/*
 * A linkable card: title, optional icon, optional body, `horizontal` to lay it
 * out on one row.
 *
 * The icons are inline SVGs drawn below rather than an icon font — the names below
 * are what the pages use. An unknown name renders no icon
 * rather than breaking the card, so a typo costs a glyph, not a build.
 */
import { computed } from 'vue'

const props = defineProps({
  title: { type: String, default: '' },
  icon: { type: String, default: '' },
  href: { type: String, default: '' },
  horizontal: { type: Boolean, default: false },
})

const ICONS = {
  rocket: 'M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z',
  upload: 'M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12',
  'chart-line': 'M3 3v18h18M7 14l4-4 3 3 5-6',
  gear: 'M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7zM19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z',
  'book-open': 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
  refresh: 'M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5',
  plug: 'M9 2v6M15 2v6M6 8h12v4a6 6 0 0 1-12 0zM12 18v4',
  calendar: 'M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z',
  notebook: 'M4 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 2v20M12 7h4M12 11h4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z',
  'credit-card': 'M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zM2 10h20',
  list: 'M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01',
  'file-text': 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8',
  flag: 'M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7',
}

/* Each icon wears a kit chart hue as a tint, as the marketing site's icon
   tiles do: colour wherever an icon can carry it, and nowhere else. */
const HUES = {
  rocket: 'blue', upload: 'emerald', 'chart-line': 'purple', gear: 'amber',
  'book-open': 'sky', refresh: 'cyan', plug: 'cyan', calendar: 'amber',
  notebook: 'purple', shield: 'red', 'credit-card': 'emerald', list: 'blue',
  'file-text': 'sky', flag: 'amber',
}

const path = computed(() => ICONS[props.icon])
const hue = computed(() => `var(--tl-hue-${HUES[props.icon] ?? 'blue'})`)
const tag = computed(() => (props.href ? 'a' : 'div'))
</script>

<template>
  <component :is="tag" :href="href || undefined" class="tl-card" :class="{ horizontal }">
    <span v-if="path" class="tl-card-icon" :style="{ '--hue': hue }"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path :d="path" />
    </svg></span>
    <div class="tl-card-text">
      <p v-if="title" class="tl-card-title">{{ title }}</p>
      <div class="tl-card-body"><slot /></div>
    </div>
  </component>
</template>

<style scoped>
/* The kit's card: a lighter fill than the page, a 1px border, 16px radius, no
   shadow. The icon sits in a 34px tile tinted with a chart hue — 12% fill, 38%
   border, glyph in the hue — exactly as on the marketing site. */
.tl-card {
  display: block;
  padding: 20px 24px;
  border: 1px solid var(--tl-border);
  border-radius: 16px;
  background: var(--tl-card);
  color: inherit;
  text-decoration: none !important;
  font-weight: 400 !important;
  transition: border-color 0.2s ease;
}
a.tl-card:hover { border-color: var(--tl-border-strong); }

.tl-card.horizontal { display: flex; align-items: center; gap: 16px; }

.tl-card-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: none;
  width: 34px;
  height: 34px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--hue) 12%, transparent);
  border: 1px solid color-mix(in srgb, var(--hue) 38%, transparent);
  color: var(--hue);
}
.tl-card-icon svg { width: 18px; height: 18px; }

.tl-card:not(.horizontal) .tl-card-title { margin-top: 16px; }

.tl-card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.01em;
  color: var(--tl-ink);
}
.tl-card-body {
  margin-top: 4px;
  font-size: 15px;
  line-height: 1.55;
  color: var(--tl-ink-body);
}
.tl-card-body :deep(p) { margin: 0; }
</style>
