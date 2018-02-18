// ----------------------------------------------------------------------- Imports
import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
// import PropTypes from 'prop-types';
// import { flow as compose } from 'lodash';

import { navigateTo } from 'gatsby-link';

const { Fragment } = React;

// ----------------------------------------------------------------------- Component
/**
 * IndexPage
 */
class IndexPage extends React.Component {
  /**
   * componentDidMount
   */
  componentDidMount() {
    navigateTo('/');
  }

  render() {
    return <Fragment>&nbsp;</Fragment>;
  }
}

IndexPage.propTypes = {};

// ----------------------------------------------------------------------- Export
export default IndexPage;
