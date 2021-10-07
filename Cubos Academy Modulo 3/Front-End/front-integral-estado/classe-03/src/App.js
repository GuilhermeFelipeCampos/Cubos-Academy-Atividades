import hamburguer from './assets/hamburguer.png';
import { useState } from 'react';


const HamburgerCard = ({ type, children }) => {

  const [count, setCount] = useState(0);

  const requestLess = () => {
    const less = count > 0 ? count - 1 : 0;
    setCount(less);
  }

  const requestMore = () => {
    const more = count + 1;
    setCount(more);
  }

  return (
    <div className="card">
      <img src={hamburguer} alt={type} />
      <h1>{type}</h1>
      <p>{children}</p>
      <div className="counter">
        <button className="button" onClick={requestLess}>-</button>
        <p>{count}</p>
        <button className="button" onClick={requestMore}>+</button>
      </div>
    </div>

  );
}



function App() {
  return (
    <div className="App">
      <HamburgerCard type="Hamburguer">
        Arcu, sagittis, ut lectus
        congue dapibus semper odio a,<br /> lobortis.
      </HamburgerCard>
    </div>
  );
}


export default App;
