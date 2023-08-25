import { NavLink } from "react-router-dom";

function TopMenu() {
  return (
      <ul className='top-menu'>
        <li>
          <NavLink to='/'>All</NavLink>
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

export default TopMenu;