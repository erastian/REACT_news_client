import { Api } from "~shared/api/Api.ts";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { IArticle } from "./types";

export function mapArticle(articleDto: IArticle): IArticle {
  const { ...article } = articleDto;
  return {
    ...article,
  };
}

export type GlobalFeedQuery = {
  offset?: number;
  limit?: number;
};

export const articleKeys = {
  articles: {
    root: ["articles"],
    newsFeed: {
      root: () => [...articleKeys.articles.root, "newsFeed"],
      query: (query: GlobalFeedQuery) => [
        ...articleKeys.articles.newsFeed.root(),
        query,
      ],
    },
    hotNews: {
      root: () => [...articleKeys.articles.root, "hotNews"],
      query: () => [...articleKeys.articles.hotNews.root()],
    },
  },

  article: {
    root: ["article"],
    articleURL: (articleURL: string) => [
      ...articleKeys.article.root,
      articleURL,
    ],
  },
};

const DEFAULT_LIMIT = 10;
export const useInfinityArticles = (query: GlobalFeedQuery) => {
  return useInfiniteQuery({
    queryKey: articleKeys.articles.newsFeed.root(),
    queryFn: async ({ pageParam }) => {
      const offset = Number(pageParam);

      const response = await Api.articles.getArticles({
        ...query,
        offset,
      });

      return response.data.map(mapArticle);
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      const limit = query.limit || DEFAULT_LIMIT;
      if (lastPage.length < limit) return null;

      return pages.length * limit;
    },
  });
};

export const usePinnedArticlesQuery = () =>
  useQuery({
    queryKey: articleKeys.articles.hotNews.root(),
    queryFn: Api.articles.getPinnedArticles,
  });

export const useArticle = (articleURL: string) =>
  useQuery<IArticle, Error, IArticle, string[]>({
    queryKey: articleKeys.article.articleURL(articleURL),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    queryFn: async (): Promise<IArticle | unknown> => {
      return await Api.articles.getArticle(articleURL);
    },
  });
