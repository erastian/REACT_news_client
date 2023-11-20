import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { Link } from "react-router-dom";
import { PAGE_PATH } from "~shared/config";

export function Register() {
  useDocumentTitle('News Portal: Register');

  return (
      <div className='d-col-7 m-auto'>
        <h3 className='mb-4 pb-2'>Registration</h3>
        <p className=''>Already have the account? <Link to={PAGE_PATH.login}>Login</Link></p>
      </div>
  )
}