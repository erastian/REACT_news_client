import styles from './user-menu.module.css'
import { Button } from "~shared/ui/button";
import { PAGE_PATH } from "~shared/config";
import { Link } from "react-router-dom";

import { sessionApi } from "~entities/session";
import { useQueryClient } from "@tanstack/react-query";
import { logout } from "~features/session";
import { IUser } from "~shared/api";
import { sessionKeys } from "~entities/session/api/sessionApi.ts";
import { useRef, useState } from "react";
import Icon from "~shared/ui/icon";
import cn from "classnames";
import { useClickOutside } from "~shared/lib/useClickOutside";

export function UserMenu() {
  const queryClient = useQueryClient();
  sessionApi.useCurrentUser();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);

  const user = queryClient.getQueryData<IUser>(sessionKeys.session.currentUser())

  const logoutClick = async () => {
    await logout(queryClient);
    setIsLoggedIn(false);
  }

  const dropDownMenu = useRef(null);
  const btn = useRef(null);

  useClickOutside(dropDownMenu, () => setMenuOpen(false));


  return user ? (
      <div>
        <div className={ cn(styles.userMenu, menuOpen ? 'open' : '') } onClick={ () => setMenuOpen(!menuOpen) }
             ref={ btn }>
          <div className={ styles.circle }>
            <Icon name='user' size={ 24 }/>
          </div>
          { menuOpen ? <Icon name='arrow-up' size={ 24 }/> : <Icon name='arrow-down' size={ 24 }/> }

        </div>
        <div className={ cn(styles.menuDropdown, menuOpen ? 'open' : '') } ref={ dropDownMenu }>
          <Link to=''>
            <Button variant='link'>Create new article</Button>
          </Link>
          <Link to=''>
            <Button variant='link'>Create new category</Button>
          </Link>
          <Link to=''>
            <Button variant='link'>Credentials</Button>
          </Link>
          <Link to=''>
            <Button variant='link'>Unpublished articles</Button>
          </Link>
          <Link to=''>
            <Button variant='link'>Unpublished comments</Button>
          </Link>
          <Link to=''>
            <Button variant='link'>Restore password</Button>
          </Link>
          <div className={ styles.divider }></div>
          <div className={ styles.logoutButton }>
            <Button variant='link' onClick={ logoutClick }><Icon name='logout' size={ 24 }/> Logout</Button>
          </div>
        </div>
      </div>
  ) : (
      <div className={ styles.authButtons }>
        <Link to={ PAGE_PATH.login }>
          <Button variant='outline'>LOGIN</Button>
        </Link>
        <Link to={ PAGE_PATH.register }>
          <Button variant='primary'>REGISTER</Button>
        </Link>
      </div>
  );
}