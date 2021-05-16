module.exports = {
    siteMetadata: {
        title: `Boilerplate`,
        description: `Enter a description here`,
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
    pathPrefix: "/REPONAME",
};
