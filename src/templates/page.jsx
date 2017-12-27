// ------------------------------------------------------------------------------
// ---------------------------------------------------------------------- Imports
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Libraries
  import React from 'react'; // eslint-disable-line import/no-extraneous-dependencies
  import PropTypes from 'prop-types';
  import _ from 'lodash';
  import { css } from 'glamor';
  import moment from 'moment';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Components
  import Link from 'gatsby-link';
  import { Row, Col, Layout, Tree, Icon, Popover } from 'antd'; // eslint-disable-line import/no-extraneous-dependencies
  import { Image, Images, Container, OutLink } from '@bodhi-project/components';
  import { Elements, typeComposite } from '@bodhi-project/typography';
  import { Page, Section, Article, Header, Footer } from '@bodhi-project/semantic-webflow';
  import ReactPlayer from 'react-player';

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

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Images
  // import featureLion from './feature-lion.jpg';

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Abstract stuff
  const { Fragment } = React;
  const { H1, H2, H3, H4, H5, H6, Paragraph, Ul, Ol } = Elements;
  const { getType } = typeComposite;
  const type = getType('eih3wnu');
  const { kit, modularScale } = type;
  const { TreeNode } = Tree;
  // console.log(type);

// ------------------------------------------------------------------------------
// ----------------------------------------------------------------------- Styles
// ------------------------------------------------------------------------------
  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Style for Markdown ---> React
  const markdownStyles = css({
    '& h2:first-child, h3:first-child, h4:first-child, h5:first-child, h6:first-child': {
      marginTop: '0 !important',
    },
  });

  // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Styles for stuff on the side
  const sideStyles = css({
    '& .ant-tree li': {
      marginBottom: '0px !important',
    },
    '& .ant-tree.ant-tree-show-line li:not(:last-child):before': {
      borderLeftColor: '#363636 !important',
    },
    '& .ant-tree-node-content-wrapper': {
      marginBottom: `${(modularScale.base.px * 0.375) / 16}em !important`,
    },
    '& .ant-tree.ant-tree-show-line li span.ant-tree-switcher': {
      color: '#363636 !important',
      background: '#fff6ec !important',
    },
    '& .ant-tree-title': {
      fontSize: modularScale.base.em,
      fontFamily: kit.fontFamilies.paragraph,
      fontStyle: 'normal',
      fontWeight: '400',
      marginBottom: 0,
      marginTop: 0,
      color: 'inherit',
    },
  });

