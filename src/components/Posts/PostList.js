import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import PostCard from './PostCard';
import Title from '../Title';

import styles from '../../css/posts.module.css';

const getPosts = graphql`
	query {
		posts: allContentfulPost(sort: { fields: publishedDate, order: DESC }) {
			edges {
				node {
					title
					slug
					publishedDate(formatString: "MMMM Do, YYYY")
					id: contentful_id
					image {
						fluid {
							...GatsbyContentfulFluid
						}
					}
				}
			}
		}
	}
`;

const PostList = () => {
	const { posts } = useStaticQuery(getPosts);

	return (
		<section className={styles.posts}>
			<Title title='recent' subtitle='posts' />
			<div className={styles.center}>
				{posts.edges.map(({ node }) => {
					return <PostCard key={node.id} post={node} />;
				})}
			</div>
		</section>
	);
};

export default PostList;
