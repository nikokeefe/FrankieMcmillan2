import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

import styles from '../css/single-review.module.css';

const Review = ({ data }) => {
  const {
    title,
    publishedDate,
    content: { json },
  } = data.review;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div>
            <img
              width="400px"
              src={node.data.target.fields.file['en-US'].url}
              alt="review"
            />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.review}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published: {publishedDate}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>

          <AniLink cover to="/reviews" className="btn-primary">
            all reviews
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getReview($slug: String!) {
    review: contentfulReviews(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM DD, YYYY")
      excerpt
      content {
        json
      }
      featuredImage {
        fluid {
          src
        }
      }
    }
  }
`;

export default Review;
