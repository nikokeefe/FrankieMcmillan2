import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import BlogList from '../components/Blog/BlogList';

const blog = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <BlogList />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "jesusOstriches.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;

export default blog;
