// import React from "react";
// import Helmet from "react-helmet";
// import PostListing from "../components/PostListing/PostListing";
// import config from "../../data/SiteConfig";

// /**
//   <Helmet
//     title={`Posts in category "${category}" | ${config.siteTitle}`}
//   />
//   <PostListing postEdges={postEdges} />
// */
// export default class CategoryTemplate extends React.Component {
//   render() {
//     // const category = this.props.pathContext.category;
//     // const postEdges = this.props.data.allMarkdownRemark.edges;
//     return (
//       <div className="category-container">
//         <h1>Category</h1>
//       </div>
//     );
//   }
// }

// /* eslint no-undef: "off"*/
// export const pageQuery = graphql`
//   query CategoryPage($category: String) {
//     allMarkdownRemark(
//       limit: 1000
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { category: { eq: $category } } }
//     ) {
//       totalCount
//       edges {
//         node {
//           fields {
//             route
//           }
//           excerpt
//           timeToRead
//           frontmatter {
//             title
//             tags
//             cover
//             date
//           }
//         }
//       }
//     }
//   }
// `;
