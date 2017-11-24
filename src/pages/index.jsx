// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';

// ----------------------------------- Components
import Link from 'gatsby-link';
import { Row, Col, Carousel } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { Container, Image, HexaGrid as HexaGridX } from '@bodhi-project/components';
import { injectSheet } from '@bodhi-project/utilities';
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebsiteSchema,
  WebpageSchema,
  BreadcrumbSchema,
  OrganisationSchema,
} from '@bodhi-project/seo';

import indexImage from './index.jpg';
import banner1 from './banner1.jpg';
import banner2 from './banner2.jpg';
import banner3 from './banner3.jpg';

import rightArrow from './rightArrow.png';
import leftArrow from './leftArrow.png';

const { HexaGrid, Hex } = HexaGridX;

// ----------------------------------------------------------------------- SEO
const generalMetaData = {
  description: "blah blah blah.",
  keywords: 'blah blah blah.',
  image: indexImage,
};

const twitterSummaryCardData = {
  title: 'blah blah blah',
  description: "blah blah blah.",
  image: indexImage,
};

const openGraphSummaryData = {
  siteName: 'blah blah blah',
  url: 'https://www.walkofhopeauroville.org',
  title: 'Launch Kit',
  description: "blah blah blah.",
  image: indexImage,
};

const websiteSchemaData = {
  url: 'https://www.walkofhopeauroville.org',
  name: 'blah blah blah',
  description: "blah blah blah.",
  author: 'Bodhi Project',
  publisher: 'Bodhi Project',
  image: indexImage,
};

const webpageSchemaData = {
  url: 'https://www.walkofhopeauroville.org',
  name: 'Launch Kit',
  description: "blah blah blah.",
  author: 'Bodhi Project',
  publisher: 'Bodhi Project',
  image: indexImage,
};

const breadcrumbSchemaData = {
  breadcrumbs: [
    { name: 'Home', url: 'https://www.walkofhopeauroville.org' },
  ],
};

const organisationSchemaData = {
  name: 'Bodhi Project',
  legalName: 'Bodhi Project',
  url: 'https://www.bodhiproject.org/',
  logo: '',
  foundingDate: '2017',
  founders: ['Pranav Kumar', 'Mangal Varshney', 'Dr. Brijesh Kumar'],
  streetAddress: 'City Center',
  addressLocality: 'Kotagiri',
  addressRegion: 'Tamil Nadu',
  postalCode: '123456',
  addressCountry: 'India',
  telephone: ['na'],
  email: 'hello@bodhiproject.org',
  sameAs: ['http://instagram.com/bodhisystems'],
  image: indexImage,
};

// ----------------------------------------------------------------------- Style
const styles = {
  index: {
    '& .mission': {
      // height: '50vh',
      // width: 'auto',
    },
  },
};

// ----------------------------------------------------------------------- Component
/**
  * IndexPage
  */
class IndexPage extends React.Component {
  render() {

    return (
      <Container bleed style={{ padding: 0 }} className={this.props.classes.index}>
        {/* SEO */}
        <UpdateTitle title="Home" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebsiteSchema data={websiteSchemaData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        {/* Index slider */}
        <Carousel>
          <div>
            <Image
              src={banner1}
              rawWidth={1910}
              rawHeight={1000}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0, background: 'transparent' }}
            />
          </div>
          <div>
            <Image
              src={banner2}
              rawWidth={1910}
              rawHeight={1000}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0 }}
            />
          </div>
          <div>
            <Image
              src={banner3}
              rawWidth={1910}
              rawHeight={1000}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0 }}
            />
          </div>
        </Carousel>

        <div style={{ background: '#F0EDA2' }}>
          <Container>
            <Row>
              <Col span={15}>
                <p>About...</p>
              </Col>
              <Col span={9}>
                <p>Links...</p>
              </Col>
            </Row>
          </Container>
        </div>

        <div style={{ background: '#F0E0A2' }}>
          <Container>
            <p className="text-center" >About</p>
            <div style={{ maxWidth: '62%', margin: 'auto' }}>
              <Carousel
                dots={false}
                effect="fade"
                arrows
                prevArrow={<div><Image src={leftArrow} rawHeight={600} rawWidth={600} style={{ border: 0, background: 'transparent', height: 60, width: 60, left: -30, top: -15 }} /></div>}
                nextArrow={<div><Image src={rightArrow} rawHeight={600} rawWidth={600} style={{ border: 0, background: 'transparent', height: 60, width: 60, top: -15 }} /></div>}
              >
                <div>
                  <Image
                    src={banner1}
                    rawWidth={1910}
                    rawHeight={1000}
                    loader="gradient"
                    gradientPreset="default"
                    style={{ border: 0 }}
                  />
                  <p>PAST AND FUTURE - MAKING BRIDGES</p>
                </div>
                <div>
                  <Image
                    src={banner2}
                    rawWidth={1910}
                    rawHeight={1000}
                    loader="gradient"
                    gradientPreset="default"
                    style={{ border: 0 }}
                  />
                  <p>PROMOTING IMAGINATION, CREATIVITY AND INTUITIVE SENSE</p>
                </div>
                <div>
                  <Image
                    src={banner3}
                    rawWidth={1910}
                    rawHeight={1000}
                    loader="gradient"
                    gradientPreset="default"
                    style={{ border: 0 }}
                  />
                  <p>NATURE AWARENESS - RECONNECT WITH NATURE WITHIN/WITHOUT</p>
                </div>
              </Carousel>
            </div>
          </Container>
        </div>

        <div style={{ background: '#D4D2E3' }}>
          <p className="text-center" >Featured Writings</p>
          <Container>
            <HexaGrid className={this.props.classes.hexaGrid}>
              <Hex>
                <h2>Featured Post 1</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
              <Hex>
                <h2>Featured Post 2</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
              <Hex>
                <h2>Featured Post 3</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
              <Hex>
                <h2>Featured Post 4</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
              <Hex>
                <h2>Featured Post 5</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
              <Hex>
                <h2>Featured Post 6</h2>
                <p>Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah.</p>
              </Hex>
            </HexaGrid>
          </Container>
        </div>
      </Container>
    );
  }
}

IndexPage.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
};

// ----------------------------------------------------------------------- Compose Component
/**
  * ComposedComponent - Compose component ala FP style.
  */
const ComposedComponent = compose([
  injectSheet(styles), // Add style
])(IndexPage);

// ----------------------------------------------------------------------- Export
export default ComposedComponent;
