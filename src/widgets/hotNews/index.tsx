import Card from "../../entities/card";
import styles from './styles.module.css'

function HotNews() {
  return (
      <div className={`${styles.hotNews} flex-grid`}>
        <Card pinned />
        <Card pinned />
        <Card pinned />
        <Card pinned />
      </div>
  );
}

export default HotNews;