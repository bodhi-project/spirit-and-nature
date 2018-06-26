// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
import React from "react"; // eslint-disable-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import _ from "lodash";
import { css } from "glamor";
import moment from "moment";

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
import Link from "gatsby-link";
import { Image, Container } from "@bodhi-project/components";
import {
  Page,
  Section,
  Article,
  Header,
  Footer,
} from "@bodhi-project/semantic-webflow";

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

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
const { Fragment } = React;

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Article Wrapper Style
const articleWrapperStyle = css({
  "& h2": {
    marginTop: 64,
  },
  "& article": {
    marginBottom: 20,
  },

  "& article:last-child": {
    border: "0 !important",
  },

  "& .display": {
    display: "flex",
    flexFlow: "row wrap",
    alignItems: "flex-start",

    "& .banner": {
      flex: "12 1 0%",
    },

    "& .abstract": {
      flex: "15 1 0%",
      padding: "0px 0px 0px 50px",
    },
  },
  "@media(max-width: 768px)": {
    "& .display": {
      display: "block",
      "& .banner": {
        display: "block",
      },
      "& .abstract": {
        display: "block",
        padding: "0px",
      },
    },
  },
});

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
     * state - Track the interface configuration and the height of the component.
     */
    this.state = {
      filter: "all",
    };

    this.filter = this.filter.bind(this);
  }

  /**
   * openLightbox - Standard renderer.
   */
  filter(e, category) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({ filter: category });
  }

  /** render */
  render() {
    const postEdges = this.props.data.allMarkdownRemark.edges;
    const categories = _
      .uniq(_.map(postEdges, "node.frontmatter.category"))
      .sort((a, b) => {
        const A = a.toLowerCase();
        const B = b.toLowerCase();
        // sort string ascending
        if (A < B) return -1;
        if (A > B) return 1;
        // default return value (no sorting)
        return 0;
      });

    return (
      <Container block noFade bleed>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title="Writings" />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        {_.map(categories, category => (
          <div className={articleWrapperStyle.toString()}>
            <h2 id={_.kebabCase(_.toLower(_.trim(category)))}>{category}</h2>
            {_.map(postEdges, ({ node }) => (
              <Fragment>
                {node.frontmatter.category === category && (
                  <Article key={node.fields.route}>
                    {" "}
                    {/*  */}
                    <div className="display">
                      <div className="banner">
                        <Image
                          src={node.frontmatter.cover}
                          rawWidth={1440}
                          rawHeight={900}
                          loader="gradient"
                          style={{ border: 0 }}
                        />
                      </div>
                      <div className="abstract">
                        <Header>
                          <Link to={node.fields.route}>
                            <h3 style={{ marginTop: 0, color: "#9d639d" }}>
                              {node.frontmatter.title}
                            </h3>
                          </Link>{" "}
                          {/*  */}
                          <p>{node.frontmatter.abstract}</p>
                          <p style={{ textIndent: 0 }}>
                            <small>
                              <i>
                                Published on{" "}
                                {moment(node.frontmatter.date).format(
                                  "dddd, MMMM Do YYYY",
                                )}{" "}
                                ({moment(node.frontmatter.date).fromNow()})
                              </i>
                            </small>
                          </p>
                        </Header>
                      </div>
                    </div>
                  </Article>
                )}
              </Fragment>
            ))}
          </div>
        ))}
        <p style={{ textAlign: "center" }}>~ fin ~</p>
      </Container>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// ----------------------------------------------------------------------------
// ---------------------------------------------------------------------- Query
// ----------------------------------------------------------------------------
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query WritingsQuery {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { type: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            route
            humanDate
            elapsed
          }
          frontmatter {
            abstract
            title
            cover
            date
            category
          }
        }
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------- Compose Component
/**
 * ComposedComponent - Compose component ala FP style.
 */
// const ComposedComponent = compose([

// ])(Index);

// ----------------------------------------------------------------------- Export
export default Index;
