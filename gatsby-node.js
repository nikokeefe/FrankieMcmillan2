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
      posts: allContentfulPost {
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

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug}`,
      component: path.resolve('./src/templates/blog-template.js'),
      context: {
        slug: node.slug,
      },
    });
  });

  // number of posts
  const posts = data.posts.edges;

  // posts per page
  const postsPerPage = 2;

  // how many pages
  const numPages = Math.ceil(posts.length / postsPerPage);

  Array.from({ length: numPages }).forEach((_, index) => {
    createPage({
      path: index === 0 ? `/blogs` : `/blogs/${index + 1}`,
      component: path.resolve('./src/templates/blog-list-template.js'),
      context: {
        limit: postsPerPage,
        skip: index * postsPerPage,
        numPages,
        currentPage: index + 1,
      },
    });
  });
};
