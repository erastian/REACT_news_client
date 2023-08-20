import Card from "../Card/Card";
import Button from "../../ui/button/Button";

function NewsFeed() {
  return (
      <>
        <Card/>
        <Card/>
        <Card/>
        <Button style="primary outline mx-auto" size="large" type="button" onClick={ () => {
          console.log('btn pressed')
        } }>load more news</Button>
      </>
  );
}

export default NewsFeed;