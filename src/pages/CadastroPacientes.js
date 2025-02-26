import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Tabela from "../TabelaMedico";
import Paciente from '../Paciente';

function CadastroPacientes() {

  const cadastro = {
    nome: '',
    email: '',
    telefone: '',
    cpf: ''
  }

  const [btnsCadastrar, setBtnCadastrar] = useState(true);
  const [paciente, setPaciente] = useState([]);
  const [objCadastro, setObjCadastro] = useState(cadastro);

  useEffect(() => {
    fetch("http://localhost:8080/pacientes")
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta da API:", data); // 📌 Verifique o que está chegando
        if (Array.isArray(data)) {
          setPaciente(data);
        } else if (data && Array.isArray(data.content)) {
          setPaciente(data.content); // 📌 Se estiver dentro de "content", pegue corretamente
        } else {
          console.error("Erro: a resposta não é um array", data);
          setPaciente([]); // Evita erro no .map()
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setPaciente([]); // Evita que medicos fique undefined
      });
  }, []);

  const aoDigitar = (e) => {
    setObjCadastro({ ...objCadastro, [e.target.name]: e.target.value });
  }

  const Cadastrar = () => {
    fetch('http://localhost:8080/pacientes', {
      method: 'post',
      body: JSON.stringify(objCadastro),
      headers: {
        'Content-type': "application/json",
        'Accept': 'application/json'
      }
    })
      .then(retorno_convertido => {
        if (retorno_convertido && retorno_convertido.mensagem) {
          alert(retorno_convertido.mensagem);
        } else {
          setObjCadastro(cadastro);
          alert("Paciente cadastrado com sucesso");
        }
      })
      .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao cadastrar paciente');
      });
  }


  return (
    <div>
      <p>{JSON.stringify(objCadastro)}
      </p>
      <Link to="/"><button>Voltar</button></Link>
      <Paciente botao={btnsCadastrar} eventoTeclado={aoDigitar} cadastrar={Cadastrar} objCadastro={objCadastro} />
    </div>
  );
}


export default CadastroPacientes;
