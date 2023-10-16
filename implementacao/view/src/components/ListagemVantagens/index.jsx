import React from 'react';
import './card.css'
import fotoDeFundo from '../../assets/vantagens.webp';



export const VantagemCard = ({ titulo, descricao, custo, imagemUrl }) => {
  const [imoveis, setImoveis] = useState<ListagemImovel[]>([]);

  useEffect(() => {
    const listarImoveis = async () => {
      try {
        const imoveis: ListagemImovel[] = (await ImoveisService.getImoveis()).data;
        setImoveis(imoveis);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error); //exibir em tela dps
      }
    };

    listarImoveis();
  }, []);
  
  return (
    <div className="vantagem-card">
      <img src={fotoDeFundo} alt={titulo} />
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <p>Custo: {custo} créditos</p>
    </div>
  );
};

