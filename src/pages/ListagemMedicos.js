import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Tabela from "../Tabela";

function ListagemMedicos() {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/medicos")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setMedicos(data);
        } else if (data && Array.isArray(data.content)) {
          setMedicos(data.content);
        } else {
          console.error("Erro: a resposta não é um array", data);
          setMedicos([]);
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setMedicos([]);
      });
  }, []);

  return (
    <div>
      <Link to="/"><button>Voltar</button></Link>
      <Tabela vetor={medicos} />
    </div>
  );
}

export default ListagemMedicos;