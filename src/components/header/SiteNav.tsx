// tslint:disable:no-http-string
import { Link } from 'gatsby';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { colors } from '../../styles/colors';
import { inner } from '../../styles/shared';
import SiteNavLogo from './SiteNavLogo';

const SiteHeader = styled.header`
  position: relative;
  padding: 0 4vw;
  position: relative;
  padding-top: 12px;
  padding-bottom: 12px;
  color: ${colors.orange};
  /* background: color(var(--darkgrey) l(-5%)) no-repeat center center; */
  background: ${colors.darkgrey};
  background-size: cover;
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 300;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  overflow-y: hidden;
  height: 40px;
  font-size: 1.2rem;

  .bar1,
  .bar2,
  .bar3 {
    width: 35px;
    height: 5px;
    background-color: ${colors.orange};
    margin: 6px 0;
    transition: 0.4s;
  }

  .change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
  }

  .change .bar2 {
    opacity: 0;
  }

  .change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
  }
`;

const MobileSiteNavRight = styled.div`
  display: inline-block;
  cursor: pointer;

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

  @media (min-width: 820px) {
    display: none;
  }
`;

const MobileSiteMenu = styled.div`
  position: absolute;
  top: 64px;
  left: 0px;
  background-color: rgba(50, 50, 50, 0.9);
  z-index: 1000;
  width: 100%;
  color: black;
  padding-bottom: 1em;

  ul {
    padding-left: 1.3em;
    padding-right: 1.5em;
    padding-bottom: 0px;
    padding-top: 1em;
    margin: 0px;
    text-align: center;
  }

  li {
    display: block;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    line-height: 1em;
  }

  li a {
    display: block;
    margin: 0;
    padding: 10px 12px;
    color: white;
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

  @media (min-width: 820px;) {
    display: none;
  }
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

  @media (max-width: 820px) {
    margin-top: 5px;
  }
`;

const NavStyles = css`
  display: flex;
  margin: 0 0 0 -12px;
  padding: 3px 0 0 0;
  list-style: none;

  @media (max-width: 820px) {
    display: none;
  }

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
    color: ${colors.orange};
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

  @media (max-width: 1000px) {
    display: none;
  }
`;

const PhoneNumberLink = styled.a`
  color: ${colors.orange};
  font-size: 20px;
`;

interface SiteNavProps {
  isHome?: boolean;
}

const SiteNav = ({ isHome }: SiteNavProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = React.useState<boolean>(false);

  return (
    <SiteHeader>
      <div css={inner}>
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
                <Link activeClassName="nav-selected" to="/accolades">
                  Accolades
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
            <PhoneNumberLink href="tel:(214)-603-6879">(214)-603-6879</PhoneNumberLink>
          </SiteNavRight>
          <MobileSiteNavRight
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
            className={isMobileNavOpen ? 'change' : ''}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </MobileSiteNavRight>
        </nav>
        {isMobileNavOpen && (
          <MobileSiteMenu>
            <ul role="menu">
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
                <Link activeClassName="nav-selected" to="/accolades">
                  Accolades
                </Link>
              </li>
              <li role="menuitem">
                <Link activeClassName="nav-selected" to="/contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </MobileSiteMenu>
        )}
      </div>
    </SiteHeader>
  );
};

export default SiteNav;
