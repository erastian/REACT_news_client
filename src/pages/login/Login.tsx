import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { LoginForm } from "~widgets/loginForm";

export function Login() {
  useDocumentTitle('News Portal: Login');


  return (
      <div className='d-col-7 m-auto'>
        <LoginForm />
      </div>
  )
}