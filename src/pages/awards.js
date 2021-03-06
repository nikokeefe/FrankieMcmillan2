import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import AwardList from '../components/Awards/AwardList';
import SEO from '../components/SEO';

const awards = ({ data }) => {
  return (
    <Layout>
      <SEO title="Awards" />
      <StyledHero img={data.defaultBcg.childImageSharp.fluid} />
      <AwardList />
      <AniLink fade to="/books" className="btn-primary">
        home
      </AniLink>
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

export default awards;
