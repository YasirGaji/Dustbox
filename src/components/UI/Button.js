import React from 'react';
import style from './Button.module.css';

export default function Button(props) {
  return (
    <div>
      <button 
        className={`${style.button} ${props.className}`}
        type={props.type || 'button'}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </div>
  );
}
