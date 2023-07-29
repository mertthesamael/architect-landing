import React, { FC } from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png"
import { NavItems } from "./constants";
interface HeaderProps {}
const Header: FC<HeaderProps> = ({}) => {
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
        <div className={styles.header__inner__hamburger}>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none">
            <path d="M17.25 7.75H6.75" stroke="#160042" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.25 12H6.75" stroke="#160042" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M17.25 16.25H6.75" stroke="#160042" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
