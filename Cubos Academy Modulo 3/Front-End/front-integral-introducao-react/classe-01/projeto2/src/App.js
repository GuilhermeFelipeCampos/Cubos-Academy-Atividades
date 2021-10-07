
import './App.css';
import fechar from "./assets/botao-fechar.svg";
import triste from "./assets/emoji-triste.svg";
import neutro from "./assets/emoji-neutro.svg";
import feliz from "./assets/emoji-feliz.svg";
import coracao from "./assets/coracao.svg";

function App() {
  return (
    <div className="container-principal">
      <div className="principal-suport">
        <a href="#" class="suport-botao-fechar"><img src={fechar} alt="Fechar" className="fechar" /></a>

        <h1>How satisfied are you with our customer support performance?</h1>
        <div className="suport-carinhas">
          <img src={triste} alt="emoji-triste" className="triste" />
          <img src={neutro} alt="emoji-neutro" className="neutro" />
          <img src={feliz} alt="emoji-feliz" className="feliz" />
        </div>
        <div class="suport-descricao">
          <span className="descricao-triste">Unhappy</span>
          <span className="descricao-neutro">Neutral</span>
          <span className="descricao-feliz">Satisfied</span>
        </div>

        <a href="#" className="suport-fechar">Close</a>

      </div>
      <div className="principal-thanks">
        <a href="#" className="suport-botao-fechar"><img src={fechar} alt="Fechar" className="fechar2" /></a>
        <img src={coracao} alt="coracao" className="coracao" />
        <h1>Thank you, James!</h1>
        <p>We’ll use your feedback to improve our customer support performance.</p>
        <div className="thanks-comentario">
          <span className="comentario">Write a comment</span>
          <a href="#" className="feito">Done</a>
        </div>

      </div>
    </div>

  );
}

export default App;
