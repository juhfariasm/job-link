import React from 'react';
const Suporte = ({ chatVisible }) => {
  return (
    <div>
      <h1>Suporte</h1>
      <p>Conteúdo do Suporte vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Suporte;