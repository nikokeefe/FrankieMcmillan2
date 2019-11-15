import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import Book from '../Books/Book';
import Title from '../../components/Title';
import StyledFeature from '../../components/StyledFeature';
import Banner from '../Banner';

import styles from '../../css/featured.module.css';

const getFeaturedBooks = graphql`
	query {
		featuredBook: allContentfulBooks(filter: { featured: { eq: true } }) {
			edges {
				node {
					contentful_id
					title
					shortDescription
					slug
					featuredImage {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`;

const FeaturedBooks = () => {
	const response = useStaticQuery(getFeaturedBooks);
	const featuredBook = response.featuredBook.edges;
	const image = featuredBook[0].node.featuredImage.fluid;

	return (
		<section className={styles.books}>
			<Title title='Her Latest' subtitle='Publication' />
			<div className={styles.center}>
				{featuredBook.map(({ node }) => {
					return;
				})}
			</div>

			<AniLink
				fade
				to='/books/the-father-of-octopus-wrestling-and-other-short-fictions'
				className=''
			>
				<div className={styles.grid}>
					<StyledFeature img={image} home={true}></StyledFeature>
					<div className={styles.gridBanner}>
						<Banner
							motion='right'
							titleTop='‘Every story is like a sky rocket we haven’t seen before – flaring and sparkling in unexpected ways.’ '
							titleBottom=''
							info='Lloyd Jones.'
						></Banner>
					</div>
				</div>
			</AniLink>
		</section>
	);
};

export default FeaturedBooks;
