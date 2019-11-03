import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { FaMoneyBillWave, FaMap } from 'react-icons/fa';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import styles from '../css/template.module.css';

const Template = ({ data }) => {
  const {
    title,
    shortDescription,
    publishedDate,
    content: { content },
    featuredImage,
    imageGallery,
  } = data.book;

  const [...bookImages] = imageGallery;

  return (
    <Layout>
      <StyledHero img={featuredImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {bookImages.map((item, index) => {
              return (
                <Image
                  key={index}
                  fluid={item.fluid}
                  alt="single book"
                  className={styles.image}
                />
              );
            })}
          </div>
          <h2>{title}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              some sorta quote or pages or ...
            </p>
            <p>
              <FaMap className={styles.icon} />
              published: {publishedDate}
            </p>
            <p className={styles.desc}>{content}</p>
          </div>
          <AniLink paintDrip to="/books" className="btn-primary">
            back to books
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    book: contentfulBooks(slug: { eq: $slug }) {
      title
      shortDescription
      publishedDate(formatString: "dddd MMMM, YYYY")
      content {
        content
      }
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
`;

export default Template;
