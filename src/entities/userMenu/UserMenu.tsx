import { Button } from "~shared/ui/button";
import { PAGE_PATH } from "~shared/config";
import { Link } from "react-router-dom";

export function UserMenu() {
  return (
      <div className='user-menu'>
        <Link to={ PAGE_PATH.login }>
          <Button style='primary outline'>login</Button>
        </Link>
        <Link to={ PAGE_PATH.register }>
          <Button style='primary'>register</Button>
        </Link>
      </div>
  );
}