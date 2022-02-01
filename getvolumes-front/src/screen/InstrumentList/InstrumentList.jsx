import './InstrumentList.css'
import ProductCard from '../../components/Card/ProductCard';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

import { getProducts as listProducts } from "../../redux/actions/productActions" 

const InstrumentList = ({ instruments}) => {

    const dispatch = useDispatch()

    const getProducts = useSelector(state => state.getProducts)
    const { prodcuts, loading, error } = getProducts

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    
    return (  
        <div style={{backgroundColor: '#E3EBED'}}>
            <h2 style={{textAlign: 'center', fontSize: '60px', margin:'0', paddingTop: '100px'}}>All products</h2>
        <div className='list-main'>

            {instruments &&
            instruments.map(instru => (
                <ProductCard key={instru.id} {...instru} />
            ))}
        </div>
        </div>
    );
}

export default InstrumentList;
