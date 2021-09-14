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
      <meta property="og:description" content="website" />
      {image && <meta name="og:image" content={image} />}
      <meta name="twitter:card" content="summary-large-image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
