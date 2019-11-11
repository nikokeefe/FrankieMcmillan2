import React from 'react';
import { graphql } from 'gatsby';

import About from '../components/Home/About';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

const interviews = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <About />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default interviews;
