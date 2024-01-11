import ApiInstance from "~shared/api/base.ts";
import { IArticle } from "~entities/article/";
import { ICredentials, IUser } from "~shared/api";
import { INewUser } from "~shared/api/models/types.ts";

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
      const { data } = await ApiInstance.get<IArticle>(`/articles/${ ArticleURL }`)
      return data;
    }
  };
  static users = {
    login: async (user: ICredentials) => {
      const { data } = await ApiInstance.post('/auth/login', user);
      return data;
    },
    getCurrentUser: async () => {
      const { data } = await ApiInstance.get<{ user: IUser }>('/users/profile');
      return data;
    },
    fetchToken: async () => {
      const { data } = await ApiInstance.get<{ accessToken: string }>('/auth/token');
      return data;
    },
    register: async (userData: INewUser) => {
      const { data } = await ApiInstance.post('/auth/register', userData);
      return data;
    },
    logout: async () => {
      const { data } = await ApiInstance.get('/auth/logout');
      return data
    }
  }
}