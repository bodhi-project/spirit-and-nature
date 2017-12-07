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
            <H2 className="stash">Spirit & Nature</H2>
            <Paragraph>"Nature and Spirit" in Auroville is a space dedicated to the experience of Nature and Spirit — Nature as a teacher of multiplicity of creative expressions of Spirit.</Paragraph>
            <Paragraph>We offer space to explore beauty and sacredness with the aim of finding purpose.</Paragraph>
            <br />
            <Paragraph><i>Today, we tend to forget the sacred that is in everything. I feel my mission is to bring glimpses of remembrance of the vibrant aliveness and wisdom of all that surrounds us; and to build together, with a Lion Heart, a "New World" which is waiting to manifest.</i> — Aikya</Paragraph>
            <H2 mask="h5">Activities</H2>
            <Paragraph>Aikya offeres the following activities to participants.</Paragraph><br />
            <Ol>
              <li>World Game.</li>
              <li>Nature and Sense Awareness Game.</li>
              <li>Flowers and their Spiritual Message.</li>
              <li>Mandalas.</li>
              <li>Guided meditations.</li>
              <li>Dreamboards.</li>
              <li>Introduction to the Spiritual Dimension of Auroville.</li>
              <li>13 laws of Lion Hearted Leadership.</li>
            </Ol>
            <br /><br />
            <Paragraph>Spirit and Nature is registered as an acitivity under the Arts Services in Auroville.</Paragraph>
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
