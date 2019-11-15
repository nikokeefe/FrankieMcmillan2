import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import BackgroundImage from 'gatsby-background-image';

const getDefaultImage = graphql`
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

const StyledHero = ({ img, className, children, home }) => {
	// set default image
	const data = useStaticQuery(getDefaultImage);

	return (
		<BackgroundImage
			className={className}
			fluid={img || data.defaultBcg.childImageSharp.fluid}
			home={home}
		>
			{children}
		</BackgroundImage>
	);
};

export default styled(StyledHero)`
	min-height: ${props => (props.home ? 'calc(100vh - 62px)' : '50vh')};
	background: ${props =>
		props.home
			? 'linear-gradient(rgba(10, 10, 10, 0.35), rgba(0, 0, 0, 0.7))'
			: 'none'};
	background-position: center;

	background-size: cover;
	background-repeat: no-repeat;
	opacity: 1 !important;
	display: flex;
	justify-content: center;
	align-items: center;
`;
