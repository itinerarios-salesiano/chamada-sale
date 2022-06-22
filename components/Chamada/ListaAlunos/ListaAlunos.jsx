import Aluno from "../Aluno/Aluno";
import styles from "./ListaAlunos.module.scss";

export default function ListaAlunos({ alunos, handleFault }) {

  return (
    <div className={styles.alunosList}>
      {alunos.map((aluno, index) => (
        <Aluno key={aluno.matricula} aluno={aluno} handleFault={handleFault} />
      ))}
    </div>
  );
}
