// ----------------------------------------------------------------------- Imports
const path = require('path');
// const _ = require('lodash');
// var unified = require('unified');
// var markdown = require('remark-parse');
// const webpackLodashPlugin = require("lodash-webpack-plugin");

// console.log(unified().use(markdown).parse(testMd));

// ----------------------------------------------------------------------- Create Nodes
exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;
  let route;
  // Where will createPages attach the component? ...
  // Get raw markdown ...
  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const parsedFilePath = path.parse(fileNode.relativePath);
    route = `/${parsedFilePath.dir}/${parsedFilePath.name}`;
    createNodeField({ node, name: 'route', value: route }); // ...createPages will attach the component at this route
    // console.log(node.internal.content);
  }
};

// ----------------------------------------------------------------------- Create Pages
exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const postPage = path.resolve("src/templates/post.jsx");
    const tagPage = path.resolve("src/templates/tag.jsx");
    const categoryPage = path.resolve("src/templates/category.jsx");
    resolve(
      graphql(
        `
        {
          allMarkdownRemark {
            edges {
              node {
                frontmatter {
                  tags
                  category
                }
                fields {
                  route
                }
              }
            }
          }
        }
      `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors); // eslint-disable-line no-console
          reject(result.errors);
        }

        // // Create a set each for tag and category pages
        // const tagSet = new Set();
        // const categorySet = new Set();

        // Loop through markdown nodes
        result.data.allMarkdownRemark.edges.forEach(edge => {

          // Creates a page
          createPage({
            path: edge.node.fields.route,
            component: postPage,
            context: {
              route: edge.node.fields.route,
            },
          });

          // // Add the tag to the set for later
          // if (edge.node.frontmatter.tags) {
          //   edge.node.frontmatter.tags.forEach(tag => {
          //     tagSet.add(tag);
          //   });
          // }

          // // Add the cateogry to the set for later
          // if (edge.node.frontmatter.category) {
          //   categorySet.add(edge.node.frontmatter.category);
          // }
        });

        // const tagList = Array.from(tagSet);
        // tagList.forEach(tag => {
        //   createPage({
        //     path: `/tags/${_.kebabCase(tag)}/`,
        //     component: tagPage,
        //     context: {
        //       tag
        //     }
        //   });
        // });

        // const categoryList = Array.from(categorySet);
        // categoryList.forEach(category => {
        //   createPage({
        //     path: `/categories/${_.kebabCase(category)}/`,
        //     component: categoryPage,
        //     context: {
        //       category
        //     }
        //   });
        // });
      })
    );
  });
};

// exports.modifyWebpackConfig = ({ config, stage }) => {
//   if (stage === "build-javascript") {
//     config.plugin("Lodash", webpackLodashPlugin, [{'caching': true, 'collections': true}]);
//   }
// };
