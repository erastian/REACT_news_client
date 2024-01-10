import styles from './user-menu.module.css'
import { Button } from "~shared/ui/button";
import { PAGE_PATH } from "~shared/config";
import { Link } from "react-router-dom";

import { sessionApi } from "~entities/session";
import { useQueryClient } from "@tanstack/react-query";
import { logout } from "~features/session";
import { IUser } from "~shared/api";
import { sessionKeys } from "~entities/session/api/sessionApi.ts";

export function UserMenu() {
  const queryClient = useQueryClient();
  sessionApi.useCurrentUser();


  const user = queryClient.getQueryData<IUser>(sessionKeys.session.currentUser())

  const logoutClick = () => {
    logout(queryClient);
  }

  console.log(user)

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