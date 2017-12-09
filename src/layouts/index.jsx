// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import _, { flow as compose } from 'lodash';
// import classNames from 'classnames';

// ----------------------------------- Components
import Link from 'gatsby-link';
import { Row, Col, Layout, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { css, plugins } from 'glamor';
import { OutLink, CompositeHeader, Container } from '@bodhi-project/components';
import { InitializeMeta, UpdateTitle } from '@bodhi-project/seo';
import { FirstVariationOnModernType } from '@bodhi-project/typography';
import { Header as SemanticHeader, Footer as SemanticFooter } from '@bodhi-project/semantic-webflow';

import '../style/index.less';
import headerBanner from './header.png';
import burgerMenu from './burger_menu.png';
import logo from './logoWithText.png';

/**
  * Just a little bit of abstraction
  */
const { ResponsiveHeader, DesktopHeader, MobileMenu, MobileHeader } = CompositeHeader;
const { Footer, Content } = Layout;
const Fragment = React.Fragment;

// ----------------------------------------------------------------------- Type
const {
  FetchFonts,
  TypeWrapper,
  H1,
  Paragraph,
  injectType,
  typeDefs,
} = FirstVariationOnModernType;

const type = typeDefs;

// ------------------------------------------------------------------------------
// --------------------------------------------------------- Increase Specificity
// ------------------------------------------------------------------------------
  // See: https://glamorous.rocks/examples/#increase-specificity
  // If document.body.id doesn't exist, make a random one.
  // We use this id to increase the specificity of our CSS selectors.
  let bodyID = `X${Math.random().toString().slice(2).substr(0,6)}`;
  if(typeof document !== "undefined") {
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
        .split(",")
        .map(sel => `#${id} ${sel.trim()}`)
        .join(", ");
      return { selector: prefixedSelector, style };
    };
  }

  plugins.add(getSpecificityPlugin(bodyID));

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  const empty = ``;
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Global Styles
  css.global(empty,  { // This will apply style to the body tag.
    background: '#e7e1d8',
    color: '#222222',
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Layout Wrapper Style
  const layoutWrapperStyle = css({
    margin: 30,
    background: '#ddd5c8',
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content Style
  const contentStyle = css({
    minHeight: '100vh',
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Header Style
  const mobileHeaderStyle = css({
    height: '110px',
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Menu Style
  const mobileMenuStyle = css({
    '& ul': {
      margin: 0,
      padding: 0,
    },

    '& ul li': {
      display: 'block',
      paddingTop: '27px',
      paddingBottom: '27px',

      '& a': {
        fontFamily: 'brandon-grotesque, sans-serif',
        color: '#081359',
      },
    },
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header Style
  const desktopHeaderStyle = css({
    height: 120,
    display: 'flex',
    // justifyContent: 'space-between',
    // position: 'absolute',
    width: '100%',

    '& ul': {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
    },

    '& ul li': {
      display: 'inline-flex',
      padding: '10px 16px',
      marginBottom: 0,

      '& a, span.drops': {
        fontFamily: typeDefs.heading.font,
        fontSize: '0.9rem',
        textTransform: 'uppercase',
        color: '#222222',
        letterSpacing: '1.1px',
        lineHeight: '20px',

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
    },
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header >> Tip Style
  const tipStyle = css({
    '& .ant-popover-inner-content': {
      padding: 0,
      background: '#FAFAFA',
      borderRadius: 4,

      '& ul': {
        padding: '8px 13px',
        margin: 0,
      },

      '& ul li': {
        padding: '10px 16px',

        '& a': {
          fontFamily: typeDefs.heading.font,
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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer Style
  const footerStyle = css({
    background: '#ddd5C8',

    '& ul li': {
      display: 'inline-block',
    },

    '& h3': {
      fontSize: '62%',
      marginBottom: '5px',
      letterSpacing: '3px',
      color: '#676767',
    },
  });

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
      <TypeWrapper>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <InitializeMeta data={{ titleTemplate: '%s | Spirit and Nature' }} />
        <UpdateTitle title="Loading..." />
        
        <Layout className={layoutWrapperStyle.toString()}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page Header */}
          <SemanticHeader>
            <ResponsiveHeader>
              <MobileHeader className={mobileHeaderStyle.toString()}>
                <Fragment>
                  <img id="logo" src={headerBanner} style={{ height: 100, width: 'auto' }} />
                  <img id="menu" src={burgerMenu} style={{ height: 60, width: 'auto' }} />
                </Fragment>
              </MobileHeader>
              <MobileMenu className={mobileMenuStyle.toString()}>
                <ul>
                  <li><Link to="/">Features »</Link></li>
                  <li><Link to="/">Docs »</Link></li>
                </ul>
              </MobileMenu>
              <DesktopHeader className={desktopHeaderStyle.toString()}>
                <div style={{ paddingTop: 25, paddingBottom: 25, width: 'inherit', height: 'inherit', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'inline-flex' }}>
                    <Link to="/" style={{ height: 70, width: 'auto' }}><img style={{ height: 'inherit', width: 'inherit' }} src={logo} /></Link>
                  </div>
                  <ul>
                    <li><Link to="/about">About</Link></li>
                    <li>
                      <Popover 
                        placement="bottomRight"
                        content={
                          <ul>
                            <li><Link to="/world-game">World Game</Link></li>
                            <li><Link to="/vision-game">Vision Game</Link></li>
                            <li><Link to="/nature-projects">Nature Projects</Link></li>
                          </ul>}
                        trigger="hover"
                        overlayClassName={tipStyle.toString()}
                      >
                        <span className="drops">Programs</span>
                      </Popover>
                    </li>
                    <li>
                      <Popover 
                        placement="bottomRight"
                        content={
                          <ul>
                            <li><Link to="/writings">Writings</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/video-gallery">Videos</Link></li>
                          </ul>}
                        trigger="hover"
                        overlayClassName={tipStyle.toString()}
                      >
                        <span className="drops">Media</span>
                      </Popover>
                    </li>
                    <li><Link to="/contact">Contact</Link></li>
                  </ul>
                </div>
              </DesktopHeader>
            </ResponsiveHeader>
          </SemanticHeader>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page Content */}
          <Content className={contentStyle.toString()}>
            {this.props.children()}
          </Content>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page Footer */}
          <SemanticFooter>
            <Container bleed style={{ padding: 0 }}>
              <Footer className={footerStyle.toString()}>
                <Row gutter={16} type="flex" justify="center" align="top">
                  <Col xs={22} sm={22} lg={18} style={{ textAlign: 'center' }}>
                    <p style={{ fontFamily: 'brandon-grotesque, sans-serif', fontSize: '1.12470588rem', lineHeight: '2.00117647rem', textTransform: 'uppercase', margin: '3.54545455em 0 1.31181818em', fontWeight: '700', marginBottom: '5px', letterSpacing: '3px', color: '#676767' }}><Link to="/about">ABOUT</Link>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<Link to="/donate">DONATE</Link>&nbsp;&nbsp;&nbsp;•&nbsp;&nbsp;&nbsp;<Link to="/contact">CONTACT</Link></p>
                  </Col>
                </Row>
              </Footer>
            </Container>
          </SemanticFooter>
        </Layout>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Get Fonts */}
        <FetchFonts />
      </TypeWrapper>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
  type: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
};

// ----------------------------------------------------------------------- Compose Component
/**
  * ComposedComponent - Compose component ala FP style.
  */
const ComposedComponent = compose([
  injectType, // Add typographic information
])(TemplateWrapper);

// ----------------------------------------------------------------------- Export
export default ComposedComponent;
