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
      id: "01",
      date: new Date("2022, 06, 26"),
      presence:{
        "12345": true,
        "54321": true,
        "98765": true,
      },
    },
    {
      id: "02",
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
    let id = datas.find(data => data.date.toDateString() === selectdate)
    return id.id
  }

  function getChamadaOnLocalStorage(id){
    let chamada = localStorage.getItem(id) || datas.find(data => data.id === id)
    return chamada
  }
  function getSelectedDate(){
    // useState(new Date())
    
    return new Promise((resolve, reject) => {
      window.addEventListener("load", () => {
        let selectedDate = document.getElementById("calendary").value;
        resolve(selectedDate)
      })});
  }
  async function getDayChamada(){
    let selectdate = getSelectedDate()
    let dataID =  getDataID( await selectdate);
    return getChamadaOnLocalStorage(dataID)
  }

  function editAlunoPresence(id, dayChamada, presence){
    let presenceOfTheDay = dayChamada[0].presence;
    presenceOfTheDay[id] = presence;
    return dayChamada;
  }
  async function handleFaultFunc(Alunoid, state) {
    console.log('oi')
    let dayChamada = await getDayChamada()
    console.log('oi 2')
    let dayId = dayChamada[0].id;
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