// ----------------------------------------------------------------------- Tree Parser
  const parseHeading = (astElement, headings) => {
    switch(astElement.depth) {
      case 1:
        return <H2 key={`${headings.first}`}>{astElement.children[0].value}</H2>
      case 2:
        return <H3 key={`${headings.first}.${headings.second}`}>{astElement.children[0].value}</H3>
      case 3:
        return <H4 key={`${headings.first}.${headings.second}.${headings.third}`}>{astElement.children[0].value}</H4>
      case 4:
        return <H5 key={`${headings.first}.${headings.second}.${headings.third}.${headings.fourth}`}>{astElement.children[0].value}</H5>
      case 5:
        return <H6 key={`${headings.first}.${headings.second}.${headings.third}.${headings.fourth}.${headings.fifth}`}>{astElement.children[0].value}</H6>
      default:
        return <Fragment />
    }
  };

  const trackHeadings = (astElement, headings) => {
    switch(astElement.depth) {
      case 1:
        return {...headings, ...{first: headings.first + 1 }};
      case 2:
        return {...headings, ...{second: headings.second + 1 }};
      case 3:
        return {...headings, ...{third: headings.third + 1 }};
      case 4:
        return {...headings, ...{fourth: headings.fourth + 1 }};
      case 5:
        return {...headings, ...{fifth: headings.fifth + 1 }};
      default:
        return {...headings};
    }
  };

  const extractWidthHeight = imageName => {
    let returnDimensions = {width: 900, height: 900}
    if (imageName.includes('_') && imageName.includes('X')) {
      const xy = (_.split(_.split(_.split(imageName, '_')[1], '.')[0], 'X'));
      returnDimensions = {width: parseInt(xy[0], 10), height: parseInt(xy[1], 10)};
    }
    return returnDimensions;
  };

  const parseGallery = gallery => {
    const photoGallery = gallery;
    let soloImage = null;
    if (gallery.length % 2 !== 0) {
      soloImage = gallery.pop();
    }
    return (
      <div style={{ marginBottom: modularScale.base.em }}>
        <Images
          photos={photoGallery}
          columns={2}
          loader="gradient"
        />
        { soloImage &&
          <Image 
            src={soloImage.src}
            rawWidth={soloImage.width}
            rawHeight={soloImage.height}
            loader="gradient"
            style={{ border: 0 }}
          />
        }
      </div>
    );
  }

  // const stitchParagraph = element => {

  // }

  const parseLink = element => {
    const linkElement = element.children[0];
    let url = '/';
    let text = 'Read more.';
    let frag = <Fragment />;

    if (linkElement.type === 'linkReference') {
      url = linkElement.children[0].value;
      if (url.includes('vimeo') || url.includes('youtube')) {
        frag = (
          <div style={{ textAlign: 'center' }}>
            <ReactPlayer url={url} style={{ marginBottom: modularScale.base.em, marginRight: 'auto', marginLeft: 'auto' }} />
          </div>
        );
      }
    } else {
      url = linkElement.url; // eslint-disable-line prefer-destructuring
      text = linkElement.children[0].value;
      if (url.includes('http')) { // It it's an out-bound link
        frag = <OutLink to={url} style={{ fontFamily: kit.fontFamilies.paragraph, fontSize: modularScale.base.em }}>{text}</OutLink>
      } else {
        frag = <Link to={url}>{text}</Link>
      }
    }

    return frag;
  }

  const parseParagraph = element => {
    const paragraphElement = element.children[0];
    let frag = <Fragment />;

    frag = (
      <Paragraph>
        {
          paragraphElement.children.map((childElement) => {
            // console.log(childElement.type, childElement.value);
            switch(childElement.type) {
              case 'text': 
                if (childElement.value === "\n") {
                  return <br />
                } else {
                  return childElement.value
                }
              case 'break':
                return <br />
              case 'emphasis':
                return <i>{childElement.children[0].value}</i>
              case 'html':
                return <br />
              default: 
                return <Fragment />
            }
          })
        }
      </Paragraph>
    );

    return frag;
  }

  const parseBlockquote = element => {
    let frag = <Fragment />;
    frag = (
      <div style={{ paddingLeft: 20, borderLeft: '2px solid #363636' }}>
        {parseParagraph(element)}
      </div>
    );
    return frag;
  }

  const treeParser = markdownAst => {
    const frontMatterIndex = (_.findIndex(_.slice(markdownAst.children, 1), (child) => (child.type === 'thematicBreak')) + 2);
    const splicedAst = _.slice(markdownAst.children, frontMatterIndex);
    let headings = {
      first: 0,
      second: 0,
      third: 0,
      fourth: 0,
      fifth: 0,
    };
    let returnElement = <Fragment />;
    let pending = false;
    let lookBack = <Fragment />;
    let gallery = [];
    const elementCount = splicedAst.length;

    return (
      <Fragment>
        {
          splicedAst.map((element, index) => {
            // console.log(element);

            let prepend = <Fragment />;
            let frag = <Fragment />;
            let append = <Fragment />;

            if (gallery.length !== 0) { // Gallery is not empty
              if (element.children[0].type !== 'image' && element.children[0].type !== 'imageReference') { // The current item is not a paragraph
                prepend = parseGallery(gallery);
                gallery = []; // Reset gallery
              }
            }

            // console.log(element);

            if (element.type === 'paragraph') {
              // console.log(element);
              if (element.children[0].type === 'text') {
                frag = <Paragraph>{element.children[0].value}</Paragraph>;
              } else if (element.children[0].type === 'image') {
                gallery.push({src: element.children[0].url, alt: element.children[0].alt, ...extractWidthHeight(element.children[0].url)});
              } else if (element.children[0].type === 'imageReference') {
                gallery.push({src: element.children[1].value, alt: element.children[0].alt, ...extractWidthHeight(element.children[1].value)});
              } else if (element.children[0].type === 'linkReference' || element.children[0].type === 'link') {
                frag = parseLink(element);
              } 
              else {
                frag = <Fragment />;
              }
            }

            if (element.type === 'blockquote') {
              frag = parseBlockquote(element);
            }

            if (element.type === 'list') {
              if (element.ordered === true) {
                frag = (
                  <Ol>
                    {
                      element.children.map((listItem, index2) => (
                        <li key={index2}>{listItem.children[0].children[0].value}</li>
                      ))
                    }
                  </Ol>
                );
              } else {
                frag = (
                  <Ul>
                    {
                      element.children.map((listItem, index2) => (
                        <li key={index2}>{listItem.children[0].children[0].value}</li>
                      ))
                    }
                  </Ul>
                );
              }
            }

            if (element.type === 'heading') {
              headings = trackHeadings(element, headings);
              frag = parseHeading(element, headings);
            }

            // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ This is the last element
            if ((index + 1) === elementCount) {
              if (gallery.count !== 0) { // Gallery is not empty
                append = parseGallery(gallery);
                gallery = []; // Reset gallery
              }
            }
            
            return (
              <Fragment key={index}>
                {prepend}
                {frag}
                {append}
              </Fragment>
            );
          })
        }
      </Fragment>
    );
  }

  const makeToc = (headings, startingDepth, parentLevel = null) => {
    const node = [];
    let parentNode = 0;
    let skip = 0;
    let limit = 0;
    let level = null;
    _.forEach(headings, (heading, index) => {
      if (heading.depth === startingDepth) { // Add leaf
        level = parentLevel ? `${parentLevel}.${node.length + 1}` : `${node.length + 1}`;
        node.push({...heading, children: [], level });
        parentNode = node.length - 1;
      } else { // Add child/ren node/s to preceeding node
        if (skip === 0 && index !== (headings.length - 1)) {
          skip = (_.findIndex(_.slice(headings, index), headingX =>  headingX.depth === startingDepth)) - 1;
          if (skip === -2) { // Adjust if there are no futher indexes -- this means we have reached the end
            skip = (headings.length - index) - 1;
          }
          limit = skip + 1;
          node[parentNode].children = makeToc(_.slice(headings, index, (index + limit)), heading.depth, level);
        } else {
          skip-=1;
        }
      }
    });

    return node;
  }

  const renderToc = (toc) => {
    const renderTreeNodes = data => {
      return data.map((item) => {
        if (item.children.length > 0) {
          return (
            <TreeNode title={item.value} key={item.level} dataRef={item}>
              {renderTreeNodes(item.children)}
            </TreeNode>
          );
        }
        return <TreeNode title={item.value} key={item.level} />;
      });
    }

    return (
      <Tree showLine defaultExpandAll>
        {renderTreeNodes(toc)}
      </Tree>
    );
  }

