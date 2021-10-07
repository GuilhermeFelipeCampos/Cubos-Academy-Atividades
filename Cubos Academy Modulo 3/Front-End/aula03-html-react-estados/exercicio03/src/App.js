import { useState } from 'react';

import './App.css';

function App() {
  const [contagem, setContagem] = useState(0);
  const comecarContagem = () => {
    setInterval(() => {
      setContagem((contagemAnterior) => {
        return contagemAnterior + 1;
      });
    }, 1000);
  }
  return (
    <div className="App">
      <h1>{contagem}s</h1>
      <button onClick={comecarContagem}>Começar Contagem</button>

    </div>
  );
}

export default App;
