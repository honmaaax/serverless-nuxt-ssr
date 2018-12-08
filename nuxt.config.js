module.exports = {
  head: {
    title: 'Nuxt Serverless Side Rendering',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Nuxt.js project with Serverless'}
    ]
  },

  build: {
    vendor: ['axios'] // ページごとのJSではなく共通のJSファイルに取り込まるように
  },

  srcDir: 'src/',

  performance: {
    gzip: false //Lambda上でサーバサイドレンダリングする場合はfalseにすること
  },

  router: {
    base: '/', //AGWのルートパスのANY処理をServerless.ymlで定義できないので仮指定しておく Todo: ルートパスでAny処理しておく
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'example',
        path: '/example',
        component: 'pages/Example.vue'
      }
    ]
  },

  dev: false //ステージング等々の環境で切り替えてなにかする場合は有効に、プログラムから干渉する時に用いる
}
