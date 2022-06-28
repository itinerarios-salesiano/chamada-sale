import { useState } from "react";
import styles from "./Calendary.module.scss";

export default function Calendary({
  dates,
  setSelectedDate,
  selectedDate,
  addDate,
  removeDate,
}) {
  // parse date to dd/mm/yyyy
  const parseDate = (date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className={styles.calendaryDiv}>
      {dates.map((data) => {
        let dateStr = parseDate(data.date);
        return (
          <div
            key={data.id}
            className={`${styles.calendaryDate} ${
              selectedDate === data.id && styles.calendaryDateClicked
            }`}
            onClick={() => {
              setSelectedDate(data.id);
            }}
          >
            {dateStr}
            <button
              className={styles.removeDate}
              onClick={() => {
                removeDate(data.id);
              }}
            >
              X
            </button>
          </div>
        );
      })}
      <button className={styles.addDate} onClick={() => addDate()}>
        +
      </button>
    </div>
  );
}
