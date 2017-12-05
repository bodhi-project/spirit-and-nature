// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
// import classNames from 'classnames';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';
import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { Container, Image } from '@bodhi-project/components';
// import { injectSheet } from '@bodhi-project/utilities';
import { FirstVariationOnModernType } from '@bodhi-project/typography';
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
} = FirstVariationOnModernType;

const type = typeDefs;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
/** 
<div className="index-container">
  
  <Helmet title={config.siteTitle} />
  <SEO postEdges={postEdges} />
  <PostListing postEdges={postEdges} />
</div>
*/

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
  class Index extends React.Component {
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
          <Row type="flex" align="top" justify="center">
            <Col span={22}>
              <Section style={{ borderTop: '4px solid #222222', marginBottom: type.heading.sizes.first * 2 }}>
                <Header>
                  <H2 mask="h5" style={{ margin: `${type.heading.sizes.third * 0.375}px 0px ${type.heading.sizes.third * 0.625}px 0px` }}>Features</H2>
                </Header>

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Features #1, #2 and #3 */}
                <Row type="flex" align="top" justify="center" style={{ marginBottom: type.heading.sizes.first }}>
                  <Col span={12} style={{ padding: '0px 10px 0px 0px' }}>
                    <div style={{ backgroundColor: '#7063d6', minHeight: '100vh', padding: '16px 25px', color: '#FAFAFA' }}>
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
                    <div style={{ borderTop: '1px solid #222222', minHeight: '49vh', marginBottom: '1vh', paddingTop: '16px' }}>
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

                    <div style={{ borderTop: '1px solid #222222', minHeight: '50vh', paddingTop: '16px' }}>
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

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Feature #4 */}
                <Row type="flex" align="top" justify="center" style={{ marginBottom: type.heading.sizes.first }}>
                  <Col span={24}>
                    <div style={{ backgroundColor: '#419ae2', minHeight: '50vh', padding: '16px 25px', display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch', color: '#FAFAFA' }}>
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

                {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Feature #5 and #6 */}
                <Row type="flex" align="top" justify="center">
                  <Col span={12} style={{ padding: '0px 10px 0px 0px' }}>
                    <div style={{ borderTop: '1px solid #222222', minHeight: '75vh', paddingTop: '16px' }}>
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
                    <div style={{ backgroundColor: '#85d8b7', minHeight: '75vh', padding: '16px 25px' }}>
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

            <Col span={1}>
              &nbsp;
            </Col>

            <Col span={5}>
              <aside style={{ borderTop: '4px solid #222222'}}>
                <H2 mask="h5" style={{ margin: `${type.heading.sizes.third * 0.375}px 0px ${type.heading.sizes.third * 0.625}px 0px` }}>All Writings</H2>
                <Paragraph style={{ marginBottom: type.heading.sizes.third }} >Writings on the wall...</Paragraph>
                <H3 mask="h6" style={{ textTransform: 'uppercase', fontSize: (type.heading.sizes.sixth * 0.625), letterSpacing: '0.141ex', margin: '0px 0px 12px 0px' }}>All Categories</H3>
                <Ul style={{ listStyle: 'none' }}>
                  {categories.map(category => (
                    <li style={{ borderTop: '1px solid #222222', padding: '13px 0px 10px 0px', margin: 0, textTransform: 'capitalize' }}>{category}</li>
                  ))}
                </Ul>
              </aside>
            </Col>

            <Col span={2}>
              &nbsp;
            </Col>

            <Col span={15}>
              <Page>
                <Section>
                  <Header style={{ borderTop: '4px solid #222222'}}>
                    <H1 mask="h4" className="stash">All Writings</H1>
                    <Paragraph className="stash">Writings on the wall...</Paragraph>
                  </Header>

                  {postEdges.map(({node}, index) => (
                    <Article key={node.fields.route} style={{ borderBottom: '1px solid #222222', paddingBottom: `${type.heading.sizes.third * 0.625}px`, paddingTop: `${type.heading.sizes.third * 0.375}px` }}>
                      <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch' }}>
                        <div style={{ flex: '2 1 0%' }}>
                          <Paragraph style={{ textAlign: 'center', fontSize: type.body.fontSize * 1.375 }}>{`${('0' + (index + 1)).slice(-2)}`}</Paragraph>
                        </div>
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
                            <H2 mask="h5" style={{ margin: `0px 0px ${type.heading.sizes.third * 0.625}px 0px` }}>{node.frontmatter.title}</H2>
                            <Paragraph>{node.frontmatter.abstract}</Paragraph>
                          </Header>
                        </div>
                      </div>
                    </Article>
                  ))}
                </Section>
                <Paragraph style={{ textAlign: 'center', fontSize: type.body.fontSize * 0.625, color: '#676767', margin: `${type.body.fontSize * 0.625}px 0px` }}>~ fin ~</Paragraph>
              </Page>
            </Col>

            <Col span={1}>
              &nbsp;
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
  query IndexQueryX {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: ASC }
    ) {
      edges {
        node {
          fields {
            route
          }
          timeToRead
          frontmatter {
            abstract
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
// const ComposedComponent = compose([

// ])(Index);

// ----------------------------------------------------------------------- Export
export default Index;
