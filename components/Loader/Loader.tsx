"use client";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.spinner}></div>
      <p className={styles.loaderText}>Loading, please wait...</p>
    </div>
  );
}
