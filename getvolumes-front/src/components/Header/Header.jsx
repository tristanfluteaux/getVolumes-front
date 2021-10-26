import { NavLink } from 'react-router-dom';
import SearchBar from '../SearchBar';
import './Header.css'

const Header = () => {
    return (  
        <div className='header-main'>
            <SearchBar />
            <div className='header-div-title'>
            <NavLink to='/'><h1 className='header-title'>Get Volumes</h1></NavLink>
            </div>
            <div className='header-log'>
                <p>Register</p>
                <p>Login</p>
            </div>
        </div>
    );
}
 
export default Header;