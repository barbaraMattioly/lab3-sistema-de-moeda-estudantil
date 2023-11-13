import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import UserSession from '../userSession/UserSession';
import ExitToApp from '@mui/icons-material/ExitToApp';
import IconButton from '@mui/material/IconButton';

export const Barra = () => {
    const logoStyle = {
        width: '50px', 
        height: 'auto', 
    };


  const {
    getPermission,
    removeUserLogger
  } = UserSession();

    const navigate = useNavigate();

    const vantagem = () => {
        navigate('/vantagens');
    }

    const extrato = () => {
      navigate('/extrato');
    }

    const enviar = () => {
      navigate('/enviar');
    }

    const cadastroVantagem = () => {
      navigate('/vantagem/cadastro');
    }

    const handleSair = () => {
      removeUserLogger();
      navigate('/');
    }

    function imputNav(){
      if(getPermission() == "Aluno"){
        return (
          <>
            <Button color="inherit" sx={{marginLeft: 'auto'}} onClick={vantagem} >Vantagens</Button>
            <Button color="inherit"  onClick={extrato}> Extrato</Button>
          </>
        )
      }
      else if(getPermission() == "Professor"){
        return (
          <>
            <Button color="inherit" sx={{marginLeft: 'auto'}} onClick={extrato}> Extrato</Button>
            <Button color="inherit"  onClick={enviar}> Enviar</Button> 
          </>
        )
      }
      else if(getPermission() == "Empresa"){
        return (
          <>
            <Button color="inherit"  sx={{marginLeft: 'auto'}} onClick={cadastroVantagem} >Cadastrar Vantagem</Button>
            <Button color="inherit"  onClick={vantagem} >Vantagens</Button>
          </>
        )
      }
      else{
        return (
          <>
          </>
        )
      }
    }
  


  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#544d5d' }}>
      <Toolbar>
        <img src={logo} className="logo" alt="logo" style={logoStyle}  />
        {imputNav()}
        <IconButton size="large" edge="end" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleSair} >
          <ExitToApp fontSize="medium" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}