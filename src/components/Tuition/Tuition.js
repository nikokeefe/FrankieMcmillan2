import React from 'react';

import Title from '../Title';
import image from './frankies_class.jpg';
import styles from '../../css/tuition.module.css';

export const Tuition = () => {
	return (
		<div className={styles.teach}>
			<Title title='Tuition' subtitle='' />
			<article className={styles.center}>
				<p>
					I have taught creative writing in a number of community settings
					including ARA Christchurch, Arts Council workshops, penal institutions
					etc. I particularly enjoy teaching short fiction. Workshop options
					include 2 hour, 4 hour and weekend sessions. My teaching style is
					focused but relaxed and ' hands on'.
				</p>
				<img src={image} alt='' className={styles.image} />
				<p>
					<a
						href='https://hagleywriters.net/2018/09/classes-end/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Frankie’s class at the end of a busy and stimulating programme.
					</a>
				</p>
				<p>
					Qualifications include an MA in Creative Writing, 1998 ( Distinction)
					International Institute of Modern Letters and a Certificate in Adult
					Education, Christchurch 2001.
				</p>
				<p>
					Tutor of creative writing 2008 - 2020 at the Hagley Writers'
					Institute. (This is a one year course for adult students keen to
					further their writing).
				</p>
				<p>Auckland Writers' Festival, 2017 Workshop on Flash fiction.</p>
				<p>
					Whanganui Summer School of Arts 2010 ( week long tuition on creative
					writing)
				</p>
				<p>
					National Bill Stickers Phantom Poetry workshop, co tutored with Kerrin
					Sharpe.
				</p>
			</article>
		</div>
	);
};

export default Tuition;
