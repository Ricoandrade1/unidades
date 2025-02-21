import React from 'react';
import './App.css';
import Unidades from './Unidades';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Braga from './Braga';
import Povoa from './Povoa';
import Famalicao from './Famalicao';
import Barcelos from './Barcelos';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    console.log('Email inserido:', email);
    if (email === 'teste@teste.com' || email === 'ricoandrade01@gmail.com') {
      console.log('Login bem-sucedido!');
      setLoggedIn(true);
    } else {
      console.log('Email inválido.');
      alert('Email inválido.');
    }
  };

  return (
    <Router>
      <div className="App">
        {loggedIn ? (
          <Routes>
            <Route path="/" element={<Unidades />} />
            <Route path="/braga" element={<Braga />} />
            <Route path="/povoa" element={<Povoa />} />
            <Route path="/famalicao" element={<Famalicao />} />
            <Route path="/barcelos" element={<Barcelos />} />
          </Routes>
        ) : (
          <div className="login-container">
            <h2>Labonnas Brasil</h2>
            <form id="login-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label><br />
              <input type="email" id="email" name="email" /><br /><br />
              <button type="submit">Login</button>
            </form>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
