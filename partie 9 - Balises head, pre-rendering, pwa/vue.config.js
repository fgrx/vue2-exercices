module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],

  pwa: {
    name: 'Codebook',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // workboxPluginMode: 'InjectManifest',
    // workboxOptions: {
    //   swSrc: 'dev/sw.js',
    // }
  },

  pluginOptions: {
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/about'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true
    }
  }
}
