import React from 'react';
const Registro = ({ chatVisible }) => {
  return (
    <div>
      <h1>Registro</h1>
      <p>Conteúdo do Registro vai aqui...</p>
      {chatVisible && (
        <div className="chat-box">
          <h2>Notificações</h2>
          <p>Você não tem novas notificações.</p>
        </div>
      )}
    </div>
  );
}

export default Registro;