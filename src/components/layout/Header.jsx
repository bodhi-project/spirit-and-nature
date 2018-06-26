// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import { Header as SemanticHeader } from "@bodhi-project/semantic-webflow";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import CompositeHeader from "@bodhi-project/components/lib/CompositeHeader";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import mobileLogo from "../../assets/mobileLogo.png";
import mobileBurger from "../../assets/mobileBurger.png";
import mobileCross from "../../assets/mobileCross.png";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions

const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;

// ----------------------------------------------------------------------------
// ----------------------------------------------------------------------- Data
// ----------------------------------------------------------------------------
const menu = [
  [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "Offerings",
      link: "/offerings",
    },
    {
      title: "Journal",
      link: "/writings",
      menu: [
        {
          title: "Articles",
          link: "/writings#articles",
        },
        {
          title: "Photos",
          link: "/writings#photos",
        },
        {
          title: "Videos",
          link: "/writings#videos",
        },
      ],
    },
  ],
  [
    {
      title: "Gallery",
      link: "/gallery",
    },
    {
      title: "Book",
      link: "/book-glimpses-of-wonder",
    },
    {
      title: "About Me",
      link: "/about-me",
    },
  ],
];

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile
const mobileHeader = css({
  backgroundColor: "#FFFFFF",
  boxShadow: "0px 3px 5px 0px rgba(30,30,30,0.2)",
  border: "unset",
  paddingBottom: 20,
});
const mobileHeaderClass = mobileHeader.toString();

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
      <SemanticHeader>
        <ResponsiveHeader path={this.props.location}>
          <MobileHeader className={mobileHeaderClass}>
            <img
              id="logo"
              alt="logo"
              src={mobileLogo}
              style={{
                height: "auto",
                width: "50%",
                marginTop: 20,
              }}
            />
            <img
              id="menu"
              alt="menu icon"
              src={mobileBurger}
              style={{
                height: 38,
                width: 38,
                top: 7,
                right: 7,
                position: "absolute",
              }}
            />
            <img
              id="cross"
              alt="close menu icon"
              src={mobileCross}
              style={{
                height: 38,
                width: 38,
                top: 44,
                right: 24,
                position: "absolute",
              }}
            />
          </MobileHeader>
          <MobileMenu>
            <MobileNav menu={menu} {...this.props} />
          </MobileMenu>
          <DesktopHeader>
            <DesktopNav menu={menu} {...this.props} />
          </DesktopHeader>
        </ResponsiveHeader>
      </SemanticHeader>
    );
  }
}

Header.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default Header;
