import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/react';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import BaseHelmet from '../components/BaseHelmet';
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
import { SiteMain } from '../styles/shared';
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
    margin: 0px auto;
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
    carouselImg7: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg8: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg9: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg10: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg11: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg12: {
      childImageSharp: {
        fluid: any;
      };
    };
    header: {
      childImageSharp: {
        fixed: any;
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
  const width = props.data.header.childImageSharp.fixed.width;
  const height = props.data.header.childImageSharp.fixed.height;

  return (
    <IndexLayout css={HomePosts}>
      <BaseHelmet
        config={config}
        imageSrc={props.data.header.childImageSharp.fixed.src}
        imageHeight={height}
        imageWidth={width}
      />
      <Wrapper>
        <SiteNav />
        <SiteMain id="site-main">
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
              <div>
                <img alt="carousel 7" src={props.data.carouselImg7.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 8" src={props.data.carouselImg8.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 9" src={props.data.carouselImg9.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 10" src={props.data.carouselImg10.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 11" src={props.data.carouselImg11.childImageSharp.fluid.src} />
              </div>
              <div>
                <img alt="carousel 12" src={props.data.carouselImg12.childImageSharp.fluid.src} />
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
        </SiteMain>
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
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
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
    carouselImg7: file(relativePath: { eq: "img/carousel/IMG_7452.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg8: file(relativePath: { eq: "img/carousel/IMG_7453.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg9: file(relativePath: { eq: "img/carousel/IMG_7462.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg10: file(relativePath: { eq: "img/carousel/IMG_7470.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg11: file(relativePath: { eq: "img/carousel/IMG_7471.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg12: file(relativePath: { eq: "img/carousel/IMG_7474.jpg" }) {
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
      limit: 0
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
