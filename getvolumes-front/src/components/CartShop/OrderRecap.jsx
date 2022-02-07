import "./OrderReacp.css";

const OrderRecap = ({ getCartCount, getCartSubTotal }) => {

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
  console.log(getCartSubTotal())
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
          <h3>Total : {(getCartSubTotal()+taxCalculate()+ shipping()).toFixed(2)} € TTC</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderRecap;
