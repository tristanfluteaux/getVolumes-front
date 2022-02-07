import "./InstrumentList.css";
import ProductCard from "../../components/Card/ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getProducts as listProducts } from "../../redux/actions/productActions";

const GuitCategory = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <div>
      <h2 className="list-main-title">Les guitares électriques</h2>
      <div className="list-main">
        {loading ? (
          <h3>Loading ...</h3>
        ) : error ? (
          <h3>{error}</h3>
        ) : (
          products &&
          products
            .filter((x) => x.type === "guitar")
            .map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                name={product.name}
                image={product.image}
                price={product.price}
                brend={product.brend}
                type={product.type}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default GuitCategory;
