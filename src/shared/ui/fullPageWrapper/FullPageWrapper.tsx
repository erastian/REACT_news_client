import { ReactNode } from "react";
import styles from './full-page-wrapper.module.css'
import cn from "classnames";

type FullPageWrapperProps = {
  children: ReactNode
}

export function FullPageWrapper(props: FullPageWrapperProps){
  const { children } = props;

  return <div className={cn('container', styles.wrapper)}>{children}</div>;
}