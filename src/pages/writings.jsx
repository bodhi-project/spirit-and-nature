// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
  import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
  import PropTypes from 'prop-types';
  import _ from 'lodash';
  import { css } from 'glamor';
  import moment from 'moment';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
  import Link from 'gatsby-link';
  import { Row, Col, Carousel } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
  import { Image, Container } from '@bodhi-project/components';
  import { Elements, typeComposite } from '@bodhi-project/typography';
  import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';

  import {
    // --------------- Basic
    UpdateTitle,
    // GeneralMeta,
    // // --------------- Twitter
    // TwitterSummaryCard,
    // // --------------- Open Graph
    // OpenGraphSummary,
    // // --------------- Schema.org JSON-LD
    // WebsiteSchema,
    // WebpageSchema,
    // BreadcrumbSchema,
    // OrganisationSchema,
  } from '@bodhi-project/seo';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
  import featureLion from './assets/feature-lion.jpg';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
  const { Fragment } = React;
  const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
  const { getType } = typeComposite;
  const type = getType('eih3wnu');
  const { kit, modularScale } = type;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Article Wrapper Style
  const articleWrapperStyle = css({
    '& article:last-child': {
      border: '0 !important',
    },

    '& .display': {
      display: 'flex',
      flexFlow: 'row wrap',
      alignItems: 'flex-start',

      '& .banner': {
        flex: '12 1 0%',
      },

      '& .abstract': {
        flex: '15 1 0%',
        padding: '0px 0px 0px 50px',
      },
    },
    '@media(max-width: 768px)': {
      '& .display': {
        display: 'block',
        '& .banner': {
          display: 'block',
        },
        '& .abstract': {
          display: 'block',
          padding: '0px',
        },
      },
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
        <Container block noFade bleed style={{ paddingTop: 50 }}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Writings" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          {
            _.map(categories, (category) => (
              <div style={{ marginTop: modularScale.base.em, marginBottom: modularScale.base.em }} className={articleWrapperStyle.toString()} >
                <H2
                  id={_.kebabCase(_.toLower(_.trim(category)))}
                >
                  {category}
                </H2>
                {
                  _.map(postEdges, ({ node }) => (
                    <Fragment>
                      { (node.frontmatter.category === category) &&
                        <Article key={node.fields.route} style={{ paddingBottom: `${modularScale.basePlus2.em}`, paddingTop: `${modularScale.basePlus2.em}` }}> {/*  */}
                          <div className="display">
                            <div className="banner">
                              <Image
                                src={node.frontmatter.cover}
                                rawWidth={1440}
                                rawHeight={900}
                                loader="gradient"
                                style={{ border: 0 }}
                              />
                            </div>
                            <div className="abstract">
                              <Header>
                                <Link to={node.fields.route}><H3 style={{ marginTop: 0, color: '#9d639d' }}>{node.frontmatter.title}</H3></Link> {/*  */}
                                <Paragraph>{node.frontmatter.abstract}</Paragraph>
                                <Paragraph style={{ textIndent: 0 }}><small><i>Published on {moment(node.frontmatter.date).format("dddd, MMMM Do YYYY")} ({moment(node.frontmatter.date).fromNow()})</i></small></Paragraph>
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
          <Paragraph style={{ textAlign: 'center' }}>~ fin ~</Paragraph>
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
  allMarkdownRemark(limit: 2000, sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {category: {ne: "general"}}}) {
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
