import React from 'react';
import Image from 'gatsby-image';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import styles from '../../css/book.module.css';
import { GiScrollUnfurled } from 'react-icons/gi';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const getDefaultImage = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
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
  const { title, slug, featuredImage } = book;

  let mainImage = featuredImage ? featuredImage.fluid : img;

  // let mainImage = seoImage.fluid;

  return (
    <article className={styles.book}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="single book" />
        <AniLink cover className={styles.link} to={`/books/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{title}</h3>
        <div className={styles.info}>
          <h4 className={styles.country}>
            <GiScrollUnfurled className={styles.icon} />
            {title || 'default title'}
          </h4>
        </div>
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
