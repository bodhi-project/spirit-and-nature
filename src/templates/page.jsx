// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _, { compose } from 'lodash';
// import classNames from 'classnames';

// ----------------------------------- Components
import moment from 'moment';
import Link from 'gatsby-link';
import { Row, Col, Layout, Tree, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { css } from 'glamor';
import { Image, Container } from '@bodhi-project/components';
import { InitializeMeta, UpdateTitle } from '@bodhi-project/seo';
import { FirstVariationOnModernType } from '@bodhi-project/typography';
import { Header as SemanticHeader, Footer as SemanticFooter } from '@bodhi-project/semantic-webflow';

/**
  * Just a little bit of abstraction
  */
const { Fragment } = React;
const { TreeNode } = Tree;

// ----------------------------------------------------------------------- Type
const {
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  SmallCaps,
  typeDefs,
} = FirstVariationOnModernType;

const type = typeDefs;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Style for Markdown ---> React
  const markdownStyles = css({
    '& h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child': {
      marginTop: '0 !important',
    },
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles for stuff on the side
  const sideStyles = css({
    '& .ant-tree li': {
      marginBottom: '0px !important',
    },
    '& .ant-tree.ant-tree-show-line li:not(:last-child):before': {
      borderLeftColor: '#363636 !important',
    },
    '& .ant-tree-node-content-wrapper': {
      marginBottom: `${(type.basePointSize * 0.375)}px !important`,
    },
    '& .ant-tree.ant-tree-show-line li span.ant-tree-switcher': {
      color: '#363636 !important',
      background: '#ddd5c8 !important',
    },
    '& .ant-tree-title': {
      fontSize: type.body.fontSize,
      fontFamily: type.body.font,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: type.baseLineSpacing,
      marginBottom: 0,
      marginTop: 0,
      color: 'inherit',
    },
  });

// ----------------------------------------------------------------------- Tree Parser
  const parseHeading = (astElement, headings) => {
    switch(astElement.depth) {
      case 1:
        return <H2 mask="h3" key={`${headings.first}`}>{astElement.children[0].value}</H2>
      case 2:
        return <H3 mask="h4" key={`${headings.first}.${headings.second}`}>{astElement.children[0].value}</H3>
      case 3:
        return <H4 mask="h5" key={`${headings.first}.${headings.second}.${headings.third}`}>{astElement.children[0].value}</H4>
      case 4:
        return <H5 mask="h6" key={`${headings.first}.${headings.second}.${headings.third}.${headings.fourth}`}>{astElement.children[0].value}</H5>
      case 5:
        return <H6 key={`${headings.first}.${headings.second}.${headings.third}.${headings.fourth}.${headings.fifth}`}>{astElement.children[0].value}</H6>
      default:
        return <Fragment />
    }
  };

  const trackHeadings = (astElement, headings) => {
    switch(astElement.depth) {
      case 1:
        return {...headings, ...{first: headings.first + 1 }};
      case 2:
        return {...headings, ...{second: headings.second + 1 }};
      case 3:
        return {...headings, ...{third: headings.third + 1 }};
      case 4:
        return {...headings, ...{fourth: headings.fourth + 1 }};
      case 5:
        return {...headings, ...{fifth: headings.fifth + 1 }};
      default:
        return {...headings};
    }
  };

  const treeParser = markdownAst => {
    const frontMatterIndex = (_.findIndex(_.slice(markdownAst.children, 1), (child) => (child.type === 'thematicBreak')) + 2);
    const splicedAst = _.slice(markdownAst.children, frontMatterIndex);
    let headings = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    return (
      <Fragment>
        {
          splicedAst.map((element, index) => {
            // console.log(element);
            switch(element.type) {
              case 'paragraph':
                return <Paragraph>{element.children[0].value}</Paragraph>
              case 'heading':
                headings = trackHeadings(element, headings);
                return parseHeading(element, headings)
              default:
                return <Fragment />
            }
          })
        }
      </Fragment>
    );
  }

  const makeToc = (headings, startingDepth, parentLevel = null) => {
    const node = [];
    let parentNode = 0;
    let skip = 0;
    let limit = 0;
    let level = null;
    _.forEach(headings, (heading, index) => {
      if (heading.depth === startingDepth) { // Add leaf
        level = parentLevel ? `${parentLevel}.${node.length + 1}` : `${node.length + 1}`;
        node.push({...heading, children: [], level });
        parentNode = node.length - 1;
      } else { // Add child/ren node/s to preceeding node
        if (skip === 0 && index !== (headings.length - 1)) {
          skip = (_.findIndex(_.slice(headings, index), headingX =>  headingX.depth === startingDepth)) - 1;
          if (skip === -2) { // Adjust if there are no futher indexes -- this means we have reached the end
            skip = (headings.length - index) - 1;
          }
          limit = skip + 1;
          node[parentNode].children = makeToc(_.slice(headings, index, (index + limit)), heading.depth, level);
        } else {
          skip-=1;
        }
      }
    });

    return node;
  }

  const renderToc = (toc) => {
    const renderTreeNodes = data => {
      return data.map((item) => {
        if (item.children.length > 0) {
          return (
            <TreeNode title={item.value} key={item.level} dataRef={item}>
              {renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode title={item.value} key={item.level} />;
      });
    }

    return (
      <Tree showLine defaultExpandAll>
        {renderTreeNodes(toc)}
      </Tree>
    );
  }

// ----------------------------------------------------------------------- Component
/**
  * PageWrapper
  */
class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    const { frontmatter } = this.props.data.markdownRemark;
    const { markdownAst } = this.props.pathContext;
    const { headings } = this.props.data.markdownRemark;
    let toc = makeToc(headings, headings[0].depth);

    return (
      <Container bleed>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={frontmatter.title} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Row type="flex" justify="space-around">
          <Col span={12} className={markdownStyles.toString()}>
            <H2>{frontmatter.title}</H2>
            <Image
              src={frontmatter.cover}
              rawWidth={1440}
              rawHeight={900}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0, background: 'transparent', marginBottom: type.heading.sizes.second }}
            />
            <Paragraph>{frontmatter.abstract}</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Published on: {moment(frontmatter.date).format("dddd, MMMM Do YYYY")} ({moment(frontmatter.date).fromNow()})</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Categorised as: <Link to="#">{_.capitalize(frontmatter.category)}</Link></Paragraph>
            <br /><br />
            <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
            <br /><br />
          </Col>
          <Col span={6} className={sideStyles.toString()}>
            &nbsp;
          </Col>
        </Row>
        <Row type="flex" justify="space-around">
          <Col span={12} className={markdownStyles.toString()}>
            {
              treeParser(markdownAst)
            }
            <br /><br />
            <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
            <br /><br />
          </Col>
          <Col span={6} className={sideStyles.toString()}>
            <hr style={{ width: '23.4%', marginRight: '76.6%', borderTop: '4px solid #363636' }} />
            <SmallCaps style={{ marginTop: 0, marginBottom: (type.basePointSize * 0.625) }}>On this page</SmallCaps>
            {
              renderToc(toc)
            }            
            <br /><br />
            <hr style={{ width: '23.4%', marginRight: '76.6%', borderTop: '4px solid #363636', borderColor: '#363636' }} />
            <SmallCaps style={{ marginTop: 0, marginBottom: (type.basePointSize * 0.625) }}>Further Links</SmallCaps>
          </Col>
        </Row>
      </Container>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
  type: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
};

// ----------------------------------------------------------------------- GraphQL Query
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostBySlug($route: String!) {
    markdownRemark(fields: { route: { eq: $route } }) {
      headings {
        depth
        value
      }
      frontmatter {
        title
        cover
        date
        category
        tags
        abstract
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------- Compose Component
/**
  * ComposedComponent - Compose component ala FP style.
  */
const ComposedComponent = compose([
  // injectType, // Add typographic information
])(PageWrapper);

// ----------------------------------------------------------------------- Export
export default ComposedComponent;

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

