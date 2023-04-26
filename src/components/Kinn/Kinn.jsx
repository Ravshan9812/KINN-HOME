import React from "react";

import classes from './Kinn.module.css';
import kinn1 from '../../assets/images/kinn1.png';
import kinn2 from '../../assets/images/kiin2.png';
import kinn3 from '../../assets/images/kinn3.png';
import kinn4 from '../../assets/images/kinn4.png';

const Kinn = () => {
  return (
    <section id={classes['kinn']}>
      <div className="container">
        <h2 className={classes.kinnTitle}>#KinnMoments</h2>
        <div className={classes.kinnContent}>
          <div className={classes.imgItem}><img src={kinn1} alt="kinnImg" /></div>
          <div className={classes.imgItem}><img src={kinn2} alt="kinnImg" /></div>
          <div className={classes.imgItem}><img src={kinn3} alt="kinnImg" /></div>
          <div className={classes.imgItem}><img src={kinn4} alt="kinnImg" /></div>
        </div>
      </div>
    </section>
  )
};

export default Kinn;