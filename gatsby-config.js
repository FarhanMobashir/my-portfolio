module.exports = {
  siteMetadata: {
    siteUrl: `https://www.mobashirfarhan.tech`,
    title: "Mobashir Farhan",
    description:
      "Mobashir is a software developer and designer who spends most of his time buiding softwares that solve user's problems giving them seamless experiences.",
    image: "https://i.ibb.co/52ns5nT/prof.jpg",
    googleSeo: "google-site-verification",
    googleContent: "g0kA0W5zXg_NrV-r5fIX4IbTZXvqpmDLbMYKhaKDm5o",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/posts`,
      },
    },
    "gatsby-remark-images",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
            },
          },
        ],
        defaultLayouts: {
          posts: require.resolve("./src/components/post-layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "iei4d8hw",
        dataset: "production",
        graphqlTag: "default",
      },
    },
  ],
};
