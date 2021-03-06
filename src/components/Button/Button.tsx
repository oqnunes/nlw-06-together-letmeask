import { ButtonHTMLAttributes } from 'react';

import './Button.scss';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps){

  return(
    <button 
      className="button"
      type={props.type}
    >
      {props.children}
    </button>
  )
}