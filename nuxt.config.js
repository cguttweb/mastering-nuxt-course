export default {
  components: true,
  head: {
    titleTemplate: 'Mastering Nuxt Course %s',
    htmlAttrs: {
      lang: 'en-gb'
    },
    bodyAttrs: {
      class: ['my-styles']
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
  router:{
    prefetchLinks: false
  }
}