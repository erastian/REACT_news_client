import HotNews from "../../widgets/HotNews";
import NewsFeed from "../../widgets/NewsFeed";

function HomePage() {
  document.title = 'News Portal: Main page';
  return (
      <div className='container'>
        <HotNews />
        <NewsFeed />
</div>
)
  ;
}

export default HomePage;