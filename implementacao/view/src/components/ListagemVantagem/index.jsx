import React, { useState, useEffect } from 'react';
import { VantagemCard } from '../ListagemVantagens';
import './lista.css'
import { useApi } from '../../hook/userApi';
import {Barra} from '../navBar/index';
import { Typography, Box} from '@mui/material';
import moedas from '../../assets/moedas.png'


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
    
    
    <div className="lista-de-vantagens">      
      {vantagens.map((vantagem, index) => (
        <VantagemCard
          key={index}
          titulo={vantagem.descricao}
          descricao={vantagem.descricao}
          custo={vantagem.valor}
          empresa= {vantagem.empresa.nome}
        />
      ))}
    </div>
    </>
  );
};