// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import map from "lodash/map";
import pickBy from "lodash/pickBy";
import indexOf from "lodash/indexOf";
import slice from "lodash/slice";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import withSizes from "react-sizes";
import FacebookProvider, { Page as FBPage } from "react-facebook";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Image from "@bodhi-project/components/lib/Image";
import Images from "@bodhi-project/components/lib/Images";
import Container from "@bodhi-project/components/lib/Container";
import TetraGridX from "@bodhi-project/components/lib/TetraGrid";

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import seoHelper from "../helpers/seoHelper";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;
const { TetraGrid, Hex } = TetraGridX;

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

const tetraGrid = css({
  "& .hex": {
    padding: "0px",
    paddingBottom: "5vh",
    paddingRight: "5vh",
  },
});

const tetraGridClass = tetraGrid.toString();

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

    const featured = pickBy(
      postEdges,
      ({ node }) =>
        indexOf(node.frontmatter.tags, "featured") >= 0 &&
        node.frontmatter.type === "post"
    );

    const latest = [];
    map(postEdges, ({ node }) => {
      if (
        indexOf(node.frontmatter.tags, "featured") < 0 &&
        node.frontmatter.type === "post"
      ) {
        latest.push({ node });
      }
    });
    const topLatest = slice(latest, 0, 3);

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
            <span style={{ fontSize: "125%" }}>
              <Link to="/writings/about">Read more about our initiative…</Link>
            </span>
          </p>
          <br />
          <br />
          <Row gutter={6}>
            <Col md={15}>
              <h3>Latest Updates</h3>
              {map(topLatest, ({ node }) => (
                <div key={node.fields.route} style={{ marginBottom: 50 }}>
                  <Link to={node.fields.route}>
                    <Image
                      src={node.frontmatter.cover}
                      rawWidth={1440}
                      rawHeight={900}
                      style={{
                        border: 0,
                        width: "auto",
                        height: 275,
                        background: "transparent",
                        justifyContent: "left",
                      }}
                    />
                    <h3 className="mask-p" style={{ marginTop: 0 }}>
                      {node.frontmatter.title},&nbsp;
                      {moment(node.frontmatter.date).fromNow()}
                    </h3>
                    <p>{node.frontmatter.abstract}</p>
                  </Link>
                </div>
              ))}
            </Col>
            <Col md={9}>
              <h3>Find us on Facebook</h3>
              <FacebookProvider appId="218604115574634">
                <FBPage
                  href="https://www.facebook.com/SpiritandNature.auroville"
                  tabs="timeline,events,messages"
                />
              </FacebookProvider>
              <h3>Find us on Instagram</h3>
              <Link to="https://www.instagram.com/spiritandnatureauroville/">
                Aikya Spirit and Nature
              </Link>
            </Col>
          </Row>
          <br />
          <br />
          <h3>Featured Posts</h3>
          <TetraGrid className={tetraGridClass}>
            {map(featured, ({ node }) => (
              <Hex className="hex" key={node.fields.route}>
                <Link to={node.fields.route}>
                  <Image
                    src={node.frontmatter.cover}
                    rawWidth={1440}
                    rawHeight={900}
                    style={{ border: 0, width: "100%", height: "auto" }}
                  />
                  <h3 className="mask-p" style={{ marginTop: 0 }}>
                    {node.frontmatter.title}
                  </h3>
                  <p>{node.frontmatter.abstract}</p>
                </Link>
              </Hex>
            ))}
          </TetraGrid>
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
  query IndexQueryX {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: "general" } } }
    ) {
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
