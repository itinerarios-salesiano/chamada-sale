import { useState } from "react";
import Aluno from "../components/Chamada/Aluno/Aluno";
import Calendary from "../components/Chamada/Calendary/Calendary";
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

  
  let exampleListAlunos = [
    {
      id: "12345",
      nome: "João",
      image: "https://picsum.photos/200/300",

    },
    {
      id: "54321",
      nome: "Maria",
      image: "https://picsum.photos/200/300",
    },
    {
      id: "98765",
      nome: "José",
      image: "https://picsum.photos/200/300",
    },
  ];
  let datas =[
    {
      id: "0",
      date: new Date("2022, 06, 25"),
      presence:{
        "12345": true,
        "54321": true,
        "98765": true,
      },
    },
    {
      id: "1",
      date: new Date("2022, 06, 26"),
      presence:{
        "12345": true,
        "54321": true,
        "98765": true,
      },
    },
    {
      id: "2",
      date: new Date("2022, 06, 27"),
      presence:{
        "12345": true,
        "54321": true,
        "98765": true,
      },
    },
  ]
  function setChamadaOfDay(dayId, changes) {
    localStorage.setItem(dayId, JSON.stringify(changes));
  }
  
  function editChamadaOfDay(dayID, changes){
    setChamadaOfDay(dayID, changes)
  }
  async function getDataID(selectdate){
    selectdate = await selectdate;
    let thisDate = datas.find(data => data.date.toDateString() === selectdate);
    return thisDate.id;
  }

  function getChamadaOnLocalStorage(id){
    
    let chamada = localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : datas.find(data => data.id === id);
    return chamada
  }
  async function getSelectedDate(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if(typeof window !== "undefined"){
          resolve(document.getElementById("calendary").value)
        }
    }, 1000);
  })
}
  async function getDayChamada(){
    let selectdate = await getSelectedDate()
    let dataID =  await getDataID(selectdate);
    console.log(dataID)
    return getChamadaOnLocalStorage(dataID)
  }

  function editAlunoPresence(id, dayChamada, presence){
    let presenceOfTheDay = dayChamada.presence;
    presenceOfTheDay[id] = presence;
    return dayChamada;
  }
  async function handleFaultFunc(Alunoid, state) {
    let dayChamada = await getDayChamada()
    let dayId = dayChamada.id;
    let editedAlunoPresence = editAlunoPresence(Alunoid, dayChamada, !state);
    editChamadaOfDay(dayId, editedAlunoPresence)
    
  }
  return (
    <div>
      <Navbar title={"Site"} items={items} />
      <h1>Chamada</h1>
      <ListaAlunos alunos={exampleListAlunos} handleFault={handleFaultFunc} chamadaDayID={getDataID(getSelectedDate())}/>
      <Calendary dates={datas}/>
    </div>
  );
}
