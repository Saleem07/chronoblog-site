module.exports = {
  siteMetadata: {
    siteTitle: 'Saleem Shah',
    siteDescription: 'Personal blog ',
    siteImage: '/banner.png', // main image of the site for metadata
    siteUrl: 'https://saleemsh.me',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Saleem Shah',
    authorDescription: 'A regular IT guy.', // short text about the author
    avatar: '/avatar.png',
    social: [
      {
        icon: `at`,
        url: `mailto:mohammadsaleem07@outlook.com`
      },
      {
        icon: `medium`,
        url: `https://medium.com/@Saleem0`
      },
      {
        icon: `github`,
        url: `https://github.com/Saleem07`
      },
      {
        icon: `linkedin`,
        url: `https://www.linkedin.com/in/mohammad-saleem-shah-08b82495/`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/disk.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-165932975-1'
      }
    }
  ]
};
