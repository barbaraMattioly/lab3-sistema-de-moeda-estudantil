import { Typography, Box,  Grid, Button, Divider  } from '@mui/material';
import {Barra} from '../navBar/index';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Transacao from '../Transacao/index';
import { useApi } from '../../hook/userApi';
import { useEffect } from 'react';

export const Extrato =  () => {

  const transacoes = [
    { nome: 'Profissional 1', tipoTransacao: 'envio'  },
  ];

  const [nome, setNome] = useState('');
  const [tipoTransacao, setTipoTransacao] = useState('');

  useEffect(() => {
    const nome = async () => {
      try {
        const nomeUsuario = (await useApi.get('extrato/listar')).data;
        setNome(nomeUsuario);
        console.log(nomeUsuario);
      } catch (error) {
        if (error.response) {
          console.error("Erro ao buscar vantagem:", error.response.status, error.response.data);
        } else {
          console.error("Erro de rede ou servidor indisponível:", error.message);
        }
      }
    };
    nome();
  }, []);

  /*
  try{
    const [nome, setNome] = useState('');
    const [tipoTransacao, setTipoTransacao] = useState('');


    const dadosUsuario = async () => {
      const resp = await useApi.get('extrato/listar/'+ JSON.parse(localStorage.getItem('userLogin')).aluno.id);
      setApiData(data);
      console.log(resp)
    }

    useEffect(() => {
      dadosUsuario();
    }, [])

  } catch (error) {
    console.error(error);
  }*/
  



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
            Olá [colocar o nome do prof/aluno aq], seu extrato de transação é:
          </Typography>
        
          <Box sx={{ backgroundColor: '#f0f0f0',  padding: '15px',  borderRadius: '8px',  width: '30%', }} >
            {transacoes.map((transacao, index) => (
              <Transacao 
                key={index} 
                nome={transacao.nome} 
                tipoTransacao={transacao.tipoTransacao}
              />
            ))}
          </Box>
      </Box>

     
      </>
  );
}