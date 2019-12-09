import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import SEO from '../components/SEO';

import styles from '../css/contact.module.css';

const thanks = ({ data }) => {
  return (
    <Layout>
      <SEO title="Thanks" />
      <div className="">
        <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
        <div className={styles.thanks}>
          <h1>Thank you! I'll be in touch soon.</h1>
        </div>
        <div className={styles.center}>
          <AniLink cover className="btn-primary" to={`/`}>
            back home
          </AniLink>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "book_excerpt.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default thanks;
