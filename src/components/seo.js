import { useStaticQuery, graphql } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

export function Seo(props) {
  const data = useStaticQuery(graphql`
    query GetSiteMetaData {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);
  const defaults = data?.site?.siteMetadata;
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = new URL(props.image || defaults.image, defaults.siteUrl);
  const url = new URL(props.path || "/", defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="desciption" content={description} />
      <link rel="canonical" href={url} />
      {image && <meta name="image" content={image} />}

      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta
        property="og:description"
        content="Mobashir is a software developer and designer who spends most of his time buiding softwares that solve user's problems giving them seamless experiences."
      />
      {image && <meta name="og:image" content={image} />}
      <meta name="twitter:card" content="summary-large-image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="google-site-verification"
        content="g0kA0W5zXg_NrV-r5fIX4IbTZXvqpmDLbMYKhaKDm5o"
      />
    </Helmet>
  );
}
