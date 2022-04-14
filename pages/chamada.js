import Aluno from "../components/Chamada/Aluno/Aluno";
import ListaAlunos from "../components/Chamada/ListaAlunos/ListaAlunos";
import Navbar from "../components/Navbar/Navbar";

export default function Chamada() {
  const items = [
    {
      name: 'Home',
      link: '/'
    },
    {
      name: 'Chamada',
      link: '/chamada'
    },
  ];

  const alunos = [
    {
      nome: 'João',
      matricula: '12345',

      image: 'https://picsum.photos/200/300',
    },
    {
      nome: 'Maria',
      matricula: '54321',
      image: 'https://picsum.photos/200/300',
    },
    {
      nome: 'José',
      matricula: '98765',
      image: 'https://picsum.photos/200/300',
    },
  ];

  return (
    <div>
      <Navbar title={"Site"} items={items} />
      <h1>Chamada</h1>
      <ListaAlunos alunos={alunos} />
    </div>
  )
}