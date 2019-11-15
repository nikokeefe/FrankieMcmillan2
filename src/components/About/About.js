import React from 'react';

import Title from '../Title';

import styles from '../../css/aboutPage.module.css';

export const About = () => {
	return (
		<div className={styles.about}>
			<Title title='' subtitle='About' />
			<article className={styles.center}>
				<p>
					Frankie McMillan is a poet and short fiction writer. She has published
					five books including My Mother and the Hungarians and other small
					fictions, long listed for the 2017 NZ Ockham awards. In 2018 she co
					edited Bonsai best small stories from Aotearoa New Zealand. She has
					won a number of awards and in 2014 held the Ursula Bethell writing
					residency at Canterbury University. In 2017 she held the University of
					Auckland/Michael King writing residency. Her forthcoming book The
					Father of Octopus Wrestling and other stories will be launched by
					Canterbury University Press on August 31st 2019.
				</p>
				<p>
					Born and raised in Christchurch, McMillan studied at Victoria
					University of Wellington, where she completed an MA in creative
					writing at the International Institute of Modern Letters.
				</p>
				<p>
					McMillan’s first book of stories The Bag Lady’s Picnic and Other
					Stories was published in 2001 by Shoal Bay Press. Lindsay Botham wrote
					in The Listener, 'Acute observations, coupled with achingly clear
					insight, are the hallmarks of this dazzling collection of short
					stories.' In the Weekend Herald, Penelope Bieder wrote, 'This writing
					and these stories announce the arrival of a strong new voice on the
					New Zealand literary scene.'
				</p>
				<p>
					In 2009, McMillan featured in Essential NZ Short Stories (Vintage),
					edited by Owen Marshall.
				</p>
				<p>
					Her poetry appears in the anthology, The Unbelievable Lightness of
					Eggs (Hallard, 2006), a collection featuring the work of six New
					Zealand poets. Her first collection of poetry, Dressing for the
					Cannibals (Sudden Valley Press), was published in 2009. This was
					followed by a second poetry collection. There are No Horses in Heaven
					published by Canterbury University in March 2015.
				</p>
				<p>
					In 2005, Frankie was awarded the New Todd Bursary. Her work was
					selected for tthe 2008 and 2009 publications of Best New Zealand
					Fiction Anthologies (Vintage) and the 2013 and 2015 publications of
					Best New Zealand Poems (online, Victoria University). She won the 2009
					New Zealand Poetry Society International Poetry Competition, and
					received the 2014 Ursula Bethell Writing Residency at Canterbury
					University.
				</p>
				<p>
					McMillan was the winner of the 2013 and 2015 New Zealand Flash Fiction
					Competition. At the 2016 14th International Short Story Conference in
					Shanghai, she presented a paper on Flash Fiction in New Zealand.
				</p>
				<p>
					Her latest book, My Mother and the Hungarians, and Other Small
					Fictions (Canterbury University Press) was published in 2016. McMillan
					was selected for the 2017 Residency at the Michael King Writers'
					Centre, alongside Anna Jackson, Whiti Hereaka and Anthony Byrt; and My
					Mother and the Hungarians was longlisted for the 2017 Ockham New
					Zealand Book Awards.
				</p>
			</article>
		</div>
	);
};

export default About;
