/* eslint-disable @next/next/no-sync-scripts */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const title = "HealMe";
  return (
    <Html lang="en">
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta charset="utf-8" />
        <meta name="google" content="notranslate" />
        <meta name="description" content="Your description here" />
        <meta name="author" content="Your author here" />
        <meta name="keywords" content="Your keywords here" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://your-website-url.com" />
        <meta property="og:image" content="http://your-website-url.com/og-image.jpg" />
        <meta property="og:image:width" content="470" />
        <meta property="og:image:height" content="246" />
        <meta property="og:site_name" content="Your Site Name" />
        <meta property="og:description" content="Your Open Graph description here" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="HealMe" />
        <meta name="twitter:domain" content="http://healme.tech/" />
        <meta name="twitter:description" content="Your Twitter description here" />
        <meta name="twitter:image" content="http://your-website-url.com/twitter-image.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-navbutton-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <link rel="icon" type="image/png" href="favicon.png" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="apple-touch-icon-72x72.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="apple-touch-icon-114x114.png" />

        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
      
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
