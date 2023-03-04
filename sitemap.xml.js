import React from "react";
import { fetchEntries } from "./api/comment";
const Sitemap = () => {};

export const getServerSideProps = async ({ res }) => {
  const BASE_URL = "http://localhost:3000/"; //This is where you will define your base url. You can also use the default dev url http://localhost:3000

  const blogs = await fetchEntries();
  const dynamicPaths = blogs.map((singleBlog) => {
    console.log("url : ", `${BASE_URL}/blogs/${singleBlog.fields.slug}`);
    return `${BASE_URL}/blogs/${singleBlog.fields.slug}`;
  });
  const allPaths = [
    `${BASE_URL}/faq.js`,
    `${BASE_URL}/blogs.js`,
    ...dynamicPaths,
  ];
  // <lastmod>${new Date().toISOString()}</lastmod>
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    
      ${allPaths
        .map((url) => {
          return `
            <url>
              <loc>${url}</loc>
             
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
