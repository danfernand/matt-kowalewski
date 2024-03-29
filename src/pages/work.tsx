import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/react';
import BaseHelmet from '../components/BaseHelmet';
import styled from '@emotion/styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { SiteMain } from '../styles/shared';

const Work = css`
  .carousel.carousel-slider {
    max-width: 1040px;
    margin: 0px auto;
  }
  .carousel .thumbs-wrapper {
    margin: 0px;
  }

  .carousel .thumbs {
    padding: 0px;
  }

  .carousel .thumb {
    width: 105px;
    border: 0px solid;
    padding: 3px;
  }

  .carousel .slide {
    padding: 0px;
    margin-top: 2px;
  }

  .carousel .thumb.selected,
  .carousel .thumb:hover {
    border: 3px solid #333;
  }

  .carousel .slide img {
    margin: 0px;
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
    carouselImg13: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg14: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg15: {
      childImageSharp: {
        fluid: any;
      };
    };
    carouselImg16: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const WorkPage: React.FunctionComponent<IndexProps> = (props) => {
  const width = props.data.header.childImageSharp.fixed.width;
  const height = props.data.header.childImageSharp.fixed.height;

  return (
    <IndexLayout css={Work}>
      <BaseHelmet
        config={config}
        imageSrc={props.data.header.childImageSharp.fixed.src}
        imageHeight={height}
        imageWidth={width}
      />
      <Wrapper>
        <SiteNav />
        <SiteMain id="site-main">
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>Work</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p style={{ textAlign: 'center' }}>
                  Here is a preview of the amazing work K6 development can do for you and your
                  project. We would love to showcase your dream to true. No project is too big or
                  too small for us to tackle!
                </p>
                <Carousel autoPlay showStatus={false} showIndicators={false} infiniteLoop>
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
                    <img
                      alt="carousel 10"
                      src={props.data.carouselImg10.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 11"
                      src={props.data.carouselImg11.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 12"
                      src={props.data.carouselImg12.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 13"
                      src={props.data.carouselImg13.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 14"
                      src={props.data.carouselImg14.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 15"
                      src={props.data.carouselImg15.childImageSharp.fluid.src}
                    />
                  </div>
                  <div>
                    <img
                      alt="carousel 16"
                      src={props.data.carouselImg16.childImageSharp.fluid.src}
                    />
                  </div>
                </Carousel>
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

export default WorkPage;

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    carouselImg1: file(relativePath: { eq: "img/projects/523-birch-ln.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg2: file(relativePath: { eq: "img/projects/523-birch-ln2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg3: file(relativePath: { eq: "img/projects/523-birch-ln3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg4: file(relativePath: { eq: "img/projects/1123-valencia-st.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg5: file(relativePath: { eq: "img/projects/1123-valencia-st2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg6: file(relativePath: { eq: "img/projects/1123-valencia-st3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg7: file(relativePath: { eq: "img/projects/1751-tamarack-dr.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg8: file(relativePath: { eq: "img/projects/1751-tamarack-dr2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg9: file(relativePath: { eq: "img/projects/1751-tamarack-dr3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg10: file(relativePath: { eq: "img/projects/3374-jubilee.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg11: file(relativePath: { eq: "img/projects/3374-jubilee2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg12: file(relativePath: { eq: "img/projects/3374-jubilee3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg13: file(relativePath: { eq: "img/projects/11434-sonnet-dr1.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg14: file(relativePath: { eq: "img/projects/11434-sonnet-dr2.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg15: file(relativePath: { eq: "img/projects/11434-sonnet-dr3.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carouselImg16: file(relativePath: { eq: "img/projects/11434-sonnet-dr4.jpg" }) {
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
