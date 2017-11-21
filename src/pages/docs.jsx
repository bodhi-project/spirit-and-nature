// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';

// ----------------------------------- Components
import Helmet from "react-helmet";
import { Layout, Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { injectSheet } from '@bodhi-project/utilities';

import SEO from "../components/SEO/SEO";
import PostListing from "../components/PostListing/PostListing";
import config from "../../data/SiteConfig";

// ----------------------------------------------------------------------- Style
/**
  * styles - JSS styles for this component.
  */
const styles = {
  header: {
    padding: '0 21.5px',
    background: '#202020',

    '& ul': {
      'font-family': 'unset',
      'font-style': 'unset',
      'font-weight': 'unset',
      'line-height': 'unset',
      'margin-bottom': 'unset',
      'color': 'unset',
    },

    '& ul li': {
      margin: 0,
      border: 0,
      top: 0,
      display: 'inline-block',
      verticalAlign: 'middle',
    },

    '& ul li a': {
      fontFamily: 'brandon-grotesque, sans-serif',
      // fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: '500',
      color: '#EDF5E1',
      height: '40px',
      lineHeight: '40px',
      margin: '3px 0',
      padding: '4px 10px',
    },

    '& .logo': {
      height: 64,
      width: 192,
      display: 'inline-block',
      position: 'relative',
      float: 'left',
      marginRight: 64.5,

      '& img': {
        width: 192,
        position: 'absolute',
        top: 21.5,
      },
    },
  },
  content: {
    minHeight: 'calc(100vh - 109px)',
    margin: 0,
  },
};


/**
  * Just a little bit of abstraction
  */
const { Header, Footer, Content } = Layout;

// ----------------------------------------------------------------------- Component
/**
  * Index
  */
class Index extends React.Component {
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    console.log(postEdges);
    return (
      <div className="index-container">
        <h1>Hello World!</h1>
        <Helmet title={config.siteTitle} />
        <SEO postEdges={postEdges} />
        <PostListing postEdges={postEdges} />
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// ----------------------------------------------------------------------- GraphQL Query
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___category, frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            category
            title
            tags
            cover
            date
          }
        }
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
  injectSheet(styles), // Add style
])(Index);

// ----------------------------------------------------------------------- Export
export default ComposedComponent;
