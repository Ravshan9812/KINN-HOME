import React from "react";

import classes from "./Sign-up.module.css";

const SignUp = () => {
  return (
    <section id={classes["signUp"]}>
      <div className="container">
        <div className={classes.signUp}>
          <h2>Sign up to our newsletter</h2>
          <p>Receive special offers and first look at new products.</p>
        </div>

        <div className={classes.signUpItems}>
          <div className={classes.line}></div>
          <div className={classes.btnContent}>
            <a href="#" className={classes.signUpBtn}>Subscribe</a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;
