import { NavLink, Outlet, useNavigate } from "react-router-dom";
import styles from './authLayout.module.css'
import cn from "classnames";
import { Button } from "~shared/ui/button";
import Icon from "~shared/ui/icon";
import BigLogo from '~assets/bigLogo.svg?react';
import { PAGE_PATH } from "~shared/config";

export function AuthLayout() {
  const navigate = useNavigate();

  return (
      <div className={styles.container}>
        <div className={cn('d-col-5', 'm-none', styles.leftPanel)}>
          <div className={styles.backBtn}>
            <Button variant='link' onClick={() => navigate(-1)}><Icon name={"arrow-left"}/>BACK</Button>
          </div>
          <div className={styles.bigLogo}>
            <NavLink to={ PAGE_PATH.root }><BigLogo /></NavLink>
          </div>
        </div>
        <div className={cn('d-col-7', 'm-col-12', styles.rightPanel)}>
          <Outlet/>
        </div>
      </div>
  )
}