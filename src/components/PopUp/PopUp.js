import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import styles from "./PopUp.module.css";

const popUpRoot = document.querySelector("#pop-up-root");

export default function PopUp({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={styles.popUp__backdrop} onClick={handleBackdropClick}>
      <div className={styles.popUp__content}>{children}</div>
    </div>,
    popUpRoot
  );
}

PopUp.propTypes = {
  children: PropTypes.node.isRequired,
};
