import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import Helmet from 'react-helmet';
import { colors, worksColors } from '../styles/colors';
import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostFullTitle, NoImage, PostFull, PostFullHeader } from '../templates/post';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { inner, outer, SiteHeader, SiteMain } from '../styles/shared';
import { lighten } from 'polished';

const Process = css`
  .main-timeline {
    position: relative;
    padding-bottom: 30px;
  }
  .main-timeline:before {
    content: '';
    height: 100%;
    width: 1px;
    border-left: 3px dashed ${colors.darkgrey};
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 0;
  }
  .main-timeline .timeline {
    padding-left: 52px;
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  .main-timeline .timeline:before,
  .main-timeline .timeline:after {
    content: '';
    height: 25px;
    width: 25px;
    background-color: ${worksColors.step1};
    border-radius: 50%;
    border: 5px solid ${lighten('0.15', worksColors.step1)};
    transform: translateX(-50%) translateY(-50%);
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: -1;
  }
  .main-timeline .timeline:after {
    background-color: #fff;
    height: 35px;
    width: 35px;
    border: none;
    border-radius: 0;
    transform: translateX(0) translateY(-50%) rotate(45deg);
    left: 40.5%;
  }
  .main-timeline .timeline-content {
    color: #000;
    width: 40%;
    border-radius: 10px;
    display: block;
    position: relative;
    background-color: rgba(233, 237, 240, 0.3);
    box-shadow: none;
  }
  .main-timeline .timeline-content:hover {
    text-decoration: none;
  }
  .main-timeline .title {
    color: #0c3f42;
    background-color: ${worksColors.step1};
    font-size: 25px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding: 10px 10px;
    margin: 0;
    border-radius: 10px 10px 0 0;
  }
  .main-timeline .description {
    font-size: 15px;
    letter-spacing: 1px;
    padding: 10px 20px 15px 50px;
    margin: 0;
    font-family: -apple-system, system-ui, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
      'Open Sans', 'Helvetica Neue', sans-serif;
  }
  .main-timeline .timeline:nth-child(even) {
    padding-left: 0;
    padding-right: 52px;
  }
  .main-timeline .timeline:nth-child(even):after {
    left: auto;
    right: 40.5%;
  }
  .main-timeline .timeline:nth-child(even) .timeline-content {
    float: right;
  }
  .main-timeline .timeline:nth-child(even) .description {
    padding: 10px 50px 15px 20px;
  }
  .main-timeline .timeline:nth-child(4n + 2):before {
    background-color: ${worksColors.step2};
    border: 5px solid ${lighten('0.18', worksColors.step2)};
  }
  .main-timeline .timeline:nth-child(4n + 2) .title {
    background-color: ${worksColors.step2};
  }
  .main-timeline .timeline:nth-child(4n + 3):before {
    background-color: ${worksColors.step3};
    border: 5px solid ${lighten('0.18', worksColors.step3)};
  }
  .main-timeline .timeline:nth-child(4n + 3) .title {
    background-color: ${worksColors.step3};
  }
  .main-timeline .timeline:nth-child(4n + 4):before {
    background-color: ${worksColors.step4};
    border: 5px solid ${lighten('0.18', worksColors.step4)};
  }
  .main-timeline .timeline:nth-child(4n + 4) .title {
    background-color: ${worksColors.step4};
  }
  .main-timeline .timeline:nth-child(4n + 5):before {
    background-color: ${worksColors.step5};
    border: 5px solid ${lighten('0.18', worksColors.step5)};
  }
  .main-timeline .timeline:nth-child(4n + 5) .title {
    background-color: ${worksColors.step5};
  }
  .main-timeline .timeline:nth-child(4n + 6):before {
    background-color: ${worksColors.step6};
    border: 5px solid ${lighten('0.18', worksColors.step6)};
  }
  .main-timeline .timeline:nth-child(4n + 6) .title {
    background-color: ${worksColors.step6};
  }
  .main-timeline .timeline:nth-child(4n + 7):before {
    background-color: ${worksColors.step7};
    border: 5px solid ${lighten('0.18', worksColors.step7)};
  }
  .main-timeline .timeline:nth-child(4n + 7) .title {
    background-color: ${worksColors.step7};
  }
  .main-timeline .timeline:nth-child(4n + 8):before {
    background-color: ${worksColors.step8};
    border: 5px solid ${lighten('0.18', worksColors.step8)};
  }
  .main-timeline .timeline:nth-child(4n + 8) .title {
    background-color: ${worksColors.step8};
  }

  @media screen and (max-width: 1200px) {
    .main-timeline .timeline:after {
      left: 40%;
    }
    .main-timeline .timeline:nth-child(even):after {
      right: 40%;
    }
    .main-timeline .timeline:nth-child(even) .timeline-content,
    .main-timeline .timeline-content {
      width: 39%;
    }
  }
  @media screen and (max-width: 1000px) {
    .main-timeline:before {
      transform: translateX(0);
      left: 0;
    }
    .main-timeline .timeline:nth-child(even),
    .main-timeline .timeline {
      padding: 40px 30px 0;
      margin-bottom: 30px;
    }
    .main-timeline .timeline:before {
      transform: translateX(0) translateY(-50%);
      left: -11px;
    }
    .main-timeline .timeline:nth-child(even):after,
    .main-timeline .timeline:after {
      left: 28px;
    }
    .main-timeline .timeline:nth-child(even) .timeline-content,
    .main-timeline .timeline-content {
      width: 100%;
    }
    .main-timeline .timeline:nth-child(even),
    .main-timeline .title {
      font-size: 20px;
    }
    .main-timeline .timeline:nth-child(even) .description,
    .main-timeline .description {
      padding: 15px 15px 15px 15px;
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

const ProcessPage: React.FunctionComponent<IndexProps> = props => {
  const width = props.data.header.childImageSharp.fluid.sizes.split(', ')[1].split('px')[0];
  const height = String(Number(width) / props.data.header.childImageSharp.fluid.aspectRatio);

  return (
    <IndexLayout css={Process}>
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
              <PostFullTitle>Our Process</PostFullTitle>
            </PostFullHeader>
            <PostFullContent
              className="post-full-content"
              style={{ background: 'transparent', textAlign: 'center' }}
            >
              <p>
                Our process helps the client maneuver through the steps of a project in digestible,
                direct stages. We work with our clients to ensure that the scope of the project, the
                timing of the project and the results of the project meet and exceed their 100%
                satisfaction. Through this process K6 Development has furthered our commitment of
                integrity, quality, trust and client satisfaction.
              </p>
              <div className="post-content">
                <div className="main-timeline">
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Assessment</h3>
                      <p className="description">
                        We meet with you to assess your project needs. This is achieved by listening
                        to your vision of how you want to live and interact in your living
                        environment, both indoors and outdoors. The goal of this meeting is to
                        gather information and to establish a budget goal.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Project Contract</h3>
                      <p className="description">
                        At this point all the project parameters are understood and the budget can
                        be finalized. We will send you an updated Proposal, including a detailed job
                        costing which, after your review and discussion, leads to a final Scope of
                        Work and the fixed price cost of the project. The Project Contract will
                        include the Scope of Work, a Work Schedule, Payment Schedule and an
                        explanation of our Change Order procedure. Any alteration or deviation from
                        the Project Contract requires a written Change Order that must be signed by
                        you, the Owner, before any additional work can be scheduled. Any
                        modification to the project cost or schedule will be clarified in the Change
                        Order.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Preliminary Design</h3>
                      <p className="description">
                        Our next objective is to begin the Design Process. We will develop a Design
                        Budget, and when approved by you, start on preliminary design ideas and
                        drawings. In this Preliminary Design phase we brainstorm the different
                        options with you to create your vision. We will develop a set of sketches
                        with different solutions and create a Rough Cost Budget.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Scheduling</h3>
                      <p className="description">
                        Once the Project Contract is approved and signed, the work will be
                        scheduled. An on-site Supervisor will be assigned to your project and will
                        be responsible for overseeing the project on a daily basis. With on-site
                        supervision and accurate scheduling, our daily communication with you
                        ensures a succesful project.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Final Design</h3>
                      <p className="description">
                        At this stage, we will blend the various revisions into the final design and
                        revised cost estimate. We collectively review the drawing and budget
                        information and finalize the project design, scope of work and rough cost.
                        This results in the Project Proposal.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Permitting</h3>
                      <p className="description">
                        This step begins with creating the working drawings and construction
                        documents. These are the documents and plans that will be used to build the
                        project. They often include structural engineering, civil engineering, and
                        mechanical and electrical design. In some cases, a geologist or other
                        special consultants may be involved. Once the plans and documentation are
                        completed, they are submitted to the appropriate building/planning
                        departments for approval and permitting. Depending on the complexity of the
                        project, this may require additional changes in the plans and resubmission
                        for approval before the permits are issued.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Building</h3>
                      <p className="description">
                        Due to the unique nature of each project, our Building Process emphasizes
                        ongoing communication and review, minimal community impact, and maximum
                        value and satisfaction. We adhere to the schedule and work closely with our
                        clients to proactively identify where and when concerns might arise.
                        Maintaining a clean job site is a priority throughout the entire building
                        process. We believe our projects improve the community and neighborhood,
                        too, so we take that into consideration throughout the project—the
                        improvement starts when we start.
                      </p>
                    </a>
                  </div>
                  <div className="timeline">
                    <a href="" className="timeline-content">
                      <h3 className="title">Follow-up</h3>
                      <p className="description">
                        We value strong communication throughout the project and afterward. We stand
                        behind our jobs. We seek a continued relationship with our clients and
                        expect your satisfaction with the project to last for years. If it doesn’t,
                        we want to know about it. With more than 200 remodel projects alone, we’ve
                        established our longevity and commitment to client satisfaction. We continue
                        to improve through an evaluation process after project completion,
                        incorporating essential client feedback and maintaining our relationships
                        over the years.
                      </p>
                    </a>
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

export default ProcessPage;

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
  }
`;
