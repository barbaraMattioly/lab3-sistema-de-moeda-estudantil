import React from 'react';
import fotoDeFundo from '../../assets/vantagens.webp';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';

export const VantagemCard = ({ titulo, descricao, custo, imagemUrl, empresa }) => {
  
  return (
    <>
      <Card sx={{border: '1px solid #AAAAAA'}}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="180"
            image={fotoDeFundo}
            alt="Descrição da imagem"
          />          
          <CardContent>
            <Typography gutterBottom variant="subtitle1" fontWeight="fontWeightBold" component="div" sx={{ textAlign: 'center' }}>
              {titulo.toUpperCase()}
            </Typography>
            <Typography>
              {descricao}
            </Typography>
            <Typography>
              Custo: {custo} 🪙
            </Typography>
            <Typography>
              Empresa: {empresa}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};