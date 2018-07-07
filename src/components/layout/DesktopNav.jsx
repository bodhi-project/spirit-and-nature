// ----------------------------------------------------------------------------
// -------------------------------------------------------------------- Imports
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react";
import PropTypes from "prop-types";
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Lodash
import merge from "lodash/merge";
import map from "lodash/map";
import isUndefined from "lodash/isUndefined";
import split from "lodash/split";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { applyType } from "@bodhi-project/typography";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ @bodhi-project/components
import Container from "@bodhi-project/components/lib/Container";
import Image from "@bodhi-project/components/lib/Image";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Locals
import logo from "../../assets/logoWithText.png";
import globalWithMediaQueries from "../../helpers/globalWithMediaQueries";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstractions
const { Fragment } = React;

globalWithMediaQueries(
  ".ant-popover-inner-content .menu-tip",
  merge({ ...applyType("ltb1ekq") }),
  true,
);

// ----------------------------------------------------------------------------
// --------------------------------------------------------------------- Styles
// ----------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop
const desktopNavStyle = css({
  margin: "2em 0em",
  height: 180,
  display: "flex",
  justifyContent: "center",
  borderBottom: "2px solid #daa520",

  "& ul": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    padding: 0,
  },

  "& ul li": {
    display: "inline-flex",
    padding: "9px 12px",
    marginBottom: "10px !important",

    "& a": {
      fontSize: "1.4rem",
      color: "#9d639d",
    },
  },
});
const desktopNavStyleClass = desktopNavStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Tip Style
const tipStyle = css({
  "& .ant-popover-arrow": {
    background: "#fff6ec",
  },

  "& .ant-popover-inner-content": {
    padding: 0,
    background: "#fff6ec",
    borderRadius: 4,

    "& ul": {
      padding: "8px 13px",
      margin: 0,
    },

    "& ul li": {
      padding: "10px 16px",

      "& a": {
        fontSize: "0.9rem",
        textTransform: "uppercase",
        color: "#222222",
        letterSpacing: "1.1px",

        "&:hover": {
          textDecoration: "none",
        },
        "&:visited": {
          textDecoration: "none",
        },
        "&:link": {
          textDecoration: "none",
        },
        "&:active": {
          textDecoration: "none",
        },
      },

      "&:not(:last-child)": {
        borderBottom: "1px solid #222222",
      },
    },
  },
});
const tipStyleClass = tipStyle.toString();

// ----------------------------------------------------------------------------
// ------------------------------------------------------------ Local Component
// ----------------------------------------------------------------------------
/** makeMenu */
const makeMenu = (menuArray, pathname) => {
  return (
    <Fragment>
      {map(menuArray, menuItem => {
        const { title, link, menu: subMenu } = menuItem;
        return (
          <li key={link}>
            {isUndefined(subMenu) && (
              <Link
                to={link}
                className={pathname === split(link, "?", 1)[0] ? "active" : ""}
              >
                {title}
              </Link>
            )}
            {!isUndefined(subMenu) && (
              <Popover
                placement="bottomRight"
                overlayClassName={tipStyleClass}
                content={
                  <div className="menu-tip">
                    <ul>
                      {map(subMenu, subMenuItem => {
                        const itemTitle = subMenuItem.title;
                        const itemLink = subMenuItem.link;
                        return (
                          <li key={itemLink}>
                            <Link to={itemLink}>{itemTitle}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                }
              >
                <Link
                  to={link}
                  className={
                    pathname === split(link, "?", 1)[0] ? "active" : ""
                  }
                >
                  {title}
                </Link>
              </Popover>
            )}
          </li>
        );
      })}
    </Fragment>
  );
};

// ----------------------------------------------------------------------------
// ------------------------------------------------------------------ Component
// ----------------------------------------------------------------------------
/** DesktopNav */
class DesktopNav extends React.Component {
  /** standard constructor */
  constructor(props) {
    super(props);
  }

  /** standard renderer */
  render() {
    const { pathname } = this.props.location;
    const { menu } = this.props;
    const firstMenu = menu[0];
    const secondMenu = menu[1];

    return (
      <Container bleed block noFade className={desktopNavStyleClass}>
        <nav>
          <ul>
            <Fragment>{makeMenu(firstMenu, pathname)}</Fragment>
            <li
              style={{
                paddingTop: 0,
                paddingBottom: 0,
                paddingLeft: 43,
                paddingRight: 43,
              }}
            >
              <Link to="/">
                <Image
                  src={logo}
                  rawWidth={516}
                  rawHeight={264}
                  style={{
                    height: 150,
                    width: "auto",
                    border: 0,
                    background: "transparent",
                    margin: 0,
                    paddingLeft: 43,
                    paddingRight: 43,
                  }}
                  loader="gradient"
                />
              </Link>
            </li>
            <Fragment>{makeMenu(secondMenu, pathname)}</Fragment>
          </ul>
        </nav>
      </Container>
    );
  }
}

DesktopNav.propTypes = {
  location: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  menu: PropTypes.array, // eslint-disable-line react/forbid-prop-types
};

// --------------------------------------------------------------------- Export
export default DesktopNav;
