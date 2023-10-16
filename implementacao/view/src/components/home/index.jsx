import { Box } from "@mui/system"
import { Typography, Button, Grid, TextField, Select, MenuItem } from '@mui/material';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useApi } from '../../hook/userApi';
import { Menu } from "../menu";

export const Home = () => {
    return (
        <>
        <Menu/>
        <Typography variant="h5" fontWeight="fontWeightMedium" mb={3}>
            Bem vindo! - Página ainda em criação!
        </Typography>       
        </>
    );
}