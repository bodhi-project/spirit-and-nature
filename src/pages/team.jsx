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
  pageTitle: "Team",
  nakedPageSlug: "team",
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
          <h2>Collaborators/ Facilitators/ Supporters</h2>
          <h3>The Learning Community, Auroville</h3>
          <Image
            src="/content-assets/collaborators/tlc.jpg"
            rawWidth={580}
            rawHeight={582}
            style={{
              border: 0,
              width: "40%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <p>
            <OutLink to="https://tlc-av.weebly.com/">Visit Website…</OutLink>
          </p>
          <p>
             Vision: To create a community of children and adults who grow more
            conscious  by living and learning together.  We implement ways to
            practice the concept of Integral Education as defined by Mother and
            Sri Aurobindo  where each part of the being is helped to grow into
            its full potential and the psychic being becomes  the leader of
            one’s life and growth through an unending education.
          </p>
          <h3>Samrat, Auroville</h3>
          <p>
            Samrat grew up in the Integral Yoga Ashram of Sri Aurobindo and the
            Mother in Pondichery and lives in Auroville since 18 years. Samrat
            loves the silence and solitude of the forest while being very
            involved.
          </p>
          <Image
            src="/content-assets/collaborators/samrat.jpg"
            rawWidth={1280}
            rawHeight={948}
            style={{
              border: 0,
              width: "62%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <p>
            <strong>Activities:</strong>
          </p>
          <ul className="mask-p">
            <li>
              Facilitates Open Heart Space Meditation, a simple practice of
              becoming aware of the reality as it is without judgement,
              interpretation or reaction, and settling into its vast luminous
              expanse. Learning to embrace and let go each experience as it
              arises and subsides. Eventually the mind falls silent and sinks
              into the open heart-space, a doorway to Unity-consciousness, where
              the inner and outer worlds meet and merge
            </li>
          </ul>
          <h3>Patricia Henry, Auroville</h3>
          <p>
            Journeying toward connection to Self, Patricia hopes someday to
            “know”, “see” and “feel” Spirit in all creation. Patricia sometimes
            facilitates sharings of material related to the new consciousness
            of the earth's significance and the potential of humans in this play
            of Spirit and Nature.
          </p>
          <Image
            src="/content-assets/collaborators/patricia-henry.jpg"
            rawWidth={1280}
            rawHeight={960}
            style={{
              border: 0,
              width: "55%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <h3>Tamille, Auroville bio-region</h3>
          <p>Tamille takes care of cleanliness, order and much more.</p>
          <Image
            src="/content-assets/collaborators/tamille.jpg"
            rawWidth={1280}
            rawHeight={960}
            style={{
              border: 0,
              width: "62%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <h3>Ymani Simmons, US</h3>
          <p>
            Ymani is a Peacemaker, Practitioner for the 13 Laws of LionHearted
            Leadership™, Spiritual Mentor, Writer, Conservationist,
            International Facilitator of Workshops and Retreats for spiritual
            healing, and trip Guide for Wisdom of the Heart, journeys to the
            White Lions, at the Global White Lion Protection Trust in the
            heartlands of South Africa. She assists people globally in healing
            their hearts, embracing loving empowerment and re-membering their
            true selves and purpose. Through her gentle voice of experience and
            wisdom, conscious awareness and positive spirit, she provides a safe
            and sacred container for individuals ready to experience the life
            they have always envisioned.
          </p>
          <Image
            src="/content-assets/collaborators/ymani.jpg"
            rawWidth={740}
            rawHeight={740}
            style={{
              border: 0,
              width: "50%",
              height: "auto",
              background: "transparent",
              marginLeft: "0",
              justifyContent: "left",
            }}
            className="mask-p"
          />
          <p>
            <strong>Activities:</strong>
          </p>
          <ul className="mask-p">
            <li>
              Co-facilitating White Lion Journeys to South Africa, with Aikya
              (Next journey planned when it will be appropriate to travel
              abroad)
            </li>
          </ul>
          <h2>Supporters of the project</h2>
          <h3>Auroville Arts Service, Auroville</h3>
          <p>
            <OutLink to="http://artservice.auroville.org/">
              Visit Website…
            </OutLink>
          </p>
          <h2>Linked project</h2>
          <h3>
            Academy of LionHearted Leadership / The Linda Tucker Foundation,
            South Africa
          </h3>
          <p>
            <OutLink to="https://www.lindatuckerfoundation.org/lionhearted-leadership-initiative/academy-for-lionhearted-leadership/">
              Visit Website…
            </OutLink>
          </p>
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
