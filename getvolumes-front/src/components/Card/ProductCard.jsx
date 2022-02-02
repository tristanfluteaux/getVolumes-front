import { NavLink } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ name, id, type, brend, image, price }) => {
  return (
    <>
      <div className="product-main">
        <div>
          <NavLink to={`/product/${id}`}>
            <img
              src={`http://localhost:4000/static/images/${image}`}
              alt={name}
              className="product-image"
            />
          </NavLink>
          <div className="product-info">
            <h2 style={{ marginTop: "0px" }}>{name}</h2>
            <h3>{brend}</h3>
            <h4 style={{ fontSize: "20px", marginTop: "2px" }}>{price} €</h4>
            <p style={{ paddingBottom: "10px" }}>{type}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
