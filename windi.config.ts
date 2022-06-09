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
      },
      colors: {
        'primary': '#5CDA42',
        'secondary': '#3E83FB',
        'third': '#FF5925',
        'fourth': '#E025FF'
      }
    }
  }
})
