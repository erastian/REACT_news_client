import ApiInstance from "~shared/api/base.ts";
import { IArticle } from "~entities/article/";

export interface IArticleListData<T> {
  limit: number;
  offset: number;
  count: number;
  data: T[];
}


export class Api {
  static articles = {
    getArticles: async (
        query?: {
          offset?: number;
          limit?: number;
        },
    ) => {
      const { data } = await ApiInstance.get<IArticleListData<IArticle>>(`/articles?offset=${ query?.offset }&limit=${ query?.limit }`);
      return data;
    },
    getPinnedArticles: async () => {
      const { data } = await ApiInstance.get<IArticleListData<IArticle>>(`/articles?pinned=true`);
      return data;
    },
    getArticle: async (ArticleURL: string) => {
      const { data } = await ApiInstance.get(`/articles/${ ArticleURL }`)
      return data;
    }
  }
}