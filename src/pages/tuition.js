import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Tuition from '../components/Tuition/Tuition';
import SEO from '../components/SEO';

const tuition = ({ data }) => {
  return (
    <Layout>
      <SEO title="Tuition" />
      <div className="">
        <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
        <Tuition />
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

export default tuition;
