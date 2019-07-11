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
    'normalize.css/normalize.css',
  ],

  srcDir: 'src/',

  performance: {
    gzip: false // Set `false` if you use SSR on AWS Lambda
  },

  build: {
    extractCSS: true,
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          features: {
            'nesting-rules': true,
          }
        }),
      ]
    },
  }

}
