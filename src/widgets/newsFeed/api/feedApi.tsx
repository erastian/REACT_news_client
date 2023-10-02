import { useInfiniteQuery } from "react-query";


type useInfiniteArticlesProps = {
  queryKey: unknown[],
  queryFn: unknown,
  query: unknown,
  params?: unknown
}


const useInfiniteArticles = ({
                               queryKey,
                               queryFn,
                               query,
                               params
                             }: useInfiniteArticlesProps) => {
  const { offset, limit } = query;

  return useInfiniteQuery<Article[]>({
    queryKey, queryFn: async ({ pageParam = offset }) => {
      const response = await queryFn(
          { ...query, offset: pageParam },
          { ...params }
      );

      return response.data.articles.map(mapArticle);
    }
  })

}


export const useInfiniteArticlesFeed = {
  queryKey: 'ArticlesFeed',
  queryFn: async () => {
    const responce = await fetch('http://localhost:8000/articles')
    return await responce.json()
  }
}