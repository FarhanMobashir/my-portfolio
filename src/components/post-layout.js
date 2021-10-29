import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import Layout from "./layout";
import { MDXProvider } from "@mdx-js/react";
import {
  authorDateContainer,
  blogTitle,
  blogTags,
  postedDate,
  tagsContainer,
  blogContent,
} from "../styles/post-layout.module.css";

export default function PostLayout({ children, pageContext }) {
  const { title, description, author, tags, date } = pageContext.frontmatter;
  let parsedDate = new Date(date).toDateString();
  //   let tagsArray = tags.split(",");
  // console.log(tags.split(","));
  return (
    <Layout title={title} description={description}>
      <h1 className={blogTitle}>{title}</h1>
      <div className={authorDateContainer}>
        <StaticImage src="../images/profile.png" width={40} height={40} />
        <small className={postedDate}>posted : {parsedDate}</small>
      </div>
      <div className={tagsContainer}>
        {tags.split(",").map((tag) => (
          <small className={blogTags}>{tag}</small>
        ))}
      </div>
      <div className={blogContent}>
        <MDXProvider
          components={
            {
              // Map HTML element tag to React component
              // h1: (props) => <h1 {...props} style={{ color: "red" }} />,
              // Or define component inline
              // p: (props) => <p {...props} style={{ color: "black" }} />,
            }
          }
        >
          {children}
        </MDXProvider>
      </div>
      <Link to="/blogs"> &larr; go back</Link>
    </Layout>
  );
}
