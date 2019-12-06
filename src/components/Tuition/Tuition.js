import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { useStaticQuery, graphql } from 'gatsby';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import Title from '../Title';

import styles from '../../css/tuition.module.css';

const getTuition = graphql`
  query getTuition {
    tuition: contentfulTuition {
      body {
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
        src={`${node.data.target.fields.file['en-US'].url}?w=300&q=100`}
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

const Tuition = ({ data }) => {
  const { tuition } = useStaticQuery(getTuition);

  const content = tuition.body;

  return (
    <div>
      <Title title="tuition" />
      <section className={styles.tuition}>
        <div className={styles.teachCenter}>
          <article>{documentToReactComponents(content.json, options)}</article>

          <AniLink fade to="/" className="btn-primary">
            Home
          </AniLink>
        </div>
      </section>
    </div>
  );
};

export default Tuition;
