import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Books from '../components/Books/Books';
import SEO from '../components/SEO';

const books = ({ data }) => {
  return (
    <Layout>
      <SEO title="Books" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Books />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "frankie_reading.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default books;
