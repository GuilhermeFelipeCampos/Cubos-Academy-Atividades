
import './App.css';
import lupa from "./assets/icone-lupa.svg";
import globo from "./assets/icone-globo.svg";
import mapa from "./assets/icone-mapa.svg";

function App() {
  return (
    <div className="container-principal">
      <h1>Browse collections</h1>
      <div className="principal-cards">
        <div className="principal-card-search">
          <img src={lupa} alt="icone-lupa" />
          <h2>Search</h2>
          <p>Search in any topic you are interested and find any answers you need.</p>
          <a href="#">Learn more about Search</a>

        </div>
        <div className="principal-card-browser">
          <img src={globo} alt="icone-globo" />
          <h2>Browser</h2>
          <p>Search in any topic you are interested and find any answers you need.</p>
          <a href="#">Learn more about Browser</a>
        </div>
        <div className="principal-card-maps">
          <img src={mapa} alt="icone-mapa" />
          <h2>Maps</h2>
          <p>Search in any topic you are interested and find any answers you need.</p>
          <a href="#">Learn more about Maps</a>
        </div>

      </div>

    </div>
  );
}

export default App;
