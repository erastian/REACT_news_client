import { useQuery } from "@tanstack/react-query";
import { ICategory } from "~shared/api/models/types.ts";
import { Api } from "~shared/api";

export const categoriesKeys = {
  categories: {
    root: ['categories'],
    getCategories: () => [...categoriesKeys.categories.root, 'categories']
  }
}

export const useCategories = () => {
  useQuery<ICategory[] | Error>({
    queryKey: categoriesKeys.categories.getCategories(),
    queryFn: Api.categories.getCategories
  })
}