import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VantagemCard } from '../ListagemVantagens';
import './lista.css'
export const ListaDeVantagens = () => {
  // const [vantagens, setVantagens] = useState([]);

  // useEffect(() => {
  //   axios.get('https:localhost:8080/vantagens').then((response) => {
  //     setVantagens(response.data);
  //   });
  // }, []);

  const vantagens = [
    {titulo: "Vantagem 1", descricao: "Descrição vantagem 1", custo: 2},
    {titulo: "Vantagem 2", descricao: "Descrição vantagem 2", custo: 3},
  ]
  return (
    <>
    <div className="lista-de-vantagens">
      {vantagens.map((vantagem, index) => (
        <VantagemCard
          key={index}
          titulo={vantagem.titulo}
          descricao={vantagem.descricao}
          custo={vantagem.custo}
        />
      ))}
    </div>
    </>
  );
};