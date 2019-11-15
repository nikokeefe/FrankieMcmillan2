import React from 'react';

import styles from '../css/banner.module.css';

const Banner = ({ titleTop, titleBottom, info, children, motion }) => {
	return (
		<div className={styles.banner}>
			<h2 className={styles.topTitle}>{titleTop}</h2>
			<h2 className={styles.bottomTitle}>{titleBottom}</h2>
			<p>{info}</p>
			{children}
		</div>
	);
};

export default Banner;
