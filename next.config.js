const withPWA = require('next-pwa')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development'
  },
  images: {
    domains: [
      'paikaftab.com',
      'old.khabarnama.net',
      'reporterly.net',
      'www.etilaatroz.com',
      'secure.gravatar.com'
    ]
  }
})
