import React from 'react'
import styles from "./About.module.css";
import { getImageUrl } from "../../util";

 export const About = () => {
  return (
   <section  className={styles.container}>
   <h1  className={styles.title}>About</h1>
    <div className={styles.content}>
    <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
    <ul  className={styles.aboutItems}>
      <li className={styles.aboutItem}>
       <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
       <div className={styles.aboutItemText}>
       <h3>Android Developer</h3>
              <p>
                I'm a Android developer with experience in building responsive
                and optimized apps.
              </p>
        </div>
     </li>

     <li className={styles.aboutItem}>
        <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
        <div className={styles.aboutItemText}>
        <h3>web Developer</h3>
              <p>
                I have experience developing fast and optimised website.
              </p>
        </div>
     </li>

     <li className={styles.aboutItem}>
        <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
        <div className={styles.aboutItemText}>
        <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
        </div>
    </li>
    </ul>
    </div>
   </section>
  );
};

