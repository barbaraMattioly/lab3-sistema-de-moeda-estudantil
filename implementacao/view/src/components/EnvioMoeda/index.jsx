import { Typography, Box,  Select, FormControl, InputLabel, MenuItem, TextField, Grid, Button  } from '@mui/material';
import {Barra} from '../navBar/index';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export const Envio = () => {
    const alunos = ["Ana", "Bárbara", "Laura"]; 

    const navigate = useNavigate();
    const [aluno, setAluno] = useState('');
    const [motivo, setMotivo] = useState('');
    const [quantidade, setQuantidade] = useState('');


    const handleClick = async (e) => {
        e.preventDefault();

        alert('moedas enviadas com sucesso!')
    }



    return (
        <>
        <Barra/>
        <Box display="flex" flexDirection="column"  alignItems="center"  justifyContent="center" height="20vh">
            <Typography variant="h4"sx={{marginTop: '230px'}}>
                Olá [colocar o nome do prof aq], selecione o estudante que você deseja beneficiar:
            </Typography>

            <Typography variant="h5" sx={{marginTop: '40px', marginBottom: '50px'}} >
                Você tem o total de [] 🪙
            </Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
        
        <FormControl sx={{ minWidth: 500, margin: "auto" }} >
            <InputLabel >Selecione um aluno</InputLabel>
            <Select value={aluno} onChange={(e) => setAluno(e.target.value)} >
                {alunos.map((aluno, index) => (
                <MenuItem key={index} value={aluno}>
                    {aluno}
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