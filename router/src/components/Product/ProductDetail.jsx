import React from 'react';
import { Reviews } from './reviews';
import './productdetail.css'
import { Header } from '../header/Header';

export const ProductDetail = ({props}) => {
  return <div>
      <Header/>
      <img className='detailimage' src={props.image[0].image} alt="" />
      <div className='ProductItems'>
        <h3>{props.title}</h3>
        <p>Доступные размеры:{props.size.map((w, i) => ` ${w.size}; `)}</p>
        <span className="price">Цена: {`${Number(props.price[0].new_price) || Number(props.price[0].price)} грн.`}</span>
      {Number(props.price[0].discount) ? 
      <p><font color='red'>{`Скидка ${props.price[0].discount} %`}</font></p> : <></>}
      {Number(props.price[0].discount) ? <s>{`${props.price[0].price} грн.`}</s> : <></>}
      <p>Материал: {props.material}</p>
      <p>Пол: {props.gender}</p>
      <p>Сезон: {props.season}</p>
      {Boolean(props.reviews[0]) ? <Reviews props={props}/> : <></>}
 

      
      


      
      </div>

  </div>;
};
