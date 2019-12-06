import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { useStaticQuery, graphql } from "gatsby";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";

import Title from "../Title";

import styles from "../../css/about.module.css";

const getAbout = graphql`
  query getAbout {
    about: contentfulAbout {
      about {
        json
      }
    }
  }
`;

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
    [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
      <img
        src={`${node.data.target.fields.file["en-US"].url}?w=300&q=100`}
        alt=""
      />
    ),
    [BLOCKS.QUOTE]: (node, children) => (
      <div className="quotation">{children}</div>
    ),
    [MARKS.BOLD]: (node, children) => (
      <span className="bold-title">{children}</span>
    ),
  },
};

const About = ({ data }) => {
  const { about } = useStaticQuery(getAbout);

  const content = about.about;

  return (
    <div>
      <Title title="about" />
      <section className={styles.about}>
        <div className={styles.center}>
          <article>{documentToReactComponents(content.json, options)}</article>

          <AniLink fade to="/" className="btn-primary">
            Home
          </AniLink>
        </div>
      </section>
    </div>
  );
};

export default About;
