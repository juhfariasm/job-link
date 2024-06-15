import React from 'react';
const Treinamento = ({ chatVisible }) => {
  return (
    <div>
      <h1>Treinamento</h1>
      <p>Conteúdo do Treinamento vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Treinamento;