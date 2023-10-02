import useDocumentTitle from "../../shared/document-title";
import { NavLink } from "react-router-dom";
import { FullPageWrapper } from "~shared/ui/fullPageWrapper";

export function Page404() {
  useDocumentTitle('News Portal: Page not found');

  return (
      <FullPageWrapper>
        <h3 className="text-center mb-3">Error 404: Page Not Found</h3>
        <p className="text-center">Please, try <NavLink style={{textDecoration: 'underline'}} to='/'>starting from the beginning</NavLink>.</p>
      </FullPageWrapper>
  );
}
