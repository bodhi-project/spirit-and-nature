// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import withSizes from "react-sizes";

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import seoHelper from "../helpers/seoHelper";

import img1 from "../assets/celebrating-connection-with-nature.jpg";
import img2 from "../assets/celebrating-connection-with-nature2.jpg";

const galleryPhotos = [
  { src: img1, width: 2148, height: 1598 },
  { src: img2, width: 2102, height: 1582 },
];

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "Celebrating Connection with Nature",
  nakedPageSlug: "/celebrating-connection-with-nature",
  pageAbstract:
    "Celebrating Connection with Nature, an introduction into interspecies Communication.",
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
          <h2>
            Celebrating Connection with Nature, an introduction into
            interspecies Communication
          </h2>
          <div className="mask-p">
            <Images photos={galleryPhotos} columns={2} />
          </div>
          <p>
            It is scientifically proven that spending time in nature is good for
            mental and physical health.
          </p>
          <p>
            When one adds a touch of deeper connection and start to learn how to
            commune, communicate with animals, trees, flowers intuitively, it
            brings us in the direction of connecting with our deeper heart, the
            psychic being.
          </p>
          <p>On request or when announced.</p>
          <p>Facilitated by Aikya.</p>
        </Container>
      </Fragment>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

/** mapSizesToProps */
const mapSizesToProps = ({ width }) => ({
  isMobile: width <= 768,
});

// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Exports
// ----------------------------------------------------------------------------
export default withSizes(mapSizesToProps)(Index);
