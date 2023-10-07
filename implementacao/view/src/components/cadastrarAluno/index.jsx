import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import fotoDeFundo from '../../assets/empresa.jpg';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';

export const CadastroAluno = () => {
    return (
        <Typography variant="h4" fontWeight="fontWeightMedium" mb={3}>
            Realize seu cadastro aluno
        </Typography>
    );
}