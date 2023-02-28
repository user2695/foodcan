import "../styles/card.css";
import images from "../../data/index.json";

const Card = () => {
  const cards = images;
  return (
    <div>
      <section>
        <div>
          <h1>Featured Products</h1>
          <div className="cards">
            {cards.map((card) => (
              <div key={card.id} className="card">
                <h2>{card.name}</h2>
                <h3>{card.description}</h3>
                <img src={card.image} alt="" />
                <h3>{card.price}</h3>
                <button className="cardbtn">Add to cart</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
