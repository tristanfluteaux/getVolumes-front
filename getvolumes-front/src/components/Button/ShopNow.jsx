
import './Button.css'

const ShopNow = ({ children }) => {
    return (  
        <div style={{display: 'flex',justifyContent:'center'}}>
            <button className='button-shopnow'>{children}</button>
        </div>
    );
}
 
export default ShopNow;