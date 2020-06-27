import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import {
  PageContext,
  NoImage,
  PostFull,
  PostFullTitle,
  PostFullSubTitle,
  PostFullHeader,
} from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { inner, outer, SiteHeader, SiteMain } from '../styles/shared';
import { Carousel } from 'react-responsive-carousel';
import Blueprint from '../components/svg/Blueprint';
import Building from '../components/svg/Building';
import House from '../components/svg/House';
import Warehouse from '../components/svg/Warehouse';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePosts = css`
  .flex-grid {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
  }

  .col {
    flex: 1;
    text-align: center;
  }

  .svgWrapper {
    width: 100px;
    margin-left: calc(50% - 50px);
  }

  @media (max-width: 650px) {
    .flex-grid {
      display: block;
    }

    .col {
      display: block;
    }
  }
  .carousel.carousel-slider {
    max-width: 1300px;
    margin: 0px auto;
    margin-top: 20px;
  }

  .carousel .slide {
    padding: 0px;
  }

  .carousel .slide img {
    margin: 0px;
  }
`;

export interface IndexProps {
  data: {
    backgroundImage: {
      childImageSharp: {
        fluid: any;
      };
    };
    logo: {
      childImageSharp: {
        fixed: any;
      };
    };
    carouselImg1: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg2: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg3: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg4: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg5: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg6: {
      childImageSharp: {
        fluid: any;
      };
    };
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
    allMarkdownRemark: {
      edges: {
        node: PageContext;
      }[];
    };
  };
}

const IndexPage: React.FunctionComponent<IndexProps> = (props) => {
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
                "name" : ${config.title},
                "url" : ${config.siteUrl},
                "sameAs" : [
                  "https://www.yelp.com/biz/k6-development-dallas",
                  "https://www.instagram.com/k6development/",
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
          {props.data.carouselImg1.childImageSharp.fluid.src && (
            <Carousel autoPlay showStatus={false} showThumbs={false} showIndicators infiniteLoop>
              <div>
                <img alt="carousel 1" src={props.data.carouselImg1.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 2" src={props.data.carouselImg2.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 3" src={props.data.carouselImg3.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 4" src={props.data.carouselImg4.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 5" src={props.data.carouselImg5.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 6" src={props.data.carouselImg6.childImageSharp.fluid.src} />
              </div>
            </Carousel>
          )}
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>We are K6 Development</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p>K6 Development, is your partner for residential and commercial construction.</p>
                <p>
                  However, perhaps the best service we offer is our emphasis on integrity, quality,
                  trust and client satisfaction. We focus on the client as well as the project. A
                  project evolves from a client’s vision, environment and goals. We are partners
                  with our clients and have consistently developed valued relationships that have
                  extended well-beyond project completion.
                </p>
                <p>
                  Construction projects can be intrusive in the short-term, so K6 Development is
                  committed to maintaining minimal personal impact and maximum value and
                  satisfaction.
                </p>
                <p>
                  K6 Development has the resources to assist our clients with all phases of a
                  construction project – from the initial Design Concept through the Working Plans
                  and Permitting Process and through the Construction phase. We enjoy being involved
                  in all phases. This comprehensive approach also makes it easier for our clients –
                  they have only one entity to go to for project accountability. It is one of the
                  many reasons K6 Development continues to achieve such high client satisfaction.
                </p>
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                  <PostFullSubTitle>Services Offered</PostFullSubTitle>
                </div>
                <div className="flex-grid">
                  <div className="col">
                    <div className="svgWrapper">
                      <House />
                    </div>
                    <div>Single Family</div>
                  </div>
                  <div className="col">
                    <div className="svgWrapper">
                      <Warehouse />
                    </div>
                    <div>Bulk Remodeling</div>
                  </div>
                  <div className="col">
                    <div className="svgWrapper">
                      <Building />
                    </div>
                    <div>Multi Family</div>
                  </div>
                  <div className="col">
                    <div className="svgWrapper">
                      <Blueprint />
                    </div>
                    <div>Capital Improvement</div>
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

export default IndexPage;

export const pageQuery = graphql`
  query {
    backgroundImage: file(relativePath: { eq: "img/si-blueprint-background-web.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    logo: file(relativePath: { eq: "img/logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/meta-background.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg1: file(relativePath: { eq: "img/carousel/11434-sonnet-dr2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg2: file(relativePath: { eq: "img/carousel/3374-jubilee2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg3: file(relativePath: { eq: "img/carousel/1123-valencia-st2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg4: file(relativePath: { eq: "img/carousel/1751-tamarack-dr.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg5: file(relativePath: { eq: "img/carousel/3374-jubilee3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg6: file(relativePath: { eq: "img/carousel/11434-sonnet-dr5.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
      limit: 1000
    ) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
            draft
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            author {
              id
              bio
              avatar {
                children {
                  ... on ImageSharp {
                    fixed(quality: 90) {
                      src
                    }
                  }
                }
              }
            }
          }
          excerpt
          fields {
            layout
            slug
          }
        }
      }
    }
  }
`;
