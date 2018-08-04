// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
// import _ from 'lodash';
import { css } from "glamor";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import ReactPlayer from "react-player";
import {
  Container,
  Image,
  HexaGrid as HexaGridX,
  OutLink,
} from "@bodhi-project/components";
// import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
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
} from "@bodhi-project/seo";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ AntD Components
import Modal from "antd/lib/modal";
import "antd/lib/modal/style/css";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
// import featureLion from './feature-lion.jpg';
import off1 from "./assets/act1.jpg";
import off2 from "./assets/act2.jpg";
import off3 from "./assets/act3.jpg";
import off4 from "./assets/act4.jpg";
import off5 from "./assets/act5.jpg";
import off6 from "./assets/act6.jpg";
import off7 from "../../static/content-assets/portraits-from-africa/img102_600X600.jpg";
import off8 from "./assets/act8.jpg";
import off9 from "../../static/content-assets/portraits-from-africa/lions.jpg";

// Slider
// import slider0 from './assets/slider0.jpg';
// import slider11 from './assets/slider11.jpg';

// import slider1 from '../../static/content-assets/activities/activities1_1280X960.jpg';
// import slider2 from '../../static/content-assets/activities/activities2_1280X960.jpg';
// import slider3 from '../../static/content-assets/about/about4_1075X900.jpg';
// import slider4 from './assets/slider4.jpg';
// import slider12 from './assets/lions.jpeg';

// For Activities
import theMother from "./assets/onAuroville.jpg";
import worldGameInNature from "../../static/content-assets/activities/activities5_1200X900.jpg";
import flowerGroup from "./assets/wgn.jpg";
import sacredSpaces from "../../static/content-assets/nature-portraits/img59_600X449.jpg";
import visionGame from "../../static/content-assets/activities/activities16_1200X900.jpg";
import interSpecies from "../../static/content-assets/activities/activities19_1700X900.jpg";
import photography from "../../static//content-assets/nature-portraits/img19_600X308.jpg";
import lions from "./assets/slider12.jpeg";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const { Fragment } = React;
const { HexaGrid, Hex } = HexaGridX;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Article Wrapper Style
const wrapperStyle = css({});
const wrapperStyleClass = wrapperStyle.toString();

const modal = css({
  top: "5vh",
  width: "70%",
  "& .ant-modal-body": {
    padding: "0px !important",
    height: "73vh",
    overflow: "scroll",
    background: "#fcf2f1",
    borderRadius: "6px",
  },

  "@media(max-width: 768px)": {
    top: "2vh",
    width: "100%",
    "& .ant-modal-body": {
      height: "auto",
    },
  },
});
const modalClass = modal.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Hex style
const hexStyle = css({
  boxShadow: "none ",
  padding: "0px ",
  marginBottom: "1vh",
  marginRight: "1vh",

  "@media (min-width: 768px)": {
    flex: "0 0 47% ",
    maxWidth: "47% ",

    "@media (min-width: 1066px)": {
      flex: "0 0 32.3% ",
      maxWidth: "32.3% ",
    },
  },

  "& a": {
    display: "block",
    height: "100%",
    width: "100%",
  },

  "& div": {
    WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    cursor: "pointer",
    position: "relative",
    overflow: "hidden",
  },

  "& h3": {
    position: "absolute",
    width: "100%",
    margin: "0px !important",
    textAlign: "center",
    background: "#f9ba59",
    color: "#ffffff",
    bottom: -100,
    left: 0,
    WebkitTransition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    transition: "all 300ms cubic-bezier(0.78, 0.14, 0.15, 0.86)",
    paddingTop: "10px",
    paddingBottom: "10px",
  },

  "@media(max-width: 768px)": {
    "& h3": {
      position: "relative",
      bottom: 0,
    },
  },

  "& div:hover": {
    "& h3": {
      bottom: 0,
    },
  },
});
const hexStyleClass = hexStyle.toString();

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Page style
const pageStyle = css({
  padding: "20px",

  // «««««««««««««««««««««««««««««««««««««««««««««««««««««««««« HR
  "& hr": {
    border: "2px solid #363636",
    width: "40%",
    marginRight: "60%",
    "@media(min-width: 800px)": {
      border: "3px solid #363636",
    },
    "@media(min-width: 1250px)": {
      border: "4px solid #363636",
    },
  },
});
const pageStyleClass = pageStyle.toString();

