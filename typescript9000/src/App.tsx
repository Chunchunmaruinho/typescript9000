import './App.css'
import { Card } from './Card'
import React, { useState, useEffect } from 'react';

function App() {

  const [product, setProduct] = useState([]);

  const apiUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.results);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);


  type dasd = {
    products: product[];
    total: number;
    skip: number;
    limit: number;
  }


  type product = {
    id: number;
    title: string;
    description: string;
    images: string[];
    price: number;
    discountPercentage: number;

  };

  return (
    <>
      {product.map((id, title, description, images, price, discountPercentage) => {

        <div key={id} className="card">
          <h2>{title}</h2>
          <p>{description}</p>
          <p>{price}</p>
          <img src={images[1]} />
        </div>

      })}
    </>
  )
}

export default App
