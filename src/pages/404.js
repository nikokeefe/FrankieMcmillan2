import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import Banner from '../components/Banner';
import SEO from '../components/SEO';

import styles from '../css/error.module.css';

const error = () => {
  return (
    <Layout>
      <SEO title="Error" />
      <header className={styles.error}>
        <Banner titleTop="oops, its a dead end">
          <AniLink cover to="/" className="btn-white">
            back to home page
          </AniLink>
        </Banner>
      </header>
    </Layout>
  );
};

export default error;
