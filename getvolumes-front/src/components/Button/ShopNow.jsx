import "./Button.css";

const ShopNow = ({ children, click }) => {
  return (
    <div className="shopnow-container">
      <button className="button-shopnow" onClick={click}>
        {children}
      </button>
    </div>
  );
};

export default ShopNow;
