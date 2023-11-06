import { Typography, Box,  Select, FormControl, InputLabel, MenuItem, TextField, Grid, Button  } from '@mui/material';
import {Barra} from '../navBar/index';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useApi } from '../../hook/userApi';

export const Envio = () => {
    const navigate = useNavigate();
    const [aluno, setAluno] = useState(null);
    const [idAluno, setIdAluno] = useState('');
    const [motivo, setMotivo] = useState('');
    const [quantidade, setQuantidade] = useState('');

    const [alunos, setAlunos] = useState([]);
    const [qtdMoedas, setQtdMoedas] = useState([]);

    useEffect(() => {
      const listarAlunos = async () => {
        try {
          const alunos = (await useApi.get('aluno/alunos')).data;
          setAlunos(alunos);
        } catch (error) {
          console.error("Erro ao buscar alunos:", error); 
        }
      };

      const buscarMoedasProfessor = async () => {
        try {
          const qtdMoedas = (await useApi.get(`professor/getQuantidadeMoedas/${1}`)).data;
          setQtdMoedas(qtdMoedas);
        } catch (error) {
          console.error("Erro ao buscar alunos:", error); 
        }
      };

      listarAlunos();
      buscarMoedasProfessor();
    }, []);

    const handleClick = async (e) => {
        e.preventDefault();

        const doacao = {
            idAluno: Number(idAluno),
            idProfessor: 1,
            valor: Number(quantidade),
            descricao: motivo
        };

        try {
            await useApi.post("doacao/cadastrar", doacao);

            alert('moedas enviadas com sucesso!');
            navigate('/vantagens')
          } catch (error) {
            console.error("Erro:", error);
        }
    }

    const handleChange = (e) => {
        const selectedAlunoId = e.target.value;
        const selectedAluno = alunos.find((a) => a.id === parseInt(selectedAlunoId, 10));
        
        setAluno(selectedAluno);
        setIdAluno(selectedAlunoId);
    };    

    return (
        <>
        <Barra/>
        <Box display="flex" flexDirection="column"  alignItems="center"  justifyContent="center" height="20vh">
            <Typography variant="h4"sx={{marginTop: '230px'}}>
                Olá, selecione o estudante que você deseja beneficiar:
            </Typography>

            <Typography variant="h5" sx={{marginTop: '40px', marginBottom: '50px'}} >
                Você tem o total de {qtdMoedas} 🪙
            </Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
        
        <FormControl sx={{ minWidth: 500, margin: "auto" }} >
            <InputLabel >Selecione um aluno</InputLabel>
            <Select value={aluno ? aluno.id : ''} onChange={handleChange}>
                {alunos.map((aluno) => (
                    <MenuItem key={aluno.id} value={aluno.id}>
                        {aluno.nome}
                    </MenuItem>
                ))}
            </Select>

            <TextField name="motivo" value={motivo}  onChange={(e) => setMotivo(e.target.value)} required fullWidth label="Motivo" type="text" sx={{ marginTop: '16px' }}/>

            <TextField name="quantidade" value={quantidade}  onChange={(e) => setQuantidade(e.target.value)} required fullWidth label="Quantidade 🪙" type="number" sx={{ marginTop: '16px' }}  />

            <Button variant="contained" onClick={handleClick} sx={{ marginTop: '16px', backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' }   }}> Enviar </Button>
        </FormControl>
   
    </Box>
        
        </>
    );
}