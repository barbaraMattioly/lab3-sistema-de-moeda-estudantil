
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {CadastroAluno}  from './components/cadastrarAluno';
import  {CadastroEmpresa}  from './components/cadastrarEmpresa';
import { Login } from './components/login';
import{Home} from './components/home';
import { CadastroVantagem } from './components/cadastrarVantagem';
import { ListaDeVantagens } from './components/ListagemVantagem';
import { Menu } from './components/menu';



function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/aluno/cadastro" element={<CadastroAluno/>}/>
        <Route path="/empresa/cadastro" element={<CadastroEmpresa/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/" element={<ListaDeVantagens/>}/>
        <Route path="/teste" element={<Menu/>}/>
        <Route path="/vantagem/cadastro" element={<CadastroVantagem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
