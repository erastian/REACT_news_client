import useDocumentTitle from "~shared/lib/useDocumentTitle";
import { LoginForm } from "~widgets/loginForm";
import useAuth from "~features/session";

export function Login() {
  useDocumentTitle('News Portal: Login');

  const { Login } = useAuth();

  return (
      <div className='d-col-7 m-auto'>
        <LoginForm login={Login}/>
      </div>
  )
}