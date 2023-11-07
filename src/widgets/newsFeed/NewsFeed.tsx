import styles from './news-feed.module.css'
import cn from "classnames";
import { articleApi, IArticle } from "~entities/article";

import { Card } from "~entities/card";
import { Button } from "~shared/ui/button";
import { Spinner } from "~shared/ui/spinner";
import { FullPageWrapper } from '~shared/ui/fullPageWrapper'


export function NewsFeed() {
  const initialQuery = { limit: 5, offset: 0 };

  const {
    data,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = articleApi.useInfinityArticles(initialQuery);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const pages = data?.pages;
  const items: IArticle[] = pages?.flatMap((data: IArticle[]) => data) || [];

  if (status === 'pending') return <FullPageWrapper><Spinner/></FullPageWrapper>

  if (status === 'error')
    return <FullPageWrapper>{ error?.toString() }</FullPageWrapper>

  return (
      <div className={ styles.feedWrapper }>

        { items.map((article: IArticle) => (
            <Card articleData={ article } key={ article.id }/>)) }

        <div className="flex-grid">
          <Button className={cn('mx-auto', 'mb-5')} disabled={ !hasNextPage || isFetchingNextPage } variant="outline"
                  size="lg" onClick={ fetchNextPage }>LOAD MORE NEWS</Button>
        </div>
      </div>
  );
}