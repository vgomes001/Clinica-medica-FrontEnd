import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import CadastroMedico from "./pages/CadastroMedico";
import ListagemMedicos from "./pages/ListagemMedicos";
import CadastroPacientes from "./pages/CadastroPacientes";
import ListagemPacientes from "./pages/ListagemPacientes";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cadastroMedicos" element={<CadastroMedico />} />
        <Route path="/listagemMedicos" element={<ListagemMedicos />} />
        <Route path="/cadastroPacientes" element={<CadastroPacientes />} />
        <Route path="/listagemPacientes" element={<ListagemPacientes />} />
      </Routes>
    </Router>
  );
}

export default App;