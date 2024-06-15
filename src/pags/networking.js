
import React from 'react';
const Networking = ({ chatVisible }) => {
  return (
    <div>
      <h1>Eventos de Networking</h1>
      <p>Conteúdo do Eventos de Networking vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Networking;