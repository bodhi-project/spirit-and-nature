// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
  import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
  import PropTypes from 'prop-types';
  // import _ from 'lodash';
  import { css } from 'glamor';
  import moment from 'moment';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
  import Link from 'gatsby-link';
  import { Row, Col, Carousel, Modal } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
  import { Container, Image, HexaGrid as HexaGridX, OutLink } from '@bodhi-project/components';
  import { typeComposite, Elements } from '@bodhi-project/typography';
  import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
  import {
    // --------------- Basic
    UpdateTitle,
    // GeneralMeta,
    // // --------------- Twitter
    // TwitterSummaryCard,
    // // --------------- Open Graph
    // OpenGraphSummary,
    // // --------------- Schema.org JSON-LD
    // WebsiteSchema,
    // WebpageSchema,
    // BreadcrumbSchema,
    // OrganisationSchema,
  } from '@bodhi-project/seo';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
  // import featureLion from './feature-lion.jpg';
  import off1 from './assets/act1.jpg';
  import off2 from './assets/act2.jpg';
  import off3 from './assets/act3.jpg';
  import off4 from './assets/act4.jpg';
  import off5 from './assets/act5.jpg';
  import off6 from '../../static/content-assets/activities/activities17_900X900.jpg';
  import off7 from '../../static/content-assets/portraits-from-africa/img102_600X600.jpg';
  import off8 from './assets/act8.jpg';
  import off9 from '../../static/content-assets/portraits-from-africa/lions.jpg';

  // Slider
  import slider0 from './assets/slider0.jpg';
  import slider11 from './assets/slider11.jpg';
  
  import slider1 from '../../static/content-assets/activities/activities1_1280X960.jpg';
  import slider2 from '../../static/content-assets/activities/activities2_1280X960.jpg';
  import slider3 from '../../static/content-assets/about/about4_1075X900.jpg';
  import slider4 from './assets/slider4.jpg';
  import slider12 from './assets/lions.jpeg';

  // For Activities
  import theMother from './assets/onAuroville.jpg';
  import worldGameInNature from '../../static/content-assets/activities/activities5_1200X900.jpg';
  import flowerGroup from './assets/wgn.jpg';
  import sacredSpaces from '../../static/content-assets/nature-portraits/img59_600X449.jpg';
  import visionGame from '../../static/content-assets/activities/activities16_1200X900.jpg';
  import interSpecies from '../../static/content-assets/activities/activities19_1700X900.jpg';
  import photography from '../../static//content-assets/nature-portraits/img19_600X308.jpg';
  import lions from './assets/slider12.jpeg';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
  const { Fragment } = React;
  const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
  const { getType } = typeComposite;
  const type = getType('eih3wnu');
  const { kit, modularScale } = type;
  const { HexaGrid, Hex } = HexaGridX;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Article Wrapper Style
  const wrapperStyle = css({
    '& .ant-carousel': {
      width: '66%',
    },
  });
  const wrapperStyleClass = wrapperStyle.toString();

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hex style
  const hexStyle = css({
    boxShadow: 'none !important',
    border: '1px solid #daa520 !important',
    borderRadius: '2px',
    padding: '0px !important',
    marginBottom: '1vh',
    marginRight: '1vh',    

    '@media (min-width: 768px)': {
      flex: '0 0 47% !important',
      maxWidth: '47% !important',

      '@media (min-width: 1066px)': {
        flex: '0 0 32.3% !important',
        maxWidth: '32.3% !important',
      },
    },

    '& a': {
      display: 'block',
      height: '100%',
      width: '100%',
    },

    '& div': {
      WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    },

    '& h3': {
      position: 'absolute',
      width: '100%',
      margin: '0px !important',
      textAlign: 'center',
      background: '#daa520',
      color: '#ffffff',
      bottom: -100,
      left: 0,
      WebkitTransition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      transition: 'all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)',
      paddingTop: '10px',
      paddingBottom: '10px',
    },

    '& div:hover': {
      '& h3': {
        bottom: 0,
      },
    },
  });
  const hexStyleClass = hexStyle.toString();

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
  const pageStyle = css({
    padding: '20px',

    // «««««««««««««««««««««««««««««««««««««««««««««««««««««««««« Home H2
      '& h2.home': {
        fontSize: `${(modularScale.basePlus2.px * 1.375) / 16}em`,
        fontWeight: kit.fontWeights.higher,
        margin: `${(((modularScale.basePlus2.px * 1.25) * 0.375) * 0.75) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.375) * 0.75) / 16}em`,
        '@media(min-width: 600px)': {
          fontSize: `${(modularScale.basePlus2.px * 1.25) * 1.188 / 16}em`,
          margin: `${((((modularScale.basePlus2.px * 1.25) * 1.188) * 0.375) * 0.625) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.625) * 0.625) / 16}em`,
        },
        '@media(min-width: 800px)': {
          fontSize: `${(modularScale.basePlus2.px * 1.25) * 1.313 / 16}em`,
          margin: `${((((modularScale.basePlus2.px * 1.25) * 1.313) * 0.375) * 0.625) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.625) * 0.625) / 16}em`,
        },
        '@media(min-width: 1030px)': {
          fontSize: `${(modularScale.basePlus2.px * 1.25) * 1.375 / 16}em`,
          margin: `${((((modularScale.basePlus2.px * 1.25) * 1.375) * 0.375) * 0.625) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.625) * 0.625) / 16}em`,
        },
        '@media(min-width: 1250px)': {
          fontSize: `${(modularScale.basePlus2.px * 1.25) * 1.438 / 16}em`,
          margin: `${((((modularScale.basePlus2.px * 1.25) * 1.438) * 0.375) * 0.625) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.625) * 0.625) / 16}em`,
        },
        '@media(min-width: 1400px)': {
          fontSize: `${(modularScale.basePlus2.px * 1.25) * 1.563 / 16}em`,
          margin: `${((((modularScale.basePlus2.px * 1.25) * 1.563) * 0.375) * 0.625) / 16}em 0em ${(((modularScale.basePlus2.px * 1.25) * 0.625) * 0.625) / 16}em`,
        },
      },

    // «««««««««««««««««««««««««««««««««««««««««««««««««««««««««« Hero Paragraph
      '& p.home, .mask-p': {
        fontSize: `${(modularScale.base.px * 1.4) / 16}em !important`,
        lineHeight: '1.333em',
        '@media(min-width: 600px)': {
          fontSize: `${(modularScale.base.px * 1.4) * 1.188 / 16}em !important`,
        },
        '@media(min-width: 800px)': {
          fontSize: `${(modularScale.base.px * 1.4) * 1.313 / 16}em !important`,
        },
        '@media(min-width: 1030px)': {
          fontSize: `${(modularScale.base.px * 1.4) * 1.375 / 16}em !important`,
        },
        '@media(min-width: 1250px)': {
          fontSize: `${(modularScale.base.px * 1.4) * 1.438 / 16}em !important`,
        },
        '@media(min-width: 1400px)': {
          fontSize: `${(modularScale.base.px * 1.4) * 1.563 / 16}em !important`,
        },
      },

      '& p, .mask-p': {
        margin: `${(modularScale.base.px * 1.4) / 16}em 0em !important`,
        '@media(min-width: 600px)': {
          margin: `${((modularScale.base.px * 1.4) * 1.188) / 16}em 0em !important`,
        },
        '@media(min-width: 800px)': {
          margin: `${((modularScale.base.px * 1.4) * 1.313) * 0.9 / 16}em 0em !important`,
        },
        '@media(min-width: 1030px)': {
          margin: `${((modularScale.base.px * 1.4) * 1.375) * 0.8 / 16}em 0em !important`,
        },
        '@media(min-width: 1250px)': {
          margin: `${((modularScale.base.px * 1.4) * 1.438) * 0.7 / 16}em 0em !important`,
        },
        '@media(min-width: 1400px)': {
          margin: `${((modularScale.base.px * 1.4) * 1.563) * 0.6 / 16}em 0em !important`,
        },
      },

      '& ol.home > li, ul.home > li': {
        margin: 0,
        marginBottom: `${modularScale.base.px * 0.375 / 16}em`,
      },

    // «««««««««««««««««««««««««««««««««««««««««««««««««««««««««« HR
    '& hr': {
      border: '2px solid #363636',
      width: '40%',
      marginRight: '60%',
      '@media(min-width: 800px)': {
        border: '3px solid #363636',
      },
      '@media(min-width: 1250px)': {
        border: '4px solid #363636',
      },
    },

  });
  const pageStyleClass = pageStyle.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
  class Index extends React.Component {

    /**
      * constructor - Just a standard constructor.
      */
    constructor(props) {
      super(props);

      /**
        * state - Track token-check mutation, send-verification-mail mutation, and when to redirect.
        */
      this.state = {
        visible: false,
        data: false,
      };

      this.showModal = this.showModal.bind(this);
      this.hideModal = this.hideModal.bind(this);
    }

    showModal(e, person) {
      e.preventDefault();
      if (person === 'spiritualDimensions') {
        this.setState({
          visible: true,
          data: {
            title: 'Introduction into the Spiritual Dimension of Auroville',
            description: 'Auroville is a laboratory for the materialization of a new consciousness. Every one is welcome who has good will and believes Human Unity is possible and aspires for it.',
            link: 'Read on...',
            linkUrl: '/on-auroville',
            image: theMother,
          },
        });
      }

      if (person === 'worldGameInNature') {
        this.setState({
          visible: true,
          data: {
            title: 'World Game in Nature',
            description: 'Nature all around is full of messages, nature speaks, and one can learn the language. Going out on walks, listening to the messages of the birds, of the wind, whichever Elements may call us: flowers, trees, a dog, a spider, a frog, a crystal, a rock. Connecting from heart to heart. A wonderful journey into deep and magical communication with all things; everything alive ingesting love and respect for the environment, for the earth and its creatures.',
            link: 'Read on...',
            linkUrl: '/on-auroville',
            image: flowerGroup,
          },
        });
      }

      if (person === 'flowers') {
        this.setState({
          visible: true,
          data: {
            title: 'Flowers and their Messages',
            description: 'Mira Alfassa, or The Mother, was in conscious contact with the spirit of the plants. She has given more than 900 spiritual significances to flowers, which means that each flower carries it\'s own message.',
            link: 'Read on...',
            outLinkUrl: 'http://www.blossomlikeaflower.com/',
            image: worldGameInNature,
          },
        });
      }

      if (person === 'sacredSpaces') {
        this.setState({
          visible: true,
          data: {
            title: 'Creating Sacred Space',
            quote: 'If you have an artistic or poetic consciousness, if you love harmony, beauty, you will build there something marvelous which will tend to spring up in the material manifestation. — The Mother.',
            description: 'I love to create an atmosphere of harmony and peace, it invites a higher level of vibration. I love gardens where one can feel the magic of nature, where everything is alive and full of secret relationships.',
            link: 'Read on...',
            linkUrl: '/how-to-create-a-sacred-space',
            image: sacredSpaces,
          },
        });
      }

      if (person === 'worldGameInSand') {
        this.setState({
          visible: true,
          data: {
            title: 'World Game in Sand',
            description: 'This activity has been an educational tool in Auroville since it\'s beginning, although now in Auroville it is mainly played with children, yet it was also intended for adults. The World Game encourages spontaniety, trust in oneself and being in the flow of the moment.',
            link: 'Read on...',
            linkUrl: '/writings#wold-game',
            image: theMother,
          },
        });
      }

      if (person === 'visionGame') {
        this.setState({
          visible: true,
          data: {
            title: 'Vision Game',
            description: 'The vision game is a process of making a visual representation of your dream, ideal in life, and to engage in a more conscious way with it. By playing our dream out, we find ourselves in a space which allows the heart to open up. Nature is our guide to come to clarity.',
            image: visionGame,
          },
        });
      }

      if (person === 'lifePhotography') {
        this.setState({
          visible: true,
          data: {
            title: 'Photography',
            description: 'I love to share what I capture of life.',
            link: 'Read on...',
            linkUrl: '/writings#photography',
            image: photography,
          },
        });
      }

      if (person === 'interSpecies') {
        this.setState({
          visible: true,
          data: {
            title: 'Inter Species Communication',
            quote: 'Life is life, whether in a cat, or dog or man. There is no difference there between a cat or a man. The idea of difference is a human conception for mans own advantage. — Sri Aurobindo.',
            description: 'I deeply relate to animals and plants, and love to explore the intuitive and natural art of animal communication within my possibilities.',
            link: 'Read on...',
            linkUrl: '/aikyas-short-life-story#animal-communication',
            image: interSpecies,
          },
        });
      }

      if (person === 'lionHearted') {
        this.setState({
          visible: true,
          data: {
            title: 'LionHearted Leadership',
            description: 'The rare and endangered White Lions are revered by native Africans as the most sacred of all animals. I had the privilege to meet the White Lions of Timbavati who deeply inspire me in my work. I also had the privilege to participate in the Academy of LionHearted Leadership.',
            link: 'Read on...',
            linkUrl: '/aikyas-short-life-story#the-white-lions',
            image: lions,
          },
        });
      }
    }

    hideModal(e) {
      this.setState({
        visible: false,
      });
    }

    render() {
      return (
        <Container block noFade bleed style={{ paddingTop: 50 }} className={wrapperStyleClass}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Offerings" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <HexaGrid>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'spiritualDimensions')}>
                <Image
                  src={off1}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Spiritual Dimension<br />of Auroville</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'worldGameInNature')}>
                <Image
                  src={off2}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>World Game<br />in Nature</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'flowers')}>
                <Image
                  src={off3}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Flowers and their<br /> Messages</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'sacredSpaces')}>
                <Image
                  src={off4}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Creating<br />Sacred Space</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'worldGameInSand')}>
                <Image
                  src={off5}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>World Game<br />in Sand</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'visionGame')}>
                <Image
                  src={off6}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Vision<br />Game</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'lifePhotography')}>
                <Image
                  src={off7}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Photography</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'interSpecies')}>
                <Image
                  src={off8}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Interspecies<br /> Communication</H3>
              </a>
            </Hex>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'lionHearted')}>
                <Image
                  src={off9}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>LionHearted<br /> Leadership</H3>
              </a>
            </Hex>
          </HexaGrid>

          <Modal
            footer={null}
            visible={this.state.visible}
            onCancel={this.hideModal}
            // width="66vw"
            style={{ top: '5vh' }}
            width="62.5%"
          >
            { this.state.data &&
              <div className={pageStyleClass}>
                <Image
                  src={this.state.data.image}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0, height: '40vh', width: 'auto', marginBottom: 35, background: 'transparent', display: 'block' }}
                />
                <H2>{this.state.data.title}</H2>
                { this.state.data.quote &&
                  <Paragraph><i>{this.state.data.quote}</i></Paragraph>
                }
                <Paragraph>{this.state.data.description}</Paragraph>
                { (this.state.data.linkUrl && this.state.data.link) &&
                  <Link to={this.state.data.linkUrl}>{this.state.data.link}</Link>
                }
                { (this.state.data.outLinkUrl && this.state.data.link) &&
                  <OutLink to={this.state.data.outLinkUrl}>{this.state.data.link}</OutLink>
                }
              </div>
            }
          </Modal>

          <Paragraph><i>Life is a World Game, the World Game is life. All is one. With the World Game in Auroville, we offer an opportunity to be creative, to be able to express our own individuality and our unique, living soul. The World Game is about the world and beyond, about the connection between all, all that exists on this earth and in the universe and in what transcends it.</i></Paragraph>
          <Carousel dots={false} autoplay>
            <div>
              <Image
                src={slider0}
                rawWidth={1280}
                rawHeight={1027}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider11}
                rawWidth={1280}
                rawHeight={1131}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider12}
                rawWidth={2048}
                rawHeight={1365}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider1}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider2}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider3}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
            <div>
              <Image
                src={slider4}
                rawWidth={1280}
                rawHeight={1019}
                style={{ border: 0, height: '50vh', width: 'auto', background: 'transparent', display: 'block' }}
              />
            </div>
          </Carousel>
        </Container>
      );
    }
  }

  Index.propTypes = {
    classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

// ----------------------------------------------------------------------- Export
export default Index;
