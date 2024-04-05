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
      {products.map(product => (
        <div key={product.id} className="product-card">
          <div className="product-images">
            {product.images.map(image => (
              <img key={image} src={image} alt={product.title} />
            ))}
          </div>
          <div className="product-details">
            <h2>{product.title}</h2>
            <p><strong>Категорія:</strong> {product.category.name}</p>
            <p>{product.description}</p>
            <p><strong>Ціна:</strong> ${product.price}</p>
            <button>Читати повністю</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;

