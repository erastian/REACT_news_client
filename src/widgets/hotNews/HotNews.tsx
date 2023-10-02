import Card from "../../entities/card";
import styles from './hot-news.module.css'
import { Spinner } from "~shared/ui/spinner";

export function HotNews() {
  return (

      <div className={`${styles.hotNews} flex-grid`}>
        <Spinner />
      </div>
  );
}