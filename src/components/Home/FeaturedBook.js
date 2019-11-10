import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Book from '../Books/Book';
import Title from '../../components/Title';
import StyledFeature from '../../components/StyledFeature';
import Banner from '../Banner';

import styles from '../../css/featured.module.css';

const getFeaturedBooks = graphql`
  query {
    featuredBook: allContentfulBooks(filter: { featured: { eq: true } }) {
      edges {
        node {
          contentful_id
          title
          shortDescription
          slug
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

const FeaturedBooks = () => {
  const response = useStaticQuery(getFeaturedBooks);
  const featuredBook = response.featuredBook.edges;
  const image = featuredBook[0].node.featuredImage.fluid;

  return (
    <section className={styles.books}>
      <Title title="" subtitle="Latest..." />
      <div className={styles.center}>
        {featuredBook.map(({ node }) => {
          return;
        })}
      </div>
      <StyledFeature img={image} home={true}>
        <Banner
          titleTop="frankie"
          titleBottom="mcmillan"
          info="Discover Frankie's latest book, The Father of Octopus Wresting and other small fictions"
        >
          <AniLink fade to="/books" className="btn-primary">
            more
          </AniLink>
        </Banner>
      </StyledFeature>
    </section>
  );
};

export default FeaturedBooks;
