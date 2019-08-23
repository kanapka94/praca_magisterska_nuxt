module.exports = {
  apps: [
    {
      name: 'nuxt',
      script: './node_modules/nuxt/bin/nuxt-start',
      env: {
        'HOST': '0.0.0.0',
        'PORT': 8888,
        'NODE_ENV': 'production'
      }
    }
  ]
}
