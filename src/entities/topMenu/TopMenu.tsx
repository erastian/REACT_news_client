import { NavLink } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";

export function TopMenu() {
  return (
      <ul className='top-menu'>
        <li>
          <NavLink to={ PAGE_PATH.root }>All</NavLink>
        </li>
        <li>
          <NavLink to='/places'>Places</NavLink>
        </li>
        <li>
          <NavLink to='/events'>Events</NavLink>
        </li>
        <li>
          <NavLink to='/people'>People</NavLink>
        </li>
      </ul>
  );
}