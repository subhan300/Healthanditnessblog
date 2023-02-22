import Link from "next/link";
import Image from "next/image";
import React, { useState,useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react'
import {IoIosClose} from "react-icons/io"
import NavItem from "./NavItem";
import { useRouter } from "next/router";
import Logo from "../../images/freehealthandfitnesslogocolor.png"
const Navbar = () => {
  
  const router = useRouter();
  const { isAuthenticated,user ,loginWithPopup} = useAuth0()
  const size = useWindowSize();
  let firstName=user?.name.split(" ")
  const MENU_LIST = [
    { text: `${isAuthenticated? firstName[0] : 'Login'}`},

  ];
  

  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

const login=()=>{
    
  setNavActive(false)

  loginWithPopup()
}
  return (
    <header>
      <nav className={`nav`}>
        <Link href={'/'}>
          {/* <a> */}
          {/* <h1 className='logo' >Health&Fitness</h1> */}
         <div className="logo"><Image className="logo_image"  src={Logo} alt="free health and fitness"></Image></div>
          {/* </a> */}
        </Link>
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
            navActive && size.width < 769 ? 'active' : ''
          } nav__menu-list`}
        >
          <Link
            className={`nav__link_text ${router.pathname == "/" ? "activeLink" : ""}`}
            href='/'
            onClick={() => {
              setNavActive(false)
            }}
          >
            Home
          </Link>
          <Link
             className={`nav__link_text ${router.pathname == "/blogs" ? "activeLink" : ""}`}
            href='/blogs'
            onClick={() => {
              // setActiveIdx(idx);
              setNavActive(false)
            }}
          >
            Blogs
          </Link>
          <Link
            className={`nav__link_text ${router.pathname == "/faq" ? "activeLink" : ""}`}
            href='/faq'
            onClick={() => {
              // setActiveIdx(idx);
              setNavActive(false)
            }}
          >
            FAQ
          </Link>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {return isAuthenticated ? setNavActive(false) : login() }}
              key={menu.text}
              className={`${
                navActive ? 'nav__link_btn_active' : '' } nav_link_btn`} >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}

          <div
            className={`${
              navActive && size.width < 769 ? 'showCloseIcon' : 'hideIcon'
            }`}
            onClick={() => {
        
              setNavActive(false)
            }}
          >
            <IoIosClose />
          </div>
        </div>
      </nav>
    </header>
  )
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