// ------------------------------------------------------------------------------
// -------------------------------------------------------------------- Component
// ------------------------------------------------------------------------------
/** Index */
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

  /** showModal */
  showModal(e, person) {
    e.preventDefault();
    if (person === "spiritualDimensions") {
      this.setState({
        visible: true,
        data: {
          title: "Introduction into the Spiritual Dimension of Auroville",
          description:
            "Auroville is a laboratory for the materialization of a new consciousness. Every one is welcome who has good will and believes Human Unity is possible and aspires for it.",
          link: "Read on...",
          linkUrl: "/writings/on-auroville",
          image: theMother,
        },
      });
    }

    if (person === "worldGameInNature") {
      this.setState({
        visible: true,
        data: {
          title: "World Game in Nature",
          description:
            "Nature all around is full of messages, nature speaks, and one can learn the language. Going out on walks, listening to the messages of the birds, of the wind, whichever Elements may call us: flowers, trees, a dog, a spider, a frog, a crystal, a rock. Connecting from heart to heart. A wonderful journey into deep and magical communication with all things; everything alive ingesting love and respect for the environment, for the earth and its creatures.",
          link: "Read on...",
          linkUrl:
            "/writings/reconnecting-with-spirit-through-nature#reawakening-wonder",
          image: flowerGroup,
        },
      });
    }

    if (person === "flowers") {
      this.setState({
        visible: true,
        data: {
          title: "Flowers and their Messages",
          description:
            "Mira Alfassa, or The Mother, was in conscious contact with the spirit of the plants. She has given more than 900 spiritual significances to flowers, which means that each flower carries it's own message.",
          link: "Read on...",
          linkUrl:
            "/writings/reconnecting-with-spirit-through-nature#return-to-auroville",
          image: worldGameInNature,
        },
      });
    }

    if (person === "sacredSpaces") {
      this.setState({
        visible: true,
        data: {
          title: "Creating Sacred Space",
          quote:
            "If you have an artistic or poetic consciousness, if you love harmony, beauty, you will build there something marvelous which will tend to spring up in the material manifestation. — The Mother.",
          description:
            "I love to create an atmosphere of harmony and peace, it invites a higher level of vibration. I love gardens where one can feel the magic of nature, where everything is alive and full of secret relationships.",
          image: sacredSpaces,
        },
      });
    }

    if (person === "worldGameInSand") {
      this.setState({
        visible: true,
        data: {
          title: "World Game in Sand",
          description:
            "This activity has been an educational tool in Auroville since it's beginning, although now in Auroville it is mainly played with children, yet it was also intended for adults. The World Game encourages spontaneity, trust in oneself and being in the flow of the moment.",
          link: "Read on...",
          linkUrl: "/writings/on-world-game-in-sand",
          video: "https://www.youtube.com/watch?v=58V5_UWZLbw",
          image: theMother,
        },
      });
    }

    if (person === "visionGame") {
      this.setState({
        visible: true,
        data: {
          title: "Vision Game",
          description:
            "The vision game is a process of making a visual representation of your dream, ideal in life, and to engage in a more conscious way with it. By playing our dream out, we find ourselves in a space which allows the heart to open up. Nature is our guide to come to clarity.",
          image: visionGame,
          link: "Read on...",
          linkUrl: "/writings/vision-game",
        },
      });
    }

    if (person === "lifePhotography") {
      this.setState({
        visible: true,
        data: {
          title: "Photography",
          description: "I love to share what I capture of life.",
          link: "Watch here...",
          linkUrl: "/writings#photos",
          image: photography,
        },
      });
    }

    if (person === "interSpecies") {
      this.setState({
        visible: true,
        data: {
          title: "Inter Species Communication",
          quote:
            "Life is life, whether in a cat, or dog or man. There is no difference there between a cat or a man. The idea of difference is a human conception for mans own advantage. — Sri Aurobindo.",
          description:
            "I deeply relate to animals and plants, and love to explore the intuitive and natural art of inter-species communication within my possibilities.",
          link: "Read on...",
          linkUrl:
            "/writings/reconnecting-with-spirit-through-nature#animal-communication",
          image: interSpecies,
        },
      });
    }

    if (person === "lionHearted") {
      this.setState({
        visible: true,
        data: {
          title: "LionHearted Leadership",
          description:
            "The rare and endangered White Lions are revered by native Africans as the most sacred of all animals. I had the privilege to meet the White Lions of Timbavati who deeply inspire me in my work. I also had the privilege to participate in the Academy of LionHearted Leadership.",
          link: "Read on...",
          linkUrl:
            "/writings/reconnecting-with-spirit-through-nature#the-white-lions",
          image: lions,
        },
      });
    }
  }

  /** hideModal */
  hideModal(e) {
    this.setState({
      visible: false,
    });
  }

  /** render */
  render() {
    return (
      <Container
        block
        noFade
        bleed
        style={{
          paddingTop: "5vh",
          paddingBottom: "5vh",
          position: "relative",
        }}
        className={wrapperStyleClass}
      >
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title="Offerings" />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <HexaGrid>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "spiritualDimensions")}>
              <Image
                src={off1}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                Spiritual Dimension<br />of Auroville
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "worldGameInNature")}>
              <Image
                src={off2}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                World Game<br />in Nature
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "flowers")}>
              <Image
                src={off3}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                Flowers and their<br /> Messages
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "sacredSpaces")}>
              <Image
                src={off4}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                Creating<br />Sacred Space
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "worldGameInSand")}>
              <Image
                src={off5}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                World Game<br />in Sand
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "visionGame")}>
              <Image
                src={off6}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                Vision<br />Game
              </h3>
            </a>
          </Hex>
        </HexaGrid>

        <h2 style={{ marginTop: 40, marginBottom: 20 }}>Other Interests</h2>
        <HexaGrid>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "lifePhotography")}>
              <Image
                src={off7}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>Photography</h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "interSpecies")}>
              <Image
                src={off8}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                Interspecies<br /> Communication
              </h3>
            </a>
          </Hex>
          <Hex className={hexStyleClass}>
            <a href="#" onClick={e => this.showModal(e, "lionHearted")}>
              <Image
                src={off9}
                rawWidth={900}
                rawHeight={900}
                style={{ border: 0, width: "100%", height: "auto" }}
              />
              <h3 style={{ lineHeight: 1 }}>
                LionHearted<br /> Leadership
              </h3>
            </a>
          </Hex>
        </HexaGrid>

        <Modal
          footer={null}
          visible={this.state.visible}
          onCancel={this.hideModal}
          className={modalClass}
        >
          {this.state.data && (
            <div className={pageStyleClass}>
              {this.state.data.video ? (
                <ReactPlayer
                  url={this.state.data.video}
                  height="300px"
                  width="400px"
                  style={{ marginBottom: 20 }}
                />
              ) : (
                <Image
                  src={this.state.data.image}
                  rawWidth={900}
                  rawHeight={900}
                  style={{
                    border: 0,
                    height: "38vh",
                    width: "auto",
                    marginBottom: 15,
                    background: "transparent",
                    display: "block",
                  }}
                />
              )}
              <h2 style={{ marginBottom: 16 }}>{this.state.data.title}</h2>
              <p style={{ marginTop: 0 }}>
                {this.state.data.linkUrl &&
                  this.state.data.link && (
                    <Fragment>
                      <Link to={this.state.data.linkUrl}>
                        {this.state.data.link}
                      </Link>
                    </Fragment>
                  )}
                {this.state.data.outLinkUrl &&
                  this.state.data.link && (
                    <Fragment>
                      <OutLink to={this.state.data.outLinkUrl}>
                        {this.state.data.link}
                      </OutLink>
                    </Fragment>
                  )}
              </p>
              {this.state.data.quote && (
                <p style={{ marginTop: 0 }}>
                  <i>{this.state.data.quote}</i>
                </p>
              )}
              <p style={{ marginTop: 0 }}>{this.state.data.description}</p>
            </div>
          )}
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