// ----------------------------------------------------------------------- Component
/**
  * PageWrapper
  */
class PageWrapper extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props);
    const { frontmatter } = this.props.data.markdownRemark;
    const { markdownAst } = this.props.pathContext;
    // const { headings } = this.props.data.markdownRemark;
    // let toc = makeToc(headings, headings[0].depth);
    // console.log(frontmatter, frontmatter.variant);

    return (
      <Container block noFade bleed style={{ paddingTop: 50 }}>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ SEO */}
        <UpdateTitle title={frontmatter.title} />

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ Content */}
        { (frontmatter.variant !== "gallery" && frontmatter.variant !== "page") &&
          <Fragment>
            <H2>{frontmatter.title}</H2>
            <Image
              src={frontmatter.cover}
              rawWidth={1600}
              rawHeight={1000}
              loader="gradient"
              gradientPreset="default"
              style={{ border: 0, background: 'transparent', marginBottom: type.heading.sizes.second }}
            />
            <Paragraph>{frontmatter.abstract}</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Published on: {moment(frontmatter.date).format("dddd, MMMM Do YYYY")} ({moment(frontmatter.date).fromNow()})</Paragraph>
            <Paragraph style={{ textIndent: 0 }}>Categorised as: <i>{_.capitalize(frontmatter.category)}</i></Paragraph>
            <br /><br />
            <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
            <br /><br />
          </Fragment>
        }
        <Fragment>
          {
            treeParser(markdownAst)
          }
          <br /><br />
          <hr style={{ borderTop: '1px solid #363636', borderColor: '#363636' }} />
          <br /><br />
        </Fragment>
      </Container>
    );
  }
}

PageWrapper.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
  type: PropTypes.object, // eslint-disable-line react/forbid-prop-types, react/no-unused-prop-types
};

// ----------------------------------------------------------------------- GraphQL Query
/* eslint-disable no-undef */
export const pageQuery = graphql`
  query BlogPostBySlug($route: String!) {
    markdownRemark(fields: { route: { eq: $route } }) {
      headings {
        depth
        value
      }
      frontmatter {
        title
        cover
        date
        category
        tags
        abstract
        variant
      }
    }
  }
`;
/* eslint-enable no-undef */

// ----------------------------------------------------------------------- Export
export default PageWrapper;
