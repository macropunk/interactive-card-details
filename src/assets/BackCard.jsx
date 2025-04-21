import { useEffect, useState } from 'react'
import './styles/BackCard.css'


function BackCard({secureNumber}) {

    const [cvc, setcvc] = useState("000");

    useEffect(()=>{
        if(secureNumber){
            setcvc("");
        }
    }, [secureNumber])

    return(
        <div className="card-back-container">
            <img src="images/bg-card-back.png" alt="card back" className="back-card-background"/>
            <p className='secure-number'>{secureNumber}{cvc}</p>
        </div>
    )
}

export default BackCard