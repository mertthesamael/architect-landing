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
      </div>
    </header>
  );
};

export default Header;
