import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Books from '../components/Books/Books';

const books = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <Books />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "allBooksBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default books;
