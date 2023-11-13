import React, { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';
import { Barra } from '../navBar/index';
import { useApi } from '../../hook/userApi';

export const ExtratoProf = () => {
  const [saldo, setSaldo] = useState(0);
  const [doacoes, setDoacoes] = useState([]);
  const [nomeProfessor, setNomeProfessor] = useState([]);

  useEffect(() => {
    const idProfessor = JSON.parse(localStorage.getItem('userLogin')).professor.id

    const buscarProfessor = async () => {
      try { 
        const dadosProfessor = await useApi.get(`professor/${idProfessor}`)
        setNomeProfessor(dadosProfessor.data.nome)
        setSaldo(dadosProfessor.data.qtdMoedas)
      } catch(error){
        console.log(error)
      }
    }

    const buscarDoacoes = async () => {
      try {
        const response = await useApi.get(`doacao/listarProfessor/${idProfessor}`);
        setDoacoes(response.data); 
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    buscarProfessor();
    buscarDoacoes();

  }, []);

  return (
    <>
      <Barra />
      <Box display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" sx={{ margin: '20px' }}>
        <Typography variant="h5">
          Saldo atual: {saldo} 🪙
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="20vh" sx={{ marginTop: '600px', marginBottom: '30px' }}>
        <Typography variant="h4" sx={{ marginTop: '90px', marginBottom: '30px' }}>
          Olá {nomeProfessor}, seu extrato de transação é:
        </Typography>

        <Box sx={{ backgroundColor: '#f0f0f0', padding: '15px', borderRadius: '8px', width: '30%' }}>
          {doacoes.map((doacao, index) => (
            <div key={index}>
              <Typography variant="h6" sx={{ marginTop: 1, marginLeft: 1.5 }}>
                Enviou para {doacao.aluno.nome} = {doacao.valor} 🪙 | Descrição: {doacao.descricao}
              </Typography>
              <Divider sx={{ marginTop: 2, marginX: 'auto', width: '100%' }} />
            </div>
          ))}
        </Box>
      </Box>
    </>
  );
};
