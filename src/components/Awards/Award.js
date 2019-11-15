import React from 'react';

import styles from '../../css/award.module.css';

const Award = ({ award }) => {
	const { awardTitle, url, date, winningTitle } = award;
	return (
		<div className={styles.award}>
			<a href={url} target='_blank' rel='noopener noreferrer'>
				<span className={styles.date}>{date}</span>
				<span className={styles.date}>{awardTitle}</span>
				<div className={styles.description}>{winningTitle}</div>
			</a>
			<hr className={styles.line} />
		</div>
	);
};

export default Award;
