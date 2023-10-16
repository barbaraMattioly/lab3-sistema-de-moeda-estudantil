import React from 'react';

export const VantagemCard = ({ titulo, descricao, custo, imagemUrl }) => {
  return (
    <div className="vantagem-card">
      <img src={imagemUrl} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>Custo:{custo}</p>
    </div>
  );
};

