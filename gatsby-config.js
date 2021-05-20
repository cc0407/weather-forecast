module.exports = {
    siteMetadata: {
        title: `Weather Forecast`,
        description: `Provides a detailed breakdown of the next 7 day forecast in your area.`,
        author: `@cc0407`,
    },
    plugins: [
        {
            resolve: 'gatsby-plugin-postcss',
            options: {
                postCssPlugins: [
                    require('tailwindcss')('./tailwind.config.js'),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: { tailwind: true },
        },
        
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
    //Change REPONAME to the name of this repo. Necessary for gh-pages to function
    pathPrefix: "/weather-forecast",
};
