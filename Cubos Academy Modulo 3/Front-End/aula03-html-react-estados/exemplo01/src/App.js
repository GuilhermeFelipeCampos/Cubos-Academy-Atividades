
import './App.css';
import { useState } from 'react';


function App() {
  const [contador, setContador] = useState(0);
  const diminuir = () => {
    setContador(contador - 1);
  }
  const zerar = () => {
    setContador(0);
  }
  const contar = () => {
    setContador(contador + 1);
  }
  return (
    <div className="App">
      Contagem{contador}
      <button onClick={contar}>Contar</button>
      <button onClick={diminuir}>Diminui</button>
      <button onClick={zerar}>Zerar</button>
    </div>
  );
}

export default App;
