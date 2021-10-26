import playhome from '../../assets/playhome.jpg'
import ShopNow from '../../components/Button/ShopNow';

import './Home.css'
import accoustichome from '../../assets/accoustichome.jpg'
import eletrichome from '../../assets/electrichome.jpg'
import basshome from '../../assets/basshome.jpg'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (  
        <div className='home-main'>
            <div>
                <img src={playhome} alt='playhome' className='playhome-img'/>
                <NavLink to='/product'><ShopNow/></NavLink>
            </div>
            <div>
                <p style={{textAlign: 'center', fontSize: '50px', paddingTop:'150px'}}>"We don't sell music. We share it."</p>
                <p style={{textAlign: 'center', fontSize: '50px', paddingBottom:'150px'}}>Leonard bernstein</p>
            </div>
            <div className='home-choice'>
                <div style={{width: '33%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <p>Accoustic</p>
                    <img src={accoustichome} alt='' style={{width: '100%', height: '100%'}}/>
                    <button className='home-category-button' >Show Galery</button>
                </div>
                <div style={{width: '33%', display: 'flex', justifyContent: 'center'}}>
                    <p>Electric</p>
                    <button className='home-category-button'>Show Galery</button>
                    <img src={eletrichome} alt='' style={{width: '100%', height: '100%'}}/>
                </div>
                <div style={{width: '33%', display: 'flex', justifyContent: 'center'}}>
                    <p>Bass</p>
                    <button className='home-category-button' >Show Galery</button>
                    <img src={basshome} alt='' style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
        </div>
    );
}

export default Home;