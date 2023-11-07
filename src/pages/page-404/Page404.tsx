import { NavLink } from "react-router-dom";
import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";

export function Page404() {
  useDocumentTitle('News Portal: Page not found');

  return (
      <FullPageWrapper>
        <h3 className="text-center mb-3">Error 404: Page Not Found</h3>
        <p className="text-center">Please, try <NavLink to='/'><u>starting from the beginning</u></NavLink>.</p>
      </FullPageWrapper>
  );
}
