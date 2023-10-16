import React from 'react';
import './menu.css'
export const Menu = () => {
  const handleBotao1Click = () => {
    console.log('Botão 1');
  };

  const handleBotao2Click = () => {
    console.log('Botão 2');
  };

  return (
    <div className="menu-container">
      <button className="menu-button" onClick={handleBotao1Click}>
        Cadastrar
      </button>
      <button className="menu-button" onClick={handleBotao2Click}>
        Logout
      </button>
    </div>
  );
};
