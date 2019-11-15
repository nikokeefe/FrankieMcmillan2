import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Title from '../Title';

import styles from '../../css/about.module.css';
// import img from '../../images/defaultBcg.jpg';

const getAbout = graphql`
	query aboutImage {
		aboutImage: file(relativePath: { eq: "frankie_armchair.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600) {
					...GatsbyImageSharpFluid_tracedSVG
				}
			}
		}
	}
`;

const About = () => {
	const { aboutImage } = useStaticQuery(getAbout);

	return (
		<section className={styles.about}>
			<Title title='' subtitle='About' />
			<div className={styles.aboutCenter}>
				<article className={styles.aboutImg}>
					<div className={styles.imgContainer}>
						{/* <img src={img} alt="about frankie" /> */}
						<Image
							fluid={aboutImage.childImageSharp.fluid}
							alt='frankie in the garden'
						/>
					</div>
				</article>
				<article className={styles.aboutInfo}>
					<h4>Frankie's World</h4>
					<p>Delve into Frankie's world of flash fiction and poetry...</p>
					<AniLink fade to='/about' className='btn-primary'>
						explore
					</AniLink>
				</article>
			</div>
		</section>
	);
};

export default About;
