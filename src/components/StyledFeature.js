import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const getDefaultFeaturedImage = graphql`
	query {
		featured: file(relativePath: { eq: "defaultFeatured.jpg" }) {
			childImageSharp {
				fluid(quality: 90, maxWidth: 4160) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;

const StyledFeature = ({ img, className, children, home }) => {
	// set default image
	const data = useStaticQuery(getDefaultFeaturedImage);

	return (
		<BackgroundImage
			className={className}
			fluid={img || data.featured.childImageSharp.fluid}
			home={home}
		>
			{children}
		</BackgroundImage>
	);
};

export default styled(StyledFeature)`
	min-height: 60vh;

	background-position: right;
	background-size: cover;
	background-repeat: no-repeat;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`;
