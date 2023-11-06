import React from 'react';
import { Divider, Typography, Box } from '@mui/material';

const Transacao = ({ nomeProf, tipoTransacao }) => {
    let textoTransacao = "";

    if (tipoTransacao === 'envio') {
        textoTransacao = "Enviou para";
    } else if (tipoTransacao === 'recebimento') {
        textoTransacao = "Recebeu de";
    }

  return (
    <>
    
      <Typography variant="h6" sx={{ marginTop: 1, marginLeft: 1.5}}>
        {textoTransacao} {nomeProf}  = [] 🪙
      </Typography>
      <Divider sx={{ marginTop: 2, marginX: 'auto', width: '100%' }} />

     
    </>
  );
}

export default Transacao;