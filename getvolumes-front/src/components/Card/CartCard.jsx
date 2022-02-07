import { Link } from "react-router-dom";
import "./CartCard.css";

const CartCard = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          <Link to={`/product/:${item.id}`}>
            <img
              src={`http://localhost:4000/static/images/${item.image}`}
              alt={item.name}
              className="guit-image"
            />
          </Link>
        </div>

        <div className="info-container">
          <h1>{item.name}</h1>
          <h3>{item.brend}</h3>
        </div>
        <div className="price-container">
          <div className="quantity-container">
            <h4>Quantité :</h4>
            <select
              value={item.qty}
              onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
            >
              {[...Array(item.quantity).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
            <button onClick={() => removeHandler(item.product)}>
              Supprimer
            </button>
          </div>
          <h3>{item.price} €</h3>
        </div>
      </div>
    </>
  );
};

export default CartCard;
