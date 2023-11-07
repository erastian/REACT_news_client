import styles from './button.module.css';
import React from "react";
import cn from "classnames";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'filled' | 'outline';
  onClick?: () => void;
}

export function Button(props: Props) {
  const {
    className,
    variant = 'primary',
    size = 'md',
    type = 'button',
    onClick,
    disabled,
    children
  } = props;

  return (
      <button type={ type } className={cn(className, styles[variant], styles.button, styles[size])}
              onClick={ onClick } disabled={ disabled }>{ children }</button>
  );
}