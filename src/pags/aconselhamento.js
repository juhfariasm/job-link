import React from 'react';
const Aconselhamento = ({ chatVisible }) => {
  return (
    <div>
      <h1>Aconselhamento Profissional</h1>
      <p>Conteúdo do Aconselhamento Profissional vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Aconselhamento;