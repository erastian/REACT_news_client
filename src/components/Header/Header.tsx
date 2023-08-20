import TopMenu from "./TopMenu";
import UserMenu from "./UserMenu";
import styles from './Header.module.css';
import logo from '../../assets/logo.svg'
import { NavLink } from "react-router-dom";

function Header() {
  return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/"><img src={logo} alt="logo"/></NavLink>
        </div>
        <TopMenu />
        <UserMenu />
      </div>
  );
}

export default Header;