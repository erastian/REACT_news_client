import { articleApi, ArticleControls, IArticle } from "~entities/article";
import styles from './article.module.css'

import { FullPageWrapper } from "~shared/ui/fullPageWrapper";
import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { Spinner } from "~shared/ui/spinner";
import { useParams } from "react-router-dom";
import ImgNotFoundWide from '~assets/img-not-found-wide.svg'


export function Article() {
  const { articleURL } = useParams();
  const { data: article, status, error } = articleApi.useArticle(articleURL!);

  useDocumentTitle(`News Portal: ${ article?.title } `);


  if (status === 'pending') return <FullPageWrapper><Spinner/></FullPageWrapper>

  if (status === 'error')
    return <FullPageWrapper>{ error?.toString() }</FullPageWrapper>

  const { id, title, articleBody, isPublished, image, url, _count: { comments } }: IArticle = article;


  return (
      <FullPageWrapper>
        <ArticleControls isPublished={ isPublished } url={ url }/>
        <div className={ styles.article }>
          <img src={ image ? `${ image }` : `${ ImgNotFoundWide }` } alt={ title }/>
          <h3>{ title }</h3>
          <div className={ styles.articleBody }>
            { articleBody }
          </div>
        </div>
        <div className="mt-5">
          { `${ comments } comments for ${ id } article` }
        </div>
      </FullPageWrapper>
  );
}
