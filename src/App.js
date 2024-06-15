import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Aconselhamento from './pags/aconselhamento';
import Home from './pags/home';
import Networking from './pags/networking';
import Perfil from './pags/perfil'; // Falta adicionar o botão da página de perfil
import Suporte from './pags/suporte';
import Treinamento from './pags/treinamento';
import Registro from './pags/registro';

const NavBar = ({ toggleChat, toggleSideMenu }) => {
  return (
    <header className="App-header">
      <nav>
        <ul className="nav-list">
          <div className="bot-navbar">
            <li>
            <button className="menu-button" onClick={toggleSideMenu}>☰</button>
            </li>
            <li className='text-navbar'><Link to="/home">Início</Link></li>
          </div>
          <div id='espaco'></div>
          <div className="bot-navbar">
            <li className='text-navbar'><Link to="/registro">Registro/Login</Link></li>
          <li>
            <div className="notification-icon" onClick={toggleChat}></div>
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
const SideMenu = ({ isOpen, toggleSideMenu }) => {
  return (
    <div className={`side-menu ${isOpen ? 'open' : ''}`}>
      <button className="close-button" onClick={toggleSideMenu}>×</button>
      <ul className="side-menu-list">
        <li><Link to="/home" onClick={toggleSideMenu}>Início</Link></li>
        <li><Link to="/aconselhamento" onClick={toggleSideMenu}>Aconselhamento Profissional</Link></li>
        <li><Link to="/treinamento" onClick={toggleSideMenu}>Treinamento e Desenvolvimento de Habilidades</Link></li>
        <li><Link to="/networking" onClick={toggleSideMenu}>Eventos de Networking</Link></li>
        <li><Link to="/suporte" onClick={toggleSideMenu}>Suporte Pós Emprego</Link></li>
        <li><Link to="/registro" onClick={toggleSideMenu}>Registro/Login</Link></li>
      </ul>
    </div>
  );
}

const App = () => {
  const [chatVisible, setChatVisible] = useState(false);
  const [sideMenuVisible, setSideMenuVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  const toggleSideMenu = () => {
    setSideMenuVisible(!sideMenuVisible);
  };

  return (
    <Router>
      <div className="App">
        <NavBar toggleChat={toggleChat} toggleSideMenu={toggleSideMenu} />
        <SideMenu isOpen={sideMenuVisible} toggleSideMenu={toggleSideMenu} />
        <main>
          {chatVisible && (
            <div className="chat-box">
              <h2>Notificações</h2>
              <p>Você não tem novas notificações.</p>
            </div>
          )}

          <Routes>
            <Route path="/" element={<Home chatVisible={chatVisible} />} />
            <Route path="/aconselhamento" element={<Aconselhamento />} />
            <Route path="/home" element={<Home />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/suporte" element={<Suporte />} />
            <Route path="/treinamento" element={<Treinamento />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
