import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import CadastroMedico from "./pages/CadastroMedico";
import ListagemMedicos from "./pages/ListagemMedicos";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Menu />} />
        <Route path="/cadastro" element={<CadastroMedico />} />
        <Route path="/listagem" element={<ListagemMedicos />} />
      </Routes>
    </Router>
  );
}

export default App;