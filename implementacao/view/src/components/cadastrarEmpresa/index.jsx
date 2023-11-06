import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import fotoDeFundo from '../../assets/empresa.png';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';


export const CadastroEmpresa = () => {
  const navigate = useNavigate();

  const [nome, setNome] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleClick = async (e) => {
    e.preventDefault();

    const user = {
      nome,
      cnpj,
      email,
      senha,
    };
    console.log(user);
    
    try{
      await useApi.post('empresa/cadastrar', user);
      alert('Empresa cadastrada com sucesso!');
      navigate('/');
    }catch(error){
      console.error('Erro:', error);
    }

  };

  const handleClick2 = async (e) => {
    e.preventDefault();
    navigate('/login');
  };


  return (
    <Grid container component="main" sx={{ height: '100vh' }}>

      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <Box>
          <Box component="form" sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center',  }} >
            <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
              Realize seu cadastro
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  required
                  name="nome"
                  fullWidth
                  type="text"
                  label="Nome"
                  size="small"
                  autoFocus
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  required
                  fullWidth
                  name="cnpj"
                  label="CNPJ"
                  type="text"
                  size="small"
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="E-mail"
                  type="text"
                  id="email"
                  size="small"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  size="small"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2,backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }} onClick={handleClick} >
              Cadastrar
            </Button>
          </Box>
        </Box>
      </Grid>

      <Grid item xs={false} sm={4} md={7} sx={{
        backgroundImage: `url(${fotoDeFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: { xs: 'none', sm: 'flex' },
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>

        <Typography variant="h5" fontWeight="fontWeightMedium" mb={3} color="white">
          Possui conta?
        </Typography>

        <Button type="submit" size="medium" variant="contained" sx={{ width: '100px', backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }} onClick={handleClick2} >
          Login
        </Button>
      </Grid>
    </Grid>

  );
}