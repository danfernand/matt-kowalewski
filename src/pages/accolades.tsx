import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { inner, outer, SiteHeader, SiteMain } from '../styles/shared';

const HomePosts = css`
  .flex-grid {
    display: flex;
    align-items: stretch;
    margin-bottom: 25px;
    max-width: 1200px;
    margin: 0px auto;
  }

  .col.col-big {
    flex: 3 300px;
  }

  .col.col-big img {
    width: 100%;
    margin: 0px;
  }

  .col.col-small {
    flex: 1 300px;
    padding-left: 15px;
  }

  @media (max-width: 1250px) {
    .flex-grid {
      display: block;
    }

    .col {
      display: block;
    }

    .col-small {
      margin-top: 30px;
    }
  }

  .quote {
    position: relative;
    font-size: 1.2em;
    line-height: 1.5;
    font-style: italic;
    border-left: 0px;
  }

  .quote::before {
    content: '“';
    position: absolute;
    top: -55px;
    left: -15px;
    color: rgb(190, 198, 206);
    font-size: 6em;
    z-index: -1;
  }

  .link a {
    box-shadow: none;
  }
`;

const PostFullHeader = styled.header`
  margin: 0 auto;
  padding: 3vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 6vw 3vw 10vw;
  }
`;

export interface IndexProps {
  data: {
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    tamarackImage: {
      childImageSharp: {
        fluid: any;
      };
    };
    sonnetImage: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const AboutUsPage: React.FunctionComponent<IndexProps> = (props) => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);

  return (
    <IndexLayout css={HomePosts}>
      <Helmet>
        <html lang={config.lang} />
        <title>{config.title}</title>
        <meta name="description" content={config.description} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={config.title} />
        <meta property="og:description" content={config.description} />
        <meta property="og:url" content={config.siteUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        <meta itemProp="name" content={config.title} />
        <meta itemProp="description" content={config.description} />
        <meta
          itemProp="image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
        <script type="application/ld+json">
          {`
              {
                "@context" : "http://schema.org",
                "@type" : "Organization",
                "name" : "${config.title}",
                "url" : "${config.siteUrl}",
                "sameAs" : [
                  "https://www.yelp.com/biz/k6-development-dallas",
                  "https://www.instagram.com/k6development/"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2418 Arbuckle Ct",
                    "addressRegion": "TX",
                    "postalCode": "75229",
                    "addressCountry": "US"
                  }
              }
            `}
        </script>
      </Helmet>
      <Wrapper>
        <header css={[outer, SiteHeader]}>
          <div css={inner}>
            <SiteNav />
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer]}>
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>Accolades</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p>
                  We love when our work speaks for itself and when our work gets show-cased we want
                  to share it with the world. Below are our projects that have been recognized.
                </p>
                <div className="flex-grid">
                  <div className="col col-big">
                    <img
                      alt="home showcase for east dallas house on a greenbelt"
                      src={props.data.tamarackImage.childImageSharp.fluid.src}
                    />
                  </div>
                  <div className="col col-small">
                    <blockquote className="quote">
                      One of East Dallas’ most appealing aspects is its proximity to White Rock
                      Lake, surrounding parks, and heavily treed neighborhoods with winding streets
                      and a picturesque look.
                    </blockquote>
                    <div className="link">
                      <a
                        href="https://candysdirt.com/2018/10/11/get-inspired-by-nature-at-this-east-dallas-house-on-a-greenbelt/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More at CandysDirt
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex-grid" style={{ marginTop: '20px', marginBottom: '20px' }}>
                  <div className="col col-big">
                    <img
                      alt="home showcase for house in park forest"
                      src={props.data.sonnetImage.childImageSharp.fluid.src}
                    />
                  </div>
                  <div className="col col-small">
                    <blockquote className="quote">
                      That is definitely the case with our School + House entry for this week,
                      Dallas ISD’s DeGolyer Elementary, which sits just about in the middle of the
                      tight-knit neighborhood of Park Forest.
                    </blockquote>
                    <div className="link">
                      <a
                        href="https://candysdirt.com/2019/06/15/great-dallas-isd-school-great-neighborhood-great-park-forest-house/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        More at CandysDirt
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </PostFullContent>
          </article>
        </main>
        {props.children}

        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export default AboutUsPage;

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "img/meta-background.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    tamarackImage: file(relativePath: { eq: "img/projects/1751-tamarack-dr.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sonnetImage: file(relativePath: { eq: "img/projects/11434-sonnet-dr1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
