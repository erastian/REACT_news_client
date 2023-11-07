import styles from './top-menu.module.css';
import { NavLink } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";

export function TopMenu() {
  return (
      <ul className={ styles.topMenu }>
        <li>
          <NavLink to={ PAGE_PATH.root }>All</NavLink>
        </li>
        <li>
          <NavLink to={PAGE_PATH.category.categoryURL('places')}>Places</NavLink>
        </li>
        <li>
          <NavLink to={PAGE_PATH.category.categoryURL('events')}>Events</NavLink>
        </li>
        <li>
          <NavLink to={PAGE_PATH.category.categoryURL('people')}>People</NavLink>
        </li>
      </ul>
  );
}