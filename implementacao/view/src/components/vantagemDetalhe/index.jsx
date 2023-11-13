

import React, { useState, useEffect } from 'react';
import { Typography, Grid, Box, Divider, Button } from '@mui/material';
import { Barra } from '../navBar/index';
import { useApi } from '../../hook/userApi';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Detalhe = () => {
    const { id } = useParams();
    const [vantagem, setVantagem] = useState([]);
    const [empresa, setEmpresa] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const detalhesVantagem = async () => {
            try {
                const vantagem = (await useApi.get(`vantagem/listarDetalhes/${id}`)).data;
                setEmpresa(vantagem.empresa.nome);
                setVantagem(vantagem);
            } catch (error) {
                console.error("Erro ao mostrar vantagem:", error);
            }
        };
        detalhesVantagem();
    }, [id]);

    const handleClick = async (e) => {
        e.preventDefault();
        console.log("trocado");
    }
    const handleClickVoltar = async (e) => {
        e.preventDefault();
        navigate('/vantagens');
    }

    return (
        <>
            <Barra />

            <Grid container spacing={2} style={{ marginTop: '150px' }}>

                <Grid item xs={12} md={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={vantagem.urlImagem} className="img" alt="img" style={{ width: '50%', height: 'auto', borderRadius: '10%', }} />
                </Grid>

                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ marginBottom: '16px' }}>
                        {vantagem.nome}
                    </Typography>

                    <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                        Descrição: {vantagem.descricao}
                    </Typography>

                    <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                        Empresa: {empresa}
                    </Typography>

                    <Typography variant="h6" sx={{ marginBottom: '16px' }}>
                        Custo: {vantagem.valor}🪙
                    </Typography>

                    <Box style={{ marginTop: '30px', marginLeft: '170px' }}>
                        <Button variant="contained" onClick={handleClick} sx={{ backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }}> Resgatar item </Button>
                    </Box>

                    <Box style={{ marginTop: '30px', marginLeft: '200px' }}>
                        <Button variant="contained" onClick={handleClickVoltar} sx={{ backgroundColor: '#634f79', color: 'white', '&:hover': { backgroundColor: '#6c5d80' } }}> Voltar </Button>
                    </Box>
                </Grid>
            </Grid>


        </>
    );
};