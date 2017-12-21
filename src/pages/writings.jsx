// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import moment from 'moment';
import { Container, Image } from '@bodhi-project/components';
import { NeutralMonoTypeRegularVariant } from '@bodhi-project/typography';
import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
// import logo from './logoWithText.png';
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
/** 
<div className="index-container">
  
  <Helmet title={config.siteTitle} />
  <SEO postEdges={postEdges} />
  <PostListing postEdges={postEdges} />
</div>


<Row type="flex" align="top" justify="center" style={{ marginBottom: type.heading.sizes.first }}>
  <Col span={24}>
    <div style={{ backgroundColor: '#419ae2', minHeight: '35vh', padding: '16px 25px', display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch', color: '#FAFAFA' }}>
      <div style={{ flex: '9 1 0%' }}>
        <Image
          src={featureLion}
          rawWidth={500}
          rawHeight={500}
          loader="gradient"
          style={{ border: 0, background: '#FAFAFA' }}
        />
      </div>

      <div style={{ flex: '15 1 0%', paddingLeft: '25px' }}>
        <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>White Lions</Paragraph>
        <H2>White Lions and Lion Hearted Leadership</H2>
        <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
      </div>
    </div>
  </Col>
</Row>
*/

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

      // console.log(this.state);

      return (
        <Container bleed>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Writings" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <Row type="flex" align="top" justify="center">
            <Col span={22}>
              <Section style={{ borderTop: '4px solid #222222', marginBottom: type.heading.sizes.first * 2 }}>
                <Header>
                  <H2 mask="h5" style={{ margin: `${type.heading.sizes.third * 0.375}px 0px ${type.heading.sizes.third * 0.625}px 0px` }}>Features</H2>
                </Header>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Features #1, #2 and #3 */}
                <Row type="flex" align="top" justify="center" style={{ marginBottom: type.heading.sizes.first }}>
                  <Col span={12} style={{ padding: '0px 10px 0px 0px' }}>
                    <div style={{ backgroundColor: '#F2B880', minHeight: '70vh', padding: '16px 25px', color: '#363636' }}>
                      <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>World Game</Paragraph>
                      <H2>Sandplay and Sandplay Traditions in Auroville</H2>
                      <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
                      <Image
                        src={featureLion}
                        rawWidth={500}
                        rawHeight={500}
                        loader="gradient"
                        style={{ border: 0, background: '#FAFAFA' }}
                      />
                    </div>
                  </Col>

                  <Col span={12} style={{ padding: '0px 0px 0px 10px' }}>
                    <div style={{ borderTop: '1px solid #222222', minHeight: '35vh', marginBottom: '1vh', paddingTop: '16px' }}>
                      <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>Auroville</Paragraph>
                      <H2>Auroville</H2>
                      <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
                      <Image
                        src={featureLion}
                        rawWidth={1000}
                        rawHeight={250}
                        loader="gradient"
                        style={{ border: 0, background: '#FAFAFA' }}
                      />
                    </div>

                    <div style={{ borderTop: '1px solid #222222', minHeight: '34vh', paddingTop: '16px' }}>
                      <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>World Game</Paragraph>
                      <H2>Expressions in World Games</H2>
                      <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
                      <Image
                        src={featureLion}
                        rawWidth={1000}
                        rawHeight={250}
                        loader="gradient"
                        style={{ border: 0, background: '#FAFAFA' }}
                      />
                    </div>
                  </Col>
                </Row>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Feature #4, #5 */}
                <Row type="flex" align="top" justify="center">
                  <Col span={12} style={{ padding: '0px 10px 0px 0px' }}>
                    <div style={{ borderTop: '1px solid #222222', minHeight: '35vh', paddingTop: '16px' }}>
                      <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>White Lions</Paragraph>
                      <H2>One United Roar</H2>
                      <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
                      <Image
                        src={featureLion}
                        rawWidth={1000}
                        rawHeight={250}
                        loader="gradient"
                        style={{ border: 0, background: '#FAFAFA' }}
                      />
                    </div>
                  </Col>

                  <Col span={12} style={{ padding: '0px 0px 0px 10px' }}>
                    <div style={{ backgroundColor: '#F2B880', minHeight: '75vh', padding: '16px 25px' }}>
                      <Paragraph style={{ fontFamily: type.heading.font, fontWeight: type.heading.weights.lower, textTransform: 'uppercase', fontSize: (type.body.fontSize * 0.80), letterSpacing: '0.141ex' }}>Auroville</Paragraph>
                      <H2>Anusuya Forest in Auroville</H2>
                      <Paragraph>Lorem markdownum supplex. Care ferre nos praemia detestatur oderit vitatumque, tardius pello ostentare; dixit. <br /> Read more...</Paragraph>
                      <Image
                        src={featureLion}
                        rawWidth={1000}
                        rawHeight={250}
                        loader="gradient"
                        style={{ border: 0, background: '#FAFAFA' }}
                      />
                    </div>
                  </Col>
                </Row>

              </Section>
            </Col>
          </Row>

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
query WritingsQueryX {
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {ne: "photography"}}}) {
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
