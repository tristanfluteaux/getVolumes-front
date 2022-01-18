import { NavLink } from 'react-router-dom';
import './ProductCard.css'

const ProductCard = ({ name, id, type, product, image, price}) => {
    return (  
        <div className='product-main'>
            <div>
            <NavLink to={`/product/${id}`}>
                <img src={`http://localhost:4000/static/images/${image}`} alt={name} className='product-image'/>
                </NavLink>
            <h3>{product}</h3>
            </div>

            <p>{type}</p>
            <h4>{name}</h4>
            <h5>{price} €</h5>
        </div>
    );
}
 
export default ProductCard;