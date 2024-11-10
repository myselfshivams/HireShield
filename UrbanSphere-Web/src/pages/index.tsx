import Head from 'next/head';
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Feedback from "./components/Feedback";

export default function Home() {
  return (
    <>
      <Head>
        <title>UrbanSphere | Home</title>
        <meta name="description" content="UrbanSphere is designed to guide property buyers in finding the ideal location by ranking sub-districts based on quality-of-life factors such as air quality, water quality, crime rates, healthcare, schools, and more." />
        <meta property="og:title" content="UrbanSphere | Home" />
        <meta property="og:description" content="Discover the best areas to live in with UrbanSphere. We rank sub-districts based on key factors, helping you make informed real estate decisions." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/path_to_your_image.jpg" />
        <meta property="og:url" content="https://urban-sphere.studex.tech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Hero />
      <Pricing />
      <Feedback />
      <Footer />
    </>
  );
}
