
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import  {CadastroAluno}  from './components/cadastrarAluno';
import  {CadastroEmpresa}  from './components/cadastrarEmpresa';
import { Login } from './components/login';
import{Extrato} from './components/Extrato';
import { CadastroVantagem } from './components/cadastrarVantagem';
import { ListaDeVantagens } from './components/ListagemVantagem';
import { Menu } from './components/menu';
import {Envio} from './components/EnvioMoeda';
import{ExtratoProf} from './components/extratoProf';
import{ExtratoAluno} from './components/extratoAluno';

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/aluno/cadastro" element={<CadastroAluno/>}/>
        <Route path="/empresa/cadastro" element={<CadastroEmpresa/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/extrato" element={<Extrato/>}/>
        <Route path="/extrato/professor" element={<ExtratoProf/>}/>
        <Route path="/extrato/aluno" element={<ExtratoAluno/>}/>
        <Route path="/vantagens" element={<ListaDeVantagens/>}/>
        <Route path="/teste" element={<Menu/>}/>
        <Route path="/vantagem/cadastro" element={<CadastroVantagem/>}/>
        <Route path="/enviar" element={<Envio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
