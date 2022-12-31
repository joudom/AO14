import { useState, useEffect } from 'react';
import { L30 } from 'react-isloading'
import '../styles/Contact.css';

function Contact() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

    return (
      <div className="contact">
        {
        loading?
        <L30 style={{ height: "30rem", width: "30rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        :
        <>
        <div className="leftSide"></div>
        <div className="middleBox">
          <h1>Contact</h1>
          <div className="contact-info">
              <div className="contact-item">
                  <div className="icon">
                    <center>
                      <img src="https://img.icons8.com/ios-filled/50/null/circled-envelope.png" alt='email'/>
                      <h3>Jesse_Oudom@yahoo.com</h3>
                    </center>
                  </div>
              </div>
          </div>
        </div>
        <div className="rightSide"></div>
        </>
        }
      </div>
    );
  }
  
  export default Contact;