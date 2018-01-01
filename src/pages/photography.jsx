// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
  import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
  import PropTypes from 'prop-types';
  // import _ from 'lodash';
  import { css } from 'glamor';
  import moment from 'moment';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
  import Link from 'gatsby-link';
  import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
  import { Container, Image } from '@bodhi-project/components';
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
  // import featureLion from './feature-lion.jpg';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
  const { Fragment } = React;
  const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
  const { getType } = typeComposite;
  const type = getType('eih3wnu');
  const { kit, modularScale } = type;

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
        <Container block noFade bleed style={{ paddingTop: 50 }}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Photography" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          {
            _.map(categories, (category) => (
              <div style={{ marginTop: modularScale.base.em, marginBottom: modularScale.base.em }} className={articleWrapperStyle.toString()} >
                <H2 style={{ borderTop: '4px solid #222222' }}>{_.capitalize(category)}</H2>
                {
                  _.map(postEdges, ({ node }) => (
                    <Fragment>
                      { (node.frontmatter.category === category) &&
                        <Article key={node.fields.route} style={{ paddingBottom: `${modularScale.basePlus2.em}`, paddingTop: `${modularScale.basePlus2.em}` }}> {/*  */}
                          <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'stretch' }}>
                            <div style={{ flex: '7.5 1 0%' }}>
                              <Image
                                src={node.frontmatter.cover}
                                rawWidth={1440}
                                rawHeight={900}
                                loader="gradient"
                                style={{ }}
                              />
                            </div>
                            <div style={{ flex: '12.5 1 0%', padding: '0px 0px 0px 10px' }}>
                              <Header>
                                <Link to={node.fields.route}><H3>{node.frontmatter.title}</H3></Link> {/*  */}
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
          <Paragraph>~ fin ~</Paragraph>
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