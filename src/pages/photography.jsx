// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment';
import { Container, Image, MotionFade } from '@bodhi-project/components';
import { NeutralMonoTypeRegularVariant } from '@bodhi-project/typography';
import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import featureLion from './feature-lion.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Type
const {
  H1,
  H2,
  H3,
  Paragraph,
  Ul,
  typeDefs,
} = NeutralMonoTypeRegularVariant;

const type = typeDefs;
const { Fragment } = React;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Article Wrapper Style
  const articleWrapperStyle = css({
    '& article:last-child': {
      border: '0 !important',
    },
  });

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
  class Index extends React.Component {
    /**
    * constructor - Just a standard constructor.
    */
    constructor(props) {
      super(props);

      /**
        * state - Track the interface configuration and the height of the component.
        */
      this.state = {
        filter: 'all',
      };

      this.filter = this.filter.bind(this);
    }

    /**
      * openLightbox - Standard renderer.
      */
    filter(e, category) {
      e.preventDefault();
      e.stopPropagation();
      this.setState({ filter: category });
    }

    render() {
      const postEdges = this.props.data.allMarkdownRemark.edges;
      const categories = _.uniq(_.map(postEdges, 'node.frontmatter.category')).sort((a, b) => {
        const A=a.toLowerCase();
        const B=b.toLowerCase();
        // sort string ascending
        if (A < B)
          return -1;
        if (A > B)
          return 1;
        // default return value (no sorting)
        return 0;
      });

      return (
        <Container bleed>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Writings" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <Page>
            <Row type="flex" align="top" justify="center">
              <Col span={15}>
                {
                  _.map(categories, (category) => (
                    <div style={{ marginTop: (type.basePointSize * 1.25), marginBottom: (type.basePointSize * 1.25) }} className={articleWrapperStyle.toString()} >
                      <H3 style={{ borderTop: '4px solid #222222' }}>{_.capitalize(category)}</H3>
                      {
                        _.map(postEdges, ({ node }) => (
                          <Fragment>
                            { (node.frontmatter.category === category) &&
                              <Article key={node.fields.route} style={{ borderBottom: '1px solid #222222', paddingBottom: `${type.heading.sizes.third * 0.625}px`, paddingTop: `${type.heading.sizes.third * 0.375}px` }}>
                                <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch' }}>
                                  <div style={{ flex: '8 1 0%' }}>
                                    <Image
                                      src={node.frontmatter.cover}
                                      rawWidth={1440}
                                      rawHeight={900}
                                      loader="gradient"
                                      style={{ }}
                                    />
                                  </div>
                                  <div style={{ flex: '14 1 0%', padding: '0px 0px 0px 10px' }}>
                                    <Header>
                                      <Link to={node.fields.route}><H2 mask="h5" style={{ margin: `0px 0px ${type.heading.sizes.third * 0.625}px 0px` }}>{node.frontmatter.title}</H2></Link>
                                      <Paragraph>{node.frontmatter.abstract}</Paragraph>
                                      <Paragraph style={{ textIndent: 0 }}>Published on {moment(node.frontmatter.date).format("dddd, MMMM Do YYYY")} ({moment(node.frontmatter.date).fromNow()})</Paragraph>
                                    </Header>
                                  </div>
                                </div>
                              </Article>
                            }
                          </Fragment>
                        ))
                      }
                    </div>
                  ))
                }
                <Paragraph style={{ textAlign: 'center', fontSize: type.body.fontSize * 0.625, color: '#676767', margin: `${type.body.fontSize * 0.625}px 0px` }}>~ fin ~</Paragraph>
              </Col>
            </Row>
          </Page>
        </Container>
      );
    }
  }

  Index.propTypes = {
    classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

// ----------------------------------------------------------------------- GraphQL Query
/* eslint-disable no-undef */
export const pageQuery = graphql`
query PhotographyQueryX {
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {eq: "photography"}}}) {
    edges {
      node {
        fields {
          route
        }
        frontmatter {
          abstract
          title
          cover
          date
          category
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
// const ComposedComponent = compose([

// ])(Index);

// ----------------------------------------------------------------------- Export
export default Index;
