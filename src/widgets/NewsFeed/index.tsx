import Card from "../../entities/Card";
import Button from "../../shared/button/Button";

function NewsFeed() {
  return (
      <>
        <Card />
        <Card />
        <Card />
        <Button style="primary outline mx-auto" size="large" type="button" onClick={ () => {
          console.log('btn pressed')
        } }>load more news</Button>
      </>
  );
}

export default NewsFeed;