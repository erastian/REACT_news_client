import { NavLink } from "react-router-dom";
import UserMenu from "~features/userMenu";
import styles from './header.module.css';
import Logo from "~assets/logo.svg?react";
import { PAGE_PATH } from "~shared/config";

export function Header() {
  return (
      <div className={ styles.header }>
        <div className={ styles.logo }>
          <NavLink to={ PAGE_PATH.root }><Logo /></NavLink>
        </div>
        <UserMenu/>
      </div>
  );
}
