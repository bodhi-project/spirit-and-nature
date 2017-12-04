// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
// import { flow as compose } from 'lodash';
// import classNames from 'classnames';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
// import Link from 'gatsby-link';
import { Row, Col } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { Container, Image } from '@bodhi-project/components';
// import { injectSheet } from '@bodhi-project/utilities';
import { FirstVariationOnModernType } from '@bodhi-project/typography';
import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
// import logo from './logoWithText.png';
import aboutMoreX1 from './assets/about/aboutMoreX1.jpg';
import aboutMoreX2 from './assets/about/aboutMoreX2.jpg';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO
import {
  // --------------- Basic
  UpdateTitle,
  GeneralMeta,
  // --------------- Twitter
  TwitterSummaryCard,
  // --------------- Open Graph
  OpenGraphSummary,
  // --------------- Schema.org JSON-LD
  WebpageSchema,
  BreadcrumbSchema,
} from '@bodhi-project/seo';

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Type
const {
  H2,
  H3,
  Paragraph,
  Ol,
} = FirstVariationOnModernType;

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Other abstractions

// ----------------------------------------------------------------------- SEO
// const generalMetaData = {
//   description: 'Walk of Hope Auroville is led by Sri M - a spiritual guide, social reformer and educationist, and hosted by "Restorative Auroville". We hope to inspire a deep inner inquiry, as fellow human beings living together in and around Auroville.',
//   keywords: 'walk of hope, walk of hope in auroville, walk of hope 2015, sri m, kriya yoga, auroville',
//   // image: openGraphBanner,
// };

// const twitterSummaryCardData = {
//   title: 'About Walk of Hope, Sri M, Restorative Auroville, and more...',
//   description: generalMetaData.description,
//   // image: twitterBanner,
// };

// const openGraphSummaryData = {
//   siteName: 'Walk of Hope in Auroville, 2018',
//   url: 'https://www.walkofhopeauroville.org/about',
//   title: twitterSummaryCardData.title,
//   description: generalMetaData.description,
//   // image: openGraphBanner,
// };

// const webpageSchemaData = {
//   url: 'https://www.walkofhopeauroville.org/about',
//   name: twitterSummaryCardData.title,
//   description: generalMetaData.description,
//   author: 'Laura Joy',
//   publisher: 'Restorative Auroville',
//   // image: openGraphBanner,
// };

// const breadcrumbSchemaData = {
//   breadcrumbs: [
//     { name: 'Home', url: 'https://www.walkofhopeauroville.org/' },
//     { name: 'Home', url: 'https://www.walkofhopeauroville.org/about' },
//   ],
// };

// ----------------------------------------------------------------------- Style
/**
  <GeneralMeta data={generalMetaData} />
  <TwitterSummaryCard data={twitterSummaryCardData} />
  <OpenGraphSummary data={openGraphSummaryData} />
  <WebpageSchema data={webpageSchemaData} />
  <BreadcrumbSchema data={breadcrumbSchemaData} /> 
*/
class AboutPage extends React.Component {
  render() {
    return (
      <Container bleed>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title="About" />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        <Row type="flex" justify="space-around">
          <Col span={12}>
            <H2>Video Gallery</H2>
          </Col>
          <Col span={6}>
            <H3 mask="h6" style={{ marginTop: 0 }}>Further Links...</H3>
            <Image
              src={aboutMoreX1}
              alt="Read more..."
              rawWidth={900}
              rawHeight={900}
              loader="gradient"
              style={{ border: 0, marginBottom: '2em' }}
            />
            <Image 
              src={aboutMoreX2}
              alt="Read more.."
              rawWidth={900}
              rawHeight={900}
              loader="gradient"
              style={{ border: 0, marginBottom: '2em' }}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AboutPage;
