import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import fotoDeFundo from '../../assets/task.jpg';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';


export const CadastroVantagem = () => {
  const navigate = useNavigate();

  const [idEmpresa, setIdEmpresa] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  //const empresas = await useApi.post('empresas');

  // options do select de empresa
  const handleClick = async (e) => {
    e.preventDefault();

    const idEmpresa = 1;

    const vantagem = {
      idEmpresa,
      valor: Number(valor),
      descricao,
    };
    console.log(vantagem);

    try{
      await useApi.post('vantagem/cadastrar', vantagem);
      alert('Vantagem cadastrada com sucesso!');
      navigate('/');
    }catch(error){
      console.error('Erro:', error);
    }

  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>

      <Grid item xs={12} sm={8} md={5} elevation={6}>
        <Box>
          <Box component="form" sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
            <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
              Cadastre sua vantagem
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
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
              </Grid>

              <Grid item xs={12} >
                <TextField
                    required
                    name="descricao"
                    fullWidth
                    type="text"
                    label="Descrição"
                    size="small"
                    autoFocus
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
              </Grid>

              <Grid item xs={12} >
                <TextField
                    required
                    name="valor"
                    fullWidth
                    type="number"
                    label="Valor"
                    size="small"
                    autoFocus
                    value={valor}
                    onChange={(e) => setValor(e.target.value)}
                  />
              </Grid>

              <Grid item xs={12} >
                <TextField
                    required
                    name="descricao"
                    fullWidth
                    type="text"
                    label="Arquivo"
                    size="small"
                    autoFocus
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                  />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} onClick={handleClick} >
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

      </Grid>
    </Grid>

  );
}