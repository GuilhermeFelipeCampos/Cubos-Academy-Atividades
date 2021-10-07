
import './App.css';
import { useState } from 'react';

function App() {
  const [pessoa, setPessoa] = useState({
    nome: 'Guilherme',
    idade: 40,
    mensagem: 'Olá, Mundo',
  });
  const trocaMensagem = () => {
    setPessoa({ ...pessoa, mensagem: " Teste 1" })
  }
  return (
    <div className="App">
      <h1>{pessoa.nome}</h1>
      <h2>{pessoa.idade}</h2>
      <h2>{pessoa.mensagem}</h2>
      <button onClick={trocaMensagem}>Trocar Mensagem</button>
    </div>
  );
}

export default App;
