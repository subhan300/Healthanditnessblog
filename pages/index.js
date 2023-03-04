import Container from "../components/container";
import Image from "next/image";
import TextAnimation from "../components/text-animation/TextAnimation";
import Footer from "../components/Footer/Footer";
import HealthAndFitness from "../images/healthy life.png";
import NutritionAndDiet from "../images/healthandfitness.jpg";
import Head from "next/head";
import ContentSection from "../components/content-section/ContentSection";


function HomePage() {
  return (
    <div>
      <Head>
        <title>Free Health And Fintess</title>
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="canonical" href="https://blogging-page-psi.vercel.app/" />
        <meta
          property="article:published_time"
          content="2022-01-01T12:00:00+00:00"
        />
        <meta property="article:author" content="subhan akram"></meta>
        <meta name="title" content="Free Health And Fitness" />
        <meta
          name="keywords"
          content="fitness & nutrition,women's nutrition and fitness,health fitness nutrition,physical fitness and nutrition"
        ></meta>
        <meta
          name="description"
          content="We are committed to
          providing you with accurate and up-to-date information on
          nutrition and health."
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
        <meta property="og:title" content="Free Health And Fitness" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:title" content="Free Health And Fitness" />
        <meta
          property="twitter:description"
          content="We are committed to
          providing you with accurate and up-to-date information on
          nutrition and health."
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
      <div className="container_home bd_red">
        <Container>
          <br />
          <div className="home_hero_secttion  bd_red">
            <div className="hero_left bd_green">
              <TextAnimation />
            </div>
            <div className="hero_right bd_green">
              <Image className="img_lan mt_4" 
              width={1000}
              height={600}
              src={HealthAndFitness} alt="my desk"
              priority={1}
              />
            </div>
          </div>
          <br />
          <div className="home_hero_secttion bd_yellow ">
            <div className="hero_right bd_green">
              <Image
                src={NutritionAndDiet}
                alt="Nutrition Diet"
                className="health_parameter_imagex"
                priority={2}
                // width={1000}
                // width={600}
                // height={600}
                // sizes="(max-width: 600px) 100vw, (max-width: 960px) 50vw, 800px"
              />
            </div>
            <div className="hero_left bd_green">
              <h1 className="section1_title">
                Are you looking for Best Health and Nutrition Information?{" "}
                <br />
              </h1>
              <p className="text_sm mt_2">
                Our website is free to use and accessible to everyone, so you
                can start your journey to better health today. We are committed
                to providing you with reliable, evidence-based information and
                practical advice that you can trust.{" "}
              </p>
              <ul className="list_points">
                <li>
                  Our blog pages cover a range of nutrition and health topics,
                  including healthy recipes, meal planning, tips for dining out,
                  and nutritional guides.{" "}
                </li>
                <li>
                  Our team of experienced dietitians and health experts provide
                  reliable and practical advice on nutrition and health, helping
                  you make informed decisions about your diet and lifestyle.
                </li>
                <li>
                  Our blog pages feature an extensive collection of articles on
                  a wide range of nutrition and health topics, including weight
                  management, disease prevention, and healthy eating habits.
                </li>
              </ul>
            </div>
          </div>

          <ContentSection />
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
