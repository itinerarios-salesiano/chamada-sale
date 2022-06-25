import { useState } from "react";
import styles from "./Calendary.module.scss";

export default function Calendary({ dates }) {
  return (
    <div className={styles.calendaryDiv}>
      <select id="calendary" className={styles.calendarySelect}>
        {dates.map((data) => {
            let dateStr = data.date.toDateString()
            return(<option key={dateStr}value={dateStr}>{dateStr} </option>)
        })}
      </select>
    </div>
  );
}
