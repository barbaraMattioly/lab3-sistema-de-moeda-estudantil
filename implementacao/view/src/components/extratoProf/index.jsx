import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { Barra } from '../navBar/index';
import { useApi } from '../../hook/userApi';

export const ExtratoProf = () => {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [saldo, setSaldo] = useState(0);
  const [transacoes, setTransacoes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await useApi.get('extrato/listar');
        const { nome, saldo, transacoes } = response.data; 

        setNomeUsuario(nome);
        setSaldo(saldo);
        setTransacoes(transacoes);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Barra />
      <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" sx={{ margin: '20px' }}>
        <Typography variant="h5">
          Saldo atual: {saldo} 🪙
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="20vh">
        <Typography variant="h4" sx={{ marginTop: '90px', marginBottom: '30px' }}>
          Olá {nomeUsuario}, seu extrato de transação é:
        </Typography>

        <Box sx={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', width: '30%' }}>
          {transacoes.map((transacao, index) => (
            <div key={index}>
              <Typography variant="h6" sx={{ marginTop: 1, marginLeft: 1.5 }}>
                {transacao.tipoTransacao === 'Enviou para'} {transacao.nome} = [] 🪙
              </Typography>
              <Divider sx={{ marginTop: 2, marginX: 'auto', width: '100%' }} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};
