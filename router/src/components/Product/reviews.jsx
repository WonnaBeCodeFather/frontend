import React from 'react';
import './productdetail.css';

export const Reviews = ({props}) => {
  return <div>
      <p>Комменарии:</p>
      <div className='Reviews'>  
      <span>Username: {props.reviews.map((w, i) => w.name)}</span>
      <p>Comment: {props.reviews.map((w, i) => w.text)}</p>
      </div>
  </div>;
};
