const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;

	const { data } = await graphql(`
		query {
			books: allContentfulBooks {
				edges {
					node {
						slug
					}
				}
			}
			reviews: allContentfulReviews {
				edges {
					node {
						slug
					}
				}
			}
		}
	`);

	data.books.edges.forEach(({ node }) => {
		createPage({
			path: `books/${node.slug}`,
			component: path.resolve('./src/templates/book-template.js'),
			context: {
				slug: node.slug,
			},
		});
	});

	data.reviews.edges.forEach(({ node }) => {
		createPage({
			path: `reviews/${node.slug}`,
			component: path.resolve('./src/templates/review-template.js'),
			context: {
				slug: node.slug,
			},
		});
	});
};
