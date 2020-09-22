import React from "react";
import styles from "./Week.module.css";

const Week = () => {
  return (
    <ul className={styles.week}>
      <li className={styles.week__day}>S</li>
      <li className={styles.week__day}>M</li>
      <li className={styles.week__day}>T</li>
      <li className={styles.week__day}>W</li>
      <li className={styles.week__day}>T</li>
      <li className={styles.week__day}>F</li>
      <li className={styles.week__day}>S</li>
    </ul>
  );
};

export default Week;
