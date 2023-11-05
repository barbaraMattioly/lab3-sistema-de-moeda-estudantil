import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export const Barra = () => {
    const logoStyle = {
        width: '50px', 
        height: 'auto', 
    };

    const navigate = useNavigate();

    const vantagem = () => {
        navigate('/');
    }

    const extratro = () => {
      navigate('/home');
  }


  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#544d5d' }}>
      <Toolbar>
        <img src={logo} className="logo" alt="logo" style={logoStyle}  />
        <Button color="inherit"  sx={{marginLeft: 'auto'}} onClick={vantagem} >Vantagens</Button>
        <Button color="inherit"  onClick={extratro} >Extratro</Button>
      </Toolbar>
    </AppBar>
  );
}