import { useState, useEffect } from 'react';
import { L30 } from 'react-isloading'
import Gallery from "../components/Gallery";
import '../styles/Photo.css';

function Photo() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <div className="photo">
      {
      loading?
      <L30 style={{ height: "30rem", width: "30rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
      :
      <div className='photo-item'>
        <center>
          <h4>Photography by Nyree Mereus</h4>
          <h5>Sunday, December 04, 2022</h5>
          <h6>AFU South v. Elmbrook United</h6>
        </center>
        <Gallery />
      </div>
      }
    </div>
  );
}
  
  export default Photo;