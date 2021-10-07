function Card({ id, children }) {
  return (
    <div className="card">
      <img src={`https://picsum.photos/id/${id}/200/300`} alt="" />
      {children}
    </div>

  )
}

function App() {

  const cards = [
    { id: 239, texto: "Card 1" },
    { id: 240, texto: "Card 2" },
    { id: 241, texto: "Card 3" },
    { id: 242, texto: "Card 4" },

  ];
  return (
    <div className="App">
      {
        cards.map((card) => {
          return <Card id={card.id} key={card.id}>{card.texto}</Card>
        })
      }

    </div>
  );
}

export default App;
