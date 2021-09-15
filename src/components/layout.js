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
  socialIcon,
} from "../styles/layout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

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

  const activeLink = {
    borderBottomColor: "grey",
    borderBottomWidth: "1px",
    color: "#ff5678",
  };

  //   const meta = data?.site?.sitemetadata ?? {};
  return (
    <>
      <Seo title={title} description={description} image={image} path={path} />
      <header className={header}>
        <Link className={homeLink} to="/" activeStyle={activeLink}>
          mobashir.
        </Link>
        <nav className={nav}>
          <ul className={navList}>
            <li className={navItems}>
              <Link className={navLink} to="/projects" activeStyle={activeLink}>
                Projects
              </Link>
            </li>
            <li className={navItems}>
              <Link className={navLink} to="/blogs" activeStyle={activeLink}>
                Blogs
              </Link>
            </li>
            {/* <li className={navItems}>
              <FontAwesomeIcon className={toggleIcon} icon={faSun} />
            </li> */}
          </ul>
        </nav>
      </header>
      <main className={content}>{children}</main>
      <footer>
        <h3 className={footerHeading}>© 2021 | Mobashir Farhan</h3>
        <ul className={footerList}>
          <li className={footerItems}>
            <a className={footerLinks} href="https://github.com/FarhanMobashir">
              <FontAwesomeIcon className={socialIcon} icon={faGithub} />
            </a>
          </li>
          <li className={footerItems}>
            <a
              className={footerLinks}
              href="https://twitter.com/MobashirFarhan"
            >
              <FontAwesomeIcon className={socialIcon} icon={faTwitter} />
            </a>
          </li>
          <li className={footerItems}>
            <a
              className={footerLinks}
              href="https://www.linkedin.com/in/mobashirfarhan/"
            >
              <FontAwesomeIcon className={socialIcon} icon={faLinkedin} />
            </a>
          </li>
          <li className={footerItems}>
            <a
              className={footerLinks}
              href="https://www.instagram.com/farhan_mobashir001/?hl=en"
            >
              <FontAwesomeIcon className={socialIcon} icon={faInstagram} />
            </a>
          </li>
          <li className={footerItems}>
            <a
              className={footerLinks}
              href="https://www.youtube.com/channel/UC2Bs66DI7Lu4aKFdsUdZQQg"
            >
              <FontAwesomeIcon className={socialIcon} icon={faYoutube} />
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
