import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypingEffect() {
  return (
    <div>
      <div className="text_animation">
        <p>Free Health and Fitness</p>
        <Typewriter
          options={{
            loop: true,
            // Other options go here
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("Empower Your Health")

              .pauseFor(1500)
              .deleteAll();
            typewriter
              .typeString("Transform Your Life - For Free!")
              .pauseFor(1500)
              .start();
          }}
        />
      </div>
      <div>
        <p className="mt_1 text_sm">
          Welcome to our nutrition website! We are committed to <br /> providing
          you with accurate and up-to-date information on <br /> nutrition and
          health.
        </p>
        <br /> <br />
        <Link href={"/blogs"} to="/blogs">
          <button
            aria-label="Go To Blogging Page"
            className="nav_link_btn nav_link_btn_padding "
          >
            Go To Blogs
          </button>
        </Link>
      </div>
    </div>
  );
}
