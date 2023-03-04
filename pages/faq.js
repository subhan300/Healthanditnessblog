import React from "react";
import Faq from "react-faq-component";
import data from "../lib/faq.json";
import Head from "next/head";
const styles = {
  // bgColor: 'white',
  titleTextColor: "#2c2c51",

  rowTitleColor: "#2c2c51",
  rowContentColor: "#677294;",
  // arrowColor: "red",
  titleText: "100px",
};

const config = {
  animate: true,
  // arrowIcon: "V",
  tabFocus: true,
};

function faq() {
  return (
    <div className="faq bd_red container_faq">
      <Head>
        <title>Buses Routes/ Faq</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://blogging-page-psi.vercel.app/" />
        <meta
          property="article:published_time"
          content="2022-01-01T12:00:00+00:00"
        />
        <meta property="article:author" content="subhan akram"></meta>
        <meta
          name="title"
          content="Bus System in Karachi - Detailed Bus Route Information and Map Feature"
        />
        <meta
          name="description"
          content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://images.ctfassets.net/wus7u7nserin/3VaFfNShN9q4XKE4dEVpej/38ee95142ba3fe1223973d13f0d6a68e/c2.jpeg?h=250"
        />
        <meta
          property="og:url"
          content="https://blogging-page-psi.vercel.app/"
        />
        <meta
          property="og:description"
          content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option."
        />
        <meta
          property="og:title"
          content="Bus System in Karachi - Detailed Bus Route Information and Map Feature"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:title"
          content="Bus System in Karachi - Detailed Bus Route Information and Map Feature"
        />
        <meta
          property="twitter:description"
          content="Our website provides a one-stop-shop for information on the bus system in Karachi, including detailed descriptions of each bus route, a map feature to easily locate bus routes, fare information, schedule and reviews of bus services, and a comparison chart to help users decide on their preferred option."
        />
        <meta
          property="twitter:image"
          content="https://images.ctfassets.net/wus7u7nserin/3VaFfNShN9q4XKE4dEVpej/38ee95142ba3fe1223973d13f0d6a68e/c2.jpeg?h=250"
        />
        <meta
          property="twitter:url"
          content="https://blogging-page-psi.vercel.app/"
        />
      </Head>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
}

export default faq;
