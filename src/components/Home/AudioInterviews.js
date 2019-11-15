import React from 'react';

import Title from '../Title';

import styles from '../../css/interviews.module.css';
import audioInterviews from '../../constants/audioInterviews';

const AudioInterviews = () => {
	return (
		<section className={styles.interviews}>
			<Title title='Audio' subtitle='Interviews' />
			<div className={styles.center}>
				{audioInterviews.map((item, index) => {
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

export default AudioInterviews;
