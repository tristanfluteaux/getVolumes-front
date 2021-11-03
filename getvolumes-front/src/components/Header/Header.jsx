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
                <NavLink to='/register'><p>Register</p></NavLink>
                <NavLink to='login'><p>Login</p></NavLink>
            </div>
        </div>
    );
}
 
export default Header;