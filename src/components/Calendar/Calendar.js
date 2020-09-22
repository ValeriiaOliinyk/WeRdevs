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

const Calendar = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState("");
  const [month, setMonth] = useState("");
  const {
    monthNamesArr,
    calendarRows,
    selectedDate,
    todayFormatted,
    daysShort,
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
    // if (newDay === "1") {
    //   setDayOfWeek(`${day}st ${newDay}`);
    // }
    setDayOfWeek(`${day}th ${newDay}`);
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
              <tr>
                {daysShort.map((day, index) => (
                  <th key={index} className={styles.calendar__day}>
                    {day}
                  </th>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        {showPopUp && (
          <PopUp onClose={togglePopUp}>
            <Form
              onOpen={togglePopUp}
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
