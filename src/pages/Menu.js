import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu-container">
      <div className="image-container">
        <img
          src="https://img.freepik.com/vetores-premium/ilustracao-de-medico-de-conceito_598748-175.jpg?w=996"
          alt="Imagem de menu"
          className="menu-image"
        />
      </div>

      <div className="form-container">
        <h1 className="menu-title">VOLLMED</h1>

        <div className="menu-buttons">
          <Link to="/cadastroMedicos">
            <button className="menu-button">Cadastrar Médico</button>
          </Link>
          <Link to="/listagemMedicos">
            <button className="menu-button">Médicos Cadastrados</button>
          </Link>
          <Link to="/cadastroPacientes">
            <button className="menu-button">Cadastrar Pacientes</button>
          </Link>
          <Link to="/listagemPacientes">
            <button className="menu-button">Pacientes Cadastrados</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;

  
