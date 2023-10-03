import styles from './card.module.css';
import img from '../../assets/097fbdbabc0ee9f3a8783847b8e9e409.jpg'
import iconMessages from '../../assets/icons/messages.svg'
import iconUsers from '../../assets/icons/profile-2user.svg'
import { Link } from "react-router-dom";
import { PAGE_PATH } from "~shared/lib/router/paths.ts";
import { ArticleDTO } from "~shared/api/Api.ts";

type CardInterface = {
  articleData: ArticleDTO,
  pinned?: boolean
}

export function Card({ articleData, pinned = false }: CardInterface) {
  return (
      <div className={ `${ styles.card } ${ pinned ? `${ styles.pinned } d-col-3 m-col-6` : 'd-col-12 m-col-12' }` }>
        <div className={ `${ styles.mainImage } ${ pinned ? 'd-col-12' : 'd-col-3 m-col-6' }` }>
          <Link to={ PAGE_PATH.article.articleURL(articleData.url) }><img src={ img } alt="a"/></Link>
        </div>
        <div className={ `newsPreview ${ pinned ? 'd-col-12' : 'd-col-9 m-col-6' }` }>
          <div className="details">
              <span className="category">
                <Link
                    to={ PAGE_PATH.category.categoryURL(articleData.category.url) }>{ articleData.category.title }</Link>
              </span>
            <div className="counters">
                <span className="comments"><img src={ iconMessages }
                                                alt="icon"></img> { articleData._count.comments }</span>
              <span className="views"><img src={ iconUsers } alt="icon"></img> 500</span>
            </div>
          </div>
          <h3><Link to={ PAGE_PATH.article.articleURL(articleData.url) }>{ articleData.title }</Link></h3>
          <div className="description">{ articleData.description }</div>
        </div>
      </div>
  );
}