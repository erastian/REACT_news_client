import { apiInstance } from "~shared/api/base.ts";
import { IArticle } from "~entities/article/api/articleApi.ts";

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  // cancelToken?: CancelToken;
}

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export type QueryParamsType = Record<string | number, object>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

type ArticleListQuery = {
  data: IArticle[];
};


export class Api {
  static articles = {
    getArticles: (
        query?: {
          offset?: number;
          limit?: number;
        },
        params: RequestParams = {}
    ) => {
      return apiInstance.get<ArticleListQuery>(`/articles?offset=${query?.offset}&limit=${query?.limit}`, {params})
    }
  }
}