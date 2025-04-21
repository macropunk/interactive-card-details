import { useEffect, useState } from 'react'
import './styles/FrontCard.css'

function FrontCard({cardNumberDisplay, userNameDisplay, expMonthDisplay, expYearDisplay}) {

    const [nmb, setnmb] = useState("0000 0000 0000 0000");
    const [mnth, setmnth] = useState("00");
    const [yr, setyr] = useState("00");

    useEffect(()=>{
        if(cardNumberDisplay){
            setnmb("");
        }
    }, [cardNumberDisplay])
    useEffect(()=>{
        if(expMonthDisplay){
            setmnth("");
        }
    }, [expMonthDisplay])
    useEffect(()=>{
        if(expYearDisplay){
            setyr("");
        }
    }, [expYearDisplay])

    return(
        <div className='card-front-container'>

            <img src="images/bg-card-front.png" alt="card front" className='front-card-background'/>
            

                <div className='card-information'>
                    <img src="images/card-logo.svg" alt="card logo" className='card-logo'/>

                    <div style={{display: "flex", justifyContent: "space-between", flexDirection: "column"}}>
                        <p className='card-number'>{nmb} {cardNumberDisplay}</p>
                        <div className='name-and-date'>
                            <p>{userNameDisplay}</p>
                            <p>{mnth}{expMonthDisplay}/{expYearDisplay}{yr}</p>
                        </div>
                    </div>
                    
                </div>

        </div>
    )
}

export default FrontCard