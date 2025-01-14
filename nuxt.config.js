export default {
  /* target: 'static', */
  buildDir: 'dist', // Define o diretório de saída como 'dist'
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Denis Marques - Portfolio',
    htmlAttrs: {
      lang: 'pt-br',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
   
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css', '@fortawesome/fontawesome-free/css/all.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '@/components', pathPrefix: false }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '/', // Base URL configurada
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      scss: {
        implementation: require('sass'), // Suporte para SCSS
      },
    },
    babel: {
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            {
              corejs: { version: 3 },
            },
          ],
        ];
      },
      plugins: [
        require.resolve('@babel/plugin-proposal-optional-chaining'), // Corrigido para usar require
      ],
    },
    transpile: ['@emailjs/browser'], // Configuração para transpilar pacotes externos
  },
/* 
   server: {
    host: '0.0.0.0', // Configuração comentada para servidores
  }, */
  
};
