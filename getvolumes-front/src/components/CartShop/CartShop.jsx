import BoxButton from "../Button/BoxButton";
import AmpIcon from "../../assets/ampIcon.png";
import OrderRecap from "./OrderRecap";
import CartCard from "../Card/CartCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CartShop.css";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartShop = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeHandler = (id) => {
    dispatch(removeFromCart(id))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => (item.price* item.qty) + price, 0)
  }


  useEffect(() => {}, []);

  return (
    <>
      <div className="cart-main">
        <div className="cart-div-title">
          <h1 className="cart-title">Shopping List</h1>
          <img src={AmpIcon} alt="shopIcon" className="amp-icon" />
        </div>
        <div className="cart-button-choice">
          <BoxButton>
            <Link to="/">
            <span style={{ color: "#FFFFFF" }}>Continuer vos achats</span>
            </Link>
          </BoxButton>
          <BoxButton>
            <span style={{ color: "#FFFFFF" }}>Checkout</span>
          </BoxButton>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "110px",
            justifyContent: "center",
          }}
        >
          {cartItems.length === 0 ? <div style={{width: "60%", textAlign: "center", fontSize:"40px"}}>Votre panier est vide</div> : 
          <div style={{ width: "60%" }}>
            {cartItems &&
              cartItems.map((item) => (
                <div
                style={{
                  paddingBottom: "40px",
                  paddingTop: "40px",
                  border: "solid #39414D 1px",
                }}
                >
                <CartCard key={item.name} item={item} qtyChangeHandler={qtyChangeHandler} removeHandler={removeHandler}/>
                </div>
              ))}
          </div>
            }
          <OrderRecap getCartCount={getCartCount} getCartSubTotal={getCartSubTotal}/>
        </div>
      </div>
    </>
  );
};

export default CartShop;
