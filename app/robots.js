export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/api/og/*',
        disallow: '/private/',
      },
      sitemap: 'https://alexcanfield.us/sitemap.xml',
    }
  }