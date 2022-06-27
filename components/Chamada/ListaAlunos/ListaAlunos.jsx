import Aluno from "../Aluno/Aluno";
import styles from "./ListaAlunos.module.scss";

export default function ListaAlunos({ alunos, handleFault, chamadaDayID }) {

  async function getAlunoPresence(alunoId){
    let dayID = await chamadaDayID;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let chamada = localStorage.getItem(dayID);
        let presence = chamada ? JSON.parse(chamada).presence[`${alunoId}`] : true;
        resolve(presence);      
    }, 1);
  })
  }
  return (
    <div className={styles.alunosList}>
      {alunos.map((aluno, index) => (
        <Aluno key={aluno.id} aluno={aluno} handleFault={handleFault} presence={getAlunoPresence(aluno.id)} />
      ))}
    </div>
  );
}
