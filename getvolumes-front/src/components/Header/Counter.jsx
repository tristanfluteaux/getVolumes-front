import { useSelector } from "react-redux";

import "./Counter.css";

const Counter = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  return (
    <>
      <div key={getCartCount()} className="div-counter slide-in-top">
        {getCartCount()}
      </div>
    </>
  );
};

export default Counter;
