import * as React from "react";
import Layout from "../components/layout";
import {
  heroSection,
  heroHeading,
  heroSubHeading,
  repeatIcon,
  aboutSectionContainer,
  bioSectionContainer,
  bioTasteContainer,
  bioTasteButton,
  bioSection,
  helloText,
  bioText,
  socialIconContainer,
  profileImageContainer,
  profileImage,
  SocialIconItems,
  SocialIconList,
  SocialLinks,
} from "../styles/index.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const attributeData = [
  "who loves software engineering",
  "Who designs and codes",
  "who is a friendly person",
  "who loves to solve problems",
  "who can be your good friend too",
  "who cooks delicious foods",
  "who sings on guitar on a rainy day",
];

const bioData = {
  Casual:
    "Hello! My name is Mobashir Farhan, and I enjoy watching the sunset, eating candyfloss and waking up late in the morning.Just kidding, more importantly my friend will describe me as someone who loves to draw beautiful things, cook delicious foods, play guitar and loves to motivate them to start learning programming which sometimes irritate them 😂",
  Professional: "Still trying to find the perfect professional introduction...",
};

// markup
const IndexPage = () => {
  function attributeClickHandler() {
    if (attributeIdx < attributeData.length - 1) {
      setAttributeIdx(attributeIdx + 1);
    } else {
      setAttributeIdx(0);
    }
  }
  function bioTasteClickHandler(e) {
    setActiveTaste(e.target.outerText);
  }
  const [attributeIdx, setAttributeIdx] = React.useState(0);
  const [activeTaste, setActiveTaste] = React.useState("Casual");
  return (
    <Layout>
      <main>
        <div className={heroSection}>
          <h1 className={heroHeading}>Hello from Mobashir</h1>
          <h3 className={heroSubHeading}>{attributeData[attributeIdx]}</h3>
          <StaticImage
            onClick={attributeClickHandler}
            className={repeatIcon}
            src="../images/repeatIcon.png"
            alt="magnifying glass"
            placeholder="none"
            width={30}
            height={30}
          />
        </div>
        <div className={aboutSectionContainer}>
          <div className={bioSectionContainer}>
            <div className={bioTasteContainer}>
              <button
                onClick={bioTasteClickHandler}
                className={bioTasteButton}
                style={
                  activeTaste === "Professional"
                    ? { backgroundColor: "#ff5678", color: "white" }
                    : {
                        backgroundColor: "white",
                        color: "#4a4a4a",
                      }
                }
              >
                Professional
              </button>
              <button
                onClick={bioTasteClickHandler}
                className={bioTasteButton}
                style={
                  activeTaste === "Casual"
                    ? { backgroundColor: "#ff5678", color: "white" }
                    : {
                        backgroundColor: "white",
                        color: "#4a4a4a",
                      }
                }
              >
                Casual
              </button>
            </div>
            <div className={bioSection}>
              <h3 className={helloText}>HELLO EVERYONE</h3>
              <p className={bioText}>{bioData[activeTaste]}</p>
            </div>
            <div className={socialIconContainer}>
              <ul className={SocialIconList}>
                <li className={SocialIconItems}>
                  <Link className={SocialLinks} to="/">
                    <FontAwesomeIcon icon={faGithub} />
                  </Link>
                </li>
                <li className={SocialIconItems}>
                  <Link className={SocialLinks} to="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li className={SocialIconItems}>
                  <Link className={SocialLinks} to="/">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
                <li className={SocialIconItems}>
                  <Link className={SocialLinks} to="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={profileImageContainer}>
            <StaticImage
              className={profileImage}
              src="../images/profile.png"
              alt="profile picture"
              placeholder="dominantColor"
              width={300}
              height={300}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
