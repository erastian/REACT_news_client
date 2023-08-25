import { NavLink } from "react-router-dom";
import TopMenu from "./TopMenu";
import UserMenu from "./UserMenu";
import styles from './styles.module.css';
import logo from '../../assets/logo.svg'

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