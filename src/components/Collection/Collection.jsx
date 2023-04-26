import React from "react";

import classes from './Collection.module.css';
import Collection1 from '../../assets/images/collection1.png'
import Collection2 from '../../assets/images/collection2.png'
import Collection3 from '../../assets/images/collection3.png'

const Collection = () => {
  return (
    <section id={classes["collection"]}>
      <div className="container">
        <h2 className={classes.collectionTitle}>Maple Board Collection</h2>

        <div className={classes.collectionItems}>
          <div className={classes.collectionItem}>
            <img className={classes.collectionImg} src={Collection1} alt="collectionImg" />
            <p className={classes.collectionSubtitle}>Maple Board - Short</p>
            <p className={classes.collectionPrice}>$98.00</p>
          </div>
          <div className={classes.collectionItem}>
            <img className={classes.collectionImg} src={Collection2} alt="collectionImg" />
            <p className={classes.collectionSubtitle}>Maple Board - Long</p>
            <p className={classes.collectionPrice}>$125.00</p>
          </div>
          <div className={classes.collectionItem}>
            <img className={classes.collectionImg} src={Collection3} alt="collectionImg" />
            <p className={classes.collectionSubtitle}>Maple Board - Wide</p>
            <p className={classes.collectionPrice}>$158.00</p>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Collection;