import { NavLink } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ name, _id, type, brend, img}) => {
    return (  
        <div className='product-main'>
            <div>
            <NavLink to={`/product/${_id}`}>
                <img src={`http://localhost:4000/static/images/${img}`} alt={name} className='product-image'/>
                </NavLink>
            <h3>{brend}</h3>
            </div>

            <p>{type}</p>
            <h4>{name}</h4>
        </div>
    );
}
 
export default ProductCard;