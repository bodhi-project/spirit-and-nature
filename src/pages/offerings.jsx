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
  import off6 from './assets/off6.jpg';
  import off7 from './assets/off7.jpg';
  import off8 from './assets/act8.jpg';
  import off9 from './assets/off7.jpg';

  // Slider
  import slider1 from '../../static/content-assets/activities/activities1_1280X960.jpg';
  import slider2 from '../../static/content-assets/activities/activities2_1280X960.jpg';
  import slider3 from '../../static/content-assets/about/about4_1075X900.jpg';

  // For Activities
  import theMother from '../../static/content-assets/activities/activities4_900X900.jpg';
  import worldGameInNature from '../../static/content-assets/activities/activities5_1200X900.jpg';
  import flowerGroup from '../../static/content-assets/activities/activities9_1200X700.jpg';
  import sacredSpaces from '../../static/content-assets/activities/activities101_1200X700.jpg';
  import visionGame from '../../static/content-assets/activities/activities16_1200X900.jpg';
  import interSpecies from '../../static/content-assets/activities/activities19_1700X900.jpg';

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
    border: '3px solid #f7d2ae !important',
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
      background: '#f7d2ae',
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
            description: 'In a space of timelesness which allows to listen behind the appearances, we explore Auroville and have glimpses of the history and purpose of Auroville and we look at the life we live here.',
            link: 'Read more about Auroville...',
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
            description: 'Nature all around is full of messages, nature speaks, and one can learn the language. Going out on walks, listening to the messages of the birds, of the wind, whichever Elements may call us: flowers, trees, a dog, a spider, a frog, a crystal, a rock. Connecting from heart to heart. A wonderful journey into deep and magical communication with all things; everything alive ingesting love and respect for the environment, for the earth and its creatures. Sacred communication. Auroville grew out of a barren plateau, all the trees were planted by early pioneers; now we enjoy a young forest. A deep connection to Nature can help the individual come to the heart of things, to a growing love, already involved in all creation, to the One in all. I offer a space and time together to explore nature in concentration, deep listening and play. Imagination, creativity, intuition are welcomed into the space.',
            link: 'Read more about World Game in Nature...',
            linkUrl: '/on-auroville',
            image: worldGameInNature,
          },
        });
      }

      if (person === 'flowers') {
        this.setState({
          visible: true,
          data: {
            title: 'Flowers and their Messages',
            description: 'Mira Alfassa, or the mother, was in conscious contact with the spirit of the plants. She has given more than 900 spiritual significances to flowers, which means that each flower carries it\'s own message. Through small games, cards, guided relaxation and being with the flowers we explore this beautiful psychic world of the flowers.',
            link: 'Read more about the spiritual significances of flowers...',
            outLinkUrl: 'http://www.blossomlikeaflower.com/',
            image: flowerGroup,
          },
        });
      }

      if (person === 'sacredSpaces') {
        this.setState({
          visible: true,
          data: {
            title: 'Creating Sacred Space',
            description: 'In the world of forms a violation of Beauty is as great a fault as a violation of Truth in the world of ideas. For Beauty is the worship that Nature offers to the supreme Master of the universe; Beauty is the divine language in form. And a consciousness of the Divine that is not translated outwardly by an understanding and expression of Beauty would be an incomplete consciousness. — The MotherI cherish beauty in all aspects of life. Not just an external beauty but specially a beauty that comes from the truth within. I offer my time to explore with you how to create sacred spaces.',
            link: 'Read more about creating sacred spaces...',
            linkUrl: '/creating-sacred-spaces',
            image: sacredSpaces,
          },
        });
      }

      if (person === 'worldGameInSand') {
        this.setState({
          visible: true,
          data: {
            title: 'World Game in Sand',
            description: 'The World Game, also known as Sandplay, is a wonderful way to know yourself without the use of words. You are given a box of sand and free access to unusual and appealing objects. Music, flowering gardens, paintings, as well as the presence of the quiet observant facilitator contributes to creating a concentrated atmosphere in which you can tell a story in the sand or express your dream world using a symbolic language.',
            link: 'Read more about World Game in Sand...',
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
            description: 'The vision game is a one day process of making a visual representation of your dream, ideal in life, and to engage in a more conscious way with it. By playing our dream out, we find ourselves in a space which allows the heart to open up. Nature is our guide to come to clarity.',
            image: visionGame,
          },
        });
      }

      if (person === 'lifePhotography') {
        this.setState({
          visible: true,
          data: {
            title: 'Life Photography',
            description: 'blah blah blah.',
            link: 'Read more...',
            linkUrl: '/writings#photography',
            image: theMother,
          },
        });
      }

      if (person === 'interSpecies') {
        this.setState({
          visible: true,
          data: {
            title: 'Inter Species Communication',
            description: 'Life is life, whether in a cat, or dog or man. There is no difference there between a cat or a man. The idea of difference is a human conception for mans own advantage. — Sri Aurobindo. I deeply relate to animals and plants, and love to explore the beautiful intuitive and natural art of animal communication within my possibilities.',
            link: 'Read more about inter-species communication...',
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
            description: 'The rare and endangered White Lions are revered by native Africans as the most sacred of all animals. I had the privilege to meet the last remaining white Lions in Timbavati who deeply inspire me in my work. I also had the privilege to participate in an intensive training of the 13 Laws of LionHearted Leadership and I’m now an accredited practitioner since December 2017.',
            link: 'Read more...',
            linkUrl: '/aikyas-short-life-story#the-white-lions',
            image: theMother,
          },
        });
      }
    }

    hideModal(e) {
      console.log(e);
      this.setState({
        visible: false,
      });
    }

    render() {
      console.log(this.state);
      return (
        <Container block noFade bleed style={{ paddingTop: 50 }} className={wrapperStyleClass}>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
          <UpdateTitle title="Offerings" />

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
          <H2>Offerings</H2>
          <Paragraph>Life is a World Game, the World Game is life. All is one. With the World Game in Auroville, we offer an opportunity to be creative, to be able to express our own individuality and our unique, living soul. The World Game is about the world and beyond, about the connection between all, all that exists on this earth and in the universe and in what transcends it.</Paragraph>
          <Carousel dots={false} autoplay>
            <div>
              <Image
                src={slider1}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0 }}
              />
            </div>
            <div>
              <Image
                src={slider2}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0 }}
              />
            </div>
            <div>
              <Image
                src={slider3}
                rawWidth={1280}
                rawHeight={960}
                style={{ border: 0 }}
              />
            </div>
          </Carousel>
          <Paragraph>
            We offer a number of activities for children and adults:
          </Paragraph>
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
          </HexaGrid>

          <H2>Other Interests</H2>
          <HexaGrid>
            <Hex className={hexStyleClass}>
              <a href="#" onClick={(e) => this.showModal(e, 'lifePhotography')}>
                <Image
                  src={off7}
                  rawWidth={900}
                  rawHeight={900}
                  style={{ border: 0 }}
                />
                <H3 style={{ lineHeight: 1 }}>Life<br />Photography</H3>
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
                  style={{ border: 0, maxWidth: '500px', height: 'auto', marginBottom: 10 }}
                />
                <H2>{this.state.data.title}</H2>
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
        </Container>
      );
    }
  }

  Index.propTypes = {
    classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
  };

// ----------------------------------------------------------------------- Export
export default Index;
