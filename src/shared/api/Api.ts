import { UseApi, UsePrivateApi } from "~shared/api/";
import { IArticle } from "~entities/article/";
import { ICredentials, IUser } from "~shared/api";
import { ICategory, INewUser } from "~shared/api/models/types.ts";

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
      const { data } = await UseApi().get<IArticleListData<IArticle>>(`/articles?offset=${ query?.offset }&limit=${ query?.limit }`);
      return data;
    },
    getPinnedArticles: async () => {
      const { data } = await UseApi().get<IArticleListData<IArticle>>(`/articles?pinned=true`);
      return data;
    },
    getArticle: async (ArticleURL: string) => {
      const { data } = await UseApi().get<IArticle>(`/articles/${ ArticleURL }`)
      return data;
    }
  };
  static users = {
    login: async (user: ICredentials) => {
      const { data } = await UseApi().post('/auth/login', user);
      return data;
    },
    getCurrentUser: async () => {
      const { data } = await UsePrivateApi().get<{ user: IUser }>('/users/profile');
      return data;
    },
    fetchToken: async () => {
      const { data } = await UseApi().get<{ accessToken: string }>('/auth/token');
      localStorage.setItem('accessToken', data.accessToken)
    },
    register: async (userData: INewUser) => {
      const { data } = await UseApi().post('/auth/register', userData);
      return data;
    },
    logout: async () => {
      const { data } = await UsePrivateApi().get('/auth/logout');
      return data
    }
  };
  static categories = {
    getCategories: async () => {
      const { data } = await UseApi().get<ICategory[]>(`/category`)
      return data;
    }
  }
}