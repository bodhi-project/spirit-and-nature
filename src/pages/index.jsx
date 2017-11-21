// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';

// ----------------------------------- Components
import Link from 'gatsby-link';
import { MotionFade, Image } from '@bodhi-project/components';
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

// ----------------------------------------------------------------------- SEO
const generalMetaData = {
  description: "blah blah blah.",
  keywords: 'blah blah blah.',
  image: indexImage,
};

const twitterSummaryCardData = {
  title: 'Walk of Hope in Auroville 2018',
  description: "blah blah blah.",
  image: indexImage,
};

const openGraphSummaryData = {
  siteName: 'Launch Kit',
  url: 'https://www.walkofhopeauroville.org',
  title: 'Launch Kit',
  description: "blah blah blah.",
  image: indexImage,
};

const websiteSchemaData = {
  url: 'https://www.walkofhopeauroville.org',
  name: 'Launch Kit',
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

  },
};

// ----------------------------------------------------------------------- Component
/**
  * IndexPage
  */
class IndexPage extends React.Component {
  render() {
    return (
      <div>
        {/* SEO */}
        <UpdateTitle title="Home" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebsiteSchema data={websiteSchemaData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        <MotionFade>
          <div className={this.props.classes.index}>
            <Image
              src={indexImage}
              rawWidth={1440}
              rawHeight={900}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0 }}
            />
            <section className="tiny">
              <h1>Launch Kit</h1>
              <p>Coming Soon...</p>
            </section>
          </div>
        </MotionFade>
      </div>
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
