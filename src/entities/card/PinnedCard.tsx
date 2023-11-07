import styles from "~entities/card/card.module.css";
import cn from "classnames";
import { IArticle } from "~entities/article";
import { Link } from "react-router-dom";

import { PAGE_PATH } from "~shared/config";
import ImgNotFound from "~assets/img-not-found.svg?react";
import Icon from "~shared/ui/icon";

type Props = {
  articleData: IArticle,
};

export function PinnedCard({ articleData }: Props) {
  return (
      <div className={ cn(styles.card, styles.pinned, 'd-col-3 m-col-6') }>
        <div className={ cn(styles.mainImage, 'd-col-12') }>
          <Link to={ PAGE_PATH.article.articleURL(articleData.url) }>
            { articleData.cover ? <img src={ articleData.cover } alt={articleData.title}/> : <ImgNotFound/> }
          </Link>
        </div>
        <div className={cn(styles.details, "d-col-12")}>
          <div className={ styles.info }>
              <span className={ styles.category }>
                <Link
                    to={ PAGE_PATH.category.categoryURL(articleData.category.url) }>{ articleData.category.title }</Link>
              </span>
            <div className={ styles.counters }>
                <span className={ styles.comments }>
                  <Icon name='messages'/>
                  { articleData._count.comments }
                </span>
              <span className={ styles.views }>
                  <Icon name='users'/>
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