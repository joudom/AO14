import { useState, useEffect } from 'react';
import { L30 } from 'react-isloading'
import Banner from "../components/Banner";

function Home() {
  const [loading, setLoading] = useState(false)
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },5000)
  },[])

  return (
    <div className="home">
      {
      loading?
      <L30 style={{ height: "30rem", width: "30rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}/>
      :
      <Banner />
      }
    </div>
  );
}

export default Home;