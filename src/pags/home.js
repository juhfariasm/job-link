import React from 'react';

const Home = ({ chatVisible }) => {
  return (
    <div>
      <h1>Tela Inicial</h1>
      <p>Conteúdo da Tela Inicial vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Home;
