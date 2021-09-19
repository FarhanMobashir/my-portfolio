import { Link } from "gatsby";
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
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Context from "../store/context";
export default function Layout({
  children,
  title = false,
  description = false,
  image = false,
  path = false,
}) {
  // const data = useStaticQuery(graphql`
  //   query GetSiteTitle {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const activeLink = {
    borderBottomColor: "grey",
    borderBottomWidth: "1px",
    color: "#ff5678",
  };

  // console.log(
  //   window
  //     .getComputedStyle(document.documentElement)
  //     .getPropertyValue("--black-03")
  // );

  const [darkMode, setDarkmode] = React.useState(false);

  const { state, dispatch } = React.useContext(Context);

  // function DarkModeToggle() {
  //   setDarkmode(!darkMode);
  //   console.log(darkMode);
  // }

  React.useEffect(() => {
    if (state.isDark) {
      document.documentElement.style.setProperty("--bg-color", "#1f1e1d");
      // document.documentElement.style.setProperty("--black-01", "#1c1c1c");
      // document.documentElement.style.setProperty("--black-02", "#b0b0b0");
      // document.documentElement.style.setProperty("--black-03", "#cccccc");
      // document.documentElement.style.setProperty("--black-04", "#e8e8e8");
      // document.documentElement.style.setProperty("--black-05", "white");
      document.documentElement.style.setProperty("--black-01", "black");
      document.documentElement.style.setProperty("--black-02", "white");
      document.documentElement.style.setProperty("--black-03", "white");
      document.documentElement.style.setProperty("--black-04", "white");
      document.documentElement.style.setProperty("--black-05", "white");
      document.documentElement.style.setProperty("--btn-black", "black");
    } else {
      document.documentElement.style.setProperty("--bg-color", "#ffff");
      document.documentElement.style.setProperty("--black-01", "white");
      document.documentElement.style.setProperty("--black-02", "#909090");
      document.documentElement.style.setProperty("--black-03", "#4a4a4a");
      document.documentElement.style.setProperty("--black-04", "#353535");
      document.documentElement.style.setProperty("--black-05", "black");
      document.documentElement.style.setProperty("--black-03", "#4a4a4a");
      document.documentElement.style.setProperty("--btn-black", "#4a4a4a");
    }
  }, [state.isDark]);

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
            <li
              onClick={() => dispatch({ type: "TOGGLE_DARK_MODE" })}
              className={navItems}
            >
              <FontAwesomeIcon
                className={toggleIcon}
                style={
                  state.isDark ? { transition: "1s" } : { transition: "1s" }
                }
                icon={state.isDark ? faMoon : faSun}
              />
            </li>
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
