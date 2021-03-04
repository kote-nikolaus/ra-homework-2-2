import { useState } from 'react';
import React from 'react';
import './store.css';
import Store from './Store';
import ShopCard from './ShopCard';

export default function CardsView(props) {
  return (
    <ul className={props.className}>
      {props.cards.map(o => <ShopCard cardInfo={o}/>)}
    </ul>
  )
}
