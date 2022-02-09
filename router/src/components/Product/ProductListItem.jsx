import React from 'react';
import { Header } from '../header/Header';
import { ProductList } from './ProductList';
import './productlistitem.css'


export const ProductListItem = ({props, setslug, getProduct}) => {
  return <div className='main'>
      <Header/>
      {props.map((product) => <ProductList setslug={setslug} props={product} key={product.id} getProduct={getProduct}/> )}
  </div>;
};
