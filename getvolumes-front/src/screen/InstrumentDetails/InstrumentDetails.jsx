import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

import './InstrumentDetails.css'

const InstrumentDetails = () => {

    const [guitar, setGuitar] = useState([])
    const {id} = useParams()

    useEffect(() => {
        const guitarById = async () => {
            const result = await axios.get(`http://localhost:4000/guitars/${id}`)
            setGuitar(result.data)
        }
        guitarById()
    }, [id])

    return (  
        <div className='details-main'>
            <div className='details-container-img'>
                <img className='details-img' src={`http://localhost:4000/static/images/${guitar.image}`} alt={`pic of ${guitar.name}`}/>
            </div>
            <div className='details-container-info'>
                <h2>{guitar.name}</h2>
                <h2>{guitar.product}</h2>
                <p>{guitar.desc1}</p>
                <p>{guitar.desc2}</p>
                <p>{guitar.desc3}</p>
                <p>{guitar.desc4}</p>
                <p>{guitar.desc5}</p>
                <p>{guitar.desc6}</p>
                <p>{guitar.desc7}</p>
                <p>{guitar.desc8}</p>
                <p>{guitar.desc9}</p>
                <p>{guitar.desc10}</p>
                <h3>{`${guitar.price} €`}</h3>
                <div style={{display: 'flex'}}>
                <button>-</button> <p>{guitar.quantity}</p> <button>+</button>
                </div>
                <button>Add to Cart</button>
            </div>
        </div>
    );
}

export default InstrumentDetails;