import React from 'react';
const Perfil = ({ chatVisible }) => {
  return (
    <div>
      <h1>Perfil</h1>
      <p>Conteúdo do Perfil vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Perfil;