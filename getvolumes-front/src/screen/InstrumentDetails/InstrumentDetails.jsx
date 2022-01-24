import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShopNow from "../../components/Button/ShopNow";

import "./InstrumentDetails.css";

const InstrumentDetails = () => {
  const [guitar, setGuitar] = useState([]);
  const [shop, setShop] = useState(1);
  const { id } = useParams();

  const up = (e) => {
    e.preventDefault();
    setShop((c) => c + 1);
    if (guitar.quantity === shop) {
      return setShop(guitar.quantity);
    }
  };
  const down = (e) => {
    e.preventDefault();
    setShop((c) => c - 1);
    if (shop === 1) {
      return setShop(1);
    }
  };

  useEffect(() => {
    const guitarById = async () => {
      const result = await axios.get(`http://localhost:4000/guitars/${id}`);
      setGuitar(result.data);
    };
    guitarById();
  }, [id]);
  return (
    <div className="details-main">
      <div className="details-container-img">
        <img
          className="details-img"
          src={`http://localhost:4000/static/images/${guitar.image}`}
          alt={`pic of ${guitar.name}`}
        />
      </div>
      <div className="details-container-info">
        <h2>{guitar.name}</h2>
        <h2>{guitar.product}</h2>
        <p>{guitar.desc1}</p>
        <p>{guitar.desc2}</p>
        <p>{guitar.desc3}</p>
        <p>{guitar.desc4}</p>
        <p>{guitar.desc5}</p>
        <p>{guitar.desc6}</p>
        <p>{guitar.desc7}</p>
        <p>{guitar.desc8}</p>
        <p>{guitar.desc9}</p>
        <p>{guitar.desc10}</p>
        <h3>{`${guitar.price} €`}</h3>
        <p>quantity : {guitar.quantity}</p>
      </div>
      <div style={{ paddingTop: "50px", paddingLeft: "40px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <button onClick={down} className="details-button-select">
            -
          </button>
          <p
            style={{
              paddingLeft: "10px",
              paddingRight: "10px",
              fontSize: "20px",
            }}
          >
            {shop}
          </p>{" "}
          <button onClick={up} className="details-button-select">
            +
          </button>
        </div>
        <div>
          <ShopNow>Add to cart</ShopNow>
        </div>
      </div>
    </div>
  );
};

export default InstrumentDetails;
