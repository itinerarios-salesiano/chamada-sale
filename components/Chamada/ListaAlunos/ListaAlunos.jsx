import { useEffect } from "react";
import Aluno from "../Aluno/Aluno";
import styles from "./ListaAlunos.module.scss";

export default function ListaAlunos({ students, dates, selectedDate, handleFault }) {

  return (
    <div className={styles.alunosList}>
      {students && students.map((aluno, index) => (
        <Aluno key={aluno.id} student={aluno} handleFault={handleFault} dates={dates} selectedDate={selectedDate} />
      ))}
    </div>
  );
}
