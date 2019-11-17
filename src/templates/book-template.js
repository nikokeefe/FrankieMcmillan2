import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

import { FaBook } from 'react-icons/fa';

import Layout from '../components/Layout';
import StyledHero from '../components/StyledHero';

import styles from '../css/template.module.css';

const Template = ({ data }) => {
	const {
		title,
		publishedDate,
		content: { childMarkdownRemark },
		featuredImage,
		imageGallery,
	} = data.book;

	const [...bookImages] = imageGallery;

	return (
		<Layout>
			<StyledHero img={featuredImage.fluid} />
			<section className={styles.template}>
				<div className={styles.center}>
					<div className={styles.images}>
						{bookImages.map((item, index) => {
							return (
								<Image
									key={index}
									fluid={item.fluid}
									alt='single book'
									className={styles.image}
								/>
							);
						})}
					</div>
					<h2>{title}</h2>
					<div className={styles.info}>
						{/* <p>
							<FaMoneyBillWave className={styles.icon} />
							some sorta quote or pages or ...
						</p> */}
						<p>
							<FaBook className={styles.icon} />
							published: {publishedDate}
						</p>
						<div className={styles.desc}>
							<div
								dangerouslySetInnerHTML={{
									__html: `${childMarkdownRemark.html}`,
								}}
							></div>
						</div>
					</div>
					<AniLink paintDrip to='/books' className='btn-primary'>
						back to books
					</AniLink>
				</div>
			</section>
		</Layout>
	);
};

export const query = graphql`
	query($slug: String!) {
		book: contentfulBooks(slug: { eq: $slug }) {
			title
			shortDescription
			publishedDate(formatString: "d MMMM, YYYY")
			content {
				childMarkdownRemark {
					html
				}
			}
			featuredImage {
				fluid {
					src
				}
			}
			imageGallery {
				fluid {
					src
				}
			}
		}
	}
`;

export default Template;
