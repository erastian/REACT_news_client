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
import Navigation from "~entities/navigation";

export function UserMenu() {
  const queryClient = useQueryClient();
  sessionApi.useCurrentUser();

  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ user, setUser ] = useState<IUser | undefined>(undefined);


  if (!user && queryClient.getQueryData(sessionKeys.session.currentUser())) {
    setUser(queryClient.getQueryData(sessionKeys.session.currentUser()))
  }

  const logoutClick = async () => {
    await logout(queryClient);
    setUser(undefined)
  }

  const toggleMenu = () => {
    setMenuOpen((menuOpen) => !menuOpen)
  }

  const dropDownMenu = useRef(null);
  const btn = useRef(null);

  useClickOutside(dropDownMenu, () => setMenuOpen(false), btn);


  return <>
    <div className={ styles.mobileMenu }>
      { menuOpen && <div className={ styles.overlay } onClick={ () => setMenuOpen(false) }></div> }
      <div className={ styles.mobileBtn } onClick={ () => setMenuOpen(true) } ref={ btn }>
        <Icon name='menu' size={ 32 }/>
      </div>
      <div className={ cn(styles.sideSlider, menuOpen ? styles.open : '') } ref={ dropDownMenu }>
        <div className={ styles.closeBtn } onClick={ () => setMenuOpen(false) }>
          <Icon name='cancel' size={ 32 }/>
        </div>
        <Navigation orientation='vertical'/>
        <div className={ styles.divider }></div>

        { user ? <>
          <div className={ styles.userLinks }>
            <Link to=''>Create new article</Link>
            <Link to=''>Create new category</Link>
            <Link to=''>Credentials</Link>
            <Link to=''>Unpublished articles</Link>
            <Link to=''>Unpublished comments</Link>
            <div className={ styles.divider }></div>
            <Link to=''>Restore password</Link>
          </div>
          <div className={ styles.logoutButton }>
            <Button variant='link' onClick={ logoutClick }><Icon name='logout' size={ 24 }/> Logout</Button>
          </div>
        </> : <div className={ styles.authButtons }>
          <Link to={ PAGE_PATH.login }>
            <Button variant='link'>LOGIN</Button>
          </Link>
          <Link to={ PAGE_PATH.register }>
            <Button variant='link'>REGISTER</Button>
          </Link>
        </div>
        }
      </div>
    </div>

    <div className={ styles.menu }>
      <Navigation/>

      { user ? (
          <div>
            <div className={ cn(styles.userMenu, menuOpen ? styles.open : '') } onClick={ toggleMenu }
                 ref={ btn }>
              <div className={ styles.circle }>
                <Icon name='user' size={ 24 }/>
              </div>
              { menuOpen ? <Icon name='arrow-up' size={ 24 }/> : <Icon name='arrow-down' size={ 24 }/> }

            </div>
            <div className={ cn(styles.menuDropdown, menuOpen ? styles.open : '') } ref={ dropDownMenu }>
              <Link to=''>Create new article</Link>
              <Link to=''>Create new category</Link>
              <Link to=''>Credentials</Link>
              <Link to=''>Unpublished articles</Link>
              <Link to=''>Unpublished comments</Link>
              <Link to=''>Restore password</Link>
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
      )
      }
    </div>
  </>
}