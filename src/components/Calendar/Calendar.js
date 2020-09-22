import React, { useState } from "react";
import useCalendar from "../../helpers/useCalendar";
import PopUp from "../PopUp";
import styles from "./Calendar.module.css";
import IconButton from "../IconButton";
import { ReactComponent as LeftArrowIcon } from "../../images/left-arrow.svg";
import { ReactComponent as RightArrowIcon } from "../../images/next.svg";

// Components
import Banner from "../Banner";
import Form from "../Form";
import Week from "../Week";

const Calendar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");
  const {
    monthNamesArr,
    calendarRows,
    selectedDate,
    todayFormatted,
    monthNames,
    getNextMonth,
    getPrevMonth,
  } = useCalendar();

  const getWeekDay = (date) => {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[date.getDay()];
  };

  const getMonth = (date) => monthNamesArr[date.getMonth()];

  const dateClickHandler = (date) => {
    let parsedDate = date.replace(/-/g, " ").split(" ");
    let day = +parsedDate[0];
    let month = +parsedDate[1] - 1;
    let year = +parsedDate[2];
    let newDate = new Date(year, month, day);
    let newDay = getWeekDay(newDate);
    let newMonth = getMonth(newDate);

    if (day === 1) {
      setDayOfWeek(`${day}st ${newDay}`);
    } else if (day === 2) {
      setDayOfWeek(`${day}nd ${newDay}`);
    } else if (day === 3) {
      setDayOfWeek(`${day}rd ${newDay}`);
    } else {
      setDayOfWeek(`${day}th ${newDay}`);
    }

    setMonth(newMonth);
    setShowPopUp(true);
  };

  const togglePopUp = () => {
    setShowPopUp((prevPopUp) => !prevPopUp);
  };

  return (
    <section className={styles.calendar}>
      <Banner />
      <div className={styles.calendar__main}>
        <div className={styles.calendar__container}>
          <div className={styles.calendar__box}>
            <IconButton onClick={getPrevMonth}>
              <LeftArrowIcon />
            </IconButton>
            <h3 className={styles.calendar__title}>
              {`${
                monthNames[selectedDate.getMonth()]
              }  ${selectedDate.getFullYear()}`}
            </h3>
            <IconButton onClick={getNextMonth}>
              <RightArrowIcon />
            </IconButton>
          </div>
          <div className={styles.calendar__line}></div>
          <table className="table">
            <tbody>
              {Object.values(calendarRows).map((cols) => {
                return (
                  <tr key={cols[0].date} className={styles.calendar__row}>
                    {cols.map((col) =>
                      col.date === todayFormatted ? (
                        <td
                          key={col.date}
                          className={`${col.classes}today same`}
                          onClick={() => dateClickHandler(col.date)}
                        >
                          {col.value}
                        </td>
                      ) : (
                        <td
                          key={col.date}
                          className={`${col.classes}same`}
                          onClick={() => dateClickHandler(col.date)}
                        >
                          {col.value}
                        </td>
                      )
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className={styles.calendar__line}></div>
          <Week />
          <div className={styles.calendar__line}></div>
        </div>
        {showPopUp && (
          <PopUp onClose={togglePopUp}>
            <Form
              onClose={togglePopUp}
              newMonth={month}
              newDayOfWeek={dayOfWeek}
            />
          </PopUp>
        )}
      </div>
    </section>
  );
};

export default Calendar;
