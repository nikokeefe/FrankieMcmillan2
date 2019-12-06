import React from 'react';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../css/post-card.module.css';

const PostCard = ({ post }) => {
  const { title, slug, publishedDate, image } = post;
  return (
    <article className={styles.post}>
      <div className={styles.imgContainer}>
        <Image fluid={image.fluid} className={styles.img} alt="single post" />
        <AniLink fade className={styles.link} to={`/posts/${slug}`}>
          See More
        </AniLink>
        <h6 className={styles.date}>{publishedDate}</h6>
      </div>
      <div className={styles.footer}>
        <h4>{title}</h4>
      </div>
    </article>
  );
};

export default PostCard;
