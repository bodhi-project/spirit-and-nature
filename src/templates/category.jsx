import React from "react";
// import Helmet from "react-helmet";
// import PostListing from "../components/PostListing/PostListing";
// import config from "../../data/SiteConfig";

/**
  <Helmet
    title={`Posts in category "${category}" | ${config.siteTitle}`}
  />
  <PostListing postEdges={postEdges} />
*/
export default class CategoryTemplate extends React.Component {
  render() {
    // const category = this.props.pathContext.category;
    // const postEdges = this.props.data.allMarkdownRemark.edges;
    return (
      <div className="category-container">
        <h1>Category</h1>
      </div>
    );
  }
}

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


// import React from "react";
// import Helmet from "react-helmet";
// import UserInfo from "../components/UserInfo/UserInfo";
// import Disqus from "../components/Disqus/Disqus";
// import PostTags from "../components/PostTags/PostTags";
// import SocialLinks from "../components/SocialLinks/SocialLinks";
// import SEO from "../components/SEO/SEO";
// import config from "../../data/SiteConfig";
// import "./b16-tomorrow-dark.css";
// import "./post.css";

// export default class PostTemplate extends React.Component {
//   render() {
//     console.log(this.props);
//     const { route } = this.props.pathContext;
//     const postNode = this.props.data.markdownRemark;
//     const post = postNode.frontmatter;
//     if (!post.id) {
//       post.id = route;
//     }
//     if (!post.id) {
//       post.category_id = config.postDefaultCategoryID;
//     }
//     return (
//       <div>
//         <Helmet>
//           <title>{`${post.title} | ${config.siteTitle}`}</title>
//         </Helmet>
//         <SEO postPath={route} postNode={postNode} postSEO />
//         <div>
//           <h1>
//             {post.title}
//           </h1>
//           <div dangerouslySetInnerHTML={{ __html: postNode.html }} />
//           <div className="post-meta">
//             <PostTags tags={post.tags} />
//             <SocialLinks postPath={route} postNode={postNode} />
//           </div>
//           <UserInfo config={config} />
//           <Disqus postNode={postNode} />
//         </div>
//       </div>
//     );
//   }
// }

