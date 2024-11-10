import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="UrbanSphere helps property buyers find ideal locations by ranking sub-districts based on factors like air and water quality, crime rates, healthcare, schools, and amenities. Make informed real estate decisions with UrbanSphere." />
        <meta name="keywords" content="UrbanSphere, property buying, real estate, air quality, water quality, crime rate, schools, hospitals, quality of life, best location to live, sub-district ranking" />
        <meta name="author" content="Shivam" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urban-sphere.studex.tech" />
        <meta property="og:title" content="UrbanSphere | Finding the Best Locations for Real Estate" />
        <meta property="og:description" content="UrbanSphere ranks sub-districts based on key quality-of-life factors, empowering buyers to choose the best areas to live." />
        <meta property="og:image" content="/logo.svg" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://urban-sphere.studex.tech" />
        <meta property="twitter:title" content="UrbanSphere | Finding the Best Locations for Real Estate" />
        <meta property="twitter:description" content="Helping property buyers choose the best sub-districts based on quality-of-life metrics." />
        <meta property="twitter:image" content="/logo.svg" />

        <link rel="icon" href="/logo.svg" />
        <link rel="canonical" href="https://urban-sphere.studex.tech" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
