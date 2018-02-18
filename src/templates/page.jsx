// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';
import { css } from 'glamor';
// import moment from 'moment';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
// import { Row, Col, Layout, Tree, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import { Container } from '@bodhi-project/components';
import { Elements, typeComposite } from '@bodhi-project/typography';
// import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
import { treeParser } from '@bodhi-project/markdown-to-react';
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
// import featureLion from './feature-lion.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const { Fragment } = React;
const { Paragraph } = Elements;
const { getType } = typeComposite;
const type = getType('eih3wnu');
// const { kit, modularScale } = type;
// console.log(type);

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
const markdownStyles = css({
  '& blockquote': {
    border: '2px solid #daa520',
    background: '#fcf2f1',
    padding: '1em',
    '& p': {
      fontStyle: 'italic',
    },
  },
});
const markdownStylesClass = markdownStyles.toString();

const clearHeadings = css({
  '& h2': {
    display: 'none',
  },
});
const clearHeadingsClass = clearHeadings.toString();

// ----------------------------------------------------------------------- Component
/**
 * PageWrapper
 */
class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { frontmatter } = this.props.data.markdownRemark;
    const { toc } = this.props.pathContext;
    const { markdownAst } = this.props.pathContext;
    const { headings } = this.props.data.markdownRemark;
    const { route } = this.props.pathContext;

    const siteTitle = 'Spirit and Nature';
    const sitePublisher = 'Spirit and Nature';
    const pageTitle = frontmatter.title;
    const { abstract } = frontmatter;
    const websiteUrl = 'https://www.spiritandnature.org';
    const pageSlug = route;
    const ogX = `${websiteUrl}${frontmatter.cover}`;
    const pageKeywords =
      'auroville, spirit and nature, aikya, world game, sandplay, sand box, carl jung, sri aurobindo, the mother, india, pondicherry, tamil nadu';

    const generalMetaData = {
      description: abstract,
      keywords: pageKeywords,
      image: ogX,
    };

    const twitterSummaryCardData = {
      site: siteTitle,
      creator: sitePublisher,
      title: pageTitle,
      description: abstract,
      image: ogX,
    };

    const openGraphSummaryData = {
      siteName: siteTitle,
      url: `${websiteUrl}${pageSlug}`,
      title: pageTitle,
      description: abstract,
      image: ogX,
    };

    const webpageSchemaData = {
      url: `${websiteUrl}${pageSlug}`,
      name: pageTitle,
      description: abstract,
      author: sitePublisher,
      publisher: sitePublisher,
      image: ogX,
    };

    const breadcrumbSchemaData = {
      breadcrumbs: [
        { name: 'Home', url: `${websiteUrl}` },
        { name: pageTitle, url: `${websiteUrl}${pageSlug}` },
      ],
    };

    return (
      <Container
        block
        noFade
        bleed
        style={{ paddingTop: 50 }}
        className={`${markdownStylesClass} ${
          _.includes(['/home', '/gallery'], this.props.location.pathname)
            ? clearHeadingsClass
            : ''
        }`}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Fragment>
          {treeParser(markdownAst, { localLink: Link, indent: -20 }, type)}
        </Fragment>
        <Paragraph style={{ textAlign: 'center' }}>
          <small>~</small>
        </Paragraph>
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
        variant
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------- Export
export default PageWrapper;
