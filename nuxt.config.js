import theme from '@nuxt/content-theme-docs'

export default theme({

  components: [
    { path: '~/components', level: 1},
    { path: '../../../../elastichub-theme/components', level: 0}
  ],

  target: 'static',

  generate: {
    fallback: "404.html"
  },
  
  docs: {
    primaryColor: '#E24F55'
  },
  router: 
  { base: '/markdown_constructors/' },

  head: {
    link: [{ rel: 'icon', type: 'image/png', href: './icon.png' }],
  }
})

