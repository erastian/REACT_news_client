import styles from "./navigation.module.css";
import { categoriesApi } from "~entities/categories";
import { ICategory } from "~shared/api/models/types.ts";
import { categoriesKeys } from "~entities/categories/api/categoriesApi.ts";
import { Link } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";
import { useQueryClient } from "@tanstack/react-query";
import cn from "classnames";

interface IProps {
  orientation?: 'vertical' | undefined
}

export function Navigation(props: IProps) {
  const queryClient = useQueryClient();
  categoriesApi.useCategories();
  const categories = queryClient.getQueryData<ICategory[]>(categoriesKeys.categories.getCategories());

  return <div className={ cn(styles.topMenu, props.orientation ? styles.vertical : '') }>
    <Link to={ PAGE_PATH.categories }
          className={ location.pathname === '/' ? styles.active : '' }> All </Link>
    { categories && categories.map(category => (
        <Link to={ 'category/' + category.url } key={ category.id }>{ category.title }</Link>))
    }
  </div>
}