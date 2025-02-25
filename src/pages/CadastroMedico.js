import { useEffect, useState } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import Formulario from '../Formulario';
import Tabela from "../Tabela";

function CadastroMedico() {

  const cadastro = {
    nome: '',
    email: '',
    telefone: '',
    crm: '',
    especialidade: ''
  }

  const [btnsCadastrar, setBtnCadastrar] = useState(true);
  const [medico, setMedico] = useState([]);
  const [objCadastro, setObjCadastro] = useState(cadastro);

  useEffect(() => {
    fetch("http://localhost:8080/medicos")
      .then((res) => res.json())
      .then((data) => {
        console.log("Resposta da API:", data); // 📌 Verifique o que está chegando
        if (Array.isArray(data)) {
          setMedico(data);
        } else if (data && Array.isArray(data.content)) {
          setMedico(data.content); // 📌 Se estiver dentro de "content", pegue corretamente
        } else {
          console.error("Erro: a resposta não é um array", data);
          setMedico([]); // Evita erro no .map()
        }
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
        setMedico([]); // Evita que medicos fique undefined
      });
  }, []);

  const aoDigitar = (e) => {
    setObjCadastro({ ...objCadastro, [e.target.name]: e.target.value });
  }

  const Cadastrar = () => {
    fetch('http://localhost:8080/medicos', {
      method: 'post',
      body: JSON.stringify(objCadastro),
      headers: {
        'Content-type': "application/json",
        'Accept': 'application/json'
      }
    })
      .then(retorno => retorno.json())
      .then(retorno_convertido => {

        if(retorno_convertido.mensagem !== undefined) {
          alert(retorno_convertido.mensagem);
        }else {
          setObjCadastro([cadastro]);
          alert("Médico cadastrado com sucesso");
        }
      })
    }


  return (
    <div>
      <p>{JSON.stringify(objCadastro)}
      </p>
      <Formulario botao={btnsCadastrar} eventoTeclado={aoDigitar} cadastrar={Cadastrar} objCadastro= {objCadastro}/>
    </div>
  );
}


export default CadastroMedico;
