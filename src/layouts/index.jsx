// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
  import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
  import PropTypes from 'prop-types';
  // import _ from 'lodash';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
  import Link from 'gatsby-link';
  import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
  import { css, plugins } from 'glamor';
  import { CompositeHeader, Container } from '@bodhi-project/components';
  import { InitializeMeta, UpdateTitle } from '@bodhi-project/seo';
  import { Type, typeComposite } from '@bodhi-project/typography';
  import { Header as SemanticHeader } from '@bodhi-project/semantic-webflow';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Main style
  import '../style/index.less';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
  import headerBanner from './assets/header.png';
  import burgerMenu from './assets/burger_menu.png';
  import logo from './assets/logoWithText.png';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
  const { ResponsiveHeader, DesktopHeader, MobileMenu, MobileHeader } = CompositeHeader;
  // const { Fragment } = React;
  // const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
  const { getType } = typeComposite;
  const type = getType('eih3wnu');
  const { kit, modularScale } = type;

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
    background: '#E7CFBC',
    color: '#222222',
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Desktop Header Style
  const desktopHeader = css({
    height: 1,
    display: 'block',
    position: 'relative',

    '& > div': {
      width: 'auto !important',
      float: 'right',
      position: 'absolute',
      top: 50,
      right: 0,
    },

    '& ul': {
      float: 'right',
      position: 'absolute',
      margin: 0,
      padding: 0,
      top: 120,
      right: 0,
      textAlign: 'right',
    },

    '& ul li': {
      display: 'block',
      padding: '0px',
      margin: '0 !important',
      fontFamily: `${kit.fontFamilies.paragraph} !important`,
      fontSize: `${(modularScale.base.px * 1.5) / 16}em !important`,
      fontStyle: 'italic',
    },
  });
  const desktopHeaderClass = desktopHeader.toString();

  const contentWrapper = css({
    '& h2:first-child': {
      marginTop: '0 !important',
      paddingTop: '0 !important',
    },
  });
  const contentWrapperClass = contentWrapper.toString();



  // // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Header Style
  // const mobileHeaderStyle = css({
  //   height: '110px',
  // });

  // // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Menu Style
  // const mobileMenuStyle = css({
  //   '& ul': {
  //     margin: 0,
  //     padding: 0,
  //   },

  //   '& ul li': {
  //     display: 'block',
  //     paddingTop: '27px',
  //     paddingBottom: '27px',

  //     '& a': {
  //       fontFamily: 'brandon-grotesque, sans-serif',
  //       color: '#081359',
  //     },
  //   },
  // });

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
      <Type kit="eih3wnu" style={{ margin: 30, background: '#fff6ec', minHeight: '100vh' }}>
        <Container block noFade style={{ padding: 0 }}>
          
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <InitializeMeta data={{ titleTemplate: '%s | Spirit and Nature' }} />
          <UpdateTitle title="Loading..." />
          
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header  className={mobileHeaderStyle.toString()}  className={mobileMenuStyle.toString()} */}
          <SemanticHeader>
            <ResponsiveHeader>
              <MobileHeader>
                <img id="logo" src={headerBanner} style={{ height: 100, width: 'auto' }} />
                <img id="menu" src={burgerMenu} style={{ height: 60, width: 'auto' }} />
              </MobileHeader>
              <MobileMenu >
                <ul>
                  <li><Link to="/">Features »</Link></li>
                  <li><Link to="/">Docs »</Link></li>
                </ul>
              </MobileMenu>
              <DesktopHeader className={desktopHeaderClass.toString()}>
                <div>
                  <Link to="/" style={{ height: 50, width: 'auto' }}><img style={{ height: 'inherit', width: 'inherit' }} src={logo} /></Link>
                </div>
                <ul>
                  <li><Link to="/home">Home</Link></li>
                  <li><Link to="/activities">Offerings</Link></li>
                  <li><Link to="/writings">Journal</Link></li>
                  <li><Link to="/videos">Videos</Link></li>
                  <li><Link to="/gallery">Gallery</Link></li>
                  <li><Link to="/book-glimpses-of-wonder">Book</Link></li>
                  <li><Link to="/about-me">About Me</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </DesktopHeader>
            </ResponsiveHeader>
          </SemanticHeader>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <Row type="flex" className={contentWrapperClass}>
            <Col span={18}>
              {this.props.children()}
            </Col>
          </Row>
          
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
