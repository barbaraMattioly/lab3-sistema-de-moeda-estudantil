import React from 'react';
import './card.css'
import fotoDeFundo from '../../assets/vantagens.webp';

export const VantagemCard = ({ titulo, descricao, custo, imagemUrl }) => {
  return (
    <div className="vantagem-card">
      <img src={fotoDeFundo} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>Custo: {custo} créditos</p>
    </div>
  );
};

