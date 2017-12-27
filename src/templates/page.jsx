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
  // import { Row, Col, Layout, Tree, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
  import { Image, Container } from '@bodhi-project/components';
  import { Elements, typeComposite } from '@bodhi-project/typography';
  // import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
  import { treeParser } from '@bodhi-project/markdown-to-react';
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
  // console.log(type);

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
      marginBottom: `${(modularScale.base.px * 0.375) / 16}em !important`,
    },
    '& .ant-tree.ant-tree-show-line li span.ant-tree-switcher': {
      color: '#363636 !important',
      background: '#fff6ec !important',
    },
    '& .ant-tree-title': {
      fontSize: modularScale.base.em,
      fontFamily: kit.fontFamilies.paragraph,
      fontStyle: 'normal',
      fontWeight: '400',
      marginBottom: 0,
      marginTop: 0,
      color: 'inherit',
    },
  });

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
    const { markdownAst } = this.props.pathContext;

    return (
      <Container block noFade bleed style={{ paddingTop: 50 }}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={frontmatter.title} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        { (frontmatter.variant !== "gallery" && frontmatter.variant !== "page") &&
          <Fragment>
            <H2>{frontmatter.title}</H2>
            <Image
              src={frontmatter.cover}
              rawWidth={1600}
              rawHeight={1000}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0, background: 'transparent', marginBottom: modularScale.base.px }}
            />
            <Paragraph>{frontmatter.abstract}</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Published on: {moment(frontmatter.date).format("dddd, MMMM Do YYYY")} ({moment(frontmatter.date).fromNow()})</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Categorised as: <i>{_.capitalize(frontmatter.category)}</i></Paragraph>
            <br /><br />
            <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
            <br /><br />
          </Fragment>
        }
        <Fragment>
          {
            treeParser(markdownAst, { localLink: Link })
          }
          <br /><br />
          <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
          <br /><br />
        </Fragment>
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
