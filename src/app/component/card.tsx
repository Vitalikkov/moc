
'use client'

import React, { useState, useEffect } from 'react';
import "./card.scss";


const Card = () => {
  const [cardItems, setСardItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


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
        setError(error);
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
      <div className="card-container">
        {cardItems.map(item => (
          <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>Category: {item.category.name}</p>
            <p>Description: {item.description}</p>
            <p>Price: ${item.price}</p>
          </div>
        ))}
      </div>
    );
  }


export default Card;
