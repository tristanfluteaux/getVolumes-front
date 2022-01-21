import './InstrumentList.css'
import ProductCard from '../../components/Card/ProductCard';

const InstrumentList = ({ instruments}) => {
    // const [instruments, setInstruments] = useState()

    // useEffect(() => {
    //     const getGuitars = async () => {
    //         const results = await axios.get('http://localhost:4000/guitars')
    //         setInstruments(results.data)
    //     }
    //     getGuitars()
    // }, [])
    
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
