import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head lang="en">
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript" />
        <meta name="author" content="Emily Jowers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/purple-monster-round.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
