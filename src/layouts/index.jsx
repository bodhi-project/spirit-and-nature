// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';
// import classNames from 'classnames';

// ----------------------------------- Components
import Link from 'gatsby-link';
import { Row, Col, Layout, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { OutLink, Header } from '@bodhi-project/components';
import { injectSheet } from '@bodhi-project/utilities';
import { InitializeMeta, UpdateTitle } from '@bodhi-project/seo';

import '../style/index.less';
import headerBanner from './header.png';
import burgerMenu from './burger_menu.png';
import logo from './logoWithText.png';
import github from './github.png';

/**
  * Just a little bit of abstraction
  */
const { ResponsiveHeader, DesktopHeader, MobileMenu, MobileHeader } = Header;
const { Footer, Content } = Layout;

// ----------------------------------------------------------------------- Style
/**
  * styles - JSS styles for this component.
  */
const styles = {
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Layout Style
  layout: {
    margin: 30,
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Header Style
  desktopHeader: {
    height: 110,
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

      '& a, span.drops': {
        fontFamily: 'brandon-grotesque, sans-serif',
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
    },
  },

  tip: {
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
          fontFamily: 'brandon-grotesque, sans-serif',
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
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Mobile Header Style
  mobileHeader: {
    height: '110px',
  },

  mobileMenu: {
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
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content Style
  content: {
    minHeight: '100vh',
  },

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Footer Style
  footer: {
    '& ul li': {
      display: 'inline-block',
    },

    '& h3': {
      fontSize: '62%',
      marginBottom: '5px',
      letterSpacing: '3px',
      color: '#676767',
    },
  },
};

// ----------------------------------------------------------------------- Component
/**
  * Indexpage
  */
class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );

    return (
      <div>
        <InitializeMeta data={{ titleTemplate: '%s | Spirit and Nature' }} />
        <UpdateTitle title="Loading..." />
        <Layout className={this.props.classes.layout}>
          <ResponsiveHeader>
            <MobileHeader className={this.props.classes.mobileHeader}>
              <img id="logo" src={headerBanner} style={{ height: 100, width: 'auto' }} />
              <img id="menu" src={burgerMenu} style={{ height: 60, width: 'auto' }} />
            </MobileHeader>
            <MobileMenu className={this.props.classes.mobileMenu}>
              <ul>
                <li><Link to="/">Features »</Link></li>
                <li><Link to="/">Docs »</Link></li>
              </ul>
            </MobileMenu>
            <DesktopHeader className={this.props.classes.desktopHeader}>
              <div style={{ paddingTop: 30, width: 'inherit', height: 'inherit', display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ display: 'inline-flex' }}>
                  <Link to="/"><img style={{ height: 70, width: 'auto' }} src={logo} /></Link>
                </div>
                <ul>
                  <li><Link to="/">About</Link></li>
                  <li>
                    <Popover 
                      placement="bottomRight"
                      content={
                        <ul>
                          <li><Link to="/">World Game</Link></li>
                          <li><Link to="/">Vision Game</Link></li>
                          <li><Link to="/">Nature Projects</Link></li>
                        </ul>}
                      trigger="hover"
                      overlayClassName={this.props.classes.tip}
                    >
                      <span className="drops">Programs</span>
                    </Popover>
                  </li>
                  <li>
                    <Popover 
                      placement="bottomRight"
                      content={
                        <ul>
                          <li><Link to="/">Writings</Link></li>
                          <li><Link to="/">Gallery</Link></li>
                          <li><Link to="/">Videos</Link></li>
                        </ul>}
                      trigger="hover"
                      overlayClassName={this.props.classes.tip}
                    >
                      <span className="drops">Media</span>
                    </Popover>
                  </li>
                  <li><Link to="/">Contact</Link></li>
                </ul>
              </div>
            </DesktopHeader>
          </ResponsiveHeader>
          <Content className={this.props.classes.content}>
            {this.props.children()}
          </Content>
          <Footer className={this.props.classes.footer}>
            <section className="small">
              <Row gutter={16} type="flex" justify="center" align="top">
                <Col xs={22} sm={22} lg={18} style={{ textAlign: 'center' }}>
                  <h3 className="text-center capitalize"><small>Created with <Icon type="heart" style={{ color: '#D34025' }} /> by <OutLink to="https://www.bodhiproject.org/">Bodhi Project</OutLink></small></h3>
                </Col>
              </Row>
            </section>
          </Footer>
        </Layout>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// ----------------------------------------------------------------------- Compose Component
/**
  * ComposedComponent - Compose component ala FP style.
  */
const ComposedComponent = compose([
  injectSheet(styles), // Add style
])(TemplateWrapper);

// ----------------------------------------------------------------------- Export
export default ComposedComponent;
