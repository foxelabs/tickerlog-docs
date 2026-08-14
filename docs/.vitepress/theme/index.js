import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'
import SectionLabel from './components/SectionLabel.vue'
import './style.css'

export default {
  extends: DefaultTheme,

  /* The `doc-before` slot is the only seam above a page's h1 that does not mean
     forking the default Layout — and a fork would have to be re-reconciled with
     every VitePress release. Wrapping it costs one render function. */
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'doc-before': () => h(SectionLabel),
    })
  },

  enhanceApp({ app }) {
    // Registered globally so any page can use the tags without an import.
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
  },
}
