import { useState, useEffect } from 'react';
import { L30 } from 'react-isloading'
import '../styles/Video.css';

function Video() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <div className="video-container">
      {
        loading?
        <L30 style={{ height: "30rem", width: "30rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
        :
        <div className='video-item'>
        <h1>Fall 2022 <span>Highlights</span></h1>
        <iframe width="350" height="315" src="https://www.youtube-nocookie.com/embed/eGkCzp-LSYQ" 
          title="Ashton Oudom - Fall 2022 Highlights" border="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
        </div>
      }
    </div>
  );
}
  
  export default Video;