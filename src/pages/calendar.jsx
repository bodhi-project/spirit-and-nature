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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/blocks
import SectionPhoebe from "@bodhi-project/blocks/lib/SectionPhoebe";
import SectionHalleyAlt from "@bodhi-project/blocks/lib/SectionHalleyAlt";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import inArray from "../helpers/inArray";
import seoHelper from "../helpers/seoHelper";

import sncAdults from "../assets/sncAdults.png";
import sncChildren from "../assets/sncChildren.png";
import wgAdults from "../assets/wgAdults.png";
import wgChildren from "../assets/wgChildren.png";

import start from "../assets/start.png";
import middle from "../assets/middle.png";
import end from "../assets/end.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Calendar",
  nakedPageSlug: "calendar",
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
        startDate: node.fields.startDate,
        finishDate: node.fields.finishDate,
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
        sncAdults,
        sncChildren,
        wgAdults,
        wgChildren,
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
          <div style={{ display: "flex" }}>
            <div style={{ flexGrow: "62", flexBasis: 0 }}>
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
            </div>
            <div style={{ flexGrow: "38", flexBasis: 0, paddingLeft: 40 }}>
              <h3>Regular Activities</h3>
              <p>
                Spirit and Nature offers regular activities for children, adults
                and guests…
              </p>
              <ul className="mask-p" style={{ paddingLeft: 0 }}>
                <li>
                  World Game in Sand for only TLC students every Tuesday and
                  Wednesday from 9:00 AM to 12:00 PM.
                </li>
                <li>
                  Spirit and Nature Connections for only TLC students every
                  Thursday from 1:15 PM to 4:15 PM.
                </li>
                <li>
                  World Game in Sand for all every Friday from 3:00 PM to 4:30
                  PM.
                </li>
                <li>
                  Spirit and Nature Connections for all every Sunday from 10:00
                  AM to 12:00 PM.
                </li>
              </ul>
              <h3>Intensives</h3>
              <p>
                Spirit and Nature also offers intensives. The intensives are
                meant for small groups of 3-12 people. To find out more about an
                intensive click in the list below…
              </p>
              <ul className="mask-p" style={{ paddingLeft: 0 }}>
                <li>Celebrating Connection With Nature</li>
                <li>Follow your Pawprint</li>
                <li>Vision Game</li>
                <li>Flowers & Their Messages</li>
                <li>Introduction Into The Spiritual Dimension of Auroville</li>
                <li>Speaking With Nature</li>
              </ul>
              <p>
                These intensives are announced and also available on request. To
                request an intensive please contact me.
              </p>
            </div>
          </div>
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
  query CalendarQuery {
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
            startDate
            finishDate
          }
          frontmatter {
            abstract
            title
            subTitle
            cover
            date
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
