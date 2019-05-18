import { Link } from 'gatsby';
import { darken } from 'polished';
import * as React from 'react';
import { css } from '@emotion/core';
import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';

const SiteFooter = css`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${darken('0.1', '#ff9033')};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  color: ${colors.darkgrey};
  font-size: 1.3rem;
  a {
    color: ${colors.darkgrey};
  }
  a:hover {
    color: ${darken('0.1', colors.darkgrey)};
  }
  @media (max-width: 650px) {
    flex-direction: column;
  }
`;

const Footer: React.FunctionComponent = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}
        </section>
      </div>
    </footer>
  );
};

export default Footer;
