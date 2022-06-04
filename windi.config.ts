import { defineConfig } from '@windicss/plugin-utils'

export default defineConfig({
  /**
   * Write windi classes in html attributes.
   * @see https://windicss.org/features/attributify.html
   */
  attributify: true,
  theme: {
    extend: {
      fontFamily: {
        default: ['Graphik Regular', 'Segoe UI'],
      }
    }
  }
})
