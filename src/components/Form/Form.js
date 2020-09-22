import React from "react";
import styles from "./Form.module.css";

const Form = ({ onOpen, newMonth, newDayOfWeek }) => {
  return (
    <form>
      <button type="submit" onClose={() => onOpen} className={styles.form__btn}>
        Х
      </button>
      <div className={styles.form__box}>
        <div className={(styles.input__box, styles.input__left)}>
          <label for="month" className={styles.input__label}>
            Month
          </label>
          <br />
          <input
            className={styles.form__input}
            placeholder={newMonth}
            id="month"
            disabled
          />
        </div>
        <div className={(styles.input__box, styles.input__right)}>
          <label for="day" className={styles.input__label}>
            Day
          </label>
          <br />
          <input
            className={styles.form__input}
            placeholder={newDayOfWeek}
            id="day"
            disabled
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
