// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _ from 'lodash';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from 'gatsby-link';
import { Row, Col, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { css, plugins } from 'glamor';
import { CompositeHeader, Container } from '@bodhi-project/components';
import { InitializeMeta, UpdateTitle } from '@bodhi-project/seo';
import { Type, Elements, typeComposite } from '@bodhi-project/typography';
import { Header as SemanticHeader } from '@bodhi-project/semantic-webflow';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main style
import '../style/index.less';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
import logo from './assets/logoWithText.png';
import mobileLogo from './assets/mobileLogo.png';
import mobileBurger from './assets/mobileBurger.png';
import mobileCross from './assets/mobileCross.png';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const {
  ResponsiveHeader,
  DesktopHeader,
  MobileMenu,
  MobileHeader,
} = CompositeHeader;
// const { Fragment } = React;
// const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
const { Paragraph } = Elements;
const { getType } = typeComposite;
const type = getType('eih3wnu');
const { kit, modularScale } = type;

// ------------------------------------------------------------------------------
// --------------------------------------------------------- Increase Specificity
// ------------------------------------------------------------------------------
// See: https://glamorous.rocks/examples/#increase-specificity
// If document.body.id doesn't exist, make a random one.
// We use this id to increase the specificity of our CSS selectors.
let bodyID = `X${Math.random()
  .toString()
  .slice(2)
  .substr(0, 6)}`;
if (typeof document !== 'undefined') {
  bodyID = document.body.id || bodyID;
  document.body.id = bodyID;
}

/**
 * Returns a glamor plugin function that uses a given id
 * @param {String} id - An id used to prefix selectors
 * @return {Function} - A glamor plugin function
 */
function getSpecificityPlugin(id) {
  /**
   * This prefixes glamor-generated CSS selectors with an id
   * to prevent global styles from overriding glamor styles.
   *
   * Learn more about glamor plugins:
   * https://github.com/threepointone/glamor/blob/master/docs/plugins.md
   */
  return function specificityPlugin({ selector, style }) {
    const prefixedSelector = selector
      .split(',')
      .map(sel => `#${id} ${sel.trim()}`)
      .join(', ');
    return { selector: prefixedSelector, style };
  };
}

plugins.add(getSpecificityPlugin(bodyID));

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
const empty = ``;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global Styles
css.global(empty, {
  // This will apply style to the body tag.
  background: '#E7CFBC',
  color: '#222222',
});

const overWriteStyles = css({
  margin: 4,
  '@media(min-width: 768px)': {
    margin: 8,
  },
  '@media(min-width: 1000px)': {
    margin: 15,
  },
  '@media(min-width: 1200px)': {
    margin: 24,
  },
  '@media(min-width: 1440px)': {
    margin: 30,
  },
  '& p + p': {
    textIndent: '0px !important',
  },

  '& p, li': {
    color: '#654321',
  },
});
const overWriteStylesClass = overWriteStyles.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header Style
const desktopHeader = css({
  height: 180,
  display: 'flex',
  justifyContent: 'center',

  '& ul': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },

  '& ul li': {
    display: 'inline-flex',
    padding: '17px 27px',

    '& a': {
      fontSize: '1.4rem',
      fontFamily: `${kit.fontFamilies.paragraph} !important`,
      color: '#9d639d',
      // fontSize: `${(modularScale.base.px * 1.75) / 16}em !important`,
    },
  },
});
const desktopHeaderClass = desktopHeader.toString();

const contentWrapper = css({
  '& h2:first-child': {
    marginTop: '0 !important',
    paddingTop: '0 !important',
  },

  '& h2, h3, h4, h5, h6': {
    color: '#d06815',
  },
});
const contentWrapperClass = contentWrapper.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header >> Tip Style
const tipStyle = css({
  '& .ant-popover-arrow': {
    background: '#fff6ec',
  },

  '& .ant-popover-inner-content': {
    padding: 0,
    background: '#fff6ec',
    borderRadius: 4,

    '& ul': {
      padding: '8px 13px',
      margin: 0,
    },

    '& ul li': {
      padding: '10px 16px',

      '& a': {
        fontFamily: `${kit.fontFamilies.paragraph} !important`,
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: '#222222',
        letterSpacing: '1.1px',

        '&:hover': {
          textDecoration: 'none',
        },
        '&:visited': {
          textDecoration: 'none',
        },
        '&:link': {
          textDecoration: 'none',
        },
        '&:active': {
          textDecoration: 'none',
        },
      },

      '&:not(:last-child)': {
        borderBottom: '1px solid #222222',
      },
    },
  },
});
const tipStyleClass = tipStyle.toString();

const mobileMenu = css({
  '& .bm-item-list': {
    padding: '1em',
    '& a': {
      display: 'block',
    },
  },
});
const mobileMenuClass = mobileMenu.toString();

// ----------------------------------------------------------------------- Component
/**
 * Indexpage
 */
