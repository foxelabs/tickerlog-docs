<script setup>
/*
 * A linkable card: title, optional icon, optional body, `horizontal` to lay it
 * out on one row.
 *
 * The icons are inline SVGs drawn below rather than an icon font — five names
 * are supported, which is what the pages use. An unknown name renders no icon
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
}

const path = computed(() => ICONS[props.icon])
const tag = computed(() => (props.href ? 'a' : 'div'))
</script>

<template>
  <component :is="tag" :href="href || undefined" class="tl-card" :class="{ horizontal }">
    <svg v-if="path" class="tl-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path :d="path" />
    </svg>
    <div class="tl-card-text">
      <p v-if="title" class="tl-card-title">{{ title }}</p>
      <div class="tl-card-body"><slot /></div>
    </div>
  </component>
</template>

<style scoped>
/* The card sits on the *page* ground — no fill of its own — with a hairline
   border at 10% opacity, 16px radius and 20px/24px padding. The icon stacks
   above the title at 24px in the brand colour rather than sitting inline
   beside it, so a row of cards aligns on their titles. */
.tl-card {
  display: block;
  padding: 20px 24px;
  border: 1px solid var(--tl-card-border);
  border-radius: 16px;
  background: var(--vp-c-bg);
  color: inherit;
  text-decoration: none;
  transition: border-color 0.15s;

  --tl-card-border: rgba(2, 6, 23, 0.1); /* gray-950/10 */
}

html.dark .tl-card {
  --tl-card-border: rgba(255, 255, 255, 0.1);
}

a.tl-card:hover {
  border-color: var(--vp-c-brand-1);
}

/* `horizontal` puts the icon beside the title instead of above it. */
.tl-card.horizontal {
  display: flex;
  align-items: center;
  gap: 16px;
}

.tl-card-icon {
  flex: none;
  width: 24px;
  height: 24px;
  color: var(--vp-c-brand-1);
}

.tl-card:not(.horizontal) .tl-card-title {
  margin-top: 16px;
}

.tl-card-title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  color: var(--vp-c-text-1);
}

html.dark .tl-card-title {
  color: #fff;
}

.tl-card-body {
  margin-top: 4px;
  font-size: 16px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}

.tl-card-body :deep(p) {
  margin: 0;
}
</style>
