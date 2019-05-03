import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostFullTitle, NoImage, PostFull, PostFullHeader } from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { inner, outer, SiteHeader, SiteMain } from '../styles/shared';

const HomePosts = css`
  @media (min-width: 795px) {
    .flex-grid {
      display: flex;
      justify-content: space-between;
      text-align: center;
    }
    .col {
      flex: 1;
    }

    @media (max-width: 500px) {
      .flex-grid {
        display: block;
      }
    }
  }
`;

export interface IndexProps {
  data: {
    header: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const ServicesPage: React.FunctionComponent<IndexProps> = props => {
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
        {config.facebook && <meta property="article:publisher" content={config.facebook} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={config.title} />
        <meta name="twitter:description" content={config.description} />
        <meta name="twitter:url" content={config.siteUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${props.data.header.childImageSharp.fluid.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
        <meta property="og:image:width" content={width} />
        <meta property="og:image:height" content={height} />
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
              <PostFullTitle>About Us</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p>
                  K6 Development, is a comprehensive general contractor that provides a full
                  spectrum of residential and commercial remodeling and building services. K6
                  Development offers Architectural Design, Construction, Remodeling, Budget
                  planning, Landscape Design and many additional Real Estate services, but it is our
                  commitment to integrity, quality, trust, and client satisfaction that is the
                  cornerstone of all our projects.
                </p>
                <p>
                  Our innovative solutions for your building projects continue to satisfy and
                  impress well beyond project completion. Our work is exceptional, yet what matters
                  most to our clients is our commitment through each phase of the project. We care
                  about your project—and all that it affects—throughout the duration of the project.
                  Our goal is that you will enjoy the building process as much as the end-result.
                  Client satisfaction at every stage of the project is a key to our success.
                </p>
                <p>
                  Regardless of your building project needs, we see communication as essential to
                  your total satisfaction. Our knowledgeable team has developed an easy step-by-step
                  process to assist you through your project – a process of impeccable service,
                  time-saving systems, integrity and dependability. The quality of our work is our
                  show piece, but our clients will also remember us for our integrity and the value
                  they received.
                </p>
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

export default ServicesPage;

export const pageQuery = graphql`
  query {
    header: file(relativePath: { eq: "img/blog-cover.jpg" }) {
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
