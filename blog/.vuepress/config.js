const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Tronic-art',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  theme: 'offwhite',
  themeConfig: {
    title: 'Tronic-art',
    subtitle: 'Making art with code',
    author: 'Patrick',
    navbar: { // will display below the title
      Github: 'https://github.com/patrixr',
      Twitter: 'https://twitter.com/tronicapps',
      Instagram: 'https://www.instagram.com/patrix.r/',
      Objkt: 'https://objkt.com/profile/tz1WPQ824uvHhzp95sZVRnWPjfgBtLarDgVL/created',
      FxHash: 'https://www.fxhash.xyz/u/Tronicart',
      Octies: 'https://objkt.com/profile/tz1dQEFRNPdx2TXqfcprr1XCKdcUfir9geTP/created'
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
