
import './App.css';
import sedan from "./assets/icon-sedans.svg";
import suv from "./assets/icon-suvs.svg";
import luxury from "./assets/icon-luxury.svg";

function App() {
  return (
    <div className="container-principal">
      <div className="principal-sedans">
        <img src={sedan} alt="Sedans" />
        <h1>SEDANS</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on
          your next road trip.</p>
        <a href="#" class="sedans">Learn More</a>


      </div>
      <div className="principal-suvs">
        <img src={suv} alt="SUVS" />
        <h1>SUVS</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and
          off-road adventures.</p>
        <a href="#" class="suvs">Learn More</a>
      </div>
      <div className="principal-luxury">
        <img src={luxury} alt="Luxury" />
        <h1>LUXURY</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental
          and arrive in style. </p>
        <a href="#" className="luxury">Learn More</a>

      </div>


    </div>
  );
}

export default App;
