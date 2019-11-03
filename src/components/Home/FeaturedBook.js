import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Book from '../Books/Book';
import Title from '../../components/Title';

import styles from '../../css/featured.module.css';

const getFeaturedBooks = graphql`
  query {
    featuredBooks: allContentfulBooks(filter: { featured: { eq: true } }) {
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
  const featuredBook = response.featuredBooks.edges;

  return (
    <section className={styles.books}>
      <Title title="" subtitle="Latest..." />
      <div className={styles.center}>
        {featuredBook.map(({ node }) => {
          return <Book key={node.contentful_id} book={node} />;
        })}
      </div>
      <AniLink fade to="/books" className="btn-primary">
        more
      </AniLink>
    </section>
  );
};

export default FeaturedBooks;
