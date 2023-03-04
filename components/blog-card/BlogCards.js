import Image from "next/image";
import React from "react";

function BlogCards({ data }) {
  let url = data.blogCardImage.fields.file.url;
  let imageUrl = url.replace("//", "https://");

  return (
    <div className="blog_card_component  bd_blue">
      <div className="img_div bd_red blog_card_img">
        <Image
          alt={data.blogCardImage.fields.title}
          width={1000}
          height={1000}
          src={imageUrl}
        />
      </div>
      <div className="blog_card_content">
        <h1 className="blog_card_title bd_red ">{data.title}</h1>
      </div>
      <div>
        <p className="blog_card_text text_sm">{data.description}</p>
      </div>
    </div>
  );
}

export default BlogCards;
