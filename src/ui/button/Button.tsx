import styles from './Button.module.css';
import React from "react";

interface props {
  style?: string;
  size?: string;
  type?: "button" | "submit";
  children?: React.ReactNode;
  onClick?: () => void;
}
function Button({style, size, type, onClick, children}: props) {
  const customStyles = `${size ? styles[size] : ''} ${style ? style.toString() : ''}`;
  return (
      <button type={type} className={`${styles.button} ${customStyles}`} onClick={onClick}>{children}</button>
  );
}

export default Button;