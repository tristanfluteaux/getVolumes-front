import "./CartCard.css";

const CartCard = ({ image, name, type, product, price }) => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <img src={image} alt={name} className="guit-image" />
        </div>

        <div className="info-container">
          <h1>{name}</h1>
          <h2>{product}</h2>
          <p>{type}</p>
        </div>
        <div className="price-container">
          <div style={{ display: "flex" }}>
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <h3>{price} €</h3>
        </div>
      </div>
    </>
  );
};

export default CartCard;
