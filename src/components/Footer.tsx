import { Link } from 'gatsby';
import { darken } from 'polished';
import * as React from 'react';
import { colors } from '../styles/colors';
import config from '../website-config';
import styled from '@emotion/styled';
import Instagram from './svg/Instagram';
import Facebook from './svg/Facebook';

const MapIframe = styled.iframe`
  width: 95%;
  height: 95%;
  min-height: 150px;
  border: 0;
`;

const FooterColumns = styled.div`
  flex: 0 0 auto;

  @media (min-width: 650px) {
    display: flex;
    flex-flow: row wrap;
    margin: 0 -1.5rem 0 0;
  }
`;

const FooterColumn = styled.div`
  color: ${colors.orange};
  a {
    color: ${colors.orange};
  }
  a:hover {
    color: ${darken('0.1', colors.orange)};
  }

  @media (min-width: 650px) {
    padding: 0 1.5rem 1.5rem 0;
    padding-bottom: 0px;
    flex: 0 0 33.3333333%;
  }

  margin-bottom: 15px;
`;

const SiteFooter = styled.footer`
  position: relative;
  padding-top: 10px;
  padding-bottom: 10px;
  background: ${colors.darkgrey};
  padding: 10px 4vw;
`;

const SocialRow = styled.div`
  height: 25px;
  display: block;
  margin-bottom: 8px;
`;

const Footer: React.FunctionComponent = () => {
  return (
    <SiteFooter>
      <FooterColumns>
        <FooterColumn>
          <h3 style={{ marginTop: '.25em' }}>K6 Development</h3>
          2418 Arbuckle Ct
          <br />
          Dallas, TX 75229
          <h3 style={{ marginTop: '.5em' }}>Phone</h3>
          <a href="tel:+12146036879">(214) 603-6879</a>
        </FooterColumn>
        <FooterColumn
          style={{
            position: 'relative',
          }}
        >
          <MapIframe
            frameBorder="0"
            src="https://www.google.com/maps/place/2418+Arbuckle+Ct,+Dallas,+TX+75229/@32.8847708,-96.8977674,17z/data=!3m1!4b1!4m5!3m4!1s0x864e9d6115793695:0xe0a5cce9a658fbc4!8m2!3d32.8847708!4d-96.8955787"
          ></MapIframe>
        </FooterColumn>
        <FooterColumn>
          <SocialRow>
            <a href="https://www.instagram.com/k6development/">
              <Instagram /> #k6development
            </a>
          </SocialRow>
          <SocialRow>
            <a href="https://www.facebook.com/K6-Development-102163838232261">
              <Facebook /> @K6 Development
            </a>
          </SocialRow>
        </FooterColumn>
      </FooterColumns>
      <FooterColumns>
        <FooterColumn>
          <section className="copyright">
            <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}
          </section>
        </FooterColumn>
      </FooterColumns>
    </SiteFooter>
  );
};

export default Footer;
