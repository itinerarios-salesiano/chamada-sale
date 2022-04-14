import styles from './Aluno.module.scss';

export default function Aluno({ aluno }) {
  return (
    <div className={styles.aluno}>
      <div className={styles.alunoImage}>
        <img src={aluno.image} alt={aluno.nome} />
      </div>
      <div className={styles.alunoInfo}>
        <h3>{aluno.nome}</h3>
      </div>
    </div>
  );
}
