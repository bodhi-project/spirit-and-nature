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
import Image from "@bodhi-project/components/lib/Image";
import OutLink from "@bodhi-project/components/lib/OutLink";
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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------------ SEO
// ----------------------------------------------------------------------------
const pageData = {
  pageTitle: "LionHearted Leadership",
  nakedPageSlug: "/lionhearted-leadership",
  pageAbstract:
    "LionHeartedness is that quality of fearlessness inspired by love and respect for creation, that enables us to change our world.",
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
          <h2>LionHearted Leadership</h2>
          <Image
            src="/content-assets/images/lionhearted-leadership.jpg"
            rawWidth={1328}
            rawHeight={880}
            style={{
              border: 0,
              width: "90%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <p>
            LionHeartedness is:&nbsp;
            <i>
              that quality of fearlessness inspired by love and respect for
              creation, that enables us to change our world.
            </i>
          </p>
          <p>
            You will be introduced into the 13 laws of Lionhearted Leadership,
            the legacy of renowned conservationist Linda Tucker, whose life work
            has established the White Lions as a legacy of deep cultural and
            conservation importance.
          </p>
          <p>
            Read more about her project{" "}
            <OutLink to="http://www.lindatuckerfoundation.org/lionhearted-leadership-initiative/">
              here
            </OutLink>.
          </p>
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
