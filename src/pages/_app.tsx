import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Kavya Sharma | Backend Developer (Node.js, Express, NestJS)
        </title>
        <meta
          name="description"
          content="Backend Developer at Deloitte. Building scalable REST APIs and microservices using Node.js, Express.js, and NestJS. Experience with PostgreSQL, Redis, caching, and JWT authentication."
        />
        <meta name="language" content="en" />
        <meta name="author" content="Kavya Sharma" />

        {/* Open Graph / Linkedin / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Kavya Sharma | Backend Developer" />
        <meta
          property="og:description"
          content="Backend Developer at Deloitte. Building scalable REST APIs and microservices using Node.js, Express.js, and NestJS."
        />
        <meta property="og:image" content="/banner.svg" />
        <meta property="og:image:alt" content="Kavya Sharma" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:title"
          content="Kavya Sharma | Backend Developer"
        />
        <meta
          property="twitter:description"
          content="Backend Developer at Deloitte. Building scalable REST APIs and microservices using Node.js, Express.js, and NestJS."
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
