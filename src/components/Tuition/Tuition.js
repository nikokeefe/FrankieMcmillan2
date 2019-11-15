import React from 'react';

import Title from '../Title';

import styles from '../../css/tuition.module.css';

export const Tuition = () => {
	return (
		<div className={styles.teach}>
			<Title title='Tuition' subtitle='' />
			<article className={styles.center}>
				<p>Frankie McMillan can teach you!</p>
			</article>
		</div>
	);
};

export default Tuition;
