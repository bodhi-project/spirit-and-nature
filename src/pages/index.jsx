// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import join from "lodash/join";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link, { withPrefix } from "gatsby-link";
import withSizes from "react-sizes";
import FacebookProvider, { Page as FBPage } from "react-facebook";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Images from "@bodhi-project/components/lib/Images";
import Container from "@bodhi-project/components/lib/Container";

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
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Row from "antd/lib/row";
import "antd/lib/row/style/css";

import Col from "antd/lib/col";
import "antd/lib/col/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import SectionPhoebe from "@bodhi-project/blocks/lib/SectionPhoebe";
import SectionHalleyAlt from "@bodhi-project/blocks/lib/SectionHalleyAlt";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import inArray from "../helpers/inArray";
import seoHelper from "../helpers/seoHelper";

import snc from "../assets/snc.png";
import wg from "../assets/wg.png";

import start from "../assets/start.png";
import middle from "../assets/middle.png";
import end from "../assets/end.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const photos = [
  {
    src: "/content-assets/about/about12_600X900.jpg",
    width: 600,
    height: 900,
  },
  {
    src: "/content-assets/about/home.jpg",
    width: 900,
    height: 900,
  },
];

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Spirit and Nature",
  nakedPageSlug: "",
  pageAbstract:
    "Spirit and Nature is dedicated to Spirit and Nature — Nature as a teacher of the multiplicity of creative expressions of Spirit.",
};

const seoData = seoHelper(pageData);

const {
  pageTitle,
  generalMetaData,
  twitterSummaryCardData,
  openGraphSummaryData,
  webpageSchemaData,
  breadcrumbSchemaData,
} = seoData;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const wrapperStyle = css({
  "& section": {
    padding: 0,
  },
});
const wrapperStyleClass = wrapperStyle.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Index page */
class Index extends React.Component {
  /**
   * constructor - Just a standard constructor.
   */
  constructor(props) {
    super(props);
  }

  /** default renderer */
  render() {
    const { isMobile } = this.props;
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const events = [];

    map(postEdges, ({ node }) => {
      // Make banner
      let eventBanner = null;
      if (node.frontmatter.cover === "fallback") {
        const coverHint = join(node.frontmatter.tags, "-");
        eventBanner = withPrefix(
          `/content-assets/event-fallbacks/${coverHint}.jpg`,
        );
      } else {
        eventBanner = withPrefix(node.frontmatter.cover);
      }

      events.push({
        route: node.fields.route,
        humanDate: node.fields.humanDate,
        elapsed: node.fields.elapsed,
        beginDateInt: node.fields.beginDateInt,
        diff: node.fields.diff,
        abstract: inArray(node.frontmatter.tags, "practice-group")
          ? null
          : node.frontmatter.abstract,
        title: node.frontmatter.title,
        subTitle: node.frontmatter.subTitle,
        cover: eventBanner,
        date: node.frontmatter.date,
        startDate: node.frontmatter.startDate,
        finishDate: node.frontmatter.finishDate,
        fromTime: node.frontmatter.fromTime,
        toTime: node.frontmatter.toTime,
        category: node.frontmatter.category,
        tags: node.frontmatter.tags,
        type: node.frontmatter.type,
      });
    });

    const phoebeData = {
      events,
      components: {
        localLink: Link,
      },
      conf: {
        multiDay: {
          start,
          middle,
          end,
        },
      },
      tagMap: {
        snc,
        wg,
      },
    };

    const altHalleyData = {
      cards: events,
      components: {
        localLink: Link,
      },
      show: 4,
    };

    return (
      <Fragment>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={pageTitle} />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        <Container block noFade bleed className={wrapperStyleClass}>
          <Images photos={photos} loader="gradient" />
          <br />
          <p>
            <Link to="/about">Read on…</Link>
          </p>
          <br />
          <br />
          <Row gutter={6}>
            <Col md={15}>
              <h3>Our Schedule</h3>
              {!isMobile ? (
                <div className="mask-p">
                  <SectionPhoebe data={phoebeData} />
                </div>
              ) : (
                <div className="mask-p">
                  <SectionHalleyAlt
                    data={altHalleyData}
                    style={{ padding: 0 }}
                  />
                </div>
              )}
            </Col>
            <Col md={9}>
              {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
              <h3>Find us on Facebook</h3>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/SpiritandNature.auroville"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query FeaturedEventsQuery {
    allMarkdownRemark(
      limit: 365
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { type: { eq: "event" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
            beginDateInt
            diff
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
            startDate
            finishDate
            fromTime
            toTime
            category
            tags
            type
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

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(Index);
