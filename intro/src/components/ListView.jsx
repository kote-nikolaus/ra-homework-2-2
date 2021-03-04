import { useState } from 'react';
import React from 'react';
import './store.css';
import Store from './Store';
import ShopItem from './ShopItem';

export default function ListView(props) {
  return (
    <ul className={props.className}>
      {props.items.map(o => <ShopItem itemInfo={o}/>)}
    </ul>
  )
}
