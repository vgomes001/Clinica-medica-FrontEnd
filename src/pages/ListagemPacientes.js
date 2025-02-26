import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TabelaPaciente from "../TabelaPaciente";
import Paciente from "../Paciente";

function ListagemPacientes() {
  const [paciente, setPaciente] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pacientes")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setPaciente(data);
        } else if (data && Array.isArray(data.content)) {
          setPaciente(data.content);
        } else {
          console.error("Erro: a resposta não é um array", data);
          setPaciente([]);
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setPaciente([]);
      });
  }, []);

  return (
    <div>
      <Link to="/"><button>Voltar</button></Link>
      <TabelaPaciente vetor={paciente} />
    </div>
  );
}

export default ListagemPacientes;