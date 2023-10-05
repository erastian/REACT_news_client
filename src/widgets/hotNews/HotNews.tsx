import Card from "../../entities/card";
import styles from './hot-news.module.css'
// import { Spinner } from "~shared/ui/spinner";

export function HotNews() {
  const demoData = {
    id: 'asgag',
    title: 'adfgkunsdgoisd',
    description: 'sdfsdgsdgsdg',
    isPublished: true,
    url: 'soignsdogin',
    cover: '',
    image: '',
    articleBody: 'lorem',
    authorID: '1',
    categoryID: '',
    createdAt: '',
    updatedAt: '',
    category: {
      id: '234',
      title: 'adhadfhadfhadhf',
      url: 'afadsfgasgd',
      createdAt: 'adgadfgag',
      updatedAt: 'afwefwger'
    },
    _count: {
      comments: 2
    }
  }
  return (

      <div className={`${styles.hotNews} flex-grid`}>
        <Card articleData={demoData} pinned/>
        <Card articleData={demoData} pinned/>
        <Card articleData={demoData} pinned/>
        <Card articleData={demoData} pinned/>
      </div>
  );
}