import { articleApi, IArticle } from "~entities/article";
import cn from 'classnames';

import { PinnedCard } from "~entities/card";
import styles from './hot-news.module.css'
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import { Spinner } from "~shared/ui/spinner";

export function HotNews() {
  const {data: pinnedArticlesData, status, error} = articleApi.usePinnedArticlesQuery();
  const items: IArticle[] = pinnedArticlesData?.data || [];

  if (status === 'pending') return <FullPageWrapper><Spinner/></FullPageWrapper>

  if (status === 'error')
    return <FullPageWrapper>{ error?.toString() }</FullPageWrapper>

  return (

      <div className={cn('flex-grid', styles.hotNews)}>

        { items.map((article: IArticle) => (
            <PinnedCard articleData={ article } key={ article.id }/>))}
      </div>
  );
}