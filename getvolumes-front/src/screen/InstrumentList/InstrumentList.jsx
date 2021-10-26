import { useState } from 'react';
// import livepurple from '../../assets/livepurple.jpg'
import livered from '../../assets/livered2.jpeg'
import './InstrumentList.css'

const InstrumentList = () => {
    const [instru, setInstru] = useState([])

    return (  
        <div className='list-main'>
            <img src={livered} alt='' style={{width:'100%', height: '480px'}}/>
            <h2 style={{textAlign: 'center', fontSize: '60px'}}>All products</h2>
        </div>
    );
}

export default InstrumentList;
