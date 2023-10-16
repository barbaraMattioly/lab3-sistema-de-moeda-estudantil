import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import fotoDeFundo from '../../assets/vantagens.webp';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';


export const CadastroVantagem = () => {
  const navigate = useNavigate();

  const [idEmpresa, setIdEmpresa] = useState('');
  const [valor, setValor] = useState('');
  const [descricao, setDescricao] = useState('');

  //const empresas = await useApi.post('empresas');
  const empresas = [
    { id: 1 , nome:"empresa fake1", vantagens: "massagem" },
    { id: 2 , nome:"empresa fake2", vantagens: "comidinha" },
    { id: 3 , nome:"empresa fake3", vantagens: "beber agua" },
    { id: 4 , nome:"empresa fake4", vantagens: "um beijo" },
  ]

  // options do select de empresa
  const elementSelect = [];
  empresas.forEach((empresa) => {
    return (
      elementSelect.push(<MenuItem key={empresa.id} value={empresa.id}>{empresa.nome}</MenuItem>)
    );
  })

  const handleClick = async (e) => {
    e.preventDefault();

    const vantagem = {
      idEmpresa,
      valor,
      descricao,
    };

    try{
      await useApi.post('vantagem/cadastrar', vantagem);
      alert('Vantagem cadastrada com sucesso!');
      navigate('/vantagens');
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
              Realize seu cadastro
            </Typography>

            <Grid container spacing={2}>
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

              <Grid item xs={12} sm={12}>
                  <Select
                      required
                      fullWidth
                      name="idEmpresa"
                      label="Empresa"
                      size="small"
                      id="tipo"
                      value={idEmpresa}
                      onChange={(e) => setIdEmpresa(e.target.value)}
                  >
                    {elementSelect}
                  </Select>
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