import './index.css';
import { useState } from 'react';

function App() {

  const [tema, setTema] = useState('claro');

  const trocaTema = () => {
    const novoTema = tema === 'claro' ? 'escuro ' : 'claro';

    setTema(novoTema);
  }
  return (
    <div className={`App ${tema}`}>
      <h1>Olรก Mundo</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Labore, aspernatur! Nulla maiores pariatur tempore aspernatur
        fuga odit beatae unde corrupti eveniet, exercitationem repellendus provident delectus.
        Aliquam quis sequi quasi eaque.
      </p>
      <button onClick={trocaTema}>Tema {tema === 'claro' ? '๐' : '๐'}</button>
    </div>
  );
}

export default App;
