import HotNews from "~widgets/hotNews";
import NewsFeed from "~widgets/newsFeed";

import useDocumentTitle from "~shared/document-title";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";

export function HomePage() {
  useDocumentTitle('News Portal: Main page');
  return (
      <FullPageWrapper>
        <HotNews/>
        <NewsFeed/>
      </FullPageWrapper>
  );
}