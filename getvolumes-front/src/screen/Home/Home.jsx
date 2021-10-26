import playhome from '../../assets/playhome.jpg'
import ShopNow from '../../components/Button/ShopNow';

import './Home.css'
import accoustichome from '../../assets/accoustichome.jpg'
import eletrichome from '../../assets/electrichome.jpg'
import basshome from '../../assets/basshome.jpg'

const Home = () => {
    return (  
        <div>
            <div>
                <img src={playhome} alt='playhome' className='playhome-img'/>
                <ShopNow/>
            </div>
            <div>
                <p style={{textAlign: 'center', fontSize: '50px', paddingTop:'100px'}}>"We don't sell music. We share it."</p>
                <p style={{textAlign: 'center', fontSize: '50px', paddingBottom:'100px'}}>Leonard bernstein</p>
            </div>
            <div className='home-choice'>
                <div style={{width: '33%'}}>
                    <p>Accoustic</p>
                    <img src={accoustichome} alt='' style={{width: '100%', height: '100%'}}/>
                </div>
                <div style={{width: '33%'}}>
                    <p>Electric</p>
                    <img src={eletrichome} alt='' style={{width: '100%', height: '100%'}}/>
                </div>
                <div style={{width: '33%'}}>
                    <p>Bass</p>
                    <img src={basshome} alt='' style={{width: '100%', height: '100%'}}/>
                </div>
            </div>
        </div>
    );
}
 
export default Home;