import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import Interviews from '../components/Home/Interviews';
import HomepageBooks from '../components/Home/HomepageBooks';
import FeaturedBook from '../components/Home/FeaturedBook';

export default ({ data }) => {
  return (
    <Layout>
      <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid}>
        <Banner
          titleTop="frankie"
          titleBottom="mcmillan"
          info="Discover Frankie's latest book, The Father of Octopus Wresting and other small fictions"
        >
          <AniLink cover to="/books" className="btn-white">
            explore books
          </AniLink>
        </Banner>
      </StyledHero>
      <FeaturedBook />
      <About />
      <HomepageBooks />
      <Interviews />
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
