import HotNews from "../components/HotNews/HotNews";
import NewsFeed from "../components/NewsFeed/NewsFeed";

function Homepage() {
  document.title = 'News Portal: Main page';
  return (
      <div className='container'>
        <HotNews />
        <NewsFeed />
</div>
)
  ;
}

export default Homepage;