import { NavLink } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ name, id, type, brend, image, price }) => {
  return (
    <>
      <div className="product-main slide-in-bottom">
        <div>
          <NavLink to={`/product/${id}`}>
            <img
              src={`http://localhost:4000/static/images/${image}`}
              alt={name}
              className="product-image"
            />
          </NavLink>
          <div className="product-info">
            <h2 className="info-color">{name}</h2>
            <h3 className="info-color">{brend}</h3>
            <h4 className="info-color">{price} €</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
