import cookie from './assets/cookie.svg';
import close from './assets/close.svg';
import alert from './assets/alert.svg';

const AlertCard = ({ type, message, children }) => {
  return (
    <div className="card">
      <img src={close} alt="close" className="close-button" />
      <img src={type === "cookie" ? cookie : alert}
        alt={type === "cokkie" ? "cookie" : "alert"} className="icon" />

      <p>{children}</p>
      <button className={type}>{message}</button>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <AlertCard type="cookie" message="Tudo bem!">
        Nós utilizamos cokkies para melhorar nossa UX, analytics e marketing
      </AlertCard>
      <AlertCard type="alert" message="Extender Login">
        Você será deslogado <br />imediatamente!
      </AlertCard>


    </div>
  );
}

export default App;