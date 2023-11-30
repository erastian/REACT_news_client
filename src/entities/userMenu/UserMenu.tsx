import styles from './user-menu.module.css'
import { Button } from "~shared/ui/button";
import { PAGE_PATH } from "~shared/config";
import { Link } from "react-router-dom";

import { sessionModel } from "~entities/session";
import { useQueryClient } from "@tanstack/react-query";
import { logout } from "~features/session";

export function UserMenu() {
  const user = sessionModel.useCurrentUser();

  const queryClient = useQueryClient();
  const logoutClick = () => logout(queryClient);

  return user ? (
      <div>
        <Button variant='outline' onClick={ logoutClick }>LOGOUT</Button>
      </div>
  ) : (
      <div className={ styles.userMenu }>
        <Link to={ PAGE_PATH.login }>
          <Button variant='outline'>LOGIN</Button>
        </Link>
        <Link to={ PAGE_PATH.register }>
          <Button variant='primary'>REGISTER</Button>
        </Link>
      </div>
  );
}