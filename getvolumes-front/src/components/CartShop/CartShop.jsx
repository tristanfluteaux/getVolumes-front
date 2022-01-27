import BoxButton from "../Button/BoxButton";
import "./CartShop.css";
import AmpIcon from "../../assets/ampIcon.png";
import OrderRecap from "./OrderRecap";
import CartCard from "../Card/CartCard";

const CartShop = () => {
  const fakeData = [
    {
      name: "NG-3",
      type: "bass",
      product: "Dingwall",
      image:
        "https://cdn1.boullard.ch/wp-content/uploads/products/189986-dingwall-ng3-nolly-signature-4-dingwall-1.jpg",
      price: "2 400",
    },
    {
      name: "NG-3",
      type: "bass",
      product: "Dingwall",
      image:
        "https://cdn1.boullard.ch/wp-content/uploads/products/189986-dingwall-ng3-nolly-signature-4-dingwall-1.jpg",
      price: "2 400",
    },
    {
      name: "NG",
      type: "bass",
      product: "Dingwall",
      image:
        "https://cdn1.boullard.ch/wp-content/uploads/products/189986-dingwall-ng3-nolly-signature-4-dingwall-1.jpg",
      price: "2 400",
    },
  ];

  return (
    <>
      <div className="cart-main">
        <div className="cart-div-title">
          <h1 className="cart-title">Shopping List</h1>
          <img src={AmpIcon} alt="shopIcon" className="amp-icon" />
        </div>
        <div className="cart-button-choice">
          <BoxButton>
            <span style={{ color: "#FFFFFF" }}>Continuer vos achats</span>
          </BoxButton>
          <BoxButton>
            <span style={{ color: "#FFFFFF" }}>Checkout</span>
          </BoxButton>
        </div>
        <div style={{ display: "flex", paddingTop: "110px", justifyContent:"center"}}>
          <div style={{ width: "60%" }}>
            {fakeData &&
              fakeData.map((data) => <div style={{paddingBottom: "40px", paddingTop:"40px", border:"solid #39414D 1px"}}><CartCard key={data.name} {...data} /></div>)}
          </div>
            <OrderRecap />
        </div>
      </div>
    </>
  );
};

export default CartShop;
