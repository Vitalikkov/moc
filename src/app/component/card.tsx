import React, { useState, useEffect } from "react";
import Image from "next/image";
import "./card.scss";
import axios from 'axios';

const ProductCard = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://api.escuelajs.co/api/v1/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Помилка отримання даних з API:', error);
      });
  }, []);

  return (
    <div className="product-container">
      
      
    </div>
  );
}

export default ProductCard;

