import styles from './card.module.css';
import ImgNotFound from '~assets/img-not-found.svg'
import { Link } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";
import { articleApi } from "~entities/article";
import Icon from "~shared/ui/icon";

type CardInterface = {
  articleData: articleApi.IArticle,
  pinned?: boolean
}

export function Card({ articleData, pinned = false }: CardInterface) {
  return (
      <div className={ `${ styles.card } ${ pinned ? `${ styles.pinned } d-col-3 m-col-6` : 'd-col-12 m-col-12' }` }>
        <div className={ `${ styles.mainImage } ${ pinned ? 'd-col-12' : 'd-col-3 m-col-6' }` }>
          <Link to={ PAGE_PATH.article.articleURL(articleData.url) }>
            <img src={ articleData.cover ? `${articleData.cover}` : `${ ImgNotFound }` } alt={ articleData.title} />
          </Link>
        </div>
        <div className={ `${ pinned ? 'd-col-12' : 'd-col-9 m-col-6' }` }>
          <div className={ styles.details }>
              <span className={ styles.category }>
                <Link
                    to={ PAGE_PATH.category.categoryURL(articleData.category.url) }>{ articleData.category.title }</Link>
              </span>
            <div className={ styles.counters }>
                <span className={ styles.comments }>
                  <Icon name='messages' />
                  { articleData._count.comments }
                </span>
                <span className={ styles.views }>
                  <Icon name='users' />
                  500
                </span>
            </div>
          </div>
          <h3><Link to={ PAGE_PATH.article.articleURL(articleData.url) }>{ articleData.title }</Link></h3>
          <div className={ styles.description }>{ articleData.description }</div>
        </div>
      </div>
  );
}