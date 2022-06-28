import { useEffect, useState } from "react";
import styles from "./Aluno.module.scss";

export default function Aluno({ student, dates, selectedDate, handleFault }) {
  const [isFault, setIsFault] = useState(false);

  useEffect(() => {
    let date = dates.find((date) => date.id === selectedDate);
    if (date && date.presence) {
      // check if date.presence has key student.id
      if (date.presence[student.id]) {
        setIsFault(!date.presence[student.id]);
      } else {
        setIsFault(true);
      }
    } else {
      setIsFault(true);
    }
  }, [dates, selectedDate, student.id]);

  function handleClick() {
    handleFault(student.id);
    setIsFault(!isFault);
  }

  return (
    <div className={styles.aluno} onClick={handleClick}>
      <div
        className={`${styles.alunoImage} ${isFault && styles.alunoImgClicked}`}
        id={student.name}
      >
        <img
          src={
            student.image ||
            "https://images.unsplash.com/photo-1524293568345-75d62c3664f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=711&q=80"
          }
          alt={student.name}
        />
      </div>

      <div className={styles.alunoInfo}>
        <h3>{student.name}</h3>
      </div>
    </div>
  );
}
