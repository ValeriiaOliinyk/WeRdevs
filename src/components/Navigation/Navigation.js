import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import routes from "../../routes";

const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <div className={styles.header__logo}></div>
        <ul className={styles.header__list}>
          <li className={styles.header__item}>
            <NavLink to={routes.home} className={styles.header__link}>
              Home
            </NavLink>
          </li>
          <li className={styles.header__item}>
            <NavLink
              to={routes.about}
              className={styles.header__link}
              activeClassName={styles.header__active}
            >
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
