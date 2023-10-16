import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VantagemCard } from './VantagemCard';

export const ListaDeVantagens = () => {
  const [vantagens, setVantagens] = useState([]);

  useEffect(() => {
    axios.get('https:localhost:8080/vantagens').then((response) => {
      setVantagens(response.data);
    });
  }, []);

  return (
    <>
    <p>OI</p>
    {/* <div className="lista-de-vantagens">
      {vantagens.map((vantagem, index) => (
        <VantagemCard
          key={index}
          titulo={vantagem.titulo}
          descricao={vantagem.descricao}
          custo={vantagem.custo}
          imagemUrl={vantagem.imagemUrl}
        />
      ))}
    </div> */}
    </>
  );
};