import { NavLink } from "react-router-dom";
import TopMenu from "../../entities/topMenu";
import UserMenu from "../../entities/userMenu";
import styles from './header.module.css';
import logo from '../../assets/logo.svg'
import { PAGE_PATH } from "~shared/config";

export function Header() {
  return (
      <div className={ styles.header }>
        <div className={ styles.logo }>
          <NavLink to={ PAGE_PATH.root }><img src={ logo } alt="logo"/></NavLink>
        </div>
        <TopMenu/>
        <UserMenu/>
      </div>
  );
}
