
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {CadastroAluno}  from './components/cadastrarAluno';
import  {CadastroEmpresa}  from './components/cadastrarEmpresa';
import { Login } from './components/login';
import{Home} from './components/home';
import { ListaDeVantagens } from './components/ListagemVantagens/ListaDeVantagens.jsx';
import { CadastroVantagem } from './components/cadastrarVantagem';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/aluno/cadastro" element={<CadastroAluno/>}/>
        <Route path="/empresa/cadastro" element={<CadastroEmpresa/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/vantagens" element={<ListaDeVantagens/>}/>
        <Route path="/vantagem/cadastro" element={<CadastroVantagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
