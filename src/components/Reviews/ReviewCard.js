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
        <AniLink fade to={`/reviews/${slug}`} className={styles.link}>
          Read More...
        </AniLink>
        <h6 className={styles.date}>{publishedDate}</h6>
        <div className={styles.footer}>
          <h4>{title}</h4>
        </div>
      </div>
    </article>
  );
};

export default ReviewCard;
