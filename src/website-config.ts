export interface WebsiteConfig {
  title: string;
  description: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  siteUrl: string;
}

// TODO - fill out this with correct info
const config: WebsiteConfig = {
  title: 'K6 Development',
  description:
    'Veteran Owned Business K6 Development is your partner for residential and commercial construction',
  logo: 'img/logo.png',
  lang: 'en',
  siteUrl: 'https://gatsby-casper.netlify.com',
};

export default config;
