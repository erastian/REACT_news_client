import { useQuery } from "react-query";

import styles from './news-feed.module.css'
import Card from "~entities/card";
import { Button } from "~shared/ui/button";
import { Spinner } from "~shared/ui/spinner";
import { ArticleDTO } from "~shared/api/Api.ts";

// import { useInfiniteArticles } from "~widgets/newsFeed/api/feedApi.tsx";

export function NewsFeed() {
  const { isLoading, data: newsFeed, error } = useQuery({
    queryKey: [ 'newsFeed' ],
    queryFn: async () => {
      const res = await fetch('http://localhost:8000/articles')
      return res.json()
    }
  });

  if (isLoading) return <Spinner/>

  if (error)
    return (error.toString())

  return (
      <div className={ styles.feedWrapper }>
        { newsFeed.data.map((article: ArticleDTO) => (<Card articleData={ article } key={ article.id }/>)) }

        <div className="flex-grid">

          <Button style="primary outline mx-auto mb-5" size="large" type="button" onClick={ () => {
            console.log('btn pressed')
          } }>load more news</Button>
        </div>
      </div>
  );
}