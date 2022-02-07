import BoxButton from "../Button/BoxButton";
import AmpIcon from "../../assets/ampIcon.png";
import OrderRecap from "./OrderRecap";
import CartCard from "../Card/CartCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./CartShop.css";
import { Link, NavLink } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import ShopNow from "../Button/ShopNow";

const CartShop = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };

  const getCartSubTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };

  return (
    <>
      <div className="cart-main">
        <div className="cart-div-title">
          <h1 className="cart-title">Votre panier</h1>
          <img src={AmpIcon} alt="shopIcon" className="amp-icon" />
        </div>
        <div className="cart-button-choice">
          <ShopNow>
            <NavLink style={{textDecoration: "none"}} to="/">
              <span style={{ color: "#FFFFFF" }}>Continuer vos achats</span>
            </NavLink>
          </ShopNow>
          <ShopNow>
            <span style={{ color: "#FFFFFF" }}>Checkout</span>
          </ShopNow>
        </div>
        <div
          style={{
            display: "flex",
            paddingTop: "110px",
            justifyContent: "center",
          }}
        >
          {cartItems.length === 0 ? (
            <div
              style={{ width: "60%", fontSize: "40px", textAlign:"center"}}
            >
              Votre panier est vide
            </div>
          ) : (
            <div style={{ width: "60%" }}>
              {cartItems &&
                cartItems.map((item) => (
                  <div
                    style={{
                      paddingBottom: "22px",
                      paddingTop: "20px",
                      backgroundColor: "#7B899E",
                      marginBottom: "40px",
                      borderRadius: "7px",
                      width: "92%",
                    }}
                  >
                    <CartCard
                      key={item.name}
                      item={item}
                      qtyChangeHandler={qtyChangeHandler}
                      removeHandler={removeHandler}
                    />
                  </div>
                ))}
            </div>
          )}
          <OrderRecap
            getCartCount={getCartCount}
            getCartSubTotal={getCartSubTotal}
          />
        </div>
      </div>
    </>
  );
};

export default CartShop;
