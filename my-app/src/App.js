
import './App.css';
import React,{useState,useEffect} from 'react';
import Explore from './Component/Explore';
import Ecommerce from "./Component/Ecommerce";

import { Routes} from "react-router-dom";
import { Route} from "react-router-dom";
import Home from './Component/Home';
import BounceLoader from "react-spinners/BounceLoader";



function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },4000)
  },[])



  return (
  
    <div>
      {
        loading ?
      <BounceLoader className='loader'
                  color={'#50CEE3'} 
                  loading={loading} 
                   size={150} />
                   :

    <Routes>
      <Route path="/" exact element={<Home/>}></Route> 
      <Route path="/explore" element={<Explore/>}></Route> 
      <Route path="/ecommerce/explore" element={<Explore/>}></Route> 
       <Route path="/ecommerce" element={<Ecommerce/>}></Route>
      </Routes> 
      }

     </div>

  )
}

export default App;
