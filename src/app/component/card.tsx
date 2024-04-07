
'use client'

import React, { useState, useEffect } from 'react';
import "./card.scss";


const Card = () => {
  const [cardItems, setСardItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setСardItems(data);
        setLoading(false);
      } catch (error) {
        setError(error as Error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

    return (
      <div className="cardContainer">
        {cardItems.map(item => (
          <div key={item.id} className="card">
            <img src={item.images} alt="" />
            <h2 className="title">{item.title}</h2>
            
            <p className={expanded ? "description expanded" : "description"}>
              {expanded ? item.description : `${item.description.slice(0, 20)}...`}
              <button onClick={toggleDescription}>
                {expanded ? "Read less" : "Read more"}
              </button>
            </p>
            <p className="category">{item.category.name}</p>
            <div className="cardBotton">
              <div className="priceContainer">
                <p >Price: </p>
                <p className="price">$ {item.price}</p>
              </div>
              <button>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    );
  }


export default Card;
