import React from 'react';
import './App.css';
import Unidades from './Unidades';

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
    <div className="App">
      {loggedIn ? (
        <Unidades />
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
  );
}

export default App;
