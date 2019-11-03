import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import ReviewCard from './ReviewCard';
import Title from '../Title';

import styles from '../../css/review.module.css';

const getReviews = graphql`
  query {
    reviews: allContentfulReviews(
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(formatString: "MMMM DD YYYY")
          id: contentful_id
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

const ReviewList = () => {
  const { reviews } = useStaticQuery(getReviews);

  return (
    <section className={styles.review}>
      <Title title="" subtitle="Reviews" />
      <div className={styles.center}>
        {reviews.edges.map(({ node }) => {
          return <ReviewCard key={node.id} review={node} />;
        })}
      </div>
    </section>
  );
};

export default ReviewList;
