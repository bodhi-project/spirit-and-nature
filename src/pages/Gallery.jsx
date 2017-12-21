// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import { flow as compose } from 'lodash';

// ----------------------------------- Components
// import Link from 'gatsby-link';
// import { Carousel } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
import { Container, Images } from '@bodhi-project/components';
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

import img1 from './assets/gallery/img1.jpg';
import img2 from './assets/gallery/img2.jpg';
import img3 from './assets/gallery/img3.jpg';
import img4 from './assets/gallery/img4.jpeg';
import img5 from './assets/gallery/img5.jpeg';
import img6 from './assets/gallery/img6.jpeg';
import img7 from './assets/gallery/img7.jpg';
import img8 from './assets/gallery/img8.jpeg';
import img9 from './assets/gallery/img9.jpg';
import img10 from './assets/gallery/img10.jpeg';
import img11 from './assets/gallery/img11.jpg';
import img12 from './assets/gallery/img12.jpg';
import img13 from './assets/gallery/img13.jpg';
import img14 from './assets/gallery/img14.jpg';
import img15 from './assets/gallery/img15.jpeg';
import img16 from './assets/gallery/img16.jpeg';
import img17 from './assets/gallery/img17.jpg';
import img18 from './assets/gallery/img18.jpg';
import img19 from './assets/gallery/img19.jpg';
import img20 from './assets/gallery/img20.jpg';
import img21 from './assets/gallery/img21.jpg';
import img22 from './assets/gallery/img22.jpg';
import img23 from './assets/gallery/img23.jpeg';
import img24 from './assets/gallery/img24.jpg';
import img25 from './assets/gallery/img25.jpg';
import img26 from './assets/gallery/img26.jpg';
import img27 from './assets/gallery/img27.jpg';
import img28 from './assets/gallery/img28.jpg';
import img29 from './assets/gallery/img29.jpg';
import img30 from './assets/gallery/img30.jpg';
import img31 from './assets/gallery/img31.jpeg';
import img32 from './assets/gallery/img32.jpeg';
import img33 from './assets/gallery/img33.jpeg';
import img34 from './assets/gallery/img34.jpeg';
import img35 from './assets/gallery/img35.jpg';
import img36 from './assets/gallery/img36.jpg';
import img37 from './assets/gallery/img37.jpg';
import img38 from './assets/gallery/img38.jpg';
import img39 from './assets/gallery/img39.jpeg';
import img40 from './assets/gallery/img40.jpg';
import img41 from './assets/gallery/img41.jpeg';
import img42 from './assets/gallery/img42.jpg';
import img43 from './assets/gallery/img43.jpg';
import img44 from './assets/gallery/img44.jpeg';
import img45 from './assets/gallery/img45.jpg';
import img46 from './assets/gallery/img46.jpg';
import img47 from './assets/gallery/img47.jpeg';
import img48 from './assets/gallery/img48.jpg';

const galleryPhotos = [
  { src: img2, width: 900, height: 857 },
  { src: img3, width: 900, height: 355 },
  { src: img4, width: 900, height: 600 },
  { src: img5, width: 900, height: 798 },
  { src: img6, width: 900, height: 600 },
  { src: img1, width: 900, height: 600 },
  { src: img7, width: 900, height: 675 },
  { src: img8, width: 900, height: 743 },
  { src: img9, width: 900, height: 600 },
  { src: img10, width: 900, height: 717 },
  { src: img11, width: 900, height: 1200 },
  { src: img12, width: 900, height: 675 },
  { src: img13, width: 900, height: 602 },
  { src: img14, width: 900, height: 900 },
  { src: img15, width: 900, height: 675 },
  { src: img16, width: 900, height: 631 },
  { src: img17, width: 900, height: 675 },
  { src: img18, width: 900, height: 672 },
  { src: img19, width: 900, height: 675 },
  { src: img20, width: 900, height: 714 },
  { src: img21, width: 900, height: 675 },
  { src: img22, width: 900, height: 503 },
  { src: img23, width: 900, height: 1350 },
  { src: img24, width: 900, height: 675 },
  { src: img25, width: 900, height: 711 },
  { src: img26, width: 900, height: 675 },
  { src: img27, width: 900, height: 675 },
  { src: img28, width: 900, height: 1263 },
  { src: img29, width: 900, height: 675 },
  { src: img30, width: 900, height: 1200 },
  { src: img31, width: 900, height: 675 },
  { src: img32, width: 900, height: 675 },
  { src: img33, width: 900, height: 675 },
  { src: img34, width: 900, height: 553 },
  { src: img35, width: 900, height: 675 },
  { src: img36, width: 900, height: 675 },
  { src: img37, width: 900, height: 677 },
  { src: img38, width: 900, height: 676 },
  { src: img39, width: 900, height: 600 },
  { src: img40, width: 900, height: 824 },
  { src: img41, width: 900, height: 600 },
  { src: img42, width: 900, height: 675 },
  { src: img43, width: 900, height: 557 },
  { src: img44, width: 900, height: 675 },
  { src: img45, width: 900, height: 555 },
  { src: img46, width: 900, height: 252 },
  { src: img47, width: 900, height: 543 },
  { src: img48, width: 900, height: 602 },
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
          <Images photos={galleryPhotos} columns={3} />
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
