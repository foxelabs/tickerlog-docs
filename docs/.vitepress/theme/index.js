import DefaultTheme from 'vitepress/theme'
import Card from './components/Card.vue'
import CardGroup from './components/CardGroup.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Registered globally so any page can use the tags without an import.
    app.component('Card', Card)
    app.component('CardGroup', CardGroup)
  },
}
