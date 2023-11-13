

import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { Barra } from '../navBar/index';
import { useApi } from '../../hook/userApi';

export const ExtratoAluno = () => {
  const [saldo, setSaldo] = useState(0);
  const [doacoes, setDoacoes] = useState([]);
  const [trocas, setTrocas] = useState([]);
  const [nomeAluno, setNomeAluno] = useState([]);

  useEffect(() => {
    const idAluno = JSON.parse(localStorage.getItem('userLogin')).aluno.id

    const buscarAluno = async () => {
      try { 
        const dadosAluno = await useApi.get(`aluno/${idAluno}`)
        setNomeAluno(dadosAluno.data.nome)
        setSaldo(dadosAluno.data.saldoMoedas)
      } catch(error){
        console.log(error)
      }
    }

    const fetchData = async () => {
      try {
        const response = await useApi.get(`doacao/listarAluno/${idAluno}`);
        setDoacoes(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    const buscarTrocas = async () => {
      try {
        const response = await useApi.get(`troca/listarAluno/${idAluno}`);
        setTrocas(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    buscarAluno();
    fetchData();
    buscarTrocas();

  }, []);

  return (
    <>
      <Barra />
      <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" sx={{ margin: '20px' }}>
        <Typography variant="h5">
          Saldo atual: {saldo} 🪙
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="20vh" sx={{ marginTop: '10%', marginBottom: '30px' }}>
        <Typography variant="h4" sx={{ marginTop: '90px', marginBottom: '30px' }}>
          Olá {nomeAluno}, seu extrato de transações é:
        </Typography>

        <Box sx={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', width: '30%' }}>
          {doacoes.map((doacao, index) => (
            <div key={index}>
              <Typography variant="h6" sx={{ marginTop: 1, marginLeft: 1.5 }}>
                Recebeu de {doacao.professor.nome} = {doacao.valor} 🪙 | Descrição: {doacao.descricao}
              </Typography>
              <Divider sx={{ marginTop: 2, marginX: 'auto', width: '100%' }} />

            </div>
          ))}
        </Box>

        <Box sx={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', width: '30%', marginTop: '20px'}}>
          {trocas.map((troca, index) => (
            <div key={index}>
              <Typography variant="h6" sx={{ marginTop: 1, marginLeft: 1.5 }}>
                Resgatou o item: {troca.vantagem.descricao} de valor {troca.valor} 🪙
              </Typography>
              <Divider sx={{ marginTop: 2, marginX: 'auto', width: '100%' }} />

            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};