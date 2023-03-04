import React from "react";
import { fetchEntries, getSingleBlogPost } from "../api/comment";

import Comment from "../../components/comment";
import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";
import Head from "next/head";
function posts({ post, slug }) {
  let blogCardImageFields = post.blogCardImage.fields;
  let url = blogCardImageFields.file.url;
  let imageUrl = url.replace("//", "https://");

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className={paragraphClass(node)}>{children}</p>
      ),
      [BLOCKS.HEADING_1]: (node, children) => (
        <h1 className={titleClass(node)}>{children}</h1>
      ),
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="h2_title">{children}</h2>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        return (
          <div className="blog_img">
            <img
              src={node.data?.target?.fields?.file?.url}
              alt={node.data?.target?.fields?.title}
              className={`${"blog_content_img"}`}
            />
          </div>
        );
      },
      [BLOCKS.TABLE_ROW]: (node, children) => {
        return <tr className="table_tr">{children}</tr>;
      },
      [BLOCKS.OL_LIST]: (node, children) => <ol className="ol">{children}</ol>,
    },
  };

  function paragraphClass(node) {
    const className = "para_text";
    //alternate logic for 'odd' | 'even'
    return className;
  }

  function titleClass(node) {
    const className = "para_title";
    //alternate logic for 'odd' | 'even'
    return className;
  }

  let metaName = post.metaTags.metaName;
  let metaProperty = post.metaTags.metaProperty;
  let metaLinks = post.metaTags.metaLinks;
  return (
    <>
      <div className="blog_post">
        <Head>
          {metaName.map((val) => (
            <meta title={val.name} content={val.content}></meta>
          ))}
          {metaProperty.map((val) => (
            <meta property={val.property} content={val.content}></meta>
          ))}
          {metaLinks.map((val) => (
            <link rel={val.rel} href={val.href}></link>
          ))}
        </Head>
        {documentToReactComponents(post.content, options)}
        <div className="featuredImage">
          <img src={imageUrl}></img>
        </div>
      </div>

      <div className=" blog_post">
        <Comment title={slug} />
      </div>
    </>
  );
}

export default posts;

export const getStaticProps = async (context) => {
  const { slug } = context.params;
  const post = await getSingleBlogPost(slug);

  return {
    props: { post, slug },
  };
};
export const getStaticPaths = async () => {
  const posts = await fetchEntries();
  const paths = posts?.map((s) => ({ params: { slug: s.fields.slug } })) ?? [];

  return {
    paths,
    fallback: false,
  };
};
