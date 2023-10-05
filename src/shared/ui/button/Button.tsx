import styles from './Button.module.css';
import React, { ReactNode } from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  style?: string;
  size?: string;
  type?: "button" | "submit";
  children?: ReactNode;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    style,
    size,
    type = 'button',
    onClick,
    children
  } = props;

  const customStyles = `${ size ? styles[size] : '' } ${ style ? style.toString() : '' }`;

  return (
      <button type={ type } className={ `${ styles.button } ${ customStyles }` }
              onClick={ onClick }>{ children }</button>
  );
}