import React from 'react';

import Title from '../Title';

import styles from '../../css/interviews.module.css';
import writtenInterviews from '../../constants/writtenInterviews';

const WrittenInterviews = () => {
	return (
		<section className={styles.writtenInterviews}>
			<Title title='Written' subtitle='Interviews' />
			<div className={styles.center}>
				{writtenInterviews.map((item, index) => {
					return (
						<article key={index} className={styles.interview}>
							<a
								href={item.url}
								className=''
								target='_blank'
								rel='noopener noreferrer'
							>
								<span>{item.icon}</span>
								<h4>{item.title}</h4>

								{item.text}
							</a>
						</article>
					);
				})}
			</div>
		</section>
	);
};

export default WrittenInterviews;
