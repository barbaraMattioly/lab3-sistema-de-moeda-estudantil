import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';


export const Home = () => {
    return (
       
        <Typography variant="h5" fontWeight="fontWeightMedium" mb={3}>
            Bem vindo! - Página ainda em criação!
        </Typography>       

    );
}