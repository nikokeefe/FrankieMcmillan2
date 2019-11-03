import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Book from '../Books/Book';
import Title from '../../components/Title';

import styles from '../../css/items.module.css';

const getHomepageBooks = graphql`
  query {
    homepageBooks: allContentfulBooks(filter: { home: { eq: true } }) {
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

const HomepageBooks = () => {
  const response = useStaticQuery(getHomepageBooks);
  const homepageBooks = response.homepageBooks.edges;

  return (
    <section className={styles.books}>
      <Title title="" subtitle="Books" />
      <div className={styles.center}>
        {homepageBooks.map(({ node }) => {
          return <Book key={node.contentful_id} book={node} />;
        })}
      </div>
      <AniLink fade to="/books" className="btn-primary">
        All Books
      </AniLink>
    </section>
  );
};

export default HomepageBooks;
