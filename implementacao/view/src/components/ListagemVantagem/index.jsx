import React, { useState, useEffect } from 'react';
import { VantagemCard } from '../ListagemVantagens';
import { useApi } from '../../hook/userApi';
import {Barra} from '../navBar/index';
import { Grid, Typography, Box, Card} from '@mui/material';
import { Link } from 'react-router-dom';

export const ListaDeVantagens = () => {
 const [vantagens, setVantagens] = useState([]);

  useEffect(() => {
    const listaVantagens = async () => {
      try {
        const vantagens = (await useApi.get('vantagem/listar')).data;
        setVantagens(vantagens);
        console.log(vantagens);
      } catch (error) {
        console.error("Erro ao buscar vantagem:", error); 
      }
    };
    listaVantagens();
  }, []);
  
  return (
    <>
    <Barra/>
    <Box alignItems="center"  sx={{ marginLeft: '100px', marginTop: '30px' }} >
        <Typography variant="h4">
          Troque suas moedas por uma vantagem!
        </Typography>
        <Typography variant="h6">
          Acumule moedas e escolha seu prêmio como descontos, materiais escolares, livros ou voucher em restaurantes.
        </Typography>
    </Box>
    
    <Grid 
      container 
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      {vantagens.map((vantagem, index) => (
        <Grid item key={vantagem.id} xs={12} sm={6} md={4} lg={3}>

      <Link to={`/vantagem/${vantagem.id}`}>
          <Card>
            <VantagemCard
              key={index}
              imagemUrl={vantagem.urlImagem}
              titulo={vantagem.nome}
              descricao={vantagem.descricao}
              custo={vantagem.valor}
              empresa={vantagem.empresa.nome}
            />
          </Card>
        </Link>
        </Grid>
      ))}
    </Grid>
    </>
  );
};