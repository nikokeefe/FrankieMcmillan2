import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import SEO from '../components/SEO';
import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import Interviews from '../components/Home/Interviews';
import HomepageBooks from '../components/Home/HomepageBooks';
import FeaturedBook from '../components/Home/FeaturedBook';

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" description="this is the homepage description" />
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          motion="left"
          titleTop=""
          titleBottom="Frankie McMillan"
          info="an award winning poet and flash fiction writer from New Zealand."
        >
          <AniLink cover to="/about" className="btn-white">
            about...
          </AniLink>
        </Banner>
      </StyledHero>
      <FeaturedBook />
      <HomepageBooks />
      <Interviews />
    </Layout>
  );
};

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "frankie_backyard.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`;
