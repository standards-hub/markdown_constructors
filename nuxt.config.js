import theme from '@nuxt/content-theme-docs'

export default theme({
  target: 'static',
  
  buildModules: [
    '@nuxtjs/color-mode'
  ],
  docs: {
    primaryColor: '#E24F55'
  },
  router: 
  { base: '/markdown_constructors/' },

  head: {
    link: [{ rel: 'icon', type: 'image/png', href: './icon.png' }],
  }
})

