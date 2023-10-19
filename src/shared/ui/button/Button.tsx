import styles from './button.module.css';
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: '' | 'semi' | 'large';
  variant?: string;
  onClick?: () => void;
}

export function Button(props: ButtonProps) {
  const {
    className,
    variant,
    size,
    type = 'button',
    onClick,
    disabled,
    children
  } = props;

  const customStyles = `${ size ? styles[size] : '' } ${ variant ? variant.toString() : '' }`;

  return (
      <button type={ type } className={ `${ className } ${ styles.button } ${ customStyles }` }
              onClick={ onClick } disabled={ disabled }>{ children }</button>
  );
}