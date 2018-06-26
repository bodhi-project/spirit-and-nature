// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Footer as SemanticFooter } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import OutLink from "@bodhi-project/components/lib/OutLink";
import Image from "@bodhi-project/components/lib/Image";
import Container from "@bodhi-project/components/lib/Container";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import facebook from "../../assets/facebook.png";
import youtube from "../../assets/youtube.png";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer
const footerStyle = css({
  borderTop: "2px solid #daa520",
  padding: "2em 0em",

  "& #divx": {
    display: "flex",
    justifyContent: "space-between",
  },
});
const footerStyleClass = footerStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** Header */
class Header extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    return (
      <SemanticFooter className={footerStyleClass}>
        <Container bleed noFade block id="footer">
          <div className="mask-p" id="divx">
            <Link to="/writings#articles" style={{ marginLeft: "25%" }}>
              Articles
            </Link>
            <Link to="/writings#photos">Photos</Link>
            <Link to="/writings#videos">Videos</Link>
            <Link to="/about-me#contact">Contact</Link>
            <Link to="/about-me#donate" style={{ marginRight: "25%" }}>
              Donate
            </Link>
          </div>
          <div style={{ textAlign: "center" }}>
            <OutLink to="https://www.facebook.com/SpiritandNature.auroville">
              <Image
                src={facebook}
                style={{
                  display: "inline-block",
                  border: "none",
                  background: "transparent",
                  height: 60,
                  width: 60,
                }}
              />
            </OutLink>
            <OutLink to="https://www.youtube.com/channel/UC4duwUZsuD6W3OyKLILWV4A">
              <Image
                src={youtube}
                style={{
                  display: "inline-block",
                  border: "none",
                  background: "transparent",
                  height: 60,
                  width: 60,
                  marginLeft: 45,
                }}
              />
            </OutLink>
          </div>
          <p style={{ textAlign: "center" }}>
            © 2018, Spirit and Nature, Auroville Arts Service, India
          </p>
        </Container>
      </SemanticFooter>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
