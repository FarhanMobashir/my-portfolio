import * as React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  heroSection,
  heroHeading,
  heroSubHeading,
  projectsContainer,
  projectTitle,
  projectCard,
  projectCardAlt,
  technologyItem,
  technologyUsedContainer,
  projectDescription,
  projectImage,
  projectLink,
  primaryButton,
  secondaryButton,
  contentContainer,
  projectImageContainer,
  backLink,
} from "../styles/projects.module.css";
export const query = graphql`
  query allSanityProjects {
    allSanityProject {
      edges {
        node {
          _id
          title
          description
          image {
            asset {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          technologyUsed
          sourceCode
          liveLink
        }
      }
    }
  }
`;

// markup
const ProjectsPage = ({ data }) => {
  return (
    <Layout>
      <main>
        <div className={heroSection}>
          <h1 className={heroHeading}>
            Mobashir loves to solve real world problems by developing useful
            applications
          </h1>
          <p className={heroSubHeading}>
            Mobashir believes that computer science is all about solving
            problems and making the world a better and safer place. Let’s have a
            look on some of his projects
          </p>
        </div>
        <div className={projectsContainer}>
          {data.allSanityProject.edges.map(({ node: project }, idx) => {
            return idx % 2 !== 0 ? (
              <div className={projectCard} key={project.id}>
                <div className={contentContainer}>
                  <h3 className={projectTitle}>{project.title}</h3>
                  <p className={projectDescription}>{project.description}</p>
                  <div className={technologyUsedContainer}>
                    {project.technologyUsed.map((item) => {
                      return <small className={technologyItem}>{item}</small>;
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
                <div className={projectImageContainer}>
                  <GatsbyImage
                    className={projectImage}
                    image={project.image.asset.gatsbyImageData}
                    alt={project.title}
                  />
                </div>
              </div>
            ) : (
              <div className={projectCardAlt} key={project.id}>
                <div className={contentContainer}>
                  <h3 className={projectTitle}>{project.title}</h3>
                  <p className={projectDescription}>{project.description}</p>
                  <div className={technologyUsedContainer}>
                    {project.technologyUsed.map((item) => {
                      return <small className={technologyItem}>{item}</small>;
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
                <div className={projectImageContainer}>
                  <GatsbyImage
                    className={projectImage}
                    image={project.image.asset.gatsbyImageData}
                    alt={project.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <Link className={backLink} to="/">
          <FontAwesomeIcon
            style={{ marginLeft: "10%" }}
            icon={faLongArrowAltLeft}
          />
          Back to home
        </Link>
      </main>
    </Layout>
  );
};

export default ProjectsPage;
