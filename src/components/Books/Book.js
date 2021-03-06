import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql, navigate } from 'gatsby';

import styles from '../../css/book.module.css';
// import AniLink from 'gatsby-plugin-transition-link/AniLink';

const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const Book = ({ book }) => {
  // set default image
  const data = useStaticQuery(getDefaultImage);
  const img = data.file.childImageSharp.fluid;

  // title, shortDescription
  const { slug, featuredImage } = book;

  let mainImage = featuredImage ? featuredImage.fluid : img;

  // let mainImage = seoImage.fluid;

  return (
    <article className={styles.book}>
      <div onClick={() => navigate(`/books/${book.slug}`)}>
        <Image fluid={mainImage} className={styles.img} alt="single book" />
        {/* <AniLink cover className={styles.link} to={`/books/${slug}`}></AniLink> */}
      </div>
    </article>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    featuredImage: PropTypes.object.isRequired,
    imageGallery: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default Book;
