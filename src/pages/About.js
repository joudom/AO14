import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { L30 } from 'react-isloading'
import '../styles/About.css';

function About() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])
  
    return (
      <div className="about">
        {
        loading?
        <L30 style={{ height: "30rem", width: "30rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        :
        <>
        <div className="left"></div>
        <div className="middle">
          <h1><span>Ashton</span> Oudom</h1>
          <div className='player-info'>
            <h4><span>Player</span> Info</h4>
            <p>
              <b>Height:</b> 5'5<br/>
              <b>Weight:</b> 135 lbs<br/>
              <b>Birthyear:</b> 2010 <br/>
              <b>Current Age:</b> 12 <br/>
              <b>Nationality:</b> United States <br/>
              <b>Experience:</b> U7-U13 (current) <br/>
              <b>Positions:</b> Center-Back, Left-Back <br/>
              <b>Preferred Foot:</b> Right <br/>
              <b>Playstyle:</b> Sergio Ramos, Virgil van Dijk
            </p>
          </div>
          <div className='club-info'>
          <h4><span>Club</span> Info</h4>
            <p>
            <b>Current:</b> <a href='https://www.hcsa.org/'>Atlanta Fire United South</a> <br/>
            <b>League:</b> <a href='https://eliteacademyleague.com/#s-home'>Elite Academy League</a> <br/>
            <b>Conference:</b> Southeast <br/>
            <b>Coach:</b> <Link to='/contact'>Chris Mahaffey</Link><br/>
            </p>
          </div>
        </div>
        <div className="right"></div>
        </>
        }
      </div>
    );
  }
  
  export default About;