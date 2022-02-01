import "./OrderReacp.css";

const OrderRecap = () => {
  return (
    <div className="recap-main">
      <div className="recap-container">
        <h2>Votre commande</h2>
        <div>
          <p>Total des articles :</p>
          <p>Calculation des taxes :</p>
          <p>Estimation des frais de port :</p>
          <h3>Total :</h3>
        </div>
      </div>
    </div>
  );
};

export default OrderRecap;
