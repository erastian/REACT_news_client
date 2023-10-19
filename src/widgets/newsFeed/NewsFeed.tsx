import styles from './news-feed.module.css'
import Card from "~entities/card";
import { Button } from "~shared/ui/button";
import { Spinner } from "~shared/ui/spinner";
import { articleApi } from "~entities/article";
import { FullPageWrapper } from '~shared/ui/fullPageWrapper'

type NewsFeedProps = {
  query: articleApi.GlobalFeedQuery;
}

export function NewsFeed(props: NewsFeedProps) {
  const { query } = props;

  const {
    data: articlesData,
    status,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  } = articleApi.useGlobalInfinityArticles(query);

  const pages = articlesData?.pages;
  const items = pages?.flatMap((data) => data) || [];


  if (status === 'loading') return <FullPageWrapper><Spinner/></FullPageWrapper>

  if (status === 'error')
    return <FullPageWrapper>{ error?.toString() }</FullPageWrapper>

  return (
      <div className={ styles.feedWrapper }>

        { status === 'success' ? items.map((article: articleApi.IArticle) => (
            <Card articleData={ article } key={ article.id }/>)) : 'No data' }

        <div className="flex-grid">
          <Button className='mx-auto mb-5' disabled={ !hasNextPage || isFetchingNextPage } variant="primary outline"
                  size="large" type="button" onClick={ fetchNextPage }>load more news</Button>
        </div>
      </div>
  );
}