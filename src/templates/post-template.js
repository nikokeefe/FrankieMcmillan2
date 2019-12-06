import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Layout from '../components/Layout';

import styles from '../css/single-post.module.css';

const Post = ({ data }) => {
  const {
    title,
    publishedDate,
    text: { json },
  } = data.post;

  const options = {
    renderNode: {
      'embedded-asset-block': node => {
        return (
          <div className="rich">
            <h3>Image</h3>
            <img
              width="200"
              src={node.data.target.fields.file['en-US'].url}
              alt={title}
            />
            <p>images from frankie</p>
          </div>
        );
      },
      'embedded-entry-block': node => {
        const { title, image, text } = node.data.target.fields;

        return (
          <div>
            <br />
            <br />
            <br />
            <h3>Embedded Post: {title['en-US']}</h3>
            <img
              width="200"
              src={image['en-US'].fields.file['en-US'].url}
              alt={title['en-US']}
            />
            {documentToReactComponents(text['en-US'])}
            <br />
            <br />
            <br />
          </div>
        );
      },
    },
  };

  return (
    <Layout>
      <section className={styles.post}>
        <div className={styles.center}>
          <h1>{title}</h1>
          <h4>published on: {publishedDate}</h4>
          <article className={styles.post}>
            {documentToReactComponents(json, options)}
          </article>
          <AniLink fade to="/posts" className="btn-primary">
            all Posts
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
      publishedDate(formatString: "MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`;

export default Post;
