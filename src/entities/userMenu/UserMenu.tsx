import styles from './user-menu.module.css'
import { Button } from "~shared/ui/button";
import { PAGE_PATH } from "~shared/config";
import { Link } from "react-router-dom";

export function UserMenu() {
  return (
      <div className={styles.userMenu}>
        <Link to={ PAGE_PATH.login }>
          <Button variant='outline'>LOGIN</Button>
        </Link>
        <Link to={ PAGE_PATH.register }>
          <Button variant='primary'>REGISTER</Button>
        </Link>
      </div>
  );
}