import "tailwindcss/tailwind.css";

import type { AppProps } from "next/app";
import Head from "next/head";
import Header from "../components/header";
import { Auth0Provider } from "@auth0/auth0-react";
import { DefaultSeo } from "next-seo";
import "../styles/Blog.css";
import "../styles/globals.css";
import "../styles/Home.css";
import "../components/content-section/ContentSection.css";
import "../components/Footer/Footer.css";
import "../components/blog-card/BlogCards.css";
import "../styles/Faq.css";
import FavIcon from "./../images/favicon.png";

import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
const options = {
  // you can also just use 'bottom center'
  position: positions.TOP_CENTER,
  timeout: 5000,
  offset: "30px",

  // you can also just use 'scale'
  transition: transitions.SCALE,
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Head>
        <meta
          name="google-site-verification"
          content="pyZepu5U4bFI9qYJWN7rcmQg_IqCEE-cUxnE8T5kxmY"
        />
      </Head>
      <AlertProvider template={AlertTemplate} {...options}>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="Clone and deploy your own Next.js portfolio in minutes."
          />
          {/* <link rel="icon" href={FavIcon} /> */}
          <title>Free Health And Fitness</title>
        </Head>

        <Header />

        <main>
          <Component {...pageProps} />
        </main>
      </AlertProvider>
    </Auth0Provider>
  );
}
