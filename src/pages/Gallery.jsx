// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';

// ----------------------------------- Components
import Link from 'gatsby-link';
import { Carousel } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { Container, Image, ImagesGrid } from '@bodhi-project/components';
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

import img1 from './assets/gallery/img1.jpeg';
import img2 from './assets/gallery/img2.jpeg';
import img4 from './assets/gallery/img4.jpeg';
import img5 from './assets/gallery/img5.jpeg';
import img6 from './assets/gallery/img6.jpeg';
import img7 from './assets/gallery/img7.jpeg';
import img8 from './assets/gallery/img8.jpeg';
import img9 from './assets/gallery/img9.jpeg';
import img10 from './assets/gallery/img10.jpeg';
import img11 from './assets/gallery/img11.jpeg';
import img12 from './assets/gallery/img12.jpeg';
import img13 from './assets/gallery/img13.jpeg';
import img14 from './assets/gallery/img14.jpeg';
import img15 from './assets/gallery/img15.jpeg';
import img16 from './assets/gallery/img16.jpeg';
import img17 from './assets/gallery/img17.jpeg';
import img18 from './assets/gallery/img18.jpeg';
import img19 from './assets/gallery/img19.jpeg';
import img20 from './assets/gallery/img20.jpeg';
import img21 from './assets/gallery/img21.jpeg';
import img22 from './assets/gallery/img22.jpeg';
import img23 from './assets/gallery/img23.jpeg';
import img24 from './assets/gallery/img24.jpeg';
import img25 from './assets/gallery/img25.jpeg';
import img26 from './assets/gallery/img26.jpeg';
import img27 from './assets/gallery/img27.jpeg';
import img28 from './assets/gallery/img28.jpeg';
import img29 from './assets/gallery/img29.jpeg';
import img30 from './assets/gallery/img30.jpeg';
import img31 from './assets/gallery/img31.jpeg';
import img32 from './assets/gallery/img32.jpeg';
import img33 from './assets/gallery/img33.jpeg';
import img34 from './assets/gallery/img34.jpeg';
import img35 from './assets/gallery/img35.jpeg';
import img36 from './assets/gallery/img36.jpeg';

const galleryPhotos = [
  { src: img1, width: 1600, height: 1067 },
  { src: img2, width: 1600, height: 1200 },
  { src: img4, width: 1600, height: 1067 },
  { src: img5, width: 1600, height: 2400 },
  { src: img6, width: 1600, height: 1067 },
  { src: img7, width: 1600, height: 1067 },
  { src: img8, width: 1600, height: 1067 },
  { src: img9, width: 1600, height: 898 },
  { src: img10, width: 1600, height: 1200 },
  { src: img11, width: 1600, height: 1200 },
  { src: img12, width: 1600, height: 1200 },
  { src: img13, width: 1600, height: 1200 },
  { src: img14, width: 1600, height: 1200 },
  { src: img15, width: 1600, height: 1200 },
  { src: img16, width: 1600, height: 1200 },
  { src: img17, width: 1600, height: 1067 },
  { src: img18, width: 1600, height: 2400 },
  { src: img19, width: 1600, height: 1067 },
  { src: img20, width: 1600, height: 1200 },
  { src: img21, width: 1600, height: 1067 },
  { src: img22, width: 1600, height: 1200 },
  { src: img23, width: 1600, height: 1239 },
  { src: img24, width: 1600, height: 2133 },
  { src: img25, width: 1600, height: 1200 },
  { src: img26, width: 1600, height: 1897 },
  { src: img27, width: 1600, height: 2133 },
  { src: img28, width: 1600, height: 1200 },
  { src: img29, width: 1600, height: 2133 },
  { src: img30, width: 1600, height: 1200 },
  { src: img31, width: 1600, height: 1200 },
  { src: img32, width: 1600, height: 1200 },
  { src: img33, width: 1600, height: 1200 },
  { src: img34, width: 1600, height: 1200 },
  { src: img35, width: 1600, height: 1200 },
  { src: img36, width: 1600, height: 1200 },
];

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
        <UpdateTitle title="Gallery" />
        <GeneralMeta data={generalMetaData} />
        <TwitterSummaryCard data={twitterSummaryCardData} />
        <OpenGraphSummary data={openGraphSummaryData} />
        <WebsiteSchema data={websiteSchemaData} />
        <WebpageSchema data={webpageSchemaData} />
        <BreadcrumbSchema data={breadcrumbSchemaData} />
        <OrganisationSchema data={organisationSchemaData} />

        <Container>
          <ImagesGrid photos={galleryPhotos} />
        </Container>
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
