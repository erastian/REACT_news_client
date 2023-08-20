import Card from "../Card/Card";
import styles from './HotNews.module.css'

function HotNews() {
  return (
      <div className={`${styles.hotNews} flex-grid`}>
        <Card pinned={true}/>
        <Card pinned={true}/>
        <Card pinned={true}/>
        <Card pinned={true}/>
      </div>
  );
}

export default HotNews;