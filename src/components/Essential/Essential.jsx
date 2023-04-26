import React from "react";

import classes from "./Essential.module.css";
import backEssential from '../../assets/images/bg-essential.png'

const Essential = () => {
  return (
    <section id="essentials">
      <div className="container">
        <div style={{ backgroundImage: `url(${backEssential})` }} className={classes.essentialsContent}>
          <div className={classes.essentialsText}>
            <p>THE ESSENTIALS</p>
            <h2>
              We believe minimalism means more. More space, more time, more
              meaningful moments.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Essential;
