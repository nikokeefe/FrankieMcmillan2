import React from 'react';

import styles from '../css/banner.module.css';

const Banner = ({ titleTop, titleBottom, info, children }) => {
  return (
    <div className={styles.banner}>
      <h2>{titleTop}</h2>
      <h2>{titleBottom}</h2>
      <p>{info}</p>
      {children}
    </div>
  );
};

export default Banner;
