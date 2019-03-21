const environment = process.env.NODE_ENV
const envSet = require(`./src/env/${environment}.js`)

module.exports = {
  mode: 'universal',
  dev: environment === 'dev',
  env: envSet,
  head: {
    title: 'Nuxt Serverless Side Rendering',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project with Serverless'}
    ]
  },

  plugins: [
    '@/plugins/sample'
  ],

  modules: [
    '@nuxtjs/style-resources',
  ],

  css: [
    '@/assets/css/normalize.css'
  ],

  styleResources: {
    scss: [
      '@/assets/scss/global.scss'
    ],
    less: [],
    stylus: []
  },

  srcDir: 'src/',

  performance: {
    gzip: false //Lambda上でサーバサイドレンダリングする場合はfalseにすること
  },

}
