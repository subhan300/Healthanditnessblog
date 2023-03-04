import Reacr, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Container from "../../components/container";
import { fetchEntries } from "../api/comment";
import BlogCards from "../../components/blog-card/BlogCards";
import { FaRocket } from "react-icons/fa";
import Head from "next/head";
export default function NotePage({ posts }) {
  let ref = useRef(null);
  const [filterPost, setFilterPost] = useState([]);
  useEffect(() => {
    setFilterPost(posts);
  }, []);

  const filterBlogs = (s) => {
    let inputValue = ref?.current.value.toLowerCase();

    if (inputValue == "") {
      return setFilterPost(posts);
    }
    const filteredItems = posts.filter((item) =>
      item.title.toLowerCase().includes(inputValue)
    );
    setFilterPost(filteredItems);
  };
  return (
    <Container>
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

      <div className="container_home bd_red">
        <div className="blog_search bd_red">
          <input
            ref={ref}
            className="bd_yellow"
            placeholder="search"
            onChange={() => {
              filterBlogs();
            }}
          ></input>
          <button
            aria-label="Search Buses"
            className="bd_blue search_icon"
            onClick={() => {
              filterBlogs("f");
            }}
          >
            <FaRocket />
          </button>
        </div>

        <div className="blog_cards bd_red">
          {filterPost.map((post, id) => (
            <Link
              key={id}
              as={`/blogs/${post.slug}`}
              href="/blogs/[slug]"
              className="blog_link bd_yellow text-lg leading-6 font-bold"
            >
              <BlogCards data={post} />
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {
    return p.fields;
  });

  return {
    props: {
      posts,
    },
  };
}
