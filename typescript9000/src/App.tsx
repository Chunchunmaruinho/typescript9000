import './App.css'
import { Card } from './Card'
import React, { useState, useEffect } from 'react';

function App() {

  const [product, setProduct] = useState<FetchResult>();

  const apiUrl = 'https://dummyjson.com/products';

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  { product ? (console.log(product)) : (console.log("wait")) };
  type FetchResult = {
    products: Array<product>;
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
      <Card
        title='Title'
        description='Description'

      />
    </>
  )
}

export default App
