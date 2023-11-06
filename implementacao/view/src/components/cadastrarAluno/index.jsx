import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import fotoDeFundo from '../../assets/aluno.png';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';


export const CadastroAluno = () => {
    const navigate = useNavigate();

    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rg, setRg] = useState('');
    const [rua, setRua] = useState('');
    const [bairro, setBairro] = useState('');
    const [numero, setNumero] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [curso, setCurso] = useState('');
    const [instituicao, setInstituicao] = useState('');

    const handleClick = async (e) => {
        e.preventDefault();

        const endereco = {
            rua,
            bairro,
            numero: Number(numero)
        };
        const idInstituicao = 1;
        const user = {
            nome,
            cpf,
            rg,
            endereco,
            email,
            senha,
            curso, 
            idInstituicao
        };
        console.log(user);
        
        try{
          await useApi.post('aluno/cadastrar', user);
          alert('Aluno cadastrado com sucesso');
          navigate('/');
        }catch(error){
          console.error('Erro:', error);
        }
        
    };

    const handleClick2 = async (e) => {
        e.preventDefault();
        navigate('/');
    };

    return (
        <Grid container component="main" sx={{ height: '100vh' }}>

            <Grid item xs={12} sm={8} md={5} elevation={6}>
                <Box>
                    <Box component="form" sx={{ my: 8, mx: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', }} >
                        <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
                            Realize seu cadastro
                        </Typography>

                        <Grid container spacing={2}>
                            <Grid item xs={12} >
                                <TextField
                                    required
                                    name="Nome"
                                    fullWidth
                                    type="text"
                                    label="Nome"
                                    size="small"
                                    autoFocus
                                    value={nome}
                                    onChange={(e) => setNome(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="cpf"
                                    label="CPF"
                                    type="text"
                                    size="small"
                                    value={cpf}
                                    onChange={(e) => setCpf(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="rg"
                                    label="RG"
                                    type="text"
                                    size="small"
                                    value={rg}
                                    onChange={(e) => setRg(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={7}>
                                <TextField
                                    fullWidth
                                    required
                                    name="rua"
                                    label="Rua"
                                    type="text"
                                    size="small"
                                    value={rua}
                                    onChange={(e) => setRua(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={5}>
                                <TextField
                                    fullWidth
                                    required
                                    name="bairro"
                                    label="Bairro"
                                    type="text"
                                    size="small"
                                    value={bairro}
                                    onChange={(e) => setBairro(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    name="numero"
                                    label="Nº"
                                    type="number"
                                    size="small"
                                    value={numero}
                                    onChange={(e) => setNumero(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    name="cidade"
                                    label="Cidade"
                                    type="text"
                                    size="small"
                                    value={cidade}
                                    onChange={(e) => setCidade(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <TextField
                                    fullWidth
                                    required
                                    name="estado"
                                    label="Estado"
                                    type="text"
                                    size="small"
                                    value={estado}
                                    onChange={(e) => setEstado(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name="email"
                                    label="E-mail"
                                    type="text"
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
                                    size="small"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                />
                            </Grid>

                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    name="curso"
                                    label="Curso"
                                    type="text"
                                    size="small"
                                    value={curso}
                                    onChange={(e) => setCurso(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Select
                                    required
                                    fullWidth
                                    name="role"
                                    label="Tipo de instituicao"
                                    size="small"
                                    id="tipo"
                                    value={instituicao}
                                    onChange={(e) => setInstituicao(e.target.value)}
                                >
                                    <MenuItem value="Empresa">PUC-MG</MenuItem>
                                    <MenuItem value="Banco">UFMG</MenuItem>
                                </Select>
                            </Grid>

                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }} onClick={handleClick} >
                            Cadastrar
                        </Button>
                    </Box>
                </Box>
            </Grid>

            <Grid item xs={false} sm={4} md={7} sx={{
                backgroundImage: `url(${fotoDeFundo})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: { xs: 'none', sm: 'flex' },
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

                <Typography variant="h5" fontWeight="fontWeightMedium" mb={3} color="white">
                    Possui conta?
                </Typography>

                <Button type="submit" size="medium" variant="contained" sx={{ width: '100px', backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }} onClick={handleClick2} >
                    Login
                </Button>
            </Grid>
        </Grid>

    );
}