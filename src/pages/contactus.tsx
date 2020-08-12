import { graphql } from 'gatsby';
import * as React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Footer from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import { PostFullContent } from '../components/PostContent';
import { PostFullTitle, NoImage, PostFull } from '../templates/post';
import BaseHelmet from '../components/BaseHelmet';
import Wrapper from '../components/Wrapper';
import IndexLayout from '../layouts';
import config from '../website-config';
import { SiteMain } from '../styles/shared';
import { Formik, Form, FormikErrors, Field, ErrorMessage } from 'formik';
import axios from 'axios';

type FormValue = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  projectType: string;
};

const HomePosts = css`
  @media (min-width: 795px) {
    .flex-grid {
      display: flex;
      justify-content: space-between;
    }
    .col {
      flex: 1;
    }

    @media (max-width: 600px) {
      .flex-grid {
        display: block;
      }
    }

    form > .errorMessage {
      font-size: 20px;
    }
  }

  form > label {
    display: block;
    margin-top: 5px;
  }

  form > .inputWrapper > input,
  form > .inputWrapper > textarea {
    background-color: rgba(255, 255, 255, 0.8);
    line-height: 1.9;
    border: 0px solid;
    width: 97%;
    outline: none;
  }

  form > .inputWrapper {
    padding-right: 7px;
    padding-left: 7px;
    line-height: 2;
    border: 1px solid rgba(188, 186, 196, 0.8);
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 10px;
    width: 97%;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 20px 0 rgba(0, 0, 0, 0.19);
  }

  form > button {
    display: block;
    background-color: #1034a6;
    color: white;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    margin-top: 20px;
  }

  form > .errorMessage {
    color: rgb(245, 72, 71);
    font-size: 20px;
  }

  form > .errorMessage {
    color: rgb(245, 72, 71);
    font-size: 18px;
  }

  .formSubmitted {
    font-weight: bold;
    color: green;
    border: 1px solid green;
    border-radius: 5px;
    padding: 10px;
    background: rgba(0, 145, 154, 0.1);
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
    contactusImage: {
      childImageSharp: {
        fluid: any;
      };
    };
  };
}

const AboutUsPage: React.FunctionComponent<IndexProps> = (props) => {
  const width = props.data.header.childImageSharp.fixed.width;
  const height = props.data.header.childImageSharp.fixed.height;
  const [formSubmitted, setFormSubmitted] = React.useState<boolean>(false);

  const intialValues: FormValue = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    projectType: '',
  };
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
              <PostFullTitle>Contact Us</PostFullTitle>
            </PostFullHeader>
            <PostFullContent className="post-full-content" style={{ background: 'transparent' }}>
              <div className="post-content">
                <p>
                  We would love to start discussing the beginning of your project and vision. Please
                  contact us using the form below or call{' '}
                  <a href="tel:(214)-603-6879">(214)-603-6879</a>
                </p>
                {formSubmitted && (
                  <div className="formSubmitted">
                    {
                      'Your information has been submitted, we will contact you within 3 to 5 business days.'
                    }
                  </div>
                )}
                {!formSubmitted && (
                  <Formik
                    initialValues={intialValues}
                    validate={(values: FormValue) => {
                      let errors: FormikErrors<FormValue> = {};
                      if (!values.firstName) {
                        errors.firstName = 'First name is required';
                      }

                      if (!values.lastName) {
                        errors.lastName = 'Last name is required';
                      }

                      if (!values.email) {
                        errors.email = 'Email is required';
                      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                        errors.email = 'Invalid email address';
                      }

                      if (!values.phoneNumber) {
                        errors.phoneNumber = 'Phone number is required';
                      }

                      if (!values.projectType) {
                        errors.phoneNumber = 'Project type is required';
                      }

                      return errors;
                    }}
                    onSubmit={(values, { setSubmitting }) => {
                      return axios
                        .post(
                          'https://api.hsforms.com/submissions/v3/integration/submit/5377740/cd2340b7-863f-41a2-b2a0-ab37f481dbf5',
                          {
                            submittedAt: new Date().getTime(),
                            fields: [
                              {
                                name: 'email',
                                value: values.email,
                              },
                              {
                                name: 'firstname',
                                value: values.firstName,
                              },
                              {
                                name: 'lastname',
                                value: values.lastName,
                              },
                              {
                                name: 'mobilephone',
                                value: values.phoneNumber,
                              },
                              {
                                name: 'project_type',
                                value: values.projectType,
                              },
                            ],
                          },
                        )
                        .then(() => {
                          setSubmitting(false);
                          setFormSubmitted(true);
                        });
                    }}
                  >
                    {({ isSubmitting }) => (
                      <div className="flex-grid">
                        <div className="col" style={{ marginTop: '15px' }}>
                          <Form style={{ marginBottom: 10 }}>
                            <label>First Name</label>
                            <div className="inputWrapper">
                              <Field type="input" name="firstName" />
                            </div>
                            <ErrorMessage
                              name="firstName"
                              className="errorMessage"
                              component="div"
                            />
                            <label>Last Name</label>
                            <div className="inputWrapper">
                              <Field type="input" name="lastName" />
                            </div>
                            <ErrorMessage
                              name="firstName"
                              className="errorMessage"
                              component="div"
                            />
                            <label>Email</label>
                            <div className="inputWrapper">
                              <Field type="email" name="email" />
                            </div>
                            <ErrorMessage name="email" className="errorMessage" component="div" />
                            <label>Phone Number</label>
                            <div className="inputWrapper">
                              <Field
                                type="tel"
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="phoneNumber"
                              />
                            </div>
                            <ErrorMessage
                              name="phoneNumber"
                              className="errorMessage"
                              component="div"
                            />
                            <label>Project Type</label>
                            <div className="inputWrapper">
                              <Field component="textarea" name="projectType" />
                            </div>
                            <ErrorMessage
                              name="projectType"
                              className="errorMessage"
                              component="div"
                            />
                            <button type="submit" disabled={isSubmitting}>
                              Submit
                            </button>
                          </Form>
                        </div>
                        <div className="col">
                          <img
                            alt="yard sign"
                            src={props.data.contactusImage.childImageSharp.fluid.src}
                            style={{
                              width: '100%',
                              boxShadow:
                                '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);',
                            }}
                          />
                        </div>
                      </div>
                    )}
                  </Formik>
                )}
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

    contactusImage: file(relativePath: { eq: "img/contactus.jpg" }) {
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
