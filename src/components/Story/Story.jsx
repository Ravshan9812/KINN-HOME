import React from "react";

import classes from "./Story.module.css";
import storyImg from "../../assets/images/story-img.png";

const Story = () => {
  return (
    <section id={classes["story"]}>
      <div className="container">
        <div className={classes.storyContent}>
          <div className={classes.storyImage}>
            <img className={classes.storyImg} src={storyImg} alt="storyImg" />
          </div>
          <div className={classes.storyText}>
            <h2>Our Design Story</h2>
            <p>
              We believe in thoughtful, intentional living. So we promise not to
              clutter your cabinets with one-off pieces you'll rarely use. Our
              collection only includes items you'll reach for every day. Because
              mindful living should be simple, not stressful.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
