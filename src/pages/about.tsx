import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import BaseHelmet from '../components/BaseHelmet';
import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { SiteMain } from '../styles/shared';

const HomePosts = css``;

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
    aboutUsImage: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const AboutUsPage: React.FunctionComponent<IndexProps> = (props) => {
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
          <article className="post page" css={[PostFull, NoImage]}>
            <PostFullHeader>
              <PostFullTitle>About</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p>
                  Matt Kowalewski, principal of K6 Development, is a real estate professional with
                  almost two decades of experience in real estate speculation, construction and
                  development. Matt’s career includes a diverse portfolio of residential and
                  commercial projects, ranging from single family homes to luxury tiny homes. He has
                  worked on multifamily complexes, oilfield housing developments, single family
                  remodels as well as commercial build outs in shopping centers. These projects were
                  located in communities ranging from downtown Dallas to south San Antonio, and
                  throughout the great state of Texas..
                </p>
                <p>
                  Over the past 5 years, Matt has built an impressive reputation around his
                  community, he has drastically improved his neighborhoods landscape rehabbing 7
                  distressed parcels with K6’s signature project touch of high-end, luxury-designed
                  homes. Matt is considered an expert in property acquisition, design-build, and
                  construction implementation, the K6 team has brought his posh luxury styling to
                  the forefront of the real estate market in North Dallas. Leading K6 Development’s
                  team of more than 20 employees and sub-contractors, Matt is aggressively moving K6
                  into new markets across Texas. We are looking forward to rebuilding communities
                  and bringing back the homes that once made neighborhoods thrive.
                </p>
                <p>
                  Matt is a graduate of The US Army Medical Department Center and School where he
                  studied Psychology. Prior to joining the U.S Army, Matt worked as an apprentice
                  under a master carpenter. Once he left military service, in 2008 he knew the real
                  estate industry was what he was passionate about. Matt previously worked for J.P
                  Morgan Chase in residential real-estate group, he currently serves on the Board of
                  Directors for the Park forest Community in Dallas and enjoys spending time
                  outdoors with his wife and their five children.
                </p>
                <img
                  alt="my family"
                  src={props.data.aboutUsImage.childImageSharp.fluid.src}
                  style={{
                    boxShadow: '0 2px 4px 0 rgba(0,0,0,0.2), 0 3px 20px 0 rgba(0,0,0,0.19)',
                  }}
                />
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

export default AboutUsPage;

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
    aboutUsImage: file(relativePath: { eq: "img/about.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
