import { useState } from "react";
import Aluno from "../components/Chamada/Aluno/Aluno";
import Calendary from "../components/Chamada/Calendary/Calendary";
import ListaAlunos from "../components/Chamada/ListaAlunos/ListaAlunos";
import Navbar from "../components/Navbar/Navbar";

export default function Chamada() {
  let today = new Date();
  let todayString = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
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

  function getAluno(matricula){
    
    if(!localStorage.getItem(matricula)){
        return exampleList.filter(item => item.matricula === matricula)[0];
    }
    return JSON.parse(localStorage.getItem(matricula));
  }
  
  let exampleList = [
    {
      nome: "João",
      matricula: "12345",
      image: "https://picsum.photos/200/300",
      days:[
        {
          day: todayString,
          presence: true,
        },
        {
          day: "2022-01-01",
          presence: true,
        }
      ]
    },
    {
      nome: "Maria",
      matricula: "54321",
      image: "https://picsum.photos/200/300",
      days:[
        {
          day: todayString,
          presence: true,
        },
        {
          day: "2022-01-01",
          presence: true,
        }
      ]
    },
    {
      nome: "José",
      matricula: "98765",
      image: "https://picsum.photos/200/300",
      days:[
        {
          day: todayString,
          presence: true,
        },
        {
          day: "2022-01-01",
          presence: true,
        }
      ]
    },
  ];
  function setAlunoChamadaOfDay(matricula, changes) {
    localStorage.setItem(matricula, JSON.stringify(changes));
  }


  function editChamadaOfDay(matricula, changes){
    setAlunoChamadaOfDay(matricula, changes)
  }
  function getDayChamada(aluno){
    return aluno.days.filter((item) => {
      return item.day === todayString;
    });;
  }

  function editAlunoPresence(aluno, dayChamada, presence, day_index){
    dayChamada[0].presence = presence;
    aluno.days[day_index] = dayChamada;
    return aluno;
  }
  function handleFaultFunc(matricula, state) {
    let aluno = getAluno(matricula)
    let dayChamada = getDayChamada(aluno)
    let daypos = aluno.days.indexOf(dayChamada);
    let editedAlunoPresence = editAlunoPresence(aluno, dayChamada, !state, daypos);
    editChamadaOfDay(matricula, editedAlunoPresence)
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
      <Calendary/>
    </div>
  );
}
