// STYLES
import styles from "./About.module.css";

import React from "react";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.aboutInfo}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.
        </p>
      </div>
      <div className={styles.aboutImages}>
        <img src="/chefs1.jpg" alt="Mario and Adrian in Kitchen" />
        <img src="/chefs2.jpg" alt="Mario and Adrian Smiling" />
      </div>
    </section>
  );
}
