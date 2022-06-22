import { useState } from "react";
import Aluno from "../components/Chamada/Aluno/Aluno";
import ListaAlunos from "../components/Chamada/ListaAlunos/ListaAlunos";
import Navbar from "../components/Navbar/Navbar";

export default function Chamada() {
  const items = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Chamada",
      link: "/chamada",
    },
  ];

  function getAlunos(day){
    
    if(!localStorage.getItem(day)){
        return exampleList;
    }
    return JSON.parse(localStorage.getItem(day));
  }
  
  let exampleList = [
    {
      nome: "João",
      matricula: "12345",
      image: "https://picsum.photos/200/300",
      presence: true,
    },
    {
      nome: "Maria",
      matricula: "54321",
      image: "https://picsum.photos/200/300",
      presence: true,
    },
    {
      nome: "José",
      matricula: "98765",
      image: "https://picsum.photos/200/300",
      presence: true,
    },
  ];
  function setChamadaOfDay(day, chamada) {
    localStorage.setItem(day, JSON.stringify(chamada));
  }


  function editChamadaOfDay(day, newchamda){
    setChamadaOfDay(day, newchamda)
  }
  function handleFaultFunc(matricula, state) {
    let alunos = getAlunos('22/06/2022')
    let aluno = alunos.filter((item) => {
      if (item.matricula == matricula) {
        return item;
      }
    });
    let pos = alunos.indexOf(aluno);
    aluno[0].presence = !state;
    alunos[pos] = aluno;
    editChamadaOfDay('22/06/2022', alunos)
  }
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    const item = localStorage.getItem('key')
  }
  return (
    <div>
      <Navbar title={"Site"} items={items} />
      <h1>Chamada</h1>
      <ListaAlunos alunos={exampleList} handleFault={handleFaultFunc} />
    </div>
  );
}
