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
                      <img src="https://img.icons8.com/ios-filled/50/null/circled-envelope.png" alt='email'/><h3>Jesse Oudom</h3>
                      <h2>Jesse_Oudom@yahoo.com</h2>
                    </center>
                  </div>
                  <div className="icon">
                    <center>
                      <img src="https://img.icons8.com/ios-filled/50/null/circled-envelope.png" alt='email'/><h3>Chris Mahaffey</h3>
                      <h2>Executive@hcsa.org</h2>
                      <h2>770-377-3909</h2>
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