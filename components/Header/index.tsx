"use client"
import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"
import { NavItems } from "./constants";
interface HeaderProps {}
const Header: FC<HeaderProps> = ({}) => {
  const [mobileDdState, setMobileDdState] = useState(false)
  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <div className={styles.header__inner__logo}>
            <Image src={logo} alt="Logo"/>
            <h1><span>The</span>Box</h1>
        </div>
        <nav className={styles.header__inner__nav}>
          <ul>
            {NavItems.map((el, _i)=> <li key={_i}><Link style={el.id===5?{color:'#F9995D'}:{}} href={el.href}>{el.name}</Link></li>)}
          </ul>
        </nav>
        <div className={styles.header__inner__hamburger} onClick={() => setMobileDdState((prev) => !prev)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
            <path d="M17.25 7.75H6.75" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.25 12H6.75" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M17.25 16.25H6.75" stroke="#160042" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div tabIndex={0} onBlur={() => setMobileDdState(false)} className={styles.header__mobileNav} style={mobileDdState?{height:'20rem'}:{height:'0'}}>
            <nav>
          <ul>
              {NavItems.map((el, _i)=> <li key={_i}><Link style={el.id===5?{color:'#F9995D'}:{}} href={el.href}>{el.name}</Link></li>)}
          </ul>
            </nav>
      </div>
    </header>
  );
};

export default Header;
