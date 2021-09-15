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
  projectBlogSection,
  projectBlogHeadingContainer,
  projectBlogHeading,
  projectBlogDescription,
  SocialLinks,
  projectsContainer,
  projectTitle,
  projectCard,
  technologyItem,
  technologyUsedContainer,
  projectDescription,
  projectImage,
  projectLink,
  primaryButton,
  secondaryButton,
  contentContainer,
  projectImageContainer,
  viewAll,
} from "../styles/index.module.css";

import {
  blogContainer,
  blogCard,
  blogTitle,
  blogImage,
  blogLink,
  blogDescription,
  postedText,
} from "../styles/blogs.module.css";

import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faExchangeAlt,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import { graphql, Link } from "gatsby";

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
  Professional:
    "I am Mobashir , and my main gig is and developing softwares that solves user problems and give them seamless experiences. I also design User Interfaces(UI) in Figma and I love that. In my free time I learn about UX research and medical science. Besides, I also love the subject of information security and want to contribute in making the internet a safer and healthy place. I do all this as a freelancer. Outside of that I'm useless 😄",
};

export const query = graphql`
  query getProject {
    allSanityProjectPreview {
      edges {
        node {
          _id
          title
          technologyUsed
          sourceCode
          liveLink
          image {
            asset {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          description
        }
      }
    }
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        id
        slug
        frontmatter {
          title
          description
          date(fromNow: true)
          cover {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

// markup
const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;
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
          <FontAwesomeIcon
            onClick={attributeClickHandler}
            className={repeatIcon}
            icon={faExchangeAlt}
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
                    ? {
                        backgroundColor: "#ff5678",
                        color: "white",
                        border: "none",
                      }
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
                    ? {
                        backgroundColor: "#ff5678",
                        color: "white",
                        border: "none",
                      }
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
                  <a
                    className={SocialLinks}
                    href="https://github.com/FarhanMobashir"
                  >
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                </li>
                <li className={SocialIconItems}>
                  <a
                    className={SocialLinks}
                    href="https://twitter.com/MobashirFarhan"
                  >
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li className={SocialIconItems}>
                  <a
                    className={SocialLinks}
                    href="https://www.linkedin.com/in/mobashirfarhan/"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li className={SocialIconItems}>
                  <a
                    className={SocialLinks}
                    href="https://www.instagram.com/farhan_mobashir001/?hl=en"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
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
        {/* project section */}
        <div className={projectBlogSection}>
          <div className={projectBlogHeadingContainer}>
            <h1 className={projectBlogHeading}>
              Mobashir loves to solve real world problems by developing useful
              applications
            </h1>
            <p className={projectBlogDescription}>
              Mobashir believes that computer science is all about solving
              problems and making the world a better and safer place. Let’s have
              a look on some of his projects
            </p>
            <div className={projectsContainer}>
              {data.allSanityProjectPreview.edges.map(
                ({ node: project }, idx) => (
                  <div className={projectCard} key={project.id}>
                    <div className={projectImageContainer}>
                      <GatsbyImage
                        className={projectImage}
                        image={project.image.asset.gatsbyImageData}
                        alt={project.title}
                      />
                    </div>
                    <div className={contentContainer}>
                      <h3 className={projectTitle}>{project.title}</h3>
                      <p className={projectDescription}>
                        {project.description}
                      </p>
                      <div className={technologyUsedContainer}>
                        {project.technologyUsed.map((item) => {
                          return (
                            <small className={technologyItem}>{item}</small>
                          );
                        })}
                      </div>

                      <button className={secondaryButton}>
                        <a
                          className={projectLink}
                          target="_blank"
                          href={project.sourceCode}
                        >
                          Source Code
                        </a>
                      </button>
                      <button className={primaryButton}>
                        <a
                          className={projectLink}
                          target="_blank"
                          href={project.liveLink}
                        >
                          View Live
                        </a>
                      </button>
                    </div>
                  </div>
                )
              )}
            </div>
            <Link className={viewAll} to="/projects">
              VIEW ALL PROJECTS &rarr;
            </Link>
          </div>
        </div>
        {/* blog-section */}
        <div className={projectBlogSection}>
          <div className={projectBlogHeadingContainer}>
            <h1 className={projectBlogHeading}>
              Mobashir also shares his learning through his writings
            </h1>
            <p className={projectBlogDescription}>
              Learning about new things is really exciting , but what’s more
              exciting is to share the learning with the world and sharing our
              vulnerabilities to become empathetically more powerful.
            </p>
            <div className={blogContainer}>
              {posts.slice(0, 3).map((post) => (
                <div className={blogCard} key={post.id}>
                  <GatsbyImage
                    className={blogImage}
                    image={
                      post.frontmatter.cover.childImageSharp.gatsbyImageData
                    }
                    alt="magnifying glass"
                    placeholder="dominantColor"
                    width={300}
                    height={150}
                  />
                  <h3 className={blogTitle}>{post.frontmatter.title}</h3>
                  <small className={postedText}>
                    posted : {post.frontmatter.date}
                  </small>
                  <p className={blogDescription}>
                    {post.frontmatter.description}
                  </p>
                  <Link className={blogLink} to={"/" + post.slug}>
                    CHECK IT OUT <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </Link>
                </div>
              ))}
            </div>
            <Link className={viewAll} to="/blogs">
              VIEW ALL BLOGS &rarr;
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default IndexPage;
