import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import {Button} from '@mui/material';
import { Grid, TextField} from "@mui/material";
import fotoDeFundo from '../../assets/moeda.png';
import { useState } from 'react'
import { useApi } from '../../hook/userApi';
import { useNavigate } from 'react-router-dom';
import UserSession from "../userSession/UserSession.ts";

export const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const {
        setUserLogger
      } = UserSession();

      
    const handleClick = async (e) => {
        e.preventDefault();
        const user ={
            email, 
            senha: password,
        }

        try{
            console.log(user)
            const response = await useApi.post('usuario/login', user);
            if(response.data != ''){
                setUserLogger(response.data);

                const tipoCadastro = response.data.tipoCadastro;
                navigate("/vantagens");
            }
          }catch(error){
            alert('Erro ao efetuar login! Verifique os dados')
            console.error('Erro:', error);
          } 

    };

    const handleClick2 = async (e) => {
        e.preventDefault();
        navigate('/aluno/cadastro');
    }

    const handleClick3 = async (e) => {
        e.preventDefault();
        navigate('/empresa/cadastro');
    }    
       
    return (
        <Grid container component="main" sx={{ height: '100vh'}}>
        
            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundImage: `url(${fotoDeFundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', sm: 'flex' }, 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                }}>

                <Typography variant="h5" fontWeight="fontWeightMedium" mb={3}  color="white">
                    Não possui conta?
                </Typography>
                
                <Button type="submit" size="medium"  variant="contained" sx={{ width: '200px', marginBottom: '15px', backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }} onClick={handleClick2} >
                    cadastrar aluno
                </Button>
                <Button type="submit" size="medium"  variant="contained" sx={{ width: '200px',  backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' }}} onClick={handleClick3} >
                    cadastrar empresa
                </Button>                
            </Grid>

            <Grid item xs={12} sm={8} md={5} elevation={6}>
                <Box sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '250px'}}>
                
                    <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
                       Realize seu Login
                    </Typography>
                
                    <Grid container spacing={2}>                
                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="email"
                            label="E-mail"
                            type="text"
                            id="email"
                            size="small"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                            required
                            fullWidth
                            name="password"
                            label="Senha"
                            type="password"
                            id="password"
                            size="small"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </Grid>
                        
                        <Grid item xs={12}>
                            <Button xs={12} type="submit" fullWidth variant="contained" onClick={handleClick} sx={{ backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' }   }}>
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>       
        </Grid>

    );
}