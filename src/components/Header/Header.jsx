import React from "react";

import classes from "./Header.module.css";
import backLogo from "../../assets/images/hero-bg.png";

const Header = () => {
  return (
    <div className="container">
      <div
        style={{ backgroundImage: `url(${backLogo})` }}
        className={classes.headerContent}
      >
        <div className={classes.headerText}>
          <p>ALL COLLECTIONS</p>
          <h1>Elevate Your Everyday</h1>
          <a href="#" className={classes.btn}>
            SHOP NOW
          </a>
        </div>
      </div>
      <div className={classes.mainText}>
        <h2>
          If your happy place is at the dinner table, we totally get that.
          That's why we created products to help you find slow moments in a fast
          world.
        </h2>
        <div className={classes.mainLinks}>
          <a href="#">Shop ALL</a>
          <a href="#">Read Stories</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
