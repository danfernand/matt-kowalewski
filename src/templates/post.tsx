import React from 'react';
import { setLightness } from 'polished';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../styles/colors';

export const PostFull = css`
  position: relative;
  z-index: 50;
`;

export const NoImage = css`
  .post-full-content {
    padding-top: 0;
  }

  .post-full-content:before,
  .post-full-content:after {
    display: none;
  }
`;

export const PostFullHeader = styled.header`
  margin: 0 auto;
  padding: 3vw 3vw 3vw;
  max-width: 1040px;
  text-align: center;

  @media (max-width: 500px) {
    padding: 6vw 3vw 10vw;
  }
`;

export const PostFullTitle = styled.h1`
  margin: 0;
  color: ${setLightness('0.05', colors.darkgrey)};
  @media (max-width: 500px) {
    font-size: 2.9rem;
  }
`;

export const PostFullSubTitle = styled.h3`
  margin: 0;
  color: ${setLightness('0.3', colors.darkgrey)} !important;
  @media (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export interface PageContext {
  excerpt: string;
  timeToRead: number;
  fields: {
    slug: string;
  };
  frontmatter: {
    image: {
      childImageSharp: {
        fluid: any;
      };
    };
    title: string;
    date: string;
    draft?: boolean;
    tags: string[];
    author: {
      id: string;
      bio: string;
      avatar: {
        children: {
          fixed: {
            src: string;
          };
        }[];
      };
    };
  };
}

const Post = () => <div />;

export default Post;
