import Image from "next/image";
import styles from "./style.module.scss";
import React, { FC } from "react";
import PriamryInput from "../Forms/Inputs/PrimaryInput";
import logo from "@/assets/logo.png";
import PrimaryButton from "../Buttons/PrimaryButton";
import { facebook, linkedin, twitter } from "@/services/Icons/svgIcons";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footer__inner}>
        <div className={styles.footer__inner__info}>
          <div className={styles.footer__inner__info__contact}>
            <div className={styles.footer__inner__info__contact__item}>
              <span>ADDRESS:</span>
              <h3>6391 Elgin St. Celina, Delaware 10299</h3>
            </div>
            <div className={styles.footer__inner__info__contact__item}>
              <span>PHONE:</span>
              <h3>+90 530 043 89 34</h3>
            </div>
            <div className={styles.footer__inner__info__contact__item}>
              <span>EMAIL:</span>
              <h3>mertenercan@gmail.com</h3>
            </div>
          </div>
          <div className={styles.footer__inner__info__logo}>
            <Image src={logo} alt="Logo" />
            <h1>
              <span>The</span>Box
            </h1>
          </div>
        </div>
        <div className={styles.footer__inner__newsletter}>
          <div className={styles.footer__inner__newsletter__form}>
            <h2>NEWSLETTER:</h2>
            <div className={styles.footer__inner__newsletter__form__input}>
              <PriamryInput placeholder="Your email here" type="text"/>
              <button>Subscribe</button>
            </div>
          </div>
          <div className={styles.footer__inner__newsletter__socials}>
            <h2>SOCIAL:</h2>
            <div className={styles.footer__inner__newsletter__socials__icons}>
              {facebook()}
              {linkedin()}
              {twitter()}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer__banner}>
        <div className={styles.footer__banner__inner}>
          <p>TheBox Company © 2022. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
