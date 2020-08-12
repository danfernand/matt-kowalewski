import React from 'react';
import { WebsiteConfig } from 'website-config';
import { Helmet } from 'react-helmet';

export default function BaseHelmet({
  extraNode,
  config,
  imageSrc,
  imageHeight,
  imageWidth,
}: {
  extraNode?: React.ReactNode;
  config: WebsiteConfig;
  imageSrc: string;
  imageHeight: string;
  imageWidth: string;
}) {
  return (
    <Helmet>
      <html lang={config.lang} />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.siteUrl} />
      <meta property="og:image" content={`${config.siteUrl}${imageSrc}`} />
      <meta itemProp="name" content={config.title} />
      <meta itemProp="description" content={config.description} />
      <meta itemProp="image" content={`${config.siteUrl}${imageSrc}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta name="twitter:image" content={`${config.siteUrl}${imageSrc}`} />
      <meta property="og:image:width" content={imageWidth} />
      <meta property="og:image:height" content={imageHeight} />
      <script type="application/ld+json">
        {`
              {
                "@context" : "http://schema.org",
                "@type" : "Organization",
                "name" : "${config.title}",
                "url" : "${config.siteUrl}",
                "sameAs" : [
                  "https://www.yelp.com/biz/k6-development-dallas",
                  "https://www.instagram.com/k6development/"
                  ],
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "2418 Arbuckle Ct",
                    "addressRegion": "TX",
                    "postalCode": "75229",
                    "addressCountry": "US"
                  }
              }
            `}
      </script>
      <script>
        {`
        (function(d, s, id) {
          var js, fjs = d.getElementsByTagName(s)[0];
          if (d.getElementById(id)) return;
          js = d.createElement(s); js.id = id;
          js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
          fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

        object.addEventListener("load", function load() {
          FB.CustomerChat.show(shouldShowDialog: boolean);
        });
        `}
      </script>
      {extraNode}
    </Helmet>
  );
}
