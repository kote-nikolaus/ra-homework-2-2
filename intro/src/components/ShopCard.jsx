import { useState } from 'react';
import React from 'react';
import './store.css';
import Store from './Store';
import CardsView from './CardsView';

export default function ShopCard(props) {
  const {name, color, price, img} = props.cardInfo;
  return (
    <li className='shop-card'>
      <h2 className='card-name'>{name}</h2>
      <p className='item-color'>{color}</p>
      <img className='card-image' src={img}/>
      <div className='card-footer'>
        <p className='price'>${price}</p>
        <button className='card-button'>Add to cart</button>
      </div>
    </li>
  )
}
