import styles from "./button.module.css";
import React from "react";
import cn from "classnames";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "filled" | "outline" | "link";
}

export function Button(props: Props) {
  const {
    variant = "primary",
    size = "md",
    type = "button",
    onClick,
    disabled,
    children,
  } = props;

  return (
    <button
      type={type}
      className={cn(styles[variant], styles.button, styles[size])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
