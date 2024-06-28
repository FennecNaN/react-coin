import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';

const CoinID = () => {
  const [coin, setCoin] = useState([]);
  const { id } = useParams();



  const getCoin = async () => {
    let response;

    response = await axios.get(`https://api.coincap.io/v2/assets/${id}`);

    const newCripto = response.data.data;
    setCoin(newCripto);
  };
  useEffect(() => {
    getCoin();
  }, []);

  return (
    <div>


     
        
        
      

      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{coin?.name} </Card.Title>
          <Card.Text>
          Symbol: {coin?.symbol}
           
          </Card.Text>
          <Card.Text>
          <p>Ranking: {coin?.rank}</p>
          <p>PriceUsd: {parseFloat(coin.priceUsd).toFixed(2)}$</p>
          <p>Web: <Link to={coin?.explorer}> Mas informacion</Link></p>
          </Card.Text>

          
        </Card.Body>
      </Card>
    </div>
  );
};

export default CoinID;
