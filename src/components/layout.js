import { graphql, Link, useStaticQuery } from "gatsby";
import * as React from "react";
import { Seo } from "./seo";
import "../styles/global.css";
import {
  header,
  navList,
  homeLink,
  navLink,
  nav,
  navItems,
  content,
  footerHeading,
  footerLinks,
  footerItems,
  footerList,
  toggleIcon,
} from "../styles/layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";

export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  const data = useStaticQuery(graphql`
    query GetSiteTitle {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  //   const meta = data?.site?.sitemetadata ?? {};
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className={header}>
        <Link className={homeLink} to="/">
          mobashir.
        </Link>
        <nav className={nav}>
          <ul className={navList}>
            <li className={navItems}>
              <Link className={navLink} to="/projects">
                Projects
              </Link>
            </li>
            <li className={navItems}>
              <Link className={navLink} to="/blogs">
                Blogs
              </Link>
            </li>
            <li className={navItems}>
              <FontAwesomeIcon className={toggleIcon} icon={faSun} />
            </li>
          </ul>
        </nav>
      </header>
      <main className={content}>{children}</main>
      <footer>
        <h3 className={footerHeading}>© 2021 | Mobashir Farhan</h3>
        <ul className={footerList}>
          <li className={footerItems}>
            <Link className={footerLinks} to="/">
              <FontAwesomeIcon className={toggleIcon} icon={faGithub} />
            </Link>
          </li>
          <li className={footerItems}>
            <Link className={footerLinks} to="/">
              <FontAwesomeIcon className={toggleIcon} icon={faTwitter} />
            </Link>
          </li>
          <li className={footerItems}>
            <Link className={footerLinks} to="/">
              <FontAwesomeIcon className={toggleIcon} icon={faLinkedin} />
            </Link>
          </li>
          <li className={footerItems}>
            <Link className={footerLinks} to="/">
              <FontAwesomeIcon className={toggleIcon} icon={faInstagram} />
            </Link>
          </li>
          <li className={footerItems}>
            <Link className={footerLinks} to="/">
              <FontAwesomeIcon className={toggleIcon} icon={faYoutube} />
            </Link>
          </li>
        </ul>
      </footer>
    </>
  );
}
