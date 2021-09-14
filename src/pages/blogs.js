import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import Layout from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import {
  heroSection,
  heroHeading,
  heroSubHeading,
  blogContainer,
  blogCard,
  blogTitle,
  blogImage,
  blogLink,
  blogDescription,
  postedText,
} from "../styles/blogs.module.css";
import { StaticImage } from "gatsby-plugin-image";

// markup
const BlogsPage = () => {
  const data = useStaticQuery(graphql`
    query getBlogPosts {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            title
            description
            date(fromNow: true)
          }
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <main>
        <div className={heroSection}>
          <h1 className={heroHeading}>
            Mobashir also shares his learning through his writings
          </h1>
          <p className={heroSubHeading}>
            Learning about new things is really exciting , but what’s more
            exciting is to share the learning with the world and sharing our
            vulnerabilities to become empathetically more powerful.
          </p>
        </div>
        <div className={blogContainer}>
          {posts.map((post) => (
            <div className={blogCard} key={post.id}>
              <StaticImage
                className={blogImage}
                src="../images/searchBlog.jpg"
                alt="magnifying glass"
                placeholder="dominantColor"
                width={300}
                height={150}
              />
              <h3 className={blogTitle}>{post.frontmatter.title}</h3>
              <small className={postedText}>
                posted : {post.frontmatter.date}
              </small>
              <p className={blogDescription}>{post.frontmatter.description}</p>
              <Link className={blogLink} to={"/" + post.slug}>
                CHECK IT OUT <FontAwesomeIcon icon={faLongArrowAltRight} />
              </Link>
            </div>
          ))}
        </div>

        <Link to="/">Back to home</Link>
      </main>
    </Layout>
  );
};

export default BlogsPage;
