import React from 'react';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../css/review-card.module.css';

const ReviewCard = ({ review }) => {
  const { title, slug, publishedDate, featuredImage } = review;

  return (
    <article className={styles.review}>
      <div className={styles.imgContainer}>
        <Image
          fluid={featuredImage.fluid}
          className={styles.img}
          alt="single review"
        />
      </div>
    </article>
  );
};

export default ReviewCard;
