import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';
import About from '../components/About/About';

const about = ({ data }) => {
	return (
		<Layout>
			<div className=''>
				<StyledHero img={data.defaultBcg.childImageSharp.fluid} />
				<About />
			</div>
		</Layout>
	);
};

export const query = graphql`
	query {
		defaultBcg: file(relativePath: { eq: "frankie_armchair.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

export default about;
