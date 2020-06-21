module.exports = {
  siteMetadata: {
    title: 'Zachary Pfizenmaier',
    description: "Zachary Pfizenmaier's personal website",
    author: {
      name: 'Zachary Pfizenmaier',
      url: 'https://zacharypfizenmaier.com/about/',
    },
    siteUrl: 'https://zacharypfizenmaier.com',
    rssMetadata: {
      site_url: 'https://zacharypfizenmaier.com',
      feed_url: 'https://zacharypfizenmaier.com/feed',
      title: 'Zachary Pfizenmaier',
      description: "Zachary Pfizenmaier's personal website",
      image_url:
        'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
      copyright: 'Copyright © 2019 TwinZ',
    },
    siteVerification: {
      google: '',
    },
    image: {
      src:
        'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
      alt: 'Spark',
      height: '250',
      width: '250',
    },
    organization: {
      name: 'TwinZ',
      url: 'https://zacharypfizenmaier.com',
      logo: {
        url:
          'https://images.ctfassets.net/a5080911f65k/4PGCoXYZtbtSImuv04OCmU/27369887bbeb4496540b1ca5a7986378/sparkbang13.png?w=250&h=250',
        alt: 'TwinZ logo',
        height: '250',
        width: '250',
      },
    },
    keywords: ['Zachary', 'Pfizenmaier', 'portfolio'],
    social: {
      twitter: '@ElektrikAtom',
    },
    socialLinks: {
      twitter: 'https://twitter.com/ElektrikAtom',
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: ``,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `personal-website`,
        short_name: `personal`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
