import React from "react";
import Loader from "react-loader-spinner";
import styles from "./MainLoader.module.css";

const MainLoader = () => (
  <div className={styles.loader}>
    <Loader type="Oval" color="#fdd000" height={80} width={80} />
  </div>
);

export default MainLoader;
