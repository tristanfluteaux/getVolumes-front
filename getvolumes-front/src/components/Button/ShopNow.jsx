
import './Button.css'

const ShopNow = ({ children, click }) => {
    return (  
        <div style={{display: 'flex',justifyContent:'center'}}>
            <button className='button-shopnow' onClick={click} >{children}</button>
        </div>
    );
}
 
export default ShopNow;