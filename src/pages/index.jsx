// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Row, Col } from "antd"; // eslint-disable-line import/no-extraneous-dependencies
import {
  Image,
  Images,
  Container,
  TetraGrid as TetraGridX,
  OutLink,
} from "@bodhi-project/components";
import { Elements } from "@bodhi-project/typography";

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
// import poster from "./assets/poster.jpg";
import poster2 from "./assets/event-posters/poster2.jpg";
import poster3 from "./assets/event-posters/poster3.jpg";
import poster4 from "./assets/event-posters/poster4.jpg";
import poster5 from "./assets/event-posters/poster5.jpg";
import patriciaPoster from "./assets/event-posters/patriciaPoster.jpg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const { Fragment } = React;
const { H2, H3, Paragraph } = Elements;
// const { kit, modularScale } = type;
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

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------------- SEO
// ------------------------------------------------------------------------------
const siteTitle = "Spirit and Nature";
const sitePublisher = "Spirit and Nature";
const pageTitle = "Spirit and Nature";
const abstract =
  "Spirit and Nature is dedicated to Spirit and Nature — Nature as a teacher of the multiplicity of creative expressions of Spirit.";
const websiteUrl = "https://www.spiritandnature.org/";
const pageSlug = "";
const pageKeywords =
  "auroville, spirit and nature, aikya, world game, sandplay, sand box, carl jung, sri aurobindo, the mother, india, pondicherry, tamil nadu";
const ogX = `${websiteUrl}content-assets/about/about2_675X450.jpg`;

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
  breadcrumbs: [{ name: "Home", url: `${websiteUrl}` }],
};

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
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

    /**
     * state - Track the interface configuration and the height of the component.
     */
    this.state = {
      filter: "all",
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

  /** default renderer */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const featured = _.pickBy(
      postEdges,
      ({ node }) => _.indexOf(node.frontmatter.tags, "featured") >= 0,
    );
    const latest = [];
    _.map(postEdges, ({ node }) => {
      if (_.indexOf(node.frontmatter.tags, "featured") < 0) {
        latest.push({ node });
      }
    });
    const topLatest = _.slice(latest, 0, 3);

    return (
      <Fragment>
        <UpdateTitle title="Spirit and Nature" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />

        <Container
          block
          noFade
          bleed
          style={{ paddingTop: 50, paddingBottom: 50 }}
        >
          <Images photos={photos} loader="gradient" />
          <br />
          <Paragraph>
            <Link to="/about">Read on…</Link>
          </Paragraph>
          <br />
          <br />
          <Row>
            <Col md={15}>
              <H2>Latest Updates</H2>
              {_.map(topLatest, ({ node }) => (
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
                    <H3 className="mask-p" style={{ marginTop: 0 }}>
                      {node.frontmatter.title},&nbsp;
                      {moment(node.frontmatter.date).fromNow()}
                    </H3>
                    <Paragraph>{node.frontmatter.abstract}</Paragraph>
                  </Link>
                </div>
              ))}
            </Col>
            <Col md={9}>
              <H2>Upcoming Events</H2>
              <OutLink to={patriciaPoster}>
                <Image
                  src={patriciaPoster}
                  rawWidth={1239}
                  rawHeight={1754}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "auto",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </OutLink>
              <br />
              <OutLink to={poster5}>
                <Image
                  src={poster5}
                  rawWidth={1239}
                  rawHeight={1754}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "auto",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </OutLink>
              <br />
              <OutLink to={poster4}>
                <Image
                  src={poster4}
                  rawWidth={1239}
                  rawHeight={1754}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "auto",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </OutLink>
              <br />
              <OutLink to={poster3}>
                <Image
                  src={poster3}
                  rawWidth={1239}
                  rawHeight={1754}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "auto",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </OutLink>
              <br />
              <OutLink to={poster2}>
                <Image
                  src={poster2}
                  rawWidth={1239}
                  rawHeight={1754}
                  style={{
                    border: 0,
                    width: "100%",
                    height: "auto",
                    background: "transparent",
                    cursor: "pointer",
                  }}
                />
              </OutLink>
              <br />
              <Paragraph>
                <small>Click the posters for more details...</small>
              </Paragraph>
            </Col>
          </Row>

          <br />
          <br />
          <H2>Featured Posts</H2>
          <TetraGrid className={tetraGridClass}>
            {_.map(featured, ({ node }) => (
              <Hex className="hex" key={node.fields.route}>
                <Link to={node.fields.route}>
                  <Image
                    src={node.frontmatter.cover}
                    rawWidth={1440}
                    rawHeight={900}
                    style={{ border: 0, width: "100%", height: "auto" }}
                  />
                  <H3 className="mask-p" style={{ marginTop: 0 }}>
                    {node.frontmatter.title}
                  </H3>
                  <Paragraph>{node.frontmatter.abstract}</Paragraph>
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

// ----------------------------------------------------------------------- GraphQL Query
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
