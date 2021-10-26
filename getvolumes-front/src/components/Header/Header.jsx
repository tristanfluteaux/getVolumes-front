import SearchBar from '../SearchBar';
import './Header.css'

const Header = () => {
    return (  
        <div className='header-main'>
            <SearchBar />
            <div className='header-div-title'>
            <h1 className='header-title'>Get Volumes</h1>
            </div>
            <div className='header-log'>
                <p>Register</p>
                <p>Login</p>
            </div>
        </div>
    );
}
 
export default Header;