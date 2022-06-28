import { useEffect, useState } from "react";
import Aluno from "../components/Chamada/Aluno/Aluno";
import Calendary from "../components/Chamada/Calendary/Calendary";
import CreateDate from "../components/Chamada/Forms/CreateDate";
import CreateStudent from "../components/Chamada/Forms/CreateStudent";
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

  const [creatingstudent, setCreatingStudent] = useState(false);
  const [creatingDate, setCreatingDate] = useState(false);
  const [students, setStudents] = useState([]);
  const [dates, setDates] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);


  function handleFault(studentId) {
    let student = students.find((student) => student.id === studentId);
    let newDates = dates;
    dates.forEach((date) => {
      if (date.id === selectedDate) {
        if (date.presence[student.id]) {
          date.presence[student.id] = !date.presence[student.id];
        } else {
          date.presence[student.id] = true;
        }
      }
    });
    setDates(newDates);
  }

  function handleCreateStudent(name, image) {
    let newStudents = students;
    newStudents.push({
      // new random id
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      name,
      image,
    })
    setStudents(newStudents);
    if (!dates || !dates.length) {
      let newDate = {
        id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
        date: new Date(),
        presence: {},
      }
      setDates([newDate])
      setSelectedDate(newDate.id)

    }
    setCreatingStudent(false)
  }

  // convert yyyy-mm-dd to Date
  function convertDate(date) {
    let dateArray = date.split('-');
    return new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
  }

  function handleAddDate(date) {
    let newDate = {
      id: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
      date: convertDate(date),
      presence: {},
    }
    setDates([...dates, newDate])
    setSelectedDate(newDate.id)
    setCreatingDate(false)
  }

  function handleSelectDate(date) {
    setSelectedDate(date)
  }

  function handleRemoveDate(date) {
    console.log("removing date", date)
    let newDates = dates;
    newDates = newDates.filter(data => data.id !== date);
    setDates(newDates);
    if (selectedDate === date.id) {
      setSelectedDate(null)
    }
  }

  return (
    <div>
      <Navbar title={"Site"} items={items} />
      <h1>Chamada</h1>
      <button onClick={() => {
        setCreatingStudent(true)
      }}> Add Aluno </button>
      <CreateStudent isOpen={creatingstudent} onConfirm={handleCreateStudent} />
      <ListaAlunos students={students} dates={dates} selectedDate={selectedDate} handleFault={handleFault} />
      <Calendary dates={dates} selectedDate={selectedDate} setSelectedDate={handleSelectDate} addDate={() => {
        setCreatingDate(true)
      }} removeDate={handleRemoveDate} />
      <CreateDate isOpen={creatingDate} onConfirm={handleAddDate} />
    </div>
  );
}
