import { useState } from 'react';
import React from 'react';
import './store.css';
import Store from './Store';

export default function IconSwitch(props) {
  return (
    <div className='icon-wrapper'><i onClick={props.onSwitch} className='material-icons'>{props.icon}</i></div>
  )
}
