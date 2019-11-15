import React from 'react';
import { graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import Banner from '../components/Banner';
import About from '../components/Home/About';
import AudioInterviews from '../components/Home/AudioInterviews';
import HomepageBooks from '../components/Home/HomepageBooks';
import FeaturedBook from '../components/Home/FeaturedBook';

export default ({ data }) => {
	return (
		<Layout>
			<StyledHero home='true' img={data.defaultBcg.childImageSharp.fluid}>
				<Banner
					motion='left'
					titleTop='Frankie McMillan'
					titleBottom=''
					info='is an award winning poet and flash fiction writer from New Zealand.'
				>
					<AniLink cover to='/books' className='btn-white'>
						explore her books here...
					</AniLink>
				</Banner>
			</StyledHero>
			<FeaturedBook />
			<About />
			<HomepageBooks />
			<AudioInterviews />
		</Layout>
	);
};

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "frankie_backyard.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