class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Type
        kit="eih3wnu"
        style={{ background: '#fff6ec', minHeight: '100vh' }}
        className={overWriteStylesClass}
      >
        <Container block noFade style={{ padding: 0 }}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <InitializeMeta data={{ titleTemplate: '%s | Spirit and Nature' }} />
          <UpdateTitle title="Loading..." />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header  className={mobileHeaderStyle.toString()}  className={mobileMenuStyle.toString()} */}
          <SemanticHeader>
            <ResponsiveHeader path={this.props.location.pathname}>
              <MobileHeader style={{ backgroundColor: '#FFFFFF' }}>
                <img
                  id="logo"
                  src={mobileLogo}
                  style={{
                    width: 'calc(100% - 93px)',
                    height: 'auto',
                    marginTop: 20,
                  }}
                />
                <img
                  id="menu"
                  src={mobileBurger}
                  style={{ height: 27, width: 27, top: 17, right: 6 }}
                />
                <img
                  id="cross"
                  src={mobileCross}
                  style={{ height: 37, width: 37 }}
                />
              </MobileHeader>
              <MobileMenu className={mobileMenuClass}>
                <Link to="/home">Home</Link>
                <Link to="/offerings">Offerings</Link>
                <Link to="/writings#articles">Articles</Link>
                <Link to="/writings#photos">Photos</Link>
                <Link to="/writings#videos">Videos</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/book-glimpses-of-wonder">Book</Link>
                <Link to="/about-me">About Me</Link>
              </MobileMenu>
              <DesktopHeader className={desktopHeaderClass.toString()}>
                <div style={{ width: '100%' }}>
                  <ul
                    style={{
                      paddingTop: 20,
                      paddingBottom: 20,
                      borderBottom: '2px solid #daa520',
                    }}
                  >
                    <li>
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link to="/offerings">Offerings</Link>
                    </li>
                    <li>
                      <Popover
                        placement="bottomRight"
                        content={
                          <ul style={{ listStyle: 'none' }}>
                            <li>
                              <Link to="/writings#articles">Articles</Link>
                            </li>
                            <li>
                              <Link to="/writings#photos">Photos</Link>
                            </li>
                            <li>
                              <Link to="/writings#videos">Videos</Link>
                            </li>
                          </ul>
                        }
                        trigger="hover"
                        overlayClassName={tipStyleClass}
                      >
                        <span
                          className="drops"
                          style={{
                            fontSize: '1.4rem',
                            fontFamily: `${
                              kit.fontFamilies.paragraph
                            } !important`,
                            color: '#9d639d',
                          }}
                        >
                          Journal
                        </span>
                      </Popover>
                    </li>
                    <li
                      style={{
                        paddingTop: 0,
                        paddingBottom: 0,
                        paddingLeft: 43,
                        paddingRight: 43,
                      }}
                    >
                      <Link to="/">
                        <img
                          style={{ height: 150, width: 'auto' }}
                          src={logo}
                        />
                      </Link>
                    </li>
                    <li>
                      <Link to="/gallery">Gallery</Link>
                    </li>
                    <li>
                      <Link to="/book-glimpses-of-wonder">Book</Link>
                    </li>
                    <li>
                      <Link to="/about-me">About Me</Link>
                    </li>
                  </ul>
                </div>
              </DesktopHeader>
            </ResponsiveHeader>
          </SemanticHeader>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <Row type="flex" className={contentWrapperClass} justify="center">
            <Col
              xs={{ span: 23 }}
              md={{ span: 21 }}
              lg={
                _.includes(
                  ['/gallery', '/africa', '/auroville', '/bali'],
                  this.props.location.pathname,
                )
                  ? 23
                  : 18
              }
              style={{ paddingLeft: 25, paddingRight: 25 }}
            >
              {this.props.children()}
            </Col>
          </Row>

          <div
            style={{
              borderTop: '2px solid #daa520',
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 19,
              paddingRight: 19,
            }}
          >
            <Container tiny block noFade style={{ padding: 0 }}>
              <div
                style={{
                  display: 'flex',
                  flexFlow: 'row wrap',
                  alignItems: 'flex-start',
                }}
              >
                <Link
                  style={{
                    flex: '6 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                  to="/writings#articles"
                >
                  Articles
                </Link>
                <span
                  style={{
                    flex: '1 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                >
                  |
                </span>
                <Link
                  style={{
                    flex: '6 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                  to="/writings#photos"
                >
                  Photos
                </Link>
                <span
                  style={{
                    flex: '1 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                >
                  |
                </span>
                <Link
                  style={{
                    flex: '6 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                  to="/writings#videos"
                >
                  Videos
                </Link>
                <span
                  style={{
                    flex: '1 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                >
                  |
                </span>
                <Link
                  style={{
                    flex: '6 1 0%',
                    textAlign: 'center',
                    display: 'inline',
                  }}
                  className="mask-p"
                  to="/about-me#contact-me"
                >
                  Contact Me
                </Link>
              </div>
            </Container>
            <Paragraph style={{ textAlign: 'center' }}>
              <small>
                © 2018, Spirit and Nature, Auroville Arts Service, India
              </small>
            </Paragraph>
          </div>
        </Container>
      </Type>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

// ----------------------------------------------------------------------- Export
export default TemplateWrapper;
