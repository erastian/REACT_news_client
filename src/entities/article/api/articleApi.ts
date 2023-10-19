import { Api, RequestParams } from "~shared/api/Api.ts";
import { useInfiniteQuery } from "react-query";

export interface IArticle {
  id: string,
  isPublished: boolean,
  title: string,
  url: string,
  description: string,
  cover: string,
  image: string,
  articleBody: string,
  authorID: string,
  categoryID: string,
  createdAt: string,
  updatedAt: string,
  category: {
    id: string,
    title: string,
    url: string,
    createdAt: string,
    updatedAt: string,
  },
  _count: {
    comments: number,
  }
}

export function mapArticle(articleDto: IArticle): IArticle {
  const { ...article } = articleDto;
  return {
    ...article,
  };
}

export type GlobalFeedQuery = {
  offset: number;
  limit: number;
}

export const articleKeys = {
  articles: {
    root: [ 'articles' ],
    newsFeed: {
      root: () => [ ...articleKeys.articles.root, 'newsFeed' ],
      query: (query: GlobalFeedQuery) => [ ...articleKeys.articles.newsFeed.root(), query ]
    },
    hotNews: {
      root: () => [ ...articleKeys.articles.root, 'hotNews' ],
      query: (query: GlobalFeedQuery) => [ ...articleKeys.articles.hotNews.root(), query ]
    }
  },

  article: {
    root: [ 'article' ],
    query: (articleURL: string) => [ ...articleKeys.article.root, articleURL ],
  }
}

type UseInfinityArticlesProps = {
  queryKey: unknown[];
  queryFn: typeof Api.articles.getArticles;
  query: GlobalFeedQuery;
  params?: RequestParams;
}

const useInfinityArticles = (
    {
      queryKey,
      queryFn,
      query,
      params,
    }: UseInfinityArticlesProps) => {
  const { offset, limit } = query;

  return useInfiniteQuery<IArticle[], Error, IArticle[], unknown[]>({
    queryKey,

    queryFn: async ({ pageParam = offset }) => {
      const response = await queryFn({ ...query, offset: pageParam }, { ...params });

      return response.data.map(mapArticle);
    },

    getNextPageParam: (lastPage, pages) => {
      if (lastPage.length < limit) return null;

      const nextPageParam = lastPage.length ? pages.length * limit : null;

      return nextPageParam;
    }
  })
}

export const useGlobalInfinityArticles = (
    query: GlobalFeedQuery,
    params?: RequestParams
) => useInfinityArticles({
  queryKey: articleKeys.articles.newsFeed.query(query),
  queryFn: Api.articles.getArticles,
  query,
  params,
});