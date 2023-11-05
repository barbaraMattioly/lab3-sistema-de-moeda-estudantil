import { Typography, Box,  Select, FormControl, InputLabel, MenuItem, TextField, Grid, Button  } from '@mui/material';
import {Barra} from '../navBar/index';


export const Envio = () => {
    const alunos = ["Ana", "Bárbara", "Laura"]; 

    const handleSubmit = () => {
       console.log('oii')
    }


    return (
        <>
        <Barra/>
        <Box display="flex" flexDirection="column"  alignItems="center"  justifyContent="center" height="20vh">
            <Typography variant="h4"sx={{marginTop: '230px'}}>
            Olá [colocar o nome do prof aq], selecione o estudante que você deseja beneficiar:
            </Typography>

            <Typography variant="h5" sx={{marginTop: '80px', marginBottom: '50px'}} >
            Você tem o total de [] 🪙
            </Typography>
        </Box>

        <Box display="flex" alignItems="center" justifyContent="center" height="60vh">
        
        <FormControl sx={{ minWidth: 500, margin: "auto" }} >
            <InputLabel >Selecione um aluno</InputLabel>
            <Select>
                {alunos.map((aluno, index) => (
                <MenuItem key={index} value={aluno}>
                    {aluno}
                </MenuItem>
                ))}
            </Select>

            <TextField name="motivo" required fullWidth  label="Motivo" type="text" sx={{ marginTop: '16px' }}/>

            <TextField name="quantidade" required fullWidth label="Quantidade 🪙" type="number" sx={{ marginTop: '16px' }}  />

            <Button variant="contained" sx={{ marginTop: '16px', backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' }   }}> Enviar </Button>
        </FormControl>
   
    </Box>
        
        </>
    );
}