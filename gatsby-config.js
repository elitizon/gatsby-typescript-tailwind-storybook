const config = {
  siteMetadata: {
    title: 'Gatsby typescript template',
    description: 'A typescript template created with 😍 by Elitizon Ltd',
  },
  plugins: [
    /** PostCSS support for taiwindcss */
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    /** Support of typescript */
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true, // defaults to false
        jsxPragma: `jsx`, // defaults to "React"
        allExtensions: true, // defaults to false
      },
    },
    /** Import SVG files as ReactComponent */
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}

module.exports = config
