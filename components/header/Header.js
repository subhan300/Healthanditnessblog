import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { IoIosClose } from "react-icons/io";
import { useRouter } from "next/router";
import Logo from "../../images/freehealthandfitnesslogocolor.png";

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);
  const [fixOnScroll, setFixOnScroll] = useState(false);

  const router = useRouter();
  const { isAuthenticated, user, loginWithPopup } = useAuth0();
  const size = useWindowSize();
  let firstName = user?.name.split(" ");
  var lastScrollTop = 0;
  const MENU = { text: `${isAuthenticated ? firstName[0] : "Login"}` };

  const login = () => {
    setNavActive(false);

    loginWithPopup();
  };

  const transitionNavbar = () => {
    var st = window.pageYOffset;

    if (st > lastScrollTop) {
      setFixOnScroll(false);
    } else if (st < lastScrollTop) {
      setFixOnScroll(true);
    }
    lastScrollTop = st <= 0 ? 0 : st;
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <header className={`${fixOnScroll && "scroll_fixed"}`}>
      <nav className="nav ">
        <div className="logo">
          <Link href={"/"}>
            <Image
              className="logo_image"
              src={Logo}
              alt="free health and fitness"
            ></Image>
          </Link>
        </div>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${
            navActive && size.width < 769 ? "active" : ""
          } nav__menu-list`}
        >
          <Link
            className={`nav__link_text ${
              router.pathname == "/" ? "activeLink" : ""
            }`}
            href="/"
            onClick={() => {
              setNavActive(false);
            }}
          >
            Home
          </Link>
          <Link
            className={`nav__link_text ${
              router.pathname == "/blogs" ? "activeLink" : ""
            }`}
            href="/blogs"
            onClick={() => {
              // setActiveIdx(idx);
              setNavActive(false);
            }}
          >
            Blogs
          </Link>
          <Link
            className={`nav__link_text ${
              router.pathname == "/faq" ? "activeLink" : ""
            }`}
            href="/faq"
            onClick={() => {
              // setActiveIdx(idx);
              setNavActive(false);
            }}
          >
            FAQ
          </Link>

          <div
            onClick={() => {
              return isAuthenticated ? setNavActive(false) : login();
            }}
            className={`${
              navActive ? "nav__link_btn_active" : ""
            } nav_link_btn`}
          >
            <div className={`nav__link`}>{MENU.text}</div>
          </div>

          <div
            className={`${
              navActive && size.width < 769 ? "showCloseIcon" : "hideIcon"
            }`}
            onClick={() => {
              setNavActive(false);
            }}
          >
            <IoIosClose />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}
