// tslint:disable:no-http-string
import { Link } from 'gatsby';
import * as React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { colors } from '../../styles/colors';
import SiteNavLogo from './SiteNavLogo';

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;
`;

const SiteNavLeft = styled.div`
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  padding-bottom: 80px;
  letter-spacing: 0.4px;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 4vw;
  }
`;

const NavStyles = css`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 3px 0 0 0;
  list-style: none;

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: ${colors.darkgrey};
    font-size: 130%;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a.nav-selected {
    font-weight: bold;
    text-decoration: underline;
  }
`;

const SiteNavRight = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 40px;

  @media (max-width: 700px) {
    display: none;
  }
`;

const PhoneNumberLink = styled.a`
  color: ${colors.darkgrey};
  font-size: 20px;
`;

interface SiteNavProps {
  isHome?: boolean;
}

interface SiteNaveState {
  isOpen: boolean;
}

class SiteNav extends React.Component<SiteNavProps, SiteNaveState> {
  constructor(props: SiteNavProps) {
    super(props);
    this.state = { isOpen: false };
  }

  render() {
    const { isHome = false } = this.props;
    return (
      <nav css={[SiteNavStyles]}>
        <SiteNavLeft>
          {!isHome && <SiteNavLogo />}
          <ul css={NavStyles} role="menu">
            {/* TODO: mark current nav item - add class nav-current */}
            <li role="menuitem">
              <Link activeClassName="nav-selected" to="/">
                Home
              </Link>
            </li>
            <li role="menuitem">
              <Link activeClassName="nav-selected" to="/process">
                Process
              </Link>
            </li>
            <li role="menuitem">
              <Link activeClassName="nav-selected" to="/work">
                Work
              </Link>
            </li>
            <li role="menuitem">
              <Link activeClassName="nav-selected" to="/about">
                About
              </Link>
            </li>
            <li role="menuitem">
              <Link activeClassName="nav-selected" to="/contactus">
                Contact Us
              </Link>
            </li>
          </ul>
        </SiteNavLeft>
        <SiteNavRight>
          <PhoneNumberLink href="tel:(123)-456-6789">(123)-456-6789</PhoneNumberLink>
        </SiteNavRight>
      </nav>
    );
  }
}

export default SiteNav;
