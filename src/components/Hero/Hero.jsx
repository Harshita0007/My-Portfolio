import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../util";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harshita Kumari</h1>
        <p className={styles.description}>
        I am passionate about app development using Android Studio and filters, and I am also exploring web development with React and Node.js to create dynamic web applications.
         
        </p>
        <a href="mailto:pandeyharshitaanil@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};