import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import Layout from '../components/Layout';

import styles from '../css/single-blog.module.css';

const Blog = ({ data }) => {
  const {
    title,
    publishedDate,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div>
            <img
              width="300"
              src={node.data.target.fields.file['en-US'].url}
              alt="single"
            />
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields;

        return (
          <div>
            <div>Post: {title['en-US']}</div>
            <img
              width="300"
              src={image['en-US'].fields.file['en-US'].url}
              alt="single"
            />
            {documentToReactComponents(text['en-US'])}
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.blog}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published on: {publishedDate}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/blog" className="btn-primary">
            all posts
          </AniLink>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query getPost($slug: String!) {
    post: contentfulPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default Blog;
