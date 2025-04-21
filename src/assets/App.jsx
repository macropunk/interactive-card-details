import './styles//App.css'
import BackCard from './BackCard'
import FrontCard from './FrontCard'
import { useEffect, useState } from 'react'

function App() {

  const [userName, setUserName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardMonth, setcardMonth] = useState("");
  const [cardYear, setcardYear] = useState("");
  const [cardCVC, setcardCVC] = useState("");

  const [valid, setValid] = useState(false);

  function preventReload(e) {
    e.preventDefault();

    function dataValidation() {
      const lettersOnlyRegex = /^[A-Za-z ]+$/;

      const usernameValidation = lettersOnlyRegex.test(userName);
      
      if(usernameValidation && cardNumber.length == 19 && cardMonth > 0 && cardYear > 0 && cardCVC.length == 3){
        setValid(true)
      }else{
        window.alert("Make sure that all the input values are valid!")
      }
    }
    dataValidation()
  }

  function formatCardNumbers(e) {
    let value = e.target.value.replace(/\D/g, '');

    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');

    value = value.substring(0, 19);

    setCardNumber(value);
  }

  return (
    <>

      <div className='static-background'>
        <img src="images/bg-main-desktop.png" alt="background image" className='desktop-bg'/>
      </div>

      <div className='wrapper'>

        <div className='card-container' >
          <FrontCard cardNumberDisplay={cardNumber} userNameDisplay={userName.toUpperCase()} expMonthDisplay={cardMonth} expYearDisplay={cardYear}/>
          <BackCard secureNumber={cardCVC}/>
        </div>
        

        <main className='form-container'>

        <img src="images/bg-main-mobile.png" alt="background image" className='mobile-bg'/>

          <form onSubmit={preventReload} style={{display: valid ? "none" : ""}}>
            
            <label htmlFor="cardholder-name">CARDHOLDER NAME</label>
            <input type="text" id='cardholder-name' placeholder='e.g. Jane Appleseed' required pattern='[A-Za-z ]+' onChange={(e) => setUserName(e.target.value)}/>
            <span className='error-msg'>Wrong format, don't use numbers or any special characters</span>
            
            <label htmlFor="card-number">CARD NUMBER</label>
            <input type="text" id='card-number' placeholder='e.g. 1234 5678 9123 0000' required onChange={formatCardNumbers} value={cardNumber} maxLength={19} minLength={0}/>
            <span className='error-msg'>Wrong format, numbers only</span>

            <div>
                <div className='exp-date-container'>
                  <label>EXP. DATE (MM/YY)</label>
                  <div>
                    <input type="number" id='exp-month' placeholder='MM' required onChange={(e) => setcardMonth(e.target.value.slice(0, 2))} value={cardMonth} min={0}/>
                    <input type="text" id='exp-year' placeholder='YY' required onChange={(e) => setcardYear(e.target.value.slice(0, 2))} value={cardYear} min={0}/>
                    <span className='error-msg'>Can't be blank</span>
                  </div>
                  
                </div>

                <div className='cvc-container'>

                  <label htmlFor="cvc">CVC</label> 
                  <input type="number" placeholder='e.g. 123' required onChange={(e) => setcardCVC(e.target.value.slice(0, 3))} value={cardCVC} min={0}/>
                  <span className='error-msg'>Can't be blank</span>  

                </div>
            </div>

            <button id='confirm-button'>Cofirm</button>
          </form>

          <div className='thank-you-page' style={{display: valid ? "flex" : "none"}}>
            <img src="images/icon-complete.svg" alt="icon complete" />
            <p>THANK YOU!</p>
            <p>We've added your card details</p>

            <button id='continue-button' onClick={() => { location.reload(); }}>Continue</button>
          </div>
          
        </main>

      </div>
      
    </>
  )
}

export default App
