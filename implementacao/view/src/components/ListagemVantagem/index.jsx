import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { VantagemCard } from '../ListagemVantagens';
import './lista.css'
import { useApi } from '../../hook/userApi';
export const ListaDeVantagens = () => {
 const [vantagens, setVantagens] = useState([]);

  useEffect(() => {
    const listaVantagens = async () => {
      try {
        const vantagens = (await useApi.get('vantagem/listar')).data;
        setVantagens(vantagens);
        console.log(vantagens);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error); //exibir em tela dps
      }
    };
    listaVantagens();
  }, []);
  
  return (
    <>
    <div className="lista-de-vantagens">
      {vantagens.map((vantagem, index) => (
        <VantagemCard
          key={index}
          titulo={vantagem.descricao}
          descricao={vantagem.descricao}
          custo={vantagem.valor}
          empresa= {vantagem.empresa.nome}
        />
      ))}
    </div>
    </>
  );
};