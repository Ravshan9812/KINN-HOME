import React from "react";

import classes from "./Table.module.css";
import tableImg from '../../assets/images/table-img.png';

const Table = () => {
  return (
    <section id={classes["table"]}>
      <div className="container">
        <div className={classes.tableContent}>
          <div className={classes.tableText}>
            <h2>Your Table Your Time</h2>
            <p>
              Our modern lives keep us in constant motion. But what keeps us
              moving isn't always what moves us. Our time at the table is our
              pause button. Meals can become moments and moments can become
              memories. So grab a plate, pull up a seat, and stay a while
            </p>
          </div>
          <div className={classes.tableImage}>
            <img className={classes.tableImg} src={tableImg} alt="tableImg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
