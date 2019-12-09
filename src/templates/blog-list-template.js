import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import BlogCard from '../components/Blog/BlogCard';
import Title from '../components/Title';

import styles from '../css/blog.module.css';

const Blog = props => {
  const { currentPage, numPages } = props.pageContext;

  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;

  const prevPage =
    currentPage - 1 === 1 ? `/blogs` : `/blogs/${currentPage - 1}`;
  const nextPage = `/blogs/${currentPage + 1}`;
  const { data } = props;

  return (
    <Layout>
      <section className={styles.blog}>
        <Title title="latest" subtitle="posts" />
        <div className={styles.center}>
          {data.posts.edges.map(({ node }) => {
            return <BlogCard key={node.id} blog={node} />;
          })}
        </div>
        <section className={styles.links}>
          {!isFirst && (
            <AniLink fade to={prevPage} className={styles.link}>
              Prev
            </AniLink>
          )}

          {Array.from({ length: numPages }, (_, index) => {
            return (
              <AniLink
                fade
                key={index}
                to={`/blogs/${index === 0 ? '' : index + 1}`}
                className={
                  index + 1 === currentPage
                    ? `${styles.link} ${styles.active}`
                    : `${styles.link}`
                }
              >
                {index + 1}
              </AniLink>
            );
          })}
          {!isLast && (
            <AniLink fade to={nextPage} className={styles.link}>
              Next
            </AniLink>
          )}
        </section>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPosts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(
      skip: $skip
      limit: $limit
      sort: { fields: publishedDate, order: DESC }
    ) {
      edges {
        node {
          slug
          title
          id: contentful_id
          publishedDate(formatString: "MMM Do, YYYY")
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default Blog;
