import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [coins, setCoins] = useState([]);

  const getCripto = async () => {
    let response;
   
      response = await axios.get("https://api.coincap.io/v2/assets/");

   

    const newCripto = response.data.data;
    setCoins(newCripto);
  }
  useEffect(() => {
      
    getCripto()
  },[]);
  return (
    <div>
        <h3>Criptomonedas</h3>
        <ul>
    
        

        
                {coins.map((coin) => (
                <li key={coin.id}>
                <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
                </li>
                
                
            ))}

        </ul>


    </div>
  )

  
};


export default Home;
