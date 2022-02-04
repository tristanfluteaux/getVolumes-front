import { useEffect, useState } from "react";
import {useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import ShopNow from "../../components/Button/ShopNow";

import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

import "./InstrumentDetails.css";
import { Link } from "react-router-dom";

const InstrumentDetails = () => {
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addToCart(product.id, qty))
    alert("Produit ajouté au panier")
  }

  return (
    <div className="details-main">
      {loading ? (
        <h2>Loading ...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="details-container-img">
          <Link to="/product">
          <button className="back-button">Précédent</button>
          </Link>
            <img
              className="details-img"
              src={`http://localhost:4000/static/images/${product.image}`}
              alt={`pic of ${product.name}`}
            />
          </div>
          <div className="details-container-info">
            <h2>{product.name}</h2>
            <h2>{product.brend}</h2>
            <p>{product.desc1}</p>
            <p>{product.desc2}</p>
            <p>{product.desc3}</p>
            <p>{product.desc4}</p>
            <p>{product.desc5}</p>
            <p>{product.desc6}</p>
            <p>{product.desc7}</p>
            <p>{product.desc8}</p>
            <p>{product.desc9}</p>
            <p>{product.desc10}</p>
            <h3 style={{fontSize: "35px"}}>{`${product.price} €`}</h3>
          </div>
          <div className="details-container-rigth"
            >
              <p>
                Disponibilité :{" "}
                {product.quantity > 0 ? "En stock" : "Rupture de stock"}
              </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <select value={qty} onChange={(e) => setQty(e.target.value)} style={{width:"80px", marginBottom:"20px", textAlign: "center"}}>
                {[...Array(product.quantity).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <ShopNow click={addToCartHandler}>Ajouter au panier</ShopNow>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default InstrumentDetails;
