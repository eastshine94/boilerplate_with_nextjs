import type { NextPage } from 'next';
import React from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

interface ProductItem {
  id: number;
  name: string;
  price: string;
}

const Test: NextPage = () => {
  const fetchData = async () => {
    const res = await axios.get<ProductItem[]>(
      'http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline'
    );
    return res.data;
  };

  const { data: list } = useQuery(['products'], () => fetchData());
  if (!list) {
    return <div>loading...</div>;
  }

  return (
    <>
      {!list ? (
        <div>loading...</div>
      ) : (
        <div>
          {/* <form onSubmit={handleProductSubmit}>
            <input type="text" value={text} onChange={handleTextChange} />
            <button type="submit">추가</button>
          </form> */}
          {list.map((product) => (
            <div key={product.id}>
              <div>id: {product.id}</div>
              <div>name: {product.name}</div>
              <div>price: {product.price}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Test;
