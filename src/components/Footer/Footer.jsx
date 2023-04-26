import React from "react";

import classes from "./Footer.module.css";
import { FaFacebookF } from 'react-icons/fa';
import { FaAt } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <section id={classes["footer"]}>
      <div className="container">
        <div className={classes.footerContent}>
          <div className={classes.contact}>
            <p className={classes.create}>© 2021 Kinn Home</p>
            <p>Need to get in touch? Just email us at hello@kinnhome.co</p>
          </div>

          <div className={classes.footerExplore}>
            <p>Explore</p>
            <ul>
              <li><a href="#">Shop</a></li>
              <li><a href="#">Style Quiz</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Stories</a></li>
            </ul>
          </div>

          <div className={classes.footerHelp}>
            <p>Help</p>
            <ul>
              <li><a href="#">FAQs + Shipping</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">Trade</a></li>
            </ul>
          </div>

          <div className={classes.socials}>
            <a href="#">
            <FaFacebookF />
            </a>
            <a href="#">
              <FaAt />
            </a>
            <a href="#">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
