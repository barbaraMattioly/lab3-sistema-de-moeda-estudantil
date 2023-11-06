import { Typography, Box,  Grid, Button, Divider  } from '@mui/material';
import {Barra} from '../navBar/index';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Transacao from '../Transacao/index';

export const Extrato = () => {

  const transacoes = [
    { nome: 'Profissional 1', tipoTransacao: 'envio'  },
    { nome: 'Profissional 2', tipoTransacao: 'recebimento'  },
  ];


  return (
      <>
      <Barra/>
      <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" sx={{ margin: '20px' }}>
        <Typography variant="h5"  >
          Saldo atual: [por qtd aqui] 🪙
        </Typography>

      </Box>

      <Box display="flex" flexDirection="column"  alignItems="center"  justifyContent="center" height="20vh">
          <Typography variant="h4"sx={{marginTop: '90px', marginBottom: '30px'}}>
            Olá [colocar o nome do prof/aluno aq], seu extratro de transação é:
          </Typography>
        
          <Box sx={{ backgroundColor: '#f0f0f0',  padding: '15px',  borderRadius: '8px',  width: '30%', }} >
            {transacoes.map((transacao, index) => (
              <Transacao 
                key={index} 
                nome={transacao.nomeProf} 
                tipoTransacao={transacao.tipoTransacao}
              />
            ))}
          </Box>
      </Box>

     
      </>
  );
}