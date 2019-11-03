import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import BookList from './BookList';

const getBooks = graphql`
  query {
    books: allContentfulBooks {
      edges {
        node {
          contentful_id
          title
          shortDescription
          slug
          featuredImage {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          imageGallery {
            fluid {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

const Books = () => {
  const { books } = useStaticQuery(getBooks);

  return <BookList books={books} />;
};

export default Books;
