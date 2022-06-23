import { useState } from 'react';
import styles from './Calendary.module.scss';

export default function Calendary() {
    let ListOfDates = ["2022-1-01", "2022-1-02", "2022-1-01"];
    let today = new Date();
    let todayString = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    ListOfDates.push(todayString);
    return(
        <div className={styles.calendaryDiv}>
            <select id='calendary'  className={styles.calendarySelect}>
                {ListOfDates.map((date, index) => {
                    return <option key={index}>{date}</option>
                }
                )}
            </select>
        </div>
    )
}