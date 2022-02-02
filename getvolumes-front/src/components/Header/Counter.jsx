import "./Counter.css";

import { useSelector } from "react-redux";

const Counter = () => {

  const cart = useSelector(state => state.cart)
  const {cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0)
  }
  return (
    <>
      <div className="div-counter">{getCartCount()}</div>
    </>
  );
};

export default Counter;
