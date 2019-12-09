import React from 'react';
import Image from 'gatsby-image';
import { navigate } from 'gatsby';
//import AniLink from 'gatsby-plugin-transition-link/AniLink';

import styles from '../../css/blog-card.module.css';

const BlogCard = ({ blog }) => {
  const { slug, title, image, publishedDate } = blog;
  return (
    <article className={styles.blog}>
      <div className={styles.imgContainer}>
        <div onClick={() => navigate(`/blog/${slug}`)}>
          <Image fluid={image.fluid} className={styles.img} alt="single post" />
          <h6 className={styles.date}>{publishedDate}</h6>
        </div>
        <div className={styles.footer}>
          <h4>{title}</h4>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
