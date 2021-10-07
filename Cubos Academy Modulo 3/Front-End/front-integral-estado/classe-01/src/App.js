import cookie from './assets/cookie.svg';
import close from './assets/close.svg';
import { useState } from 'react';


const AlertCard = ({ type, message, children }) => {

  const [hidden, setHidden] = useState('nohidden');
  const hiddenCard = () => {
    const theme = hidden === 'nohidden' ? 'hidden' : 'nohidden';
    setHidden(theme);
  }
  return (
    <div className={`card ${hidden}`}>
      <img src={close} alt="close" className="close-button" onClick={hiddenCard} />
      <img src={cookie}
        alt={type} className="icon" />

      <p>{children}</p>
      <button className={type} onClick={hiddenCard}>{message}</button>
    </div>

  );
}
function App() {

  return (
    <div className="App" >
      <AlertCard type="cookie" message="Tudo bem!">
        Nós utilizamos cokkies para melhorar nossa UX, analytics e marketing
      </AlertCard>
    </div>
  );
}

export default App;
