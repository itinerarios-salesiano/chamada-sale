import { useState } from 'react';
import styles from './Aluno.module.scss';

export default function Aluno({ aluno, handleFault, presence }) {

  const [clicked, setClicked] = useState(true);

  function editclicked(clicked){
    setClicked(clicked);
  }

  async function editclickedByPresenceState(presence){
    let resp = await presence;
    if(resp == false){
      editclicked(false);
    }
  }

  editclickedByPresenceState(presence);
  
  const handleClick = () => {
    
    if(handleFault && typeof handleFault === 'function'){
      handleFault(aluno.id, clicked);
    }
    setClicked(!clicked)
  }
  return (
    <div className={styles.aluno} onClick={handleClick}>

       <div className={`${styles.alunoImage} ${!clicked && styles.alunoImgClicked}`} id={aluno.nome}>
        <img src={aluno.image} alt={aluno.nome} />
       </div>

       <div className={styles.alunoInfo}>
        <h3>{aluno.nome}</h3>
      </div>
      
    </div>
  );
}
