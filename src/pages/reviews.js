import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import ReviewList from '../components/Reviews/ReviewList';
import SEO from '../components/SEO';

const reviews = ({ data }) => {
  return (
    <Layout>
      <SEO title="Reviews" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <ReviewList />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "reviewBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default reviews;
