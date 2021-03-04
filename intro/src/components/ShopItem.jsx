import { useState } from 'react';
import React from 'react';
import './store.css';
import Store from './Store';
import ListView from './ListView';

export default function ShopItem(props) {
  const {name, color, price, img} = props.itemInfo;
  return (
    <li className='shop-item'>
      <img className='item-image' src={img}/>
      <h2 className='item-name'>{name}</h2>
      <p className='item-color'>{color}</p>
      <p className='price'>${price}</p>
      <button className='card-button'>Add to cart</button>
    </li>
  )
}
