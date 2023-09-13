import HotNews from "../../widgets/hotNews";
import NewsFeed from "../../widgets/newsFeed";

import useDocumentTitle from "../../shared/document-title";

function HomePage() {
  useDocumentTitle('News Portal: Main page');
  return (
      <div className='container'>
        <HotNews/>
        <NewsFeed/>
      </div>
  )
      ;
}

export default HomePage;