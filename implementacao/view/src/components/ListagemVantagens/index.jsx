import React from 'react';
import './card.css'
export const VantagemCard = ({ titulo, descricao, custo, imagemUrl }) => {
  return (
    <div className="vantagem-card">
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>Custo: {custo} créditos</p>
    </div>
  );
};

