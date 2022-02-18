import { useState } from "react";
import "./OrderReacp.css";

const OrderRecap = ({ getCartCount, getCartSubTotal }) => {
  const [priceOrder, setPriceOrder] = useState(0)

  const taxCalculate = () => {
    return getCartSubTotal() * 0.1
  }

  const shipping = () => {
    let price = getCartSubTotal()
    if (price <= 500) {
      return 20
    } else {
      return 0
    }
  }

  const subTotal = () => {
    return (getCartSubTotal()+taxCalculate()+ shipping()).toFixed(2)
  }
  let array = []

  console.log(array.push(subTotal()))
  return (
    <div className="recap-main">
      <div className="recap-container">
        <h2>Votre commande</h2>
        <p>Envoi gratuit à partir de 500€</p>
        <div>
          <p>Total des articles : {getCartCount()}</p>
          <p>Montant des articles : {getCartSubTotal().toFixed(2)} €</p>
          <p>Calculation des taxes : {taxCalculate().toFixed(2)} €</p>
          <p>Estimation des frais de port : {shipping().toFixed(2)} €</p>
          <h3>Total : {subTotal()} € TTC</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderRecap;
