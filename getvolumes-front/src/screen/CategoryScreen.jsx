import "./InstrumentList/InstrumentList.css";
import ProductCard from "../components/Card/ProductCard";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";

import { getProducts as listProducts } from "../redux/actions/productActions";
import { useState } from "react";
import axios from "axios";

const CategoryScreen = (choice) => {
//  const [ category, setCategory ] = useState([])

//  useEffect(() => {
//      const getType = () => {
//          axios.get("http://localhost:4000/guitars/filter/bass")
//          .then((results) =>
//          setCategory(results.data))
//      }
//      getType()
//  }, [])


// const dispatch = useDispatch()

// const getTypeProducts = useSelector(state => state.getTypeProducts)
// const { products, loading, error } = getTypeProducts

// useEffect(() => {
//     dispatch(listProducts())
// }, [dispatch])

//   return (
//     <div style={{ backgroundColor: "#E3EBED" }}>
//       <h2
//         style={{ textAlign: "center", fontSize: "60px", paddingTop: "100px" }}
//       >
//         Par type
//       </h2>
//       <div className="list-main">
//       {loading ? <h3>Loading ...</h3> : error ? <h3>{error}</h3> : 
//             products && 
//             products.map(product => (
//                 <ProductCard key={product.id}
//                 id={product.id}
//                 name={product.name}
//                 image={product.image}
//                 price={product.price}
//                 brend={product.brend}
//                 type={product.type}
//                 />
//             ))}
//       </div>
//     </div>
const dispatch = useDispatch()

const getProducts = useSelector(state => state.getProducts)
const { products, loading, error } = getProducts

useEffect(() => {
    dispatch(listProducts())
}, [dispatch])
return (  
    <div style={{backgroundColor: '#E3EBED'}}>
        <h2 style={{textAlign: 'center', fontSize: '60px', paddingTop: '100px'}}>Les basses</h2>
    <div className='list-main'>
        {loading ? <h3>Loading ...</h3> : error ? <h3>{error}</h3> : 
        products && 
        products.filter(x => x.type === `${choice}`).map(product => (
            <ProductCard key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            price={product.price}
            brend={product.brend}
            type={product.type}
            />
        ))}
    </div>
    </div>
  );
};

export default CategoryScreen;
