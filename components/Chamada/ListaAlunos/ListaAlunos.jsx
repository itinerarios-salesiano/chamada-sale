import Aluno from "../Aluno/Aluno";
import styles from "./ListaAlunos.module.scss";

export default function ListaAlunos({ alunos, handleFault, chamadaDayID }) {

  function getAlunoPresence(alunoId){
    //wait window load and get presence boleaan on local storege
    return new Promise((resolve, reject) => {
      window.addEventListener('load', () => {
        let chamada = localStorage.getItem(chamadaDayID);
        let presence = chamada ? chamada.presence[alunoId] : true;
        resolve(presence);
      });
    });
  }
  return (
    <div className={styles.alunosList}>
      {alunos.map((aluno, index) => (
        <Aluno key={aluno.id} aluno={aluno} handleFault={handleFault} presence={getAlunoPresence(aluno.id)} />
      ))}
    </div>
  );
}
